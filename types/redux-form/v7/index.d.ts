import { ComponentClass, FunctionComponent, ReactElement } from "react";

export type FieldType = "Field" | "FieldArray";

export interface ErrorOther<T = string> {
    _error?: T | undefined;
}

export type FormErrors<FormData = {}, T = string> =
    & {
        [P in keyof FormData]?: ReactElement | T;
    }
    & ErrorOther<T>;

export interface WarningOther<T = void> {
    _warning?: T | undefined;
}

export type FormWarnings<FormData = {}, T = void> = {
    [P in keyof FormData]?: ReactElement | string | WarningOther<T>;
};

export interface RegisteredFieldState {
    name: string;
    type: FieldType;
}

export type Omit<T, K extends keyof T> = Pick<
    T,
    ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never; [x: number]: never })[keyof T]
>;

export * from "./lib/actions";
export * from "./lib/actionTypes";
export * from "./lib/Field";
export * from "./lib/FieldArray";
export * from "./lib/Fields";
export * from "./lib/Form";
export * from "./lib/FormName";
export * from "./lib/FormSection";
export * from "./lib/formValues";
export * from "./lib/formValueSelector";
export * from "./lib/reducer";
export * from "./lib/reduxForm";
export * from "./lib/selectors";
export * from "./lib/SubmissionError";
