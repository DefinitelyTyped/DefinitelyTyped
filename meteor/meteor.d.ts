/**
 *
 *  Meteor definitions for TypeScript
 *  author - Olivier Refalo - orefalo@yahoo.com
 *  author - David Allen - dave@fullflavedave.com
 *
 *  Thanks to Sam Hatoum for the base code for auto-generating this file
 *
 *  supports Meteor 0.8.3
 *
 */

/// <reference path="lib.d.ts" />

/**
 * These are the modules and interfaces that can't be automatically generated from the Meteor api.js file
 */
declare module Meteor {
    interface EJSONObject extends Object {}

    interface LoginWithExternalServiceOptions {
        requestPermissions?: string[];
        requestOfflineToken?: Boolean;
        forceApprovalPrompt?: Boolean;
        userEmail?: string;
    }

    function loginWithMeteorDeveloperAccount(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
    function loginWithFacebook(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
    function loginWithGithub(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
    function loginWithGoogle(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
    function loginWithMeetup(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
    function loginWithTwitter(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
    function loginWithWeibo(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

    interface UserEmail {
        address:string;
        verified:boolean;
    }

    interface User {
        _id?:string;
        username?:string;
        emails?:Meteor.UserEmail[];
        createdAt?: number;
        profile?: any;
        services?: any;
    }

    interface SubscriptionHandle {
        stop(): void;
        ready(): boolean;
    }

    interface CollectionFieldSpecifier {
        [id: string]: Number;
    }

    interface TemplateBase {
        [templateName: string]: Meteor.Template;
    }

    interface RenderedTemplate extends Object {}

    interface DataContext extends Object {}

    enum CollectionIdGenerationEnum {
        STRING,
        MONGO
    }

    interface CollectionOptions {
        connection: Object;
        idGeneration: Meteor.CollectionIdGenerationEnum;
        transform?: (document)=>any;
    }

    function Collection<T>(name:string, options?:Meteor.CollectionOptions) : void;

    interface Tinytest {
        add(name:string, func:Function);
        addAsync(name:string, func:Function);
    }

    enum StatusEnum {
        connected,
        connecting,
        failed,
        waiting,
        offline
    }

    interface LiveQueryHandle {
        stop(): void;
    }

    interface EmailFields {
        subject?: Function;
        text?: Function;
    }

    interface EmailTemplates {
        from: string;
        siteName: string;
        resetPassword: Meteor.EmailFields;
        enrollAccount:  Meteor.EmailFields;
        verifyEmail:  Meteor.EmailFields;
    }

    interface AccountsBase {
        EmailTemplates: {
            from: string;
            siteName: string;
            resetPassword:  Meteor.EmailFields;
            enrollAccount:  Meteor.EmailFields;
            verifyEmail:  Meteor.EmailFields;
        }
        loginServicesConfigured(): boolean;
    }

    interface MatchBase {
        Any;
        String;
        Integer;
        Boolean;
        undefined;
        null;
        Object;
        Optional(pattern):boolean;
        ObjectIncluding(dico):boolean;
        OneOf(...patterns);
        Where(condition);
    }

    interface AllowDenyOptions {
        insert?: (userId:string, doc) => boolean;
        update?: (userId, doc, fieldNames, modifier) => boolean;
        remove?: (userId, doc) => boolean;
        fetch?: string[];
        transform?: Function;
    }

    interface Error {
        error: number;
        reason?: string;
        details?: string;
    }
}

declare module Deps {
    function Computation(): void;
    function Dependency(): void;
}

declare module Package {
    function describe(metadata:PackageDescribeAPI);
    function on_use(func:{(api:Api, where?:string[]):void});
    function on_use(func:{(api:Api, where?:string):void});
    function on_test(func:{(api:Api):void}) ;
    function register_extension(extension:string, options:PackageRegisterExtensionOptions);
    interface PackageRegisterExtensionOptions {(bundle:Bundle, source_path:string, serve_path:string, where?:string[]):void}
    interface PackageDescribeAPI {
        summary: string;
    }
    interface Api {
        export(variable:string);
        export(variables:string[]);
        use(deps:string, where?:string[]);
        use(deps:string, where?:string);
        use(deps:string[], where?:string[]);
        use(deps:string[], where?:string);
        add_files(file:string, where?:string[]);
        add_files(file:string, where?:string);
        add_files(file:string[], where?:string[]);
        add_files(file:string[], where?:string);
        imply(package:string);
        imply(packages:string[]);
    }
    interface BundleOptions {
        type: string;
        path: string;
        data: any;
        where: string[];
    }
    interface Bundle {
        add_resource(options:BundleOptions);
        error(diagnostics:string);
    }
}

declare module Npm {
    function require(module:string);
    function depends(dependencies:{[id:string]:string});
}

declare module HTTP {
    enum HTTPMethodEnum {
        GET,
        POST,
        PUT,
        DELETE
    }

    interface HTTPRequest {
        content?:string;
        data?:any;
        query?:string;
        params?:{[id:string]:string};
        auth?:string;
        headers?:{[id:string]:string};
        timeout?:number;
        followRedirects?:boolean;
    }

    interface HTTPResponse {
        statusCode:number;
        content:string;
        // response is not always json
        data:any;
        headers:{[id:string]:string};
    }
}

declare module Email {
    interface EmailMessage {
        from: string;
        to: any;  // string or string[]
        cc?: any; // string or string[]
        bcc?: any; // string or string[]
        replyTo?: any; // string or string[]
        subject: string;
        text?: string;
        html?: string;
        headers?: {[id: string]: string};
    }
}

declare module DDP {
    interface DDPStatic {
        subscribe(name, ...rest);
        call(method:string, ...parameters):void;
        apply(method:string, ...parameters):void;
        methods(IMeteorMethodsDictionary);
        status():DDPStatus;
        reconnect();
        disconnect();
        onReconnect();
    }

    interface DDPStatus {
        connected: boolean;
        status: Meteor.StatusEnum;
        retryCount: number;
        //To turn this into an interval until the next reconnection, use retryTime - (new Date()).getTime()
        retryTime?: number;
        reason?: string;
    }
}

declare module Random {
    function fraction():number;
    function hexString(numberOfDigits:number):string; // @param numberOfDigits, @returns a random hex string of the given length
    function choice(array:any[]):string; // @param array, @return a random element in array
    function choice(str:string):string; // @param str, @return a random char in str
}

/**
 * These modules and interfaces are automatically generated from the Meteor api.js file
 */
declare module Meteor {
	var isClient: boolean;
	var isServer: boolean;
	function startup(func: Function): void;
	function absoluteUrl(path?, options?: {
					secure?: Boolean;
					replaceLocalhost?: Boolean;
					rootUrl?: string;
				}): string;
	var settings: {[id:string]: any};
	var release: string;
	function publish(name: string, func: Function): void;
	function subscribe(name, ...args): SubscriptionHandle;
	function methods(methods: Object): void;
	function Error(error, reason?, details?): void;
	function call(name: string, ...params): void;
	function apply(name: string, params, options?: {
					wait?: Boolean;
					onResultReceived?: Function;
				}, asyncCallback?): void;
	function status(): Meteor.StatusEnum;
	function reconnect(): void;
	function disconnect(): void;
	function onConnection(callback: Function): void;
	function Collection(name: string, options?: {
					connection?: Object;
					idGeneration?: string;
					transform?: Function;
				}): void;
	function user(): Meteor.User;
	function userId(): string;
	var users: Meteor.Collection<User>;
	function loggingIn(): boolean;
	function logout(callback?: Function): void;
	function logoutOtherClients(callback?: Function): void;
	function loginWithPassword(user: any, password: string, callback?: Function): void;
	function loginWithExternalService(options?: {
					requestPermissions?: string[];
					requestOfflineToken?: Boolean;
					forceApprovalPrompt?: Boolean;
					userEmail?: string;
				}, callback?: Function): void;
	function setTimeout(func: Function, delay: Number): number;
	function setInterval(func: Function, delay: Number): number;
	function clearTimeout(id: Number): void;
	function clearInterval(id: Number): void;
	function EnvironmentVariable(): void;
	function get(): string;
	function withValue(value: any, func: Function): void;
	function bindEnvironment(func: Function, onException: Function, _this: Object): Function;
}

declare module Meteor {
	interface EJSON {
		parse(str: string): EJSON;
		stringify(val: Meteor.EJSON, options?: {
					indent?: any; // boolean, integer, or string
					canonical?: Boolean;
				}): string;
		fromJSONValue(val: JSON): any;
		toJSONValue(val: Meteor.EJSON): JSON;
		equals(a: Meteor.EJSONObject, b: Meteor.EJSONObject, options?: {
					keyOrderSensitive?: Boolean;
				}): boolean;
		clone<T>(v:T): T; 
		newBinary(size: Number): any;
		isBinary(): boolean;
		addType(name: string, factory: Function): void;
	}
}

declare module DDP {
	function connect(url: string): DDP.DDPStatic;
}

declare module Meteor {
	interface Collection<T> {
		find(selector?: any, options?: {
					sort?: any;
					skip?: Number;
					limit?: Number;
					fields?: Meteor.CollectionFieldSpecifier;
					reactive?: Boolean;
					transform?: Function;
				}); 
		findOne(selector?: any, options?: {
					sort?: any;
					skip?: Number;
					fields?: Meteor.CollectionFieldSpecifier;
					reactive?: Boolean;
					transform?: Function;
				}); 
		insert(doc: Object, callback?: Function); 
		update(selector: any, modifier: any, options?: {
					multi?: Boolean;
					upsert?: Boolean;
				}, callback?: Function): number;
		upsert(selector: any, modifier: any, options?: {
					multi?: Boolean;
				}, callback?: Function): {numberAffected?: number; insertedId?: string;};
		remove(selector: any, callback?: Function): void;
		allow(options: Meteor.AllowDenyOptions): boolean;
		deny(options: Meteor.AllowDenyOptions): boolean;
		ObjectID(hexString: string): Object;
	}
}

declare module Meteor {
	interface Cursor<T> {
		count(): number;
		fetch(): Array<T>; 
		forEach(callback: Function, thisArg?): void;
		map(callback: Function, thisArg?): void;
		observe(callbacks: Object): Meteor.LiveQueryHandle;
		observeChanges(callbacks: Object): Meteor.LiveQueryHandle;
	}
}

declare module Random {
	function id(): string;
}

declare module Deps {
	function autorun(runFunc: Function): Deps.Computation;
	function flush(): void;
	function nonreactive(func: Function): void;
	var active: boolean;
	var currentComputation: Deps.Computation;
	function onInvalidate(callback: Function): void;
	function afterFlush(callback: Function): void;
}

declare module Deps {
	interface Computation {
		stop(): void;
		invalidate(): void;
		onInvalidate(callback: Function): void;
		stopped: boolean;
		invalidated: boolean;
		firstRun: boolean;
	}
}

declare module Deps {
	interface Dependency {
		changed(): void;
		depend(fromComputation?): boolean;
		hasDependents(): boolean;
	}
}

declare module Meteor {
	interface Accounts extends Meteor.AccountsBase {
		config(options: {
					sendVerificationEmail?: Boolean;
					forbidClientAccountCreation?: Boolean;
					restrictCreationByEmailDomain?: any; // string or Function
					loginExpirationInDays?: Number;
					oauthSecretKey?: string;
				}): void;
		ui: {
			config(options: {
					requestPermissions?: Object;
					requestOfflineToken?: Object;
					forceApprovalPrompt?: Boolean;
					passwordSignupFields?: string;
				}); 
		}
		validateNewUser(func: Function): void;
		onCreateUser(func: Function): void;
		validateLoginAttempt(func: Function); 
		onLogin(func: Function); 
		onLoginFailure(func: Function); 
		createUser(options: {
					username?: string;
					email?: string;
					password?: string;
					profile?: Object;
				}, callback?: Function): string;
		changePassword(oldPassword: string, newPassword: string, callback?: Function): void;
		forgotPassword(options: {
					email?: string;
				}, callback?: Function): void;
		resetPassword(token: string, newPassword: string, callback?: Function): void;
		setPassword(userId: string, newPassword: string): void;
		verifyEmail(token: string, callback?: Function): void;
		sendResetPasswordEmail(userId: string, email?): void;
		sendEnrollmentEmail(userId: string, email?): void;
		sendVerificationEmail(userId: string, email?): void;
		emailTemplates: Meteor.EmailTemplates;
	}
}

declare module Meteor {
	interface Match extends Meteor.MatchBase {
		test(value: any, pattern: any): boolean;
	}
}

declare module Meteor {
	interface Session {
		set(key: string, value: any): void;
		setDefault(key: string, value: any): void;
		get(key: string): any;
		equals(key: string, value: any): boolean;
	}
}

declare module HTTP {
	function call(method: string, url, options?: {
					content?: string;
					data?: Object;
					query?: string;
					params?: Object;
					auth?: string;
					headers?: Object;
					timeout?: Number;
					followRedirects?: Boolean;
				}, asyncCallback?): HTTP.HTTPResponse;
	function get(url, options?: {
				}, asyncCallback?): HTTP.HTTPResponse;
	function post(url, options?: {
				}, asyncCallback?): HTTP.HTTPResponse;
	function put(url, options?: {
				}, asyncCallback?): HTTP.HTTPResponse;
	function del(url, options?: {
				}, asyncCallback?): HTTP.HTTPResponse;
}

declare module Meteor {
	interface Template {
		rendered: Function;
		created: Function;
		destroyed: Function;
		events(eventMap: {[id:string]: Function}): void;
		helpers(helpers: Object): void;
	}
}

declare module Meteor {
	interface UI {
		registerHelper(name: string, func: Function): void;
		body: Meteor.Template;
		render(template): Meteor.RenderedTemplate;
		renderWithData(template, data: Object): Meteor.RenderedTemplate;
		insert(renderedTemplate: RenderedTemplate, parentNode, nextNode?): void;
		remove(renderedTemplate: RenderedTemplate): void;
		getElementData(el: HTMLElement): Meteor.DataContext;
	}
}

declare module Email {
	function send(options: {
					from?: string;
					to?: any; // string or string[]
					cc?: any; // string or string[]
					bcc?: any; // string or string[]
					replyTo?: any; // string or string[]
					subject?: string;
					text?: string;
					html?: string;
					headers?: Object;
				}): void;
}

declare module Assets {
	function getText(assetPath: string, asyncCallback?): string;
	function getBinary(assetPath: string, asyncCallback?): Meteor.EJSON;
}

declare var Template: Meteor.TemplateBase;
declare var Session: Meteor.Session;
declare var Accounts: Meteor.Accounts;
declare var Match: Meteor.Match;
declare var EJSON: Meteor.EJSON;
declare var Tinytest: Meteor.Tinytest;
