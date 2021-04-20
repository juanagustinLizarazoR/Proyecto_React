import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div` 
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

* {
  box-sizing: border-box;
}
body {
  /* background-image: url('https://www.sarmientoasesores.com/wp-content/uploads/2019/09/section-background.jpg') !important; */
  background-image: url('https://lh6.googleusercontent.com/proxy/2U11KZNrl3NZdQCk5y_5ikKtuW8SpGuWVmvRsfYOLwWEQXWOgj0BKPab4UwnzRuGouOcLYCaL3-V3-rEUdAMb2BiUXUOUvt_x2P_hp0ohMg7Z2F7ow4ZXrGEJtGB_vxYD55MrJSItTGCdEtqDw8=s0-d') !important;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
  
}

h1,h2,h3,h4,h5,h6,label,span {
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
}

body, html, .App, #root, .auth-wrapper {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper .form-control:focus {
  border-color: #3799c0;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}

.parent {
    height:auto;
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 10%;
    color:white;
}

.childForm {
  background:#000e16;
  border-radius:20px;
  border:2px solid white;
  padding:60px;
  
}

.btn-primary{
    background-color: #339dc5;
}
.btn-primary:hover{
    background-color: #1d586e;
}
`;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '', 
            password: ''
        };
      
      }

    handleChange = (event) => {   

        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log();
        this.props.onAuth(this.state.username, this.state.password);
        this.props.history.push("/studentPane")
        console.log("recived values ", this.state);
    }

    render() {
        return (<Styles>
            <div className="parent">
                <div className="childForm">

                    <Form onSubmit={e => this.props.handle_login(e, this.state)}>
                        <h3>Iniciar Sesión</h3>

                        <Form.Group controlId="formBasicEmail" className="mt-4">
                        <Form.Label>Correo</Form.Label>
                            <Form.Control type="text" name="email" value={this.state.email} placeholder="correo@icesi.edu.co" onChange={this.handleChange.bind(this)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} placeholder="Ingrese contraseña" onChange={this.handleChange.bind(this)}/>
                        </Form.Group>

                        <Button type="submit" className="btn btn-primary mt-5 btn-block">Ingresar</Button>
                    </Form>
                </div>
            </div>
            </Styles>
        );
    }
}



export default Login;

Login.propTypes = {
  handle_login: PropTypes.func.isRequired
};