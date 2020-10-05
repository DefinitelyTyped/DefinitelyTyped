import * as React from 'react';
import { Action, Dispatch } from "redux";
import {
    reduxForm,
    InjectedFormProps,
    Form,
    FormName,
    GenericForm,
    FormSection,
    formValues,
    formValueSelector,
    Field,
    GenericField,
    WrappedFieldProps,
    Fields,
    GenericFields,
    WrappedFieldsProps,
    FieldArray,
    GenericFieldArray,
    WrappedFieldArrayProps,
    BaseFieldProps,
    reducer,
    FormAction,
    actionTypes,
    submit,
    SubmissionError,
    FieldArrayFieldsProps,
    DecoratedFormProps,
    ReduxFormContext
} from 'redux-form';

import {
    Field as ImmutableField,
    reduxForm as immutableReduxForm,
    startSubmit as immutableStartSubmit,
    stopSubmit as immutableStopSubmit
} from "redux-form/immutable";

import LibField, {
    WrappedFieldProps as LibWrappedFieldProps
} from "redux-form/lib/Field";
import libReducer from "redux-form/lib/reducer";
import LibFormSection from "redux-form/lib/FormSection";
import libFormValueSelector from "redux-form/lib/formValueSelector";
import libReduxForm from "redux-form/lib/reduxForm";
import libActions from "redux-form/lib/actions";
import LibSubmissionError from "redux-form/lib/SubmissionError";

/* Decorated components */
interface TestFormData {
    foo: string;
}

/* Some tests only make sense with multiple values */
interface MultivalueFormData {
    foo: string;
    bar?: string;
    fizz: string;
}

interface TestFormComponentProps {
    baz: string;
}

type InjectedProps = InjectedFormProps<TestFormData, TestFormComponentProps>;

class TestFormComponent extends React.Component<TestFormComponentProps & InjectedProps> {
    render() {
        const { form, initialValues, error } = this.props;
        const foo = initialValues.foo;
        const errorIsString = error + 'test';
        return null;
    }
}

const TestFormRequired = reduxForm<TestFormData, TestFormComponentProps>({})(TestFormComponent);
const TestForm = reduxForm<TestFormData, TestFormComponentProps>({ form : "test" })(TestFormComponent);
const TestFormImmRequired = immutableReduxForm<TestFormData, TestFormComponentProps>({})(TestFormComponent);
const TestFormImm = immutableReduxForm<TestFormData, TestFormComponentProps>({ form : "test" })(TestFormComponent);

const TestFormStatelessComponent: React.StatelessComponent<TestFormComponentProps & InjectedProps> = ({ form, initialValues }) => {
    const foo = initialValues.foo;
    return null;
};

const TestFormStatelessRequired = reduxForm<TestFormData, TestFormComponentProps>({})(TestFormStatelessComponent);
const TestFormStateless = reduxForm<TestFormData, TestFormComponentProps>({ form : "test" })(TestFormStatelessComponent);

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

const MyFormSection: React.StatelessComponent<MyFormSectionProps> = ({ children, foo }) => null;

/* Custom Field */

interface MyFieldCustomProps {
    foo: string;
}
type MyFieldProps = MyFieldCustomProps & WrappedFieldProps;
const MyField: React.StatelessComponent<MyFieldProps> = ({
    children,
    input,
    meta,
    foo
}) => {
    input.onBlur("value");
    input.onBlur({} as React.SyntheticEvent<HTMLDivElement>);

    input.onChange("value");
    input.onChange({} as React.SyntheticEvent<HTMLDivElement>);

    input.onDragStart({} as React.DragEvent<HTMLDivElement>);

    input.onDrop({} as React.DragEvent<HTMLDivElement>);

    input.onFocus({} as React.FocusEvent<HTMLDivElement>);
    return null;
};
const FieldCustom = Field as new () => GenericField<MyFieldCustomProps>;

type FieldProps = BaseFieldProps<MyFieldCustomProps> & MyFieldCustomProps;
const FieldCustomComp: React.StatelessComponent<FieldProps> = props => (
    <FieldCustom {...props} component={MyField} />
);

const MyFieldImm: React.StatelessComponent<MyFieldProps> = ({
    children,
    input,
    meta,
    foo
}) => null;
const FieldImmutableCustom = ImmutableField as new () => GenericField<MyFieldCustomProps>;

/* Custom Fields */

interface MyFieldsCustomProps {
    foo: string;
}
type MyFieldsProps = MyFieldsCustomProps & WrappedFieldsProps;
const MyFields: React.StatelessComponent<MyFieldsCustomProps> = ({
    children,
    foo
}) => null;
const FieldsCustom = Fields as new () => GenericFields<MyFieldsCustomProps>;

/* FieldArray */

const MyArrayField: React.StatelessComponent<WrappedFieldArrayProps> = ({
    children
}) => null;

/* Custom FieldArray */

interface MyFieldValue {
    num: number;
}

interface MyFieldArrayCustomProps {
    foo: string;
    bar: number;
}

const MyCustomArrayField: React.StatelessComponent<MyFieldArrayCustomProps & WrappedFieldArrayProps<MyFieldValue>> = ({
    children,
    fields,
    foo,
    bar
}) => null;

const FieldArrayCustom = FieldArray as new () => GenericFieldArray<MyFieldValue, MyFieldArrayCustomProps>;

/* Tests */
const TestForms: React.StatelessComponent = () => {
    return (
        <div>
            <TestFormRequired form="test" baz='baz' />
            <TestForm initialValues={ { foo : "test" } } baz='baz' />

            <TestFormImmRequired form="test" baz='baz' />
            <TestFormImm initialValues={ { foo : "test" } } baz='baz' />

            <TestFormStatelessRequired form="test" baz='baz' />
            <TestFormStateless baz='baz' />
        </div>
    );
};

// Specifying form data type is not required here, but is recommended to avoid confusion
const testFormWithValidationDecorator = reduxForm<MultivalueFormData>({
    form: "testWithValidation",
    validate: (values, props) => {
        return {
            foo: "Bad foo"
        };
    }
});

// Specifying form data type is not required here, but is recommended to avoid confusion
const testFormWithInitialValuesDecorator = reduxForm<MultivalueFormData>({
    form: "testWithValidation",
    initialValues: {
        foo: "A Foo is here"
    }
});

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
        };
    }
});

const testFormWithChangeFunctionDecorator = reduxForm<TestFormData, TestFormComponentProps>({
    form: 'testWithValidation',
    onChange: (
        values: Partial<TestFormData>,
        dispatch: Dispatch<any>,
        props: DecoratedFormProps<TestFormData, TestFormComponentProps>,
        previousValues: Partial<TestFormData>) => {}
});

type TestProps = {} & InjectedFormProps<TestFormData>;
const Test = reduxForm<TestFormData>({
    form : "test",
    shouldError: ({
        values,
        nextProps,
        props,
        initialRender,
        lastFieldValidatorKeys,
        fieldValidatorKeys,
        structure
    }) => true,
})(
    class Test extends React.Component<TestProps> {
        handleSubmitForm = (values: Partial<TestFormData>, dispatch: Dispatch<any>, props: {}) => {};

        render() {
            const { handleSubmit } = this.props;
            const FormCustom = Form as new () => GenericForm<TestFormData, {}, string>;

            return (
                <div>
                    <FormCustom onSubmit={ handleSubmit(this.handleSubmitForm) }>
                        <FormSection<MyFormSectionProps>
                            name="my-section"
                            component={MyFormSection}
                            foo="hello"
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

                            <Field
                                name="field4"
                                component="input"
                                onChange={(event, newValue, previousValue, fieldName) => {}}
                                onBlur={(event, newValue, previousValue, fieldName) => {}}
                            />

                            <ImmutableField
                                name="field3im"
                                component="select"
                            />

                            <Field
                                name="field4"
                                component={ MyField }
                                foo="bar"
                            />

                            <FieldCustom
                                name="field4"
                                component={ MyField }
                                foo="bar"
                            />

                            <FieldCustomComp
                                name="field_4_comp"
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

                            <FieldArray<{}>
                                name="field9"
                                component={ MyArrayField }
                            />

                            {/* Passing child props via explicit props arg (TS-preferable)*/}
                            <FieldArrayCustom
                                name="field10"
                                component={ MyCustomArrayField }
                                props={{
                                    foo: 'bar',
                                    bar: 123
                                }}
                            />

                            {/* Passing child props via extra props passed to parent */}
                            <FieldArrayCustom
                                name="field10"
                                component={ MyCustomArrayField }
                                foo="bar"
                                bar={23}
                            />
                        </FormSection>
                    </FormCustom>
                </div>
            );
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

try {
    throw new SubmissionError({_error: "Submission failed."});
} catch (error) {
    if (!(error instanceof SubmissionError)) {
        throw new Error("SubmissionError not imported correctly");
    }
}

/* Test using versions imported directly/as defaults from lib */
const DefaultField = (
    <LibField
        name="defaultfield"
        component="input"
        type="text"
    />
);

libReducer({}, {
    type: "ACTION"
});

const DefaultFormSection = (
    <LibFormSection
        name="defaultformsection"
    />
);

const TestLibFormRequired = libReduxForm<TestFormData, TestFormComponentProps>({})(TestFormComponent);
const TestLibForm = libReduxForm<TestFormData, TestFormComponentProps>({ form : "test" })(TestFormComponent);

const testSubmit = submit("test");
const testLibSubmit = libActions.submit("test");

try {
    throw new LibSubmissionError({_error: "Submission failed."});
} catch (error) {
    if (!(error instanceof LibSubmissionError)) {
        throw new Error("SubmissionError from lib not imported correctly");
    }
}

/* Test handleSubmit prop using as onSubmit handler */
type HandleSubmitTestProps = {} & InjectedFormProps<TestFormData>;
const HandleSubmitTestForm = reduxForm<TestFormData>({
    form : "test"
})(
    (props: HandleSubmitTestProps) => <form onSubmit={ props.handleSubmit } />
);

class HandleSubmitTest extends React.Component {
    handleSubmit = (values: Partial<TestFormData>, dispatch: Dispatch<any>, props: {}) => {};
    render() {
        return <HandleSubmitTestForm onSubmit={this.handleSubmit} />;
    }
}

class FormNameTest extends React.Component {
    render() {
        return (
            <FormName>
                {({ form, sectionPrefix }) => (
                    <span>
                        Form name is {form} and section prefix is {sectionPrefix}
                    </span>
                )}
            </FormName>
        );
    }
}

// Test SubmissionError with custom error format
// See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/26494
// Note: explicit parameters not needed in TS 2.7
new LibSubmissionError<{ myField: any }, string[]>({
    _error: ["First form-level error", "Second form-level error"],
    myField: ["Field-level error"]
});

new SubmissionError({
    _error: ["First form-level error", "Second form-level error"]
});

// Test forms with custom error format.
const HandleSubmitTestForm2 = reduxForm<TestFormData, {}, string[]>({ form : "test" })(
    (props: InjectedFormProps<TestFormData, {}, string[]>) => <form onSubmit={ props.handleSubmit } />
);

class HandleSubmitTest2 extends React.Component {
    handleSubmit = (values: Partial<TestFormData>, dispatch: Dispatch<any>, props: {}) => {};
    render() {
        return <HandleSubmitTestForm2 onSubmit={this.handleSubmit} />;
    }
}

type InjectedProps2 = InjectedFormProps<TestFormData, TestFormComponentProps, string[]>;
class TestFormComponent2 extends React.Component<TestFormComponentProps & InjectedProps2> {
    render() {
        const { error, initialValues, handleSubmit } = this.props;
        error.concat(['error is a string array']);

        handleSubmit((values) => ({ foo: ['string'], _error: [] }));
        return null;
    }
}

// Test ReduxFormContext
// See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/46798
class TestReduxFormContext extends React.Component {
    render() {
        return (
            <ReduxFormContext.Consumer>
                {values => <div>{values.form}</div>}
            </ReduxFormContext.Consumer>
        );
    }
}
