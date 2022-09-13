import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojOption extends JetElement<ojOptionSettableProperties> {
    disabled: boolean;
    value: any;
    onDisabledChanged: ((event: JetElementCustomEvent<ojOption["disabled"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojOption["value"]>) => any) | null;
    addEventListener<T extends keyof ojOptionEventMap>(type: T, listener: (this: HTMLElement, ev: ojOptionEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojOptionSettableProperties>(property: T): ojOption[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojOptionSettableProperties>(property: T, value: ojOptionSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojOptionSettableProperties>): void;
    setProperties(properties: ojOptionSettablePropertiesLenient): void;
    refresh(): void;
}
export interface ojOptionEventMap extends HTMLElementEventMap {
    'disabledChanged': JetElementCustomEvent<ojOption["disabled"]>;
    'valueChanged': JetElementCustomEvent<ojOption["value"]>;
}
export interface ojOptionSettableProperties extends JetSettableProperties {
    disabled: boolean;
    value: any;
}
export interface ojOptionSettablePropertiesLenient extends Partial<ojOptionSettableProperties> {
    [key: string]: any;
}
