import store from '../store';

const TOKEN = 'token';
const STATE = 'state';

export const addTokenInStorage = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const getTokenFromStorage = () => {
  if (localStorage[TOKEN]) return localStorage[TOKEN];
  return '';
};

export const getUserInfo = () => {
  if (localStorage[STATE]) return localStorage[STATE];
  return {};
};

export const saveScoreInStorage = (assertions = 0, score = 0) => {
  const { user: { name, email } } = store.getState();
  localStorage.setItem(STATE, JSON.stringify({
    player: { name, email, assertions, score },
  }));
};
