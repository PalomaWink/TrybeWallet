// Coloque aqui suas actions
import getFetchAPI from '../../services/fetchAPI';

export const ADD_REGISTER = 'LOGIN';
export const OTHERS_INFORMATIONS = 'OTHERS_INFORMATIONS';
export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION';
export const DELETE_INFO = 'DELETE_INFO';
export const UPDATE_INFOS = 'UPDATE_INFOS';
export const CONCLUSION_EDIT = 'CONCLUSION_EDIT';

export const AddRegister = (email) => ({
  type: ADD_REGISTER,
  email,
});

export const othersInformations = (infos) => ({
  type: OTHERS_INFORMATIONS,
  payload: infos,
});

export const deleteInfo = (infoId) => ({
  type: DELETE_INFO,
  payload: infoId,
});

export const updateInfos = (infosId) => ({
  type: UPDATE_INFOS,
  payload: infosId,
});

export const conclusionEdit = (expenses) => ({
  type: CONCLUSION_EDIT,
  payload: expenses,
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
