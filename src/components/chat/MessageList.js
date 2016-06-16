import React from 'react';
import MessageRow from './MessageRow';
import {Card, List} from 'material-ui';


class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: [
         "Wu Tang clams aint nothing to shuck with.",
        'Agreed. Indoobitebly.',
        'More static text',
        'Tessterrrr',
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

        <Card>
          <List>
            {messageNodes}
          </List>
        </Card>

    );
  }
}


export default MessageList;
