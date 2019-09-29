import * as React from "react";

interface InheritedProps extends React.FormHTMLAttributes<HTMLFormElement> { }

export interface FormProps extends InheritedProps { }

declare const Form: React.FC<FormProps>;

export default Form;
