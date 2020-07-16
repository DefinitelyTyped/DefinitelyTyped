// Type definitions for jschannel 1.0
// Project: https://github.com/yochannah/jschannel
// Definitions by: Yitzchok Gottlieb <https://github.com/yitzchok>
//                 McFlat <https://github.com/McFlat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export as namespace Channel;

export function build(config: ChannelConfiguration): MessagingChannel;

export interface MessagingChannel {
    unbind: (method: string, doNotPublish?: boolean) => boolean;
    bind: (method: string, callback?: (transaction: MessageTransaction, params: any) => void, doNotPublish?: boolean) => MessagingChannel;
    call: (message: Message) => void;
    notify: (message: Message) => void;
    destroy: () => void;
}

export interface Message {
    method: string;
    success?: (result: any) => void;
    params?: any;
    timeout?: number;
    error?: (error: any, message: string) => void;
}

export interface ChannelConfiguration {
    window: Window;
    origin: string;
    scope: string;
    debugOutput?: boolean;
    postMessageObserver?: (origin: string, message: Message) => void;
    gotMessageObserver?: (origin: string, message: Message) => void;
    onReady?: (channel: MessagingChannel) => void;
    reconnect?: boolean;
    publish?: boolean;
    remote?: string | ReadonlyArray<string>;
}

export interface MessageTransaction {
    delayReturn: (delay: boolean) => boolean;
    complete: (result: any) => void;
    error: (error: any, message: string) => void;
    invoke: (callbackName: string, params: any) => void;
    completed: () => boolean;
}
