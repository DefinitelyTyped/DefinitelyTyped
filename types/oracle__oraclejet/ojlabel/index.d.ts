import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojLabel extends baseComponent<ojLabelSettableProperties> {
    for: string | null;
    help: {
        definition?: string | null;
        source?: string | null;
    };
    labelId: string | null;
    showRequired: boolean | null;
    translations: {
        tooltipHelp?: string;
        tooltipRequired?: string;
    };
    onForChanged: ((event: JetElementCustomEvent<ojLabel["for"]>) => any) | null;
    onHelpChanged: ((event: JetElementCustomEvent<ojLabel["help"]>) => any) | null;
    onLabelIdChanged: ((event: JetElementCustomEvent<ojLabel["labelId"]>) => any) | null;
    onShowRequiredChanged: ((event: JetElementCustomEvent<ojLabel["showRequired"]>) => any) | null;
    addEventListener<T extends keyof ojLabelEventMap>(type: T, listener: (this: HTMLElement, ev: ojLabelEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojLabelSettableProperties>(property: T): ojLabel[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojLabelSettableProperties>(property: T, value: ojLabelSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojLabelSettableProperties>): void;
    setProperties(properties: ojLabelSettablePropertiesLenient): void;
    refresh(): void;
}
export interface ojLabelEventMap extends baseComponentEventMap<ojLabelSettableProperties> {
    'forChanged': JetElementCustomEvent<ojLabel["for"]>;
    'helpChanged': JetElementCustomEvent<ojLabel["help"]>;
    'labelIdChanged': JetElementCustomEvent<ojLabel["labelId"]>;
    'showRequiredChanged': JetElementCustomEvent<ojLabel["showRequired"]>;
}
export interface ojLabelSettableProperties extends baseComponentSettableProperties {
    for: string | null;
    help: {
        definition?: string | null;
        source?: string | null;
    };
    labelId: string | null;
    showRequired: boolean | null;
    translations: {
        tooltipHelp?: string;
        tooltipRequired?: string;
    };
}
export interface ojLabelSettablePropertiesLenient extends Partial<ojLabelSettableProperties> {
    [key: string]: any;
}
