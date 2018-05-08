declare module Meteor {
    /** Global props **/
    var isClient: boolean;
    var isCordova: boolean;
    var isServer: boolean;
    var isProduction: boolean;
    var release: string;
    /** Global props **/

    /** Settings **/
    interface Settings {
        public: {
            [id: string]: any
        }, [id: string]: any
    }
    var settings: Settings;
    /** Settings **/

    /** User **/
    interface UserEmail {
        address: string;
        verified: boolean;
    }
    interface User {
        _id?: string;
        username?: string;
        emails?: UserEmail[];
        createdAt?: number;
        profile?: any;
        services?: any;
    }

    function user(): User;

    function userId(): string;
    var users: Mongo.Collection<User>;
    /** User **/

    /** Error **/
    var Error: ErrorStatic;
    interface ErrorStatic {
        new (error: string | number, reason?: string, details?: string): Error;
    }
    interface Error {
        error: string | number;
        reason?: string;
        details?: string;
    }
    /** Error **/

    /** Method **/
    function methods(methods: Object): void;

    function call(name: string, ...args: any[]): any;

    function apply(name: string, args: EJSONable[], options?: {
        wait?: boolean;
        onResultReceived?: Function;
        returnStubValue?: boolean;
        throwStubExceptions?: boolean;
    }, asyncCallback?: Function): any;
    /** Method **/

    /** Url **/
    function absoluteUrl(path?: string, options?: {
        secure?: boolean;
        replaceLocalhost?: boolean;
        rootUrl?: string;
    }): string;
    /** Url **/

    /** Timeout **/
    function setInterval(func: Function, delay: number): number;

    function setTimeout(func: Function, delay: number): number;

    function clearInterval(id: number): void;

    function clearTimeout(id: number): void;

    function defer(func: Function): void;
    /** Timeout **/

    /** utils **/
    function startup(func: Function): void;

    function wrapAsync(func: Function, context?: Object): any;

    function bindEnvironment(func: Function): any;
    /** utils **/

    /** Pub/Sub **/
    interface SubscriptionHandle {
        stop(): void;
        ready(): boolean;
    }
    interface LiveQueryHandle {
        stop(): void;
    }
    /** Pub/Sub **/
}

declare module "meteor/meteor" {
    module Meteor {
        /** Global props **/
        var isClient: boolean;
        var isCordova: boolean;
        var isServer: boolean;
        var isProduction: boolean;
        var release: string;
        /** Global props **/

        /** Settings **/
        interface Settings {
            public: {
                [id: string]: any
            }, [id: string]: any
        }
        var settings: Settings;
        /** Settings **/

        /** User **/
        interface UserEmail {
            address: string;
            verified: boolean;
        }
        interface User {
            _id?: string;
            username?: string;
            emails?: UserEmail[];
            createdAt?: number;
            profile?: any;
            services?: any;
        }

        function user(): User;

        function userId(): string;
        var users: Mongo.Collection<User>;
        /** User **/

        /** Error **/
        var Error: ErrorStatic;
        interface ErrorStatic {
            new (error: string | number, reason?: string, details?: string): Error;
        }
        interface Error {
            error: string | number;
            reason?: string;
            details?: string;
        }
        /** Error **/

        /** Method **/
        function methods(methods: Object): void;

        function call(name: string, ...args: any[]): any;

        function apply(name: string, args: EJSONable[], options?: {
            wait?: boolean;
            onResultReceived?: Function;
            returnStubValue?: boolean;
            throwStubExceptions?: boolean;
        }, asyncCallback?: Function): any;
        /** Method **/

        /** Url **/
        function absoluteUrl(path?: string, options?: {
            secure?: boolean;
            replaceLocalhost?: boolean;
            rootUrl?: string;
        }): string;
        /** Url **/

        /** Timeout **/
        function setInterval(func: Function, delay: number): number;

        function setTimeout(func: Function, delay: number): number;

        function clearInterval(id: number): void;

        function clearTimeout(id: number): void;

        function defer(func: Function): void;
        /** Timeout **/

        /** utils **/
        function startup(func: Function): void;

        function wrapAsync(func: Function, context?: Object): any;

        function bindEnvironment(func: Function): any;
        /** utils **/

        /** Pub/Sub **/
        interface SubscriptionHandle {
            stop(): void;
            ready(): boolean;
        }
        interface LiveQueryHandle {
            stop(): void;
        }
        /** Pub/Sub **/
    }
}

declare module Meteor {
    /** Login **/
    interface LoginWithExternalServiceOptions {
        requestPermissions?: string[];
        requestOfflineToken?: Boolean;
        forceApprovalPrompt?: Boolean;
        loginUrlParameters?: Object;
        redirectUrl?: string;
        loginHint?: string;
        loginStyle?: string;
    }

    function loginWithMeteorDeveloperAccount(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

    function loginWithFacebook(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

    function loginWithGithub(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

    function loginWithGoogle(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

    function loginWithMeetup(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

    function loginWithTwitter(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

    function loginWithWeibo(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

    function loggingIn(): boolean;

    function loginWith<ExternalService>(options?: {
        requestPermissions?: string[];
        requestOfflineToken?: boolean;
        loginUrlParameters?: Object;
        userEmail?: string;
        loginStyle?: string;
        redirectUrl?: string;
    }, callback?: Function): void;

    function loginWithPassword(user: Object | string, password: string, callback?: Function): void;

    function loginWithToken(token: string, callback?: Function): void;

    function logout(callback?: Function): void;

    function logoutOtherClients(callback?: Function): void;
    /** Login **/

    /** Event **/
    interface Event {
        type: string;
        target: HTMLElement;
        currentTarget: HTMLElement;
        which: number;
        stopPropagation(): void;
        stopImmediatePropagation(): void;
        preventDefault(): void;
        isPropagationStopped(): boolean;
        isImmediatePropagationStopped(): boolean;
        isDefaultPrevented(): boolean;
    }
    interface EventHandlerFunction extends Function {
        (event?: Meteor.Event, templateInstance?: Blaze.TemplateInstance): void;
    }
    interface EventMap {
        [id: string]: Meteor.EventHandlerFunction;
    }
    /** Event **/

    /** Connection **/
    function reconnect(): void;

    function disconnect(): void;
    /** Connection **/

    /** Status **/
    function status(): DDP.DDPStatus;
    /** Status **/

    /** Pub/Sub **/
    function subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
    /** Pub/Sub **/
}

declare module "meteor/meteor" {
    module Meteor {
        /** Login **/
        interface LoginWithExternalServiceOptions {
            requestPermissions?: string[];
            requestOfflineToken?: Boolean;
            forceApprovalPrompt?: Boolean;
            loginUrlParameters?: Object;
            redirectUrl?: string;
            loginHint?: string;
            loginStyle?: string;
        }

        function loginWithMeteorDeveloperAccount(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

        function loginWithFacebook(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

        function loginWithGithub(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

        function loginWithGoogle(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

        function loginWithMeetup(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

        function loginWithTwitter(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

        function loginWithWeibo(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

        function loggingIn(): boolean;

        function loginWith<ExternalService>(options?: {
            requestPermissions?: string[];
            requestOfflineToken?: boolean;
            loginUrlParameters?: Object;
            userEmail?: string;
            loginStyle?: string;
            redirectUrl?: string;
        }, callback?: Function): void;

        function loginWithPassword(user: Object | string, password: string, callback?: Function): void;

        function loginWithToken(token: string, callback?: Function): void;

        function logout(callback?: Function): void;

        function logoutOtherClients(callback?: Function): void;
        /** Login **/

        /** Event **/
        interface Event {
            type: string;
            target: HTMLElement;
            currentTarget: HTMLElement;
            which: number;
            stopPropagation(): void;
            stopImmediatePropagation(): void;
            preventDefault(): void;
            isPropagationStopped(): boolean;
            isImmediatePropagationStopped(): boolean;
            isDefaultPrevented(): boolean;
        }
        interface EventHandlerFunction extends Function {
            (event?: Meteor.Event, templateInstance?: Blaze.TemplateInstance): void;
        }
        interface EventMap {
            [id: string]: Meteor.EventHandlerFunction;
        }
        /** Event **/

        /** Connection **/
        function reconnect(): void;

        function disconnect(): void;
        /** Connection **/

        /** Status **/
        function status(): DDP.DDPStatus;
        /** Status **/

        /** Pub/Sub **/
        function subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
        /** Pub/Sub **/
    }
}

declare module Meteor {
    /** Connection **/
    interface Connection {
        id: string;
        close: Function;
        onClose: Function;
        clientAddress: string;
        httpHeaders: Object;
    }

    function onConnection(callback: Function): void;
    /** Connection **/

    function publish(name: string, func: Function): void;

    function _debug(...args: any[]): void;
}

interface Subscription {
    added(collection: string, id: string, fields: Object): void;
    changed(collection: string, id: string, fields: Object): void;
    connection: Meteor.Connection;
    error(error: Error): void;
    onStop(func: Function): void;
    ready(): void;
    removed(collection: string, id: string): void;
    stop(): void;
    userId: string;
}

declare module "meteor/meteor" {
    module Meteor {
        /** Connection **/
        interface Connection {
            id: string;
            close: Function;
            onClose: Function;
            clientAddress: string;
            httpHeaders: Object;
        }

        function onConnection(callback: Function): void;
        /** Connection **/

        function publish(name: string, func: Function): void;

        function _debug(...args: any[]): void;
    }

    interface Subscription {
        added(collection: string, id: string, fields: Object): void;
        changed(collection: string, id: string, fields: Object): void;
        connection: Meteor.Connection;
        error(error: Error): void;
        onStop(func: Function): void;
        ready(): void;
        removed(collection: string, id: string): void;
        stop(): void;
        userId: string;
    }
}

declare module Meteor {
    /** Global props **/
    var isDevelopment: boolean;
    var isTest: boolean;
    /** Global props **/
}

declare module "meteor/meteor" {
    module Meteor {
        /** Global props **/
        var isDevelopment: boolean;
        var isTest: boolean;
        /** Global props **/
    }
}
