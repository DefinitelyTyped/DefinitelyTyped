import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojCheckboxset extends editableValue<any[], ojCheckboxsetSettableProperties> {
    disabled: boolean;
    labelledBy: string | null;
    required: boolean;
    value: any[];
    translations: {
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
    };
    onDisabledChanged: ((event: JetElementCustomEvent<ojCheckboxset["disabled"]>) => any) | null;
    onLabelledByChanged: ((event: JetElementCustomEvent<ojCheckboxset["labelledBy"]>) => any) | null;
    onRequiredChanged: ((event: JetElementCustomEvent<ojCheckboxset["required"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojCheckboxset["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojCheckboxset.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojCheckboxset.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojCheckboxsetEventMap>(type: T, listener: (this: HTMLElement, ev: ojCheckboxsetEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojCheckboxsetSettableProperties>(property: T): ojCheckboxset[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojCheckboxsetSettableProperties>(property: T, value: ojCheckboxsetSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojCheckboxsetSettableProperties>): void;
    setProperties(properties: ojCheckboxsetSettablePropertiesLenient): void;
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
}
export interface ojCheckboxsetEventMap extends editableValueEventMap<any[], ojCheckboxsetSettableProperties> {
    'ojAnimateEnd': ojCheckboxset.ojAnimateEnd;
    'ojAnimateStart': ojCheckboxset.ojAnimateStart;
    'disabledChanged': JetElementCustomEvent<ojCheckboxset["disabled"]>;
    'labelledByChanged': JetElementCustomEvent<ojCheckboxset["labelledBy"]>;
    'requiredChanged': JetElementCustomEvent<ojCheckboxset["required"]>;
    'valueChanged': JetElementCustomEvent<ojCheckboxset["value"]>;
}
export interface ojCheckboxsetSettableProperties extends editableValueSettableProperties<any[]> {
    disabled: boolean;
    labelledBy: string | null;
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
export interface ojCheckboxsetSettablePropertiesLenient extends Partial<ojCheckboxsetSettableProperties> {
    [key: string]: any;
}
