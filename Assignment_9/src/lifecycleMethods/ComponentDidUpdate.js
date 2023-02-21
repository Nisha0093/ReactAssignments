import React, { Component } from 'react'

export class ComponentDidUpdate extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"You will be redirect in 5 secs...."
        }
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"Welocme to Learning React JS!..."})},5000);
        }
    
    componentDidUpdate(){
        document.getElementById("para").innerHTML="Component did update method is called..."
    }

  render() {
    return (
      <div>
          <h1><center>{this.state.name}</center></h1>
          <p id="para"></p>
      </div>
    )
  }
}

export default ComponentDidUpdate