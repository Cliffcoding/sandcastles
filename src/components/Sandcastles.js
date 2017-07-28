import AppBar from 'material-ui/AppBar/AppBar';
import React, { Component } from 'react';
import Sandcastle from './Sandcastle';
import FlatButton from 'material-ui/FlatButton';

 class Sandcastles extends Component {

   render() {
     console.log(this.props.sandcastles.sandcastles);
     return (
       <div>
         <AppBar
           iconElementRight={<FlatButton
             label="New"
             onClick={() => window.location= "/sandcastles/new"}
           />}
         />
         {this.props.sandcastles.sandcastles && this.props.sandcastles.sandcastles.map((sandcastle, i) =>
           <Sandcastle
            key={i}
            index={i}
            sandcastle={sandcastle}
           />
         )
        }
       </div>
     )
   }

 }
export default Sandcastles;
