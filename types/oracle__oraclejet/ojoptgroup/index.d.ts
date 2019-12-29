import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojOptgroup extends JetElement<ojOptgroupSettableProperties> {
    disabled: boolean;
    label: string;
    onDisabledChanged: ((event: JetElementCustomEvent<ojOptgroup["disabled"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojOptgroup["label"]>) => any) | null;
    addEventListener<T extends keyof ojOptgroupEventMap>(type: T, listener: (this: HTMLElement, ev: ojOptgroupEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojOptgroupSettableProperties>(property: T): ojOptgroup[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojOptgroupSettableProperties>(property: T, value: ojOptgroupSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojOptgroupSettableProperties>): void;
    setProperties(properties: ojOptgroupSettablePropertiesLenient): void;
    refresh(): void;
}
export interface ojOptgroupEventMap extends HTMLElementEventMap {
    'disabledChanged': JetElementCustomEvent<ojOptgroup["disabled"]>;
    'labelChanged': JetElementCustomEvent<ojOptgroup["label"]>;
}
export interface ojOptgroupSettableProperties extends JetSettableProperties {
    disabled: boolean;
    label: string;
}
export interface ojOptgroupSettablePropertiesLenient extends Partial<ojOptgroupSettableProperties> {
    [key: string]: any;
}
