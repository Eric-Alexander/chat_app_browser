import React from 'react';
import {Link, IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const Header = () => {
  return(
    <nav>
      <IndexLink to ="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <RaisedButton label="Default" />
    </nav>
  );
};
export default Header;
