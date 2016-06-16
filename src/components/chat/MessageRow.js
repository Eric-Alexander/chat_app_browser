import React from 'react';
import {ListItem} from 'material-ui/List';


class MessageRow extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

        <ListItem primaryText = {this.props.message}></ListItem>

    );
  }
}


export default MessageRow;
