import { EventEmitter } from "events";
import type { LocateStrategy, NightwatchAPI, NightwatchClientObject, NightwatchOptions } from "../../index";

declare class NightwatchClient extends EventEmitter {
    static create(settings: NightwatchOptions, argv: { [key: string]: any }): NightwatchClient;
    constructor(userSettings?: any, argv?: { [key: string]: any });

    get overridableCommands(): any;
    get api(): NightwatchAPI;
    get argv(): { [key: string]: any };
    get queue(): any;
    get locateStrategy(): LocateStrategy;
    get configLocateStrategy(): "css selector" | "xpath";
    get sessionId(): string | null;
    set sessionId(value: string | null);
    get usingCucumber(): boolean;
    getSessionId(): string | null;
    get transport(): any;
    get transportActions(): any;
    get elementLocator(): any;
    get httpOpts(): any;
    get startSessionEnabled(): boolean;
    get unitTestingMode(): boolean;
    screenshotsEnabled(): boolean;
    get reporter(): any;
    get client(): NightwatchClientObject;
    setApiProperty(key: string, value: any): this;
    setApiOption(key: string, value: any): this;
    setApiMethod(key: string, ...args: any[]): this;
    isApiMethodDefined(key: string, namespace: any): boolean;
    setReporter(reporter: any): this;
    setLaunchUrl(): this;
    setScreenshotOptions(): this;
    setConfigLocateStrategy(): this;
    setLocateStrategy(strategy?: LocateStrategy): this;
    get initialCapabilities(): any;
    setInitialCapabilities(value: any): this;
    setSessionOptions(): this;
    mergeCapabilities(props: any): void;
    setHttpOptions(): this;
    initialize(): void;
    setCurrentTest(): this;
    loadKeyCodes(): this;
    loadNightwatchApis(): this;
    createTransport(): this;
    createCommandQueue(): void;
    createSession(): Promise<void>;
}

export = NightwatchClient;
