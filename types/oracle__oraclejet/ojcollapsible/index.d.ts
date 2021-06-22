import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojCollapsible extends baseComponent<ojCollapsibleSettableProperties> {
    disabled: boolean;
    expandArea: 'header' | 'disclosureIcon';
    expanded: boolean;
    onDisabledChanged: ((event: JetElementCustomEvent<ojCollapsible["disabled"]>) => any) | null;
    onExpandAreaChanged: ((event: JetElementCustomEvent<ojCollapsible["expandArea"]>) => any) | null;
    onExpandedChanged: ((event: JetElementCustomEvent<ojCollapsible["expanded"]>) => any) | null;
    onOjBeforeCollapse: ((event: ojCollapsible.ojBeforeCollapse) => any) | null;
    onOjBeforeExpand: ((event: ojCollapsible.ojBeforeExpand) => any) | null;
    onOjCollapse: ((event: ojCollapsible.ojCollapse) => any) | null;
    onOjExpand: ((event: ojCollapsible.ojExpand) => any) | null;
    addEventListener<T extends keyof ojCollapsibleEventMap>(type: T, listener: (this: HTMLElement, ev: ojCollapsibleEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojCollapsibleSettableProperties>(property: T): ojCollapsible[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojCollapsibleSettableProperties>(property: T, value: ojCollapsibleSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojCollapsibleSettableProperties>): void;
    setProperties(properties: ojCollapsibleSettablePropertiesLenient): void;
    refresh(): void;
}
export namespace ojCollapsible {
    interface ojBeforeCollapse extends CustomEvent<{
        header: Element;
        content: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeExpand extends CustomEvent<{
        header: Element;
        content: Element;
        [propName: string]: any;
    }> {
    }
    interface ojCollapse extends CustomEvent<{
        header: Element;
        content: Element;
        [propName: string]: any;
    }> {
    }
    interface ojExpand extends CustomEvent<{
        header: Element;
        content: Element;
        [propName: string]: any;
    }> {
    }
}
export interface ojCollapsibleEventMap extends baseComponentEventMap<ojCollapsibleSettableProperties> {
    'ojBeforeCollapse': ojCollapsible.ojBeforeCollapse;
    'ojBeforeExpand': ojCollapsible.ojBeforeExpand;
    'ojCollapse': ojCollapsible.ojCollapse;
    'ojExpand': ojCollapsible.ojExpand;
    'disabledChanged': JetElementCustomEvent<ojCollapsible["disabled"]>;
    'expandAreaChanged': JetElementCustomEvent<ojCollapsible["expandArea"]>;
    'expandedChanged': JetElementCustomEvent<ojCollapsible["expanded"]>;
}
export interface ojCollapsibleSettableProperties extends baseComponentSettableProperties {
    disabled: boolean;
    expandArea: 'header' | 'disclosureIcon';
    expanded: boolean;
}
export interface ojCollapsibleSettablePropertiesLenient extends Partial<ojCollapsibleSettableProperties> {
    [key: string]: any;
}
