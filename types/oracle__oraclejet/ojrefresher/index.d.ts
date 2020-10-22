import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojRefresher extends baseComponent<ojRefresherSettableProperties> {
    refreshContent: (() => Promise<any>);
    target: Element;
    text: string;
    threshold: number;
    onRefreshContentChanged: ((event: JetElementCustomEvent<ojRefresher["refreshContent"]>) => any) | null;
    onTargetChanged: ((event: JetElementCustomEvent<ojRefresher["target"]>) => any) | null;
    onTextChanged: ((event: JetElementCustomEvent<ojRefresher["text"]>) => any) | null;
    onThresholdChanged: ((event: JetElementCustomEvent<ojRefresher["threshold"]>) => any) | null;
    addEventListener<T extends keyof ojRefresherEventMap>(type: T, listener: (this: HTMLElement, ev: ojRefresherEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojRefresherSettableProperties>(property: T): ojRefresher[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojRefresherSettableProperties>(property: T, value: ojRefresherSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojRefresherSettableProperties>): void;
    setProperties(properties: ojRefresherSettablePropertiesLenient): void;
}
export interface ojRefresherEventMap extends baseComponentEventMap<ojRefresherSettableProperties> {
    'refreshContentChanged': JetElementCustomEvent<ojRefresher["refreshContent"]>;
    'targetChanged': JetElementCustomEvent<ojRefresher["target"]>;
    'textChanged': JetElementCustomEvent<ojRefresher["text"]>;
    'thresholdChanged': JetElementCustomEvent<ojRefresher["threshold"]>;
}
export interface ojRefresherSettableProperties extends baseComponentSettableProperties {
    refreshContent: (() => Promise<any>);
    target: Element;
    text: string;
    threshold: number;
}
export interface ojRefresherSettablePropertiesLenient extends Partial<ojRefresherSettableProperties> {
    [key: string]: any;
}
