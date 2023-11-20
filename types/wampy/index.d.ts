declare namespace wampy {
    type Dict = { [key: string]: any };

    type Callback = () => void;

    type ErrorCallback = (args: ErrorArgs) => void;

    type EventCallback = (args: DataArgs) => void;

    type SuccessCallback = (args: DataArgs) => void;

    type RPCCallback = (args: DataArgs) => RPCResult | void;

    type ChallengeCallback = (auth_method: string, extra: Dict) => string;

    type Payload = Args | Dict | string | number | boolean | any[] | null;

    interface Args {
        argsList: any[];
        argsDict: Dict;
    }

    interface ErrorArgs {
        error: string;
        details: Dict;
    }

    interface DataArgs extends Args {
        details: Dict;
    }

    interface RPCOptions {
        process?: boolean | undefined;
    }

    interface RPCResult extends Args {
        options: RPCOptions;
    }

    interface SubscribeCallbacksHash {
        onSuccess?: Callback | undefined;
        onError?: ErrorCallback | undefined;
        onEvent?: EventCallback | undefined;
    }

    interface UnsubscibeCallbacksHash extends SubscribeCallbacksHash {
    }

    interface PublishCallbacksHash {
        onSuccess?: Callback | undefined;
        onError?: ErrorCallback | undefined;
    }

    interface CallCallbacksHash {
        onSuccess?: SuccessCallback | undefined;
        onError?: ErrorCallback | undefined;
    }

    interface CancelCallbacksHash {
        onSuccess?: Callback | undefined;
        onError?: Callback | undefined;
    }

    interface RegisterCallbacksHash {
        rpc: RPCCallback;
        onSuccess?: Callback | undefined;
        onError?: ErrorCallback | undefined;
    }

    interface UnregisterCallbacksHash {
        onSuccess?: Callback | undefined;
        onError?: ErrorCallback | undefined;
    }

    interface SubscribeAdvancedOptions {
        match?: "prefix" | "wildcard" | undefined;
    }

    interface AdvancedOptions {
        exclude?: number | number[] | undefined;
        eligible?: number | number[] | undefined;
        exclude_me?: boolean | undefined;
        disclose_me?: boolean | undefined;
    }

    interface PublishAdvancedOptions extends AdvancedOptions {
        exclude_authid?: string | string[] | undefined;
        exclude_authrole?: string | string[] | undefined;
        eligible_authid?: string | string[] | undefined;
        eligible_authrole?: string | string[] | undefined;
    }

    interface CallAdvancedOptions {
        disclose_me?: boolean | undefined;
        receive_progress?: boolean | undefined;
        timeout?: number | undefined;
    }

    interface CancelAdvancedOptions {
        mode?: "skip" | "kill" | "killnowait" | undefined;
    }

    interface RegisterAdvancedOptions {
        match?: "prefix" | "wildcard" | undefined;
        invoke?: "single" | "roundrobin" | "random" | "first" | "last" | undefined;
    }

    interface WampyOptions {
        autoReconnect?: boolean | undefined;
        reconnectInterval?: number | undefined;
        maxRetries?: number | undefined;
        realm?: string | undefined;
        helloCustomDetails?: any;
        authid?: string | undefined;
        authmethods?: string[] | undefined;
        onChallenge?: ChallengeCallback | undefined;
        onConnect?: Callback | undefined;
        onClose?: Callback | undefined;
        onError?: Callback | undefined;
        onReconnect?: Callback | undefined;
        onReconnectSuccess?: Callback | undefined;
        ws?: any;
        serializer?: any;
        uriValidation?: "strict" | "loose" | undefined;
    }

    interface WampyOpStatus {
        code: number;
        description: string;
        reqId?: number | undefined;
    }

    interface WampyStatic {
        new(options?: WampyOptions): Wampy;
        new(url: string, options?: WampyOptions): Wampy;
    }

    interface Wampy {
        constructor: WampyStatic;
        options(opts?: WampyOptions): WampyOptions | Wampy;
        getOpStatus(): WampyOpStatus;
        getSessionId(): number;
        connect(url?: string): Wampy;
        disconnect(): Wampy;
        abort(): Wampy;
        subscribe(
            topicURI: string,
            callbacks: EventCallback | SubscribeCallbacksHash,
            advancedOptions?: SubscribeAdvancedOptions,
        ): Wampy;
        unsubscribe(topicURI: string, callbacks?: EventCallback | UnsubscibeCallbacksHash): Wampy;
        publish(
            topicURI: string,
            payload?: Payload,
            callbacks?: PublishCallbacksHash,
            advancedOptions?: PublishAdvancedOptions,
        ): Wampy;
        call(
            topicURI: string,
            payload?: Payload,
            callbacks?: SuccessCallback | CallCallbacksHash,
            advancedOptions?: CallAdvancedOptions,
        ): Wampy;
        cancel(
            reqId: number,
            callbacks?: Callback | CancelCallbacksHash,
            advancedOptions?: CancelAdvancedOptions,
        ): Wampy;
        register(
            topicURI: string,
            callbacks: RPCCallback | RegisterCallbacksHash,
            avdancedOptions?: RegisterAdvancedOptions,
        ): Wampy;
        unregister(topicURI: string, callbacks?: Callback | UnregisterCallbacksHash): Wampy;
    }
}

declare const wampy: wampy.WampyStatic;
export as namespace wampy;
export = wampy;
