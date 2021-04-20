import React, { Component } from 'react'
import UserLogin from '../components/authentication/UserLogin'
import {Container,Row} from 'react-bootstrap'
import '../assets/stylesheets/Login.css'

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <UserLogin/>
                </Row>
            </Container>
        )
    }
}
