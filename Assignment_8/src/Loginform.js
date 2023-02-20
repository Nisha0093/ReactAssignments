import React, { Component } from 'react'

export class Loginform extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    };
   this.handlesubmit=this.handlesubmit.bind(this);
   this.textbox1=this.textbox1.bind(this);
   this.textbox2=this.textbox2.bind(this);
  }
  textbox1(event){
    this.setState({username:event.target.value});
  }

  textbox2(event){
    this.setState({password:event.target.value});
  }
  handlesubmit(event){
    if(this.state.username===""){
      alert("Enter the username");
      return false;
    }
    if(this.state.password===""){
      alert("Enter the password");
      return false;
    }
    if((this.state.username!=="")&&(this.state.password!=="")){
      alert("You have logged in successfully!!!");
      return true;
    }
  }
  render() {
    return (
      <div id="division1">
      <div id="division4">
        <h3><center>User Login</center></h3>
      </div>
        <div id="division2">
          <img src={require("./user.jpg")} width="60" height="60" id="icon" alt="Loading"/>
          <div id="division3">
            <form >
              <table cellspacing="10px">
                <tr>                 
                  <td>
                      <input
                        type="text"
                        name="username"
                        class="textbox"
                        id="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.textbox1}
                       />
                    </td>
                </tr>               
                <tr>                
                  <td>
                      <input
                        type="password"
                        name="password"
                        class="textbox" 
                        id="password"
                        value={this.state.password}
                        placeholder="Password" 
                        onChange={this.textbox2}                     
                      />
                    </td>
                </tr>
               </table>
          </form>
          <td><input type="button" id="button" onClick={this.handlesubmit} value="Login" /></td>      
          </div>

        </div>
        
              
    </div>
    )
  }
}

export default Loginform