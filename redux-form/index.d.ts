// Type definitions for redux-form 6.2
// Project: https://github.com/erikras/redux-form
// Definitions by: Daniel Lytkin <https://github.com/aikoven>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";
import * as Redux from "redux";
import * as Immutable from "immutable";

declare namespace ReduxForm {

    type ComponentConstructor<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

    type PartialData<FormData extends DataShape> = {
        [P in keyof FormData]?: FormData[P];
    };

    type ErrorData<FormData extends DataShape> = {
        [P in keyof FormData]?: string;
    };

    interface FormError { _error?: string; }
    interface FormWarning { _warning?: string; }
    type FormErrors<FormData extends DataShape> = ErrorData<FormData> & FormError;
    type FormWarnings<FormData extends DataShape> = ErrorData<FormData> & FormWarning;

    type Normalizer = (value: any, previousValue?: any, allValues?: any, previousAllValues?: any) => any;
    type Formatter = (value: any, name?: string) => any;
    type Parser = (value: any, name?: string) => any;

    type FieldType = "Field" | "FieldArray";

    type SubmitHandler<FormData extends DataShape, S> = (values: FormData, dispatch?: Redux.Dispatch<S>) => undefined | FormErrors<FormData> | Promise<any>;

    interface NestedFields<A> {
        [fieldName: string]: A | NestedFields<A>;
    }

    interface DataShape {
        [fieldName: string]: any;
    }

    /* State */
    interface RegisteredField {
        name: string;
        type: FieldType;
    }

    interface FieldState {
        active?: boolean;
        touched?: boolean;
        visited?: boolean;
    }

    interface FormState {
        registeredFields: RegisteredField[];
        fields?: { [name: string]: FieldState };
        values?: DataShape;
        active?: string;
        anyTouched?: boolean;
        submitting?: boolean;
        submitErrors?: FormErrors<DataShape>;
        submitFailed?: boolean;
    }

    interface FormStateMap {
        [formName: string]: FormState;
    }

    type FromStateGetter<S> = (state: S) => FormStateMap;

    /* props */
    interface ArrayProps {
        insert(field: string, index: number, value: any): void;
        move(field: string, from: number, to: number): void;
        pop(field: string): void;
        push(field: string, value: any): void;
        remove(field: string, index: number): void;
        removeAll(field: string): void;
        shift(field: string): void;
        splice(field: string, index: number, removeNum: number, value: any): void;
        swap(field: string, indexA: number, indexB: number): void;
        unshift(field: string, value: any): void;
    }

    interface FormProps<FormData extends DataShape, S> {
        anyTouched?: boolean;
        array?: ArrayProps;
        asyncValidate?(): void;
        asyncValidation?: string | boolean;
        autofill?(field: string, value: any): void;
        blur?(field: string, value: any): void;
        change?(field: string, value: any): void;
        destroy?(): void;
        dirty?: boolean;
        error?: any;
        form?: string;
        handleSubmit?(event: React.FormEvent<any>): void;
        handleSubmit?(submit: SubmitHandler<FormData, S>): React.FormEventHandler<any>;
        initialize?(data: FormData): void;
        invalid?: boolean;
        pristine?: boolean;
        reset?(): void;
        submitFailed?: boolean;
        submitSucceeded?: boolean;
        submitting?: boolean;
        touch?(...fields: string[]): void;
        untouch?(...fields: string[]): void;
        valid?: boolean;
        warning?: any;
    }

    /* reduxForm() */
    interface Structure {
        deepEqual(a: any, b: any): boolean;
        deleteIn<S>(state: S, field: string): any;
        getIn<S>(state: S, field: string): any;
        setIn<S>(state: S, field: string, value: any): S & { [field: string]: any };
        splice(array: any[], index: number, removeNum?: number, value?: any): any[];
    }

    interface PlainStructure extends Structure {
        empty: any;
        emptyList: any[];
        fromJs(value: any): any;
        size(array: any[]): number;
        some(collection: {} | any[], predicate: any): boolean;
    }

    interface ImmutableStructure extends Structure {
        empty: Immutable.Map<any, any>;
        emptyList: Immutable.List<any>;
        fromJs(value: any): Immutable.List<any> | Immutable.Map<any, any>;
        size(list: Immutable.List<any>): number;
        some(iterable: Immutable.Iterable<any, any>, callback: <V, K>(value?: V, key?: K, iter?: Immutable.Iterable<K, V>) => boolean): boolean;
    }

    interface ValidateCallback<FormData extends DataShape, P> {
        values: FormData;
        nextProps: P;
        props: P;
        initialRender: boolean;
        structure: PlainStructure | ImmutableStructure;
    }

    interface AsyncValidateCallback<FormData extends DataShape> {
        asyncErrors?: FormErrors<FormData>;
        initialized?: boolean;
        trigger?: "blur" | "submit";
        blurredField?: string;
        pristine?: boolean;
        syncValidationPassed?: boolean;
    }

    interface Config<FormData extends DataShape, P, S> {
        form: string;
        asyncBlurFields?: string[];
        asyncValidate?(values: FormData, dispatch: Redux.Dispatch<S>, props: P, blurredField?: string): Promise<any & FormError & FormWarning>;
        destroyOnUnmount?: boolean;
        enableReinitialize?: boolean;
        getFormState?: FromStateGetter<S>;
        keepDirtyOnReinitialize?: boolean;
        initialValues?: PartialData<FormData>;
        onSubmit?: SubmitHandler<FormData, S>;
        onSubmitFail?(errors: FormErrors<FormData>, dispatch: Redux.Dispatch<S>): void;
        onSubmitSuccess?(result: any, dispatch: Redux.Dispatch<S>): void;
        propNamespace?: string;
        pure?: boolean;
        shouldValidate?(params: ValidateCallback<FormData, FormProps<FormData, S> & P>): boolean;
        shouldAsyncValidate?(params: AsyncValidateCallback<FormData>): boolean;
        touchOnBlur?: boolean;
        touchOnChange?: boolean;
        persistentSubmitErrors?: boolean;
        validate?(values: FormData, props?: FormProps<FormData, S> & P): FormErrors<FormData>;
        warn?(values: FormData, props?: FormProps<FormData, S> & P): FormWarnings<FormData>;
    }

    interface Form<FormData extends DataShape, P> extends React.ComponentClass<P> {
        dirty?: boolean;
        invalid?: boolean;
        pristine?: boolean;
        registeredFields?: RegisteredField[];
        reset?: () => void;
        submit?: () => Promise<any>;
        valid?: boolean;
        values?: FormData;
        wrappedInstance?: React.ReactElement<P>;
    }

    interface FormDecorator<FormData extends DataShape, P> {
        <T extends React.ComponentClass<P>>(component: T): T & Form<FormData, P>;
        (component: React.StatelessComponent<P>): Form<FormData, P>;
    }

    function reduxForm<FormData extends DataShape, P, S>(config: Config<FormData, P, S>): FormDecorator<FormData, P>;

    /* reducer & reducer.plugin() */
    interface FormReducersMap {
        [formName: string]: Redux.Reducer<FormState>;
    }

    interface FormReducer {
        <A extends Redux.Action>(state: FormState, action: A): FormState;
        plugin(reducers: FormReducersMap): Redux.Reducer<FormStateMap>;
    }
    const reducer: FormReducer;


    /* Field, Fields, FieldArray commons */
    interface ValueCallback extends React.EventHandler<any> {
        <A>(value: A): void;
    }

    interface WrappedInputProps {
        checked: boolean;
        name: string;
        onBlur: ValueCallback;
        onChange: ValueCallback;
        onDragStart: React.DragEventHandler<any>;
        onDrop: React.DragEventHandler<any>;
        onFocus: React.FocusEventHandler<any>;
        value: any;
    }

    interface WrappedMetaProps {
        dirty: boolean;
        error?: string;
        invalid: boolean;
        pristine: boolean;
        submitting: boolean;
        valid: boolean;
        warning?: string;
    }

    interface WrappedFieldMetaProps extends WrappedMetaProps {
        active: boolean;
        autofilled: boolean;
        asyncValidation: boolean;
        dispatch: Redux.Dispatch<any>;
        touched: boolean;
        visited: boolean;
    }

    abstract class InstanceAPI<P, S> extends React.Component<P, S> {
        dirty: boolean;
        pristine: boolean;
        getRenderedComponent(): React.ReactElement<P>;
    }

    interface RefProps<P> {
        props?: P;
        withRef?: boolean;
    }

    interface BaseProps<P> extends RefProps<P> {
        format?: Formatter;
        parse?: Parser;
    }

    /* Field */
    interface FieldProps<P> extends BaseProps<P> {
        name: string;
        component: ComponentConstructor<any> | "input" | "select" | "textarea";
        normalize?: Normalizer;
    }

    interface WrappedFieldProps {
        input?: WrappedInputProps;
        meta?: WrappedFieldMetaProps;
    }

    class Field<P, S> extends InstanceAPI<FieldProps<P> & P, S> {
        name: string;
        value: any;
    }

    /* Fields */
    interface FieldsProps<P> extends BaseProps<P> {
        names: string[];
        component: ComponentConstructor<any>;
    }

    type WrappedFieldsProps = NestedFields<WrappedFieldProps>;

    class Fields<P, S> extends InstanceAPI<FieldsProps<P> & P, S> {
        names: string[];
        values: NestedFields<any>;
    }

    /* FieldArray */
    interface FieldArrayProps<P> extends RefProps<P> {
        name: string;
        component: ComponentConstructor<any>;
    }

    type FieldIteratorCallback<A> = (name?: string, index?: number) => A;

    interface WrappedFields<A> {
        forEach(callback?: FieldIteratorCallback<void>): void;
        insert(index: number, value: A): void;
        length: number;
        map<T>(callback?: FieldIteratorCallback<T>): T[];
        move(from: number, to: number): void;
        pop(): A;
        push(value: A): void;
        remove(index: number): void;
        removeAll(): void;
        shift(): A;
        swap(indexA: number, indexB: number): void;
        unshift(value: A): void;
    }

    interface WrappedFieldArrayProps<A> {
        fields?: WrappedFields<A>;
        meta?: WrappedMetaProps;
    }

    class FieldArray<P, S> extends React.Component<FieldArrayProps<P> & P, S> {
        name: string;
        valid: boolean;
        getRenderedComponent(): React.ReactElement<P>;
    }

    /* FormSection */
    interface FormSectionProps {
        name: string;
    }

    class FormSection<P, S> extends React.Component<FormSectionProps & P, S> {}

    /* formValueSelector() */
    type Selector<S> = (state: S, ...fields: string[]) => any;

    function formValueSelector<S> (form: string, getFormState?: FromStateGetter<S>): Selector<S>;

    /* propTypes */
    type Fn = (...args: any[]) => any;

    interface PropTypes {
        destroyOnUnmount: React.Validator<boolean>;
        form: React.Requireable<string>;
        getFormState: React.Validator<Fn>;
        initialValues: React.Validator<any>;
        onSubmitFail: React.Validator<Fn>;
        onSubmitSuccess: React.Validator<Fn>;
        propNameSpace: React.Validator<string>;
        persistentSubmitErrors: React.Validator<boolean>;
        registeredFields: React.Validator<any>;
        touchOnBlur: React.Validator<boolean>;
        touchOnChange: React.Validator<boolean>;
        triggerSubmit: React.Validator<boolean>;
        validate: React.Validator<Fn>;
        warn: React.Validator<Fn>;
    }
    const propTypes: PropTypes;

    /* SubmissionError */
    class SubmissionError<FormData extends DataShape> extends Error {
        constructor(errors?: FormErrors<FormData>)
    }

    /* Action Creators */
    function arrayInsert(form: string, field: string, index: number, value: any): Redux.Action;
    function arrayMove(form: string, field: string, from: number, to: number): Redux.Action;
    function arrayPop(form: string, field: string): Redux.Action;
    function arrayPush(form: string, field: string, value: any): Redux.Action;
    function arrayRemove(form: string, field: string, index: number): Redux.Action;
    function arrayRemoveAll(form: string, field: string): Redux.Action;
    function arrayShift(form: string, field: string): Redux.Action;
    function arraySplice(form: string, field: string, index: number, removeNum: number, value: any): Redux.Action;
    function arraySwap(form: string, field: string, indexA: number, indexB: number): Redux.Action;
    function arrayUnshift(form: string, field: string, value: any): Redux.Action;
    function autofill(form: string, field: string, value: any): Redux.Action;
    function blur(form: string, field: string, value: any): Redux.Action;
    function change(form: string, field: string, value: any): Redux.Action;
    function destroy(form: string): Redux.Action;
    function focus(form: string, field: string): Redux.Action;
    function initialize<FormData extends DataShape>(form: string, data: FormData, keepDirty?: boolean): Redux.Action;
    function reset(form: string): Redux.Action;
    function startAsyncValidation(form: string): Redux.Action;
    function startSubmit(form: string): Redux.Action;
    function stopSubmit<FormData extends DataShape>(form: string, errors?: FormErrors<FormData>): Redux.Action;
    function stopAsyncValidation<FormData extends DataShape>(form: string, errors?: FormErrors<FormData>): Redux.Action;
    function submit(form: string): Redux.Action;
    function touch(form: string, ...fields: string[]): Redux.Action;
    function untouch(form: string, ...fields: string[]): Redux.Action;

    /* Selectors */
    type DataSelector = (form: string) => (state: any) => any;
    type ErrorsSelector = (form: string) => (state: any) => FormErrors<any>;
    type BooleanSelector = (form: string) => (state: any) => boolean;

    const getFormValues: DataSelector;
    const getFormSyncErrors: ErrorsSelector;
    const getFormSubmitErrors: ErrorsSelector;
    const isDirty: BooleanSelector;
    const isPristine: BooleanSelector;
    const isValid: BooleanSelector;
    const isInvalid: BooleanSelector;
}

export as namespace ReduxForm
export = ReduxForm;
