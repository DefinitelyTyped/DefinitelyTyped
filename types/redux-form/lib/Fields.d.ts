import { Component, ComponentType } from "react";
import { Formatter, Parser, WrappedFieldProps } from "redux-form";

interface BaseFieldsProps<P = {}> {
    names: string[];
    component?: ComponentType<any>;
    format?: Formatter | null;
    props?: P;
    parse?: Parser;
    withRef?: boolean;
}

export interface GenericFields<P> extends Component<BaseFieldsProps & P> {
    dirty: boolean;
    names: string[];
    pristine: boolean;
    values: { [name: string]: any };
    getRenderedComponent(): Component<BaseFieldsProps & P>;
}

export class Fields extends Component<BaseFieldsProps> implements GenericFields<any> {
    dirty: boolean;
    names: string[];
    pristine: boolean;
    values: { [name: string]: any };
    getRenderedComponent(): Component<any>;
}

interface WrappedFieldsProps {
    [name: string]: WrappedFieldsProps & WrappedFieldProps
}
