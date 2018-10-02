import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojFilmStrip extends baseComponent<ojFilmStripSettableProperties> {
    arrowPlacement: 'adjacent' | 'overlay';
    arrowVisibility: 'visible' | 'hidden' | 'hover' | 'auto';
    currentItem: {
        id?: string;
        index?: number;
    };
    looping: 'off' | 'page';
    maxItemsPerPage: number;
    orientation: 'horizontal' | 'vertical';
    translations: {
        labelAccArrowNextPage?: string;
        labelAccArrowPreviousPage?: string;
        labelAccFilmStrip?: string;
        tipArrowNextPage?: string;
        tipArrowPreviousPage?: string;
    };
    onArrowPlacementChanged: ((event: JetElementCustomEvent<ojFilmStrip["arrowPlacement"]>) => any) | null;
    onArrowVisibilityChanged: ((event: JetElementCustomEvent<ojFilmStrip["arrowVisibility"]>) => any) | null;
    onCurrentItemChanged: ((event: JetElementCustomEvent<ojFilmStrip["currentItem"]>) => any) | null;
    onLoopingChanged: ((event: JetElementCustomEvent<ojFilmStrip["looping"]>) => any) | null;
    onMaxItemsPerPageChanged: ((event: JetElementCustomEvent<ojFilmStrip["maxItemsPerPage"]>) => any) | null;
    onOrientationChanged: ((event: JetElementCustomEvent<ojFilmStrip["orientation"]>) => any) | null;
    addEventListener<T extends keyof ojFilmStripEventMap>(type: T, listener: (this: HTMLElement, ev: ojFilmStripEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojFilmStripSettableProperties>(property: T): ojFilmStrip[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojFilmStripSettableProperties>(property: T, value: ojFilmStripSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojFilmStripSettableProperties>): void;
    setProperties(properties: ojFilmStripSettablePropertiesLenient): void;
    getItemsPerPage(): number;
    refresh(): void;
}
export interface ojFilmStripEventMap extends baseComponentEventMap<ojFilmStripSettableProperties> {
    'arrowPlacementChanged': JetElementCustomEvent<ojFilmStrip["arrowPlacement"]>;
    'arrowVisibilityChanged': JetElementCustomEvent<ojFilmStrip["arrowVisibility"]>;
    'currentItemChanged': JetElementCustomEvent<ojFilmStrip["currentItem"]>;
    'loopingChanged': JetElementCustomEvent<ojFilmStrip["looping"]>;
    'maxItemsPerPageChanged': JetElementCustomEvent<ojFilmStrip["maxItemsPerPage"]>;
    'orientationChanged': JetElementCustomEvent<ojFilmStrip["orientation"]>;
}
export interface ojFilmStripSettableProperties extends baseComponentSettableProperties {
    arrowPlacement: 'adjacent' | 'overlay';
    arrowVisibility: 'visible' | 'hidden' | 'hover' | 'auto';
    currentItem: {
        id?: string;
        index?: number;
    };
    looping: 'off' | 'page';
    maxItemsPerPage: number;
    orientation: 'horizontal' | 'vertical';
    translations: {
        labelAccArrowNextPage?: string;
        labelAccArrowPreviousPage?: string;
        labelAccFilmStrip?: string;
        tipArrowNextPage?: string;
        tipArrowPreviousPage?: string;
    };
}
export interface ojFilmStripSettablePropertiesLenient extends Partial<ojFilmStripSettableProperties> {
    [key: string]: any;
}
