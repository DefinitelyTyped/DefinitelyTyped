// Type definitions for vk-io 4.0.0-beta.3
// Project: https://github.com/negezor/vk-io
// Definitions by: Serge Shkurko <https://github.com/SergeShkurko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="node"/>

declare module 'utils/helpers' {
	/**
	 * Creates a key and value from the keys
	 *
	 * @param keys
	 */
	export const keyMirror: (keys: any) => {};
	/**
	 * Returns method for execute
	 *
	 * @param method
	 * @param params
	 */
	export const getExecuteMethod: (method: any, params?: {}) => string;
	/**
	 * Returns chain for execute
	 *
	 * @param methods
	 */
	export const getChainReturn: (methods: any) => string;
	/**
	 * Resolve task
	 *
	 * @param tasks
	 * @param results
	 */
	export const resolveExecuteTask: (tasks: any, result: any) => void;
	/**
	 * Returns random ID
	 */
	export const getRandomId: () => string;
	/**
	 * Returns the URL of a small photo
	 *
	 * @param photo
	 */
	export const getSmallPhoto: (photo: any) => any;
	/**
	 * Returns the URL of a medium photo
	 *
	 * @param photo
	 */
	export const getMediumPhoto: (photo: any) => any;
	/**
	 * Returns the URL of a large photo
	 *
	 * @param photo
	 */
	export const getLargePhoto: (photo: any) => any;
	/**
	 * Delay N-ms
	 *
	 * @param delayed
	 */
	export const delay: (delayed: any) => Promise<{}>;

}
declare module 'api/request' {
	export default class Request {
	    /**
	     * Constructor
	     *
	     * @param method
	     * @param params
	     */
		constructor(method: any, params?: {});
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Adds attempt
	     */
		addAttempt(): void;
	    /**
	     * Returns string to execute
	     */
		toString(): string;
	}

}
declare module 'api/methods' {
	const _default: string[];
	export default _default;

}
declare module 'errors/vk' {
	/**
	 * General error class
	 *
	 * @public
	 */
	export default class VKError extends Error {
	    /**
	     * Constructor
	     *
	     * @param payload
	     */
		constructor({ code, message }: {
			code: any;
			message: any;
		});
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Returns property for json
	     */
		toJSON(): {};
	}

}
declare module 'utils/constants' {
	/**
	 * VK API version
	 *
	 * @type
	 */
	export const API_VERSION = "5.73";
	/**
	 * Chat peer ID
	 *
	 * @type
	 */
	export const CHAT_PEER = 2000000000;
	/**
	 * Blank html redirect
	 *
	 * @type
	 */
	export const CALLBACK_BLANK = "https://oauth.vk.com/blank.html";
	/**
	 * User-Agent for standalone auth
	 *
	 * @type
	 */
	export const DESKTOP_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36";
	/**
	 * Minimum time interval api with error
	 *
	 * @type
	 */
	export const MINIMUM_TIME_INTERVAL_API = 1133;
	/**
	 * Default options
	 *
	 * @type
	 *
	 * @property [token]               Access token
	 * @property {Agent}   [agent]               HTTPS agent
	 * @property [lang]                The return data language
	 *
	 * @property [login]               User login (phone number or email)
	 * @property [phone]               User phone number
	 * @property [password]            User password
	 *
	 * @property  [app]                 Application ID
	 * @property  [key]                 Secret application key
	 * @property  [scope]               List of permissions
	 *
	 * @property   [apiMode]             Query mode (sequential|parallel|parallel_selected)
	 * @property   [apiWait]             Time to wait before re-querying
	 * @property   [apiLimit]            Requests per second
	 * @property   [apiTimeout]          Wait time for one request
	 * @property   [apiHeaders]          Headers sent to the API
	 * @property   [apiAttempts]         The number of retries at calling
	 * @property   [apiExecuteCount]     Number of requests per execute
	 * @property    [apiExecuteMethods]   Methods for call execute (apiMode=parallel-selected)
	 *
	 * @property   [uploadTimeout]       Wait time for one request
	 *
	 * @property   [pollingWait]         Time to wait before re-querying
	 * @property   [pollingGroupId]      Group ID for polling
	 * @property   [pollingAttempts]     The number of retries at calling
	 *
	 * @property [webhookPath]         Webhook path
	 * @property [webhookSecret]       Webhook secret key
	 * @property [webhookConfirmation] Webhook confirmation key
	 *
	 * @property   [collectAttempts]     The number of retries at calling
	 */
	export const defaultOptions: {
		token: any;
		agent: any;
		lang: any;
		login: any;
		phone: any;
		password: any;
		app: any;
		key: any;
		scope: string;
		apiMode: string;
		apiWait: number;
		apiLimit: number;
		apiAttempts: number;
		apiTimeout: number;
		apiHeaders: {
			'User-Agent': string;
		};
		apiExecuteCount: number;
		apiExecuteMethods: string[];
		uploadTimeout: number;
		pollingWait: number;
		pollingAttempts: number;
		pollingGroupId: any;
		webhookPath: any;
		webhookSecret: any;
		webhookConfirmation: any;
		collectAttempts: number;
	};
	/**
	 * Default extensions for attachments
	 *
	 * @type
	 */
	export const defaultExtensions: {
		photo: string;
		video: string;
		audio: string;
		voice: string;
		graffiti: string;
	};
	/**
	 * Default content type for attachments
	 *
	 * @type
	 */
	export const defaultContentTypes: {
		photo: string;
		video: string;
		audio: string;
		voice: string;
		graffiti: string;
	};
	/**
	 * Sources of captcha
	 *
	 * @type
	 */
	export const captchaTypes: {};
	/**
	 * API error codes
	 *
	 * @type
	 */
	export const apiErrors: {
		UNKNOWN_ERROR: number;
		APP_SWITCHED_OFF: number;
		UNKNOWN_METHOD: number;
		AUTH_FAILURE: number;
		TOO_MANY_REQUESTS: number;
		SCOPE_NEEDED: number;
		INCORRECT_REQUEST: number;
		TOO_MANY_SIMILAR_ACTIONS: number;
		INTERNAL_ERROR: number;
		RESPONSE_SIZE_TOO_BIG: number;
		CAPTCHA_REQUIRED: number;
		ACCESS_DENIED: number;
		USER_VALIDATION_REQUIRED: number;
		PAGE_BLOCKED: number;
		STANDALONE_ONLY: number;
		STANDALONE_AND_OPEN_API_ONLY: number;
		METHOD_DISABLED: number;
		CONFIRMATION_REQUIRED: number;
		GROUP_TOKEN_NOT_VALID: number;
		APP_TOKEN_NOT_VALID: number;
		WRONG_PARAMETER: number;
		INCORRECT_USER_ID: number;
		ALBUM_ACCESS_DENIED: number;
		AUDIO_ACCESS_DENIED: number;
		GROUP_ACCESS_DENIED: number;
		ALBUM_OVERFLOW: number;
		PAYMENTS_DISABLED: number;
		COMMERCIAL_ACCESS_DENIED: number;
		COMMERCIAL_ERROR: number;
	};
	/**
	 * Auth error codes
	 *
	 * @type
	 */
	export const authErrors: {};
	/**
	 * Upload error codes
	 *
	 * @type
	 */
	export const uploadErrors: {};
	/**
	 * Updates error codes
	 *
	 * @type
	 */
	export const updatesErrors: {};
	/**
	 * Collect error codes
	 *
	 * @type
	 */
	export const collectErrors: {};
	/**
	 * Snippets error codes
	 *
	 * @type
	 */
	export const snippetsErrors: {};
	/**
	 * List of user permissions and their bit mask
	 *
	 * @type {Map}
	 */
	export const userScopes: Map<string, number>;
	/**
	 * List of group permissions and their bit mask
	 *
	 * @type {Map}
	 */
	export const groupScopes: Map<string, number>;
	/**
	 * VK Platforms
	 *
	 * @type {Map}
	 */
	export const platforms: Map<number, string>;
	/**
	 * Parse attachments with RegExp
	 *
	 * @type {RegExp}
	 */
	export const parseAttachment: RegExp;
	/**
	 * Parse resource with RegExp
	 *
	 * @type {RegExp}
	 */
	export const parseResource: RegExp;
	/**
	 * Parse owner resource with RegExp
	 *
	 * @type {RegExp}
	 */
	export const parseOwnerResource: RegExp;

}
declare module 'errors/api' {
	import VKError from 'errors/vk';
	export default class APIError extends VKError {
	    /**
	     * Constructor
	     *
	     * @param payload
	     */
		constructor(payload: any);
	}

}
declare module 'errors/auth' {
	import VKError from 'errors/vk';
	export default class AuthError extends VKError {
	}

}
declare module 'errors/upload' {
	import VKError from 'errors/vk';
	export default class UploadError extends VKError {
	}

}
declare module 'errors/collect' {
	import VKError from 'errors/vk';
	export default class CollectError extends VKError {
	    /**
	     * Constructor
	     *
	     * @param payload
	     */
		constructor({ message, code, errors }: {
			message: any;
			code: any;
			errors: any;
		});
	}

}
declare module 'errors/updates' {
	import VKError from 'errors/vk';
	export default class UpdatesError extends VKError {
	}

}
declare module 'errors/execute' {
	import VKError from 'errors/vk';
	export default class ExecuteError extends VKError {
	    /**
	     * Constructor
	     *
	     * @param payload
	     */
		constructor(payload: any);
	}

}
declare module 'errors/snippets' {
	import VKError from 'errors/vk';
	export default class SnippetsError extends VKError {
	}

}
declare module 'errors/streaming-rule' {
	import VKError from 'errors/vk';
	export default class StreamingRuleError extends VKError {
	    /**
	     * Constructor
	     *
	     * @param payload
	     */
		constructor({ message, error_code: code }: {
			message: any;
			error_code: any;
		});
	}

}
declare module 'errors' {
	import VKError from 'errors/vk';
	import APIError from 'errors/api';
	import AuthError from 'errors/auth';
	import UploadError from 'errors/upload';
	import CollectError from 'errors/collect';
	import UpdatesError from 'errors/updates';
	import ExecuteError from 'errors/execute';
	import SnippetsError from 'errors/snippets';
	import StreamingRuleError from 'errors/streaming-rule';
	export { apiErrors, authErrors, uploadErrors, updatesErrors, collectErrors, snippetsErrors } from 'utils/constants';
	export { VKError, APIError, AuthError, UploadError, CollectError, UpdatesError, ExecuteError, SnippetsError, StreamingRuleError };
	export default VKError;

}
declare module 'auth/helpers' {
	import { URL } from 'url';
	/**
	 * Returns the entire permission bit mask
	 */
	export const getAllUsersPermissions: () => number;
	/**
	 * Returns the entire permission bit mask
	 */
	export const getAllGroupsPermissions: () => number;
	/**
	 * Returns the bit mask of the user permission by name
	 *
	 * @param {Array|string} scope
	 */
	export const getUsersPermissionsByName: (scope: any) => number;
	/**
	 * Returns the bit mask of the group permission by name
	 *
	 * @param {Array|string} scope
	 */
	export const getGroupsPermissionsByName: (scope: any) => number;
	/**
	 * Parse form
	 *
	 * @param $
	 */
	export const parseFormField: ($: any) => {
		action: any;
		fields: {};
	};
	/**
	 * Returns full URL use Response
	 *
	 * @param action
	 * @param response
	 *
	 * @type {URL}
	 */
	export const getFullURL: (action: any, { url }: {
		url: any;
	}) => URL;

}
declare module 'utils/fetch-cookie' {
	export const CookieJar: any;
	export const fetchCookieDecorator: (jar?: any) => (url: any, options?: {}) => Promise<any>;
	export const fetchCookieFollowRedirectsDecorator: (jar: any) => (url: any, options?: {}) => any;

}
declare module 'auth/account-verification' {
	export default class AccountVerification {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Executes the HTTP request
	     *
	     * @param url
	     * @param options
	     */
		fetch(url: any, options?: {}): any;
	    /**
	     * Runs authorization
	     */
		run(redirectUri: any): Promise<{
			user: number;
			token: string;
		}>;
	    /**
	     * Process two-factor form
	     *
	     * @param response
	     * @param $
	     */
		processTwoFactorForm(response: any, $: any): Promise<any>;
	    /**
	     * Process security form
	     *
	     * @param response
	     * @param $
	     */
		processSecurityForm(response: any, $: any): Promise<any>;
	    /**
	     * Process validation form
	     *
	     * @param response
	     * @param $
	     */
		processValidateForm(response: any, $: any): Promise<any>;
	    /**
	     * Process captcha form
	     *
	     * @param response
	     * @param $
	     */
		processCaptchaForm(response: any, $: any): Promise<any>;
	}

}
declare module 'api/workers/sequential' {
	export default function sequential(next: any): void;

}
declare module 'api/workers/parallel' {
	export default function parallel(next: any): Promise<void>;

}
declare module 'api/workers/parallel-selected' {
	export default function parallelSelected(next: any): Promise<void>;

}
declare module 'api/workers' {
	import parallel from 'api/workers/parallel';
	import sequential from 'api/workers/sequential';
	import parallelSelected from 'api/workers/parallel-selected';
	export { parallel, sequential, parallelSelected };

}
declare module 'api' {
	import { sequential } from 'api/workers';
	/**
	 * Working with API methods
	 *
	 * @public
	 */
	export default class API {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Returns the current used API version
	     */
		readonly API_VERSION: string;
	    /**
	     * Checks that this is a API method
	     *
	     * @param method
	     */
		isMethod(method: any): boolean;
	    /**
	     * Call execute method
	     *
	     * @param params
	     */
		execute(params: any): any;
	    /**
	     * Call execute procedure
	     *
	     * @param name
	     * @param params
	     */
		procedure(name: any, params: any): any;
	    /**
	     * Call raw method
	     *
	     * @param method
	     * @param params
	     */
		call(method: any, params: any): any;
	    /**
	     * Adds request for queue
	     *
	     * @param {Request} request
	     */
		callWithRequest(request: any): any;
	    /**
	     * Adds method to queue
	     *
	     * @param method
	     * @param params
	     */
		enqueue(method: any, params: any): any;
	    /**
	     * Adds an element to the beginning of the queue
	     *
	     * @param {Request} request
	     */
		requeue(request: any): void;
	    /**
	     * Running queue
	     */
		worker(): void;
	    /**
	     * Calls the api method
	     *
	     * @param request
	     */
		callMethod(request: any): Promise<void>;
	    /**
	     * Error API handler
	     *
	     * @param {Request} request
	     * @param error
	     */
		handleError(request: any, error: any): Promise<void>;
	    /**
	     * Returns request handler
	     *
	     * @param mode
	     */
		getRequestHandler(mode?: string): typeof sequential;
	}

}
declare module 'auth/direct' {
	export default class DirectAuth {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param options
	     */
		constructor(vk: any, { app, key, agent, scope, login, phone, password }?: {
			app?: any;
			key?: any;
			agent?: any;
			scope?: any;
			login?: any;
			phone?: any;
			password?: any;
		});
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Executes the HTTP request
	     *
	     * @param url
	     * @param options
	     */
		fetch(url: any, options?: {}): any;
	    /**
	     * Returns permission page
	     *
	     * @param query
	     */
		getPermissionsPage(query?: {}): any;
	    /**
	     * Runs authorization
	     */
		run(): Promise<{
			email: any;
			user: number;
			token: any;
			expires: number;
		}>;
	    /**
	     * Process captcha
	     *
	     * @param payload
	     */
		processCaptcha({ captcha_sid: sid, captcha_img: src }: {
			captcha_sid: any;
			captcha_img: any;
		}): Promise<any>;
	    /**
	     * Process two-factor
	     *
	     * @param response
	     */
		processTwoFactor({ validation_type: validationType, phone_mask: phoneMask }: {
			validation_type: any;
			phone_mask: any;
		}): Promise<any>;
	    /**
	     * Process security form
	     *
	     * @param response
	     * @param $
	     */
		processSecurityForm(response: any, $: any): Promise<any>;
	}

}
declare module 'auth/implicit-flow' {
	export default class ImplicitFlow {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param options
	     */
		constructor(vk: any, { app, key, agent, scope, login, phone, password }?: {
			app?: any;
			key?: any;
			agent?: any;
			scope?: any;
			login?: any;
			phone?: any;
			password?: any;
		});
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Returns CookieJar
	     */
		getCookieJar(): any;
	    /**
	     * Sets the CookieJar
	     *
	     * @param  jar
	     */
		setCookieJar(jar: any): this;
	    /**
	     * Returns cookie
	     */
		getCookie(): Promise<{
			'login.vk.com': any;
			'vk.com': any;
		}>;
	    /**
	     * Executes the HTTP request
	     *
	     * @param url
	     * @param options
	     */
		fetch(url: any, options?: {}): any;
	    /**
	     * Runs authorization
	     */
		run(): Promise<{
			response: any;
		}>;
	    /**
	     * Process form auth
	     *
	     * @param response
	     * @param $
	     */
		processAuthForm(response: any, $: any): Promise<any>;
	    /**
	     * Process two-factor form
	     *
	     * @param response
	     * @param $
	     */
		processTwoFactorForm(response: any, $: any): Promise<any>;
	    /**
	     * Process security form
	     *
	     * @param response
	     * @param $
	     */
		processSecurityForm(response: any, $: any): Promise<any>;
	}

}
declare module 'auth/implicit-flow-user' {
	import ImplicitFlow from 'auth/implicit-flow';
	export default class ImplicitFlowUser extends ImplicitFlow {
	    /**
	     * Returns permission page
	     */
		getPermissionsPage(): any;
	    /**
	     * Starts authorization
	     */
		run(): Promise<{
			response: {
				email: string;
				user: number;
				token: string;
				expires: number;
			}
		}>;
	}

}
declare module 'auth/implicit-flow-groups' {
	import ImplicitFlow from 'auth/implicit-flow';
	export default class ImplicitFlowGroups extends ImplicitFlow {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param options
	     */
		constructor(vk: any, options: any);
	    /**
	     * Returns permission page
	     *
	     * @param groups
	     */
		getPermissionsPage(): any;
	    /**
	     * Starts authorization
	     */
		run(): Promise<{
			response: any
		}>;
	}

}
declare module 'auth' {
	import DirectAuth from 'auth/direct';
	import ImplicitFlowUser from 'auth/implicit-flow-user';
	import ImplicitFlowGroups from 'auth/implicit-flow-groups';
	export default class Auth {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Standalone authorization with login & password
	     */
		implicitFlowUser(options?: {}): ImplicitFlowUser;
	    /**
	     * Standalone authorization with login & password for group
	     *
	     * @param groups
	     * @param options
	     */
		implicitFlowGroups(groups: any, options?: {}): ImplicitFlowGroups;
	    /**
	     * Direct authorization with login & login in user application
	     */
		direct(): DirectAuth;
	    /**
	     * Direct authorization with login & login in android application
	     */
		androidApp(): DirectAuth;
	    /**
	     * Direct authorization with login & login in windows application
	     */
		windowsApp(): DirectAuth;
	    /**
	     * Direct authorization with login & login in windows phone application
	     */
		windowsPhoneApp(): DirectAuth;
	    /**
	     * Direct authorization with login & login in iphone application
	     */
		iphoneApp(): DirectAuth;
	    /**
	     * Direct authorization with login & login in ipad application
	     */
		ipadApp(): DirectAuth;
	}

}
declare module 'upload/helpers' {
	/**
	 * Check object is stream
	 *
	 * @param source
	 */
	export const isStream: (source: any) => boolean;
	/**
	 * Copies object params to new object
	 *
	 * @param params
	 * @param properties
	 */
	export const copyParams: (params: any, properties: any) => {};

}
declare module 'upload/multipart-stream' {
	const SandwichStream: any
	export default class MultipartStream extends SandwichStream {
	    /**
	     * Constructor
	     *
	     * @param boundary
	     */
		constructor(boundary: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Returns boundary
	     */
		getBoundary(): any;
	    /**
	     * Adds part
	     *
	     * @param part
	     */
		addPart(part?: {}): void;
	    /**
	     * Adds form data
	     *
	     * @param field
	     * @param body
	     * @param options
	     */
		append(field: any, body: any, { filename, headers }: {
			filename?: null;
			headers?: {};
		}): void;
	}

}
declare module 'structures/attachments/attachment' {
	export default class Attachment {
	    /**
	     * Constructor
	     *
	     * @param type
	     * @param owner
	     * @param id
	     * @param accessKey
	     */
		constructor(type: any, owner: any, id: any, accessKey?: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Parse attachment with string
	     *
	     * @param attachment
	     */
		static fromString(attachment: any): Attachment;
	    /**
	     * Returns whether the attachment is filled
	     */
		isFilled(): any;
	    /**
	     * Returns type attachment
	     */
		getType(): any;
	    /**
	     * Returns the identifier owner
	     */
		getOwnerId(): any;
	    /**
	     * Returns the identifier attachment
	     */
		getId(): any;
	    /**
	     * Checks that the attachment is equivalent with object
	     *
	     * @param attachment
	     */
		equals(attachment: any): boolean;
	    /**
	     * Checks that the attachment is equivalent with string
	     *
	     * @param attachment
	     */
		equalString(attachment: any): boolean;
	    /**
	     * Returns a string to attach a VK
	     */
		toString(): string;
	}

}
declare module 'structures/attachments/gift' {
	export default class GiftAttachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	}

}
declare module 'structures/attachments/helpers' {
	import { GiftAttachment, WallAttachment, LinkAttachment, PhotoAttachment, AudioAttachment, VideoAttachment, MarketAttachment, StickerAttachment, DocumentAttachment, WallReplyAttachment, MarketAlbumAttachment } from 'structures/attachments';
	/**
	 * Transform raw attachments to wrapper
	 *
	 * @param attachments
	 * @param vk
	 */
	export const transformAttachments: (attachments: any[], vk: any) => (GiftAttachment | WallAttachment | LinkAttachment | PhotoAttachment | AudioAttachment | VideoAttachment | MarketAttachment | StickerAttachment | DocumentAttachment | WallReplyAttachment | MarketAlbumAttachment)[];

}
declare module 'structures/attachments/wall' {
	import Attachment from 'structures/attachments/attachment';
	export default class WallAttachment extends Attachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	    /**
	     * Load attachment payload
	     */
		loadAttachmentPayload(): Promise<void>;
	    /**
	     * Checks has comments
	     */
		hasComments(): boolean;
	    /**
	     * Checks has ads in post
	     */
		hasAds(): boolean;
	    /**
	     * Checks for the presence of attachments
	     *
	     * @param type
	     */
		hasAttachments(type?: any): any;
	    /**
	     * Checks has this user reposted
	     */
		hasUserReposted(): boolean;
	    /**
	     * Checks has this user likes
	     */
		hasUserLike(): boolean;
	    /**
	     * Checks can the current user comment on the entry
	     */
		isCanUserCommented(): boolean;
	    /**
	     * Checks if a community can comment on a post
	     */
		isCanGroupsCommented(): boolean;
	    /**
	     * Checks if you can comment on a post
	     */
		isCanCommented(): boolean;
	    /**
	     * Checks whether the current user can like the record
	     */
		isCanLike(): boolean;
	    /**
	     * hecks whether the current user can repost the record
	     */
		isCanReposted(): boolean;
	    /**
	     * Checks is can this user pin post
	     */
		isCanPin(): boolean;
	    /**
	     * Checks is can this user delete post
	     */
		isCanDelete(): boolean;
	    /**
	     * Checks is can this user edit post
	     */
		isCanEdit(): boolean;
	    /**
	     * Checks is can this user edit post
	     */
		isPinned(): boolean;
	    /**
	     * Checks is post created only by friends
	     */
		isFriendsOnly(): boolean;
	    /**
	     * Returns the timestamp when this post was created
	     */
		getTimestamp(): any;
	    /**
	     * Returns the Date object when this post was created
	     */
		getDate(): Date;
	    /**
	     * Returns the identifier author
	     */
		getAuthorId(): any;
	    /**
	     * Returns the post type
	     */
		getPostType(): any;
	    /**
	     * Returns the post text
	     */
		getText(): any;
	    /**
	     * Returns the attachments
	     *
	     * @param type
	     */
		getAttachments(type?: any): any;
	    /**
	     * Returns the administrator identifier that posted the entry
	     */
		getCreatedUserId(): any;
	    /**
	     * The identifier of the record owner, in response to which the current
	     */
		getReplyOwnerId(): any;
	    /**
	     * The identifier of the record in response to which the current one was left.
	     */
		getReplyPostId(): any;
	    /**
	     * Returns author identifier if the entry was published
	     * on behalf of the community and signed by the user
	     */
		getSignerId(): any;
	    /**
	     * Returns the number of record views
	     */
		getViewsCount(): any;
	    /**
	     * Returns the geo location
	     */
		getGeo(): any;
	    /**
	     * Returns the likes info
	     */
		getLikes(): any;
	    /**
	     * Returns the likes count
	     */
		getLikesCount(): any;
	    /**
	     * Returns the reposts count
	     */
		getRepostsCount(): any;
	    /**
	     * Returns the post source
	     */
		getPostSource(): any;
	}

}
declare module 'structures/attachments/link' {
	export default class LinkAttachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	}

}
declare module 'structures/attachments/photo' {
	import Attachment from 'structures/attachments/attachment';
	export default class PhotoAttachment extends Attachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	    /**
	     * Load attachment payload
	     */
		loadAttachmentPayload(): Promise<void>;
	    /**
	     * Returns the ID of the user who uploaded the image
	     */
		getUserId(): any;
	    /**
	     * Returns the ID of the album
	     */
		getAlbumId(): any;
	    /**
	     * Returns the photo text
	     */
		getText(): any;
	    /**
	     * Returns the timestamp when this photo was created
	     */
		getTimestamp(): any;
	    /**
	     * Returns the Date object when this photo was created
	     */
		getDate(): Date;
	    /**
	     * Returns the photo height
	     */
		getHeight(): any;
	    /**
	     * Returns the photo width
	     */
		getWidth(): any;
	    /**
	     * Returns the URL of a small photo
	     * (130 or 75)
	     */
		getSmallPhoto(): any;
	    /**
	     * Returns the URL of a medium photo
	     * (807 or 604 or less)
	     */
		getMediumPhoto(): any;
	    /**
	     * Returns the URL of a large photo
	     * (2560 or 1280 or less)
	     */
		getLargePhoto(): any;
	}

}
declare module 'structures/attachments/audio' {
	import Attachment from 'structures/attachments/attachment';
	export default class AudioAttachment extends Attachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	    /**
	     * Load attachment payload
	     */
		loadAttachmentPayload(): Promise<void>;
	    /**
	     * Checks whether audio is in high quality
	     */
		isHq(): boolean;
	    /**
	     * Returns the artist
	     */
		getArtist(): any;
	    /**
	     * Returns the title
	     */
		getTitle(): any;
	    /**
	     * Returns the duration
	     */
		getDuration(): any;
	    /**
	     * Returns the timestamp when this audio was created
	     */
		getTimestamp(): any;
	    /**
	     * Returns the Date object when this audio was created
	     */
		getDate(): Date;
	    /**
	     * Returns the URL of the audio
	     */
		getUrl(): any;
	    /**
	     * Returns the ID of the lyric
	     */
		getLyricsId(): any;
	    /**
	     * Returns the ID of the album
	     */
		getAlbumId(): any;
	    /**
	     * Returns the ID of the genre
	     */
		getGenreId(): any;
	}

}
declare module 'structures/attachments/video' {
	import Attachment from 'structures/attachments/attachment';
	export default class VideoAttachment extends Attachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	    /**
	     * Load attachment payload
	     */
		loadAttachmentPayload(): Promise<void>;
	    /**
	     * Checks whether the video is repeatable
	     */
		isRepeat(): boolean;
	    /**
	     * Checks that the user can add a video to himself
	     */
		isCanAdd(): boolean;
	    /**
	     * Checks if the user can edit the video
	     */
		isCanEdit(): boolean;
	    /**
	     * Checks whether the video is being processed
	     */
		isProcessing(): boolean;
	    /**
	     * Checks whether the video is a broadcast
	     */
		isBroadcast(): boolean;
	    /**
	     * Checks whether the video is a broadcast
	     */
		isUpcoming(): boolean;
	    /**
	     * Returns the title
	     */
		getTitle(): any;
	    /**
	     * Returns the description
	     */
		getDescription(): any;
	    /**
	     * Returns the duration
	     */
		getDuration(): any;
	    /**
	     * Returns the timestamp when this video was created
	     */
		getTimestamp(): any;
	    /**
	     * Returns the Date object when this video was created
	     */
		getDate(): Date;
	    /**
	     * Returns the timestamp when this video was added
	     */
		getAddingTimestamp(): any;
	    /**
	     * Returns the Date object when this video was added
	     */
		getAddingDate(): Date;
	    /**
	     * Returns the count views
	     */
		getViewsCount(): any;
	    /**
	     * Returns the count comments
	     */
		getCommentsCount(): any;
	    /**
	     * Returns the URL of the page with the player
	     */
		getPlayer(): any;
	    /**
	     * Returns the name of the platform (for video recordings added from external sites)
	     */
		getPlatformName(): any;
	    /**
	     * Checks for a boolean value in the property
	     *
	     * @param name
	     */
		checkBooleanInProperty(name: any): boolean;
	}

}
declare module 'structures/attachments/market' {
	import Attachment from 'structures/attachments/attachment';
	export default class MarketAttachment extends Attachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	    /**
	     * Load attachment payload
	     */
		loadAttachmentPayload(): Promise<void>;
	}

}
declare module 'structures/attachments/sticker' {
	export default class StickerAttachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	}

}
declare module 'structures/attachments/document' {
	import Attachment from 'structures/attachments/attachment';
	export default class DocumentAttachment extends Attachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	    /**
	     * Load attachment payload
	     */
		loadAttachmentPayload(): Promise<void>;
	    /**
	     * Checks if the document is a text
	     */
		isText(): boolean;
	    /**
	     * Checks if the document is a archive
	     */
		isArchive(): boolean;
	    /**
	     * Checks if the document is a gif file
	     */
		isGif(): boolean;
	    /**
	     * Checks if the document is a image
	     */
		isImage(): boolean;
	    /**
	     * Checks if the document is a graffiti
	     */
		isGraffiti(): boolean;
	    /**
	     * Checks if the document is a audio
	     */
		isAudio(): boolean;
	    /**
	     * Checks if the document is a voice
	     */
		isVoice(): boolean;
	    /**
	     * Checks if the document is a video
	     */
		isVideo(): boolean;
	    /**
	     * Checks if the document is a book
	     */
		isBook(): boolean;
	    /**
	     * Returns the document title
	     */
		getTitle(): any;
	    /**
	     * Returns the timestamp when this document was created
	     */
		getTimestamp(): any;
	    /**
	     * Returns the Date object when this document was created
	     */
		getDate(): Date;
	    /**
	     * Returns the type identifier (1~8)
	     */
		getTypeId(): any;
	    /**
	     * Returns the type name
	     */
		getTypeName(): string;
	    /**
	     * Returns the size in bytes
	     */
		getSize(): any;
	    /**
	     * Returns the extension
	     */
		getExtension(): any;
	    /**
	     * Returns the URL of the document
	     */
		getUrl(): any;
	    /**
	     * Returns the info to preview
	     */
		getPreview(): any;
	    /**
	     * Checks for a property in preview
	     *
	     * @param name
	     */
		hasPreviewProperty(name: any): boolean;
	}

}
declare module 'structures/attachments/wall-reply' {
	export default class WallReplyAttachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	}

}
declare module 'structures/attachments/market-album' {
	import Attachment from 'structures/attachments/attachment';
	export default class MarketAlbumAttachment extends Attachment {
	    /**
	     * Constructor
	     *
	     * @param payload
	     * @param vk
	     */
		constructor(payload: any, vk: any);
	    /**
	     * Load attachment payload
	     */
		loadAttachmentPayload(): Promise<void>;
	}

}
declare module 'structures/attachments' {
	import Attachment from 'structures/attachments/attachment';
	import GiftAttachment from 'structures/attachments/gift';
	import WallAttachment from 'structures/attachments/wall';
	import LinkAttachment from 'structures/attachments/link';
	import PhotoAttachment from 'structures/attachments/photo';
	import AudioAttachment from 'structures/attachments/audio';
	import VideoAttachment from 'structures/attachments/video';
	import MarketAttachment from 'structures/attachments/market';
	import StickerAttachment from 'structures/attachments/sticker';
	import DocumentAttachment from 'structures/attachments/document';
	import WallReplyAttachment from 'structures/attachments/wall-reply';
	import MarketAlbumAttachment from 'structures/attachments/market-album';
	export { Attachment, GiftAttachment, WallAttachment, LinkAttachment, PhotoAttachment, AudioAttachment, VideoAttachment, MarketAttachment, StickerAttachment, DocumentAttachment, WallReplyAttachment, MarketAlbumAttachment };
	export default Attachment;

}
declare module 'upload' {
	import MultipartStream from 'upload/multipart-stream';
	import { PhotoAttachment, AudioAttachment, VideoAttachment, DocumentAttachment } from 'structures/attachments';
	export default class Upload {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Uploading photos to an album
	     *
	     * @param params
	     */
		photoAlbum(params: any): Promise<any>;
	    /**
	     * Uploading photos to the wall
	     *
	     * @param params
	     */
		wallPhoto(params: any): Promise<PhotoAttachment>;
	    /**
	     * Uploading the main photo of a user or community
	     *
	     * @param params
	     */
		ownerPhoto(params: any): any;
	    /**
	     * Uploading a photo to a private message
	     *
	     * @param params
	     */
		messagePhoto(params: any): Promise<PhotoAttachment>;
	    /**
	     * Uploading the main photo for a chat
	     *
	     * @param params
	     */
		chatPhoto(params: any): any;
	    /**
	     * Uploading a photo for a product
	     *
	     * @param params
	     */
		marketPhoto(params: any): Promise<PhotoAttachment>;
	    /**
	     * Uploads a photo for the selection of goods
	     *
	     * @param params
	     */
		marketAlbumPhoto(params: any): Promise<PhotoAttachment>;
	    /**
	     * Uploads audio
	     *
	     * @param params
	     */
		audio(params: any): Promise<AudioAttachment>;
	    /**
	     * Uploads video
	     *
	     * @param params
	     */
		video(params: any): Promise<VideoAttachment>;
	    /**
	     * Uploads document
	     *
	     * @param params
	     * @param options
	     */
		document(params: any, { attachmentType }?: {
			attachmentType?: any;
		}): Promise<DocumentAttachment>;
	    /**
	     * Uploads wall document
	     *
	     * @param params
	     * @param options
	     */
		wallDocument(params: any, { attachmentType }?: {
			attachmentType?: any;
		}): Promise<DocumentAttachment>;
	    /**
	     * Uploads message document
	     *
	     * @param params
	     * @param options
	     */
		messageDocument(params: any, { attachmentType }?: {
			attachmentType?: any;
		}): Promise<DocumentAttachment>;
	    /**
	     * Uploads audio message
	     *
	     * @param params
	     */
		voice(params: any): Promise<DocumentAttachment>;
	    /**
	     * Uploads graffiti
	     *
	     * @param params
	     */
		graffiti(params: any): Promise<DocumentAttachment>;
	    /**
	     * Uploads community cover
	     *
	     * @param params
	     */
		groupCover(params: any): any;
	    /**
	     * Uploads photo stories
	     *
	     * @param params
	     */
		storiesPhoto(params: any): any;
	    /**
	     * Uploads video stories
	     *
	     * @param params
	     */
		storiesVideo(params: any): any;
	    /**
	     * Behavior for the upload method
	     *
	     * @param conduct
	     * @property [field]          Field name
	     * @property [params]         Upload params
	     *
	     * @property [getServer]      Get server functions
	     * @property [serverParams]   Copies server params
	     *
	     * @property [saveFiles]      Save files functions
	     * @property [saveParams]     Copies save params
	     *
	     * @property [maxFiles]       Max uploaded files for one request
	     * @property [attachmentType] Attachment type
	     */
		conduct({ field, params, getServer, serverParams, saveFiles, saveParams, maxFiles, attachmentType }: {
			field: any;
			params: any;
			getServer: any;
			serverParams?: undefined[];
			saveFiles: any;
			saveParams?: undefined[];
			maxFiles?: number;
			attachmentType: any;
		}): Promise<any>;
	    /**
	     * Building form data
	     *
	     * @param payload
	     */
		buildPayload({ field, sources, maxFiles, attachmentType }: {
			field: any;
			sources: any;
			maxFiles: any;
			attachmentType: any;
		}): Promise<MultipartStream>;
	    /**
	     * Upload form data
	     *
	     * @param url
	     * @param formData
	     * @param options
	     */
		upload(url: any, formData: any, { timeout }?: {
			timeout: any;
		}): Promise<any>;
	}

}
declare module 'collect/execute-code' {
	const _default: ({ method, params, parallelCount }: {
		method: any;
		params: any;
		parallelCount: any;
	}) => string;
	export default _default;

}
declare module 'collect/stream' {
	import { Readable } from 'stream';
	export default class CollectStream extends Readable {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any, { options, method, limit, max }: {
			options: any;
			method: any;
			limit: any;
			max?: null;
		});
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Promise based
	     *
	     * @param thenFn
	     * @param catchFn
	     */
		then(thenFn: any, catchFn: any): Promise<any>;
	    /**
	     * Fetch data
	     */
		_read(): Promise<void>;
	}

}
declare module 'collect/limits' {
	const _default: (string | number)[][];
	export default _default;

}
declare module 'collect/chain' {
	export default class Chain {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Adds method to queue
	     *
	     * @param method
	     * @param params
	     */
		append(method: any, params: any): any;
	    /**
	     * Promise based
	     *
	     * @param thenFn
	     * @param catchFn
	     */
		then(thenFn: any, catchFn: any): Promise<any[] | {
			response: any[];
			errors: any[];
		}>;
	    /**
	     * Starts the chain
	     */
		run(): Promise<any[] | {
			response: any[];
			errors: any[];
		}>;
	}

}
declare module 'collect' {
	import Chain from 'collect/chain';
	export default class Collect {
	    /**
	     * constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Returns new Chain instance
	     */
		chain(): Chain;
	    /**
	     * Call multiple executors
	     *
	     * @param method
	     * @param queue
	     */
		executes(method: any, queue: any): Promise<{
			response: any[];
			errors: any[];
		}>;
	}

}
declare module 'structures/contexts/context' {
	export default class Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Checks whether the context of some of these types
	     *
	     * @param types
	     */
		is(types: any): boolean;
	}

}
declare module 'structures/contexts/vote' {
	import Context from 'structures/contexts/context';
	export default class VoteContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, { type, object: update }: {
			type: any;
			object: any;
		});
	    /**
	     * Returns the identifier poll
	     */
		getId(): any;
	    /**
	     * Returns the identifier user
	     */
		getUserId(): any;
	    /**
	     * Returns the identifier owner
	     */
		getOwnerId(): any;
	    /**
	     * Returns the identifier option
	     */
		getOptionId(): any;
	}

}
declare module 'structures/contexts/typing' {
	import Context from 'structures/contexts/context';
	export default class TypingContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param update
	     */
		constructor(vk: any, [eventId, user, extra]: [any, any, any]);
	    /**
	     * Checks that the message is typed in the dm
	     */
		isDM(): any;
	    /**
	     * Checks that the message is typed in the chat
	     */
		isChat(): any;
	    /**
	     * Returns the identifier user
	     */
		getUserId(): any;
	    /**
	     * Returns the identifier chat
	     */
		getChatId(): any;
	}

}
declare module 'updates/helpers' {
	/**
	 * Decodes HTML entities
	 *
	 * @param text
	 */
	export const unescapeHTML: (text: any) => any;
	/**
	 * Separates a string through a separator
	 *
	 * @param raw
	 * @param delimiter
	 */
	export const splitFwdDelimiter: (raw: any, delimiter: any) => any[];
	/**
	 * Parse the sent forwards messages
	 *
	 * @param raw
	 */
	export const parseFwds: (raw: any) => any[];

}
declare module 'structures/contexts/message' {
	import Context from 'structures/contexts/context';
	export default class MessageContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, payload: any, { webhookType, pollingType }: {
			webhookType?: null;
			pollingType?: null;
		});
	    /**
	     * Load message payload
	     */
		loadMessagePayload(): Promise<void>;
	    /**
	     * Checks for the presence of attachments
	     *
	     * @param type
	     */
		hasAttachments(type?: any): any;
	    /**
	     * Checks if there is text
	     */
		hasText(): boolean;
	    /**
	     * Checks for forwarded messages
	     */
		hasForwards(): boolean;
	    /**
	     * Checks if there is text
	     */
		hasGeo(): boolean;
	    /**
	     * Checks is a DM
	     */
		isDM(): boolean;
	    /**
	     * Checks is a chat
	     */
		isChat(): boolean;
	    /**
	     * Checks is a group
	     */
		isGroup(): boolean;
	    /**
	     * Check is special event
	     */
		isEvent(): boolean;
	    /**
	     * Checks whether the message is outbox
	     */
		isOutbox(): boolean;
	    /**
	     * Checks whether the message is inbox
	     */
		isInbox(): boolean;
	    /**
	     * Checks that the message was deleted
	     */
		isDeleted(): boolean;
	    /**
	     * Checks whether the message is read
	     */
		isRead(): boolean;
	    /**
	     * Checks that the message is important
	     */
		isImportant(): boolean;
	    /**
	     * Returns the identifier message
	     */
		getId(): any;
	    /**
	     * Returns the identifier user
	     */
		getUserId(): any;
	    /**
	     * Returns the sender identifier
	     */
		getSenderId(): any;
	    /**
	     * Returns the identifier chat
	     */
		getChatId(): any;
	    /**
	     * Returns the destination identifier
	     */
		getPeerId(): any;
	    /**
	     * Returns the timestamp when this message was created
	     */
		getTimestamp(): any;
	    /**
	     * Returns the Date object when this message was created
	     */
		getDate(): Date;
	    /**
	     * Returns the chat title
	     */
		getTitle(): any;
	    /**
	     * Returns the text
	     */
		getText(): any;
	    /**
	     * Returns the from
	     */
		getFrom(): any;
	    /**
	     * Returns the forwards messages
	     */
		getForwards(): any;
	    /**
	     * Returns geo
	     */
		getGeo(): any;
	    /**
	     * Returns the attachments
	     *
	     * @param type
	     */
		getAttachments(type?: any): any;
	    /**
	     * Returns the event id
	     *
	     * @type
	     */
		getEventId(): any;
	    /**
	     * Returns the event name
	     */
		getEventType(): any;
	    /**
	     * Returns the event name
	     */
		getEventText(): any;
	    /**
	     * Gets a link to invite the user to a conversation
	     *
	     * @param params
	     *
	     * @type
	     */
		getInviteLink(params?: {}): any;
	    /**
	     * Edits a message
	     *
	     * @param params
	     */
		editMessage(params: any): any;
	    /**
	     * Edits a message text
	     *
	     * @param message
	     */
		editMessageText(message: any): Promise<any>;
	    /**
	     * Sends a message to the current dialog
	     *
	     * @param text
	     * @param params
	     */
		send(text: any, params?: {}): any;
	    /**
	     * Responds to the current message
	     *
	     * @param text
	     * @param params
	     */
		reply(text: any, params?: {}): any;
	    /**
	     * Sends a sticker to the current dialog
	     *
	     * @param id
	     */
		sendSticker(id: any): any;
	    /**
	     * Sends a photo to the current dialog
	     *
	     * @param sourxe
	     * @param params
	     */
		sendPhoto(source: any, params?: {}): Promise<any>;
	    /**
	     * Sends a document to the current dialog
	     *
	     * @param sourxe
	     * @param params
	     */
		sendDocument(source: any, params?: {}): Promise<any>;
	    /**
	     * Sends a voice to the current dialog
	     *
	     * @param sourxe
	     * @param params
	     */
		sendVoice(source: any, params?: {}): Promise<any>;
	    /**
	     * Changes the status of typing in the dialog
	     */
		setActivity(): Promise<boolean>;
	    /**
	     * Marks messages as important or removes a mark.
	     *
	     * @param ids
	     * @param options
	     */
		markAsImportant(ids?: any[], options?: {
			important: number;
		}): Promise<any>;
	    /**
	     * Deletes the message
	     *
	     * @param ids
	     * @param options
	     */
		deleteMessage(ids?: any[], options?: {
			spam: number;
		}): Promise<any>;
	    /**
	     * Restores the message
	     */
		restoreMessage(): Promise<boolean>;
	    /**
	     * Allows you to join the chat by an invitation link
	     *
	     * @param params
	     * @param params
	     */
		joinChatByInviteLink(link: any, params?: {}): any;
	    /**
	     * Checks that in a chat
	     */
		assertIsChat(): void;
	    /**
	     * Rename the chat
	     *
	     * @param title
	     */
		renameChat(title: any): Promise<boolean>;
	    /**
	     * Sets a new image for the chat
	     *
	     * @param source
	     * @param params
	     */
		newChatPhoto(source: any, params?: {}): Promise<any>;
	    /**
	     * Remove the chat photo
	     */
		deleteChatPhoto(): Promise<any>;
	    /**
	     * Invites a new user
	     *
	     * @param id
	     */
		inviteUser(id?: any): Promise<boolean>;
	    /**
	     * Excludes user
	     *
	     * @param id
	     */
		kickUser(id?: any): Promise<boolean>;
	    /**
	     * Pins a message
	     */
		pinMessage(): Promise<boolean>;
	    /**
	     * Unpins a message
	     */
		unpinMessage(): Promise<boolean>;
	}

}
declare module 'structures/contexts/wall-post' {
	import Context from 'structures/contexts/context';
	export default class WallPostContext extends Context {
	    /**
	     * constructor
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, { type, object: update }: {
			type: any;
			object: any;
		});
	    /**
	     * Checks is repost
	     */
		isRepost(): any;
	    /**
	     * Returns the wall attachment
	     */
		getWall(): any;
	    /**
	     * Removes a record from the wall
	     */
		deletePost(): any;
	}

}
declare module 'structures/contexts/streaming' {
	import Context from 'structures/contexts/context';
	export default class StreamingContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, payload: any);
	    /**
	     * Checks is new object
	     */
		isNew(): boolean;
	    /**
	     * Checks is update object
	     */
		isUpdate(): boolean;
	    /**
	     * Checks is delete object
	     */
		isDelete(): boolean;
	    /**
	     * Checks is restore object
	     */
		isRestore(): boolean;
	    /**
	     * Checks is post event
	     */
		isPost(): boolean;
	    /**
	     * Checks is share event
	     */
		isShare(): boolean;
	    /**
	     * Checks is comment event
	     */
		isComment(): boolean;
	    /**
	     * Checks for the presence of attachments
	     *
	     * @param type
	     */
		hasAttachments(type?: any): any;
	    /**
	     * Returns the event URL
	     */
		getUrl(): any;
	    /**
	     * Returns the creation time
	     */
		getDate(): any;
	    /**
	     * Returns the text of the post
	     */
		getText(): any;
	    /**
	     * Returns the attachments
	     *
	     * @param type
	     */
		getAttachments(type?: any): any;
	    /**
	     * Returns the text of the shared post
	     */
		getSharedText(): any;
	    /**
	     * Returns the creation time from original post
	     */
		getSharedDate(): any;
	    /**
	     * Returns the action type
	     */
		getActionType(): any;
	    /**
	     * Returns the creation time from
	     */
		getActionDate(): any;
	    /**
	     * Returns the geo location
	     */
		getGeo(): any;
	    /**
	     * Returns the rule tags
	     */
		getTags(): any;
	    /**
	     * Returns the identifier signer user
	     */
		getSignerId(): any;
	    /**
	     * Returns the information of author
	     */
		getAuthor(): any;
	    /**
	     * Returns the identifier author
	     */
		getAuthorId(): any;
	    /**
	     * Returns the author url
	     */
		getAuthorUrl(): any;
	    /**
	     * Returns the identifier of the author of the original post
	     */
		getSharedAuthorId(): any;
	    /**
	     * Returns the author url of the original post
	     */
		getSharedAuthorUrl(): any;
	    /**
	     * Returns the author platform
	     */
		getAuthorPlatform(): string;
	}

}
declare module 'structures/contexts/group-user' {
	import Context from 'structures/contexts/context';
	export default class GroupUserContext extends Context {
	    /**
	     * Constructror
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, { type, object: update, group_id: groupId }: {
			type: any;
			object: any;
			group_id: any;
		});
	    /**
	     * Checks is join user
	     */
		isBlock(): any;
	    /**
	     * Checks is leave user
	     */
		isUnblock(): any;
	    /**
	     * Checks that the block has expired
	     */
		isExpired(): boolean;
	    /**
	     * Returns the identifier admin
	     */
		getAdminId(): any;
	    /**
	     * Returns the identifier user
	     */
		getUserId(): any;
	    /**
	     * Returns the reason for the ban
	     */
		getReasonId(): any;
	    /**
	     * Returns the reason name for the ban
	     */
		getReasonName(): string;
	    /**
	     * Returns the administrator comment to block
	     */
		getComment(): any;
	    /**
	     * Adds a user to the community blacklist
	     *
	     * @param params
	     */
		banUser(params: any): any;
	    /**
	     * Adds a user to the community blacklist
	     */
		unbanUser(): any;
	}

}
declare module 'structures/contexts/user-online' {
	import Context from 'structures/contexts/context';
	export default class UserOnlineContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param update
	     */
		constructor(vk: any, [eventId, user, extra, date]: [any, any, any, any]);
	    /**
	     * Checks that the user is online
	     */
		isUserOnline(): any;
	    /**
	     * Checks that the user is online
	     */
		isUserOffline(): any;
	    /**
	     * Checks that the user has logged out of the network himself
	     */
		isSelfExit(): boolean;
	    /**
	     * Checks that the user logged out a timeout
	     */
		isTimeoutExit(): boolean;
	    /**
	     * Returns the date when this event was created
	     */
		getDate(): any;
	    /**
	     * Returns the name of the platform from which the user entered
	     */
		getPlatformName(): string;
	}

}
declare module 'structures/contexts/dialog-flags' {
	import Context from 'structures/contexts/context';
	export default class DialogFlagsContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param update
	     */
		constructor(vk: any, [eventId, peer, flags]: [any, any, any]);
	    /**
	     * Checks that an important dialogue
	     */
		isImportant(): boolean;
	    /**
	     * Checks that the unanswered dialog
	     */
		isUnanswered(): boolean;
	    /**
	     * Returns the destination identifier
	     */
		getPeerId(): any;
	    /**
	     * Returns the values of the flags
	     */
		getFlags(): any;
	    /**
	     * Marks the dialog as answered or unchecked.
	     *
	     * @param params
	     */
		markAsAnsweredDialog(params: any): any;
	    /**
	     * Marks the dialog as important or removes the mark
	     *
	     * @param params
	     */
		markAsImportantDialog(params: any): any;
	}

}
declare module 'structures/contexts/group-update' {
	import Context from 'structures/contexts/context';
	export default class GroupUpdateContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, { type, object: update }: {
			type: any;
			object: any;
		});
	    /**
	     * Checks is change photo
	     */
		isChangePhoto(): any;
	    /**
	     * Checks is change officers
	     */
		isChangeOfficers(): any;
	    /**
	     * Checks is change settings
	     */
		isChangeSettings(): any;
	    /**
	     * Checks for the presence of attachments
	     *
	     * @param type
	     */
		hasAttachments(type?: any): any;
	    /**
	     * Returns the identifier admin
	     */
		getAdminId(): any;
	    /**
	     * Returns the identifier user
	     */
		getUserId(): any;
	    /**
	     * Returns the old level permission
	     */
		getOldLevel(): any;
	    /**
	     * Returns the new level permission
	     */
		getNewLevel(): any;
	    /**
	     * Returns the changes settings
	     */
		getChanges(): any;
	    /**
	     * Returns the attachments
	     *
	     * @param type
	     */
		getAttachments(type?: any): any;
	}

}
declare module 'structures/contexts/group-member' {
	import Context from 'structures/contexts/context';
	export default class GroupMemberContext extends Context {
	    /**
	     * Constructro
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, { type, object: update }: {
			type: any;
			object: any;
		});
	    /**
	     * Checks is join user
	     */
		isJoin(): any;
	    /**
	     * Checks is leave user
	     */
		isLeave(): any;
	    /**
	     * Checks is self leave user
	     */
		isSelfLeave(): boolean;
	    /**
	     * Returns the identifier user
	     */
		getUserId(): any;
	    /**
	     * Returns the join type
	     */
		getJoinType(): any;
	}

}
declare module 'structures/contexts/message-allow' {
	import Context from 'structures/contexts/context';
	export default class MessageAllowContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, { type, object: update }: {
			type: any;
			object: any;
		});
	    /**
	     * Checks that the user has subscribed to messages
	     */
		isSubscribed(): any;
	    /**
	     * Checks that the user has unsubscribed from the messages
	     */
		isUbsubscribed(): any;
	    /**
	     * Returns the identifier user
	     */
		getUserId(): any;
	    /**
	     * Returns the key
	     */
		getKey(): any;
	}

}
declare module 'structures/contexts/read-messages' {
	import Context from 'structures/contexts/context';
	export default class ReadMessagesContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param update
	     */
		constructor(vk: any, [eventId, peer, id]: [any, any, any]);
	    /**
	     * Checks that inbox messages are read
	     */
		isInbox(): any;
	    /**
	     * Checks that outbox messages are read
	     */
		isOutbox(): any;
	    /**
	     * Returns the ID before the message read
	     */
		getId(): any;
	    /**
	     * Returns the peer ID
	     */
		getPeerId(): any;
	}

}
declare module 'structures/contexts/message-flags' {
	import Context from 'structures/contexts/context';
	export default class MessageFlagsContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param update
	     */
		constructor(vk: any, [eventId, id, flags, peer]: [any, any, any, any]);
	    /**
	     * Verifies that the message is not read
	     */
		isUnread(): boolean;
	    /**
	     * Checks that the outgoing message
	     */
		isOutbox(): boolean;
	    /**
	     * Verifies that a reply has been created to the message
	     */
		isReplied(): boolean;
	    /**
	     * Verifies that the marked message
	     */
		isImportant(): boolean;
	    /**
	     * Verifies that the message was sent via chat
	     */
		isChat(): boolean;
	    /**
	     * Verifies that the message was sent by a friend
	     */
		isFriends(): boolean;
	    /**
	     * Verifies that the message is marked as "Spam"
	     */
		isSpam(): boolean;
	    /**
	     * Verifies that the message has been deleted (in the Recycle Bin)
	     */
		isDeleted(): boolean;
	    /**
	     * Verifies that the message was verified by the user for spam
	     */
		isFixed(): boolean;
	    /**
	     * Verifies that the message contains media content
	     */
		isMedia(): boolean;
	    /**
	     * Checks that a welcome message from the community
	     */
		isHidden(): boolean;
	    /**
	     * Returns the message ID
	     */
		getId(): any;
	    /**
	     * Returns the destination identifier
	     */
		getPeerId(): any;
	    /**
	     * Returns the values of the flags
	     */
		getFlags(): any;
	}

}
declare module 'structures/contexts/comment-action' {
	import Context from 'structures/contexts/context';
	export default class CommentActionContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, { type, object: update, group_id: groupId }: {
			type: any;
			object: any;
			group_id: any;
		});
	    /**
	     * Checks for the presence of attachments
	     *
	     * @param type
	     */
		hasAttachments(type?: any): any;
	    /**
	     * Checks is new comment
	     */
		isNew(): any;
	    /**
	     * Checks is edit comment
	     */
		isEdit(): any;
	    /**
	     * Checks is delete comment
	     */
		isDelete(): any;
	    /**
	     * Checks is restore comment
	     */
		isRestore(): any;
	    /**
	     * Checks is photo comment
	     */
		isPhotoComment(): any;
	    /**
	     * Checks is wall comment
	     */
		isWallComment(): any;
	    /**
	     * Checks is video comment
	     */
		isVideoComment(): any;
	    /**
	     * Checks is board comment
	     */
		isBoardComment(): any;
	    /**
	     * Checks is board comment
	     */
		isMarketComment(): any;
	    /**
	     * Checks is reply comment
	     */
		isReply(): boolean;
	    /**
	     * Returns the identifier comment
	     */
		getId(): any;
	    /**
	     * Returns the identifier reply comment
	     */
		getReplyId(): any;
	    /**
	     * Returns the identifier user
	     */
		getUserId(): any;
	    /**
	     * Returns the identifier reply user
	     */
		getReplyUserId(): any;
	    /**
	     * Returns the identifier of the user who deleted the comment
	     */
		getRemoverUserId(): any;
	    /**
	     * Returns the identifier of object
	     */
		getObjectId(): any;
	    /**
	     * Returns the identifier of owner
	     */
		getOwnerId(): any;
	    /**
	     * Returns the date creation action comment
	     */
		getDate(): any;
	    /**
	     * Returns the text comment
	     */
		getText(): any;
	    /**
	     * Returns the attachments
	     *
	     * @param type
	     */
		getAttachments(type?: any): any;
	    /**
	     * Returns the likes
	     */
		getLikes(): any;
	    /**
	     * Includes from subtype
	     *
	     * @param type
	     */
		includesFromSubType(type: any): any;
	    /**
	     * Edits a comment
	     *
	     * @param options
	     */
		editComment(options: any): any;
	    /**
	     * Removes comment
	     */
		deleteComment(): any;
	}

}
declare module 'structures/contexts/new-attachments' {
	import Context from 'structures/contexts/context';
	export default class NewAttachmentsContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param payload
	     */
		constructor(vk: any, { type, object: update }: {
			type: any;
			object: any;
		});
	    /**
	     * Checks for the presence of attachments
	     *
	     * @param type
	     */
		hasAttachments(type?: any): any;
	    /**
	     * Returns the attachments
	     *
	     * @param type
	     */
		getAttachments(type?: any): any;
	    /**
	     * Checks is attachment photo
	     */
		isPhoto(): any;
	    /**
	     * Checks is attachment video
	     */
		isVideo(): any;
	    /**
	     * Checks is attachment audio
	     */
		isAudio(): any;
	    /**
	     * Removes the attachment
	     */
		deleteAttachment(): any;
	}

}
declare module 'structures/contexts/removed-messages' {
	import Context from 'structures/contexts/context';
	export default class RemovedMessagesContext extends Context {
	    /**
	     * Constructor
	     *
	     * @param vk
	     * @param update
	     */
		constructor(vk: any, [eventId, peer, id]: [any, any, any]);
	    /**
	     * Checks that messages have been deleted
	     */
		isRemoved(): any;
	    /**
	     * Checks that messages have been restored
	     */
		isRecovery(): any;
	    /**
	     * Returns the identifier of the message
	     */
		getId(): any;
	    /**
	     * Returns the peer ID
	     */
		getPeerId(): any;
	}

}
declare module 'structures/contexts' {
	import Context from 'structures/contexts/context';
	import VoteContext from 'structures/contexts/vote';
	import TypingContext from 'structures/contexts/typing';
	import MessageContext from 'structures/contexts/message';
	import WallPostContext from 'structures/contexts/wall-post';
	import StreamingContext from 'structures/contexts/streaming';
	import GroupUserContext from 'structures/contexts/group-user';
	import UserOnlineContext from 'structures/contexts/user-online';
	import DialogFlagsContext from 'structures/contexts/dialog-flags';
	import GroupUpdateContext from 'structures/contexts/group-update';
	import GroupMemberContext from 'structures/contexts/group-member';
	import MessageAllowContext from 'structures/contexts/message-allow';
	import ReadMessagesContext from 'structures/contexts/read-messages';
	import MessageFlagsContext from 'structures/contexts/message-flags';
	import CommentActionContext from 'structures/contexts/comment-action';
	import NewAttachmentsContext from 'structures/contexts/new-attachments';
	import RemovedMessagesContext from 'structures/contexts/removed-messages';
	export { Context, VoteContext, TypingContext, MessageContext, WallPostContext, StreamingContext, GroupUserContext, UserOnlineContext, GroupUpdateContext, DialogFlagsContext, MessageAllowContext, GroupMemberContext, ReadMessagesContext, MessageFlagsContext, CommentActionContext, NewAttachmentsContext, RemovedMessagesContext };
	export default Context;

}
declare module 'updates/transform-message' {
	/**
	 * Transform message to Object
	 *
	 * @param update
	 */
	export default function transformMessage([, id, flags, peer, date, body, extra, attachments]: [any, any, any, any, any, any, any, any]): {
		id: any;
		date: any;
		body: any;
		flags: any;
		geo: {};
		random_id: any;
		out: number;
		deleted: number;
		read_state: number;
		emoji: number;
	};

}
declare module 'updates' {
	export default class Updates {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Checks is started
	     */
		isStarted(): boolean;
	    /**
	     * Added middleware
	     *
	     * @param handler
	     */
		use(middleware: any): this;
	    /**
	     * Subscribe to events
	     *
	     * @param events
	     * @param handler
	     */
		on(events: any, handler: any): this;
	    /**
	     * Listen text
	     *
	     * @param condition
	     * @param handler
	     */
		hear(conditions: any, handler: any): this;
	    /**
	     * A handler that is called when handlers are not found
	     *
	     * @param handler
	     */
		setHearFallbackHandler(handler: any): this;
	    /**
	     * Handles longpoll event
	     *
	     * @param update
	     */
		handlePollingUpdate(update: any): any;
	    /**
	     * Handles webhook event
	     *
	     * @param update
	     */
		handleWebhookUpdate(update: any): any;
	    /**
	     * Starts to poll server
	     */
		startPolling(): Promise<void>;
	    /**
	     * Starts the webhook server
	     *
	     * @param next
	     */
		startWebhook({ tls, path, port, host }: {
			tls: any;
			path: any;
			port: any;
			host: any;
		}, next: any): Promise<void>;
	    /**
	     * Stopping gets updates
	     */
		stop(): Promise<void>;
	    /**
	     * Returns webhook callback like http[s] or express
	     *
	     * @param path
	     */
		getWebhookCallback(path?: any): (req: any, res: any, next: any) => void;
	    /**
	     * Returns the middleware for the webhook under koa
	     *
	     * @param options
	     */
		getKoaWebhookMiddleware(options?: {}): (context: any, next: any) => Promise<void>;
	    /**
	     * Starts forever fetch updates  loop
	     */
		startFetchLoop(): Promise<void>;
	    /**
	     * Gets updates
	     */
		fetchUpdates(): Promise<void>;
	    /**
	     * Calls up the middleware chain
	     *
	     * @param context
	     */
		dispatchMiddleware(context: any): any;
	    /**
	     * Reloads middleware
	     */
		reloadMiddleware(): void;
	}

}
declare module 'snippets' {
	export default class Snippets {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Defines the type of object (user, community, application, attachment)
	     *
	     * @param resource
	     */
		resolveResource(resource: any): Promise<{
			id: number;
			owner: number;
			type: any;
		} | {
				id: any;
				type: any;
			}>;
	}

}
declare module 'streaming' {
	export default class StreamingAPI {
	    /**
	     * Constructor
	     *
	     * @param vk
	     */
		constructor(vk: any);
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Starts websocket
	     */
		startWebSocket(): Promise<void>;
	    /**
	     * Stop all connection
	     */
		stop(): Promise<void>;
	    /**
	     * Processes server messages
	     *
	     * @param serviceMessage
	     */
		handleServiceMessage({ message, service_code: code }: {
			message: any;
			service_code: any;
		}): Promise<void>;
	    /**
	     * Handles events
	     *
	     * @param event
	     */
		handleEvent(event: any): Promise<any>;
	    /**
	     * Executes the HTTP request for rules
	     *
	     * @param method
	     * @param options
	     */
		fetchRules(method: any, payload?: {}): Promise<any>;
	    /**
	     * Returns a list of rules
	     */
		getRules(): Promise<any>;
	    /**
	     * Adds a rule
	     *
	     * @param rule
	     */
		addRule(rule: any): Promise<any>;
	    /**
	     * Removes the rule
	     *
	     * @param tag
	     */
		deleteRule(tag: any): Promise<any>;
	    /**
	     * Adds a list of rules
	     *
	     * @param rules
	     */
		addRules(rules: any): Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
	    /**
	     * Removes all rules
	     */
		deleteRules(): Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
	}

}
declare module 'vk' {
	import { Agent } from 'https';
	import API from 'api';
	import Auth from 'auth';
	import Upload from 'upload';
	import Collect from 'collect';
	import Updates from 'updates';
	import Snippets from 'snippets';
	import StreamingAPI from 'streaming';
	/**
	 * Main class
	 *
	 * @public
	 */
	export default class VK {
		options: {
			agent: Agent;
			token: any;
			lang: any;
			login: any;
			phone: any;
			password: any;
			app: any;
			key: any;
			scope: string;
			apiMode: string;
			apiWait: number;
			apiLimit: number;
			apiAttempts: number;
			apiTimeout: number;
			apiHeaders: {
				'User-Agent': string;
			};
			apiExecuteCount: number;
			apiExecuteMethods: string[];
			uploadTimeout: number;
			pollingWait: number;
			pollingAttempts: number;
			pollingGroupId: any;
			webhookPath: any;
			webhookSecret: any;
			webhookConfirmation: any;
			collectAttempts: number;
		};
		api: API;
		auth: Auth;
		upload: Upload;
		collect: Collect;
		updates: Updates;
		snippets: Snippets;
		streaming: StreamingAPI;
		captchaHandler: any;
		twoFactorHandler: any;
	    /**
	     * Constructor
	     *
	     * @param options
	     */
		constructor(options?: {});
	    /**
	     * Returns custom tag
	     */
		readonly [Symbol.toStringTag]: string;
	    /**
	     * Sets options
	     *
	     * @param options
	     */
		setOptions(options: any): this;
	    /**
	     * Sets token
	     *
	     * @param token
	     */
		setToken(token: any): this;
	    /**
	     * Returns token
	     */
		getToken(): any;
	    /**
	     * Sets captcha handler
	     *
	     * @param handler
	     *
	     * @example
	     * 	vk.setCaptchaHandler((payload, retry) => {...});
	     */
		setCaptchaHandler(handler: any): this;
	    /**
	     * Sets two-factor handler
	     *
	     * @param handler
	     *
	     * @example
	     * 	vk.setTwoFactorHandler((payload, retry) => {...});
	     */
		setTwoFactorHandler(handler: any): this;
	}

}

declare module 'vk-io' {
	import VK from 'vk';
	import Request from 'api/request';
	export * from 'errors';
	export * from 'structures/contexts';
	export * from 'structures/attachments';
	export { captchaTypes } from 'utils/constants';
	export { VK, Request };
	export default VK;
}
