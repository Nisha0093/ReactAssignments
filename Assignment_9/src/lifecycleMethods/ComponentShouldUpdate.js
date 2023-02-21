import React, { Component } from 'react'

export class ComponentShouldUpdate extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"You will be redirect in 5 secs...if should component update is true..."
        }
    }
    shouldComponentUpdate(){
        return true;
        //return false;
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"Welcome to study React JS!...."})},5000)
    }
  render() {
    return (
        <div>
        <h1><center>{this.state.name}</center></h1>
    </div>
    )
  }
}

export default ComponentShouldUpdate