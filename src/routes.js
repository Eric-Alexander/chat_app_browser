import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import ChatPage from './components/chat/ChatPage';
import NotFoundPage from './components/common/NotFoundPage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="chat" component={ChatPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
