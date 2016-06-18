import React from 'react';
import MessageRow from './MessageRow';
import {Card, List} from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: {}
    };
    this.firebaseRef = new Firebase('https://reactchats.firebaseio.com/messages');
    this.firebaseRef.on("child_added", (msg) => {
      if(this.state.messages[msg.key()]){
        return;
      }
      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({messages: this.state.messages});
    });
  }
  render(){
    let messageNodes = _.values(this.state.messages).map((message, i)=> {
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
