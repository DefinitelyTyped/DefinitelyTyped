import * as React from 'react';

declare class FormControlStatic extends React.Component<FormControlStaticProps> { }
declare namespace FormControlStatic { }
export = FormControlStatic

interface FormControlStaticProps extends React.HTMLProps<FormControlStatic> {
  bsClass?: string;
  componentClass?: React.ReactType;
}
