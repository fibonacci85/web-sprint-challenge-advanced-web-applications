
import React from "react";
import axios from 'axios';

class Login extends React.Component {

  state = {
    username:"",
    password:""
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  login = (e) => {
    e.preventDefault();
    // console.log(this.state)
    axios
        .post("http://localhost:5000/api/login", this.state)
        .then(res => {
          console.log(res)
          localStorage.setItem("token", res.data.payload);
          this.props.history.push('/bubbles') // protected
        })
        .catch(err => {
          console.log(err)
        })
  }


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render(){
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={this.login}>
        <input
        type="text"
        name="username"
        placeholder="username"
        value={this.state.username}
        onChange={this.handleChange}
         />
        <input
        type="password"
        name="password"
        placeholder="password"
        value={this.state.password}
        onChange={this.handleChange}
         />
        <button>Login</button>
      </form>
    </>
  );
};
}

export default Login;
