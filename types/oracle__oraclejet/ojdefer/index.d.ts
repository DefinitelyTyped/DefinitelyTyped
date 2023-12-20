import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
export interface ojDefer extends JetElement<ojDeferSettableProperties> {
    addEventListener<T extends keyof ojDeferEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojDeferEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojDeferSettableProperties>(property: T): ojDefer[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojDeferSettableProperties>(property: T, value: ojDeferSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojDeferSettableProperties>): void;
    setProperties(properties: ojDeferSettablePropertiesLenient): void;
}
// These interfaces are empty but required to keep the event chain intact. Avoid lint-rule
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ojDeferEventMap extends HTMLElementEventMap {
}
// These interfaces are empty but required to keep the component chain intact. Avoid lint-rule
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ojDeferSettableProperties extends JetSettableProperties {
}
export interface ojDeferSettablePropertiesLenient extends Partial<ojDeferSettableProperties> {
    [key: string]: any;
}
