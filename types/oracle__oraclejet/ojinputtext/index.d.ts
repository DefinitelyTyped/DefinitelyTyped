import { Converter, Validator, Validation, AsyncValidator } from '../ojvalidation-base';
import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface inputBase<V, SP extends inputBaseSettableProperties<V, SV>, SV = V, RV = V> extends editableValue<V, SP, SV, RV> {
    asyncValidators: Array<AsyncValidator<V>>;
    autocomplete: 'on' | 'off' | string;
    autofocus: boolean;
    placeholder: string;
    readonly rawValue: RV;
    readonly: boolean;
    required: boolean;
    validators: Array<Validator<V> | Validation.RegisteredValidator> | null;
    translations: {
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
    onAsyncValidatorsChanged: ((event: JetElementCustomEvent<inputBase<V, SP, SV, RV>["asyncValidators"]>) => any) | null;
    onAutocompleteChanged: ((event: JetElementCustomEvent<inputBase<V, SP, SV, RV>["autocomplete"]>) => any) | null;
    onAutofocusChanged: ((event: JetElementCustomEvent<inputBase<V, SP, SV, RV>["autofocus"]>) => any) | null;
    onPlaceholderChanged: ((event: JetElementCustomEvent<inputBase<V, SP, SV, RV>["placeholder"]>) => any) | null;
    onRawValueChanged: ((event: JetElementCustomEvent<inputBase<V, SP, SV, RV>["rawValue"]>) => any) | null;
    onReadonlyChanged: ((event: JetElementCustomEvent<inputBase<V, SP, SV, RV>["readonly"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<inputBase<V, SP, SV, RV>["required"]>) => any) | null;
    onValidatorsChanged: ((event: JetElementCustomEvent<inputBase<V, SP, SV, RV>["validators"]>) => any) | null;
    onOjAnimateEnd: ((event: inputBase.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: inputBase.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof inputBaseEventMap<V, SP, SV, RV>>(type: T, listener: (this: HTMLElement, ev: inputBaseEventMap<V, SP, SV, RV>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof inputBaseSettableProperties<V, SV, RV>>(property: T): inputBase<V, SP, SV, RV>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof inputBaseSettableProperties<V, SV, RV>>(property: T, value: inputBaseSettableProperties<V, SV, RV>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, inputBaseSettableProperties<V, SV, RV>>): void;
    setProperties(properties: inputBaseSettablePropertiesLenient<V, SV, RV>): void;
    refresh(): void;
    validate(): Promise<'valid' | 'invalid'>;
}
export namespace inputBase {
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
export interface inputBaseEventMap<V, SP extends inputBaseSettableProperties<V, SV>, SV = V, RV = V> extends editableValueEventMap<V, SP, SV, RV> {
    'ojAnimateEnd': inputBase.ojAnimateEnd;
    'ojAnimateStart': inputBase.ojAnimateStart;
    'asyncValidatorsChanged': JetElementCustomEvent<inputBase<V, SP, SV, RV>["asyncValidators"]>;
    'autocompleteChanged': JetElementCustomEvent<inputBase<V, SP, SV, RV>["autocomplete"]>;
    'autofocusChanged': JetElementCustomEvent<inputBase<V, SP, SV, RV>["autofocus"]>;
    'placeholderChanged': JetElementCustomEvent<inputBase<V, SP, SV, RV>["placeholder"]>;
    'rawValueChanged': JetElementCustomEvent<inputBase<V, SP, SV, RV>["rawValue"]>;
    'readonlyChanged': JetElementCustomEvent<inputBase<V, SP, SV, RV>["readonly"]>;
    'requiredChanged': JetElementCustomEvent<inputBase<V, SP, SV, RV>["required"]>;
    'validatorsChanged': JetElementCustomEvent<inputBase<V, SP, SV, RV>["validators"]>;
}
export interface inputBaseSettableProperties<V, SV = V, RV = V> extends editableValueSettableProperties<V, SV, RV> {
    asyncValidators: Array<AsyncValidator<V>>;
    autocomplete: 'on' | 'off' | string;
    autofocus: boolean;
    placeholder: string;
    readonly rawValue: RV;
    readonly: boolean;
    required: boolean;
    validators: Array<Validator<V> | Validation.RegisteredValidator> | null;
    translations: {
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
}
export interface inputBaseSettablePropertiesLenient<V, SV, RV> extends Partial<inputBaseSettableProperties<V, SV, RV>> {
    [key: string]: any;
}
export interface ojInputPassword extends inputBase<string | null, ojInputPasswordSettableProperties> {
    value: string | null;
    translations: {
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
    onValueChanged: ((event: JetElementCustomEvent<ojInputPassword["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojInputPassword.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojInputPassword.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojInputPasswordEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputPasswordEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojInputPasswordSettableProperties>(property: T): ojInputPassword[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojInputPasswordSettableProperties>(property: T, value: ojInputPasswordSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojInputPasswordSettableProperties>): void;
    setProperties(properties: ojInputPasswordSettablePropertiesLenient): void;
}
export namespace ojInputPassword {
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
export interface ojInputPasswordEventMap extends inputBaseEventMap<string | null, ojInputPasswordSettableProperties> {
    'ojAnimateEnd': ojInputPassword.ojAnimateEnd;
    'ojAnimateStart': ojInputPassword.ojAnimateStart;
    'valueChanged': JetElementCustomEvent<ojInputPassword["value"]>;
}
export interface ojInputPasswordSettableProperties extends inputBaseSettableProperties<string | null> {
    value: string | null;
    translations: {
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
}
export interface ojInputPasswordSettablePropertiesLenient extends Partial<ojInputPasswordSettableProperties> {
    [key: string]: any;
}
export interface ojInputText extends inputBase<any, ojInputTextSettableProperties> {
    clearIcon: 'never' | 'always' | 'conditional';
    converter: Converter<any> | Validation.RegisteredConverter | null;
    list: string;
    virtualKeyboard: 'auto' | 'email' | 'number' | 'search' | 'tel' | 'text' | 'url';
    onClearIconChanged: ((event: JetElementCustomEvent<ojInputText["clearIcon"]>) => any) | null;
    onConverterChanged: ((event: JetElementCustomEvent<ojInputText["converter"]>) => any) | null;
    onListChanged: ((event: JetElementCustomEvent<ojInputText["list"]>) => any) | null;
    onVirtualKeyboardChanged: ((event: JetElementCustomEvent<ojInputText["virtualKeyboard"]>) => any) | null;
    onOjAnimateEnd: ((event: ojInputText.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojInputText.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojInputTextEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputTextEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojInputTextSettableProperties>(property: T): ojInputText[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojInputTextSettableProperties>(property: T, value: ojInputTextSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojInputTextSettableProperties>): void;
    setProperties(properties: ojInputTextSettablePropertiesLenient): void;
}
export namespace ojInputText {
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
export interface ojInputTextEventMap extends inputBaseEventMap<any, ojInputTextSettableProperties> {
    'ojAnimateEnd': ojInputText.ojAnimateEnd;
    'ojAnimateStart': ojInputText.ojAnimateStart;
    'clearIconChanged': JetElementCustomEvent<ojInputText["clearIcon"]>;
    'converterChanged': JetElementCustomEvent<ojInputText["converter"]>;
    'listChanged': JetElementCustomEvent<ojInputText["list"]>;
    'virtualKeyboardChanged': JetElementCustomEvent<ojInputText["virtualKeyboard"]>;
}
export interface ojInputTextSettableProperties extends inputBaseSettableProperties<any> {
    clearIcon: 'never' | 'always' | 'conditional';
    converter: Converter<any> | Validation.RegisteredConverter | null;
    list: string;
    virtualKeyboard: 'auto' | 'email' | 'number' | 'search' | 'tel' | 'text' | 'url';
}
export interface ojInputTextSettablePropertiesLenient extends Partial<ojInputTextSettableProperties> {
    [key: string]: any;
}
export interface ojTextArea extends inputBase<any, ojTextAreaSettableProperties> {
    converter: Converter<any> | Validation.RegisteredConverter | null;
    rows: number;
    onConverterChanged: ((event: JetElementCustomEvent<ojTextArea["converter"]>) => any) | null;
    onRowsChanged: ((event: JetElementCustomEvent<ojTextArea["rows"]>) => any) | null;
    onOjAnimateEnd: ((event: ojTextArea.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojTextArea.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojTextAreaEventMap>(type: T, listener: (this: HTMLElement, ev: ojTextAreaEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTextAreaSettableProperties>(property: T): ojTextArea[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTextAreaSettableProperties>(property: T, value: ojTextAreaSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTextAreaSettableProperties>): void;
    setProperties(properties: ojTextAreaSettablePropertiesLenient): void;
}
export namespace ojTextArea {
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
export interface ojTextAreaEventMap extends inputBaseEventMap<any, ojTextAreaSettableProperties> {
    'ojAnimateEnd': ojTextArea.ojAnimateEnd;
    'ojAnimateStart': ojTextArea.ojAnimateStart;
    'converterChanged': JetElementCustomEvent<ojTextArea["converter"]>;
    'rowsChanged': JetElementCustomEvent<ojTextArea["rows"]>;
}
export interface ojTextAreaSettableProperties extends inputBaseSettableProperties<any> {
    converter: Converter<any> | Validation.RegisteredConverter | null;
    rows: number;
}
export interface ojTextAreaSettablePropertiesLenient extends Partial<ojTextAreaSettableProperties> {
    [key: string]: any;
}
