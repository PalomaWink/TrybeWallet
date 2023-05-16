import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

// Verificar os campos
// Verificar a atualizacao do valor no header
// Verifica o preenchimento dos inputs
// Verifica a atualizacao do estado global

test('Verifica se todos os componentes sao renderizados na tela', () => {
  renderWithRouterAndRedux(<App />);
  const emailRigth = 'teste@teste.com';
  const passwordRigth = '123456';
  const button = screen.getByRole('button', { name: /entrar/i });

  userEvent.type(screen.getByRole('textbox', { name: /e-mail/i }), emailRigth);
  userEvent.type(screen.getByText(/senha/i), passwordRigth);

  act(() => userEvent.click(button));

  screen.getByText(/email:teste@teste.com/i);
  screen.getByText(/despesa total: r\$0\.00/i);
  screen.getByText(/brl/i);
  screen.getByRole('textbox', { name: /valor:/i });
  screen.getByRole('textbox', { name: /descrição:/i });
  screen.getByRole('button', { name: /adicionar despesa/i });
});
