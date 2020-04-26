import React from 'react';
import NavBar from './nav_bar';
import PropTypes from 'prop-types';

const Layout = ({children}) => (
  <>
    <NavBar />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
