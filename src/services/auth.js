export const TOKEN_KEY = "@findev-Token";
export const ACCOUNT = "@findev-account";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ACCOUNT);
};

export const setAccount = account => {
  localStorage.setItem(ACCOUNT, JSON.stringify(account));
}
export const getAccount = () => JSON.parse(localStorage.getItem(ACCOUNT));