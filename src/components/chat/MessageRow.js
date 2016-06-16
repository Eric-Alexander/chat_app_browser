import React from 'react';
import {ListItem, Avatar} from 'material-ui';



class MessageRow extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

        <ListItem
          leftAvatar={<Avatar src="http://img-ipad.appcolt.com/imgmic/9/5/956-1-trollface.jpg" />}>
            {this.props.message}
        </ListItem>
    );
  }
}


export default MessageRow;
