import { Component, ComponentType } from "react";
import { Validator } from "../index";

export interface BaseFieldArrayProps<P = {}> {
    name: string;
    component: ComponentType<P>;
    validate?: Validator | Validator[];
    warn?: Validator | Validator[];
    withRef?: boolean;
    props?: P;
    rerenderOnEveryChange?: boolean;
}

export interface GenericFieldArray<Field, P = {}> extends Component<BaseFieldArrayProps<P> & Partial<P>> {
    name: string;
    valid: boolean;
    getRenderedComponent(): Component<WrappedFieldArrayProps<Field> & P>;
}

export class FieldArray<P = {}> extends Component<BaseFieldArrayProps<P> & Partial<P>> implements GenericFieldArray<any, P> {
    name: string;
    valid: boolean;
    getRenderedComponent(): Component<WrappedFieldArrayProps<any> & P>;
}

export interface WrappedFieldArrayProps<FieldValue> {
    fields: FieldArrayFieldsProps<FieldValue>;
    meta: FieldArrayMetaProps;
}

export type FieldIterate<FieldValue, R = void> = (name: string, index: number, fields: FieldArrayFieldsProps<FieldValue>) => R;

export interface FieldArrayFieldsProps<FieldValue> {
    forEach(callback: FieldIterate<FieldValue>): void;
    get(index: number): FieldValue;
    getAll(): FieldValue[];
    removeAll(): void;
    insert(index: number, value: FieldValue): void;
    name: string;
    length: number;
    map<R>(callback: FieldIterate<FieldValue, R>): R[];
    pop(): FieldValue;
    push(value: FieldValue): void;
    remove(index: number): void;
    shift(): FieldValue;
    swap(indexA: number, indexB: number): void;
    move(from: number, to: number): void;
    unshift(value: FieldValue): void;
}

export interface FieldArrayMetaProps {
    dirty: boolean;
    error?: any;
    form: string;
    invalid: boolean;
    pristine: boolean;
    submitFailed: boolean;
    submitting: boolean;
    valid: boolean;
    warning?: any;
}
