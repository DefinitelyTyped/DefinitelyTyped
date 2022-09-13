import * as React from "react";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> { }

declare const Form: React.FC<FormProps>;

export default Form;
