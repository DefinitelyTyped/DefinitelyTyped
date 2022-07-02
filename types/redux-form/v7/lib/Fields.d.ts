import { Component, ComponentType } from "react";
import { Formatter, Parser, WrappedFieldProps } from "../index";

interface BaseFieldsProps<P = {}> {
    names: string[];
    component?: ComponentType<any> | undefined;
    format?: Formatter | null | undefined;
    props?: P | undefined;
    parse?: Parser | undefined;
    withRef?: boolean | undefined;
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
