import React from 'react';
import ChannelRow from './ChannelRow';
import {Card, List} from 'material-ui';


class ChannelList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [
         'Heavy Metal',
         'Mountain Climbing'
      ]
    };
  }
  render(){
    let channelNodes = this.state.channels.map((obj, i)=> {
      return(
        <ChannelRow key={i} channel={obj} />
      );
    });
    return(

        <Card style={{
            flexGrow: 1,
            marginLeft: 30
          }}>
          <List>
            {channelNodes}
          </List>
        </Card>

    );
  }
}


export default ChannelList;
