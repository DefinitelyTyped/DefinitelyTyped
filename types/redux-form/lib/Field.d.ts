import {
    Component,
    ComponentType,
    ReactElement,
    ChangeEvent,
    DragEvent,
    FocusEvent,
    InputHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes
} from "react";
import { Dispatch } from "redux";

export type Normalizer = (value: any, previousValue?: any, allValues?: any, previousAllValues?: any) => any;
export type Formatter = (value: any, name: string) => any;
export type Parser = (value: any, name: string) => any;
export type Validator = (value: any, allValues?: any, props?: any) => any;

interface EventHandler<Event> {
    (event: Event): void;
}

interface EventOrValueHandler<Event> extends EventHandler<Event> {
    (value: any): void;
}

interface CommonFieldProps {
    name: string;
    onBlur: EventOrValueHandler<FocusEvent<any>>;
    onChange: EventOrValueHandler<ChangeEvent<any>>;
    onDragStart: EventHandler<DragEvent<any>>;
    onDrop: EventHandler<DragEvent<any>>;
    onFocus: EventHandler<FocusEvent<any>>;
}

interface BaseFieldProps<P = {}> extends Partial<CommonFieldProps> {
    name: string;
    component?: ComponentType<P> | "input" | "select" | "textarea",
    format?: Formatter | null;
    normalize?: Normalizer;
    props?: P;
    parse?: Parser;
    validate?: Validator | Validator[];
    warn?: Validator | Validator[];
    withRef?: boolean;
}

export interface GenericField<P> extends Component<BaseFieldProps<P> & P> {
    dirty: boolean;
    name: string;
    pristine: boolean;
    value: any;
    getRenderedComponent(): Component<WrappedFieldProps & P>;
}

type GenericFieldHTMLAttributes = InputHTMLAttributes<HTMLInputElement> | SelectHTMLAttributes<HTMLSelectElement> | TextareaHTMLAttributes<HTMLTextAreaElement>;

export class Field<P = GenericFieldHTMLAttributes> extends Component<BaseFieldProps<P> & P> implements GenericField<P> {
    dirty: boolean;
    name: string;
    pristine: boolean;
    value: any;
    getRenderedComponent(): Component<WrappedFieldProps & P>;
}

interface WrappedFieldProps {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
}

interface WrappedFieldInputProps extends CommonFieldProps {
    checked?: boolean;
    value: any;
}

interface WrappedFieldMetaProps {
    active?: boolean;
    autofilled: boolean;
    asyncValidating: boolean;
    dirty: boolean;
    dispatch: Dispatch<any>;
    error?: any;
    form: string;
    initial: any;
    invalid: boolean;
    pristine: boolean;
    submitting: boolean;
    submitFailed: boolean;
    touched: boolean;
    valid: boolean;
    visited: boolean;
    warning?: any;
}
