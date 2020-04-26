import { client } from '../gatsby-theme-apollo/client';
export const isBrowser = () => typeof window !== 'undefined';

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('ffrUserToken')
    ? window.localStorage.getItem('ffrUserToken')
    : '';

const setUserToken = token => window.localStorage.setItem('ffrUserToken', token);

const setUserProfile = ({ userName, email, role }) => {
  window.localStorage.setItem('ffrUserName', userName);
  window.localStorage.setItem('ffrEmail', email);
  window.localStorage.setItem('ffrRole', role);
}

export const handleLogin = (response) => {
  setUserToken(response.token);
  setUserProfile(response.profile)
};

export const isLoggedIn = () => {
  const token = getUser();
  return !!token;
};

export const logout = callback => {
  setUserToken('');
  client.cache.reset();
  callback();
};
