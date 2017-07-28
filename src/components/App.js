import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sandcastles from './Sandcastles';
import NewSandcastle from './NewSandcastle';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { getSandcastles, addSandcastle } from '../API';

import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.handlePost = this.handlePost.bind(this)
    this.state= {
      sandcastles: []
    }
  }
  componentDidMount(){
    getSandcastles().then(result => {
      this.setState({
        sandcastles: result.data
      })
    })
  }
  handlePost(data) {
    data.user_id = 1;
    addSandcastle(data).then(result => {
      this.setState({
        sandcastles: [...this.state.sandcastles, result.data.response[0]]
      })
      window.location = "/sandcastles"
    })
  }
  render() {
    return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route
           path="/sandcastles/new"
           render = {(props) => (
             <NewSandcastle {...props}
               handlePost={this.handlePost}
             />
           )}
         />
          <Route
            path="/sandcastles"
            render = {(props) => (
              <Sandcastles {...props}
                sandcastles={this.state.sandcastles}
              />
            )}
           />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
    )
  }
}

export default App;
