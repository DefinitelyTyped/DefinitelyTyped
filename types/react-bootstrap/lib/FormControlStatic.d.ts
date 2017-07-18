import * as React from 'react';

interface FormControlStaticProps extends React.HTMLProps<FormControlStatic> {
  bsClass?: string;
  componentClass?: React.ReactType;
}

export default class FormControlStatic extends React.Component<FormControlStaticProps> { }
