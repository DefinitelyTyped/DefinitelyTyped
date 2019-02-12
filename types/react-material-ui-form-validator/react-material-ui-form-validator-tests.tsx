import * as React from 'react';
import {
    TextValidator,
    ValidatorComponent,
    ValidatorForm
} from 'react-material-ui-form-validator';

class Test extends React.Component {
    onSubmitted = (event: React.FormEventHandler) => {};
    onError = (errors: any[]) => {};
    onValidate = (isValid: boolean) => {};
    onTextFieldChanged = (event: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
    render() {
        return (
            <ValidatorForm
                instantValidate={true}
                debounceTime={10}
                onSubmit={this.onSubmitted}
                onError={this.onError}
            >
                <ValidatorComponent
                    errorMessages={['Field is required']}
                    validators={['required']}
                    name={'Field'}
                    value={'value'}
                    validatorListener={this.onValidate}
                    withRequiredValidator={true}
                />
                <TextValidator
                    id="email"
                    label="Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="email"
                    margin="normal"
                    variant="outlined"
                    value="value"
                    onChange={this.onTextFieldChanged}
                    validatorListener={this.onValidate}
                    validators={['required', 'isEmail']}
                    errorMessages={['Email is required', 'Enter a valid email address']}
                />
            </ValidatorForm>
        );
    }
}
