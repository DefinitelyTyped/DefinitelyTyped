import * as React from "react";
import Form, { UiSchema, ErrorListProps } from "react-jsonschema-form";
import { JSONSchema6 } from "json-schema";

// example taken from the react-jsonschema-form playground:
// https://github.com/mozilla-services/react-jsonschema-form/blob/fedd830294417969d88e38fb9f6b3a85e6ad105e/playground/samples/simple.js

const schema: JSONSchema6 = {
    title: "A registration form",
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
        firstName: {
            type: "string",
            title: "First name"
        },
        lastName: {
            type: "string",
            title: "Last name"
        },
        age: {
            type: "integer",
            title: "Age"
        },
        bio: {
            type: "string",
            title: "Bio"
        },
        password: {
            type: "string",
            title: "Password",
            minLength: 3
        }
    }
};

const uiSchema: UiSchema = {
    age: {
        "ui:widget": "updown"
    },
    bio: {
        "ui:widget": "textarea"
    },
    password: {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
    },
    date: {
        "ui:widget": "alt-datetime"
    }
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
            firstName: "Chuck",
            lastName: "Norris",
            age: 75,
            bio: "Roundhouse kicking asses since 1940",
            password: "noneed"
        }
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
                    />
                }
            </div>
        );
    }
}
