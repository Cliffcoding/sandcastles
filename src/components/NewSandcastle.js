import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar/AppBar';
import FlatButton from 'material-ui/FlatButton'

class NewSandcastle extends React.Component {
  constructor(props) {
    super(props);
    this.updateFormState = this.updateFormState.bind(this);
    this.submitSandcastle= this.submitSandcastle.bind(this);
    this.state={}
  }
  updateFormState(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }
  submitSandcastle(event){
    event.preventDefault();
    this.props.handlePost(this.state);
  }
  render() {
    return(
      <div>
        <AppBar
          iconElementRight={<FlatButton
            label="Home"
            onClick={() => window.location= "/sandcastles"}
          />}
        />
        <div className="row">
          <form onSubmit={this.submitSandcastle} className="col offset-s3 s6">
            <h4 className="center">Create New Sandcastle!</h4>
            <div className="input-field">
              <input onChange={this.updateFormState} value={this.state.name} name="name" type="text" className="validate"  placeholder="Enter Name"/>
            </div>
            <div className="input-field">
              <input onChange={this.updateFormState} value={this.state.url} name="url" type="text" className="validate" placeholder="Enter Image-Url"/>
            </div>
            <div className="input-field ">
              <input onChange={this.updateFormState} value={this.state.description} name="description" type="text" className="validate" placeholder="Enter Description"/>
            </div>
            <button type="submit" className="btn waves-effect waves-light btn">Create Sandcastle</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewSandcastle;
