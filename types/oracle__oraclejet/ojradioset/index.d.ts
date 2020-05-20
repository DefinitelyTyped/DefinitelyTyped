import { DataProvider } from '../ojdataprovider';
import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojRadioset<K, D> extends editableValue<any, ojRadiosetSettableProperties<K, D>> {
    disabled: boolean;
    labelledBy: string | null;
    optionRenderer?: ((param0: ojRadioset.OptionContext<D>) => Element) | null;
    options: DataProvider<K, D> | null;
    optionsKeys?: ojRadioset.OptionsKeys;
    required: boolean;
    value: any;
    translations: {
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
    onDisabledChanged: ((event: JetElementCustomEvent<ojRadioset<K, D>["disabled"]>) => any) | null;
    onLabelledByChanged: ((event: JetElementCustomEvent<ojRadioset<K, D>["labelledBy"]>) => any) | null;
    onOptionRendererChanged: ((event: JetElementCustomEvent<ojRadioset<K, D>["optionRenderer"]>) => any) | null;
    onOptionsChanged: ((event: JetElementCustomEvent<ojRadioset<K, D>["options"]>) => any) | null;
    onOptionsKeysChanged: ((event: JetElementCustomEvent<ojRadioset<K, D>["optionsKeys"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojRadioset<K, D>["required"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojRadioset<K, D>["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojRadioset.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojRadioset.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojRadiosetEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojRadiosetEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojRadiosetSettableProperties<K, D>>(property: T): ojRadioset<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojRadiosetSettableProperties<K, D>>(property: T, value: ojRadiosetSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojRadiosetSettableProperties<K, D>>): void;
    setProperties(properties: ojRadiosetSettablePropertiesLenient<K, D>): void;
    refresh(): void;
    validate(): Promise<string>;
}
export namespace ojRadioset {
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
export interface ojRadiosetEventMap<K, D> extends editableValueEventMap<any, ojRadiosetSettableProperties<K, D>> {
    'ojAnimateEnd': ojRadioset.ojAnimateEnd;
    'ojAnimateStart': ojRadioset.ojAnimateStart;
    'disabledChanged': JetElementCustomEvent<ojRadioset<K, D>["disabled"]>;
    'labelledByChanged': JetElementCustomEvent<ojRadioset<K, D>["labelledBy"]>;
    'optionRendererChanged': JetElementCustomEvent<ojRadioset<K, D>["optionRenderer"]>;
    'optionsChanged': JetElementCustomEvent<ojRadioset<K, D>["options"]>;
    'optionsKeysChanged': JetElementCustomEvent<ojRadioset<K, D>["optionsKeys"]>;
    'requiredChanged': JetElementCustomEvent<ojRadioset<K, D>["required"]>;
    'valueChanged': JetElementCustomEvent<ojRadioset<K, D>["value"]>;
}
export interface ojRadiosetSettableProperties<K, D> extends editableValueSettableProperties<any> {
    disabled: boolean;
    labelledBy: string | null;
    optionRenderer?: ((param0: ojRadioset.OptionContext<D>) => Element) | null;
    options: DataProvider<K, D> | null;
    optionsKeys?: ojRadioset.OptionsKeys;
    required: boolean;
    value: any;
    translations: {
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
}
export interface ojRadiosetSettablePropertiesLenient<K, D> extends Partial<ojRadiosetSettableProperties<K, D>> {
    [key: string]: any;
}
