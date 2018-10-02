import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojRadioset extends editableValue<any, ojRadiosetSettableProperties> {
    disabled: boolean;
    labelledBy: string | null;
    required: boolean;
    value: any;
    translations: {
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
    onDisabledChanged: ((event: JetElementCustomEvent<ojRadioset["disabled"]>) => any) | null;
    onLabelledByChanged: ((event: JetElementCustomEvent<ojRadioset["labelledBy"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojRadioset["required"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojRadioset["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojRadioset.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojRadioset.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojRadiosetEventMap>(type: T, listener: (this: HTMLElement, ev: ojRadiosetEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojRadiosetSettableProperties>(property: T): ojRadioset[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojRadiosetSettableProperties>(property: T, value: ojRadiosetSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojRadiosetSettableProperties>): void;
    setProperties(properties: ojRadiosetSettablePropertiesLenient): void;
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
}
export interface ojRadiosetEventMap extends editableValueEventMap<any, ojRadiosetSettableProperties> {
    'ojAnimateEnd': ojRadioset.ojAnimateEnd;
    'ojAnimateStart': ojRadioset.ojAnimateStart;
    'disabledChanged': JetElementCustomEvent<ojRadioset["disabled"]>;
    'labelledByChanged': JetElementCustomEvent<ojRadioset["labelledBy"]>;
    'requiredChanged': JetElementCustomEvent<ojRadioset["required"]>;
    'valueChanged': JetElementCustomEvent<ojRadioset["value"]>;
}
export interface ojRadiosetSettableProperties extends editableValueSettableProperties<any> {
    disabled: boolean;
    labelledBy: string | null;
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
export interface ojRadiosetSettablePropertiesLenient extends Partial<ojRadiosetSettableProperties> {
    [key: string]: any;
}
