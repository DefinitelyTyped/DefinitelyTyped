export as namespace Channel;

export function build(config: ChannelConfiguration): MessagingChannel;

export interface MessagingChannel {
    unbind: (method: string, doNotPublish?: boolean) => boolean;
    bind: (
        method: string,
        callback?: (transaction: MessageTransaction, params: any) => void,
        doNotPublish?: boolean,
    ) => MessagingChannel;
    call: (message: Message) => void;
    notify: (message: Message) => void;
    destroy: () => void;
}

export interface Message {
    method: string;
    success?: ((result: any) => void) | undefined;
    params?: any;
    timeout?: number | undefined;
    error?: ((error: any, message: string) => void) | undefined;
}

export interface ChannelConfiguration {
    window: Window;
    origin: string;
    scope: string;
    debugOutput?: boolean | undefined;
    postMessageObserver?: ((origin: string, message: Message) => void) | undefined;
    gotMessageObserver?: ((origin: string, message: Message) => void) | undefined;
    onReady?: ((channel: MessagingChannel) => void) | undefined;
    reconnect?: boolean | undefined;
    publish?: boolean | undefined;
    remote?: string | ReadonlyArray<string> | undefined;
}

export interface MessageTransaction {
    delayReturn: (delay: boolean) => boolean;
    complete: (result: any) => void;
    error: (error: any, message: string) => void;
    invoke: (callbackName: string, params: any) => void;
    completed: () => boolean;
}
