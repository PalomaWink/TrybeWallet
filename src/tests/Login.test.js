import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';

test('Verifica se a tela de login e renderizada corretamente', () => {
  renderWithRouterAndRedux(<Login />);

  screen.getByText(/e-mail/i);
  screen.getByRole('textbox', { name: /e-mail/i });
  screen.getByText(/senha/i);
  screen.getByText(/senha/i);
  screen.getByRole('button', { name: /entrar/i });
});

test('Verifica se as validações do formulario estão funcionando corretamente', () => {
  renderWithRouterAndRedux(<Login />);

  const emailWrong = 'teste:@teste.com';
  const passwordWrong = '1234';
  const button = screen.getByRole('button', { name: /entrar/i });

  userEvent.type(screen.getByRole('textbox', { name: /e-mail/i }), emailWrong);
  userEvent.type(screen.getByText(/senha/i), passwordWrong);

  expect(button).toBeDisabled();
});

test('Verifica se o botão é habilitado apos validar as informações de login', () => {
  renderWithRouterAndRedux(<Login />);

  const emailRigth = 'teste@teste.com';
  const passwordRigth = '123456';
  const button = screen.getByRole('button', { name: /entrar/i });

  userEvent.type(screen.getByRole('textbox', { name: /e-mail/i }), emailRigth);
  userEvent.type(screen.getByText(/senha/i), passwordRigth);

  expect(button).not.toBeDisabled();
});

test('Verifica se ao logar, o usuario e redirecionado para a pagina da carteira', () => {
  const { history } = renderWithRouterAndRedux(<App />);
  const emailRigth = 'teste@teste.com';
  const passwordRigth = '123456';
  const button = screen.getByRole('button', { name: /entrar/i });

  userEvent.type(screen.getByRole('textbox', { name: /e-mail/i }), emailRigth);
  userEvent.type(screen.getByText(/senha/i), passwordRigth);

  act(() => userEvent.click(button));

  const { pathname } = history.location;
  expect(pathname).toBe('/carteira');
});
