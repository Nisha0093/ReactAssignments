import React, { Component } from 'react'

export class ComponentDidCatch extends Component {
    constructor(props){
        super(props)
        this.state={
            error:false,
        }
    }
    componentDidCatch(error){
        this.setState({error:true});
    }
  render() {
    return (
      <div>{this.state.error ? <div>Some error</div>:<Info />}</div>
    )
  }
}

class Info extends Component{
    render(){
        return(
            <>
            <p>{this.state.status}</p>
            </>
        )
    }
}

export default ComponentDidCatch