import { Converter, Validator, Validation, AsyncValidator } from '../ojvalidation-base';
import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojInputNumber extends editableValue<number | null, ojInputNumberSettableProperties, number | null, string> {
    asyncValidators: Array<AsyncValidator<number>>;
    autocomplete: 'on' | 'off' | string;
    autofocus: boolean;
    converter: Converter<number> | Validation.RegisteredConverter;
    max: number | null;
    min: number | null;
    placeholder: string | null;
    readonly rawValue: string;
    readonly: boolean | null;
    required: boolean;
    step: number | null;
    validators: Array<Validator<number> | Validation.RegisteredValidator>;
    value: number | null;
    virtualKeyboard: 'auto' | 'number' | 'text';
    translations: {
        numberRange?: {
            hint?: {
                exact?: string;
                inRange?: string;
                max?: string;
                min?: string;
            };
            messageDetail?: {
                exact?: string;
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
            messageSummary?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        tooltipDecrement?: string;
        tooltipIncrement?: string;
    };
    onAsyncValidatorsChanged: ((event: JetElementCustomEvent<ojInputNumber["asyncValidators"]>) => any) | null;
    onAutocompleteChanged: ((event: JetElementCustomEvent<ojInputNumber["autocomplete"]>) => any) | null;
    onAutofocusChanged: ((event: JetElementCustomEvent<ojInputNumber["autofocus"]>) => any) | null;
    onConverterChanged: ((event: JetElementCustomEvent<ojInputNumber["converter"]>) => any) | null;
    onMaxChanged: ((event: JetElementCustomEvent<ojInputNumber["max"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojInputNumber["min"]>) => any) | null;
    onPlaceholderChanged: ((event: JetElementCustomEvent<ojInputNumber["placeholder"]>) => any) | null;
    onRawValueChanged: ((event: JetElementCustomEvent<ojInputNumber["rawValue"]>) => any) | null;
    onReadonlyChanged: ((event: JetElementCustomEvent<ojInputNumber["readonly"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojInputNumber["required"]>) => any) | null;
    onStepChanged: ((event: JetElementCustomEvent<ojInputNumber["step"]>) => any) | null;
    onValidatorsChanged: ((event: JetElementCustomEvent<ojInputNumber["validators"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojInputNumber["value"]>) => any) | null;
    onVirtualKeyboardChanged: ((event: JetElementCustomEvent<ojInputNumber["virtualKeyboard"]>) => any) | null;
    onOjAnimateEnd: ((event: ojInputNumber.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojInputNumber.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojInputNumberEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputNumberEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojInputNumberSettableProperties>(property: T): ojInputNumber[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojInputNumberSettableProperties>(property: T, value: ojInputNumberSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojInputNumberSettableProperties>): void;
    setProperties(properties: ojInputNumberSettablePropertiesLenient): void;
    refresh(): void;
    stepDown(steps?: number): void;
    stepUp(steps?: number): void;
    validate(): Promise<string>;
}
export namespace ojInputNumber {
    interface ojAnimateEnd extends CustomEvent<{
        action: string;
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: string;
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
}
export interface ojInputNumberEventMap extends editableValueEventMap<number | null, ojInputNumberSettableProperties, number | null, string> {
    'ojAnimateEnd': ojInputNumber.ojAnimateEnd;
    'ojAnimateStart': ojInputNumber.ojAnimateStart;
    'asyncValidatorsChanged': JetElementCustomEvent<ojInputNumber["asyncValidators"]>;
    'autocompleteChanged': JetElementCustomEvent<ojInputNumber["autocomplete"]>;
    'autofocusChanged': JetElementCustomEvent<ojInputNumber["autofocus"]>;
    'converterChanged': JetElementCustomEvent<ojInputNumber["converter"]>;
    'maxChanged': JetElementCustomEvent<ojInputNumber["max"]>;
    'minChanged': JetElementCustomEvent<ojInputNumber["min"]>;
    'placeholderChanged': JetElementCustomEvent<ojInputNumber["placeholder"]>;
    'rawValueChanged': JetElementCustomEvent<ojInputNumber["rawValue"]>;
    'readonlyChanged': JetElementCustomEvent<ojInputNumber["readonly"]>;
    'requiredChanged': JetElementCustomEvent<ojInputNumber["required"]>;
    'stepChanged': JetElementCustomEvent<ojInputNumber["step"]>;
    'validatorsChanged': JetElementCustomEvent<ojInputNumber["validators"]>;
    'valueChanged': JetElementCustomEvent<ojInputNumber["value"]>;
    'virtualKeyboardChanged': JetElementCustomEvent<ojInputNumber["virtualKeyboard"]>;
}
export interface ojInputNumberSettableProperties extends editableValueSettableProperties<number | null, number | null, string> {
    asyncValidators: Array<AsyncValidator<number>>;
    autocomplete: 'on' | 'off' | string;
    autofocus: boolean;
    converter: Converter<number> | Validation.RegisteredConverter;
    max: number | null;
    min: number | null;
    placeholder: string | null;
    readonly rawValue: string;
    readonly: boolean | null;
    required: boolean;
    step: number | null;
    validators: Array<Validator<number> | Validation.RegisteredValidator>;
    value: number | null;
    virtualKeyboard: 'auto' | 'number' | 'text';
    translations: {
        numberRange?: {
            hint?: {
                exact?: string;
                inRange?: string;
                max?: string;
                min?: string;
            };
            messageDetail?: {
                exact?: string;
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
            messageSummary?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        tooltipDecrement?: string;
        tooltipIncrement?: string;
    };
}
export interface ojInputNumberSettablePropertiesLenient extends Partial<ojInputNumberSettableProperties> {
    [key: string]: any;
}
