import React from "react";
import { Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import firebase from './firebase';

class Forgot extends React.Component {

    state = {
        email: ''
    }

     handleSubmit = (e) => {
        e.preventDefault();
        firebase.passwordReset(this.state.email);
  
    };

    render(){
        return(
            <Form className="auth-form" onSubmit={this.handleSubmit}>
                <h3>Forgot</h3>
                <Input 
                    name="email"
                    type="email"
                    placeholder="Your Email" 
                    onChange={e => this.setState({ email: e.target.value })} 
                    required
                />
                <Button color="primary">Reset</Button>
                <div className="auth-links">
                    <Link to="/auth/signin">Signin Password ?</Link>
                    <Link to="/auth/signup">Dont have account ?</Link>
                </div>
            </Form>
        )
    }
}

export default Forgot;