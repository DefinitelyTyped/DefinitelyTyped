import * as React from 'react';
import { Component } from 'react';
import { Field, GenericField, reduxForm, WrappedFieldProps, BaseFieldProps } from "redux-form";

interface CustomComponentProps {
    customProp: string;
}

class CustomComponent extends Component<WrappedFieldProps<any> & CustomComponentProps, {}> {
    render() {
        return (
            <div>
                <span>{this.props.customProp}</span>
                <p>Field: {this.props.meta.touched ? 'touched' : 'pristine'}</p>
                <input {...this.props.input} />
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
class MyForm extends Component<{}, {}> {
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

const MyStatelessFunctionalComponent: React.SFC<void> = () => <div/>;

reduxForm({
    form: 'mySFCForm'
})(MyStatelessFunctionalComponent);

@reduxForm<FormData, any, any>({})
class MyDynamicForm extends Component<void, undefined> {
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
