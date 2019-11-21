import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojSwipeActions extends baseComponent<ojSwipeActionsSettableProperties> {
    translations: {
        ariaHideActionsDescription?: string;
        ariaShowEndActionsDescription?: string;
        ariaShowStartActionsDescription?: string;
    };
    onOjAction: ((event: ojSwipeActions.ojAction) => any) | null;
    addEventListener<T extends keyof ojSwipeActionsEventMap>(type: T, listener: (this: HTMLElement, ev: ojSwipeActionsEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSwipeActionsSettableProperties>(property: T): ojSwipeActions[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSwipeActionsSettableProperties>(property: T, value: ojSwipeActionsSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSwipeActionsSettableProperties>): void;
    setProperties(properties: ojSwipeActionsSettablePropertiesLenient): void;
    refresh(): void;
}
export namespace ojSwipeActions {
    interface ojAction extends CustomEvent<{
        [propName: string]: any;
    }> {
    }
}
export interface ojSwipeActionsEventMap extends baseComponentEventMap<ojSwipeActionsSettableProperties> {
    'ojAction': ojSwipeActions.ojAction;
}
export interface ojSwipeActionsSettableProperties extends baseComponentSettableProperties {
    translations: {
        ariaHideActionsDescription?: string;
        ariaShowEndActionsDescription?: string;
        ariaShowStartActionsDescription?: string;
    };
}
export interface ojSwipeActionsSettablePropertiesLenient extends Partial<ojSwipeActionsSettableProperties> {
    [key: string]: any;
}
