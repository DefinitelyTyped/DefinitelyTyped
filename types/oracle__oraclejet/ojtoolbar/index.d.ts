import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojToolbar extends baseComponent<ojToolbarSettableProperties> {
    chroming: 'full' | 'half' | 'outlined';
    onChromingChanged: ((event: JetElementCustomEvent<ojToolbar["chroming"]>) => any) | null;
    addEventListener<T extends keyof ojToolbarEventMap>(type: T, listener: (this: HTMLElement, ev: ojToolbarEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojToolbarSettableProperties>(property: T): ojToolbar[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojToolbarSettableProperties>(property: T, value: ojToolbarSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojToolbarSettableProperties>): void;
    setProperties(properties: ojToolbarSettablePropertiesLenient): void;
    refresh(): void;
}
export interface ojToolbarEventMap extends baseComponentEventMap<ojToolbarSettableProperties> {
    'chromingChanged': JetElementCustomEvent<ojToolbar["chroming"]>;
}
export interface ojToolbarSettableProperties extends baseComponentSettableProperties {
    chroming: 'full' | 'half' | 'outlined';
}
export interface ojToolbarSettablePropertiesLenient extends Partial<ojToolbarSettableProperties> {
    [key: string]: any;
}
