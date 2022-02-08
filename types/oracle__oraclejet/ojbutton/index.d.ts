import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojButton<SP extends ojButtonSettableProperties = ojButtonSettableProperties> extends baseComponent<SP> {
    chroming: 'full' | 'half' | 'outlined';
    disabled: boolean;
    display: 'all' | 'icons';
    onChromingChanged: ((event: JetElementCustomEvent<ojButton<SP>["chroming"]>) => any) | null;
    onDisabledChanged: ((event: JetElementCustomEvent<ojButton<SP>["disabled"]>) => any) | null;
    onDisplayChanged: ((event: JetElementCustomEvent<ojButton<SP>["display"]>) => any) | null;
    onOjAction: ((event: ojButton.ojAction) => any) | null;
    addEventListener<T extends keyof ojButtonEventMap<SP>>(type: T, listener: (this: HTMLElement, ev: ojButtonEventMap<SP>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojButtonSettableProperties>(property: T): ojButton<SP>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojButtonSettableProperties>(property: T, value: ojButtonSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojButtonSettableProperties>): void;
    setProperties(properties: ojButtonSettablePropertiesLenient): void;
}
export namespace ojButton {
    interface ojAction extends CustomEvent<{
        [propName: string]: any;
    }> {
    }
}
export interface ojButtonEventMap<SP extends ojButtonSettableProperties = ojButtonSettableProperties> extends baseComponentEventMap<SP> {
    'ojAction': ojButton.ojAction;
    'chromingChanged': JetElementCustomEvent<ojButton<SP>["chroming"]>;
    'disabledChanged': JetElementCustomEvent<ojButton<SP>["disabled"]>;
    'displayChanged': JetElementCustomEvent<ojButton<SP>["display"]>;
}
export interface ojButtonSettableProperties extends baseComponentSettableProperties {
    chroming: 'full' | 'half' | 'outlined';
    disabled: boolean;
    display: 'all' | 'icons';
}
export interface ojButtonSettablePropertiesLenient extends Partial<ojButtonSettableProperties> {
    [key: string]: any;
}
export interface ojButtonset<SP extends ojButtonsetSettableProperties = ojButtonsetSettableProperties> extends baseComponent<SP> {
    addEventListener<T extends keyof ojButtonsetEventMap<SP>>(type: T, listener: (this: HTMLElement, ev: ojButtonsetEventMap<SP>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojButtonsetSettableProperties>(property: T): ojButtonset<SP>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojButtonsetSettableProperties>(property: T, value: ojButtonsetSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojButtonsetSettableProperties>): void;
    setProperties(properties: ojButtonsetSettablePropertiesLenient): void;
}
export interface ojButtonsetEventMap<SP extends ojButtonsetSettableProperties = ojButtonsetSettableProperties> extends baseComponentEventMap<SP> {
}
// These interfaces are empty but required to keep the component chain intact. Avoid lint-rule
// tslint:disable-next-line no-empty-interface
export interface ojButtonsetSettableProperties extends baseComponentSettableProperties {
}
export interface ojButtonsetSettablePropertiesLenient extends Partial<ojButtonsetSettableProperties> {
    [key: string]: any;
}
export interface ojButtonsetMany extends ojButtonset<ojButtonsetManySettableProperties> {
    chroming: 'full' | 'half' | 'outlined';
    disabled: boolean;
    display: 'all' | 'icons';
    focusManagement: 'oneTabstop' | 'none';
    value: any[] | null;
    onChromingChanged: ((event: JetElementCustomEvent<ojButtonsetMany["chroming"]>) => any) | null;
    onDisabledChanged: ((event: JetElementCustomEvent<ojButtonsetMany["disabled"]>) => any) | null;
    onDisplayChanged: ((event: JetElementCustomEvent<ojButtonsetMany["display"]>) => any) | null;
    onFocusManagementChanged: ((event: JetElementCustomEvent<ojButtonsetMany["focusManagement"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojButtonsetMany["value"]>) => any) | null;
    addEventListener<T extends keyof ojButtonsetManyEventMap>(type: T, listener: (this: HTMLElement, ev: ojButtonsetManyEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojButtonsetManySettableProperties>(property: T): ojButtonsetMany[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojButtonsetManySettableProperties>(property: T, value: ojButtonsetManySettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojButtonsetManySettableProperties>): void;
    setProperties(properties: ojButtonsetManySettablePropertiesLenient): void;
}
export interface ojButtonsetManyEventMap extends ojButtonsetEventMap<ojButtonsetManySettableProperties> {
    'chromingChanged': JetElementCustomEvent<ojButtonsetMany["chroming"]>;
    'disabledChanged': JetElementCustomEvent<ojButtonsetMany["disabled"]>;
    'displayChanged': JetElementCustomEvent<ojButtonsetMany["display"]>;
    'focusManagementChanged': JetElementCustomEvent<ojButtonsetMany["focusManagement"]>;
    'valueChanged': JetElementCustomEvent<ojButtonsetMany["value"]>;
}
export interface ojButtonsetManySettableProperties extends ojButtonsetSettableProperties {
    chroming: 'full' | 'half' | 'outlined';
    disabled: boolean;
    display: 'all' | 'icons';
    focusManagement: 'oneTabstop' | 'none';
    value: any[] | null;
}
export interface ojButtonsetManySettablePropertiesLenient extends Partial<ojButtonsetManySettableProperties> {
    [key: string]: any;
}
export interface ojButtonsetOne extends ojButtonset<ojButtonsetOneSettableProperties> {
    chroming: 'full' | 'half' | 'outlined';
    disabled: boolean;
    display: 'all' | 'icons';
    focusManagement: 'oneTabstop' | 'none';
    value: any;
    onChromingChanged: ((event: JetElementCustomEvent<ojButtonsetOne["chroming"]>) => any) | null;
    onDisabledChanged: ((event: JetElementCustomEvent<ojButtonsetOne["disabled"]>) => any) | null;
    onDisplayChanged: ((event: JetElementCustomEvent<ojButtonsetOne["display"]>) => any) | null;
    onFocusManagementChanged: ((event: JetElementCustomEvent<ojButtonsetOne["focusManagement"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojButtonsetOne["value"]>) => any) | null;
    addEventListener<T extends keyof ojButtonsetOneEventMap>(type: T, listener: (this: HTMLElement, ev: ojButtonsetOneEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojButtonsetOneSettableProperties>(property: T): ojButtonsetOne[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojButtonsetOneSettableProperties>(property: T, value: ojButtonsetOneSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojButtonsetOneSettableProperties>): void;
    setProperties(properties: ojButtonsetOneSettablePropertiesLenient): void;
}
export interface ojButtonsetOneEventMap extends ojButtonsetEventMap<ojButtonsetOneSettableProperties> {
    'chromingChanged': JetElementCustomEvent<ojButtonsetOne["chroming"]>;
    'disabledChanged': JetElementCustomEvent<ojButtonsetOne["disabled"]>;
    'displayChanged': JetElementCustomEvent<ojButtonsetOne["display"]>;
    'focusManagementChanged': JetElementCustomEvent<ojButtonsetOne["focusManagement"]>;
    'valueChanged': JetElementCustomEvent<ojButtonsetOne["value"]>;
}
export interface ojButtonsetOneSettableProperties extends ojButtonsetSettableProperties {
    chroming: 'full' | 'half' | 'outlined';
    disabled: boolean;
    display: 'all' | 'icons';
    focusManagement: 'oneTabstop' | 'none';
    value: any;
}
export interface ojButtonsetOneSettablePropertiesLenient extends Partial<ojButtonsetOneSettableProperties> {
    [key: string]: any;
}
export interface ojMenuButton extends ojButton<ojMenuButtonSettableProperties> {
    chroming: 'full' | 'half' | 'outlined';
    disabled: boolean;
    display: 'all' | 'icons';
    onChromingChanged: ((event: JetElementCustomEvent<ojMenuButton["chroming"]>) => any) | null;
    onDisabledChanged: ((event: JetElementCustomEvent<ojMenuButton["disabled"]>) => any) | null;
    onDisplayChanged: ((event: JetElementCustomEvent<ojMenuButton["display"]>) => any) | null;
    onOjAction: ((event: ojMenuButton.ojAction) => any) | null;
    addEventListener<T extends keyof ojMenuButtonEventMap>(type: T, listener: (this: HTMLElement, ev: ojMenuButtonEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojMenuButtonSettableProperties>(property: T): ojMenuButton[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMenuButtonSettableProperties>(property: T, value: ojMenuButtonSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMenuButtonSettableProperties>): void;
    setProperties(properties: ojMenuButtonSettablePropertiesLenient): void;
}
export namespace ojMenuButton {
    interface ojAction extends CustomEvent<{
        [propName: string]: any;
    }> {
    }
}
export interface ojMenuButtonEventMap extends ojButtonEventMap<ojMenuButtonSettableProperties> {
    'ojAction': ojMenuButton.ojAction;
    'chromingChanged': JetElementCustomEvent<ojMenuButton["chroming"]>;
    'disabledChanged': JetElementCustomEvent<ojMenuButton["disabled"]>;
    'displayChanged': JetElementCustomEvent<ojMenuButton["display"]>;
}
export interface ojMenuButtonSettableProperties extends ojButtonSettableProperties {
    chroming: 'full' | 'half' | 'outlined';
    disabled: boolean;
    display: 'all' | 'icons';
}
export interface ojMenuButtonSettablePropertiesLenient extends Partial<ojMenuButtonSettableProperties> {
    [key: string]: any;
}
