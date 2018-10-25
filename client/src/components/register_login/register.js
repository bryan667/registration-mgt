import React, { Component } from 'react';
import Formfield from '../utils/formfield'
import { update, generateData, isFormValid } from '../utils/misc'
import DogeImage from '../utils/doge-image'

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

    submitForm = (event) => {
        event.preventDefault()

        let dataToSubmit = generateData(this.state.formdata, 'register')
        let formIsValid = isFormValid(this.state.formdata, 'register')

        if (formIsValid) {
            console.log(dataToSubmit)
        } else {
            this.setState({
                formError: true
            })
        }       
    }

    render() {
        return (
            <div className='register_page'>
                <div className='register_container'>
                    <div>
                        <form onSubmit={(event) => this.submitForm(event)}>
                            <div className='flex'>
                                <div className='register_wrapper'>
                                    <h2>Registration Page</h2>
                                    <p>welcome humane, many register pls join us.</p>
                                </div>
                                <div>
                                    <DogeImage 
                                        padding={'100px'}
                                    />
                                </div>
                            </div>
                            <div className='register_inputs flex '>
                                <div className='left'>
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
                                </div>
                                <div className='right'>
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
                            </div>
                                <div>
                                        {this.state.formError ? 
                                            <div className='error_label'>
                                                Please check the required fields
                                            </div>
                                        :null}
                                        <button onClick={(event)=> this.submitForm(event)}>
                                            Register
                                        </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register