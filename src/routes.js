import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
<<<<<<< HEAD
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage.js';
import ChatPage from './components/chat/ChatPage';
import NotFoundPage from './components/common/NotFoundPage.js';
=======
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
>>>>>>> d549bd0244da408a0d970dba3843951a156fa468

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
<<<<<<< HEAD
    <Route path="chat" component={ChatPage}/>
=======
>>>>>>> d549bd0244da408a0d970dba3843951a156fa468
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
