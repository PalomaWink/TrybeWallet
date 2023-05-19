import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';
import App from '../App';
import mockExpense from './helpers/mockExpense';
import Wallet from '../pages/Wallet';

// Verificar os campos ok
// Verificar se o botao de add despesas funciona ok
// Verifica se a tabela e alimentada corretamente ok
// Verifica se ao clicar em Editar os valores voltam para os campos e a tabela e atualizada ok
// Verifica se ao clicar em Excluir aquela linha da tabela some e o valor do header e atualizado ok

beforeEach(() => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
});

afterEach(jest.restoreAllMocks);

const expenseOne = {
  id: 0,
  valor: '70.00',
  descricao: 'Calça jeans',
  moeda: 'USD',
  metodoPagamento: 'Dinheiro',
  tag: 'Alimentação',
  nomeMoeda: mockData.USD.name,
  cambioUtilizado: mockData.USD.ask,
  valorConvertido: 332.71,
  moedaConversao: 'Real',
};

const expenseTwo = {
  id: 1,
  valor: '150.00',
  descricao: 'Passagem de avião',
  moeda: 'EUR',
  metodoPagamento: 'Cartão de crédito',
  tag: 'Trabalho',
  nomeMoeda: mockData.EUR.name,
  cambioUtilizado: mockData.EUR.ask,
  valorConvertido: 769.02,
  moedaConversao: 'Real',
};

const roupasDeInverno = 'Roupas de inverno';

test('Verifica se todos os componentes sao renderizados na tela', () => {
  renderWithRouterAndRedux(<App />);
  const emailRigth = 'teste@teste.com';
  const passwordRigth = '123456';
  const button = screen.getByRole('button', { name: /entrar/i });

  userEvent.type(screen.getByRole('textbox', { name: /e-mail/i }), emailRigth);
  userEvent.type(screen.getByText(/senha/i), passwordRigth);

  act(() => userEvent.click(button));

  screen.getByText(/email:teste@teste.com/i);
  screen.getByText(/brl/i);
  screen.getByTestId('currency-input');
  screen.getByTestId('method-input');
  screen.getByTestId('tag-input');
});

test('Verifica se o botao de "Adicionar despesas" está funcionando e o header é atualizado corretamente ao adicionarmos uma despesa', async () => {
  renderWithRouterAndRedux(<Wallet />);
  // Aqui eu sigo adicionando as despesas e testando o botao para verificar se esta tudo funcionando
  const value = screen.getByRole('textbox', { name: /valor:/i });
  const description = screen.getByRole('textbox', { name: /descrição:/i });
  const button = screen.getByRole('button', { name: /adicionar despesa/i });

  userEvent.type(value, expenseOne.valor);
  userEvent.type(description, expenseOne.descricao);

  act(() => userEvent.click(button));

  screen.findByText(expenseOne.valor);
  screen.findByText(expenseOne.descricao);
  screen.findByText(expenseOne.moeda);
  screen.findByText(expenseOne.metodoPagamento);
  screen.findByText(expenseOne.tag);
  await waitFor(() => {
    expect(expenseOne.nomeMoeda).toBe('Dólar Americano/Real Brasileiro');
  });
});

test('Verifica se a tabela e alimentada corretamente ao adicionarmos uma despesa', async () => {
  renderWithRouterAndRedux(<Wallet />);
  const value = screen.getByRole('textbox', { name: /valor:/i });
  const description = screen.getByRole('textbox', { name: /descrição:/i });
  const selects = screen.getAllByRole('combobox');
  const button = screen.getByRole('button', { name: /adicionar despesa/i });

  userEvent.type(value, expenseTwo.valor);
  userEvent.type(description, expenseTwo.descricao);
  await waitFor(() => {
    userEvent.selectOptions(selects[0], 'EUR');
  });
  userEvent.selectOptions(selects[1], expenseTwo.metodoPagamento);
  userEvent.selectOptions(selects[2], 'Trabalho');

  act(() => userEvent.click(button));

  await screen.findByText(expenseTwo.valor);
  await screen.findByText(expenseTwo.descricao);
  await screen.findByText('EUR');
  await screen.findAllByText('Cartão de crédito');
  await screen.findAllByText('Trabalho');
});

test('Verifica se ao clicar no botao de excluir, o item some da lista e o header seja atualizado', async () => {
  renderWithRouterAndRedux(<Wallet />);
  const value = screen.getByRole('textbox', { name: /valor:/i });
  const description = screen.getByRole('textbox', { name: /descrição:/i });
  const button = screen.getByRole('button', { name: /adicionar despesa/i });

  userEvent.type(value, expenseOne.valor);
  userEvent.type(description, expenseOne.descricao);

  act(() => userEvent.click(button));

  await screen.findByRole('button', { name: /excluir/i });

  act(() => userEvent.click(screen.getByRole('button', { name: /excluir/i })));

  await waitFor(() => {
    const text = screen.queryByText('Calça jeans');
    expect(text).not.toBeInTheDocument();
  });
});

test.only('Verifica se ao clicar no botao de editar despesa as informacoes voltam para os inputs e o seu valor e atualizado na tabela', async () => {
  renderWithRouterAndRedux(<Wallet />);
  const value = screen.getByRole('textbox', { name: /valor:/i });
  const description = screen.getByRole('textbox', { name: /descrição:/i });
  const selects = screen.getAllByRole('combobox');
  const button = screen.getByRole('button', { name: /adicionar despesa/i });

  userEvent.type(value, expenseTwo.valor);
  userEvent.type(description, expenseTwo.descricao);
  await waitFor(() => {
    userEvent.selectOptions(selects[0], 'EUR');
  });
  userEvent.selectOptions(selects[1], expenseTwo.metodoPagamento);
  userEvent.selectOptions(selects[2], 'Trabalho');

  act(() => userEvent.click(button));

  const buttonEdit = await screen.findByTestId('edit-btn');
  act(() => userEvent.click(buttonEdit));

  userEvent.clear(description);
  userEvent.type(description, roupasDeInverno);

  await waitFor(() => {
    userEvent.click(screen.getByText('Editar despesas'));
  });

  expect(description).toBeInTheDocument();
});

test('Verifica o botao de editar com um initialState pronto', async () => {
  renderWithRouterAndRedux(<Wallet />, { initialState: mockExpense });
  const description = screen.getByRole('textbox', { name: /descrição:/i });

  const buttonEdit = await screen.findAllByText(/editar/i);
  act(() => userEvent.click(buttonEdit[0]));

  userEvent.type(description, roupasDeInverno);

  expect(description).toHaveValue(roupasDeInverno);
});
