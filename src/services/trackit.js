import axios from 'axios';

const URL_BASE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postCadastrar(cadastro) {
  const promise = axios.post(`${URL_BASE}/auth/sign-up`, cadastro);
  return promise;
};

function postLogin(login) {
  const promise = axios.post(`${URL_BASE}/auth/login`, login);
  return promise;
};

function Header() {
  const autenticador = JSON.parse(localStorage.getItem('trackit'));
  const config = {
    headers: { Authorization: `Bearer ${autenticador.token}` }
  };
  return config;
};

function getHabitosHoje() {
  const config = Header();
  const promise = axios.get(`${URL_BASE}/habits/today`, config);
  return promise;
};

function marcarHabito(id_habito) {
  const config = Header();
  const promise = axios.post(`${URL_BASE}/habits/${id_habito}/check`, '', config);
  return promise;
};

function desmarcarHabito(id_habito) {
  const config = Header();
  const promise = axios.post(`${URL_BASE}/habits/${id_habito}/uncheck`, '', config);
  return promise;
};

function getListaHabitos() {
  const config = Header();
  const promise = axios.get(`${URL_BASE}/habits`, config);
  return promise;
};

function postHabitoNovo(body) {
  const config = Header();
  const promise = axios.post(`${URL_BASE}/habits`, body, config);
  return promise;
};

function postDeletar(id_habito) {
  const config = Header();
  const promise = axios.delete(`${URL_BASE}/habits/${id_habito}`, config);
  return promise;
};

function getHistoricoHabitos() {
  const config = Header();
  const promise = axios.get(`${URL_BASE}/habits/history/daily`, config);
  return promise;
};

export { postCadastrar, postLogin, getHabitosHoje, marcarHabito, desmarcarHabito, getListaHabitos, postHabitoNovo, postDeletar, getHistoricoHabitos};