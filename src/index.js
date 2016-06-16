/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
<<<<<<< HEAD
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
=======
>>>>>>> d549bd0244da408a0d970dba3843951a156fa468

const store = configureStore();

render(
  <Provider store={store}>
<<<<<<< HEAD
    <MuiThemeProvider muiTheme={ getMuiTheme() }>
    <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
=======
    <Router history={browserHistory} routes={routes} />
>>>>>>> d549bd0244da408a0d970dba3843951a156fa468
  </Provider>, document.getElementById('app')
);
