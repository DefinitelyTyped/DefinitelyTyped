import * as React from "react";
import { Component, StatelessComponent } from "react";
import { Action, Dispatch } from "redux";
import {
    reduxForm,
    InjectedFormProps,
    Form,
    FormSection,
    GenericFormSection,
    formValues,
    Field,
    GenericField,
    WrappedFieldProps,
    Fields,
    GenericFields,
    WrappedFieldsProps,
    FieldArray,
    GenericFieldArray,
    WrappedFieldArrayProps,
    reducer,
    FormAction,
    actionTypes
} from "redux-form";
import {
    Field as ImmutableField,
    reduxForm as immutableReduxForm
} from "redux-form/immutable";

/* Decorated components */
interface TestFormData {
    foo: string;
}

/* Some tests only make sense with multiple values */
interface MultivalueFormData {
    foo: string
    bar?: string
    fizz: string
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
const TestFormImmRequired = immutableReduxForm<TestFormData>({})(TestFormComponent);
const TestFormImm = immutableReduxForm<TestFormData>({ form : "test" })(TestFormComponent);

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

interface MyFieldCustomProps {
    foo: string;
}
type MyFieldProps = MyFieldCustomProps & WrappedFieldProps;
const MyField: StatelessComponent<MyFieldProps> = ({
    children,
    input,
    meta
}) => null;
const FieldCustom = Field as new () => GenericField<MyFieldCustomProps>;

const MyFieldImm: StatelessComponent<MyFieldProps> = ({
    children,
    input,
    meta
}) => null;
const FieldImmutableCustom = ImmutableField as new () => GenericField<MyFieldCustomProps>;

/* Custom Fields */

interface MyFieldsCustomProps {
    foo: string;
}
type MyFieldsProps = MyFieldsCustomProps & WrappedFieldsProps;
const MyFields: StatelessComponent<MyFieldsProps> = ({
    children
}) => null;
const FieldsCustom = Fields as new () => GenericFields<MyFieldsCustomProps>;

/* Custom FieldArray */

interface MyFieldValue {
    num: number;
}
interface MyFieldArrayCustomProps {
    foo: string;
}
type MyFieldArrayProps = MyFieldArrayCustomProps & WrappedFieldArrayProps<MyFieldValue>;
const MyFieldArray: StatelessComponent<MyFieldArrayProps> = ({
    children,
    fields
}) => null;
const FieldArrayCustom = FieldArray as new () => GenericFieldArray<MyFieldValue, MyFieldArrayCustomProps>;

/* Tests */
const TestForms: StatelessComponent = () => {
    return (
        <div>
            <TestFormRequired form="test" />
            <TestForm
                initialValues={ { foo : "test" } }
            />

            <TestFormImmRequired form="test" />
            <TestFormImm
                initialValues={ { foo : "test" } }
            />

            <TestFormStatelessRequired form="test" />
            <TestFormStateless />
        </div>
    )
}

// Specifying form data type is not required here, but is recommended to avoid confusion
const testFormWithValidationDecorator = reduxForm<MultivalueFormData>({
    form: "testWithValidation",
    validate: (values, props) => {
        return {
            foo: "Bad foo"
        }
    }
})

// Specifying form data type is not required here, but is recommended to avoid confusion
const testFormWithInitialValuesDecorator = reduxForm<MultivalueFormData>({
    form: "testWithValidation",
    initialValues: {
        foo: "A Foo is here"
    }
})

// Specifying form data type *is* required here, because type inference will guess the type of 
// the form data type parameter to be {foo: string}. The result of validate does not contain "foo"
const testFormWithInitialValuesAndValidationDecorator = reduxForm<MultivalueFormData>({
    form: "testWithValidation",
    initialValues: {
        foo: "A Foo is here"
    },
    validate: (values, props) => {
        return {
            bar: "Bad foo"
        }
    }
})

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
                            <Field
                                name="field1"
                                type="email"
                                component="input"
                            />

                            <Field
                                name="field2"
                                component="textarea"
                            />

                            <Field
                                name="field3"
                                component="select"
                            />

                            <ImmutableField
                                name="field3im"
                                component="select"
                            />

                            <FieldCustom
                                name="field4"
                                component={ MyField }
                                foo="bar"
                            />

                            <FieldImmutableCustom
                                name="field4"
                                component={ MyField }
                                foo="bar"
                            />

                            <Fields
                                names={ ["field5", "field6"] }
                                component={ () => null }
                            />

                            <FieldsCustom
                                names={ ["field7", "field8"] }
                                component={ () => null }
                                foo="bar"
                            />

                            <FieldArray
                                name="field9"
                                component={ Field }
                            />

                            <FieldArrayCustom
                                name="field10"
                                component={ Field }
                                foo="bar"
                            />
                        </FormSection>
                    </Form>
                </div>
            )
        }
    }
);

reducer({}, {
    type: "ACTION"
});

reducer.plugin({
    myForm: (state: any, action: FormAction) => {
        if (action.type === actionTypes.CHANGE && action.meta.form === "securitySettings") {
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

