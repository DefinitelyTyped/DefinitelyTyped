// Type definitions for non-npm package magicmirror-module 2.16
// Project: https://magicmirror.builders/
// Definitions by: Jalibu <https://github.com/jalibu>
//                 MichMich <https://github.com/MichMich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Module {
    /* tslint:disable:no-unnecessary-generics */
    function register<T>(moduleName: string, moduleProperties: ModuleProperties<T>): void;

    class CoreModule<T> {
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
        readonly updateDom: (speed: number) => void;
        readonly sendNotification: (notification: string, payload: any) => void;
        readonly sendSocketNotification: (notification: string, payload: any) => void;
        readonly hide: NonNullable<(speed?: number, callback?: () => void, options?: { lockString: string }) => void>;
        readonly show: (
            speed?: number,
            callback?: () => void,
            options?: { lockString?: string; force?: boolean; onError?: () => void },
        ) => void;
        readonly translate: (identifier: string, variables?: any) => string;
    }

    type ModuleProperties<T> = {
        [key: string]: any;
    } & ThisType<NonNullable<CoreModule<T>>> & Partial<CoreModule<T>>;
}

declare namespace node_helper {
    function create(object: NodeHelperModule): void;

    type NodeHelperModule = {
        init?: () => void;
        start?: () => void;
        stop?: () => void;
        socketNotificationReceived?: (notification: string, payload: any) => void;
        sendSocketNotification?: (notification: string, payload: any) => void;
        [key: string]: any;
    } & ThisType<NodeHelperModule>;
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
    units: 'metric' | 'imperial';
    zoom: number;
};
