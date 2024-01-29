declare namespace Module {
    /* tslint:disable:no-unnecessary-generics */
    function register<T>(
        moduleName: string,
        moduleProperties: ThisType<NonNullable<ModuleProperties<T>>> & Partial<ModuleProperties<T>>,
    ): void;

    interface ModuleProperties<T> {
        readonly name: string;
        readonly identifier: string;
        readonly hidden: boolean;
        readonly data: { classes: string; file: string; path: string; header: string; position: string };
        readonly lockStrings: string[];
        config: T;
        defaults: T;
        requiresVersion: string;

        // Subclassable methods
        init: () => void;
        loaded: (callback?: () => void) => void;
        start: () => void;
        getScripts: () => string[];
        getStyles: () => string[];
        getTranslations: () => { [key: string]: string };
        getTemplate: () => string;
        getTemplateData: () => any;
        getDom: () => HTMLElement;
        getHeader: () => string;
        notificationReceived: (notification: string, payload: any, sender: ModuleProperties<any>) => void;
        socketNotificationReceived: (notification: string, payload: any) => void;
        suspend: () => void;
        resume: () => void;

        // Instance methods
        readonly file: (filename: string) => string;
        readonly updateDom: (speed?: number) => void;
        readonly sendNotification: (notification: string, payload: any) => void;
        readonly sendSocketNotification: (notification: string, payload: any) => void;
        readonly hide: NonNullable<(speed?: number, callback?: () => void, options?: { lockString: string }) => void>;
        readonly show: (
            speed?: number,
            callback?: () => void,
            options?: { lockString?: string; force?: boolean; onError?: () => void },
        ) => void;
        readonly translate: (identifier: string, variables?: any) => string;

        [key: string]: any;
    }
}

/* tslint:disable:no-single-declare-module */
declare module "node_helper" {
    function create(object: ThisType<NonNullable<NodeHelperModule>> & Partial<NodeHelperModule>): void;

    interface NodeHelperModule {
        readonly name: string;
        readonly path: string;
        readonly expressApp: any;
        readonly io: any;
        readonly requiresVersion: string;

        // Subclassable methods
        init: () => void;
        start: () => void;
        stop: () => void;
        socketNotificationReceived: (notification: string, payload: any) => void;

        sendSocketNotification: (notification: string, payload: any) => void;
        [key: string]: any;
    }
}

declare module "logger" {
    function debug(message?: any, ...optionalParams: any[]): void;
    function info(message?: any, ...optionalParams: any[]): void;
    function log(message?: any, ...optionalParams: any[]): void;
    function error(message?: any, ...optionalParams: any[]): void;
    function warn(message?: any, ...optionalParams: any[]): void;
    function group(groupTitle?: string, ...optionalParams: any[]): void;
    function groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void;
    function groupEnd(): void;
    function time(timerName?: string): void;
    function timeEnd(timerName?: string): void;
    function timeStamp(timerName?: string): void;
}

declare const config: {
    address: string;
    customCss: string;
    electronOptions: any;
    ipWhitelist: string[];
    language: string;
    locale: string;
    modules: any[];
    port: number;
    timeFormat: 12 | 24;
    units: "metric" | "imperial";
    zoom: number;
};
