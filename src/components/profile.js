import React from 'react';
import { isBrowser } from '../services/auth';

const getUserName = () => (isBrowser() && window.localStorage.getItem('ffrUserName'))
const getEmail = () => (isBrowser() && window.localStorage.getItem('ffrEmail'))
const getRole = () => (isBrowser() && window.localStorage.getItem('ffrRole'))


const Profile = () => {
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getUserName() || ''}</li>
        <li>E-mail: {getEmail() || ''}</li>
        <li>Role: {getRole().toLowerCase() || ''}</li>
      </ul>
    </>
  )
}

export default Profile;
