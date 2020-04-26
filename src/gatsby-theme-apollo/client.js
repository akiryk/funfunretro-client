import fetch from 'isomorphic-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';

const httpLink = new HttpLink({
  uri: 'https://us-east1-funfunretro-97a35.cloudfunctions.net/api/',
  fetch,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('ffrUser');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
