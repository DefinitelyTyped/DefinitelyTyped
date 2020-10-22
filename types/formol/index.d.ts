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
    item?: V;
    types?: ReadonlyArray<string>;
    i18n?: any;
    className?: string;
    readOnly?: boolean;
    submitText?: any;
    cancelText?: any;
    noCancel?: any;
    allowUnmodifiedSubmit?: any;
    extra?: React.ReactNode;
    classes?: any;
    onSubmit?: (e: Event) => void;
    validator?: (v: V) => {[K in keyof V]?: string | null};
}

declare const Formol: React.ComponentType<FormolProps>;
export default Formol;

export const Inliner: React.ComponentType;

interface FieldSetProps<V = any> {
    type?: string;
    isChecked?: boolean;
    value?: V;
    choices?: ReadonlyArray<any>;
    elementRef?: React.Ref<any>;
    dangerousRawHTMLLabels?: boolean;
    onChange?: () => void;
}

export const FieldSet: React.ComponentType<FieldSetProps>;

interface SwitchButtonProps {
    type?: string;
    i18n?: { yes: React.ReactNode, no: React.ReactNode } & { [k: string]: any };
    leftLabel?: React.ReactNode;
    rightLabel?: React.ReactNode;
    className?: string;
}

export const SwitchButton: React.ComponentType<SwitchButtonProps>;

interface ConditionalProps<V = any> {
    show?: ((val: V) => boolean) | boolean;
    readOnly?: ((val: V) => boolean) | boolean;
    context?: any;
    value?: (v: V) => any;
}

export const Conditional: React.ComponentType<ConditionalProps>;

export function ConditionalContextWrapper(e: React.Component<any>): React.Component<any>;

interface FieldProps<V = any> {
    register?: (name: string, element: React.Ref<any>, validator: any, validityErrors: any) => void;
    unregister?: (name: string) => void;
    name?: string;
    validator?: (v: V) => string;
    validityErrors?: any;
    value?: V;
    normalizer?: (v: V) => V;
    handleChange?: (name: string, v: V) => void;
    handleEntered?: (name: string, v: V) => void;
    dangerousRawHTMLLabels?: boolean;
    type?: string;
    title?: string;
    modified?: boolean;
    className?: string;
    readOnly?: boolean;
    disabled?: boolean;
    unit?: React.ReactNode;
    extras?: React.ReactNode;
    formatter?: (v: V) => V;
    unformatter?: (v: V) => V;
    children?: any;
    classNameModifiers?: any;
    TypeField?: React.ComponentType;
    i18n?: any;
    error?: React.ReactNode;
    choices?: ReadonlyArray<any>;
    size?: number;
    max?: number;
    required?: boolean;
    minLength?: number;
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
