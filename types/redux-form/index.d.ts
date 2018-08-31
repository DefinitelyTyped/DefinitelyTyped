// Type definitions for redux-form 7.4
// Project: https://github.com/erikras/redux-form
// Definitions by: Carson Full <https://github.com/carsonf>
//                 Daniel Lytkin <https://github.com/aikoven>
//                 Karol Janyst <https://github.com/LKay>
//                 Luka Zakrajsek <https://github.com/bancek>
//                 Alex Young <https://github.com/alsiola>
//                 Anton Novik <https://github.com/tehbi4>
//                 Huw Martin <https://github.com/huwmartin>
//                 Ethan Resnick <https://github.com/ethanresnick>
//                 Tim de Koning <https://github.com/reggino>
//                 Maddi Joyce <https://github.com/maddijoyce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import {
  ComponentClass,
  StatelessComponent,
  ReactElement
} from "react";

export type FieldType = "Field" | "FieldArray";

export interface ErrorOther<T = string> {
    _error?: T;
}

export type FormErrors<FormData = {}, T = string> = {
    [P in keyof FormData]?: ReactElement<any> | T;
} & ErrorOther<T>;

export interface WarningOther<T = void> {
    _warning?: T;
}

export type FormWarnings<FormData = {}, T = void> = {
    [P in keyof FormData]?: ReactElement<any> | string | WarningOther<T>;
};

export interface RegisteredFieldState {
    name: string;
    type: FieldType;
}

export type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

export * from "./lib/reduxForm";
export * from "./lib/Field";
export * from "./lib/Fields";
export * from "./lib/FieldArray";
export * from "./lib/Form";
export * from "./lib/FormName";
export * from "./lib/FormSection";
export * from "./lib/formValues";
export * from "./lib/formValueSelector";
export * from "./lib/reducer";
export * from "./lib/SubmissionError";
export * from "./lib/actions";
export * from "./lib/actionTypes";
export * from "./lib/selectors";
