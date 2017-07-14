// Type definitions for redux-form 7.0
// Project: https://github.com/erikras/redux-form
// Definitions by: Carson Full <https://github.com/carsonf>, Daniel Lytkin <https://github.com/aikoven>, Karol Janyst <https://github.com/LKay>, Luka Zakrajsek <https://github.com/bancek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
  ComponentClass,
  StatelessComponent,
  ReactElement
} from "react";

export type FieldType = "Field" | "FieldArray";

export interface ErrorOther<T = void> {
    _error?: T;
}

export type FormErrors<FormData = {}, T = void> = {
    [P in keyof FormData]?: ReactElement<any> | string | ErrorOther<T>;
};

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


//export type Obj<T> = { [k: string]: T };
//export type ObjectHasKey<O extends {}, K extends string> = ({[K in keyof O]: '1' } & Obj<'0'>)[K];
export type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
//export type Overwrite<K, T> = {[P in keyof T | keyof K]: { 1: T[P], 0: K[P] }[ObjectHasKey<T, P>]};

/**
 * A component class or stateless function component.
 * Workaround for: ComponentClass<P> | SFC<P> which does
 * not resolve due to a bug in TypeScript.
 * https://github.com/Microsoft/TypeScript/pull/8674
 */
export type ComponentConstructor<P = {}> = ComponentClass<P> | StatelessComponent<P>;

export * from "redux-form/lib/reduxForm";
//export * from "./lib/Field";
//export * from "./lib/Fields";
//export * from "./lib/FieldArray";
export * from "redux-form/lib/Form";
export * from "redux-form/lib/FormSection";
export * from "redux-form/lib/formValues";
export * from "redux-form/lib/formValueSelector";
export * from "redux-form/lib/reducer";
export * from "redux-form/lib/SubmissionError";
export * from "redux-form/lib/actions";
export * from "redux-form/lib/actionTypes";
export * from "redux-form/lib/selectors";
