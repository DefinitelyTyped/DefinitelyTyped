import { Component, FormHTMLAttributes, FormEvent, FormEventHandler } from "react";
import { Dispatch } from "redux";
import { FormProps, FormErrors, FormSubmitHandler, Omit } from "../index";

interface FormSubmitProp<FormData = {}, P = {}> {
    onSubmit?: FormSubmitHandler<FormData, P>;
}

export type FormProps<FormData, P> = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & FormSubmitProp<FormData, P>;

export class GenericForm<FormData, P> extends Component<FormProps<FormData, P>> {}

export class Form<FormData = {}, P = {}> extends Component<FormProps<FormData, P>> implements GenericForm<FormData, P> {}
