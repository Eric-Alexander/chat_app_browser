import React, { PropTypes } from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';

const ChatPage = (props) => {
  return (
    <div>
      <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
        <ChannelList />
        <MessageList />
        {props.children}
      </div>
      <MessageBox />
    </div>
  );
};

ChatPage.propTypes = {
  children: PropTypes.element
};

export default ChatPage;
