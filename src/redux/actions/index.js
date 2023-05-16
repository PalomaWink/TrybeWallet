// Coloque aqui suas actions
import getFetchAPI from '../../services/fetchAPI';

export const ADD_REGISTER = 'LOGIN';
export const OTHERS_INFORMATIONS = 'OTHERS_INFORMATIONS';
export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION';

export const AddRegister = (email) => ({
  type: ADD_REGISTER,
  email,
});

export const othersInformations = (infos) => ({
  type: OTHERS_INFORMATIONS,
  payload: infos,
});

export const receiveIssLocationSuccess = (currencies) => ({
  type: RECEIVE_ISS_LOCATION,
  payload: currencies,
});

export const actionFetchAPI = () => async (dispatch) => {
  const result = await getFetchAPI();
  const currenci = Object.keys(result).filter((cur) => cur !== 'USDT');
  dispatch(receiveIssLocationSuccess(currenci));
};
