import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';
import App from '../App';
import Wallet from '../pages/Wallet';

// Verificar os campos ok
// Verificar a atualizacao do valor no header
// Verifica se a tabela e alimentada corretamente
// Verifica se ao clicar em Editar os valores voltam para os campos e a tabela e atualizada
// Verifica se ao clicar em Excluir aquela linha da tabela some e o valor do header e atualizado

beforeEach(() => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
});

afterEach(jest.restoreAllMocks);

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
  const expenseOne = {
    id: 0,
    valor: 70.00,
    descricao: 'Calça jeans',
    moeda: 'USD',
    metodoPagamento: 'Dinheiro',
    tag: 'Alimentação',
    nomeMoeda: mockData.USD.name,
    cambioUtilizado: mockData.USD.ask,
    valorConvertido: 332.71,
    moedaConversao: 'Real',
  };

  renderWithRouterAndRedux(<Wallet />);
  // Aqui eu sigo adicionando as despesas e testando o botao para verificar se esta tudo funcionando
  const value = screen.getByRole('spinbutton', { name: /valor:/i });
  const description = screen.getByRole('textbox', { name: /descrição:/i });
  const button = screen.getByRole('button', { name: /adicionar despesa/i });

  userEvent.type(value, expenseOne.valor);
  userEvent.type(description, expenseOne.descricao);

  act(() => userEvent.click(button));

  screen.getByText(expenseOne.valor);
  screen.getByText(expenseOne.descricao);
  screen.getByText(expenseOne.moeda);
  screen.getByText(expenseOne.metodoPagamento);
  screen.getByText(expenseOne.tag);
  await waitFor(() => {
    expect(expenseOne.nomeMoeda).toBeInTheDocument();
  });
});

/* test('Verifica se a tabela e alimentada corretamente ao adicionarmos uma despesa', () => {

});

test('Verifica se ao clicar no botao de editar despesa as informacoes voltam para os inputs e o seu valor e atualizado na tabela', () => {

});

test('Verifica se ao clicar no botao de excluir, o item some da lista e o header seja atualizado', () => {

}); */
