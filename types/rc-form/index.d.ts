// Type definitions for rc-form 2.4
// Project: https://github.com/react-component/form
// Definitions by: Mikhail Tsyplakov <https://github.com/jaybekster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare namespace RcForm {

    type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

    type DeepPartial<T> = T extends Primitive
        ? never
        : { [P in keyof T]?: T[P] extends Primitive ? T[P] : DeepPartial<T[P]> };

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

    export interface WrappedFormUtils<TFields> {
        getFieldProps(fieldName: string, options: GetFieldDecoratorOptions): void;
        getFieldsValue(fieldNames?: string[]): { [field: string]: any };
        getFieldValue(fieldName: string): any;
        setFieldsValue(obj: DeepPartial<TFields>): void;
        setFields(obj: DeepPartial<Fields<TFields>>): void;
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

    interface Field<T = any> {
        name?: string;
        value?: T;
        errors?: string[];
        dirty?: boolean;
        touched?: boolean;
    }

    type Primitive = null | undefined | number | string | symbol;

    type Fields<T> = {
        [K in keyof T]: T[K] extends Primitive
            ? Field<T[K]>
            : T[K] extends any[]
                ? { [Key: number]: Fields<T[K][number]>}
                : Fields<T[K]>
    };

    export interface FormCreateOption<TProps extends FormComponentProps> {
        onFieldsChange?: (
        props: TProps,
        changedFields: Fields<GetFields<TProps>>,
        allFields: Fields<GetFields<TProps>>,
        ) => void;
        onValuesChange?: (props: TProps, changedValues: Fields<GetFields<TProps>>, allValues: Fields<GetFields<TProps>>) => void;
        mapProps?: (props: TProps) => WrappedFormUtils<GetFields<TProps>>;
        mapPropsToFields?: (props: TProps) => Fields<GetFields<TProps>>;
        validateMessages?: FormCreateOptionMessages;
        withRef?: boolean;
        fieldNameProp?: string;
        fieldMetaProp?: string;
        fieldDataProp?: string;
    }

    type FormWrappedProps<TOwnProps extends WrappedFormInternalProps> = (
        component: React.ComponentType<TOwnProps>
    ) => React.ComponentType<TOwnProps>;

    interface ComponentDecorator<P> {
    (
        component: React.ComponentClass<P> | React.SFC<P>,
    ): React.ComponentClass<RcBaseFormProps & Omit<P, keyof FormComponentProps>>;
    }

    type GetFields<T> = T extends FormComponentProps<infer A> ? A : {};

    export function createForm<TOwnProps extends FormComponentProps>(options?: FormCreateOption<TOwnProps>): ComponentDecorator<TOwnProps>;

}
