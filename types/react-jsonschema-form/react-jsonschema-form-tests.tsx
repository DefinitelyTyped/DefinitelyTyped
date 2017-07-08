import * as React from "react";
import Form from "react-jsonschema-form";

// example taken from the react-jsonschema-form playground:
// https://github.com/mozilla-services/react-jsonschema-form/blob/fedd830294417969d88e38fb9f6b3a85e6ad105e/playground/samples/simple.js

const schema =  {
    "title": "A registration form",
    "type": "object",
    "required": [
        "firstName",
        "lastName"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First name"
        },
        "lastName": {
            "type": "string",
            "title": "Last name"
        },
        "age": {
            "type": "integer",
            "title": "Age"
        },
        "bio": {
            "type": "string",
            "title": "Bio"
        },
        "password": {
            "type": "string",
            "title": "Password",
            "minLength": 3
        }
    }
};

const uiSchema = {
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

export class Example extends React.Component<any, IExampleState> {
    public state: IExampleState = {
        formData: {
            firstName: "Chuck",
            lastName: "Norris",
            age: 75,
            bio: "Roundhouse kicking asses since 1940",
            password: "noneed"
        }
    }

    constructor(props: any) {
        super(props);
    }

    public render() {
      return (
          <div className="react-jsonschema-form-example">
              {   <Form schema={schema}
                        uiSchema={uiSchema}
                        showErrorList={false}
                        noValidate={false}
                        noHtml5Validate={false}
                        formData={this.state}
                        onChange={(formData) => this.setState({formData})} /> }
          </div>
      );
    }
}
