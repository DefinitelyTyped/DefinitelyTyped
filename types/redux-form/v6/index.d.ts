import { ComponentClass, FunctionComponent, ReactElement } from "react";

export type FieldValue = any;

export interface FieldState {
    active?: boolean | undefined;
    touched?: boolean | undefined;
    visited?: boolean | undefined;
    error?: any;
}

export type FieldType = "Field" | "FieldArray";

export interface DataShape {
    [fieldName: string]: FieldValue;
}

export type FormErrors<FormData extends DataShape> = {
    [P in keyof FormData]?: ReactElement | string | { _error?: string | undefined };
};

export type FormWarnings<FormData extends DataShape> = {
    [P in keyof FormData]?: ReactElement | string | { _warning?: string | undefined };
};

export type FormMeta<FormData extends DataShape> = {
    [P in keyof FormData]?: FieldState;
};

/**
 * A component class or stateless function component.
 * Workaround for: ComponentClass<P> | FC<P> which does
 * not resolve due to a bug in TypeScript.
 * https://github.com/Microsoft/TypeScript/pull/8674
 */
export type ComponentConstructor<P> = ComponentClass<P> | FunctionComponent<P>;

export * from "./lib/actions";
export * from "./lib/actionTypes";
export * from "./lib/Field";
export * from "./lib/FieldArray";
export * from "./lib/Fields";
export * from "./lib/Form";
export * from "./lib/FormSection";
export * from "./lib/reducer";
export * from "./lib/reduxForm";
export * from "./lib/selectors";
