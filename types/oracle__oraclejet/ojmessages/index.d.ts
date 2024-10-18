import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
import { DataProvider } from "../ojdataprovider";
import { ojMessage } from "../ojmessage";
export interface ojMessages extends JetElement<ojMessagesSettableProperties> {
    display: "general" | "notification";
    displayOptions: ojMessage.DisplayOptions;
    messages: ojMessage.Message[] | null | DataProvider<any, ojMessage.Message>;
    position: ojMessages.Position | null;
    translations: {
        ariaLiveRegion?: {
            navigationFromKeyboard?: string | undefined;
            navigationToKeyboard?: string | undefined;
            navigationToTouch?: string | undefined;
            newMessage?: string | undefined;
        } | undefined;
        labelLandmark?: string | undefined;
    };
    onDisplayChanged: ((event: JetElementCustomEvent<ojMessages["display"]>) => any) | null;
    onDisplayOptionsChanged: ((event: JetElementCustomEvent<ojMessages["displayOptions"]>) => any) | null;
    onMessagesChanged: ((event: JetElementCustomEvent<ojMessages["messages"]>) => any) | null;
    onPositionChanged: ((event: JetElementCustomEvent<ojMessages["position"]>) => any) | null;
    onTranslationsChanged: ((event: JetElementCustomEvent<ojMessages["translations"]>) => any) | null;
    addEventListener<T extends keyof ojMessagesEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojMessagesEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojMessagesSettableProperties>(property: T): ojMessages[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMessagesSettableProperties>(
        property: T,
        value: ojMessagesSettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMessagesSettableProperties>): void;
    setProperties(properties: ojMessagesSettablePropertiesLenient): void;
    close(message: ojMessage.Message): void;
    closeAll(closeFilter?: (message: ojMessage.Message) => boolean): void;
}
export interface ojMessagesEventMap extends HTMLElementEventMap {
    "displayChanged": JetElementCustomEvent<ojMessages["display"]>;
    "displayOptionsChanged": JetElementCustomEvent<ojMessages["displayOptions"]>;
    "messagesChanged": JetElementCustomEvent<ojMessages["messages"]>;
    "positionChanged": JetElementCustomEvent<ojMessages["position"]>;
    "translationsChanged": JetElementCustomEvent<ojMessages["translations"]>;
}
export interface ojMessagesSettableProperties extends JetSettableProperties {
    display: "general" | "notification";
    displayOptions: ojMessage.DisplayOptions;
    messages: ojMessage.Message[] | null | DataProvider<any, ojMessage.Message>;
    position: ojMessages.Position | null;
    translations: {
        ariaLiveRegion?: {
            navigationFromKeyboard?: string | undefined;
            navigationToKeyboard?: string | undefined;
            navigationToTouch?: string | undefined;
            newMessage?: string | undefined;
        } | undefined;
        labelLandmark?: string | undefined;
    };
}
export interface ojMessagesSettablePropertiesLenient extends Partial<ojMessagesSettableProperties> {
    [key: string]: any;
}
export namespace ojMessages {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Position = {
        my?: PositionAlign | undefined;
        at?: PositionAlign | undefined;
        offset?: PositionPoint | undefined;
        of?: string | PositionPoint | undefined;
        collision?: "flip" | "fit" | "flipfit" | "none" | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type PositionAlign = {
        vertical?: "top" | "bottom" | "center" | undefined;
        horizontal?: "start" | "end" | "left" | "center" | "bottom" | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type PositionPoint = {
        x?: number | undefined;
        y?: number | undefined;
    };
}
