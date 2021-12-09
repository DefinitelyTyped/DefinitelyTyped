// Type definitions for formol 2.7
// Project: https://github.com/Kozea/formol
// Definitions by: today- <https://github.com/today->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export const ConditionalContext: {
    Consumer: any;
    Provider: any;
};

export const FormolContext: {
    Consumer: any;
    Provider: any;
};

interface FormolProps<V = any> {
    children?: React.ReactNode;
    item?: V | undefined;
    types?: ReadonlyArray<string> | undefined;
    i18n?: any;
    className?: string | undefined;
    readOnly?: boolean | undefined;
    submitText?: any;
    cancelText?: any;
    noCancel?: any;
    allowUnmodifiedSubmit?: any;
    extra?: React.ReactNode | undefined;
    classes?: any;
    onSubmit?: ((e: Event) => void) | undefined;
    validator?: ((v: V) => {[K in keyof V]?: string | null}) | undefined;
}

declare const Formol: React.ComponentType<FormolProps>;
export default Formol;

interface InlinerProps {
    children?: React.ReactNode;
}

export const Inliner: React.ComponentType<InlinerProps>;

interface FieldSetProps<V = any> {
    type?: string | undefined;
    isChecked?: boolean | undefined;
    value?: V | undefined;
    choices?: ReadonlyArray<any> | undefined;
    elementRef?: React.Ref<any> | undefined;
    dangerousRawHTMLLabels?: boolean | undefined;
    onChange?: (() => void) | undefined;
}

export const FieldSet: React.ComponentType<FieldSetProps>;

interface SwitchButtonProps {
    type?: string | undefined;
    i18n?: { yes: React.ReactNode, no: React.ReactNode } & { [k: string]: any } | undefined;
    leftLabel?: React.ReactNode | undefined;
    rightLabel?: React.ReactNode | undefined;
    className?: string | undefined;
}

export const SwitchButton: React.ComponentType<SwitchButtonProps>;

interface ConditionalProps<V = any> {
    children?: React.ReactNode;
    show?: ((val: V) => boolean) | boolean | undefined;
    readOnly?: ((val: V) => boolean) | boolean | undefined;
    context?: any;
    value?: ((v: V) => any) | undefined;
}

export const Conditional: React.ComponentType<ConditionalProps>;

export function ConditionalContextWrapper(e: React.Component<any>): React.Component<any>;

interface FieldProps<V = any> {
    register?: ((name: string, element: React.Ref<any>, validator: any, validityErrors: any) => void) | undefined;
    unregister?: ((name: string) => void) | undefined;
    name?: string | undefined;
    validator?: ((v: V) => string) | undefined;
    validityErrors?: any;
    value?: V | undefined;
    normalizer?: ((v: V) => V) | undefined;
    handleChange?: ((name: string, v: V) => void) | undefined;
    handleEntered?: ((name: string, v: V) => void) | undefined;
    dangerousRawHTMLLabels?: boolean | undefined;
    type?: string | undefined;
    title?: string | undefined;
    modified?: boolean | undefined;
    className?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    unit?: React.ReactNode | undefined;
    extras?: React.ReactNode | undefined;
    formatter?: ((v: V) => V) | undefined;
    unformatter?: ((v: V) => V) | undefined;
    children?: any;
    classNameModifiers?: any;
    TypeField?: React.ComponentType | undefined;
    i18n?: any;
    error?: React.ReactNode | undefined;
    choices?: ReadonlyArray<any> | undefined;
    size?: number | undefined;
    max?: number | undefined;
    required?: boolean | undefined;
    minLength?: number | undefined;
}

export const Field: React.ComponentType<FieldProps>;

export const NoRequestNeeded: Error;

export function FormolContextWrapper(WrappedComponent: React.Component<any>): React.Component<any>;

export function choicesAdapter(WrappedComponent: React.Component<any>): React.Component<any>;

export function memoizedChoices(WrappedComponent: React.Component<any>): React.Component<any>;

export function multipleAdapter(WrappedComponent: React.Component<any>): React.Component<any>;

export function copy(o: any, names: ReadonlyArray<string>): any;

export function diff(newItem: any, oldItem: any, names: ReadonlyArray<string>): any;

export function emptyStringToNull(v: string): string | null;

export function fieldPropsAdapter(v: any): any;

export function get(data: any, key: string): any;

export function insert(transientItem: any, name: string, value: any, names: ReadonlyArray<string>): any;

export function isModified(newItem: any, oldItem: any, names: ReadonlyArray<string>): boolean;

export function nullishToEmptyString(v?: string): string;

export function set(data: any, key: string, value: any, noArray?: boolean): any;

export function unrest(e: any, ...args: any[]): any;
