import { Converter, Validator, Validation, AsyncValidator } from '../ojvalidation-base';
import { DataProvider } from '../ojdataprovider';
import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojCombobox<V, SP extends ojComboboxSettableProperties<V, SV, RV>, SV = V, RV = V> extends editableValue<V, SP, SV, RV> {
    onOjAnimateEnd: ((event: ojCombobox.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojCombobox.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojComboboxEventMap<V, SP, SV, RV>>(type: T, listener: (this: HTMLElement, ev: ojComboboxEventMap<V, SP, SV, RV>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojComboboxSettableProperties<V, SV, RV>>(property: T): ojCombobox<V, SP, SV, RV>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojComboboxSettableProperties<V, SV, RV>>(property: T, value: ojComboboxSettableProperties<V, SV, RV>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojComboboxSettableProperties<V, SV, RV>>): void;
    setProperties(properties: ojComboboxSettablePropertiesLenient<V, SV, RV>): void;
    refresh(): void;
    validate(): Promise<any>;
}
export namespace ojCombobox {
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
    // tslint:disable-next-line interface-over-type-literal
    type Optgroup = {
        disabled?: boolean;
        label: string;
        children: Array<(Option | Optgroup)>;
    };
    // tslint:disable-next-line interface-over-type-literal
    type Option = {
        disabled?: boolean;
        label?: string;
        value: any;
    };
    // tslint:disable-next-line interface-over-type-literal
    type OptionContext = {
        component: Element;
        parent: Element;
        index: number;
        depth: number;
        leaf: boolean;
        data: object;
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type OptionsKeys = {
        label?: string;
        value?: string;
        children?: string;
        childKeys?: OptionsKeys;
    };
}
export interface ojComboboxEventMap<V, SP extends ojComboboxSettableProperties<V, SV, RV>, SV = V, RV = V> extends editableValueEventMap<V, SP, SV, RV> {
    'ojAnimateEnd': ojCombobox.ojAnimateEnd;
    'ojAnimateStart': ojCombobox.ojAnimateStart;
}
// These interfaces are empty but required to keep the component chain intact. Avoid lint-rule
// tslint:disable-next-line no-empty-interface
export interface ojComboboxSettableProperties<V, SV = V, RV = V> extends editableValueSettableProperties<V, SV, RV> {
}
export interface ojComboboxSettablePropertiesLenient<V, SV, RV> extends Partial<ojComboboxSettableProperties<V, SV, RV>> {
    [key: string]: any;
}
export interface ojComboboxMany<K, D> extends ojCombobox<any[] | null, ojComboboxManySettableProperties<K, D>, any[] | null, string> {
    asyncValidators: Array<AsyncValidator<any[]>>;
    converter: Converter<any> | Validation.RegisteredConverter | null;
    minLength: number;
    optionRenderer?: ((param0: ojCombobox.OptionContext) => Element) | null;
    options: Array<ojCombobox.Option | ojCombobox.Optgroup> | DataProvider<K, D> | null;
    optionsKeys: {
        childKeys: {
            label?: string;
            value?: string;
            children?: string;
            childKeys?: ojCombobox.OptionsKeys;
        };
        children?: string;
        label?: string;
        value?: string;
    };
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    placeholder: string | null;
    readonly rawValue: string | null;
    readOnly: boolean;
    required: boolean;
    validators: Array<Validator<any[]> | Validation.RegisteredValidator> | null;
    value: any[] | null;
    valueOptions: Array<{
        value: any;
        label?: string;
    }> | null;
    translations: {
        filterFurther?: string;
        noMatchesFound?: string;
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
    onAsyncValidatorsChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["asyncValidators"]>) => any) | null;
    onConverterChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["converter"]>) => any) | null;
    onMinLengthChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["minLength"]>) => any) | null;
    onOptionRendererChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["optionRenderer"]>) => any) | null;
    onOptionsChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["options"]>) => any) | null;
    onOptionsKeysChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["optionsKeys"]>) => any) | null;
    onPickerAttributesChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["pickerAttributes"]>) => any) | null;
    onPlaceholderChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["placeholder"]>) => any) | null;
    onRawValueChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["rawValue"]>) => any) | null;
    onReadOnlyChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["readOnly"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["required"]>) => any) | null;
    onValidatorsChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["validators"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["value"]>) => any) | null;
    onValueOptionsChanged: ((event: JetElementCustomEvent<ojComboboxMany<K, D>["valueOptions"]>) => any) | null;
    onOjAnimateEnd: ((event: ojComboboxMany.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojComboboxMany.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojComboboxManyEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojComboboxManyEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojComboboxManySettableProperties<K, D>>(property: T): ojComboboxMany<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojComboboxManySettableProperties<K, D>>(property: T, value: ojComboboxManySettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojComboboxManySettableProperties<K, D>>): void;
    setProperties(properties: ojComboboxManySettablePropertiesLenient<K, D>): void;
}
export namespace ojComboboxMany {
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
export interface ojComboboxManyEventMap<K, D> extends ojComboboxEventMap<any[] | null, ojComboboxManySettableProperties<K, D>, any[] | null, string> {
    'ojAnimateEnd': ojComboboxMany.ojAnimateEnd;
    'ojAnimateStart': ojComboboxMany.ojAnimateStart;
    'asyncValidatorsChanged': JetElementCustomEvent<ojComboboxMany<K, D>["asyncValidators"]>;
    'converterChanged': JetElementCustomEvent<ojComboboxMany<K, D>["converter"]>;
    'minLengthChanged': JetElementCustomEvent<ojComboboxMany<K, D>["minLength"]>;
    'optionRendererChanged': JetElementCustomEvent<ojComboboxMany<K, D>["optionRenderer"]>;
    'optionsChanged': JetElementCustomEvent<ojComboboxMany<K, D>["options"]>;
    'optionsKeysChanged': JetElementCustomEvent<ojComboboxMany<K, D>["optionsKeys"]>;
    'pickerAttributesChanged': JetElementCustomEvent<ojComboboxMany<K, D>["pickerAttributes"]>;
    'placeholderChanged': JetElementCustomEvent<ojComboboxMany<K, D>["placeholder"]>;
    'rawValueChanged': JetElementCustomEvent<ojComboboxMany<K, D>["rawValue"]>;
    'readOnlyChanged': JetElementCustomEvent<ojComboboxMany<K, D>["readOnly"]>;
    'requiredChanged': JetElementCustomEvent<ojComboboxMany<K, D>["required"]>;
    'validatorsChanged': JetElementCustomEvent<ojComboboxMany<K, D>["validators"]>;
    'valueChanged': JetElementCustomEvent<ojComboboxMany<K, D>["value"]>;
    'valueOptionsChanged': JetElementCustomEvent<ojComboboxMany<K, D>["valueOptions"]>;
}
export interface ojComboboxManySettableProperties<K, D> extends ojComboboxSettableProperties<any[] | null, any[] | null, string> {
    asyncValidators: Array<AsyncValidator<any[]>>;
    converter: Converter<any> | Validation.RegisteredConverter | null;
    minLength: number;
    optionRenderer?: ((param0: ojCombobox.OptionContext) => Element) | null;
    options: Array<ojCombobox.Option | ojCombobox.Optgroup> | DataProvider<K, D> | null;
    optionsKeys: {
        childKeys: {
            label?: string;
            value?: string;
            children?: string;
            childKeys?: ojCombobox.OptionsKeys;
        };
        children?: string;
        label?: string;
        value?: string;
    };
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    placeholder: string | null;
    readonly rawValue: string | null;
    readOnly: boolean;
    required: boolean;
    validators: Array<Validator<any[]> | Validation.RegisteredValidator> | null;
    value: any[] | null;
    valueOptions: Array<{
        value: any;
        label?: string;
    }> | null;
    translations: {
        filterFurther?: string;
        noMatchesFound?: string;
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
}
export interface ojComboboxManySettablePropertiesLenient<K, D> extends Partial<ojComboboxManySettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojComboboxOne<K, D> extends ojCombobox<any, ojComboboxOneSettableProperties<K, D>, any, string> {
    asyncValidators: Array<AsyncValidator<any>>;
    converter: Converter<any> | Validation.RegisteredConverter | null;
    filterOnOpen: 'none' | 'rawValue';
    minLength: number;
    optionRenderer?: ((param0: ojCombobox.OptionContext) => Element) | null;
    options: Array<ojCombobox.Option | ojCombobox.Optgroup> | DataProvider<K, D> | null;
    optionsKeys: {
        childKeys: {
            label?: string;
            value?: string;
            children?: string;
            childKeys?: ojCombobox.OptionsKeys;
        };
        children?: string;
        label?: string;
        value?: string;
    };
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    placeholder: string | null;
    readonly rawValue: string | null;
    readOnly: boolean;
    required: boolean;
    validators: Array<Validator<any> | Validation.RegisteredValidator> | null;
    value: any;
    valueOption: {
        value: any;
        label?: string;
    };
    translations: {
        filterFurther?: string;
        noMatchesFound?: string;
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
    onAsyncValidatorsChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["asyncValidators"]>) => any) | null;
    onConverterChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["converter"]>) => any) | null;
    onFilterOnOpenChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["filterOnOpen"]>) => any) | null;
    onMinLengthChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["minLength"]>) => any) | null;
    onOptionRendererChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["optionRenderer"]>) => any) | null;
    onOptionsChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["options"]>) => any) | null;
    onOptionsKeysChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["optionsKeys"]>) => any) | null;
    onPickerAttributesChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["pickerAttributes"]>) => any) | null;
    onPlaceholderChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["placeholder"]>) => any) | null;
    onRawValueChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["rawValue"]>) => any) | null;
    onReadOnlyChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["readOnly"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["required"]>) => any) | null;
    onValidatorsChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["validators"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["value"]>) => any) | null;
    onValueOptionChanged: ((event: JetElementCustomEvent<ojComboboxOne<K, D>["valueOption"]>) => any) | null;
    onOjAnimateEnd: ((event: ojComboboxOne.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojComboboxOne.ojAnimateStart) => any) | null;
    onOjValueUpdated: ((event: ojComboboxOne.ojValueUpdated) => any) | null;
    addEventListener<T extends keyof ojComboboxOneEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojComboboxOneEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojComboboxOneSettableProperties<K, D>>(property: T): ojComboboxOne<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojComboboxOneSettableProperties<K, D>>(property: T, value: ojComboboxOneSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojComboboxOneSettableProperties<K, D>>): void;
    setProperties(properties: ojComboboxOneSettablePropertiesLenient<K, D>): void;
}
export namespace ojComboboxOne {
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
    interface ojValueUpdated extends CustomEvent<{
        value: any;
        previousValue: any;
        [propName: string]: any;
    }> {
    }
}
export interface ojComboboxOneEventMap<K, D> extends ojComboboxEventMap<any, ojComboboxOneSettableProperties<K, D>, any, string> {
    'ojAnimateEnd': ojComboboxOne.ojAnimateEnd;
    'ojAnimateStart': ojComboboxOne.ojAnimateStart;
    'ojValueUpdated': ojComboboxOne.ojValueUpdated;
    'asyncValidatorsChanged': JetElementCustomEvent<ojComboboxOne<K, D>["asyncValidators"]>;
    'converterChanged': JetElementCustomEvent<ojComboboxOne<K, D>["converter"]>;
    'filterOnOpenChanged': JetElementCustomEvent<ojComboboxOne<K, D>["filterOnOpen"]>;
    'minLengthChanged': JetElementCustomEvent<ojComboboxOne<K, D>["minLength"]>;
    'optionRendererChanged': JetElementCustomEvent<ojComboboxOne<K, D>["optionRenderer"]>;
    'optionsChanged': JetElementCustomEvent<ojComboboxOne<K, D>["options"]>;
    'optionsKeysChanged': JetElementCustomEvent<ojComboboxOne<K, D>["optionsKeys"]>;
    'pickerAttributesChanged': JetElementCustomEvent<ojComboboxOne<K, D>["pickerAttributes"]>;
    'placeholderChanged': JetElementCustomEvent<ojComboboxOne<K, D>["placeholder"]>;
    'rawValueChanged': JetElementCustomEvent<ojComboboxOne<K, D>["rawValue"]>;
    'readOnlyChanged': JetElementCustomEvent<ojComboboxOne<K, D>["readOnly"]>;
    'requiredChanged': JetElementCustomEvent<ojComboboxOne<K, D>["required"]>;
    'validatorsChanged': JetElementCustomEvent<ojComboboxOne<K, D>["validators"]>;
    'valueChanged': JetElementCustomEvent<ojComboboxOne<K, D>["value"]>;
    'valueOptionChanged': JetElementCustomEvent<ojComboboxOne<K, D>["valueOption"]>;
}
export interface ojComboboxOneSettableProperties<K, D> extends ojComboboxSettableProperties<any, any, string> {
    asyncValidators: Array<AsyncValidator<any>>;
    converter: Converter<any> | Validation.RegisteredConverter | null;
    filterOnOpen: 'none' | 'rawValue';
    minLength: number;
    optionRenderer?: ((param0: ojCombobox.OptionContext) => Element) | null;
    options: Array<ojCombobox.Option | ojCombobox.Optgroup> | DataProvider<K, D> | null;
    optionsKeys: {
        childKeys: {
            label?: string;
            value?: string;
            children?: string;
            childKeys?: ojCombobox.OptionsKeys;
        };
        children?: string;
        label?: string;
        value?: string;
    };
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    placeholder: string | null;
    readonly rawValue: string | null;
    readOnly: boolean;
    required: boolean;
    validators: Array<Validator<any> | Validation.RegisteredValidator> | null;
    value: any;
    valueOption: {
        value: any;
        label?: string;
    };
    translations: {
        filterFurther?: string;
        noMatchesFound?: string;
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
}
export interface ojComboboxOneSettablePropertiesLenient<K, D> extends Partial<ojComboboxOneSettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojSelect<V, SP extends ojSelectSettableProperties<V, SV>, SV = V> extends editableValue<V, SP, SV> {
    onOjAnimateEnd: ((event: ojSelect.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojSelect.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojSelectEventMap<V, SP, SV>>(type: T, listener: (this: HTMLElement, ev: ojSelectEventMap<V, SP, SV>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSelectSettableProperties<V, SV>>(property: T): ojSelect<V, SP, SV>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSelectSettableProperties<V, SV>>(property: T, value: ojSelectSettableProperties<V, SV>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSelectSettableProperties<V, SV>>): void;
    setProperties(properties: ojSelectSettablePropertiesLenient<V, SV>): void;
    refresh(): void;
    validate(): Promise<any>;
}
export namespace ojSelect {
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
    // tslint:disable-next-line interface-over-type-literal
    type Optgroup = {
        disabled?: boolean;
        label: string;
        children: Array<(Option | Optgroup)>;
    };
    // tslint:disable-next-line interface-over-type-literal
    type Option = {
        disabled?: boolean;
        label?: string;
        value: any;
    };
    // tslint:disable-next-line interface-over-type-literal
    type OptionContext = {
        component: Element;
        parent: Element;
        index: number;
        depth: number;
        leaf: boolean;
        data: object;
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type OptionsKeys = {
        label?: string;
        value?: string;
        children?: string;
        childKeys?: OptionsKeys;
    };
}
export interface ojSelectEventMap<V, SP extends ojSelectSettableProperties<V, SV>, SV = V> extends editableValueEventMap<V, SP, SV> {
    'ojAnimateEnd': ojSelect.ojAnimateEnd;
    'ojAnimateStart': ojSelect.ojAnimateStart;
}
// These interfaces are empty but required to keep the component chain intact. Avoid lint-rule
// tslint:disable-next-line no-empty-interface
export interface ojSelectSettableProperties<V, SV = V> extends editableValueSettableProperties<V, SV> {
}
export interface ojSelectSettablePropertiesLenient<V, SV> extends Partial<ojSelectSettableProperties<V, SV>> {
    [key: string]: any;
}
export interface ojSelectMany<K, D> extends ojSelect<any[] | null, ojSelectManySettableProperties<K, D>> {
    minimumResultsForSearch: number;
    optionRenderer?: ((param0: ojSelect.OptionContext) => Element) | null;
    options: Array<ojSelect.Option | ojSelect.Optgroup> | DataProvider<K, D> | null;
    optionsKeys: {
        childKeys?: {
            label?: string;
            value?: string;
            children?: string;
            childKeys?: ojSelect.OptionsKeys;
        };
        children?: string;
        label?: string;
        value?: string;
    };
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    placeholder: string | null;
    readOnly: boolean;
    renderMode: 'jet' | 'native';
    required: boolean;
    value: any[] | null;
    valueOptions: Array<{
        value: any;
        label?: string;
    }> | null;
    translations: {
        filterFurther?: string;
        moreMatchesFound?: string;
        noMatchesFound?: string;
        oneMatchesFound?: string;
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        searchField?: string;
    };
    onMinimumResultsForSearchChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["minimumResultsForSearch"]>) => any) | null;
    onOptionRendererChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["optionRenderer"]>) => any) | null;
    onOptionsChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["options"]>) => any) | null;
    onOptionsKeysChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["optionsKeys"]>) => any) | null;
    onPickerAttributesChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["pickerAttributes"]>) => any) | null;
    onPlaceholderChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["placeholder"]>) => any) | null;
    onReadOnlyChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["readOnly"]>) => any) | null;
    onRenderModeChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["renderMode"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["required"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["value"]>) => any) | null;
    onValueOptionsChanged: ((event: JetElementCustomEvent<ojSelectMany<K, D>["valueOptions"]>) => any) | null;
    onOjAnimateEnd: ((event: ojSelectMany.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojSelectMany.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojSelectManyEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojSelectManyEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSelectManySettableProperties<K, D>>(property: T): ojSelectMany<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSelectManySettableProperties<K, D>>(property: T, value: ojSelectManySettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSelectManySettableProperties<K, D>>): void;
    setProperties(properties: ojSelectManySettablePropertiesLenient<K, D>): void;
}
export namespace ojSelectMany {
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
export interface ojSelectManyEventMap<K, D> extends ojSelectEventMap<any[] | null, ojSelectManySettableProperties<K, D>> {
    'ojAnimateEnd': ojSelectMany.ojAnimateEnd;
    'ojAnimateStart': ojSelectMany.ojAnimateStart;
    'minimumResultsForSearchChanged': JetElementCustomEvent<ojSelectMany<K, D>["minimumResultsForSearch"]>;
    'optionRendererChanged': JetElementCustomEvent<ojSelectMany<K, D>["optionRenderer"]>;
    'optionsChanged': JetElementCustomEvent<ojSelectMany<K, D>["options"]>;
    'optionsKeysChanged': JetElementCustomEvent<ojSelectMany<K, D>["optionsKeys"]>;
    'pickerAttributesChanged': JetElementCustomEvent<ojSelectMany<K, D>["pickerAttributes"]>;
    'placeholderChanged': JetElementCustomEvent<ojSelectMany<K, D>["placeholder"]>;
    'readOnlyChanged': JetElementCustomEvent<ojSelectMany<K, D>["readOnly"]>;
    'renderModeChanged': JetElementCustomEvent<ojSelectMany<K, D>["renderMode"]>;
    'requiredChanged': JetElementCustomEvent<ojSelectMany<K, D>["required"]>;
    'valueChanged': JetElementCustomEvent<ojSelectMany<K, D>["value"]>;
    'valueOptionsChanged': JetElementCustomEvent<ojSelectMany<K, D>["valueOptions"]>;
}
export interface ojSelectManySettableProperties<K, D> extends ojSelectSettableProperties<any[] | null> {
    minimumResultsForSearch: number;
    optionRenderer?: ((param0: ojSelect.OptionContext) => Element) | null;
    options: Array<ojSelect.Option | ojSelect.Optgroup> | DataProvider<K, D> | null;
    optionsKeys: {
        childKeys?: {
            label?: string;
            value?: string;
            children?: string;
            childKeys?: ojSelect.OptionsKeys;
        };
        children?: string;
        label?: string;
        value?: string;
    };
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    placeholder: string | null;
    readOnly: boolean;
    renderMode: 'jet' | 'native';
    required: boolean;
    value: any[] | null;
    valueOptions: Array<{
        value: any;
        label?: string;
    }> | null;
    translations: {
        filterFurther?: string;
        moreMatchesFound?: string;
        noMatchesFound?: string;
        oneMatchesFound?: string;
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        searchField?: string;
    };
}
export interface ojSelectManySettablePropertiesLenient<K, D> extends Partial<ojSelectManySettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojSelectOne<K, D> extends ojSelect<any, ojSelectOneSettableProperties<K, D>> {
    minimumResultsForSearch: number;
    optionRenderer?: ((param0: ojSelect.OptionContext) => Element) | null;
    options: Array<ojSelect.Option | ojSelect.Optgroup> | DataProvider<K, D> | null;
    optionsKeys: {
        childKeys?: {
            label?: string;
            value?: string;
            children?: string;
            childKeys?: ojSelect.OptionsKeys;
        };
        children?: string;
        label?: string;
        value?: string;
    };
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    placeholder: string | null;
    readOnly: boolean;
    renderMode: 'jet' | 'native';
    required: boolean;
    value: any;
    valueOption: {
        value: any;
        label?: string;
    };
    translations: {
        filterFurther?: string;
        moreMatchesFound?: string;
        noMatchesFound?: string;
        oneMatchesFound?: string;
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        searchField?: string;
    };
    onMinimumResultsForSearchChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["minimumResultsForSearch"]>) => any) | null;
    onOptionRendererChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["optionRenderer"]>) => any) | null;
    onOptionsChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["options"]>) => any) | null;
    onOptionsKeysChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["optionsKeys"]>) => any) | null;
    onPickerAttributesChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["pickerAttributes"]>) => any) | null;
    onPlaceholderChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["placeholder"]>) => any) | null;
    onReadOnlyChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["readOnly"]>) => any) | null;
    onRenderModeChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["renderMode"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["required"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["value"]>) => any) | null;
    onValueOptionChanged: ((event: JetElementCustomEvent<ojSelectOne<K, D>["valueOption"]>) => any) | null;
    onOjAnimateEnd: ((event: ojSelectOne.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojSelectOne.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojSelectOneEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojSelectOneEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSelectOneSettableProperties<K, D>>(property: T): ojSelectOne<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSelectOneSettableProperties<K, D>>(property: T, value: ojSelectOneSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSelectOneSettableProperties<K, D>>): void;
    setProperties(properties: ojSelectOneSettablePropertiesLenient<K, D>): void;
}
export namespace ojSelectOne {
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
export interface ojSelectOneEventMap<K, D> extends ojSelectEventMap<any, ojSelectOneSettableProperties<K, D>> {
    'ojAnimateEnd': ojSelectOne.ojAnimateEnd;
    'ojAnimateStart': ojSelectOne.ojAnimateStart;
    'minimumResultsForSearchChanged': JetElementCustomEvent<ojSelectOne<K, D>["minimumResultsForSearch"]>;
    'optionRendererChanged': JetElementCustomEvent<ojSelectOne<K, D>["optionRenderer"]>;
    'optionsChanged': JetElementCustomEvent<ojSelectOne<K, D>["options"]>;
    'optionsKeysChanged': JetElementCustomEvent<ojSelectOne<K, D>["optionsKeys"]>;
    'pickerAttributesChanged': JetElementCustomEvent<ojSelectOne<K, D>["pickerAttributes"]>;
    'placeholderChanged': JetElementCustomEvent<ojSelectOne<K, D>["placeholder"]>;
    'readOnlyChanged': JetElementCustomEvent<ojSelectOne<K, D>["readOnly"]>;
    'renderModeChanged': JetElementCustomEvent<ojSelectOne<K, D>["renderMode"]>;
    'requiredChanged': JetElementCustomEvent<ojSelectOne<K, D>["required"]>;
    'valueChanged': JetElementCustomEvent<ojSelectOne<K, D>["value"]>;
    'valueOptionChanged': JetElementCustomEvent<ojSelectOne<K, D>["valueOption"]>;
}
export interface ojSelectOneSettableProperties<K, D> extends ojSelectSettableProperties<any> {
    minimumResultsForSearch: number;
    optionRenderer?: ((param0: ojSelect.OptionContext) => Element) | null;
    options: Array<ojSelect.Option | ojSelect.Optgroup> | DataProvider<K, D> | null;
    optionsKeys: {
        childKeys?: {
            label?: string;
            value?: string;
            children?: string;
            childKeys?: ojSelect.OptionsKeys;
        };
        children?: string;
        label?: string;
        value?: string;
    };
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    placeholder: string | null;
    readOnly: boolean;
    renderMode: 'jet' | 'native';
    required: boolean;
    value: any;
    valueOption: {
        value: any;
        label?: string;
    };
    translations: {
        filterFurther?: string;
        moreMatchesFound?: string;
        noMatchesFound?: string;
        oneMatchesFound?: string;
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        searchField?: string;
    };
}
export interface ojSelectOneSettablePropertiesLenient<K, D> extends Partial<ojSelectOneSettableProperties<K, D>> {
    [key: string]: any;
}
export interface Optgroup {
    children: Array<(Option | Optgroup)>;
    disabled?: boolean;
    label: string;
}
export interface Option {
    disabled?: boolean;
    label?: string;
    value: object;
}
