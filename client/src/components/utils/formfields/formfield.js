import React from 'react';
import FormLabel from './form_label'

const Formfield = ({formdata, change, id}) => {

    const showError = () => {
        let errorMessage = ''

        if (formdata.validation && formdata.valid === false) {
            errorMessage = (
                <div className='error_label'>
                    {formdata.validationMessage}
                </div>
            )
        }
        return errorMessage
    }


    const renderTemplate = () => {
        let formTemplate = ''
        switch(formdata.element) {
            case('input'):
                formTemplate = (
                    <div>
                        <FormLabel formdata={formdata}/>
                        <div className='formBlock'>
                            <input
                                {...formdata.config}
                                value={formdata.value}
                                onBlur={(event)=> change({event, id, blur: true})}
                                onChange={(event) => change({event, id})}
                            >
                            </input>
                            {showError()}
                        </div>
                    </div>
                )

            break;
            default: 
                formTemplate = ''
        }
        return formTemplate
    }


    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default Formfield;