import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojValidationGroup extends JetElement<ojValidationGroupSettableProperties> {
    readonly valid: 'valid' | 'pending' | 'invalidHidden' | 'invalidShown';
    onValidChanged: ((event: JetElementCustomEvent<ojValidationGroup["valid"]>) => any) | null;
    addEventListener<T extends keyof ojValidationGroupEventMap>(type: T, listener: (this: HTMLElement, ev: ojValidationGroupEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojValidationGroupSettableProperties>(property: T): ojValidationGroup[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojValidationGroupSettableProperties>(property: T, value: ojValidationGroupSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojValidationGroupSettableProperties>): void;
    setProperties(properties: ojValidationGroupSettablePropertiesLenient): void;
    focusOn(key?: '@firstInvalidShown'): void;
    showMessages(): void;
}
export interface ojValidationGroupEventMap extends HTMLElementEventMap {
    'validChanged': JetElementCustomEvent<ojValidationGroup["valid"]>;
}
export interface ojValidationGroupSettableProperties extends JetSettableProperties {
    readonly valid: 'valid' | 'pending' | 'invalidHidden' | 'invalidShown';
}
export interface ojValidationGroupSettablePropertiesLenient extends Partial<ojValidationGroupSettableProperties> {
    [key: string]: any;
}
