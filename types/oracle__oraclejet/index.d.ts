// Type definitions for oraclejet 6.1
// Project: https://github.com/oracle/oraclejet
// Definitions by: Naizam Olakara <https://github.com/nolakara>
//                 Jing Wu <https://github.com/jingxwu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9
import { Model, Collection } from './ojmodel';
export namespace oj {
    let revision: string;
    let version: string;
    function ajax(settings?: object): object;
    function sync(method: string, model: Model | Collection, options?: object): object;
}
export interface baseComponent<SP extends baseComponentSettableProperties = baseComponentSettableProperties> extends JetElement<SP> {
    translations: object | null;
    onTranslationsChanged: ((event: JetElementCustomEvent<baseComponent<SP>["translations"]>) => any) | null;
    addEventListener<T extends keyof baseComponentEventMap<SP>>(type: T, listener: (this: HTMLElement, ev: baseComponentEventMap<SP>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof baseComponentSettableProperties>(property: T): baseComponent<SP>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof baseComponentSettableProperties>(property: T, value: baseComponentSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, baseComponentSettableProperties>): void;
    setProperties(properties: baseComponentSettablePropertiesLenient): void;
    refresh(): void;
}
export interface baseComponentEventMap<SP extends baseComponentSettableProperties = baseComponentSettableProperties> extends HTMLElementEventMap {
    'translationsChanged': JetElementCustomEvent<baseComponent<SP>["translations"]>;
}
export interface baseComponentSettableProperties extends JetSettableProperties {
    translations: object | null;
}
export interface baseComponentSettablePropertiesLenient extends Partial<baseComponentSettableProperties> {
    [key: string]: any;
}
export interface GenericSetter<SP> {
    set<K extends keyof SP>(propertyName: K, propertyValue: SP[K]): void;
    unset(propertyName: keyof SP): void;
}
export interface JetElement<SP> extends HTMLElement, GenericSetter<SP> {
    set<K extends keyof SP>(propertyName: K, propertyValue: SP[K]): void;
    unset(propertyName: keyof SP): void;
}
export interface JetElementCustomEvent<V> extends CustomEvent<{
    value: V;
    previousValue: V;
    updatedFrom: 'external' | 'internal';
    subproperty: {
        path: string;
        value: any;
        previousValue: any;
        [key: string]: any;
    };
    [key: string]: any;
}> {
}
// This interfaces is empty but required to keep the component chain intact. Avoid lint-rule
// tslint:disable-next-line no-empty-interface
export interface JetSettableProperties {
}
export type JetSetPropertyType<K, U extends JetSettableProperties> = K extends keyof U ? U[K] : any;
