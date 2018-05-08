import { Component, ComponentType } from "react";
import { Formatter, Parser, WrappedFieldProps } from "../index";

interface BaseFieldsProps<P = {}> {
    names: string[];
    component?: ComponentType<any>;
    format?: Formatter | null;
    props?: P;
    parse?: Parser;
    withRef?: boolean;
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
