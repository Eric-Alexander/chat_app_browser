import React from 'react';
import {Link, IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';

const Header = () => {
  return(
    <nav>
      <AppBar title="Fuck YEAH">
      <IndexLink to ="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/chat" activeClassName="active">Chat</Link>
    </AppBar>
    </nav>
  );
};
export default Header;
