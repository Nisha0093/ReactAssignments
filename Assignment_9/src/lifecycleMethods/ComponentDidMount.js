import React, { Component } from 'react'

export class ComponentDidMount extends Component {
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
    
   
  render() {
    return (
      <div>
          <h1><center>{this.state.name}</center></h1>
      </div>
    )
  }
}

export default ComponentDidMount