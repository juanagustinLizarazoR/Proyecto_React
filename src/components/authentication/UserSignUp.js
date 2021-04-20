import  React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = styled.div`
.register-container {
    /* background-image: url("./img/background.jpg"); */
    /* background-color: rgba(243, 243, 243, 0.4); */
    /* background-blend-mode: color;
    background-size: cover; */
    /* min-height: 100vh; */
    height:auto;
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2%;
    color:white;
  }
  /* body {
      background: #1C8EF9 !important;
        min-height: 100vh;
        display: flex;
        font-weight: 400;
        font-family: 'Fira Sans', sans-serif;
  } */
  
  .form-center {
    background:#000e16;
    border-radius:20px;
    border:2px solid white;
    padding:50px
  }
  .btn-primary{
    background-color: #339dc5;
    }
    .btn-primary:hover{
        background-color: #1d586e;
    }
`;

class Register extends Component{

    constructor(){
        super();   
        this.state={
            name: "",
            lastName:"",
            email:"",
            password:"",
        }   
       }

       handleSubmit = (event) => {
        event.preventDefault();
        let user ={
            name: this.state.name,
            lastName: this.state.name,
            email: this.state.email,
            password : this.state.password,
        }
        this.props.onSubmit(user);
        this.props.history.push("/")
        console.log("recived values ", this.state);
    }

       handleChange(event){
        this.setState({[event.target.name]:
             event.target.value});
    }


    render(){
        return(
            <Styles>
                <div className="register-container"  >
                    <div className="form-center"  >
                        <Form  onSubmit={e => this.props.handle_signup(e, this.state)}>
                            <h3>Registro</h3>

                            <Form.Group controlId="formBasicName" className="mt-4">
                                <Form.Label >Nombre</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Ingrese nombres" value={this.state.name} onChange={this.handleChange.bind(this)} />
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicLastName">
                                <Form.Label >Apellido</Form.Label>
                                <Form.Control type="text" name="lastName" placeholder="Ingrese Apellidos" value={this.state.lastName} onChange={this.handleChange.bind(this)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Ingrese email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleChange.bind(this)} />
                            </Form.Group>

                            <Button className="btn btn-primary mt-5 btn-block" type="submit"> Registrarse</Button>
                        </Form>
                    </div>
                </div>
            </Styles>
        )
    }
}

export default Register;

Register.propTypes = {
    handle_signup: PropTypes.func.isRequired
};