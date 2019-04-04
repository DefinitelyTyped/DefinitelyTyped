import * as React from 'react';

declare namespace FormControlStatic {
    export interface FormControlStaticProps extends React.HTMLProps<FormControlStatic> {
        bsClass?: string;
        componentClass?: React.ElementType;
    }
}
declare class FormControlStatic extends React.Component<FormControlStatic.FormControlStaticProps> { }
export = FormControlStatic
