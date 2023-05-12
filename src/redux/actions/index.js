// Coloque aqui suas actions
import getFetchAPI from '../../services/fetchAPI';

export const ADD_REGISTER = 'LOGIN';
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION';

export const AddRegister = (email) => ({
  type: ADD_REGISTER,
  email,
});

/* export const requestIssLocation = () => ({
  type: REQUEST_ISS_LOCATION,
});

export const receiveIssLocationSuccess = (value) => ({
  type: RECEIVE_ISS_LOCATION,
  payload: value,
}); */

export const actionFetchAPI = () => {
  const getCurrences = async (dispatch) => {
    dispatch(requestIssLocation());
    await getFetchAPI();
    dispatch(receiveIssLocationSuccess());
  };
  getCurrences();
};
