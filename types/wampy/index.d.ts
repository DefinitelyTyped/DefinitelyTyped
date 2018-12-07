// Type definitions for wampy.js v6.x.x
// Project: https://github.com/KSDaemon/wampy.js
// Definitions by: Konstantin Burkalev <https://github.com/KSDaemon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace wampy {

    type Dict = {[key: string]: any};

    type Callback = () => void;

    type ErrorCallback = (args: ErrorArgs) => void;

    type EventCallback = (args: DataArgs) => void;

    type SuccessCallback = (args: DataArgs) => void;

    type RPCCallback = (args: DataArgs) => RPCResult | void;

    type ChallengeCallback = (auth_method: string, extra: Dict) => string;

    type Payload = Args | Dict | string | number | boolean | any[] | null;

    interface Args
    {
        argsList: any[];
        argsDict: Dict;
    }

    interface ErrorArgs
    {
        error: string;
        details: Dict;
    }

    interface DataArgs extends Args
    {
        details: Dict;
    }

    interface RPCOptions
    {
        process?: boolean;
    }

    interface RPCResult extends Args
    {
        options: RPCOptions;
    }

    interface SubscribeCallbacksHash
    {
        onSuccess?: Callback;
        onError?: ErrorCallback;
        onEvent?: EventCallback;
    }

    interface UnsubscibeCallbacksHash extends SubscribeCallbacksHash
    {

    }

    interface PublishCallbacksHash
    {
        onSuccess?: Callback;
        onError?: ErrorCallback;
    }

    interface CallCallbacksHash
    {
        onSuccess?: SuccessCallback;
        onError?: ErrorCallback;
    }

    interface CancelCallbacksHash
    {
        onSuccess?: Callback;
        onError?: Callback;
    }

    interface RegisterCallbacksHash
    {
        rpc: RPCCallback;
        onSuccess?: Callback;
        onError?: ErrorCallback;
    }

    interface UnregisterCallbacksHash
    {
        onSuccess?: Callback;
        onError?: ErrorCallback;
    }

    interface AdvancedOptions
    {
        exclude?: number | number[];
        eligible?: number | number[];
        exclude_me?: boolean;
        disclose_me?: boolean;
    }

    interface PublishAdvancedOptions extends AdvancedOptions
    {
        exclude_authid?: string | string[];
        exclude_authrole?: string | string[];
        eligible_authid?: string | string[];
        eligible_authrole?: string | string[];
    }

    interface CallAdvancedOptions
    {
        disclose_me?: boolean;
        receive_progress?: boolean;
        timeout?: number;
    }

    interface CancelAdvancedOptions
    {
        mode?: "skip" | "kill" | "killnowait";
    }

    interface RegisterAdvancedOptions
    {
        match?: "prefix" | "wildcard"
        invoke?: "single" | "roundrobin" | "random" | "first" | "last"
    }

    interface WampyOptions
    {
        autoReconnect?: boolean;
        reconnectInterval?: number;
        maxRetries?: number;
        realm?: string;
        helloCustomDetails?: any;
        authid?: string;
        authmethods?: string[];
        onChallenge?: ChallengeCallback;
        onConnect?: Callback;
        onClose?: Callback;
        onError?: Callback;
        onReconnect?: Callback;
        onReconnectSuccess?: Callback;
        ws?: any;
        serializer?: any;
    }

    interface WampyOpStatus
    {
        code: number;
        description: string;
        reqId?: number;
    }

    interface WampyStatic
    {
        new (options?: WampyOptions): Wampy;
        new (url: string, options?: WampyOptions): Wampy;
    }

    interface Wampy
    {
        constructor: WampyStatic;
        options(opts?: WampyOptions): WampyOptions | Wampy;
        getOpStatus(): WampyOpStatus;
        getSessionId(): number;
        connect(url?: string): Wampy;
        disconnect(): Wampy;
        abort(): Wampy;
        subscribe(topicURI: string,
                  callbacks: EventCallback | SubscribeCallbacksHash): Wampy;
        unsubscribe(topicURI: string,
                    callbacks?: EventCallback | UnsubscibeCallbacksHash): Wampy;
        publish(topicURI: string,
                payload?: Payload,
                callbacks?: PublishCallbacksHash,
                advancedOptions?: PublishAdvancedOptions): Wampy;
        call(topicURI: string,
             payload?: Payload,
             callbacks?: SuccessCallback | CallCallbacksHash,
             advancedOptions?: CallAdvancedOptions): Wampy;
        cancel(reqId: number,
               callbacks?: Callback | CancelCallbacksHash,
               advancedOptions?: CancelAdvancedOptions): Wampy;
        register(topicURI: string,
                 callbacks: RPCCallback | RegisterCallbacksHash,
                 avdancedOptions?: RegisterAdvancedOptions): Wampy;
        unregister(topicURI: string,
                   callbacks?: Callback | UnregisterCallbacksHash): Wampy;
    }
}

declare const wampy: wampy.WampyStatic;
export as namespace wampy;
export = wampy;
