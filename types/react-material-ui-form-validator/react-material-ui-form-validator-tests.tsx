import * as React from 'react';
import {
    SelectValidator,
    TextValidator,
    ValidatorComponent,
    ValidatorForm
} from 'react-material-ui-form-validator';
import { MenuItem } from 'material-ui';

class Test extends React.Component {
    textValidatorRef: React.RefObject<TextValidator> = React.createRef();

    onSubmitted = (event: React.FormEvent) => {
        event.preventDefault(); // Actually preventDefault() is called by ValidatorForm
    }
    onError = (errors: any[]) => {};
    onValidate = (isValid: boolean) => {};

    componentDidMount() {
        ValidatorForm.addValidationRule('isTruthy', value => value);
        const { textValidatorRef } = this;
        if (textValidatorRef && textValidatorRef.current) {
            textValidatorRef.current.validate('value');
        }
    }

    componentWillUnmount() {
        ValidatorForm.removeValidationRule('isTruthy');
    }

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
                <SelectValidator
                    errorMessages={['Field is required']}
                    validators={['required']}
                    name={'Field'}
                    value={'option1'}
                    validatorListener={this.onValidate}
                    withRequiredValidator={true}
                >
                    <MenuItem value="option1">Option1</MenuItem>
                    <MenuItem value="option2">Option2</MenuItem>
                    <MenuItem value="option3">Option3</MenuItem>
                </SelectValidator>
                <TextValidator
                    ref={this.textValidatorRef}
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
