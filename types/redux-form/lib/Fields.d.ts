import { Component, ComponentType } from "react";
import { Formatter, Parser, WrappedFieldProps, Validator } from "../index";

export type FieldsWarnerOrValidator =
    | Validator
    | Validator[]
    | { [name: string]: Validator | Validator[] };

interface BaseFieldsProps<P = {}> {
    names: string[];
    component?: ComponentType<any>;
    format?: Formatter | null;
    props?: P;
    parse?: Parser;
    forwardRef?: boolean;
    validate?: FieldsWarnerOrValidator;
    warn?: FieldsWarnerOrValidator;
}

export interface GenericFields<P> extends Component<BaseFieldsProps<P> & P> {
    dirty: boolean;
    names: string[];
    pristine: boolean;
    values: { [name: string]: any };
    getRenderedComponent(): Component<BaseFieldsProps & WrappedFieldsProps & P>;
}

export class Fields<P = {}> extends Component<BaseFieldsProps<P> & P> implements GenericFields<P> {
    dirty: boolean;
    names: string[];
    pristine: boolean;
    values: { [name: string]: any };
    getRenderedComponent(): Component<BaseFieldsProps & WrappedFieldsProps & P>;
}

interface WrappedFieldsProps {
    [name: string]: WrappedFieldsProps & WrappedFieldProps;
}
