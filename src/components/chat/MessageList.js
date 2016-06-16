import React from 'react';
import MessageRow from './MessageRow';
import {Card, List} from 'material-ui';


class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: [
         "Wu Tang clams aint nothing to shuck with.",
        'Agreed. I love clams.',
        'More static text',
        'Tessterrr',
        'Who wants green eggs and JAM? OOHHHH',
        'I do not',
        'No Trolls. No Mercey'
      ]
    };
  }
  render(){
    let messageNodes = this.state.messages.map((obj, i)=> {
      return(
        <MessageRow key={i} message={obj} />
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
