import React, { Component } from 'react';
import Formfield from '../utils/formfield'
import { update } from '../utils/misc'

class Register extends Component {

    state= {
        formError: false,
        formSuccess:'',
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'                    
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'                    
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'                    
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'                    
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'cofirm_password_input',
                    type: 'password',
                    placeholder: 'Confirm your password'             
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },

        }
    }

    updateForm = (element) => {
        const newFormData = update(element,this.state.formdata,'register')

        this.setState({
            formError: false,
            formdata: newFormData
        })
    }

    render() {
        return (
            <div>
                <Formfield
                    id={'name'}
                    formdata={this.state.formdata.name}
                    change={(element)=> this.updateForm(element)}
                />
                <Formfield
                    id={'lastname'}
                    formdata={this.state.formdata.lastname}
                    change={(element)=> this.updateForm(element)}
                />
                <Formfield
                    id={'email'}
                    formdata={this.state.formdata.email}
                    change={(element)=> this.updateForm(element)}
                />
                <Formfield
                    id={'password'}
                    formdata={this.state.formdata.password}
                    change={(element)=> this.updateForm(element)}
                />
                <Formfield
                    id={'confirmPassword'}
                    formdata={this.state.formdata.confirmPassword}
                    change={(element)=> this.updateForm(element)}
                />
            </div>
        );
    }
}

export default Register