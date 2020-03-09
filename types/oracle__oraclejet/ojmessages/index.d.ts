import { DataProvider } from '../ojdataprovider';
import { ojMessage } from '../ojmessage';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojMessages extends JetElement<ojMessagesSettableProperties> {
    display: 'general' | 'notification';
    displayOptions: ojMessage.DisplayOptions;
    messages: ojMessage.Message[] | null | DataProvider<any, ojMessage.Message>;
    position: ojMessages.Position | null;
    translations: {
        ariaLiveRegion?: {
            navigationFromKeyboard?: string;
            navigationToKeyboard?: string;
            navigationToTouch?: string;
            newMessage?: string;
        };
        labelLandmark?: string;
    };
    onDisplayChanged: ((event: JetElementCustomEvent<ojMessages["display"]>) => any) | null;
    onDisplayOptionsChanged: ((event: JetElementCustomEvent<ojMessages["displayOptions"]>) => any) | null;
    onMessagesChanged: ((event: JetElementCustomEvent<ojMessages["messages"]>) => any) | null;
    onPositionChanged: ((event: JetElementCustomEvent<ojMessages["position"]>) => any) | null;
    onTranslationsChanged: ((event: JetElementCustomEvent<ojMessages["translations"]>) => any) | null;
    addEventListener<T extends keyof ojMessagesEventMap>(type: T, listener: (this: HTMLElement, ev: ojMessagesEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojMessagesSettableProperties>(property: T): ojMessages[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMessagesSettableProperties>(property: T, value: ojMessagesSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMessagesSettableProperties>): void;
    setProperties(properties: ojMessagesSettablePropertiesLenient): void;
    close(message: ojMessage.Message): void;
    closeAll(closeFilter?: (message: ojMessage.Message) => boolean): void;
}
export interface ojMessagesEventMap extends HTMLElementEventMap {
    'displayChanged': JetElementCustomEvent<ojMessages["display"]>;
    'displayOptionsChanged': JetElementCustomEvent<ojMessages["displayOptions"]>;
    'messagesChanged': JetElementCustomEvent<ojMessages["messages"]>;
    'positionChanged': JetElementCustomEvent<ojMessages["position"]>;
    'translationsChanged': JetElementCustomEvent<ojMessages["translations"]>;
}
export interface ojMessagesSettableProperties extends JetSettableProperties {
    display: 'general' | 'notification';
    displayOptions: ojMessage.DisplayOptions;
    messages: ojMessage.Message[] | null | DataProvider<any, ojMessage.Message>;
    position: ojMessages.Position | null;
    translations: {
        ariaLiveRegion?: {
            navigationFromKeyboard?: string;
            navigationToKeyboard?: string;
            navigationToTouch?: string;
            newMessage?: string;
        };
        labelLandmark?: string;
    };
}
export interface ojMessagesSettablePropertiesLenient extends Partial<ojMessagesSettableProperties> {
    [key: string]: any;
}
export namespace ojMessages {
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
