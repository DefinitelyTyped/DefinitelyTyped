// Type definitions for wampy.js v2.0.1
// Project: https://github.com/KSDaemon/wampy.js
// Definitions by: Konstantin Burkalev <https://github.com/KSDaemon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "wampy" {

    interface WampyOptions {
        autoReconnect?: boolean;
        reconnectInterval?: number;
        maxRetries?: number;
        transportEncoding?: string;
        realm?: string;
        helloCustomDetails?: any;
        onConnect?: () => void;
        onClose?: () => void;
        onError?: () => void;
        onReconnect?: () => void;
        ws?: any;
        msgpackCoder?: any;
    }

    interface WampyOpStatus {
        code: number;
        description: string;
        reqId?: number;
    }

    interface SuccessErrorCallbacksHash {
        onSuccess?: (data: any) => void;
        onError?: (err: string) => void;
    }

    interface SubscribeCallbacksHash extends SuccessErrorCallbacksHash {
        onEvent: (data: any) => void;
    }

    interface RegisterCallbacksHash extends SuccessErrorCallbacksHash {
        rpc: (data: any) => any;
    }

    interface CallSuccessErrorCallbacksHash {
        onSuccess: (data: any) => any;
        onError?: (err: string) => void;
    }

    interface AdvancedOptions {
        exclude?: number | number[];
        eligible?: number | number[];
        exclude_me?: boolean;
        disclose_me?: boolean;
    }

    interface CallAdvancedOptions extends AdvancedOptions {
        receive_progress?: boolean;
    }

    interface CancelAdvancedOptions {
        mode?: "skip" | "kill" | "killnowait";
    }

    interface Wampy {
        options(opts?: WampyOptions): WampyOptions | Wampy;
        getOpStatus(): WampyOpStatus;
        getSessionId(): number;
        connect(url?: string): Wampy;
        disconnect(): Wampy;
        abort(): Wampy;
        subscribe(topicURI: string, callbacks: (((data: any) => void) | SubscribeCallbacksHash)): Wampy;
        unsubscribe(topicURI: string, callbacks?: (((data: any) => void) | SubscribeCallbacksHash)): Wampy;
        publish(topicURI: string,
                payload?: any,
                callbacks?: SuccessErrorCallbacksHash,
                advancedOptions?: AdvancedOptions): Wampy;
        call(topicURI: string,
             payload?: any,
             callbacks?: (((data: any) => void) | CallSuccessErrorCallbacksHash),
             advancedOptions?: CallAdvancedOptions): Wampy;
        cancel(reqId: number,
               callbacks?: ((() => void) | SuccessErrorCallbacksHash),
               advancedOptions?: CancelAdvancedOptions): Wampy;
        register(topicURI: string, callbacks: (((data: any) => any) | RegisterCallbacksHash)): Wampy;
        unregister(topicURI: string, callbacks?: ((() => void) | SuccessErrorCallbacksHash)): Wampy;
    }

    interface WampyInstance {
        new(url?: string, options?: WampyOptions): Wampy;
    }

    var wampy: WampyInstance;

    export default wampy;
}
