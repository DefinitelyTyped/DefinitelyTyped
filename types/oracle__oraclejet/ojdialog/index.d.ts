import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojDialog extends baseComponent<ojDialogSettableProperties> {
    cancelBehavior: 'icon' | 'escape' | 'none';
    dialogTitle: string | null;
    dragAffordance: 'title-bar' | 'none';
    initialVisibility: 'hide' | 'show';
    modality: 'modal' | 'modeless';
    position: ojDialog.Position;
    resizeBehavior: 'resizable' | 'none';
    role: string;
    translations: {
        labelCloseIcon?: string;
    };
    onCancelBehaviorChanged: ((event: JetElementCustomEvent<ojDialog["cancelBehavior"]>) => any) | null;
    onDialogTitleChanged: ((event: JetElementCustomEvent<ojDialog["dialogTitle"]>) => any) | null;
    onDragAffordanceChanged: ((event: JetElementCustomEvent<ojDialog["dragAffordance"]>) => any) | null;
    onInitialVisibilityChanged: ((event: JetElementCustomEvent<ojDialog["initialVisibility"]>) => any) | null;
    onModalityChanged: ((event: JetElementCustomEvent<ojDialog["modality"]>) => any) | null;
    onPositionChanged: ((event: JetElementCustomEvent<ojDialog["position"]>) => any) | null;
    onResizeBehaviorChanged: ((event: JetElementCustomEvent<ojDialog["resizeBehavior"]>) => any) | null;
    onRoleChanged: ((event: JetElementCustomEvent<ojDialog["role"]>) => any) | null;
    onOjAnimateEnd: ((event: ojDialog.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojDialog.ojAnimateStart) => any) | null;
    onOjBeforeClose: ((event: ojDialog.ojBeforeClose) => any) | null;
    onOjBeforeOpen: ((event: ojDialog.ojBeforeOpen) => any) | null;
    onOjClose: ((event: ojDialog.ojClose) => any) | null;
    onOjFocus: ((event: ojDialog.ojFocus) => any) | null;
    onOjOpen: ((event: ojDialog.ojOpen) => any) | null;
    onOjResize: ((event: ojDialog.ojResize) => any) | null;
    onOjResizeStart: ((event: ojDialog.ojResizeStart) => any) | null;
    onOjResizeStop: ((event: ojDialog.ojResizeStop) => any) | null;
    addEventListener<T extends keyof ojDialogEventMap>(type: T, listener: (this: HTMLElement, ev: ojDialogEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojDialogSettableProperties>(property: T): ojDialog[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojDialogSettableProperties>(property: T, value: ojDialogSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojDialogSettableProperties>): void;
    setProperties(properties: ojDialogSettablePropertiesLenient): void;
    close(): void;
    isOpen(): boolean;
    open(): void;
    refresh(): void;
}
export namespace ojDialog {
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
        event: Event;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeOpen extends CustomEvent<{
        event: Event;
        [propName: string]: any;
    }> {
    }
    interface ojClose extends CustomEvent<{
        event: Event;
        [propName: string]: any;
    }> {
    }
    interface ojFocus extends CustomEvent<{
        event: Event;
        [propName: string]: any;
    }> {
    }
    interface ojOpen extends CustomEvent<{
        event: Event;
        [propName: string]: any;
    }> {
    }
    interface ojResize extends CustomEvent<{
        event: Event;
        [propName: string]: any;
    }> {
    }
    interface ojResizeStart extends CustomEvent<{
        event: Event;
        [propName: string]: any;
    }> {
    }
    interface ojResizeStop extends CustomEvent<{
        event: Event;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type Position = {
        my?: PositionAlign;
        at?: PositionAlign;
        offset?: PositionPoint;
        of?: string | PositionPoint;
        collision?: 'flip' | 'fit' | 'flipfit' | 'none';
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
export interface ojDialogEventMap extends baseComponentEventMap<ojDialogSettableProperties> {
    'ojAnimateEnd': ojDialog.ojAnimateEnd;
    'ojAnimateStart': ojDialog.ojAnimateStart;
    'ojBeforeClose': ojDialog.ojBeforeClose;
    'ojBeforeOpen': ojDialog.ojBeforeOpen;
    'ojClose': ojDialog.ojClose;
    'ojFocus': ojDialog.ojFocus;
    'ojOpen': ojDialog.ojOpen;
    'ojResize': ojDialog.ojResize;
    'ojResizeStart': ojDialog.ojResizeStart;
    'ojResizeStop': ojDialog.ojResizeStop;
    'cancelBehaviorChanged': JetElementCustomEvent<ojDialog["cancelBehavior"]>;
    'dialogTitleChanged': JetElementCustomEvent<ojDialog["dialogTitle"]>;
    'dragAffordanceChanged': JetElementCustomEvent<ojDialog["dragAffordance"]>;
    'initialVisibilityChanged': JetElementCustomEvent<ojDialog["initialVisibility"]>;
    'modalityChanged': JetElementCustomEvent<ojDialog["modality"]>;
    'positionChanged': JetElementCustomEvent<ojDialog["position"]>;
    'resizeBehaviorChanged': JetElementCustomEvent<ojDialog["resizeBehavior"]>;
    'roleChanged': JetElementCustomEvent<ojDialog["role"]>;
}
export interface ojDialogSettableProperties extends baseComponentSettableProperties {
    cancelBehavior: 'icon' | 'escape' | 'none';
    dialogTitle: string | null;
    dragAffordance: 'title-bar' | 'none';
    initialVisibility: 'hide' | 'show';
    modality: 'modal' | 'modeless';
    position: ojDialog.Position;
    resizeBehavior: 'resizable' | 'none';
    role: string;
    translations: {
        labelCloseIcon?: string;
    };
}
export interface ojDialogSettablePropertiesLenient extends Partial<ojDialogSettableProperties> {
    [key: string]: any;
}
