// Type definitions for redux-form 6.6
// Project: https://github.com/erikras/redux-form
// Definitions by: Carson Full <https://github.com/carsonf>, Daniel Lytkin <https://github.com/aikoven>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
  ComponentClass,
  StatelessComponent,
  ReactElement
} from "react";

export type FieldValue = any;

export type FieldType = "Field" | "FieldArray";

export interface DataShape {
    [fieldName: string]: FieldValue
}

export type FormErrors<FormData extends DataShape> = {
    [P in keyof FormData]?: ReactElement<any> | string;
} & { _error?: string };

export type FormWarnings<FormData extends DataShape> = {
    [P in keyof FormData]?: ReactElement<any> | string;
} & { _warning?: string };

/**
 * A component class or stateless function component.
 * Workaround for: ComponentClass<P> | SFC<P> which does
 * not resolve due to a bug in TypeScript.
 * https://github.com/Microsoft/TypeScript/pull/8674
 */
export type ComponentConstructor<P> = ComponentClass<P> | StatelessComponent<P>;

export * from "./lib/reduxForm";
export * from "./lib/Field";
export * from "./lib/Fields";
export * from "./lib/FieldArray";
export * from "./lib/Form";
export * from "./lib/FormSection";
export * from "./lib/actions";
export * from "./lib/reducer";
export * from "./lib/selectors";
