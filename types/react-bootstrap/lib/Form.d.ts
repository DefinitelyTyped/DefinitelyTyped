import * as React from 'react';

interface FormProps extends React.HTMLProps<Form> {
  bsClass?: string;
  componentClass?: React.ReactType;
  horizontal?: boolean;
  inline?: boolean;
}

export default class Form extends React.Component<FormProps> { }
