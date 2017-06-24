import { Component, HTMLProps, FormEvent } from "react";
import { Dispatch } from "redux";
import { SubmitHandler, FormProps, FormErrors } from "../index"

interface FormSubmitHandler {
    (values: any, dispatch?: Dispatch<any>, props?: FormProps<any, any, any> & { [prop: string]: any }): void | FormErrors<any> | Promise<any>;
    //(e: FormEvent<HTMLFormElement>): void;
}

export interface FormComponentProps extends HTMLProps<HTMLFormElement> {
    /**
     * The function to call when form submission is triggered.
     */
    onSubmit: FormSubmitHandler;
}

/**
 * The Form component is a simple wrapper for the React <form> component that
 * allows the surrounding redux-form-decorated component to trigger its
 * onSubmit function.
 */
export class Form extends Component<FormComponentProps> {}
