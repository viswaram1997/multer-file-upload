import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      file:""
    }

  }
    
  async fileUpload(){
    var element =document.getElementById('file');
    var file=element.files[0];
    var formData = new FormData();
    formData.append("file",file);



    await fetch('https://multerupload.herokuapp.com:39495/fileupload', {
        method: "POST",
        headers: {
          'Accept': 'application/json'
          
        },
        body: formData  
    
      }).then((res)=>{
        return res.json()
      }).then((res)=>{
        var file=res.path;
this.setState({
  file
})          
      })  
  }
  render() {
    return (
      <div>
        <input type="file"  id="file" name="file"/>
        <button onClick={ ()=>{
          this.fileUpload()
        }} >upload</button>
        {this.state.file!==""?<img src={this.state.file}/>:console.log(JSON.stringify(this.state.file))}
      </div>
    );
  }
}

export default App;
