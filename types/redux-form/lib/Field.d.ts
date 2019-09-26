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
export type Validator = (value: any, allValues?: any, props?: any, name?: any) => any;

export type EventHandler<Event> = (event: Event, name?: string) => void;
export type EventWithDataHandler<Event> = (event?: Event, newValue?: any, previousValue?: any, name?: string) => void;

export interface EventOrValueHandler<Event> extends EventHandler<Event> {
    (value: any): void;
}

export interface CommonFieldInputProps {
    name: string;
    onDragStart: EventHandler<DragEvent<any>>;
    onDrop: EventHandler<DragEvent<any>>;
    onFocus: EventHandler<FocusEvent<any>>;
}

export interface CommonFieldProps extends CommonFieldInputProps {
    onBlur: EventWithDataHandler<FocusEvent<any>>;
    onChange: EventWithDataHandler<ChangeEvent<any>>;
}

export interface BaseFieldProps<P = {}> extends Partial<CommonFieldProps> {
    name: string;
    component?: ComponentType<WrappedFieldProps & P> | "input" | "select" | "textarea";
    format?: Formatter | null;
    normalize?: Normalizer;
    props?: P;
    parse?: Parser;
    validate?: Validator | Validator[];
    warn?: Validator | Validator[];
    forwardRef?: boolean;
    immutableProps?: string[];
}

export interface GenericField<P> extends Component<BaseFieldProps<P> & P> {
    dirty: boolean;
    name: string;
    pristine: boolean;
    value: any;
    getRenderedComponent(): Component<WrappedFieldProps & P>;
}

export type GenericFieldHTMLAttributes =
    InputHTMLAttributes<HTMLInputElement> |
    SelectHTMLAttributes<HTMLSelectElement> |
    TextareaHTMLAttributes<HTMLTextAreaElement>;

export class Field<P extends GenericFieldHTMLAttributes | BaseFieldProps = GenericFieldHTMLAttributes | BaseFieldProps> extends Component<P> {
    dirty: boolean;
    name: string;
    pristine: boolean;
    value: any;
    getRenderedComponent(): Component<WrappedFieldProps & P>;
}

export interface WrappedFieldProps {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
}

export interface WrappedFieldInputProps extends CommonFieldInputProps {
    checked?: boolean;
    value: any;
    onBlur: EventOrValueHandler<FocusEvent<any>>;
    onChange: EventOrValueHandler<ChangeEvent<any>>;
}

export interface WrappedFieldMetaProps {
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

export default Field;
