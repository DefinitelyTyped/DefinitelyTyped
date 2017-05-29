import * as React from 'react';
import { Component } from 'react';
import { Field, GenericField, reduxForm, WrappedFieldProps, BaseFieldProps, FormProps } from "redux-form";

interface CustomComponentProps {
    customProp: string;
}

class CustomComponent extends Component<WrappedFieldProps<any> & CustomComponentProps, {}> {
    render() {
        const {
            input,
            meta : { touched },
            customProp
        } = this.props

        return (
            <div>
                <span>{customProp}</span>
                <p>Field: {touched ? 'touched' : 'pristine'}</p>
                <input {...input} />
            </div>
        );
    }
}

class CustomField extends Component<BaseFieldProps & CustomComponentProps, {}> {
    render() {
        const F = Field as new () => GenericField<CustomComponentProps, any>;
        return <F component={CustomComponent} {...this.props} />;
    }
}

interface FormData {
    foo: string;
    custom: string;
}

@reduxForm<FormData, any, any>({
    form: 'myForm'
})
class MyForm extends Component<any, any> {
    render() {
        return (
            <div>
                <Field
                    name='foo'
                    component='input'
                    placeholder='Foo bar'
                />
                <CustomField
                    name='custom'
                    customProp='Hello'
                />
            </div>
        );
    }
}

const MyStatelessFunctionalComponent: React.SFC<any> = () => <div/>;

reduxForm({
    form: 'mySFCForm'
})(MyStatelessFunctionalComponent);

class MyReusableForm extends Component<void, undefined> {
    render() {
        return (
            <div>
                <Field
                    name='foo'
                    component='input'
                    placeholder='Foo bar'
                />
            </div>
        );
    }
}

reduxForm({
    form: 'forceUnregisterOnMountForm',
    forceUnregisterOnUnmount: true
});
