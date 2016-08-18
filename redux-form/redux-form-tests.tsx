import * as React from 'react';
import {
  Component,
} from 'react';
import { Field, GenericField, reduxForm, WrappedFieldProps, BaseFieldProps } from "redux-form";

interface CustomComponentProps {
  customProp: string;
}

class CustomComponent extends Component<WrappedFieldProps & CustomComponentProps, {}> {
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
    const F = Field as new () => GenericField<CustomComponentProps>;
    return <F component={CustomComponent} {...this.props} />;
  }
}

@reduxForm({
  form: 'myForm'
})
class MyForm extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Field
          component='input'
          defaultValue='derp'
          placeholder='Foo bar'
        />
        <CustomField
          customProp='Foo bar'
          defaultValue='Nope'
        />
      </div>
    );
  }
}
