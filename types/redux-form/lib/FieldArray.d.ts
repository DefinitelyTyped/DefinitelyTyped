import { Component, ComponentType } from "react";
import { Validator } from "../index";

interface BaseFieldArrayProps<FieldValue, P = {}> {
    name: string;
    component: ComponentType<WrappedFieldArrayProps<FieldValue> & P>;
    validate?: Validator | Validator[];
    warn?: Validator | Validator[];
    withRef?: boolean;
    props?: P;
    rerenderOnEveryChange?: boolean;
}

export interface GenericFieldArray<Field, P = {}> extends Component<BaseFieldArrayProps<Field, P> & P> {
    name: string;
    valid: boolean;
    getRenderedComponent(): Component<WrappedFieldArrayProps<Field> & P>;
}

export class FieldArray<FieldValue, P = {}> extends Component<BaseFieldArrayProps<FieldValue, P> & P> implements GenericFieldArray<FieldValue, P> {
    name: string;
    valid: boolean;
    getRenderedComponent(): Component<WrappedFieldArrayProps<FieldValue> & P>;
}

interface WrappedFieldArrayProps<FieldValue> {
    fields: FieldsProps<FieldValue & any>;
    meta: FieldArrayMetaProps;
}

type FieldIterate<FieldValue, R = void> = (name: string, index: number, fields: FieldsProps<FieldValue>) => R;

interface FieldsProps<FieldValue> {
    forEach(callback: FieldIterate<FieldValue>): void;
    get(index: number): FieldValue;
    getAll(): FieldValue[];
    insert(index: number, value: FieldValue): void;
    length: number;
    map<R>(callback: FieldIterate<FieldValue, R>): R[];
    pop(): FieldValue;
    push(value: FieldValue): void;
    remove(index: number): void;
    shift(): FieldValue;
    swap(indexA: number, indexB: number): void;
    unshift(value: FieldValue): void;
}

interface FieldArrayMetaProps {
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
