import React from 'react';
import MessageRow from './MessageRow';
import {Card, List} from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    this.firebaseRef = new Firebase('https://reactchats.firebaseio.com/messages');
    this.firebaseRef.once("value", (dataSnapshot) => {
      let messageVal = dataSnapshot.val();
      let messages = _(messageVal)
      .keys()
      .map((messageKey) => {
        let cloned = _.clone(messageVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
      this.setState({
        messages: messages
      });
    });
  }
  render(){
    let messageNodes = this.state.messages.map((message, i)=> {
      return(
        <MessageRow key={i} message={message.message} author = {message.author} pic ={message.profilePic} />
      );
    });
    return(

        <Card style={{
            flexGrow: 2,
            marginLeft: 30,
            marginRight: 30
          }}>
          <List>
            {messageNodes}
          </List>
        </Card>

    );
  }
}


export default MessageList;
