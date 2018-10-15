// Type definitions for react-mailchimp-subscribe 2.0
// Project: https://revolunet.github.io/react-mailchimp-subscribe/
// Definitions by: Omar Diab <https://github.com/osdiab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from "react";

// A few common set of form fields, based on defaults in Mailchimp's website
export interface EmailFormFields {
    EMAIL: string;
}

export interface NameFormFields extends EmailFormFields {
    FNAME: string;
    LNAME: string;
}

export interface ClassicFormFields extends NameFormFields {
    "BIRTHDAY[month]": number;
    "BIRTHDAY[day]": number;
}

// library default form just sends EMAIL
export type DefaultFormFields = EmailFormFields;

export interface ResponseArgs {
    status: "success" | "error";
    message: string;
}

export interface PendingArgs {
    status: "sending" | null;
    message: null;
}

export interface SubscribeArg<FormFields> {
    subscribe: (data: FormFields) => void;
}

export type FormHooks<FormFields> = SubscribeArg<FormFields> &
    (ResponseArgs | PendingArgs);

export interface Props<FormFields> {
    render?: (hooks: FormHooks<FormFields>) => ReactNode;
    url: string;
}

export default class MailchimpSubscribe<FormFields = DefaultFormFields> extends Component<
    Props<FormFields>
> {}
