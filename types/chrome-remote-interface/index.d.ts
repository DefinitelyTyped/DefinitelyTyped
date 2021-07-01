// Type definitions for chrome-remote-interface 0.31
// Project: https://github.com/cyrus-and/chrome-remote-interface
// Definitions by: Khairul Azhar Kasmiran <https://github.com/kazarmy>
//                 Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import type ProtocolProxyApi from 'devtools-protocol/types/protocol-proxy-api';
import type ProtocolMappingApi from 'devtools-protocol/types/protocol-mapping';

declare namespace CDP {
    interface BaseOptions {
        host?: string;
        port?: number;
        secure?: boolean;
        useHostName?: boolean;
        alterPath?: (path: string) => string;
    }

    interface Options extends BaseOptions {
        target?: ((targets: Target[]) => Target | number) | Target | string;
        protocol?: Protocol;
        local?: boolean;
    }

    interface ActivateOptions extends BaseOptions {
        id: string;
    }

    interface CloseOptions extends BaseOptions {
        id: string;
    }

    interface NewOptions extends BaseOptions {
        url?: string;
    }

    interface ProtocolOptions extends BaseOptions {
        local?: boolean;
    }

    interface EventMessage {
        method: string;
        params: object;
        sessionId?: string;
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
        'Protocol-Version': string;
        'User-Agent': string;
        'V8-Version': string;
        'Webkit-Version': string;
        webSocketDebuggerUrl: string;
    }

    /////////////////////////////////////////////////
    // Generated from https://app.quicktype.io/,
    // TypeEnum simplified.
    // Source: https://github.com/cyrus-and/chrome-remote-interface/blob/v0.30.1/lib/protocol.json
    /////////////////////////////////////////////////
    interface Protocol {
        version: Version;
        domains: Domain[];
    }

    interface Domain {
        domain: string;
        experimental?: boolean;
        dependencies?: string[];
        types?: TypeElement[];
        commands: Command[];
        events?: Event[];
        description?: string;
        deprecated?: boolean;
    }

    interface Command {
        name: string;
        description?: string;
        experimental?: boolean;
        parameters?: Parameter[];
        returns?: Parameter[];
        redirect?: string;
        deprecated?: boolean;
    }

    interface Parameter {
        name: string;
        description?: string;
        optional?: boolean;
        $ref?: string;
        type?: TypeEnum;
        items?: Items;
        enum?: string[];
        experimental?: boolean;
        deprecated?: boolean;
    }

    interface Items {
        type?: TypeEnum;
        $ref?: string;
    }

    type TypeEnum = "any" | "array" | "boolean" | "integer" | "number" | "object" | "string";

    interface Event {
        name: string;
        description?: string;
        parameters?: Parameter[];
        experimental?: boolean;
        deprecated?: boolean;
    }

    interface TypeElement {
        id: string;
        description?: string;
        type: TypeEnum;
        enum?: string[];
        properties?: Parameter[];
        experimental?: boolean;
        items?: Items;
        deprecated?: boolean;
    }

    interface Version {
        major: string;
        minor: string;
    }
    /////////////////////////////////////////////////
    // Generated content end.
    /////////////////////////////////////////////////

    type Client = {
        close: () => Promise<void>;
        on(event: 'event', callback: (message: EventMessage) => void): void;
        on(event: 'ready' | 'disconnect', callback: () => void): void;
        // '<domain>.<method>' i.e. Network.requestWillBeSent
        on<T extends keyof ProtocolMappingApi.Events>(event: T, callback: (params: ProtocolMappingApi.Events[T][0], sessionId?: string) => void): void;
        // '<domain>.<method>.<sessionId>' i.e. Network.requestWillBeSent.abc123
        on(event: string, callback: (params: object, sessionId?: string) => void): void;

        // stable domains
        Browser: ProtocolProxyApi.BrowserApi;
        Debugger: ProtocolProxyApi.DebuggerApi;
        DOM: ProtocolProxyApi.DOMApi;
        DOMDebugger: ProtocolProxyApi.DOMDebuggerApi;
        Emulation: ProtocolProxyApi.EmulationApi;
        Input: ProtocolProxyApi.InputApi;
        IO: ProtocolProxyApi.IOApi;
        Log: ProtocolProxyApi.LogApi;
        Network: ProtocolProxyApi.NetworkApi;
        Page: ProtocolProxyApi.PageApi;
        Performance: ProtocolProxyApi.PerformanceApi;
        Profiler: ProtocolProxyApi.ProfilerApi;
        Runtime: ProtocolProxyApi.RuntimeApi;
        Security: ProtocolProxyApi.SecurityApi;
        Target: ProtocolProxyApi.TargetApi;
        // unstable domains
        Console: ProtocolProxyApi.ConsoleApi;
        Schema: ProtocolProxyApi.SchemaApi;
        Accessibility: ProtocolProxyApi.AccessibilityApi;
        Animation: ProtocolProxyApi.AnimationApi;
        ApplicationCache: ProtocolProxyApi.ApplicationCacheApi;
        Audits: ProtocolProxyApi.AuditsApi;
        BackgroundService: ProtocolProxyApi.BackgroundServiceApi;
        CacheStorage: ProtocolProxyApi.CacheStorageApi;
        Cast: ProtocolProxyApi.CastApi;
        CSS: ProtocolProxyApi.CSSApi;
        Database: ProtocolProxyApi.DatabaseApi;
        DeviceOrientation: ProtocolProxyApi.DeviceOrientationApi;
        DOMSnapshot: ProtocolProxyApi.DOMSnapshotApi;
        DOMStorage: ProtocolProxyApi.DOMStorageApi;
        Fetch: ProtocolProxyApi.FetchApi;
        HeadlessExperimental: ProtocolProxyApi.HeadlessExperimentalApi;
        HeapProfiler: ProtocolProxyApi.HeapProfilerApi;
        IndexedDB: ProtocolProxyApi.IndexedDBApi;
        Inspector: ProtocolProxyApi.InspectorApi;
        LayerTree: ProtocolProxyApi.LayerTreeApi;
        Media: ProtocolProxyApi.MediaApi;
        Memory: ProtocolProxyApi.MemoryApi;
        Overlay: ProtocolProxyApi.OverlayApi;
        ServiceWorker: ProtocolProxyApi.ServiceWorkerApi;
        Storage: ProtocolProxyApi.StorageApi;
        SystemInfo: ProtocolProxyApi.SystemInfoApi;
        Tethering: ProtocolProxyApi.TetheringApi;
        Tracing: ProtocolProxyApi.TracingApi;
        WebAudio: ProtocolProxyApi.WebAudioApi;
        WebAuthn: ProtocolProxyApi.WebAuthnApi;
    } & EventPromises<ProtocolMappingApi.Events> & EventCallbacks<ProtocolMappingApi.Events>;

    // '<domain>.<event>' i.e. Page.loadEventFired
    type EventPromises<T extends ProtocolMappingApi.Events> = {
        [Property in keyof T]: () => T[Property] extends [any] ? Promise<T[Property][0]> : Promise<void>;
    };

    type EventCallbacks<T extends ProtocolMappingApi.Events> = {
        [Property in keyof T]: (callback: (params: T[Property] extends [any] ? T[Property][0] : undefined, sessionId?: string) => void) => () => Client;
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
