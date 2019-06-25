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
                    name="textValidator"
                    value="value"
                    validatorListener={this.onValidate}
                    validators={['required']}
                    errorMessages={['Field is required']}
                    withRequiredValidator={true}
                />
            </ValidatorForm>
        );
    }
}
