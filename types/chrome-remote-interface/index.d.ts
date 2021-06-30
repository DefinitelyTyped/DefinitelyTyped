// Type definitions for chrome-remote-interface 0.30
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
        protocol?: object;
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

    interface Client {
        close: () => Promise<void>;
        on(event: 'event', callback: (message: EventMessage) => void): void;
        on(event: 'ready' | 'disconnect', callback: () => void): void;
        // '<domain>.<method>'
        on<T extends keyof ProtocolMappingApi.Events>(event: T, callback: (params: ProtocolMappingApi.Events[T][0], sessionId?: string) => void): void;
        // '<domain>.<method>.<sessionId>'
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
    }
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

    Protocol(options: CDP.ProtocolOptions, callback: (err: Error | null, protocol: object) => void): void;
    Protocol(callback: (err: Error | null, protocol: object) => void): void;
    Protocol(options?: CDP.ProtocolOptions): Promise<object>;

    Version(options: CDP.BaseOptions, callback: (err: Error | null, info: object) => void): void;
    Version(callback: (err: Error | null, info: object) => void): void;
    Version(options?: CDP.BaseOptions): Promise<object>;
};

export = CDP;
