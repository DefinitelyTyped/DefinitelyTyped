import { Component, FormHTMLAttributes, FormEvent } from "react";
import { Dispatch } from "redux";
import { SubmitHandler, FormProps, FormErrors, FormSubmitHandler } from "redux-form";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    onSubmit: FormSubmitHandler;
}

declare class Form extends Component<FormProps> {}
