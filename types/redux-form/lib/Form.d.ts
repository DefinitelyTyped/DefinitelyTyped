import { Component, FormHTMLAttributes, FormEvent, FormEventHandler } from "react";
import { FormProps, FormErrors, FormSubmitHandler, Omit } from "../index";

interface FormSubmitProp<FormData = {}, P = {}, ErrorType = string> {
    onSubmit?: FormSubmitHandler<FormData, P, ErrorType>;
}

export type FormProps<FormData, P, ErrorType = string> = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & FormSubmitProp<FormData, P, ErrorType>;

export class GenericForm<FormData, P, ErrorType> extends Component<FormProps<FormData, P, ErrorType>> {}

export class Form<FormData = {}, P = {}, ErrorType = string> extends Component<FormProps<FormData, P, ErrorType>> implements GenericForm<FormData, P, ErrorType> {}
