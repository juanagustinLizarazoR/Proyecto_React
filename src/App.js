import "./assets/stylesheets/App.css";
import BaseRouter from "./router/routes";
import React, { Component } from "react";
import {Provider} from 'react-redux';
// import Login from './components/authentication/UserLogin'
// import Register from './components/authentication/UserSignUp'
import Nav from './components/MyNav';
import Store from './store/store';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
    };
  }

  componentDidMount() {
    // if (this.state.logged_in) {
    //     axios.get(window.env.API_URL + "/",
    //      {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `JWT ${localStorage.getItem('token')}`
    //     }
    //   },{} )
    //     .then(res => {
    //       console.log(res.data)
    //     })
    // }
    Store.subscribe(()=> this.setState(Store.getState()));
  }
  display_form = (form) => {

    this.setState({
      displayed_form: form,
    });
  };

  render() {
    // let form;
    // switch (this.state.displayed_form) {
    //   case 'login':
    //     form = <Login handle_login={this.handle_login} />;
    //     break;
    //   case 'signup':
    //     // form = <Register handle_signup={this.handle_signup} />;
    //     break;
    //   default:
    //     form = null;
    // }

    return (
      <div className="app">
        <Nav
          logged_in={this.state.logged_in}
          // display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {/* {form} */}
        {/* <h5>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
        </h5> */}

        <div>
          <BaseRouter />
        </div>
      </div>
    );
  }

  handle_login = (e, data) => {
    e.preventDefault();
    console.log(data)
    axios.post(window.env.API_URL + "auth/login", {
      username: data.email,
      password: data.password,
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', res.data.user.first_name + " " + res.data.user.last_name);
        console.log( "--------------- "+ localStorage.getItem('token'))

        this.setState({
          logged_in: true,
          displayed_form: "",
          username: res.data.user.first_name + " " + res.data.user.last_name,
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    console.log(data)
    axios.post(window.env.API_URL + "auth/signup", {
      username: data.email,
      email: data.email,
      first_name: data.name,
      last_name: data.lastName,
      password: data.password,
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', data.token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: res.data.first_name + " " + res.data.last_name,
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
  };
}

export default App;
