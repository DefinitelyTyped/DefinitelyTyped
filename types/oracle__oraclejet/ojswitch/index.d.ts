import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojSwitch extends editableValue<boolean, ojSwitchSettableProperties> {
    disabled: boolean;
    readonly: boolean;
    value: boolean;
    onDisabledChanged: ((event: JetElementCustomEvent<ojSwitch["disabled"]>) => any) | null;
    onReadonlyChanged: ((event: JetElementCustomEvent<ojSwitch["readonly"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojSwitch["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojSwitch.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojSwitch.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojSwitchEventMap>(type: T, listener: (this: HTMLElement, ev: ojSwitchEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSwitchSettableProperties>(property: T): ojSwitch[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSwitchSettableProperties>(property: T, value: ojSwitchSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSwitchSettableProperties>): void;
    setProperties(properties: ojSwitchSettablePropertiesLenient): void;
}
export namespace ojSwitch {
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
export interface ojSwitchEventMap extends editableValueEventMap<boolean, ojSwitchSettableProperties> {
    'ojAnimateEnd': ojSwitch.ojAnimateEnd;
    'ojAnimateStart': ojSwitch.ojAnimateStart;
    'disabledChanged': JetElementCustomEvent<ojSwitch["disabled"]>;
    'readonlyChanged': JetElementCustomEvent<ojSwitch["readonly"]>;
    'valueChanged': JetElementCustomEvent<ojSwitch["value"]>;
}
export interface ojSwitchSettableProperties extends editableValueSettableProperties<boolean> {
    disabled: boolean;
    readonly: boolean;
    value: boolean;
}
export interface ojSwitchSettablePropertiesLenient extends Partial<ojSwitchSettableProperties> {
    [key: string]: any;
}
