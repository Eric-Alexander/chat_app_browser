import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
<<<<<<< HEAD
import Header from './common/Header';
=======
>>>>>>> d549bd0244da408a0d970dba3843951a156fa468

const App = (props) => {
  return (
    <div>
<<<<<<< HEAD
      <Header />
=======
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/about">About</Link>
      <br/>
>>>>>>> d549bd0244da408a0d970dba3843951a156fa468
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
