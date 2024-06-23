/**
 * For launching local browsers. The callback will be given a Launcher to
 * perform the actual launching.
 */
export function local(cb: (err: any, localBrowsers: Launcher) => void): void;

export namespace local {
    export const platform: {
        chrome?: BrowserPlatformDetails | undefined;
        chromium?: BrowserPlatformDetails | undefined;
        canary?: BrowserPlatformDetails | undefined;
        firefox?: BrowserPlatformDetails | undefined;
        aurora?: BrowserPlatformDetails | undefined;
        opera?: BrowserPlatformDetails | undefined;
        ie?: BrowserPlatformDetails | undefined;
        edge?: BrowserPlatformDetails | undefined;
        safari?: BrowserPlatformDetails | undefined;
        phantom?: BrowserPlatformDetails | undefined;
        nodeWebkit?: BrowserPlatformDetails | undefined;
    };
}

interface BrowserstackAuth {
    username: string;
    password: string;
}

export function browserstack(
    authCreds: BrowserstackAuth,
    cb: (err: any, browserstack: Launcher) => void,
): void;

interface BrowserPlatformDetails {
    pathQuery?: string | undefined;
    plistPath?: string | undefined;
    command?: string | undefined;
    process?: string | undefined;
    versionKey?: string | undefined;
    defaultLocation?: string | undefined;
    args?: string[] | undefined;
    opensTab?: boolean | undefined;
    multi?: boolean | undefined;
    getCommand?: ((browser: BrowserPlatformDetails, url: string, args: string[]) => string) | undefined;
    cwd?: string | undefined;
    imageName?: string | undefined;
}

interface LaunchOptions {
    browser: string;
    version?: string | undefined;
}

interface Launcher {
    (url: string, options: LaunchOptions, callback: (err: any, instance: Instance) => void): void;
    browsers(cb: (error: any, browsers?: Browser[]) => void): void;

    chrome: BrowserFunction;
    chromium: BrowserFunction;
    canary: BrowserFunction;
    firefox: BrowserFunction;
    aurora: BrowserFunction;
    opera: BrowserFunction;
    ie: BrowserFunction;
    edge: BrowserFunction;
    safari: BrowserFunction;
    phantom: BrowserFunction;
    nodeWebkit: BrowserFunction;
}

interface Browser {
    name: string;
    version: string;
    binPath: string;
}

interface BrowserFunction {
    (url: string, callback: (err: any, instance: Instance) => void): void;
}
export interface Instance {
    id: string;
    stop(cb: (err: any) => void): void;
    status(cb: (err: any, status: any) => void): void;

    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): void;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
}
