// Type definitions for Meteor 0.9.1
// Project: http://www.meteor.com/
// Definitions by: Dave Allen <https://github.com/fullflavedave>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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

    interface TemplateBase {
        [templateName: string]: Meteor.Template;
    }

    interface RenderedTemplate extends Object {}

    interface DataContext extends Object {}

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

declare module Mongo {
    interface CollectionFieldSpecifier {
        [id: string]: Number;
    }

    enum CollectionIdGenerationEnum {
        STRING,
        MONGO
    }

//    interface CollectionOptions {
//        connection: Object;
//        idGeneration: Mongo.CollectionIdGenerationEnum;
//        transform?: (document)=>any;
//    }
//
//    function Collection<T>(name:string, options?: Mongo.CollectionOptions) : void;
}

declare module Tracker {
    function Computation(): void;
    interface Computation {

    }
    function Dependency(): void;
    interface Dependency {
        changed(): void;
        depend(fromComputation: Tracker.Computation): boolean;
        hasDependents(): boolean;
    }
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

declare module Blaze {
    interface View {
        name: string;
        parentView: Blaze.View;
        isCreated: boolean;
        isRendered: boolean;
        isDestroyed: boolean;
        renderCount: number;
        autorun(runFunc: Function): void;
        onViewCreated(func: Function): void;
        onViewReady(func: Function): void;
        onViewDestroyed(func: Function): void;
        firstNode(): Node;
        lastNode(): Node;
        template: Blaze.Template;
        templateInstance(): any;
    }
    interface Template {
        viewName: string;
        renderFunction: Function;
        constructView(): Blaze.View;
    }
}

/**
 * These modules and interfaces are automatically generated from the Meteor api.js file
 */
declare module Meteor {
	var isClient: boolean;
	var isServer: boolean;
	var isCordova: boolean;
	function startup(func: Function): void;
	function wrapAsync(func: Function, context?: Object): any;
	function absoluteUrl(path?: string, options?: {
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
	function user(): Meteor.User;
	function userId(): string;
	var users: Mongo.Collection<User>;
	function loggingIn(): boolean;
	function logout(callback?: Function): void;
	function logoutOtherClients(callback?: Function): void;
	function loginWithPassword(user: any, password: string, callback?: Function): void;
	function loginWithExternalService(options?: {
					requestPermissions?: string[];
					requestOfflineToken?: Boolean;
					forceApprovalPrompt?: Boolean;
					userEmail?: string;
					loginStyle?: string;
				}, callback?: Function): void;
	function setTimeout(func: Function, delay: number): number;
	function setInterval(func: Function, delay: number): number;
	function clearTimeout(id: number): void;
	function clearInterval(id: number): void;
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
		clone<T>(v:T): T; /** TODO: add return value **/
		newBinary(size: number): any;
		isBinary(x): boolean;
		addType(name: string, factory: Function): void;
	}
}

declare module DDP {
	function connect(url: string): DDP.DDPStatic;
}

declare module Mongo {
	function Collection<T>(name: string, options?: {
					connection?: Object;
					idGeneration?: Mongo.CollectionIdGenerationEnum;
					transform?: (document)=>any;
				}): void;
	function ObjectID(hexString: string): void;
}

declare module Mongo {
	interface Collection<T> {
		find(selector?: any, options?: {
					sort?: any;
					skip?: number;
					limit?: number;
					fields?: Mongo.CollectionFieldSpecifier;
					reactive?: Boolean;
					transform?: (document)=>any;
				}): Mongo.Cursor<T>;
		findOne(selector?: any, options?: {
					sort?: any;
					skip?: number;
					fields?: Mongo.CollectionFieldSpecifier;
					reactive?: Boolean;
					transform?: (document)=>any;
				}): Meteor.EJSONObject;
		insert(doc: Object, callback?: Function): string;
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
	}
}

declare module Mongo {
	interface Cursor<T> {
		count(): number;
		fetch(): any[];
		forEach(callback: Function, thisArg?: any): void;
		map(callback: Function, thisArg?: any): void;
		observe(callbacks: Object): Meteor.LiveQueryHandle;
		observeChanges(callbacks: Object): Meteor.LiveQueryHandle;
	}
}

declare module Random {
	function id(): string;
}

declare module Tracker {
	function autorun(runFunc: Function): Tracker.Computation;
	function flush(): void;
	function nonreactive(func: Function): void;
	var active: boolean;
	var currentComputation: Tracker.Computation;
	function onInvalidate(callback: Function): void;
	function afterFlush(callback: Function): void;
}

declare module Tracker {
	interface Computation {
		stop(): void;
		invalidate(): void;
		onInvalidate(callback: Function): void;
		stopped: boolean;
		invalidated: boolean;
		firstRun: boolean;
	}
}

declare module Tracker {
	interface Dependency {
		changed(): void;
		depend(fromComputation?: Tracker.Computation): boolean;
		hasDependents(): boolean;
	}
}

declare module Meteor {
	interface Accounts extends Meteor.AccountsBase {
		config(options: {
					sendVerificationEmail?: Boolean;
					forbidClientAccountCreation?: Boolean;
					restrictCreationByEmailDomain?: any; // string or Function
					loginExpirationInDays?: number;
					oauthSecretKey?: string;
				}): void;
		ui: {
			config(options: {
					requestPermissions?: Object;
					requestOfflineToken?: Object;
					forceApprovalPrompt?: Boolean;
					passwordSignupFields?: string;
				}); /** TODO: add return value **/
		}
		validateNewUser(func: Function): void;
		onCreateUser(func: Function): void;
		validateLoginAttempt(func: Function); /** TODO: add return value **/
		onLogin(func: Function); /** TODO: add return value **/
		onLoginFailure(func: Function); /** TODO: add return value **/
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
		sendResetPasswordEmail(userId: string, email?: string): void;
		sendEnrollmentEmail(userId: string, email?: string): void;
		sendVerificationEmail(userId: string, email?: string): void;
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
					timeout?: number;
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
		findAll(selector: string); /** TODO: add return value **/
		$(selector: string); /** TODO: add return value **/
		find(selector?: string); /** TODO: add return value **/
		firstNode; /** TODO: add return value **/
		lastNode; /** TODO: add return value **/
		data; /** TODO: add return value **/
		autorun(runFunc: Function); /** TODO: add return value **/
		view; /** TODO: add return value **/
		registerHelper(name: string, func: Function); /** TODO: add return value **/
		body; /** TODO: add return value **/
		currentData(); /** TODO: add return value **/
		instance(); /** TODO: add return value **/
		parentData(numLevels: number); /** TODO: add return value **/
	}
}

declare module Blaze {
	function render(templateOrView: any, parentNode: Node, nextNode?: Node, parentView?: Blaze.View): Blaze.View;
	function renderWithData(templateOrView: any, data: any, parentNode: Node, nextNode?: Node, parentView?: Blaze.View): Blaze.View;
	function remove(renderedView: Blaze.View): void;
	function With(data: any, contentFunc: Function); /** TODO: add return value **/
	function If(conditionFunc: Function, contentFunc: Function, elseFunc?: Function); /** TODO: add return value **/
	function Unless(conditionFunc: Function, contentFunc: Function, elseFunc?: Function); /** TODO: add return value **/
	function Each(argFunc: Function, contentFunc: Function, elseFunc?: Function); /** TODO: add return value **/
	function getData(elementOrView?: any); /** TODO: add return value **/
	var currentView; /** TODO: add return value **/
	function getView(element?: HTMLElement); /** TODO: add return value **/
	function toHTML(templateOrView: any): string;
	function toHTMLWithData(templateOrView: any, data: any): string;
	function View(name?: string, renderFunction?: Function): void;
	function Template(viewName?: string, renderFunction?: Function): void;
	function isTemplate(value: any): boolean;
}

declare module Meteor {
	interface ReactiveVar {
		get(); /** TODO: add return value **/
		set(newValue: any); /** TODO: add return value **/
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
	function getText(assetPath: string, asyncCallback?: Function): string;
	function getBinary(assetPath: string, asyncCallback?: Function): Meteor.EJSON;
}

declare module Meteor {
	interface Package {
		describe(options: {
					summary?: string;
					version?: string;
					name?: string;
					git?: string;
				}); /** TODO: add return value **/
		onUse(f: Function); /** TODO: add return value **/
		onTest(f: Function); /** TODO: add return value **/
		describe(options: {
				}); /** TODO: add return value **/
	}
}

declare module Meteor {
	interface Api {
		use(packageNameAndVersion?: string, architecture?: string, options?: {
					weak?: Boolean;
					unordered?: Boolean;
				}); /** TODO: add return value **/
		versionsFrom(meteorversion: string); /** TODO: add return value **/
		imply(packagespecOrpackagespecs: any); /** TODO: add return value **/
		export(exportedObject: string, architecture?: string); /** TODO: add return value **/
		addFiles(filenameOrfilenames: any); /** TODO: add return value **/
	}
}

declare var Template: Meteor.TemplateBase;
declare var Session: Meteor.Session;
declare var Accounts: Meteor.Accounts;
declare var Match: Meteor.Match;
declare var EJSON: Meteor.EJSON;
declare var Tinytest: Meteor.Tinytest;
