import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
export interface ojMessage extends JetElement<ojMessageSettableProperties> {
    displayOptions: ojMessage.DisplayOptions;
    message: ojMessage.Message;
    translations: {
        categories?: {
            confirmation?: string | undefined;
            error?: string | undefined;
            info?: string | undefined;
            warning?: string | undefined;
        } | undefined;
        labelCloseIcon?: string | undefined;
    };
    onDisplayOptionsChanged: ((event: JetElementCustomEvent<ojMessage["displayOptions"]>) => any) | null;
    onMessageChanged: ((event: JetElementCustomEvent<ojMessage["message"]>) => any) | null;
    onTranslationsChanged: ((event: JetElementCustomEvent<ojMessage["translations"]>) => any) | null;
    onOjAnimateEnd: ((event: ojMessage.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojMessage.ojAnimateStart) => any) | null;
    onOjClose: ((event: ojMessage.ojClose) => any) | null;
    addEventListener<T extends keyof ojMessageEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojMessageEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojMessageSettableProperties>(property: T): ojMessage[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMessageSettableProperties>(property: T, value: ojMessageSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMessageSettableProperties>): void;
    setProperties(properties: ojMessageSettablePropertiesLenient): void;
    close(): void;
}
export namespace ojMessage {
    interface ojAnimateEnd extends
        CustomEvent<{
            element: Element;
            action: "open" | "close";
            [propName: string]: any;
        }>
    {
    }
    interface ojAnimateStart extends
        CustomEvent<{
            element: Element;
            action: "open" | "close";
            endCallback: () => void;
            [propName: string]: any;
        }>
    {
    }
    interface ojClose extends
        CustomEvent<{
            message: Message;
            [propName: string]: any;
        }>
    {
    }
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type DisplayOptions = {
        category?: "header" | "none" | "auto" | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Message = {
        icon?: string | undefined;
        category?: string | undefined;
        severity?: "error" | "warning" | "confirmation" | "info" | "none" | undefined;
        timestamp?: string | undefined;
        summary?: string | undefined;
        detail?: string | undefined;
        autoTimeout?: number | undefined;
        closeAffordance?: "none" | "defaults" | undefined;
        sound?: string | undefined;
    };
}
export interface ojMessageEventMap extends HTMLElementEventMap {
    "ojAnimateEnd": ojMessage.ojAnimateEnd;
    "ojAnimateStart": ojMessage.ojAnimateStart;
    "ojClose": ojMessage.ojClose;
    "displayOptionsChanged": JetElementCustomEvent<ojMessage["displayOptions"]>;
    "messageChanged": JetElementCustomEvent<ojMessage["message"]>;
    "translationsChanged": JetElementCustomEvent<ojMessage["translations"]>;
}
export interface ojMessageSettableProperties extends JetSettableProperties {
    displayOptions: ojMessage.DisplayOptions;
    message: ojMessage.Message;
    translations: {
        categories?: {
            confirmation?: string | undefined;
            error?: string | undefined;
            info?: string | undefined;
            warning?: string | undefined;
        } | undefined;
        labelCloseIcon?: string | undefined;
    };
}
export interface ojMessageSettablePropertiesLenient extends Partial<ojMessageSettableProperties> {
    [key: string]: any;
}
