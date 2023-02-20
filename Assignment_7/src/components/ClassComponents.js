import React, { Component } from 'react'

export class ClassComponents extends Component {
   render() {
    return (
      <div>
          <h1>
              <center>ClassComponents {this.props.name} </center>
            </h1>
        </div>
    )
  }
}

export default ClassComponents