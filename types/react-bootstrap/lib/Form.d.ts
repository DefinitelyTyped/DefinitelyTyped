import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Form {
    export interface FormProps extends ReactDOM.HTMLProps<Form> {
        bsClass?: string;
        componentClass?: React.ReactType;
        horizontal?: boolean;
        inline?: boolean;
    }
}
declare class Form extends React.Component<Form.FormProps> { }
export = Form;
