import React, { PropTypes } from 'react';
import MessageList from './MessageList';

const ChatPage = (props) => {
  return (
    <div>
      <MessageList />
      {props.children}
    </div>
  );
};

ChatPage.propTypes = {
  children: PropTypes.element
};

export default ChatPage;
