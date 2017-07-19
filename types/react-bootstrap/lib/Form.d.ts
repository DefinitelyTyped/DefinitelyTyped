import * as React from 'react';

declare class Form extends React.Component<FormProps> { }
declare namespace Form { }
export = Form

interface FormProps extends React.HTMLProps<Form> {
  bsClass?: string;
  componentClass?: React.ReactType;
  horizontal?: boolean;
  inline?: boolean;
}
