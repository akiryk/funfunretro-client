import React from 'react';
import { navigate } from 'gatsby';
import { handleLogin, isLoggedIn } from '../services/auth';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const DO_LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      id
      token
      message
      profile {
        userName
        email
        role
      }
    }
  }
`;

const Login = () => {
  const [doLogin, loginResponse] = useMutation(DO_LOGIN);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSubmit = e => {
    e.preventDefault();
    doLogin({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };

  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  if (loginResponse.loading) {
    return <p>Gee... loading?</p>;
  }
  if (loginResponse.error) {
    return <p>ERROR!!!!!</p>;
  }
  if (loginResponse.data) {
    handleLogin(loginResponse.data.login);
    navigate(`/app/board`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="email"
        placeholder="email"
        name="email"
        id="email"
      ></input>
      <input
        onChange={handleChange}
        type="password"
        placeholder="password"
        name="password"
        id="password"
      ></input>
      <button>S U B M I T</button>
    </form>
  );
};

export default Login;
