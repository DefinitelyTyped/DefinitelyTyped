import * as React from "react";
import { Component, StatelessComponent } from "react";
import { Action, Dispatch } from "redux";
import {
    reduxForm,
    InjectedFormProps,
    Form,
    FormSection,
    GenericFormSection,
    formValues
} from "redux-form";

/* Decorated components */
interface TestFormData {
    foo: string;
}

interface TestFormComponentProps {
    foo: string;
}

type InjectedProps = InjectedFormProps<TestFormData, TestFormComponentProps>;

class TestFormComponent extends Component<TestFormComponentProps & InjectedProps> {
    render() {
        const { form, initialValues } = this.props;
        const foo = initialValues.foo;
        return null;
    }
}

const TestFormRequired = reduxForm<TestFormData>({})(TestFormComponent);
const TestForm = reduxForm<TestFormData>({ form : "test" })(TestFormComponent);

const TestFormStatelessComponent: StatelessComponent<TestFormComponentProps & InjectedProps> = ({ form, initialValues }) => {
    const foo = initialValues.foo;
    return null;
}

const TestFormStatelessRequired = reduxForm<TestFormData>({})(TestFormStatelessComponent);
const TestFormStateless = reduxForm<TestFormData>({ form : "test" })(TestFormStatelessComponent);

/* formValues decorator */

const ItemList = formValues<TestFormData>("foo")(
    ({ foo }) => {
        return null;
    }
);

const ItemListObj = formValues({ fooBar : "foo" })(
    ({ fooBar }) => {
        return null;
    }
);

/* Custom FormSection */
interface MyFormSectionProps {
    foo: string;
}
const MyFormSection: StatelessComponent<MyFormSectionProps> = ({ children }) => null;
const FormSectionCustom = FormSection as new () => GenericFormSection<MyFormSectionProps>;

/* Custom Field */

/* CustomFields */

/* Tests */
const TestForms: StatelessComponent = () => {
    return (
        <div>
            <TestFormRequired form="test" />
            <TestForm
                initialValues={ { foo : "test" } }
            />

            <TestFormStatelessRequired form="test" />
            <TestFormStateless />
        </div>
    )
}

type TestProps = {} & InjectedFormProps<TestFormData>;
const Test = reduxForm({
    form : "test"
})(
    class Test extends Component<TestProps> {

        handleSubmitForm = (values: Partial<TestFormData>, dispatch: Dispatch<any>, props: TestProps) => {};

        handleSubmitFormAny = (event: any) => {};

        render() {
            const { handleSubmit } = this.props;

            return (
                <div>
                    <Form
                        onSubmit={ handleSubmit(this.handleSubmitFormAny) }
                    >
                        <FormSectionCustom
                            name="test1"
                            component={ MyFormSection }
                            foo="bar"
                        />

                        <FormSection name="test2">
                        </FormSection>
                    </Form>
                </div>
            )
        }
    }
)

interface CustomComponentProps {
    customProp: string;
}

/*
class CustomComponent extends Component<WrappedFieldProps<any> & CustomComponentProps> {
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

class CustomField extends Component<BaseFieldProps & CustomComponentProps> {
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
class MyForm extends Component {
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

// adapted from: http://redux-form.com/6.0.0-alpha.4/examples/initializeFromState/

import { connect, DispatchProp } from 'react-redux'
const { DOM: { input } } = React

interface DataShape {
    firstName: string;
}

interface Props extends FormProps<DataShape, {}, {}> {}

let InitializeFromStateFormFunction = (props: Props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <div>
            <Field name="firstName" component={input} type="text" placeholder="First Name"/>
            </div>
        </div>
        <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
        </div>
        </form>
    );
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
const DecoratedInitializeFromStateFormFunction = reduxForm({
  form: 'initializeFromState'  // a unique identifier for this form
})(InitializeFromStateFormFunction)

// You have to connect() to any reducers that you wish to connect to yourself
const ConnectedDecoratedInitializeFromStateFormFunction = connect(
    state => ({
        initialValues: state.account.data // pull initial values from account reducer
    }),
)(DecoratedInitializeFromStateFormFunction);

// React ComponentClass instead of StatelessComponent

class InitializeFromStateFormClass extends React.Component<Props & DispatchProp<any>> {
    render() {
        return InitializeFromStateFormFunction(this.props);
    }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
const DecoratedInitializeFromStateFormClass = reduxForm<DataShape, {}, {}>({
    form: 'initializeFromState'  // a unique identifier for this form
})(InitializeFromStateFormClass);

// You have to connect() to any reducers that you wish to connect to yourself
const mapStateToProps = (state: any) => ({
    initialValues: { firstName: state.account.data.firstName }  // pull initial values from account reducer
} as {initialValues?: Partial<DataShape>});
const ConnectedDecoratedInitializeFromStateFormClass = connect(mapStateToProps)(DecoratedInitializeFromStateFormClass);

reducer({}, {
    type: 'ACTION'
});

reducer.plugin({
    myform: (state: any, action: FormAction) => {
        if (action.type === actionTypes.CHANGE && action.meta.form === 'securitySettings') {
            return {
                ...state,
                values: {
                    ...state.values,
                    downloadLinkAutoPassword: true,
                },
            };
        } else {
            return state;
        }
    }
});
*/
