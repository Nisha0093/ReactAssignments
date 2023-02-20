import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor(props){
        super(props);
        this.state={name:'Good morning'};
    }
    click=()=>{
        this.setState({name:'Good Morning Everyone'});
    }
  render() {
    return (
      <div>
          <h1>
              <center>{this.state.name}</center>
          </h1>
          <button type='button' onClick={this.click}>update</button>
      </div>
    )
  }
}
