import React from "react";
import { Form, Input, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

import firebase from './firebase';

const initialState = {
    email: '',
    password: '',
    username: '',
    error: '',
    redirect: false
}

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            error: '',
            redirect: false
        }
     
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} =  this.state;
        
        firebase.signUp(email, password)
            .then(() => this.setState({redirect: true}));

        this.setState({ ...initialState });
    };

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value });       
    }
    render(){
        if(this.state.redirect) {
            return <Redirect to='/home' />
        }
        const {
            email,
            password,
            username
          } = this.state;

        const isInvalid = email === '' || password === '' || username === '';
        return(
            <Form className="auth-form" onSubmit={this.handleSubmit}>
                <h3>Signup</h3>
                <Input type="text" name="username" placeholder="Username"  onChange={this.handleInputChange} required/>
                <Input type="email" name="email" placeholder="Email" onChange={this.handleInputChange} required/>
                <Input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} required/>
                <Button type="submit" disabled={isInvalid} color="primary">Signup</Button>
              
                <div className="auth-links">
                    <Link to="/auth/forgot">Forgot Password ?</Link>
                    <Link to="/auth/signin">Have account ?</Link>
                </div>
            </Form>
        )
    }
}

export default Signup;
