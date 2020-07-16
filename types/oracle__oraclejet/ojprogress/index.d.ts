import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojProgress extends baseComponent<ojProgressSettableProperties> {
    max: number;
    type: 'bar' | 'circle';
    value: number;
    translations: {
        ariaIndeterminateProgressText?: string;
    };
    onMaxChanged: ((event: JetElementCustomEvent<ojProgress["max"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojProgress["type"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojProgress["value"]>) => any) | null;
    addEventListener<T extends keyof ojProgressEventMap>(type: T, listener: (this: HTMLElement, ev: ojProgressEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojProgressSettableProperties>(property: T): ojProgress[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojProgressSettableProperties>(property: T, value: ojProgressSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojProgressSettableProperties>): void;
    setProperties(properties: ojProgressSettablePropertiesLenient): void;
}
export interface ojProgressEventMap extends baseComponentEventMap<ojProgressSettableProperties> {
    'maxChanged': JetElementCustomEvent<ojProgress["max"]>;
    'typeChanged': JetElementCustomEvent<ojProgress["type"]>;
    'valueChanged': JetElementCustomEvent<ojProgress["value"]>;
}
export interface ojProgressSettableProperties extends baseComponentSettableProperties {
    max: number;
    type: 'bar' | 'circle';
    value: number;
    translations: {
        ariaIndeterminateProgressText?: string;
    };
}
export interface ojProgressSettablePropertiesLenient extends Partial<ojProgressSettableProperties> {
    [key: string]: any;
}
