// Type definitions for Meteor 1.3
// Project: http://www.meteor.com/
// Definitions by: Dave Allen <https://github.com/fullflavedave>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "meteor/check" {
	export module Match {
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

	export function check(value: any, pattern: any): void;
}

declare module "meteor/meteor" {
	import {Mongo} from "meteor/mongo";
	import {Blaze} from "meteor/blaze";
	import {EJSON} from "meteor/ejson";

	export module Meteor {
  	/** Global props **/
		var isClient: boolean;
		var isCordova: boolean;
		var isServer: boolean;
		var release: string;
		var settings: { [id: string]: any };
		/** props **/

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

		/** Status **/
		enum StatusEnum {
			connected,
			connecting,
			failed,
			waiting,
			offline
		}
		function status(): Meteor.StatusEnum;
		/** Status **/

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

		/** Login **/
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
		function logout(callback?: Function): void;
		function logoutOtherClients(callback?: Function): void;
		/** Login **/

		/** Email **/
		interface EmailFields {
			subject?: Function;
			text?: Function;
		}
		interface EmailTemplates {
			from: string;
			siteName: string;
			resetPassword: Meteor.EmailFields;
			enrollAccount: Meteor.EmailFields;
			verifyEmail: Meteor.EmailFields;
		}
		/** Email **/

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

		/** Connection **/
		interface Connection {
			id: string;
			close: Function;
			onClose: Function;
			clientAddress: string;
			httpHeaders: Object;
		}
		function onConnection(callback: Function): void;
		function reconnect(): void;
		function disconnect(): void;
		/** Connection **/

		/** Pub/Sub **/
		interface SubscriptionHandle {
			stop(): void;
			ready(): boolean;
		}
		interface LiveQueryHandle {
			stop(): void;
		}
		function publish(name: string, func: Function): void;
		function subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
		/** Pub/Sub **/

		/** utils **/
		function startup(func: Function): void;
		function wrapAsync(func: Function, context?: Object): any;
		/** utils **/
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

declare module "meteor/ddp" {
	import {Meteor} from "meteor/meteor";

	export module DDP {
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

		interface DDPStatus {
			connected: boolean;
			status: Meteor.StatusEnum;
			retryCount: number;
 		  retryTime?: number;
			reason?: string;
		}

		function connect(url: string): DDPStatic;
	}
}

declare module "meteor/ddp-common" {
	export module DDPCommon {
		interface MethodInvocation {
			new (options: {}): MethodInvocation;

			unblock(): void;

			setUserId(userId: number): void;
		}
	}
}

declare module "meteor/mongo" {
  import {Meteor, Subscription} from "meteor/meteor";

	export module Mongo {
		interface Selector {
			[key: string]: any;
		}
		interface Selector extends Object { }
		interface Modifier { }
		interface SortSpecifier { }
		interface FieldSpecifier {
			[id: string]: Number;
		}

		interface AllowDenyOptions {
			insert?: (userId: string, doc: any) => boolean;
			update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
			remove?: (userId: string, doc: any) => boolean;
			fetch?: string[];
			transform?: Function;
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
			}, callback?: Function): { numberAffected?: number; insertedId?: string; };
			_ensureIndex(indexName: string, options?: { [key: string]: any }): void;
		}

		var Cursor: CursorStatic;
		interface CursorStatic {
			new <T>(): Cursor<T>;
		}
    interface ObserveCallbacks {
      added?(document: Object): void
      addedAt?(document: Object, atIndex: number, before: Object): void
      changed?(newDocument: Object, oldDocument: Object): void
      changedAt?(newDocument: Object, oldDocument: Object, indexAt: number): void
      removed?(oldDocument: Object): void
      removedAt?(oldDocument: Object, atIndex: number): void
      movedTo?(document: Object, fromIndex: number, toIndex: number, before: Object): void
    }
		interface ObserveChangesCallbacks {
      added?(id: string, fields: Object): void
      addedBefore?(id: string, fields: Object, before: Object): void
      changed?(id: string, fields: Object): void
      movedBefore?(id: string, before: Object): void
			removed?(id: string): void
		}
		interface Cursor<T> {
			count(): number;
			fetch(): Array<T>;
			forEach(callback: <T>(doc: T, index: number, cursor: Cursor<T>) => void, thisArg?: any): void;
			map<U>(callback: (doc: T, index: number, cursor: Cursor<T>) => U, thisArg?: any): Array<U>;
      observe(callbacks: ObserveCallbacks): Meteor.LiveQueryHandle;
      observeChanges(callbacks: ObserveChangesCallbacks): Meteor.LiveQueryHandle;
		}

		var ObjectID: ObjectIDStatic;
		interface ObjectIDStatic {
			new (hexString?: string): ObjectID;
		}
		interface ObjectID {}
	}
}

declare module "meteor/http" {
	export module HTTP {
		interface HTTPRequest {
			content?: string;
			data?: any;
			query?: string;
			params?: { [id: string]: string };
			auth?: string;
			headers?: { [id: string]: string };
			timeout?: number;
			followRedirects?: boolean;
		}

		interface HTTPResponse {
			statusCode?: number;
			headers?: { [id: string]: string };
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

declare module "meteor/random" {
	export module Random {
		function id(numberOfChars?: number): string;
		function secret(numberOfChars?: number): string;
		function fraction(): number;
		function hexString(numberOfDigits: number): string; // @param numberOfDigits, @returns a random hex string of the given length
		function choice(array: any[]): string; // @param array, @return a random element in array
		function choice(str: string): string; // @param str, @return a random char in str
	}
}

interface Map<V> {
  [index: string]: V;
}

declare module "meteor/blaze" {
	import {Meteor} from "meteor/meteor";

	export module Blaze {
		class View {
      new (name?: string, renderFunction?: Function): View;
			name: string;
			parentView: View;
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
			template: Template;
      templateInstance(): TemplateInstance;
		}
		var currentView: View;

		function isTemplate(value: any): boolean;

		class Template {
      new(viewName?: string, renderFunction?: Function): Template;
      viewName: string;
      renderFunction: Function;
      constructView(): View;
			head: Template;
			find(selector: string): Template;
			findAll(selector: string): Template[];
			$: any;
      onCreated(cb: Function): void;
      onRendered(cb: Function): void;
      onDestroyed(cb: Function): void;
      created: Function;
      rendered: Function;
      destroyed: Function;
      helpers(helpersMap: Map<Function>): void;
      events(eventsMap: Map<Function>): void
      static registerHelper(name: string, func: Function): void;
      static instance(): TemplateInstance;
      static currentData(): any
      static parentData(numLevels: number): any
		}

		class TemplateInstance {
			new (view: View): TemplateInstance;
			$(selector: string): any;
			autorun(runFunc: Function): Object;
			data: Object;
			find(selector?: string): TemplateInstance;
			findAll(selector: string): TemplateInstance[];
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

declare module "meteor/browser-policy" {
	export module BrowserPolicy {
		interface framing {
			disallow(): void;
			restrictToOrigin(origin: string): void;
			allowAll(): void;
		}

		interface content {
			allowEval(): void;
			allowInlineStyles(): void;
			allowInlineScripts(): void;
			allowSameOriginForAll(): void;
			allowDataUrlForAll(): void;
			allowOriginForAll(origin: string): void;
			allowImageOrigin(origin: string): void;
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
			//TODO: add the basic content types
			// allow<content type>Origin(origin)
			// allow<content type>DataUrl()
			// allow<content type>SameOrigin()
			// disallow<content type>()
		}
	}
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

	export module Tinytest {
		function add(description: string, func: (test: ITinytestAssertions) => void): void;
		function addAsync(description: string, func: (test: ITinytestAssertions) => void): void;
	}
}

declare module "meteor/accounts-base" {
	import {Meteor} from "meteor/meteor";

	export module Accounts {
		function addEmail(userId: string, newEmail: string, verified?: boolean): void;
		function changePassword(oldPassword: string, newPassword: string, callback?: Function): void;
		function createUser(options: {
			username?: string;
			email?: string;
			password?: string;
			profile?: Object;
		}, callback?: Function): string;
		var emailTemplates: Meteor.EmailTemplates;
		function findUserByEmail(email: string): Object;
		function findUserByUsername(username: string): Object;
		function forgotPassword(options: {
			email?: string;
		}, callback?: Function): void;
		function onEmailVerificationLink(callback: Function): void;
		function onEnrollmentLink(callback: Function): void;
		function onResetPasswordLink(callback: Function): void;
		function removeEmail(userId: string, email: string): void;
		function resetPassword(token: string, newPassword: string, callback?: Function): void;
		function sendEnrollmentEmail(userId: string, email?: string): void;
		function sendResetPasswordEmail(userId: string, email?: string): void;
		function sendVerificationEmail(userId: string, email?: string): void;
		function setPassword(userId: string, newPassword: string, options?: {
			logout?: Object;
		}): void;
		function setUsername(userId: string, newUsername: string): void;
		var ui: {
			config(options: {
				requestPermissions?: Object;
				requestOfflineToken?: Object;
				forceApprovalPrompt?: Object;
				passwordSignupFields?: string;
			}): void;
		};
		function verifyEmail(token: string, callback?: Function): void;
		function config(options: {
			sendVerificationEmail?: boolean;
			forbidClientAccountCreation?: boolean;
			restrictCreationByEmailDomain?: string | Function;
			loginExpirationInDays?: number;
			oauthSecretKey?: string;
		}): void;
		function onLogin(func: Function): { stop: () => void };
		function onLoginFailure(func: Function): { stop: () => void };
		function user(): Meteor.User;
		function userId(): string;
		function loggingIn(): boolean;
		function logout(callback?: Function): void;
		function logoutOtherClients(callback?: Function): void;
		function onCreateUser(func: Function): void;
		function validateLoginAttempt(func: Function): { stop: () => void };
		function validateNewUser(func: Function): boolean;
		function loginServicesConfigured(): boolean;
		function onPageLoadLogin(func: Function): void;
	}
}

declare module App {
	function accessRule(domainRule: string, options?: {
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

declare module "meteor/ejson" {
	export module EJSON {
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

declare module "meteor/tracker" {
	export module Tracker {
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

		var Dependency: DependencyStatic;
		interface DependencyStatic {
			new (): Dependency;
		}
		interface Dependency {
			changed(): void;
			depend(fromComputation?: Tracker.Computation): boolean;
			hasDependents(): boolean;
		}

		var active: boolean;
		function afterFlush(callback: Function): void;
		function autorun(runFunc: (computation: Tracker.Computation) => void, options?: {
			onError?: Function;
		}): Tracker.Computation;
		var currentComputation: Tracker.Computation;
		function flush(): void;
		function nonreactive(func: Function): void;
		function onInvalidate(callback: Function): void;
	}
}

declare module "meteor/session" {
	import {EJSON} from "meteor/ejson";

	export module Session {
		function equals(key: string, value: string | number | boolean | any): boolean;
		function get(key: string): any;
		function set(key: string, value: EJSONable | any): void;
		function setDefault(key: string, value: EJSONable | any): void;
	}
}

declare module "meteor/email" {
	export module Email {
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

declare module "meteor/templating" {
	import {Blaze} from "meteor/blaze";
	import {Meteor} from "meteor/meteor";

	//export var Template: Map<string, TemplateStatic>;
	class Template extends Blaze.Template {
    static body: Template;
    [index: string]: any | Template;
	}
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
}

declare module Cordova {
	function depends(dependencies: { [id: string]: string }): void;
}

declare module Npm {
	function depends(dependencies: { [id: string]: string }): void;
	function require(name: string): any;
}

declare module Package {
	function describe(options: {
		summary?: string;
		version?: string;
		name?: string;
		git?: string;
		documentation?: string;
		debugOnly?: boolean;
		prodOnly?: boolean;
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

declare var PackageAPI: PackageAPI;
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
