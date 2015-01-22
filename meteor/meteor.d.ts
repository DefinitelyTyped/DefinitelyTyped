// Type definitions for Meteor 1.0.3.1
// Project: http://www.meteor.com/
// Definitions by: Dave Allen <https://github.com/fullflavedave>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * These are the modules and interfaces that can't be automatically generated from the Meteor data.js file
 */

interface EJSON extends JSON {}
interface Template {
    [templateName: string]: Meteor.Template;
}

declare module Match {
    var Any;
    var String;
    var Integer;
    var Boolean;
    var undefined;
    //function null();  // not allowed in TypeScript
    var Object;
    function Optional(pattern):boolean;
    function ObjectIncluding(dico):boolean;
    function OneOf(...patterns);
    function Where(condition);
}

declare module Meteor {
    //interface EJSONObject extends Object {}

    /** Start definitions for Template **/
    // DA: "Template" needs to support these functions:
        //         Template.<your template name>.rendered
        //         Template.<your template name>.created
        //         Template.<your template name>.destroyed
        //         Template.<your template name>.helpers
        //         Template.<your template name>.events
        //                       and
        //         Template.currentData
        //         Template.parentData, etc.

    interface Event {
        type:string;
        target:HTMLElement;
        currentTarget:HTMLElement;
        which: number;
        stopPropagation():void;
        stopImmediatePropagation():void;
        preventDefault():void;
        isPropagationStopped():boolean;
        isImmediatePropagationStopped():boolean;
        isDefaultPrevented():boolean;
    }

    interface EventHandlerFunction extends Function {
        (event?:Meteor.Event):any;
    }

    interface EventMap {
        [id:string]:Meteor.EventHandlerFunction;
    }

    // Same definition as top-level Template Interface
    interface TemplateBase {
        [templateName: string]: Meteor.Template;
    }

    interface Template {
        rendered: Function;
        created: Function;
        destroyed: Function;
        events(eventMap:Meteor.EventMap): void;
        helpers(helpers:{[id:string]: any}): void;
    }
    /** End definitions for Template **/

    interface LoginWithExternalServiceOptions {
        requestPermissions?: string[];
        requestOfflineToken?: Boolean;
        forceApprovalPrompt?: Boolean;
        userEmail?: string;
        loginStyle?: string;
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

    interface Error {
        error: number;
        reason?: string;
        details?: string;
    }

    interface Connection {
        id: string;
        close: Function;
        onClose: Function;
        clientAddress: string;
        httpHeaders: Object;
    }
}

declare module Mongo {
    interface Selector extends Object {}
    interface Modifier {}
    interface SortSpecifier {}
    interface FieldSpecifier {
        [id: string]: Number;
    }
    enum IdGenerationEnum {
        STRING,
        MONGO
    }
    interface AllowDenyOptions {
        insert?: (userId:string, doc) => boolean;
        update?: (userId, doc, fieldNames, modifier) => boolean;
        remove?: (userId, doc) => boolean;
        fetch?: string[];
        transform?: Function;
    }
}

declare module HTTP {
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
    function id(numberOfChars?: number): string;
    function secret(numberOfChars?: number): string;
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
declare module Accounts {
	var ui: {
		config(options: {
				requestPermissions?: Object;
				requestOfflineToken?: Object;
				forceApprovalPrompt?: Object;
				passwordSignupFields?: string;
			}): void;
	};
	var emailTemplates: Meteor.EmailTemplates;
	function config(options: {
				sendVerificationEmail?: boolean;
				forbidClientAccountCreation?: Boolean;
				restrictCreationByEmailDomain?: string | Function;
				loginExpirationInDays?: number;
				oauthSecretKey?: string;
			}): void;
	function validateLoginAttempt(func: Function): {stop: Function};
	function onLogin(func: Function): {stop: Function};
	function onLoginFailure(func: Function): {stop: Function};
	function onCreateUser(func: Function): void;
	function validateNewUser(func: Function): void;
	function onResetPasswordLink(callback: Function): void;
	function onEmailVerificationLink(callback: Function): void;
	function onEnrollmentLink(callback: Function): void;
	function createUser(options: {
				username?: string;
				email?: string;
				password?: string;
				profile?: Object;
			}, callback?: Function): string;
	function changePassword(oldPassword: string, newPassword: string, callback?: Function): void;
	function forgotPassword(options: {
				email?: string;
			}, callback?: Function): void;
	function resetPassword(token: string, newPassword: string, callback?: Function): void;
	function verifyEmail(token: string, callback?: Function): void;
	function setPassword(userId: string, newPassword: string): void;
	function sendResetPasswordEmail(userId: string, email?: string): void;
	function sendEnrollmentEmail(userId: string, email?: string): void;
	function sendVerificationEmail(userId: string, email?: string): void;
}

declare module Blaze {
	var currentView: Blaze.View;
	function With(data: Object | Function, contentFunc: Function): Blaze.View;
	function If(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): Blaze.View;
	function Unless(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): Blaze.View;
	function Each(argFunc: Function, contentFunc: Function, elseFunc?: Function): Blaze.View;
	function isTemplate(value: any): boolean;
	function render(templateOrView: Template | Blaze.View, parentNode: Node, nextNode?: Node, parentView?: Blaze.View): Blaze.View;
	function renderWithData(templateOrView: Template | Blaze.View, data: Object | Function, parentNode: Node, nextNode?: Node, parentView?: Blaze.View): Blaze.View;
	function remove(renderedView: Blaze.View): void;
	function toHTML(templateOrView: Template | Blaze.View): string;
	function toHTMLWithData(templateOrView: Template | Blaze.View, data: Object | Function): string;
	function getData(elementOrView?: HTMLElement | Blaze.View): Object;
	function getView(element?: HTMLElement): Blaze.View;
	function Template(viewName?: string, renderFunction?: Function): void;
	function TemplateInstance(view: Blaze.View): void;
	interface TemplateInstance {
			data(): Object;
		view(): Object;
		firstNode(): Object;
		lastNode(): Object;
		$(selector: string): Node[];
		findAll(selector: string): HTMLElement[];
		find(selector?: string): HTMLElement;
		autorun(runFunc: Function): Object;
	}

	function View(name?: string, renderFunction?: Function): void;
}

declare module Match {
	function test(value: any, pattern: any): boolean;
}

declare module DDP {
	function connect(url: string): DDP.DDPStatic;
}

declare module EJSON {
	var newBinary: any;
	function addType(name: string, factory: Function): void;
	function toJSONValue(val: EJSON): JSON;
	function fromJSONValue(val: JSON): any;
	function stringify(val: EJSON, options?: {
				indent?: boolean | number | string;
				canonical?: Boolean;
			}): string;
	function parse(str: string): EJSON;
	function isBinary(x: Object): boolean;
	function equals(a: EJSON, b: EJSON, options?: {
				keyOrderSensitive?: boolean;
			}): boolean;
	function clone<T>(val:T): T;
	function CustomType(): void;
	interface CustomType {
			typeName(): string;
		toJSONValue(): JSON;
		clone(): EJSON.CustomType;
		equals(other: Object): boolean;
	}

}

declare module Meteor {
	var users: Mongo.Collection<User>;
	var isClient: boolean;
	var isServer: boolean;
	var settings: {[id:string]: any};
	var isCordova: boolean;
	var release: string;
	function userId(): string;
	function loggingIn(): boolean;
	function user(): Meteor.User;
	function logout(callback?: Function): void;
	function logoutOtherClients(callback?: Function): void;
	function loginWith<ExternalService>(options?: {
				requestPermissions?: string[];
				requestOfflineToken?: boolean;
				forceApprovalPrompt?: Boolean;
				userEmail?: string;
				loginStyle?: string;
			}, callback?: Function): void;
	function loginWithPassword(user: Object | string, password: string, callback?: Function): void;
	function subscribe(name: string, ...args): SubscriptionHandle;
	function call(name: string, ...args): void;
	function apply(name: string, args: EJSON[], options?: {
				wait?: boolean;
				onResultReceived?: Function;
			}, asyncCallback?: Function): void;
	function status(): Meteor.StatusEnum;
	function reconnect(): void;
	function disconnect(): void;
	function onConnection(callback: Function): void;
	function publish(name: string, func: Function): void;
	function methods(methods: Object): void;
	function wrapAsync(func: Function, context?: Object): any;
	function startup(func: Function): void;
	function setTimeout(func: Function, delay: number): number;
	function setInterval(func: Function, delay: number): number;
	function clearInterval(id: number): void;
	function clearTimeout(id: number): void;
	function absoluteUrl(path?: string, options?: {
				secure?: boolean;
				replaceLocalhost?: Boolean;
				rootUrl?: string;
			}): string;
	function Error(error: string, reason?: string, details?: string): void;
}

declare module Mongo {
	function Collection<T>(name: string, options?: {
				connection?: Object;
				idGeneration?: string;
				transform?: Function;
			}): void;
	interface Collection<T> {
			insert(doc: Object, callback?: Function): string;
		update(selector: Mongo.Selector, modifier: Mongo.Modifier, options?: {
				multi?: boolean;
				upsert?: Boolean;
			}, callback?: Function): number;
		find(selector?: Mongo.Selector, options?: {
				sort?: Mongo.SortSpecifier;
				skip?: number;
				limit?: number;
				fields?: Mongo.FieldSpecifier;
				reactive?: boolean;
				transform?: Function;
			}): Mongo.Cursor<T>;
		findOne(selector?: Mongo.Selector, options?: {
				sort?: Mongo.SortSpecifier;
				skip?: number;
				fields?: Mongo.FieldSpecifier;
				reactive?: boolean;
				transform?: Function;
			}): T;
		remove(selector: Mongo.Selector, callback?: Function): void;
		upsert(selector: Mongo.Selector, modifier: Mongo.Modifier, options?: {
				multi?: boolean;
			}, callback?: Function): {numberAffected?: number; insertedId?: string;};
		allow(options: {
				insert?: (userId:string, doc) => boolean;
				 update?: (userId, doc, fieldNames, modifier) => boolean;
				 remove?: (userId, doc) => boolean;
				fetch?: string[];
				transform?: Function;
			}): boolean;
		deny(options: {
				insert?: (userId:string, doc) => boolean;
				 update?: (userId, doc, fieldNames, modifier) => boolean;
				 remove?: (userId, doc) => boolean;
				fetch?: string[];
				transform?: Function;
			}): boolean;
	}

	function ObjectID(hexString: string): void;
	function Cursor<T>(): void;
	interface Cursor<T> {
			forEach(callback: Function, thisArg?: any): void;
		map(callback: Function, thisArg?: any): void;
		fetch(): Array<T>;
		count(): number;
		observe(callbacks: Object): Meteor.LiveQueryHandle;
		observeChanges(callbacks: Object): Meteor.LiveQueryHandle;
	}

}

declare module Tracker {
	var active: boolean;
	var currentComputation: Tracker.Computation;
	function Computation(): void;
	interface Computation {
			stopped(): boolean;
		invalidated(): boolean;
		firstRun(): boolean;
		onInvalidate(callback: Function): void;
		invalidate(): void;
		stop(): void;
	}

	function flush(): void;
	function autorun(runFunc: Function): Tracker.Computation;
	function nonreactive(func: Function): void;
	function onInvalidate(callback: Function): void;
	function afterFlush(callback: Function): void;
	function Dependency(): void;
	interface Dependency {
			depend(fromComputation?: Tracker.Computation): boolean
		changed(): void;
		hasDependents(): boolean
	}

}

declare module Assets {
	function getText(assetPath: string, asyncCallback?: Function): string;
	function getBinary(assetPath: string, asyncCallback?: Function): EJSON;
}

declare module App {
	function info(options: {
				id?: string;
				 version?: string;
				 name?: string;
				 description?: string;
				 author?: string;
				 email?: string;
				 website?: string;
			}): void;
	function setPreference(name: string, value: string): void;
	function configurePlugin(pluginName: string, config: Object): void;
	function icons(icons: Object): void;
	function launchScreens(launchScreens: Object): void;
}

declare module Package {
	function describe(options: {
				summary?: string;
				version?: string;
				name?: string;
				git?: string;
				documentation?: string;
			}): void;
	function onUse(func: Function): void;
	function onTest(func: Function): void;
	function registerBuildPlugin(options?: {
				name?: string;
				use?: string | string[];
				sources?: string[];
				npmDependencies?: Object;
			}): void;
}

declare module Npm {
	function depends(dependencies:{[id:string]:string}): void;
	function require(name: string): void;
}

declare module Cordova {
	function depends(dependencies:{[id:string]:string}): void;
}

declare module Session {
	function set(key: string, value: EJSON | any /** Undefined **/): void;
	function setDefault(key: string, value: EJSON | any /** Undefined **/): void;
	function get(key: string): any;
	function equals(key: string, value: string | number | boolean | any /** Null **/ | any /** Undefined **/): boolean;
}

declare module HTTP {
	function call(method: string, url: string, options?: {
				content?: string;
				data?: Object;
				query?: string;
				params?: Object;
				auth?: string;
				headers?: Object;
				timeout?: number;
				followRedirects?: boolean;
			}, asyncCallback?: Function): HTTP.HTTPResponse;
	function get(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse;
	function post(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse;
	function put(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse;
	function del(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse;
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
			}): void;
}

declare function Subscription(): void;
declare module Subscription {
	var connection: Meteor.Connection;
	var userId: string;
	function error(error: Error): void;
	function stop(): void;
	function onStop(func: Function): void;
	function added(collection: string, id: string, fields: Object): void;
	function changed(collection: string, id: string, fields: Object): void;
	function removed(collection: string, id: string): void;
	function ready(): void;
}

declare function ReactiveVar(initialValue: any, equalsFunc?: (oldVal:any, newVal:any)=>boolean): void;
declare module ReactiveVar {
	function get(): any;
	function set(newValue: any): void;
}

declare function Template(): void;
declare module Template {
	var onCreated; /** TODO: add return value **/
	var onRendered; /** TODO: add return value **/
	var onDestroyed; /** TODO: add return value **/
	var created: Function;
	var rendered: Function;
	var destroyed: Function;
	var body: Meteor.TemplateBase;
	function helpers(helpers:{[id:string]: any}): void;
	function events(eventMap: {[actions: string]: Function}): void;
	function instance(): Blaze.TemplateInstance;
	function currentData(): {};
	function parentData(numLevels?: number): {};
	function registerHelper(name: string, helperFunction: Function): void;
}

declare function CompileStep(): void;
declare module CompileStep {
	var inputSize; /** TODO: add return value **/
	var inputPath; /** TODO: add return value **/
	var fullInputPath; /** TODO: add return value **/
	var pathForSourceMap; /** TODO: add return value **/
	var packageName; /** TODO: add return value **/
	var rootOutputPath; /** TODO: add return value **/
	var arch; /** TODO: add return value **/
	var fileOptions; /** TODO: add return value **/
	var declaredExports; /** TODO: add return value **/
	function read(n?: number); /** TODO: add return value **/
	function addHtml(options: {
				section?: string;
				data?: string;
			}); /** TODO: add return value **/
	function addStylesheet(options: {
			}, path: string, data: string, sourceMap: string); /** TODO: add return value **/
	function addJavaScript(options: {
				path?: string;
				data?: string;
				sourcePath?: string;
			}); /** TODO: add return value **/
	function addAsset(options: {
			}, path: string, data: any /** Buffer **/ | string); /** TODO: add return value **/
	function error(options: {
			}, message: string, sourcePath?: string, line?: number, func?: string); /** TODO: add return value **/
}

declare function PackageAPI(): void;
declare module PackageAPI {
	function use(packageNames: string | string[], architecture?: string, options?: {
				weak?: boolean;
				unordered?: Boolean;
			}): void;
	function imply(packageSpecs: string | string[]): void;
	function addFiles(filename: string | string[], architecture?: string): void;
	function versionsFrom(meteorRelease: string | string[]): void;
	// function export(exportedObject: string, architecture?: string): void;
}

