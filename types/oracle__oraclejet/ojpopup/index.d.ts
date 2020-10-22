import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojPopup extends baseComponent<ojPopupSettableProperties> {
    autoDismiss: 'none' | 'focusLoss';
    chrome: 'default' | 'none';
    initialFocus: 'auto' | 'none' | 'firstFocusable' | 'popup';
    modality: 'modeless' | 'modal';
    position: ojPopup.Position;
    tail: 'none' | 'simple';
    translations: {
        ariaCloseSkipLink?: string;
        ariaFocusSkipLink?: string;
        ariaLiveRegionInitialFocusFirstFocusable?: string;
        ariaLiveRegionInitialFocusFirstFocusableTouch?: string;
        ariaLiveRegionInitialFocusNone?: string;
        ariaLiveRegionInitialFocusNoneTouch?: string;
    };
    onAutoDismissChanged: ((event: JetElementCustomEvent<ojPopup["autoDismiss"]>) => any) | null;
    onChromeChanged: ((event: JetElementCustomEvent<ojPopup["chrome"]>) => any) | null;
    onInitialFocusChanged: ((event: JetElementCustomEvent<ojPopup["initialFocus"]>) => any) | null;
    onModalityChanged: ((event: JetElementCustomEvent<ojPopup["modality"]>) => any) | null;
    onPositionChanged: ((event: JetElementCustomEvent<ojPopup["position"]>) => any) | null;
    onTailChanged: ((event: JetElementCustomEvent<ojPopup["tail"]>) => any) | null;
    onOjAnimateEnd: ((event: ojPopup.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojPopup.ojAnimateStart) => any) | null;
    onOjBeforeClose: ((event: ojPopup.ojBeforeClose) => any) | null;
    onOjBeforeOpen: ((event: ojPopup.ojBeforeOpen) => any) | null;
    onOjClose: ((event: ojPopup.ojClose) => any) | null;
    onOjFocus: ((event: ojPopup.ojFocus) => any) | null;
    onOjOpen: ((event: ojPopup.ojOpen) => any) | null;
    addEventListener<T extends keyof ojPopupEventMap>(type: T, listener: (this: HTMLElement, ev: ojPopupEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojPopupSettableProperties>(property: T): ojPopup[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojPopupSettableProperties>(property: T, value: ojPopupSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojPopupSettableProperties>): void;
    setProperties(properties: ojPopupSettablePropertiesLenient): void;
    close(): void;
    isOpen(): boolean;
    open(launcher: string | Element, position?: ojPopup.Position): void;
    refresh(): void;
}
export namespace ojPopup {
    interface ojAnimateEnd extends CustomEvent<{
        element: Element;
        action: 'open' | 'close';
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: 'open' | 'close';
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
    interface ojBeforeClose extends CustomEvent<{
        [propName: string]: any;
    }> {
    }
    interface ojBeforeOpen extends CustomEvent<{
        [propName: string]: any;
    }> {
    }
    interface ojClose extends CustomEvent<{
        [propName: string]: any;
    }> {
    }
    interface ojFocus extends CustomEvent<{
        [propName: string]: any;
    }> {
    }
    interface ojOpen extends CustomEvent<{
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type Position = {
        my?: PositionAlign;
        at?: PositionAlign;
        offset?: PositionPoint;
        of?: string | PositionPoint;
        collision?: 'flip' | 'fit' | 'flipfit' | 'flipcenter' | 'none';
    };
    // tslint:disable-next-line interface-over-type-literal
    type PositionAlign = {
        vertical?: 'top' | 'bottom' | 'center';
        horizontal?: 'start' | 'end' | 'left' | 'center' | 'bottom';
    };
    // tslint:disable-next-line interface-over-type-literal
    type PositionPoint = {
        x?: number;
        y?: number;
    };
}
export interface ojPopupEventMap extends baseComponentEventMap<ojPopupSettableProperties> {
    'ojAnimateEnd': ojPopup.ojAnimateEnd;
    'ojAnimateStart': ojPopup.ojAnimateStart;
    'ojBeforeClose': ojPopup.ojBeforeClose;
    'ojBeforeOpen': ojPopup.ojBeforeOpen;
    'ojClose': ojPopup.ojClose;
    'ojFocus': ojPopup.ojFocus;
    'ojOpen': ojPopup.ojOpen;
    'autoDismissChanged': JetElementCustomEvent<ojPopup["autoDismiss"]>;
    'chromeChanged': JetElementCustomEvent<ojPopup["chrome"]>;
    'initialFocusChanged': JetElementCustomEvent<ojPopup["initialFocus"]>;
    'modalityChanged': JetElementCustomEvent<ojPopup["modality"]>;
    'positionChanged': JetElementCustomEvent<ojPopup["position"]>;
    'tailChanged': JetElementCustomEvent<ojPopup["tail"]>;
}
export interface ojPopupSettableProperties extends baseComponentSettableProperties {
    autoDismiss: 'none' | 'focusLoss';
    chrome: 'default' | 'none';
    initialFocus: 'auto' | 'none' | 'firstFocusable' | 'popup';
    modality: 'modeless' | 'modal';
    position: ojPopup.Position;
    tail: 'none' | 'simple';
    translations: {
        ariaCloseSkipLink?: string;
        ariaFocusSkipLink?: string;
        ariaLiveRegionInitialFocusFirstFocusable?: string;
        ariaLiveRegionInitialFocusFirstFocusableTouch?: string;
        ariaLiveRegionInitialFocusNone?: string;
        ariaLiveRegionInitialFocusNoneTouch?: string;
    };
}
export interface ojPopupSettablePropertiesLenient extends Partial<ojPopupSettableProperties> {
    [key: string]: any;
}
