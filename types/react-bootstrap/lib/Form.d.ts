import * as React from 'react';

declare namespace Form {
    export interface FormProps extends React.HTMLProps<Form> {
        bsClass?: string | undefined;
        componentClass?: React.ElementType | undefined;
        horizontal?: boolean | undefined;
        inline?: boolean | undefined;
    }
}
declare class Form extends React.Component<Form.FormProps> { }
export = Form;
