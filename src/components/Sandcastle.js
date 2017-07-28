import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
class Sandcastle extends Component {
  render() {
    console.log(this.props.sandcastle);
    const { sandcastle } = this.props;
    const subtitleText = "Submitted By " + sandcastle.username;
    return (
      <Card>
       <CardMedia
         overlay={<CardTitle title={sandcastle.name} subtitle={subtitleText}  />}
       >
         <img src={sandcastle.url} alt="" />
       </CardMedia>
       <CardText>
         {sandcastle.description}
       </CardText>
     </Card>
    )
  }
}

export default Sandcastle;
