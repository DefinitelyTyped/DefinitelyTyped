// Type definitions for redux-form v6.3.1
// Project: https://github.com/erikras/redux-form
// Definitions by: Carson Full <https://github.com/carsonf>, Daniel Lytkin <https://github.com/aikoven>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="react" />

import {
  ComponentClass,
  StatelessComponent,
} from 'react';

export type FieldValue = any;

export type FieldType = 'Field' | 'FieldArray';

export type DataShape = {[fieldName:string]: FieldValue};

export type FormErrors<FormData extends DataShape> = FormData & { _error?: string };

export type FormWarnings<FormData extends DataShape> = FormData & { _warning?: string };

/**
 * A component class or stateless function component.
 * Workaround for: ComponentClass<P> | SFC<P> which does
 * not resolve due to a bug in TypeScript.
 * https://github.com/Microsoft/TypeScript/pull/8674
 */
export type ComponentConstructor = ComponentClass<any> | StatelessComponent<any>;

export * from "./lib/reduxForm";
export * from "./lib/Field";
export * from "./lib/Fields";
export * from "./lib/FieldArray";
export * from "./lib/FormSection";
export * from "./lib/actions";
export * from "./lib/reducer";
export * from "./lib/selectors";
