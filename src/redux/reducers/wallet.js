// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { OTHERS_INFORMATIONS, RECEIVE_ISS_LOCATION, DELETE_INFO } from '../actions';

const INICIAL_STATE_WALLET = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const walletReducer = (state = INICIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case OTHERS_INFORMATIONS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case RECEIVE_ISS_LOCATION:
    return {
      ...state,
      currencies: action.payload,
    };
  case DELETE_INFO: {
    const updatedInfo = state.expenses.filter((item) => item.id !== action.payload);
    return {
      ...state,
      expenses: updatedInfo,
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
