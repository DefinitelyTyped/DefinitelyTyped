import { DataProvider } from '../ojdataprovider';
import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojCheckboxset<K, D> extends editableValue<any[], ojCheckboxsetSettableProperties<K, D>> {
    disabled: boolean;
    labelledBy: string | null;
    optionRenderer?: ((param0: ojCheckboxset.OptionContext<D>) => Element) | null;
    options: DataProvider<K, D> | null;
    optionsKeys?: ojCheckboxset.OptionsKeys;
    required: boolean;
    value: any[];
    translations: {
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
    onDisabledChanged: ((event: JetElementCustomEvent<ojCheckboxset<K, D>["disabled"]>) => any) | null;
    onLabelledByChanged: ((event: JetElementCustomEvent<ojCheckboxset<K, D>["labelledBy"]>) => any) | null;
    onOptionRendererChanged: ((event: JetElementCustomEvent<ojCheckboxset<K, D>["optionRenderer"]>) => any) | null;
    onOptionsChanged: ((event: JetElementCustomEvent<ojCheckboxset<K, D>["options"]>) => any) | null;
    onOptionsKeysChanged: ((event: JetElementCustomEvent<ojCheckboxset<K, D>["optionsKeys"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojCheckboxset<K, D>["required"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojCheckboxset<K, D>["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojCheckboxset.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojCheckboxset.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojCheckboxsetEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojCheckboxsetEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojCheckboxsetSettableProperties<K, D>>(property: T): ojCheckboxset<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojCheckboxsetSettableProperties<K, D>>(property: T, value: ojCheckboxsetSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojCheckboxsetSettableProperties<K, D>>): void;
    setProperties(properties: ojCheckboxsetSettablePropertiesLenient<K, D>): void;
    refresh(): void;
    validate(): Promise<string>;
}
export namespace ojCheckboxset {
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
    type Option = {
        disabled?: boolean;
        label?: string;
        value: any;
    };
    // tslint:disable-next-line interface-over-type-literal
    type OptionContext<D> = {
        component: Element;
        index: number;
        data: D;
    };
    // tslint:disable-next-line interface-over-type-literal
    type OptionsKeys = {
        label?: string;
        value?: string;
    };
}
export interface ojCheckboxsetEventMap<K, D> extends editableValueEventMap<any[], ojCheckboxsetSettableProperties<K, D>> {
    'ojAnimateEnd': ojCheckboxset.ojAnimateEnd;
    'ojAnimateStart': ojCheckboxset.ojAnimateStart;
    'disabledChanged': JetElementCustomEvent<ojCheckboxset<K, D>["disabled"]>;
    'labelledByChanged': JetElementCustomEvent<ojCheckboxset<K, D>["labelledBy"]>;
    'optionRendererChanged': JetElementCustomEvent<ojCheckboxset<K, D>["optionRenderer"]>;
    'optionsChanged': JetElementCustomEvent<ojCheckboxset<K, D>["options"]>;
    'optionsKeysChanged': JetElementCustomEvent<ojCheckboxset<K, D>["optionsKeys"]>;
    'requiredChanged': JetElementCustomEvent<ojCheckboxset<K, D>["required"]>;
    'valueChanged': JetElementCustomEvent<ojCheckboxset<K, D>["value"]>;
}
export interface ojCheckboxsetSettableProperties<K, D> extends editableValueSettableProperties<any[]> {
    disabled: boolean;
    labelledBy: string | null;
    optionRenderer?: ((param0: ojCheckboxset.OptionContext<D>) => Element) | null;
    options: DataProvider<K, D> | null;
    optionsKeys?: ojCheckboxset.OptionsKeys;
    required: boolean;
    value: any[];
    translations: {
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
}
export interface ojCheckboxsetSettablePropertiesLenient<K, D> extends Partial<ojCheckboxsetSettableProperties<K, D>> {
    [key: string]: any;
}
