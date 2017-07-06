// Type definitions for Meteor 1.4
// Project: http://www.meteor.com/
// Definitions by: Alex Borodach <https://github.com/barbatus>, Dave Allen <https://github.com/fullflavedave>, Olivier Refalo <https://github.com/orefalo>, Daniel Neveux <https://github.com/dagatsoin>, Birk Skyum <https://github.com/birkskyum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface URLS {
    resetPassword: (token: string) => string;
    verifyEmail: (token: string) => string;
    enrollAccount: (token: string) => string;
}

declare module Accounts {
    var urls: URLS;

    function user(): Meteor.User;

    function userId(): string;

    function createUser(options: {
        username?: string;
        email?: string;
        password?: string;
        profile?: Object;
    }, callback?: Function): string;

    function config(options: {
        sendVerificationEmail?: boolean;
        forbidClientAccountCreation?: boolean;
        restrictCreationByEmailDomain?: string | Function;
        loginExpirationInDays?: number;
        oauthSecretKey?: string;
    }): void;

    function onLogin(func: Function): {
        stop: () => void
    };

    function onLoginFailure(func: Function): {
        stop: () => void
    };

    function loginServicesConfigured(): boolean;

    function onPageLoadLogin(func: Function): void;
}

declare module "meteor/accounts-base" {
    interface URLS {
        resetPassword: (token: string) => string;
        verifyEmail: (token: string) => string;
        enrollAccount: (token: string) => string;
    }

    module Accounts {
        var urls: URLS;

        function user(): Meteor.User;

        function userId(): string;

        function createUser(options: {
            username?: string;
            email?: string;
            password?: string;
            profile?: Object;
        }, callback?: Function): string;

        function config(options: {
            sendVerificationEmail?: boolean;
            forbidClientAccountCreation?: boolean;
            restrictCreationByEmailDomain?: string | Function;
            loginExpirationInDays?: number;
            oauthSecretKey?: string;
        }): void;

        function onLogin(func: Function): {
            stop: () => void
        };

        function onLoginFailure(func: Function): {
            stop: () => void
        };

        function loginServicesConfigured(): boolean;

        function onPageLoadLogin(func: Function): void;
    }
}

declare module Accounts {
    function changePassword(oldPassword: string, newPassword: string, callback?: Function): void;

    function forgotPassword(options: {
        email?: string;
    }, callback?: Function): void;

    function resetPassword(token: string, newPassword: string, callback?: Function): void;

    function verifyEmail(token: string, callback?: Function): void;

    function onEmailVerificationLink(callback: Function): void;

    function onEnrollmentLink(callback: Function): void;

    function onResetPasswordLink(callback: Function): void;

    function loggingIn(): boolean;

    function logout(callback?: Function): void;

    function logoutOtherClients(callback?: Function): void;

    var ui: {
        config(options: {
            requestPermissions?: Object;
            requestOfflineToken?: Object;
            forceApprovalPrompt?: Object;
            passwordSignupFields?: string;
        }): void;
    };
}

declare module "meteor/accounts-base" {
    module Accounts {
        function changePassword(oldPassword: string, newPassword: string, callback?: Function): void;

        function forgotPassword(options: {
            email?: string;
        }, callback?: Function): void;

        function resetPassword(token: string, newPassword: string, callback?: Function): void;

        function verifyEmail(token: string, callback?: Function): void;

        function onEmailVerificationLink(callback: Function): void;

        function onEnrollmentLink(callback: Function): void;

        function onResetPasswordLink(callback: Function): void;

        function loggingIn(): boolean;

        function logout(callback?: Function): void;

        function logoutOtherClients(callback?: Function): void;

        var ui: {
            config(options: {
                requestPermissions?: Object;
                requestOfflineToken?: Object;
                forceApprovalPrompt?: Object;
                passwordSignupFields?: string;
            }): void;
        };
    }
}

interface EmailFields {
    from?: () => string;
    subject?: (user: Meteor.User) => string;
    text?: (user: Meteor.User, url: string) => string;
    html?: (user: Meteor.User, url: string) => string;
}

interface Header {
    [id: string]: string;
}

interface EmailTemplates {
    from: string;
    siteName: string;
    headers?: Header;
    resetPassword: EmailFields;
    enrollAccount: EmailFields;
    verifyEmail: EmailFields;
}

declare module Accounts {
    var emailTemplates: EmailTemplates;

    function addEmail(userId: string, newEmail: string, verified?: boolean): void;

    function removeEmail(userId: string, email: string): void;

    function onCreateUser(func: Function): void;

    function findUserByEmail(email: string): Object;

    function findUserByUsername(username: string): Object;

    function sendEnrollmentEmail(userId: string, email?: string): void;

    function sendResetPasswordEmail(userId: string, email?: string): void;

    function sendVerificationEmail(userId: string, email?: string): void;

    function setUsername(userId: string, newUsername: string): void;

    function setPassword(userId: string, newPassword: string, options?: {
        logout?: Object;
    }): void;

    function validateNewUser(func: Function): boolean;

    function validateLoginAttempt(func: Function): {
        stop: () => void
    };

    function _hashPassword(password: string): { digest: string; algorithm: string; };

    interface IValidateLoginAttemptCbOpts {
        type: string;
        allowed: boolean;
        error: Meteor.Error;
        user: Meteor.User;
        connection: Meteor.Connection;
        methodName: string;
        methodArguments: any[];
    }
}

declare module "meteor/accounts-base" {
    interface EmailFields {
        from?: () => string;
        subject?: (user: Meteor.User) => string;
        text?: (user: Meteor.User, url: string) => string;
        html?: (user: Meteor.User, url: string) => string;
    }

    interface Header {
        [id: string]: string;
    }

    interface EmailTemplates {
        from: string;
        siteName: string;
        headers?: Header;
        resetPassword: EmailFields;
        enrollAccount: EmailFields;
        verifyEmail: EmailFields;
    }

    module Accounts {
        var emailTemplates: EmailTemplates;

        function addEmail(userId: string, newEmail: string, verified?: boolean): void;

        function removeEmail(userId: string, email: string): void;

        function onCreateUser(func: Function): void;

        function findUserByEmail(email: string): Object;

        function findUserByUsername(username: string): Object;

        function sendEnrollmentEmail(userId: string, email?: string): void;

        function sendResetPasswordEmail(userId: string, email?: string): void;

        function sendVerificationEmail(userId: string, email?: string): void;

        function setUsername(userId: string, newUsername: string): void;

        function setPassword(userId: string, newPassword: string, options?: {
            logout?: Object;
        }): void;

        function validateNewUser(func: Function): boolean;

        function validateLoginAttempt(func: Function): {
            stop: () => void
        };

        function _hashPassword(password: string): { digest: string; algorithm: string; };

        interface IValidateLoginAttemptCbOpts {
            type: string;
            allowed: boolean;
            error: Meteor.Error;
            user: Meteor.User;
            connection: Meteor.Connection;
            methodName: string;
            methodArguments: any[];
        }
    }
}

declare module Blaze {
    var View: ViewStatic;

    interface ViewStatic {
        new (name?: string, renderFunction?: Function): View;
    }

    interface View {
        name: string;
        parentView: View;
        isCreated: boolean;
        isRendered: boolean;
        isDestroyed: boolean;
        renderCount: number;
        autorun(runFunc: (computation: Tracker.Computation) => void): Tracker.Computation;
        onViewCreated(func: Function): void;
        onViewReady(func: Function): void;
        onViewDestroyed(func: Function): void;
        firstNode(): Node;
        lastNode(): Node;
        template: Template;
        templateInstance(): TemplateInstance;
    }
    var currentView: View;

    function isTemplate(value: any): boolean;

    interface HelpersMap {
        [key: string]: Function;
    }

    interface EventsMap {
        [key: string]: Function;
    }

    var Template: TemplateStatic;

    interface TemplateStatic {
        new (viewName?: string, renderFunction?: Function): Template;

        registerHelper(name: string, func: Function): void;
        instance(): TemplateInstance;
        currentData(): any;
        parentData(numLevels: number): any;
    }

    interface Template {
        viewName: string;
        renderFunction: Function;
        constructView(): View;
        head: Template;
        find(selector: string): HTMLElement;
        findAll(selector: string): HTMLElement[];
        $: any;
        onCreated(cb: Function): void;
        onRendered(cb: Function): void;
        onDestroyed(cb: Function): void;
        created: Function;
        rendered: Function;
        destroyed: Function;
        helpers(helpersMap: HelpersMap): void;
        events(eventsMap: EventsMap): void;
    }

    var TemplateInstance: TemplateInstanceStatic;

    interface TemplateInstanceStatic {
        new (view: View): TemplateInstance;
    }

    interface TemplateInstance {
        $(selector: string): any;
        autorun(runFunc: (computation: Tracker.Computation) => void): Tracker.Computation;
        data: Object;
        find(selector: string): HTMLElement;
        findAll(selector: string): HTMLElement[];
        firstNode: Object;
        lastNode: Object;
        subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
        subscriptionsReady(): boolean;
        view: Object;
    }

    function Each(argFunc: Function, contentFunc: Function, elseFunc?: Function): View;

    function Unless(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): View;

    function If(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): View;

    function Let(bindings: Function, contentFunc: Function): View;

    function With(data: Object | Function, contentFunc: Function): View;

    function getData(elementOrView?: HTMLElement | View): Object;

    function getView(element?: HTMLElement): View;

    function remove(renderedView: View): void;

    function render(templateOrView: Template | View, parentNode: Node, nextNode?: Node, parentView?: View): View;

    function renderWithData(templateOrView: Template | View, data: Object | Function, parentNode: Node, nextNode?: Node, parentView?: View): View;

    function toHTML(templateOrView: Template | View): string;

    function toHTMLWithData(templateOrView: Template | View, data: Object | Function): string;
}

declare module "meteor/blaze" {
    module Blaze {
        var View: ViewStatic;

        interface ViewStatic {
            new (name?: string, renderFunction?: Function): View;
        }

        interface View {
            name: string;
            parentView: View;
            isCreated: boolean;
            isRendered: boolean;
            isDestroyed: boolean;
            renderCount: number;
            autorun(runFunc: (computation: Tracker.Computation) => void): Tracker.Computation;
            onViewCreated(func: Function): void;
            onViewReady(func: Function): void;
            onViewDestroyed(func: Function): void;
            firstNode(): Node;
            lastNode(): Node;
            template: Template;
            templateInstance(): TemplateInstance;
        }
        var currentView: View;

        function isTemplate(value: any): boolean;

        interface HelpersMap {
            [key: string]: Function;
        }

        interface EventsMap {
            [key: string]: Function;
        }

        var Template: TemplateStatic;

        interface TemplateStatic {
            new (viewName?: string, renderFunction?: Function): Template;

            registerHelper(name: string, func: Function): void;
            instance(): TemplateInstance;
            currentData(): any;
            parentData(numLevels: number): any;
        }

        interface Template {
            viewName: string;
            renderFunction: Function;
            constructView(): View;
            head: Template;
            find(selector: string): HTMLElement;
            findAll(selector: string): HTMLElement[];
            $: any;
            onCreated(cb: Function): void;
            onRendered(cb: Function): void;
            onDestroyed(cb: Function): void;
            created: Function;
            rendered: Function;
            destroyed: Function;
            helpers(helpersMap: HelpersMap): void;
            events(eventsMap: EventsMap): void;
        }

        var TemplateInstance: TemplateInstanceStatic;

        interface TemplateInstanceStatic {
            new (view: View): TemplateInstance;
        }

        interface TemplateInstance {
            $(selector: string): any;
            autorun(runFunc: (computation: Tracker.Computation) => void): Tracker.Computation;
            data: Object;
            find(selector: string): HTMLElement;
            findAll(selector: string): HTMLElement[];
            firstNode: Object;
            lastNode: Object;
            subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
            subscriptionsReady(): boolean;
            view: Object;
        }

        function Each(argFunc: Function, contentFunc: Function, elseFunc?: Function): View;

        function Unless(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): View;

        function If(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): View;

        function Let(bindings: Function, contentFunc: Function): View;

        function With(data: Object | Function, contentFunc: Function): View;

        function getData(elementOrView?: HTMLElement | View): Object;

        function getView(element?: HTMLElement): View;

        function remove(renderedView: View): void;

        function render(templateOrView: Template | View, parentNode: Node, nextNode?: Node, parentView?: View): View;

        function renderWithData(templateOrView: Template | View, data: Object | Function, parentNode: Node, nextNode?: Node, parentView?: View): View;

        function toHTML(templateOrView: Template | View): string;

        function toHTMLWithData(templateOrView: Template | View, data: Object | Function): string;
    }
}

declare module BrowserPolicy {
    var framing: {
        disallow(): void;
        restrictToOrigin(origin: string): void;
        allowAll(): void;
    };

    var content: {
        allowEval(): void;
        allowInlineStyles(): void;
        allowInlineScripts(): void;
        allowSameOriginForAll(): void;
        allowDataUrlForAll(): void;
        allowOriginForAll(origin: string): void;
        allowImageOrigin(origin: string): void;
        allowMediaOrigin(origin: string): void;
        allowFontOrigin(origin: string): void;
        allowStyleOrigin(origin: string): void;
        allowScriptOrigin(origin: string): void;
        allowFrameOrigin(origin: string): void;
        allowContentTypeSniffing(): void;
        allowAllContentOrigin(): void;
        allowAllContentDataUrl(): void;
        allowAllContentSameOrigin(): void;

        disallowAll(): void;
        disallowInlineStyles(): void;
        disallowEval(): void;
        disallowInlineScripts(): void;
        disallowFont(): void;
        disallowObject(): void;
        disallowAllContent(): void;
    };
}

declare module "meteor/browser-policy-common" {
    module BrowserPolicy {
        var framing: {
            disallow(): void;
            restrictToOrigin(origin: string): void;
            allowAll(): void;
        };

        var content: {
            allowEval(): void;
            allowInlineStyles(): void;
            allowInlineScripts(): void;
            allowSameOriginForAll(): void;
            allowDataUrlForAll(): void;
            allowOriginForAll(origin: string): void;
            allowImageOrigin(origin: string): void;
            allowMediaOrigin(origin: string): void;
            allowFontOrigin(origin: string): void;
            allowStyleOrigin(origin: string): void;
            allowScriptOrigin(origin: string): void;
            allowFrameOrigin(origin: string): void;
            allowContentTypeSniffing(): void;
            allowAllContentOrigin(): void;
            allowAllContentDataUrl(): void;
            allowAllContentSameOrigin(): void;

            disallowAll(): void;
            disallowInlineStyles(): void;
            disallowEval(): void;
            disallowInlineScripts(): void;
            disallowFont(): void;
            disallowObject(): void;
            disallowAllContent(): void;
        };
    }
}

declare module Match {
    var Any: any;
    var String: any;
    var Integer: any;
    var Boolean: any;
    var undefined: any;
    var Object: any;

    function Optional(pattern: any): boolean;

    function ObjectIncluding(dico: any): boolean;

    function OneOf(...patterns: any[]): any;

    function Where(condition: any): any;

    function test(value: any, pattern: any): boolean;
}

declare function check(value: any, pattern: any): void;

declare module "meteor/check" {
    module Match {
        var Any: any;
        var String: any;
        var Integer: any;
        var Boolean: any;
        var undefined: any;
        var Object: any;

        function Optional(pattern: any): boolean;

        function ObjectIncluding(dico: any): boolean;

        function OneOf(...patterns: any[]): any;

        function Where(condition: any): any;

        function test(value: any, pattern: any): boolean;
    }

    function check(value: any, pattern: any): void;
}

declare module DDPRateLimiter {
    interface Matcher {
        type?: string | ((type: string) => boolean);
        name?: string | ((name: string) => boolean);
        userId?: string | ((userId: string) => boolean);
        connectionId?: string | ((connectionId: string) => boolean);
        clientAddress?: string | ((clientAddress: string) => boolean);
    }

    function addRule(matcher: Matcher, numRequests: number, timeInterval: number): string;

    function removeRule(ruleId: string): boolean;
}

declare module "meteor/ddp-rate-limiter" {
    module DDPRateLimiter {
        interface Matcher {
            type?: string | ((type: string) => boolean);
            name?: string | ((name: string) => boolean);
            userId?: string | ((userId: string) => boolean);
            connectionId?: string | ((connectionId: string) => boolean);
            clientAddress?: string | ((clientAddress: string) => boolean);
        }

        function addRule(matcher: Matcher, numRequests: number, timeInterval: number): string;

        function removeRule(ruleId: string): boolean;
    }
}

declare module DDP {
    interface DDPStatic {
        subscribe(name: string, ...rest: any[]): Meteor.SubscriptionHandle;
        call(method: string, ...parameters: any[]): void;
        apply(method: string, ...parameters: any[]): void;
        methods(IMeteorMethodsDictionary: any): any;
        status(): DDPStatus;
        reconnect(): void;
        disconnect(): void;
        onReconnect(): void;
    }

    function _allSubscriptionsReady(): boolean;

    type Status = 'connected' | 'connecting' | 'failed' | 'waiting' | 'offline';

    interface DDPStatus {
        connected: boolean;
        status: Status;
        retryCount: number;
        retryTime?: number;
        reason?: string;
    }

    function connect(url: string): DDPStatic;
}

declare module DDPCommon {
    interface MethodInvocation {
        new (options: {}): MethodInvocation;

        unblock(): void;

        setUserId(userId: number): void;
    }
}

declare module "meteor/ddp" {
    module DDP {
        interface DDPStatic {
            subscribe(name: string, ...rest: any[]): Meteor.SubscriptionHandle;
            call(method: string, ...parameters: any[]): void;
            apply(method: string, ...parameters: any[]): void;
            methods(IMeteorMethodsDictionary: any): any;
            status(): DDPStatus;
            reconnect(): void;
            disconnect(): void;
            onReconnect(): void;
        }

        function _allSubscriptionsReady(): boolean;

        type Status = 'connected' | 'connecting' | 'failed' | 'waiting' | 'offline';

        interface DDPStatus {
            connected: boolean;
            status: Status;
            retryCount: number;
            retryTime?: number;
            reason?: string;
        }

        function connect(url: string): DDPStatic;
    }

    module DDPCommon {
        interface MethodInvocation {
            new (options: {}): MethodInvocation;

            unblock(): void;

            setUserId(userId: number): void;
        }
    }
}

interface EJSONableCustomType {
    clone(): EJSONableCustomType;
    equals(other: Object): boolean;
    toJSONValue(): JSONable;
    typeName(): string;
}
interface EJSONable {
    [key: string]: number | string | boolean | Object | number[] | string[] | Object[] | Date | Uint8Array | EJSONableCustomType;
}
interface JSONable {
    [key: string]: number | string | boolean | Object | number[] | string[] | Object[];
}
interface EJSON extends EJSONable { }

declare module EJSON {
    function addType(name: string, factory: (val: JSONable) => EJSONableCustomType): void;

    function clone<T>(val: T): T;

    function equals(a: EJSON, b: EJSON, options?: {
        keyOrderSensitive?: boolean;
    }): boolean;

    function fromJSONValue(val: JSONable): any;

    function isBinary(x: Object): boolean;
    var newBinary: any;

    function parse(str: string): EJSON;

    function stringify(val: EJSON, options?: {
        indent?: boolean | number | string;
        canonical?: boolean;
    }): string;

    function toJSONValue(val: EJSON): JSONable;
}

declare module "meteor/ejson" {
    interface EJSONableCustomType {
        clone(): EJSONableCustomType;
        equals(other: Object): boolean;
        toJSONValue(): JSONable;
        typeName(): string;
    }
    interface EJSONable {
        [key: string]: number | string | boolean | Object | number[] | string[] | Object[] | Date | Uint8Array | EJSONableCustomType;
    }
    interface JSONable {
        [key: string]: number | string | boolean | Object | number[] | string[] | Object[];
    }
    interface EJSON extends EJSONable { }

    module EJSON {
        function addType(name: string, factory: (val: JSONable) => EJSONableCustomType): void;

        function clone<T>(val: T): T;

        function equals(a: EJSON, b: EJSON, options?: {
            keyOrderSensitive?: boolean;
        }): boolean;

        function fromJSONValue(val: JSONable): any;

        function isBinary(x: Object): boolean;
        var newBinary: any;

        function parse(str: string): EJSON;

        function stringify(val: EJSON, options?: {
            indent?: boolean | number | string;
            canonical?: boolean;
        }): string;

        function toJSONValue(val: EJSON): JSONable;
    }
}

declare module Email {
    function send(options: {
        from?: string;
        to?: string | string[];
        cc?: string | string[];
        bcc?: string | string[];
        replyTo?: string | string[];
        subject?: string;
        text?: string;
        html?: string;
        headers?: Object;
        attachments?: Object[];
        mailComposer?: MailComposer;
    }): void;
}

interface MailComposerOptions {
    escapeSMTP: boolean;
    encoding: string;
    charset: string;
    keepBcc: boolean;
    forceEmbeddedImages: boolean;
}

declare var MailComposer: MailComposerStatic;
interface MailComposerStatic {
    new (options: MailComposerOptions): MailComposer;
}
interface MailComposer {
    addHeader(name: string, value: string): void;
    setMessageOption(from: string, to: string, body: string, html: string): void;
    streamMessage(): void;
    pipe(stream: any /** fs.WriteStream **/): void;
}

declare module "meteor/email" {
    module Email {
        function send(options: {
            from?: string;
            to?: string | string[];
            cc?: string | string[];
            bcc?: string | string[];
            replyTo?: string | string[];
            subject?: string;
            text?: string;
            html?: string;
            headers?: Object;
            attachments?: Object[];
            mailComposer?: MailComposer;
        }): void;
    }

    interface MailComposerOptions {
        escapeSMTP: boolean;
        encoding: string;
        charset: string;
        keepBcc: boolean;
        forceEmbeddedImages: boolean;
    }

    var MailComposer: MailComposerStatic;
    interface MailComposerStatic {
        new (options: MailComposerOptions): MailComposer;
    }
    interface MailComposer {
        addHeader(name: string, value: string): void;
        setMessageOption(from: string, to: string, body: string, html: string): void;
        streamMessage(): void;
        pipe(stream: any /** fs.WriteStream **/): void;
    }
}

declare module HTTP {
    interface HTTPRequest {
        content?: string;
        data?: any;
        query?: string;
        params?: {
            [id: string]: string
        };
        auth?: string;
        headers?: {
            [id: string]: string
        };
        timeout?: number;
        followRedirects?: boolean;
    }

    interface HTTPResponse {
        statusCode?: number;
        headers?: {
            [id: string]: string
        };
        content?: string;
        data?: any;
    }

    function call(method: string, url: string, options?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

    function del(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

    function get(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

    function post(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

    function put(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

    function call(method: string, url: string, options?: {
        content?: string;
        data?: Object;
        query?: string;
        params?: Object;
        auth?: string;
        headers?: Object;
        timeout?: number;
        followRedirects?: boolean;
        npmRequestOptions?: Object;
        beforeSend?: Function;
    }, asyncCallback?: Function): HTTP.HTTPResponse;
}

declare module "meteor/http" {
    module HTTP {
        interface HTTPRequest {
            content?: string;
            data?: any;
            query?: string;
            params?: {
                [id: string]: string
            };
            auth?: string;
            headers?: {
                [id: string]: string
            };
            timeout?: number;
            followRedirects?: boolean;
        }

        interface HTTPResponse {
            statusCode?: number;
            headers?: {
                [id: string]: string
            };
            content?: string;
            data?: any;
        }

        function call(method: string, url: string, options?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

        function del(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

        function get(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

        function post(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

        function put(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

        function call(method: string, url: string, options?: {
            content?: string;
            data?: Object;
            query?: string;
            params?: Object;
            auth?: string;
            headers?: Object;
            timeout?: number;
            followRedirects?: boolean;
            npmRequestOptions?: Object;
            beforeSend?: Function;
        }, asyncCallback?: Function): HTTP.HTTPResponse;
    }
}

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

declare module Mongo {
    interface Selector {
        [key: string]: any;
    }
    interface Selector extends Object { }
    interface Modifier { }
    interface SortSpecifier { }
    interface FieldSpecifier {
        [id: string]: Number;
    }

    var Collection: CollectionStatic;
    interface CollectionStatic {
        new <T>(name: string, options?: {
            connection?: Object;
            idGeneration?: string;
            transform?: Function;
        }): Collection<T>;
    }
    interface Collection<T> {
        allow(options: {
            insert?: (userId: string, doc: T) => boolean;
            update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean;
            remove?: (userId: string, doc: T) => boolean;
            fetch?: string[];
            transform?: Function;
        }): boolean;
        deny(options: {
            insert?: (userId: string, doc: T) => boolean;
            update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean;
            remove?: (userId: string, doc: T) => boolean;
            fetch?: string[];
            transform?: Function;
        }): boolean;
        find(selector?: Selector | ObjectID | string, options?: {
            sort?: SortSpecifier;
            skip?: number;
            limit?: number;
            fields?: FieldSpecifier;
            reactive?: boolean;
            transform?: Function;
        }): Cursor<T>;
        findOne(selector?: Selector | ObjectID | string, options?: {
            sort?: SortSpecifier;
            skip?: number;
            fields?: FieldSpecifier;
            reactive?: boolean;
            transform?: Function;
        }): T;
        insert(doc: T, callback?: Function): string;
        rawCollection(): any;
        rawDatabase(): any;
        remove(selector: Selector | ObjectID | string, callback?: Function): number;
        update(selector: Selector | ObjectID | string, modifier: Modifier, options?: {
            multi?: boolean;
            upsert?: boolean;
        }, callback?: Function): number;
        upsert(selector: Selector | ObjectID | string, modifier: Modifier, options?: {
            multi?: boolean;
        }, callback?: Function): {
                numberAffected?: number; insertedId?: string;
            };
        _ensureIndex(keys: {
            [key: string]: number | string
        } | string, options?: {
            [key: string]: any
        }): void;
        _dropIndex(keys: {
            [key: string]: number | string
        } | string): void;
    }

    var Cursor: CursorStatic;
    interface CursorStatic {
        new <T>(): Cursor<T>;
    }
    interface ObserveCallbacks {
        added?(document: Object): void;
        addedAt?(document: Object, atIndex: number, before: Object): void;
        changed?(newDocument: Object, oldDocument: Object): void;
        changedAt?(newDocument: Object, oldDocument: Object, indexAt: number): void;
        removed?(oldDocument: Object): void;
        removedAt?(oldDocument: Object, atIndex: number): void;
        movedTo?(document: Object, fromIndex: number, toIndex: number, before: Object): void;
    }
    interface ObserveChangesCallbacks {
        added?(id: string, fields: Object): void;
        addedBefore?(id: string, fields: Object, before: Object): void;
        changed?(id: string, fields: Object): void;
        movedBefore?(id: string, before: Object): void;
        removed?(id: string): void;
    }
    interface Cursor<T> {
        count(applySkipLimit?: boolean): number;
        fetch(): Array<T>;
        forEach(callback: < T > (doc: T, index: number, cursor: Cursor<T>) => void, thisArg?: any): void;
        map<U>(callback: (doc: T, index: number, cursor: Cursor<T>) => U, thisArg?: any): Array<U>;
        observe(callbacks: ObserveCallbacks): Meteor.LiveQueryHandle;
        observeChanges(callbacks: ObserveChangesCallbacks): Meteor.LiveQueryHandle;
    }

    var ObjectID: ObjectIDStatic;
    interface ObjectIDStatic {
        new (hexString?: string): ObjectID;
    }
    interface ObjectID { }

    function setConnectionOptions(options: any): void;
}

declare module "meteor/mongo" {
    module Mongo {
        interface Selector {
            [key: string]: any;
        }
        interface Selector extends Object { }
        interface Modifier { }
        interface SortSpecifier { }
        interface FieldSpecifier {
            [id: string]: Number;
        }

        var Collection: CollectionStatic;
        interface CollectionStatic {
            new <T>(name: string, options?: {
                connection?: Object;
                idGeneration?: string;
                transform?: Function;
            }): Collection<T>;
        }
        interface Collection<T> {
            allow(options: {
                insert?: (userId: string, doc: T) => boolean;
                update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean;
                remove?: (userId: string, doc: T) => boolean;
                fetch?: string[];
                transform?: Function;
            }): boolean;
            deny(options: {
                insert?: (userId: string, doc: T) => boolean;
                update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean;
                remove?: (userId: string, doc: T) => boolean;
                fetch?: string[];
                transform?: Function;
            }): boolean;
            find(selector?: Selector | ObjectID | string, options?: {
                sort?: SortSpecifier;
                skip?: number;
                limit?: number;
                fields?: FieldSpecifier;
                reactive?: boolean;
                transform?: Function;
            }): Cursor<T>;
            findOne(selector?: Selector | ObjectID | string, options?: {
                sort?: SortSpecifier;
                skip?: number;
                fields?: FieldSpecifier;
                reactive?: boolean;
                transform?: Function;
            }): T;
            insert(doc: T, callback?: Function): string;
            rawCollection(): any;
            rawDatabase(): any;
            remove(selector: Selector | ObjectID | string, callback?: Function): number;
            update(selector: Selector | ObjectID | string, modifier: Modifier, options?: {
                multi?: boolean;
                upsert?: boolean;
            }, callback?: Function): number;
            upsert(selector: Selector | ObjectID | string, modifier: Modifier, options?: {
                multi?: boolean;
            }, callback?: Function): {
                    numberAffected?: number; insertedId?: string;
                };
            _ensureIndex(keys: {
                [key: string]: number | string
            } | string, options?: {
                [key: string]: any
            }): void;
            _dropIndex(keys: {
                [key: string]: number | string
            } | string): void;
        }

        var Cursor: CursorStatic;
        interface CursorStatic {
            new <T>(): Cursor<T>;
        }
        interface ObserveCallbacks {
            added?(document: Object): void;
            addedAt?(document: Object, atIndex: number, before: Object): void;
            changed?(newDocument: Object, oldDocument: Object): void;
            changedAt?(newDocument: Object, oldDocument: Object, indexAt: number): void;
            removed?(oldDocument: Object): void;
            removedAt?(oldDocument: Object, atIndex: number): void;
            movedTo?(document: Object, fromIndex: number, toIndex: number, before: Object): void;
        }
        interface ObserveChangesCallbacks {
            added?(id: string, fields: Object): void;
            addedBefore?(id: string, fields: Object, before: Object): void;
            changed?(id: string, fields: Object): void;
            movedBefore?(id: string, before: Object): void;
            removed?(id: string): void;
        }
        interface Cursor<T> {
            count(applySkipLimit?: boolean): number;
            fetch(): Array<T>;
            forEach(callback: < T > (doc: T, index: number, cursor: Cursor<T>) => void, thisArg?: any): void;
            map<U>(callback: (doc: T, index: number, cursor: Cursor<T>) => U, thisArg?: any): Array<U>;
            observe(callbacks: ObserveCallbacks): Meteor.LiveQueryHandle;
            observeChanges(callbacks: ObserveChangesCallbacks): Meteor.LiveQueryHandle;
        }

        var ObjectID: ObjectIDStatic;
        interface ObjectIDStatic {
            new (hexString?: string): ObjectID;
        }
        interface ObjectID { }

        function setConnectionOptions(options: any): void;
    }
}

declare module Mongo {
    interface AllowDenyOptions {
        insert?: (userId: string, doc: any) => boolean;
        update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
        remove?: (userId: string, doc: any) => boolean;
        fetch?: string[];
        transform?: Function;
    }
}

declare module "meteor/mongo" {
    module Mongo {
        interface AllowDenyOptions {
            insert?: (userId: string, doc: any) => boolean;
            update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
            remove?: (userId: string, doc: any) => boolean;
            fetch?: string[];
            transform?: Function;
        }
    }
}

declare module Random {
    function id(numberOfChars?: number): string;

    function secret(numberOfChars?: number): string;

    function fraction(): number;
    // @param numberOfDigits, @returns a random hex string of the given length
    function hexString(numberOfDigits: number): string;
    // @param array, @return a random element in array
    function choice(array: any[]): string;
    // @param str, @return a random char in str
    function choice(str: string): string;
}

declare module "meteor/random" {
    module Random {
        function id(numberOfChars?: number): string;

        function secret(numberOfChars?: number): string;

        function fraction(): number;
        // @param numberOfDigits, @returns a random hex string of the given length
        function hexString(numberOfDigits: number): string;
        // @param array, @return a random element in array
        function choice(array: any[]): string;
        // @param str, @return a random char in str
        function choice(str: string): string;
    }
}

declare var ReactiveVar: ReactiveVarStatic;
interface ReactiveVarStatic {
    new <T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
}
interface ReactiveVar<T> {
    get(): T;
    set(newValue: T): void;
}

declare module "meteor/reactive-var" {
    var ReactiveVar: ReactiveVarStatic;
    interface ReactiveVarStatic {
        new <T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
    }
    interface ReactiveVar<T> {
        get(): T;
        set(newValue: T): void;
    }
}

declare module Session {
    function equals(key: string, value: string | number | boolean | any): boolean;

    function get(key: string): any;

    function set(key: string, value: EJSONable | any): void;

    function setDefault(key: string, value: EJSONable | any): void;
}

declare module "meteor/session" {
    module Session {
        function equals(key: string, value: string | number | boolean | any): boolean;

        function get(key: string): any;

        function set(key: string, value: EJSONable | any): void;

        function setDefault(key: string, value: EJSONable | any): void;
    }
}

declare var Template: TemplateStatic;
interface TemplateStatic extends Blaze.TemplateStatic {
    new (viewName?: string, renderFunction?: Function): Blaze.Template;
    body: Blaze.Template;
    [index: string]: any | Blaze.Template;
}

declare module "meteor/templating" {
    var Template: TemplateStatic;
    interface TemplateStatic extends Blaze.TemplateStatic {
        new (viewName?: string, renderFunction?: Function): Blaze.Template;
        body: Blaze.Template;
        [index: string]: any | Blaze.Template;
    }
}

interface ILengthAble {
    length: number;
}

interface ITinytestAssertions {
    ok(doc: Object): void;
    expect_fail(): void;
    fail(doc: Object): void;
    runId(): string;
    equal<T>(actual: T, expected: T, message?: string, not?: boolean): void;
    notEqual<T>(actual: T, expected: T, message?: string): void;
    instanceOf(obj: Object, klass: Function, message?: string): void;
    notInstanceOf(obj: Object, klass: Function, message?: string): void;
    matches(actual: any, regexp: RegExp, message?: string): void;
    notMatches(actual: any, regexp: RegExp, message?: string): void;
    throws(f: Function, expected?: string | RegExp): void;
    isTrue(v: boolean, msg?: string): void;
    isFalse(v: boolean, msg?: string): void;
    isNull(v: any, msg?: string): void;
    isNotNull(v: any, msg?: string): void;
    isUndefined(v: any, msg?: string): void;
    isNotUndefined(v: any, msg?: string): void;
    isNan(v: any, msg?: string): void;
    isNotNan(v: any, msg?: string): void;
    include<T>(s: Array<T> | Object | string, value: any, msg?: string, not?: boolean): void;

    notInclude<T>(s: Array<T> | Object | string, value: any, msg?: string, not?: boolean): void;
    length(obj: ILengthAble, expected_length: number, msg?: string): void;
    _stringEqual(actual: string, expected: string, msg?: string): void;
}

declare module Tinytest {
    function add(description: string, func: (test: ITinytestAssertions) => void): void;

    function addAsync(description: string, func: (test: ITinytestAssertions) => void): void;
}

declare module "meteor/tiny-test" {
    interface ILengthAble {
        length: number;
    }

    interface ITinytestAssertions {
        ok(doc: Object): void;
        expect_fail(): void;
        fail(doc: Object): void;
        runId(): string;
        equal<T>(actual: T, expected: T, message?: string, not?: boolean): void;
        notEqual<T>(actual: T, expected: T, message?: string): void;
        instanceOf(obj: Object, klass: Function, message?: string): void;
        notInstanceOf(obj: Object, klass: Function, message?: string): void;
        matches(actual: any, regexp: RegExp, message?: string): void;
        notMatches(actual: any, regexp: RegExp, message?: string): void;
        throws(f: Function, expected?: string | RegExp): void;
        isTrue(v: boolean, msg?: string): void;
        isFalse(v: boolean, msg?: string): void;
        isNull(v: any, msg?: string): void;
        isNotNull(v: any, msg?: string): void;
        isUndefined(v: any, msg?: string): void;
        isNotUndefined(v: any, msg?: string): void;
        isNan(v: any, msg?: string): void;
        isNotNan(v: any, msg?: string): void;
        include<T>(s: Array<T> | Object | string, value: any, msg?: string, not?: boolean): void;

        notInclude<T>(s: Array<T> | Object | string, value: any, msg?: string, not?: boolean): void;
        length(obj: ILengthAble, expected_length: number, msg?: string): void;
        _stringEqual(actual: string, expected: string, msg?: string): void;
    }

    module Tinytest {
        function add(description: string, func: (test: ITinytestAssertions) => void): void;

        function addAsync(description: string, func: (test: ITinytestAssertions) => void): void;
    }
}

declare module App {
    function accessRule(pattern: string, options?: {
        type?: string;
        launchExternal?: boolean;
    }): void;

    function configurePlugin(id: string, config: Object): void;

    function icons(icons: Object): void;

    function info(options: {
        id?: string;
        version?: string;
        name?: string;
        description?: string;
        author?: string;
        email?: string;
        website?: string;
    }): void;

    function launchScreens(launchScreens: Object): void;

    function setPreference(name: string, value: string, platform?: string): void;
}

declare function execFileAsync(command: string, args?: any[], options?: {
    cwd?: Object;
    env?: Object;
    stdio?: any[] | string;
    destination?: any;
    waitForClose?: string;
}): any;
declare function execFileSync(command: string, args?: any[], options?: {
    cwd?: Object;
    env?: Object;
    stdio?: any[] | string;
    destination?: any;
    waitForClose?: string;
}): String;

declare module Assets {
    function getBinary(assetPath: string, asyncCallback?: Function): EJSON;

    function getText(assetPath: string, asyncCallback?: Function): string;

    function absoluteFilePath(assetPath: string): string;
}

declare module Cordova {
    function depends(dependencies: {
        [id: string]: string
    }): void;
}

declare module Npm {
    function depends(dependencies: {
        [id: string]: string
    }): void;

    function require(name: string): any;
}

declare namespace Package {
    function describe(options: {
        summary?: string;
        version?: string;
        name?: string;
        git?: string;
        documentation?: string;
        debugOnly?: boolean;
        prodOnly?: boolean;
        testOnly?: boolean;
    }): void;

    function onTest(func: (api: PackageAPI) => void): void;

    function onUse(func: (api: PackageAPI) => void): void;

    function registerBuildPlugin(options?: {
        name?: string;
        use?: string | string[];
        sources?: string[];
        npmDependencies?: Object;
    }): void;
}

interface PackageAPI {
    new (): PackageAPI;
    addAssets(filenames: string | string[], architecture: string | string[]): void;
    addFiles(filenames: string | string[], architecture?: string | string[], options?: {
        bare?: boolean;
    }): void;
    export(exportedObjects: string | string[], architecture?: string | string[], exportOptions?: Object, testOnly?: boolean): void;
    imply(packageNames: string | string[], architecture?: string | string[]): void;
    use(packageNames: string | string[], architecture?: string | string[], options?: {
        weak?: boolean;
        unordered?: boolean;
    }): void;
    versionsFrom(meteorRelease: string | string[]): void;
}

declare var console: Console;

declare module "meteor/tools" {
    module App {
        function accessRule(pattern: string, options?: {
            type?: string;
            launchExternal?: boolean;
        }): void;

        function configurePlugin(id: string, config: Object): void;

        function icons(icons: Object): void;

        function info(options: {
            id?: string;
            version?: string;
            name?: string;
            description?: string;
            author?: string;
            email?: string;
            website?: string;
        }): void;

        function launchScreens(launchScreens: Object): void;

        function setPreference(name: string, value: string, platform?: string): void;
    }

    function execFileAsync(command: string, args?: any[], options?: {
        cwd?: Object;
        env?: Object;
        stdio?: any[] | string;
        destination?: any;
        waitForClose?: string;
    }): any;

    function execFileSync(command: string, args?: any[], options?: {
        cwd?: Object;
        env?: Object;
        stdio?: any[] | string;
        destination?: any;
        waitForClose?: string;
    }): String;

    module Assets {
        function getBinary(assetPath: string, asyncCallback?: Function): EJSON;

        function getText(assetPath: string, asyncCallback?: Function): string;

        function absoluteFilePath(assetPath: string): string;
    }

    module Cordova {
        function depends(dependencies: {
            [id: string]: string
        }): void;
    }

    module Npm {
        function depends(dependencies: {
            [id: string]: string
        }): void;

        function require(name: string): any;
    }

    namespace Package {
        function describe(options: {
            summary?: string;
            version?: string;
            name?: string;
            git?: string;
            documentation?: string;
            debugOnly?: boolean;
            prodOnly?: boolean;
            testOnly?: boolean;
        }): void;

        function onTest(func: (api: PackageAPI) => void): void;

        function onUse(func: (api: PackageAPI) => void): void;

        function registerBuildPlugin(options?: {
            name?: string;
            use?: string | string[];
            sources?: string[];
            npmDependencies?: Object;
        }): void;
    }

    interface PackageAPI {
        new (): PackageAPI;
        addAssets(filenames: string | string[], architecture: string | string[]): void;
        addFiles(filenames: string | string[], architecture?: string | string[], options?: {
            bare?: boolean;
        }): void;
        export(exportedObjects: string | string[], architecture?: string | string[], exportOptions?: Object, testOnly?: boolean): void;
        imply(packageNames: string | string[], architecture?: string | string[]): void;
        use(packageNames: string | string[], architecture?: string | string[], options?: {
            weak?: boolean;
            unordered?: boolean;
        }): void;
        versionsFrom(meteorRelease: string | string[]): void;
    }

    var console: Console;
}

declare module Tracker {
    function Computation(): void;
    interface Computation {
        firstRun: boolean;
        invalidate(): void;
        invalidated: boolean;
        onInvalidate(callback: Function): void;
        onStop(callback: Function): void;
        stop(): void;
        stopped: boolean;
    }
    var currentComputation: Computation;

    var Dependency: DependencyStatic;
    interface DependencyStatic {
        new (): Dependency;
    }
    interface Dependency {
        changed(): void;
        depend(fromComputation?: Computation): boolean;
        hasDependents(): boolean;
    }

    var active: boolean;

    function afterFlush(callback: Function): void;

    function autorun(runFunc: (computation: Computation) => void, options?: {
        onError?: Function;
    }): Computation;

    function flush(): void;

    function nonreactive(func: Function): void;

    function onInvalidate(callback: Function): void;
}

declare module "meteor/tracker" {
    module Tracker {
        function Computation(): void;
        interface Computation {
            firstRun: boolean;
            invalidate(): void;
            invalidated: boolean;
            onInvalidate(callback: Function): void;
            onStop(callback: Function): void;
            stop(): void;
            stopped: boolean;
        }
        var currentComputation: Computation;

        var Dependency: DependencyStatic;
        interface DependencyStatic {
            new (): Dependency;
        }
        interface Dependency {
            changed(): void;
            depend(fromComputation?: Computation): boolean;
            hasDependents(): boolean;
        }

        var active: boolean;

        function afterFlush(callback: Function): void;

        function autorun(runFunc: (computation: Computation) => void, options?: {
            onError?: Function;
        }): Computation;

        function flush(): void;

        function nonreactive(func: Function): void;

        function onInvalidate(callback: Function): void;
    }
}

declare module Match {
    function Maybe(pattern: any): boolean;
}

declare module "meteor/check" {
    module Match {
        function Maybe(pattern: any): boolean;
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

declare module Accounts {
    function onLogout(func: Function): void;
}

declare module "meteor/accounts-base" {
    module Accounts {
        function onLogout(func: Function): void;
    }
}

declare module Accounts {
    function onLogout(func: (user: Meteor.User, connection: Meteor.Connection) => void): void;
}

declare module "meteor/accounts-base" {
    module Accounts {
        function onLogout(func: (user: Meteor.User, connection: Meteor.Connection) => void): void;
    }
}
