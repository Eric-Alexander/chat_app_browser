import React from 'react';
import {ListItem, Avatar} from 'material-ui';



class MessageRow extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <ListItem
          leftAvatar={
            <Avatar src={this.props.pic} />
            }>
          {this.props.author} says:
            '{this.props.message}'
        </ListItem>
        </div>
    );
  }
}


export default MessageRow;
