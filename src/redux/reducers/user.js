// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_REGISTER } from '../actions';

const INICIAL_STATE_USER = {
  email: '',
};

const userReducer = (state = INICIAL_STATE_USER, action) => {
  switch (action.type) {
  case ADD_REGISTER:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default userReducer;
