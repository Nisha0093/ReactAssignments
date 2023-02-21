
import React, { Component } from 'react'

export class ComponentWillUnmount extends Component {
    constructor(props){
        super(props)
        this.state={
            status:true,
        }
    }
    click=()=>{this.setState({status:false})};
        
  render() {
    return (
      <>
      <p>{this.state.status  ? <Child />:null}</p>
       <button onClick={this.click}>Click me to toggle</button>
       </>
    )
  }
}

export class Child extends Component{
    componentWillUnmount(){
        alert("will unmount...");
    }

    render(){
        return(
            <>I am a child component</>
        )
    }

}

export default ComponentWillUnmount