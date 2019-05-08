// Type definitions for rc-form 2.4
// Project: https://github.com/react-component/form
// Definitions by: Mikhail Tsyplakov <https://github.com/jaybekster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export as namespace rcForm

type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

export interface ValidateFieldsOptions {
    first?: boolean;
    firstFields?: string[];
    force?: boolean;
}

export interface ValidationRule {
    message?: React.ReactNode;
    type?: string;
    required?: boolean;
    whitespace?: boolean;
    len?: number;
    min?: number;
    max?: number;
    enum?: string | string[];
    pattern?: RegExp;
    transform?: (value: any) => any;
    validator?: (rule: any, value: any, callback: any, source?: any, options?: any) => any;
}

export interface GetFieldDecoratorOptions {
    valuePropName?: string;
    initialValue?: any;
    trigger?: string;
    getValueFromEvent?: (...args: any[]) => any;
    getValueProps?: (value: any) => any;
    validateTrigger?: string | string[];
    rules?: ValidationRule[];
    exclusive?: boolean;
    normalize?: (value: any, prevValue: any, allValues: any) => any;
    validateFirst?: boolean;
    preserve?: boolean;
}

export type ValidateCallback<V> = (errors: any, values: V) => void;

type GeoOnlyDirectKeys<T> = {
    [K in keyof T]: T[K] extends object ? never : K
}[keyof T];

export interface WrappedFormUtils<TFields> {
    getFieldProps(fieldName: string, options: GetFieldDecoratorOptions): void;
    getFieldsValue(fieldNames?: string[]): { [field: string]: any };
    getFieldValue(fieldName: string): any;
    setFieldsValue(obj: TFields): void;
    setFields(obj: object): void;
    validateFields(
        fieldNames: string[],
        options: ValidateFieldsOptions,
        callback: ValidateCallback<TFields>,
    ): void;
    validateFields(options: ValidateFieldsOptions, callback: ValidateCallback<TFields>): void;
    validateFields(
        fieldNames: string[],
        callbackOrOptions: ValidateCallback<TFields> | ValidateFieldsOptions
    ): void;
    validateFields(callbackOrOptions: ValidateCallback<TFields> | ValidateFieldsOptions): void;
    validateFields(fieldNames?: string[]): void;
    getFieldError(name: string): object[];
    getFieldsError(names?: string[]): object;
    isFieldValidating(name: string): boolean;
    isFieldTouched(name: string): boolean;
    isFieldsTouched(names?: string[]): boolean;
    resetFields(names?: string[]): void;
    getFieldDecorator(
        id: string,
        options?: GetFieldDecoratorOptions,
    ): (node: React.ReactNode) => React.ReactNode;
}

export interface RcBaseFormProps {
    wrappedComponentRef?: any;
}

export interface WrappedFormInternalProps<V = any> {
    form: WrappedFormUtils<V>;
}

export interface FormComponentProps<V = any> extends WrappedFormInternalProps<V>, RcBaseFormProps {
    form: WrappedFormUtils<V>;
}

type FormCreateOptionMessagesCallback = (...args: any[]) => string;

interface FormCreateOptionMessages {
  [messageId: string]: string | FormCreateOptionMessagesCallback | FormCreateOptionMessages;
}

interface Field<T> {
    name?: string;
    value?: T;
    dirty?: boolean;
    touched?: boolean;
}

type Fields<T> = {
    [K in keyof T]: Field<T[K]>
};

export interface FormCreateOption<TProps> {
    onFieldsChange?: (props: TProps, fields: {[key: string]: any}, allFields: {[key: string]: any}) => void;
    onValuesChange?: (props: TProps, changedValues: {[key: string]: any}, allValues: {[key: string]: any}) => void;
    mapProps?: (props: TProps) => WrappedFormUtils<{[key: string]: any}> & { [key: string]: any };
    mapPropsToFields?: (props: TProps) => void;
    validateMessages?: FormCreateOptionMessages;
    withRef?: boolean;
    fieldNameProp?: string;
    fieldMetaProp?: string;
    fieldDataProp?: string;
}

interface ComponentDecorator {
    <P extends FormComponentProps>(
        component: React.ComponentClass<P> | React.SFC<P>,
    ): React.ComponentClass<RcBaseFormProps & Omit<P, keyof FormComponentProps>>;
}

export function createForm(): ComponentDecorator

export {};
