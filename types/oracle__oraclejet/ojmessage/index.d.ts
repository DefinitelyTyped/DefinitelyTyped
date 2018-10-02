import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojMessage extends JetElement<ojMessageSettableProperties> {
    message: ojMessage.Message;
    translations: {
        categories?: {
            confirmation?: string;
            error?: string;
            info?: string;
            warning?: string;
        };
        labelCloseIcon?: string;
    };
    onMessageChanged: ((event: JetElementCustomEvent<ojMessage["message"]>) => any) | null;
    onTranslationsChanged: ((event: JetElementCustomEvent<ojMessage["translations"]>) => any) | null;
    onOjAnimateEnd: ((event: ojMessage.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojMessage.ojAnimateStart) => any) | null;
    onOjClose: ((event: ojMessage.ojClose) => any) | null;
    addEventListener<T extends keyof ojMessageEventMap>(type: T, listener: (this: HTMLElement, ev: ojMessageEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojMessageSettableProperties>(property: T): ojMessage[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMessageSettableProperties>(property: T, value: ojMessageSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMessageSettableProperties>): void;
    setProperties(properties: ojMessageSettablePropertiesLenient): void;
    close(): void;
}
export namespace ojMessage {
    interface ojAnimateEnd extends CustomEvent<{
        element: Element;
        action: 'open' | 'close';
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        element: Element;
        action: 'open' | 'close';
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
    interface ojClose extends CustomEvent<{
        message: object;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type Message = {
        icon?: string;
        category?: string;
        severity?: 'error' | 'warning' | 'confirmation' | 'info' | 'none';
        timestamp?: string;
        summary?: string;
        detail?: string;
        autoTimeout?: number;
        closeAffordance?: 'none' | 'defaults';
        sound?: string;
    };
}
export interface ojMessageEventMap extends HTMLElementEventMap {
    'ojAnimateEnd': ojMessage.ojAnimateEnd;
    'ojAnimateStart': ojMessage.ojAnimateStart;
    'ojClose': ojMessage.ojClose;
    'messageChanged': JetElementCustomEvent<ojMessage["message"]>;
    'translationsChanged': JetElementCustomEvent<ojMessage["translations"]>;
}
export interface ojMessageSettableProperties extends JetSettableProperties {
    message: ojMessage.Message;
    translations: {
        categories?: {
            confirmation?: string;
            error?: string;
            info?: string;
            warning?: string;
        };
        labelCloseIcon?: string;
    };
}
export interface ojMessageSettablePropertiesLenient extends Partial<ojMessageSettableProperties> {
    [key: string]: any;
}
