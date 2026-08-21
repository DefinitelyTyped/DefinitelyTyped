import { Component, FormEvent, HTMLProps } from "react";
import { Dispatch } from "redux";
import { FormErrors, FormProps, SubmitHandler } from "../index";

interface FormSubmitHandler {
    (
        values: any,
        dispatch?: Dispatch<any>,
        props?: FormProps<any, any, any> & { [prop: string]: any },
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    ): void | FormErrors<any> | Promise<any>;
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
