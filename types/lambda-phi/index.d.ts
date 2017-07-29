// Type definitions for lambda-phi 1.0.19
// Project: https://github.com/elitechance/lambda-phi
// Definitions by: Ethan Dave B. Gomez <https://github.com/elitechance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'lambda-phi/lib/path-model' {
	/**
	 * Created by EGomez on 5/4/17.
	 */
	export default class PathModel {
	    private _methodName;
	    private _pattern;
	    private _httpMethods;
	    pattern: string;
	    httpMethods: Array<string>;
	    methodName: string;
	}

}
declare module 'lambda-phi/lib/path-param-model' {
	/**
	 * Created by EGomez on 5/18/17.
	 */
	export default class PathParamModel {
	    private _name;
	    private _index;
	    private _methodName;
	    private _defaultValue;
	    name: string;
	    index: number;
	    methodName: string;
	    defaultValue: any;
	}

}
declare module 'lambda-phi/lib/http-verb-model' {
	/**
	 * Created by EGomez on 5/18/17.
	 */
	export default class HttpVerbModel {
	    private _name;
	    private _methodName;
	    name: string;
	    methodName: string;
	}

}
declare module 'lambda-phi/lib/lambda-config' {
	/**
	 * Created by EGomez on 5/19/17.
	 */
	export interface LambdaConfig {
	    allowNullInjection: boolean;
	}

}
declare module 'lambda-phi/lib/lambda-model' {
	/**
	 * Created by EGomez on 2/23/17.
	 */
	import PathModel from 'lambda-phi/lib/path-model';
	import PathParamModel from 'lambda-phi/lib/path-param-model';
	import HttpVerbModel from 'lambda-phi/lib/http-verb-model';
	import { LambdaConfig } from 'lambda-phi/lib/lambda-config';
	export default class LambdaModel {
	    private _name;
	    private _instance;
	    private _paths;
	    private _basePath;
	    private _pathParams;
	    private _httpVerbs;
	    private _config;
	    /**
	     * API Properties
	     */
	    private _postConstructorMethod;
	    private _preLambdaTimeoutMethod;
	    private _preLambdaTimeoutTime;
	    private _preLambdaCallbackMethod;
	    /**
	     * Lambda Properties
	     */
	    private _eventProperty;
	    private _callbackProperty;
	    private _contextProperty;
	    private _handlerMethod;
	    /**
	     * Api Gateway Properties
	     */
	    private _queryParamsProperty;
	    private _pathParamsProperty;
	    private _headersProperty;
	    private _bodyProperty;
	    private _methodProperty;
	    private _anyMethod;
	    name: any;
	    instance: any;
	    eventProperty: any;
	    handlerMethod: any;
	    callbackProperty: any;
	    queryParamsProperty: any;
	    pathParamsProperty: any;
	    methodProperty: any;
	    contextProperty: any;
	    anyMethod: any;
	    postConstructorMethod: any;
	    headersProperty: any;
	    bodyProperty: any;
	    preLambdaTimeoutMethod: string;
	    preLambdaTimeoutTime: number;
	    preLambdaCallbackMethod: string;
	    paths: Array<PathModel>;
	    basePath: string;
	    pathParams: PathParamModel[];
	    httpVerbs: HttpVerbModel[];
	    config: LambdaConfig;
	}

}
declare module 'lambda-phi/lib/http-model' {
	/**
	 * Created by EGomez on 5/4/17.
	 */
	export default class HttpModel {
	    static readonly METHOD_GET: string;
	    static readonly METHOD_POST: string;
	    static readonly METHOD_PATCH: string;
	    static readonly METHOD_OPTIONS: string;
	    static readonly METHOD_PUT: string;
	    static readonly METHOD_HEAD: string;
	    static readonly METHOD_DELETE: string;
	    static readonly methods: Array<string>;
	}

}
declare module 'lambda-phi/lib/api-gateway' {
	import LambdaModel from 'lambda-phi/lib/lambda-model';
	export class ApiGateway {
	    private static event;
	    private static context;
	    private static queryParams;
	    private static pathParams;
	    private static method;
	    private static headers;
	    private static body;
	    private static pathConfig;
	    static queryParamsAlias: any;
	    static pathParamsAlias: any;
	    static methodAlias: any;
	    static headersAlias: any;
	    static bodyAlias: any;
	    static addHttpVerbMethod(name: string, target: any, methodName: any): void;
	    static addAnyMethod(target: any, method: any): void;
	    static addHandlerMethod(target: any, method: any): void;
	    static addPostConstructorMethod(target: any, method: any): void;
	    static addPathMethod(pattern: string, target: any, method: any): void;
	    static addPathParam(name: string, target: any, methodName: any, index: number): void;
	    static addHeadersProperty(target: any, property: any): void;
	    static addQueryParamsProperty(target: any, property: any): void;
	    static addMethodProperty(target: any, property: any): void;
	    static addBodyProperty(target: any, property: any): void;
	    static addPathParamsProperty(target: any, property: any): void;
	    private static getHttpVerbMethods(lambda);
	    private static methodHasPath(lambda, methodName);
	    static setPathConfig(config: any): void;
	    static executeHttpRequest(lambda: LambdaModel): void;
	    private static executeAnyRequest(lambda);
	    private static getObjectValue(object, name);
	    private static getAliasValue(event, alias);
	    private static setQueryParams();
	    private static setPathParams();
	    private static setMethod();
	    private static setHeaders();
	    private static setBody();
	    static prepareHttpRequestVariables(event: any, context: any): void;
	    private static getHttpVerbsByMethodName(lambda, methodName);
	    private static verbExists(verbs, verb);
	    private static getArgs(keys, pathToRegEx, lambda, path);
	    private static getResourcePath();
	    private static executePathLambdaMethod(pathToRegEx, lambda, path);
	    static executePath(lambda: LambdaModel): boolean;
	    private static getHeaders(lambda);
	    private static getQueryParams(lambda);
	    private static getPathParams(lambda);
	    static setLambdaProperties(lambda: LambdaModel): void;
	}
	export function Get(): (target: Object, methodName: string) => void;
	export function Post(): (target: Object, methodName: string) => void;
	export function Put(): (target: Object, methodName: string) => void;
	export function Patch(): (target: Object, methodName: string) => void;
	export function Options(): (target: Object, methodName: string) => void;
	export function Delete(): (target: Object, methodName: string) => void;
	export function Head(): (target: Object, methodName: string) => void;
	export function Any(): (target: Object, methodName: string) => void;
	/**
	 * "alias" will be the alternative name defined in Body Mapping Templates
	 */
	export function Headers(alias?: any): (target: Object, propertyKey: string) => void;
	export function QueryParams(alias?: any): (target: Object, propertyKey: string) => void;
	export function PathParams(alias?: any): (target: Object, propertyKey: string) => void;
	export function Method(alias?: any): (target: Object, propertyKey: string) => void;
	export function Body(alias?: any): (target: Object, propertyKey: string) => void;
	export function Path(pattern: string): (target: Object, propertyKey: string) => void;
	export function PathConfig(config: any): (target: any) => void;
	export function PathParam(name: string): (target: Object, propertyKey: string, index: number) => void;

}
declare module 'lambda-phi/lib/lambda-manager' {
	import LambdaModel from 'lambda-phi/lib/lambda-model';
	import { LambdaConfig } from 'lambda-phi/lib/lambda-config';
	export default class LambdaManager {
	    static instance: LambdaManager;
	    private _rawHandler;
	    private _event;
	    private _context;
	    private _callback;
	    private _lambdaModels;
	    private _lambdas;
	    upsertLambdaModel(target: any): LambdaModel;
	    setLambda(target: any, lambdaConfig: LambdaConfig): void;
	    setLambdaPath(target: any, path: any): void;
	    private getEvent(lambda);
	    private setLambdaProperties(lambda);
	    private executePostConstructor(lambda);
	    private executeHandler(lambda);
	    private setPreLambdaTimeoutMethod(lambda);
	    processLambdas(): void;
	    getLambdaByName(name: string): LambdaModel;
	    addHandlerMethod(target: any, method: any): void;
	    addPostConstructorMethod(target: any, method: any): void;
	    addPreLambdaTimeoutMethod(target: any, method: string, miliSecondsBeforeTimeout: number): void;
	    addPreLambdaCallbackMethod(target: any, method: string): void;
	    addCallbackProperty(target: any, property: any): void;
	    addEventProperty(target: any, property: any): void;
	    addContextProperty(target: any, property: any): void;
	    private executePreLambdaCallback(lambda);
	    event: any;
	    context: any;
	    callback: any;
	    rawHandler: any;
	}

}
declare module 'lambda-phi' {
	import { LambdaConfig } from 'lambda-phi/lib/lambda-config';
	export function LambdaHandler(event: any, context: any, callback: any): void;
	export function Lambda(lambdaConfig?: LambdaConfig): (target: any) => void;
	export function PostConstructor(): (target: Object, methodName: string) => void;
	export function PreLambdaTimeout(miliSecondsBeforeTimeout: number): (target: Object, methodName: string) => void;
	export function PreLambdaCallback(): (target: Object, methodName: string) => void;
	export function Context(): (target: Object, propertyKey: string) => void;
	export function Callback(): (target: Object, propertyKey: string) => void;
	export function Event(): (target: Object, propertyKey: string) => void;

}
