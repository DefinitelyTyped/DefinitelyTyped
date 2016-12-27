import * as React from "react"
import * as Redux from "redux"
import {
    reducer,
    reduxForm,
    FormProps,
    Field,
    FieldArray,
    Fields,
    FormSection,
    WrappedFieldProps,
    WrappedFieldArrayProps,
    WrappedFieldsProps
} from "redux-form"

type SingleFieldProps = WrappedFieldProps & { foo: string }
const SingleField: React.StatelessComponent<SingleFieldProps> = ({ input, meta }) => {
    return (<input { ...input } />)
}
class Single extends Field<SingleFieldProps, any> {}

type MultiFieldProps = WrappedFieldsProps & { foo: string }
const MultiField: React.StatelessComponent<MultiFieldProps> = (props: MultiFieldProps) => {
    const field = props["test"] as WrappedFieldProps
    return (<input { ...field.input } />)
}
class Multi extends Fields<MultiFieldProps, any> {}

type ArrFieldProps = WrappedFieldArrayProps<any> & { foo: string }
const ArrField: React.StatelessComponent<ArrFieldProps> = ({ fields, meta }) => {
    return (
        <div>
            { fields.map((name: string) => (<input name={ name } />)) }
        </div>
    )
}
class Arr extends FieldArray<ArrFieldProps, any> {}


type TestProps = FormProps<any, any>

class Test extends React.Component<TestProps, any> {

    public render () {
        return (
            <form onSubmit={ this.props.handleSubmit }>
                <Single name="single" component={ SingleField } foo="bar" />

                <Multi names={ ["test"] } component={ MultiField } foo="bar" />

                <Arr name="arr" component={ ArrField } foo="bar" />

                <FormSection name="nested">
                    <Single name="single" component={ SingleField } foo="bar" />
                </FormSection>
            </form>
        )
    }

}

const store: Redux.Store<any> = Redux.createStore(reducer)

const TestForm = reduxForm<any, any, any>({
    form : "test",
    initialValues : {} as any
})(Test)
