import { DataProvider } from '../ojdataprovider';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojProgressList extends JetElement<ojProgressListSettableProperties> {
    data: DataProvider<any, any> | null;
    onDataChanged: ((event: JetElementCustomEvent<ojProgressList["data"]>) => any) | null;
    addEventListener<T extends keyof ojProgressListEventMap>(type: T, listener: (this: HTMLElement, ev: ojProgressListEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojProgressListSettableProperties>(property: T): ojProgressList[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojProgressListSettableProperties>(property: T, value: ojProgressListSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojProgressListSettableProperties>): void;
    setProperties(properties: ojProgressListSettablePropertiesLenient): void;
}
export interface ojProgressListEventMap extends HTMLElementEventMap {
    'dataChanged': JetElementCustomEvent<ojProgressList["data"]>;
}
export interface ojProgressListSettableProperties extends JetSettableProperties {
    data: DataProvider<any, any> | null;
}
export interface ojProgressListSettablePropertiesLenient extends Partial<ojProgressListSettableProperties> {
    [key: string]: any;
}
export interface ProgressItem {
    addEventListener(eventType: ProgressItem.EventType, listener: EventListener): void;
    removeEventListener(eventType: ProgressItem.EventType, listener: EventListener): void;
}
export namespace ProgressItem {
    type EventType = "loadstart" | "progress" | "abort" | "error" | "load" | "timeout" | "loadend";
    type Status = "queued" | "loadstarted" | "aborted" | "errored" | "timedout" | "loaded";
}
