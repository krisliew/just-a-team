import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

class DropZone extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
    // write to local storage here
  }
  render(){
    return (
      <DropzoneArea
        onChange={this.handleChange.bind(this)}
        />
    )
  }
}

export default DropZone;