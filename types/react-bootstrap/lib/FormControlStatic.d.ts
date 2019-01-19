import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace FormControlStatic {
    export interface FormControlStaticProps extends ReactDOM.HTMLProps<FormControlStatic> {
        bsClass?: string;
        componentClass?: React.ReactType;
    }
}
declare class FormControlStatic extends React.Component<FormControlStatic.FormControlStaticProps> { }
export = FormControlStatic
