const getAPI = 'https://economia.awesomeapi.com.br/json/all';

const getFetchAPI = async () => {
  const response = await fetch(getAPI);
  const responseJSON = await response.json();
  return responseJSON;
};

export default getFetchAPI;
