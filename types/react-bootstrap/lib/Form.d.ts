import * as React from 'react';

declare namespace Form {
    export interface FormProps extends React.HTMLProps<Form> {
        bsClass?: string;
        componentClass?: React.ReactType;
        horizontal?: boolean;
        inline?: boolean;
    }
}
declare class Form extends React.Component<Form.FormProps> { render(): React.ReactNode }
export = Form;
