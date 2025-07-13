import LiveSocket from "./live_socket";

export type OnReply = (reply: any, ref: number) => any;
export type CallbackRef = (customEvent: any, bypass: boolean) => string;

export interface ViewHookInterface {
    el: HTMLElement;
    liveSocket: LiveSocket;

    mounted?: () => void;
    updated?: () => void;
    beforeUpdate?: () => void;
    destroyed?: () => void;
    reconnected?: () => void;
    disconnected?: () => void;

    js(): object;
    pushEvent(event: string, payload: any, onReply?: OnReply): any;
    pushEventTo(phxTarget: any, event: string, payload: object, onReply?: OnReply): any;
    handleEvent(event: string, callback: any): CallbackRef;
    removeHandleEvent(callbackRef: CallbackRef): void;
    upload(name: any, files: any): any;
    uploadTo(phxTarget: any, name: any, files: any): any;
}

export interface Hook<T extends object = {}> {
    mounted?: (this: T & ViewHookInterface) => void;
    beforeUpdate?: (this: T & ViewHookInterface) => void;
    updated?: (this: T & ViewHookInterface) => void;
    beforeDestroy?: (this: T & ViewHookInterface) => void;
    destroyed?: (this: T & ViewHookInterface) => void;
    disconnected?: (this: T & ViewHookInterface) => void;
    reconnected?: (this: T & ViewHookInterface) => void;
}

export type HooksOptions = Record<string, Hook<any>>;
