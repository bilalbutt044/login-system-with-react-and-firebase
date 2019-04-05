import React from "react";
import { Form, Input, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

import firebase from './firebase';
const initialState = {
    email: '',
    password: '',
    error: ''
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            redirect: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} =  this.state;
        firebase.signIn(email, password)
        .then(() => this.setState({redirect: true}));

        this.setState({ ...initialState });  
    };

    handleInputChange = (e) => {    
        this.setState({[e.target.name]: e.target.value });       
    }
    render(){
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to='/home'/>;
        }
        
        const {
            email,
            password
          } = this.state;

        const isInvalid = email === '' || password === '';
        return(
            <Form className="auth-form" onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <Input type="email" name="email" placeholder="email"  onChange={this.handleInputChange} required/>
                <Input type="password" name="password" placeholder="Password"  onChange={this.handleInputChange} required />
                <Button type="submit" disabled={isInvalid} color="primary">Login</Button>
                <div className="auth-links">
                    <Link to="/auth/forgot">Forgot Password ?</Link>
                    <Link to="/auth/signup">Dont have account ?</Link>
                </div>
            </Form>
        )
    }
}

export default Login;