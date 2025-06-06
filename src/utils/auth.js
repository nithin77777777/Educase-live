// src/utils/auth.js
export const login = (email, password) => {
  if (email === 'user@educase.com' && password === 'educase123') {
    localStorage.setItem('isAuthenticated', 'true');
    return true;
  }
  return false;
};

export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
};