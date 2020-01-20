import { Mongo } from 'meteor/mongo';
import { EJSONable, EJSONableProperty } from 'meteor/ejson';
import { Blaze } from 'meteor/blaze';
import { DDP } from 'meteor/ddp';
declare module "meteor/meteor" {
    type global_Error = Error;
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
            _id: string;
            username?: string;
            emails?: UserEmail[];
            createdAt?: Date;
            profile?: any;
            services?: any;
        }

        function user(): User | null;

        function userId(): string | null;
        var users: Mongo.Collection<User>;
        /** User **/

        /** Error **/
        var Error: ErrorStatic;
        interface ErrorStatic {
            new (error: string | number, reason?: string, details?: string): Error;
        }
        interface Error extends global_Error {
            error: string | number;
            reason?: string;
            details?: string;
        }
        var TypedError: TypedErrorStatic;
        interface TypedErrorStatic {
            new (message: string, errorType: string): TypedError;
        }
        interface TypedError extends global_Error {
            message: string;
            errorType: string;          
        }
        /** Error **/

        /** Method **/
        interface MethodThisType {
            isSimulation: boolean;
            userId: string | null;
            connection: Connection | null;
            setUserId(userId: string): void;
            unblock(): void;
        }

        function methods(methods: {[key: string]: (this: MethodThisType, ...args: any[]) => any}): void;

        function call(name: string, ...args: any[]): any;

        function apply<Result extends EJSONable | EJSONable[] | EJSONableProperty | EJSONableProperty[]>(
            name: string, 
            args: ReadonlyArray<EJSONable | EJSONableProperty>, 
            options?: {
                wait?: boolean;
                onResultReceived?: (error: global_Error | Meteor.Error | undefined, result?: Result) => void;
                returnStubValue?: boolean;
                throwStubExceptions?: boolean;
            }, 
            asyncCallback?: (error: global_Error | Meteor.Error | undefined, result?: Result) => void): any;
        /** Method **/

        /** Url **/
        var absoluteUrl: {
          (path?: string, options?: absoluteUrlOptions): string;
          defaultOptions: absoluteUrlOptions;
        }

        interface absoluteUrlOptions {
          secure?: boolean;
          replaceLocalhost?: boolean;
          rootUrl?: string;
        }
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

        function bindEnvironment<TFunc extends Function>(func: TFunc): TFunc;
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

    module Meteor {
        /** Login **/
        interface LoginWithExternalServiceOptions {
            requestPermissions?: ReadonlyArray<string>;
            requestOfflineToken?: Boolean;
            forceApprovalPrompt?: Boolean;
            loginUrlParameters?: Object;
            redirectUrl?: string;
            loginHint?: string;
            loginStyle?: string;
        }

        function loginWithMeteorDeveloperAccount(options?: Meteor.LoginWithExternalServiceOptions, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loginWithFacebook(options?: Meteor.LoginWithExternalServiceOptions, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loginWithGithub(options?: Meteor.LoginWithExternalServiceOptions, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loginWithGoogle(options?: Meteor.LoginWithExternalServiceOptions, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loginWithMeetup(options?: Meteor.LoginWithExternalServiceOptions, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loginWithTwitter(options?: Meteor.LoginWithExternalServiceOptions, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loginWithWeibo(options?: Meteor.LoginWithExternalServiceOptions, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loggingIn(): boolean;

        function loginWith<ExternalService>(options?: {
            requestPermissions?: ReadonlyArray<string>;
            requestOfflineToken?: boolean;
            loginUrlParameters?: Object;
            userEmail?: string;
            loginStyle?: string;
            redirectUrl?: string;
        }, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loginWithPassword(user: Object | string, password: string, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function loginWithToken(token: string, callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function logout(callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;

        function logoutOtherClients(callback?: (error?: global_Error | Meteor.Error | Meteor.TypedError) => void): void;
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

        function publish(name: string, func: (this: Subscription, ...args: any[]) => void): void;

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

    module Meteor {
        /** Global props **/
        var isDevelopment: boolean;
        var isTest: boolean;
        /** Global props **/
    }
}
