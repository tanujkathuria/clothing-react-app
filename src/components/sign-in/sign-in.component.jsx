import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSumit = async (event) =>  {
        event.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        }
        catch(error){
            console.error(error);
        }
        
    }

    render() {
        return (<div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSumit}>
                <FormInput label="email" name="email" type="email" value={this.state.email} required handleChange={this.handleChange}  />
                <FormInput label="password" name="password" type="password" value={this.state.password} handleChange={this.handleChange}   required />
                <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>)
    }


}

export default SignIn;