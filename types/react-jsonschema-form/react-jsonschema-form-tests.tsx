import * as React from 'react';
import Form, {
    UiSchema,
    ErrorListProps,
    FieldProps,
    WidgetProps,
    ErrorSchema,
    withTheme,
    FieldTemplateProps,
    ArrayFieldTemplateProps,
    ObjectFieldTemplateProps,
    IdSchema,
    PathSchema,
} from 'react-jsonschema-form';
import SchemaField, { SchemaFieldProps } from 'react-jsonschema-form/lib/components/fields/SchemaField';
import { JSONSchema6 } from 'json-schema';

import {
    ADDITIONAL_PROPERTY_FLAG,
    allowAdditionalItems,
    isFixedItems,
    stubExistingAdditionalProperties,
    retrieveSchema,
} from 'react-jsonschema-form/lib/utils';
import validateFormData from 'react-jsonschema-form/lib/validate';

// example taken from the react-jsonschema-form playground:
// https://github.com/mozilla-services/react-jsonschema-form/blob/fedd830294417969d88e38fb9f6b3a85e6ad105e/playground/samples/simple.js

const schema: JSONSchema6 = {
    title: 'A registration form',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
        firstName: {
            type: 'string',
            title: 'First name',
        },
        lastName: {
            type: 'string',
            title: 'Last name',
        },
        age: {
            type: 'integer',
            title: 'Age',
        },
        bio: {
            type: 'string',
            title: 'Bio',
        },
        password: {
            type: 'string',
            title: 'Password',
            minLength: 3,
        },
    },
};

const ExampleFieldTemplate = (_props: FieldTemplateProps) => null;

const ExampleArrayFieldTemplate = ({ items }: ArrayFieldTemplateProps) => (
    <div>
        {items.map(element => (
            <div key={element.key}>{element.children}</div>
        ))}
    </div>
);

const ExampleObjectFieldTemplate = (_props: ObjectFieldTemplateProps) => null;

const uiSchema: UiSchema = {
    age: {
        'ui:widget': 'updown',
    },
    bio: {
        'ui:widget': 'textarea',
    },
    password: {
        'ui:widget': 'password',
        'ui:help': 'Hint: Make it strong!',
    },
    date: {
        'ui:widget': 'alt-datetime',
    },
    'ui:FieldTemplate': ExampleFieldTemplate,
    'ui:ArrayFieldTemplate': ExampleArrayFieldTemplate,
    'ui:ObjectFieldTemplate': ExampleObjectFieldTemplate,
};

interface IExampleState {
    formData: any;
}

export default function ErrorListExample(props: ErrorListProps) {
    const { errors } = props;
    return (
        <div className="panel panel-danger errors">
            <div className="panel-heading">
                <h3 className="panel-title">Errors</h3>
            </div>
            <ul className="list-group">
                {errors.map((error, i) => {
                    return (
                        <li key={i} className="list-group-item text-danger">
                            {error.stack}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export class Example extends React.Component<any, IExampleState> {
    public state: IExampleState = {
        formData: {
            firstName: 'Chuck',
            lastName: 'Norris',
            age: 75,
            bio: 'Roundhouse kicking asses since 1940',
            password: 'noneed',
        },
    };

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="react-jsonschema-form-example">
                {
                    <Form
                        schema={schema}
                        uiSchema={uiSchema}
                        showErrorList={false}
                        noValidate={false}
                        noHtml5Validate={false}
                        formData={this.state}
                        ErrorList={ErrorListExample}
                        onChange={formData => this.setState({ formData })}
                        customFormats={{
                            'phone-us': /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
                        }}
                    />
                }
            </div>
        );
    }
}

export class ExampleSchemaField extends React.Component<SchemaFieldProps> {
    constructor(props: SchemaFieldProps) {
        super(props);
    }

    public render() {
        return <SchemaField {...this.props} />;
    }
}

interface FuncExampleProps {
    formData: object;
    onError: (e: ErrorSchema) => void;
    onChange: (e: any) => void;
}

export const FuncExample = (props: FuncExampleProps) => {
    const { formData, onChange, onError } = props;
    return (
        <Form
            schema={schema}
            uiSchema={uiSchema}
            showErrorList={false}
            noValidate={false}
            noHtml5Validate={false}
            formData={formData}
            ErrorList={ErrorListExample}
            onChange={(formData, errorSchema) => {
                onChange(formData);
                errorSchema && onError(errorSchema);
            }}
        />
    );
};

export const BooleanCustomWidget: React.SFC<WidgetProps> = props => (
    <input onFocus={() => props.onFocus('id', true)} onBlur={() => props.onFocus('id', true)} />
);

export const NumberCustomWidget: React.SFC<WidgetProps> = props => (
    <input onFocus={() => props.onFocus('id', 0)} onBlur={() => props.onFocus('id', 0)} />
);

export const StringCustomWidget: React.SFC<WidgetProps> = props => (
    <input onFocus={() => props.onFocus('id', 'value')} onBlur={() => props.onFocus('id', 'value')} />
);

export const NullCustomWidget: React.SFC<WidgetProps> = props => (
    <input onFocus={() => props.onFocus('id', null)} onBlur={() => props.onFocus('id', null)} />
);

export const withThemeExample = () => {
    const Form = withTheme({
        showErrorList: false,
        noValidate: false,
        noHtml5Validate: false,
    });

    return <Form schema={schema} />;
};

export const additionalPropertyFlagExample = () => {
    return ADDITIONAL_PROPERTY_FLAG;
};

export const ExternalFormSubmissionExample = () => {
    const formRef = React.useRef<Form<any>>(null);

    return (
        <Form schema={schema} ref={formRef}>
            <button onClick={formRef.current ? formRef.current.submit : undefined}>FancySubmitButton</button>
        </Form>
    );
};

export const allowAdditionalItemsExample = (schema: JSONSchema6) => {
    return allowAdditionalItems(schema);
};

export const isFixedItemsExample = (schema: JSONSchema6) => {
    return isFixedItems(schema);
};

export const stubExistingAdditionalPropertiesExample = (
    schema: JSONSchema6,
    definitions: { [name: string]: any },
    formData: any,
) => {
    return stubExistingAdditionalProperties(schema, definitions, formData);
};

export const retrieveSchemaExample = (schema: JSONSchema6) => {
    return retrieveSchema(schema);
};

export const getValidationDataExample = (formData: any, schema: JSONSchema6) => {
    return validateFormData(formData, schema);
};

export const customFieldExample = (props: FieldProps) => {
    const customProps: Pick<FieldProps, 'onChange' | 'onBlur'> = {
        onBlur: (id, value) => {
            return props.onBlur(id, value);
        },
        onChange: (formData, errorSchema) => {
            return props.onChange(formData, errorSchema);
        },
    };
    return <SchemaField {...props} {...customProps} />;
};

export const omitExtraDataExample = (schema: JSONSchema6) => {
    return <Form schema={schema} omitExtraData liveOmit />;
};

export const customTagName = (schema: JSONSchema6) => {
    return <Form schema={schema} tagName="div" />;
};

const TestForm = (props: React.ComponentProps<'form'>) => <form {...props} />;
export const customTagNameUsingComponent = (schema: JSONSchema6) => {
    return <Form schema={schema} tagName={TestForm} />;
};
  
const idSchema: IdSchema<{ test: {} }> = {
    $id: 'test',
    test: {
        $id: 'test',
    },
};
void idSchema.$id;
void idSchema.test.$id;

const pathSchema: PathSchema<{ test: {} }> = {
    $name: 'test',
    test: {
        $name: 'test',
    },
};
void pathSchema.$name;
void pathSchema.test.$name;
