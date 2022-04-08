import { Component, ComponentType } from "react";
import { Validator } from "../index";

interface _BaseFieldArrayProps<P = {}, FieldValue = any> {
    name: string;
    component: ComponentType<WrappedFieldArrayProps<FieldValue> & P>;
    validate?: Validator | Validator[];
    warn?: Validator | Validator[];
    withRef?: boolean;
    rerenderOnEveryChange?: boolean;
}

export type BaseFieldArrayProps<P = {}, FieldValue = any> = (P | { props: P}) & _BaseFieldArrayProps<P, FieldValue>;

export interface GenericFieldArray<FieldValue = any, P = {}> extends Component<BaseFieldArrayProps<P, FieldValue>> {
    name: string;
    valid: boolean;
    getRenderedComponent(): Component<WrappedFieldArrayProps<FieldValue> & P>;
}

export class FieldArray<P = {}, FieldValue = any> extends Component<BaseFieldArrayProps<P, FieldValue>> implements GenericFieldArray<FieldValue, P> {
    name: string;
    valid: boolean;
    getRenderedComponent(): Component<WrappedFieldArrayProps<FieldValue> & P>;
}

export interface WrappedFieldArrayProps<FieldValue = any> {
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
    splice(index: number, removeNum: number | null, value: FieldValue): void;
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
