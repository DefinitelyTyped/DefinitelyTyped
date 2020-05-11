import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojSwitcher extends JetElement<ojSwitcherSettableProperties> {
    value: string;
    onValueChanged: ((event: JetElementCustomEvent<ojSwitcher["value"]>) => any) | null;
    addEventListener<T extends keyof ojSwitcherEventMap>(type: T, listener: (this: HTMLElement, ev: ojSwitcherEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSwitcherSettableProperties>(property: T): ojSwitcher[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSwitcherSettableProperties>(property: T, value: ojSwitcherSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSwitcherSettableProperties>): void;
    setProperties(properties: ojSwitcherSettablePropertiesLenient): void;
    refresh(): void;
}
export interface ojSwitcherEventMap extends HTMLElementEventMap {
    'valueChanged': JetElementCustomEvent<ojSwitcher["value"]>;
}
export interface ojSwitcherSettableProperties extends JetSettableProperties {
    value: string;
}
export interface ojSwitcherSettablePropertiesLenient extends Partial<ojSwitcherSettableProperties> {
    [key: string]: any;
}
