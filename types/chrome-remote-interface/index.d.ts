import type ProtocolMappingApi from "devtools-protocol/types/protocol-mapping";
import type ProtocolProxyApi from "devtools-protocol/types/protocol-proxy-api";

declare namespace CDP {
    interface BaseOptions {
        host?: string | undefined;
        port?: number | undefined;
        secure?: boolean | undefined;
        useHostName?: boolean | undefined;
        alterPath?: ((path: string) => string) | undefined;
    }

    interface Options extends BaseOptions {
        target?: ((targets: Target[]) => Target | number) | Target | string | undefined;
        protocol?: Protocol | undefined;
        local?: boolean | undefined;
    }

    interface ActivateOptions extends BaseOptions {
        id: string;
    }

    interface CloseOptions extends BaseOptions {
        id: string;
    }

    interface NewOptions extends BaseOptions {
        url?: string | undefined;
    }

    interface ProtocolOptions extends BaseOptions {
        local?: boolean | undefined;
    }

    interface EventMessage {
        method: string;
        params: object;
        sessionId?: string | undefined;
    }

    interface SendError {
        code: number;
        message: string;
        data?: string | undefined;
    }

    interface SendCallback<T extends keyof ProtocolMappingApi.Commands> {
        (error: true, response: SendError): void;
        (error: false, response: ProtocolMappingApi.Commands[T]["returnType"]): void;
        (error: Error, response: undefined): void;
    }

    interface Target {
        description: string;
        devtoolsFrontendUrl: string;
        id: string;
        title: string;
        type: string;
        url: string;
        webSocketDebuggerUrl: string;
    }

    interface VersionResult {
        Browser: string;
        "Protocol-Version": string;
        "User-Agent": string;
        "V8-Version": string;
        "Webkit-Version": string;
        webSocketDebuggerUrl: string;
    }

    /////////////////////////////////////////////////
    // Generated with https://app.quicktype.io/, Name: Protocol, Language: TypeScript, Interfaces only.
    // Manually done: TypeEnum simplified, add " | undefined" for optional properties.
    // Source: https://github.com/ChromeDevTools/devtools-protocol/blob/master/json/ (merge JSON objects)
    /////////////////////////////////////////////////
    interface Protocol {
        version: Version;
        domains: Domain[];
    }

    interface Domain {
        domain: string;
        experimental?: boolean | undefined;
        dependencies?: string[] | undefined;
        types?: TypeElement[] | undefined;
        commands: Command[];
        events?: Event[] | undefined;
        description?: string | undefined;
        deprecated?: boolean | undefined;
    }

    interface Command {
        name: string;
        description?: string | undefined;
        experimental?: boolean | undefined;
        parameters?: Parameter[] | undefined;
        returns?: Parameter[] | undefined;
        redirect?: string | undefined;
        deprecated?: boolean | undefined;
    }

    interface Parameter {
        name: string;
        description?: string | undefined;
        optional?: boolean | undefined;
        $ref?: string | undefined;
        type?: TypeEnum | undefined;
        items?: Items | undefined;
        enum?: string[] | undefined;
        experimental?: boolean | undefined;
        deprecated?: boolean | undefined;
    }

    interface Items {
        type?: TypeEnum | undefined;
        $ref?: string | undefined;
    }

    type TypeEnum = "any" | "array" | "boolean" | "integer" | "number" | "object" | "string";

    interface Event {
        name: string;
        description?: string | undefined;
        parameters?: Parameter[] | undefined;
        experimental?: boolean | undefined;
        deprecated?: boolean | undefined;
    }

    interface TypeElement {
        id: string;
        description?: string | undefined;
        type: TypeEnum;
        enum?: string[] | undefined;
        properties?: Parameter[] | undefined;
        experimental?: boolean | undefined;
        items?: Items | undefined;
        deprecated?: boolean | undefined;
    }

    interface Version {
        major: string;
        minor: string;
    }
    /////////////////////////////////////////////////
    // Generated content end.
    /////////////////////////////////////////////////

    type GetEventFromString<D extends string, S extends string> = S extends `${D}.${infer E}` ? E : never;
    type GetEvent<D extends string> = GetEventFromString<D, keyof ProtocolMappingApi.Events>;
    type GetReturnType<D extends string, E extends string> = `${D}.${E}` extends keyof ProtocolMappingApi.Events
        ? ProtocolMappingApi.Events[`${D}.${E}`][0]
        : never;
    type DoEventPromises<D extends string> = {
        [event in GetEvent<D>]:
            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
            () => Promise<GetReturnType<D, event> extends undefined ? void : GetReturnType<D, event>>;
    };
    type DoEventListeners<D extends string> = {
        [event in GetEvent<D>]: (
            listener: (params: GetReturnType<D, event>, sessionId?: string) => void,
        ) => () => Client;
    };
    type DoEventObj<D> = D extends string ? DoEventPromises<D> & DoEventListeners<D> : {};

    type IsNullableObj<T> = Record<keyof T, undefined> extends T ? true : false;
    /**
     * Checks whether the only parameter of `T[key]` is nullable i.e. all of
     * its properties are optional, and makes it optional if so.
     */
    type OptIfParamNullable<T> = {
        [key in keyof T]: T[key] extends (params: any) => any
            ? IsNullableObj<Parameters<T[key]>[0]> extends true ? (params?: Parameters<T[key]>[0]) => ReturnType<T[key]>
            : T[key]
            : T[key];
    };

    type AddOptParams<T> = {
        [key in keyof T]: key extends "on" ? T[key]
            : T[key] extends (...args: infer P) => infer R ? (...args: [...curArgs: P, sessionId?: string]) => R
            : T[key];
    };

    type ImproveAPI<T> = { [key in keyof T]: DoEventObj<key> & AddOptParams<OptIfParamNullable<T[key]>> };
    interface StableDomains {
        /**
         * The Browser domain defines methods and events for browser managing.
         */
        Browser: ProtocolProxyApi.BrowserApi;
        /**
         * Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing
         * breakpoints, stepping through execution, exploring stack traces, etc.
         */
        Debugger: ProtocolProxyApi.DebuggerApi;
        /**
         * This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror
         * object that has an `id`. This `id` can be used to get additional information on the Node,
         * resolve it into the JavaScript object wrapper, etc. It is important that client receives
         * DOM events only for the nodes that are known to the client. Backend keeps track of the nodes
         * that were sent to the client and never sends the same node twice. It is client's
         * responsibility to collect information about the nodes that were sent to the client.
         * Note that `iframe` owner elements will return corresponding document elements as their child
         * nodes.
         */
        DOM: ProtocolProxyApi.DOMApi;
        /**
         * DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript
         * execution will stop on these operations as if there was a regular breakpoint set.
         */
        DOMDebugger: ProtocolProxyApi.DOMDebuggerApi;
        /**
         * This domain emulates different environments for the page.
         */
        Emulation: ProtocolProxyApi.EmulationApi;
        /**
         * A domain for letting clients substitute browser's network layer with client code.
         */
        Fetch: ProtocolProxyApi.FetchApi;
        Input: ProtocolProxyApi.InputApi;
        /**
         * Input/Output operations for streams produced by DevTools.
         */
        IO: ProtocolProxyApi.IOApi;
        /**
         * Provides access to log entries.
         */
        Log: ProtocolProxyApi.LogApi;
        /**
         * Network domain allows tracking network activities of the page. It exposes information about
         * http, file, data and other requests and responses, their headers, bodies, timing, etc.
         */
        Network: ProtocolProxyApi.NetworkApi;
        /**
         * Actions and events related to the inspected page belong to the page domain.
         */
        Page: ProtocolProxyApi.PageApi;
        Performance: ProtocolProxyApi.PerformanceApi;
        Profiler: ProtocolProxyApi.ProfilerApi;
        /**
         * Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects.
         * Evaluation results are returned as mirror object that expose object type, string
         * representation and unique identifier that can be used for further object reference. Original
         * objects are maintained in memory unless they are either explicitly released or are released
         * along with the other objects in their object group.
         */
        Runtime: ProtocolProxyApi.RuntimeApi;
        /**
         * Security
         */
        Security: ProtocolProxyApi.SecurityApi;
        /**
         * Supports additional targets discovery and allows to attach to them.
         */
        Target: ProtocolProxyApi.TargetApi;
    }
    interface DeprecatedDomains {
        /** @deprecated This domain is deprecated - use Runtime or Log instead. */
        Console: ProtocolProxyApi.ConsoleApi;
        /** @deprecated This domain is deprecated. */
        Schema: ProtocolProxyApi.SchemaApi;
    }
    interface ExperimentalDomains {
        Accessibility: ProtocolProxyApi.AccessibilityApi;
        Animation: ProtocolProxyApi.AnimationApi;
        /**
         * Audits domain allows investigation of page violations and possible improvements.
         */
        Audits: ProtocolProxyApi.AuditsApi;
        /**
         * Defines commands and events for Autofill.
         */
        Autofill: ProtocolProxyApi.AutofillApi;
        /**
         * Defines events for background web platform features.
         */
        BackgroundService: ProtocolProxyApi.BackgroundServiceApi;
        CacheStorage: ProtocolProxyApi.CacheStorageApi;
        /**
         * A domain for interacting with Cast, Presentation API, and Remote Playback API
         * functionalities.
         */
        Cast: ProtocolProxyApi.CastApi;
        /**
         * This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and
         * styles) have an associated `id` used in subsequent operations on the related object. Each
         * object type has a specific `id` structure, and those are not interchangeable between objects
         * of different kinds. CSS objects can be loaded using the `get*ForNode()` calls (which accept
         * a DOM node id). A client can also keep track of stylesheets via the
         * `styleSheetAdded`/`styleSheetRemoved` events and subsequently load the required stylesheet
         * contents using the `getStyleSheet[Text]()` methods.
         */
        CSS: ProtocolProxyApi.CSSApi;
        Database: ProtocolProxyApi.DatabaseApi;
        DeviceAccess: ProtocolProxyApi.DeviceAccessApi;
        DeviceOrientation: ProtocolProxyApi.DeviceOrientationApi;
        /**
         * This domain facilitates obtaining document snapshots with DOM, layout, and style
         * information.
         */
        DOMSnapshot: ProtocolProxyApi.DOMSnapshotApi;
        /**
         * Query and modify DOM storage.
         */
        DOMStorage: ProtocolProxyApi.DOMStorageApi;
        /**
         * EventBreakpoints permits setting breakpoints on particular operations and events in targets
         * that run JavaScript but do not have a DOM. JavaScript execution will stop on these
         * operations as if there was a regular breakpoint set.
         */
        EventBreakpoints: ProtocolProxyApi.EventBreakpointsApi;
        /**
         * This domain allows interacting with the FedCM dialog.
         */
        FedCm: ProtocolProxyApi.FedCmApi;
        /**
         * This domain provides experimental commands only supported in headless mode.
         */
        HeadlessExperimental: ProtocolProxyApi.HeadlessExperimentalApi;
        HeapProfiler: ProtocolProxyApi.HeapProfilerApi;
        IndexedDB: ProtocolProxyApi.IndexedDBApi;
        Inspector: ProtocolProxyApi.InspectorApi;
        LayerTree: ProtocolProxyApi.LayerTreeApi;
        /**
         * This domain allows detailed inspection of media elements
         */
        Media: ProtocolProxyApi.MediaApi;
        Memory: ProtocolProxyApi.MemoryApi;
        /**
         * This domain provides various functionality related to drawing atop the inspected page.
         */
        Overlay: ProtocolProxyApi.OverlayApi;
        /**
         * Reporting of performance timeline events, as specified in
         * https://w3c.github.io/performance-timeline/#dom-performanceobserver.
         */
        PerformanceTimeline: ProtocolProxyApi.PerformanceTimelineApi;
        Preload: ProtocolProxyApi.PreloadApi;
        ServiceWorker: ProtocolProxyApi.ServiceWorkerApi;
        Storage: ProtocolProxyApi.StorageApi;
        /**
         * The SystemInfo domain defines methods and events for querying low-level system information.
         */
        SystemInfo: ProtocolProxyApi.SystemInfoApi;
        /**
         * The Tethering domain defines methods and events for browser port binding.
         */
        Tethering: ProtocolProxyApi.TetheringApi;
        Tracing: ProtocolProxyApi.TracingApi;
        /**
         * This domain allows inspection of Web Audio API.
         * https://webaudio.github.io/web-audio-api/
         */
        WebAudio: ProtocolProxyApi.WebAudioApi;
        /**
         * This domain allows configuring virtual authenticators to test the WebAuthn API.
         */
        WebAuthn: ProtocolProxyApi.WebAuthnApi;
    }
    type AllDomains = StableDomains & DeprecatedDomains & ExperimentalDomains;
    type Client =
        & {
            close: () => Promise<void>;
            on(event: "event", callback: (message: EventMessage) => void): void;
            on(event: "ready" | "disconnect", callback: () => void): void;
            // '<domain>.<method>' i.e. Network.requestWillBeSent
            on<T extends keyof ProtocolMappingApi.Events>(
                event: T,
                callback: (params: ProtocolMappingApi.Events[T][0], sessionId?: string) => void,
            ): void;
            // '<domain>.<method>.<sessionId>' i.e. Network.requestWillBeSent.abc123
            on(event: string, callback: (params: object, sessionId?: string) => void): void;
            // client.send(method, [params], [sessionId], [callback])
            send<T extends keyof ProtocolMappingApi.Commands>(event: T, callback: SendCallback<T>): void;
            send<T extends keyof ProtocolMappingApi.Commands>(
                event: T,
                params: ProtocolMappingApi.Commands[T]["paramsType"][0],
                callback: SendCallback<T>,
            ): void;
            send<T extends keyof ProtocolMappingApi.Commands>(
                event: T,
                params: ProtocolMappingApi.Commands[T]["paramsType"][0],
                sessionId: string,
                callback: SendCallback<T>,
            ): void;
            send<T extends keyof ProtocolMappingApi.Commands>(
                event: T,
                params?: ProtocolMappingApi.Commands[T]["paramsType"][0],
                sessionId?: string,
            ): Promise<ProtocolMappingApi.Commands[T]["returnType"]>;
        }
        & EventPromises<ProtocolMappingApi.Events>
        & EventCallbacks<ProtocolMappingApi.Events>
        & ImproveAPI<AllDomains>;

    // '<domain>.<event>' i.e. Page.loadEventFired
    type EventPromises<T extends ProtocolMappingApi.Events> = {
        [Property in keyof T]: () => T[Property] extends [any] ? Promise<T[Property][0]> : Promise<void>;
    };

    type EventCallbacks<T extends ProtocolMappingApi.Events> = {
        [Property in keyof T]: (
            callback: (params: T[Property] extends [any] ? T[Property][0] : undefined, sessionId?: string) => void,
        ) => () => Client;
    };
}

declare const CDP: {
    (options: CDP.Options, callback: (client: CDP.Client) => void): void;
    (callback: (client: CDP.Client) => void): void;
    (options?: CDP.Options): Promise<CDP.Client>;

    Activate(options: CDP.ActivateOptions, callback: (err: Error | null) => void): void;
    Activate(options: CDP.ActivateOptions): Promise<void>;

    Close(options: CDP.CloseOptions, callback: (err: Error | null) => void): void;
    Close(options: CDP.CloseOptions): Promise<void>;

    List(options: CDP.BaseOptions, callback: (err: Error | null, targets: CDP.Target[]) => void): void;
    List(callback: (err: Error | null, targets: CDP.Target[]) => void): void;
    List(options?: CDP.BaseOptions): Promise<CDP.Target[]>;

    New(options: CDP.NewOptions, callback: (err: Error | null, target: CDP.Target) => void): void;
    New(callback: (err: Error | null, target: CDP.Target) => void): void;
    New(options?: CDP.NewOptions): Promise<CDP.Target>;

    Protocol(options: CDP.ProtocolOptions, callback: (err: Error | null, protocol: CDP.Protocol) => void): void;
    Protocol(callback: (err: Error | null, protocol: CDP.Protocol) => void): void;
    Protocol(options?: CDP.ProtocolOptions): Promise<CDP.Protocol>;

    Version(options: CDP.BaseOptions, callback: (err: Error | null, info: CDP.VersionResult) => void): void;
    Version(callback: (err: Error | null, info: CDP.VersionResult) => void): void;
    Version(options?: CDP.BaseOptions): Promise<CDP.VersionResult>;
};

export = CDP;
