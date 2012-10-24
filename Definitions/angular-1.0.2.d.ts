// Type definitions for Angular JS 1.0.2
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="jquery-1.8.d.ts" />

declare var angular: ng.AngularStatic;

///////////////////////////////////////////////////////////////////////////////
// ng module (angular.js)
///////////////////////////////////////////////////////////////////////////////
module ng {

    // For the sake of simplicity, let's assume jQuery is always preferred
    interface JQLiteOrBetter extends JQuery { }

    // All service providers extend this interface
    export interface ServiceProvider {
        $get(): any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AngularStatic
    // see http://docs.angularjs.org/api
    ///////////////////////////////////////////////////////////////////////////
    export interface AngularStatic {
        bind(context: any, fn: Function, ...args: any[]): Function;
        bootstrap(element: Element, modules?: any[]): auto.InjectorService;
        copy(source: any, destination?: any): any;
        element: JQLiteOrBetter;
        equals(value1: any, value2: any): bool;
        extend(destination: any, ...sources: any[]): any;
        forEach(obj: any, iterator: (value, key) => any, context?: any): any;
        fromJson(json: string): any;
        identity(arg?: any): any;
        injector(modules?: any[]): auto.InjectorService;
        isArray(value: any): bool;
        isDate(value: any): bool;
        isDefined(value: any): bool;
        isElement(value: any): bool;
        isFunction(value: any): bool;
        isNumber(value: any): bool;
        isObject(value: any): bool;
        isString(value: any): bool;
        isUndefined(value: any): bool;
        lowercase(str: string): string;        
        module(name: string, requires?: string[], configFunction?: Function): Module;
        noop(...args: any[]): void;
        toJson(obj: any, pretty?: bool): string;
        uppercase(str: string): string;
        version: {
            full: string;
            major: number;
            minor: number;
            dot: number;
            codename: string;
        };
    }

    ///////////////////////////////////////////////////////////////////////////
    // Module
    // see http://docs.angularjs.org/api/angular.Module
    ///////////////////////////////////////////////////////////////////////////
    export interface Module {
        config(configFn: Function): Module;
        constant(name: string, value: any): Module;
        controller(name: string, controllerConstructor: Function): Module;
        controller(name: string, inlineAnnotadedConstructor: any[]): Module;
        directive(name: string, directiveFactory: Function): Module;
        factory(name: string, serviceFactoryFunction: Function): Module;
        filter(name: string, filterFactoryFunction: Function): Module;
        provider(name: string, serviceProviderConstructor: Function): Module;
        run(initializationFunction: Function): Module;
        service(name: string, serviceConstructor: Function): Module;
        value(name: string, value: any): Module;

        // Properties
        name: string;
        requires: string[];
    }

    ///////////////////////////////////////////////////////////////////////////
    // Attributes
    // see http://docs.angularjs.org/api/ng.$compile.directive.Attributes
    ///////////////////////////////////////////////////////////////////////////
    export interface Attributes {
        $set(name: string, value: any): void;
        $attr: any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // FormController
    // see http://docs.angularjs.org/api/ng.directive:form.FormController
    ///////////////////////////////////////////////////////////////////////////
    export interface FormController {
        $pristine: bool;
        $dirty: bool;
        $valid: bool;
        $invalid: bool;
        $error: any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // NgModelController
    // see http://docs.angularjs.org/api/ng.directive:ngModel.NgModelController
    ///////////////////////////////////////////////////////////////////////////
    export interface NgModelController {
        $render(): void;
        $setValidity(validationErrorKey: string, isValid: bool): void;
        $setViewValue(value: string): void;

        // XXX Not sure about the types here. Documentation states it's a string, but
        // I've seen it receiving other types throughout the code.
        // Falling back to any for now.
        $viewValue: any;

        // XXX Same as avove
        $modelValue: any;
        
        $parsers: ModelParser[];
        $formatters: ModelFormatter[];
        $error: any;
        $pristine: bool;
        $dirty: bool;
        $valid: bool;
        $invalid: bool;        
    }

    export interface ModelParser {
        (value: any): any;
    }

    export interface ModelFormatter {
        (value: any): any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Scope
    // see http://docs.angularjs.org/api/ng.$rootScope.Scope
    ///////////////////////////////////////////////////////////////////////////
    export interface Scope {
        // Documentation says exp is optional, but actual implementaton counts on it
        $apply(exp: string): any;
        $apply(exp: (scope: Scope) => any): any;
        
        $broadcast(name: string, ...args: any[]): AngularEvent;
        $destroy(): void;
        $digest(): void;
        $emit(name: string, ...args: any[]): AngularEvent;
        
        // Documentation says exp is optional, but actual implementaton counts on it
        $eval(expression: string): any;
        $eval(expression: (scope: Scope) => any): any;

        // Documentation says exp is optional, but actual implementaton counts on it
        $evalAsync(expression: string): void;
        $evalAsync(expression: (scope: Scope) => any): void;

        // Defaults to false by the implementation checking strategy
        $new(isolate?: bool): Scope;

        $on(name: string, listener: (event: AngularEvent, ...args: any[]) => any): Function;
        
        $watch(watchExpression: string, listener?: string, objectEquality?: bool): Function;
        $watch(watchExpression: string, listener?: (newValue: any, oldValue: any, scope: Scope) => any, objectEquality?: bool): Function;
        $watch(watchExpression: (scope: Scope) => any, listener?: string, objectEquality?: bool): Function;
        $watch(watchExpression: (scope: Scope) => any, listener?: (newValue: any, oldValue: any, scope: Scope) => any, objectEquality?: bool): Function;
        
        $id: number;
    }

    export interface AngularEvent {
        targetScope: Scope;
        currentScope: Scope;
        name: string;        
        preventDefault: Function;
        defaultPrevented: bool;

        // Available only events that were $emit-ted
        stopPropagation?: Function;
    }    

    ///////////////////////////////////////////////////////////////////////////
    // WindowService
    // see http://docs.angularjs.org/api/ng.$window
    ///////////////////////////////////////////////////////////////////////////
    export interface WindowService extends Window {}

    ///////////////////////////////////////////////////////////////////////////
    // BrowserService
    // TODO undocumented, so we need to get it from the source code
    ///////////////////////////////////////////////////////////////////////////
    export interface BrowserService {}

    ///////////////////////////////////////////////////////////////////////////
    // TimeoutService
    // see http://docs.angularjs.org/api/ng.$timeout
    ///////////////////////////////////////////////////////////////////////////
    export interface TimeoutService {
        (func: Function, delay?: number, invokeApply?: bool): Promise;
        cancel(promise: Promise): bool;
    }

    ///////////////////////////////////////////////////////////////////////////
    // FilterService
    // see http://docs.angularjs.org/api/ng.$filter
    // see http://docs.angularjs.org/api/ng.$filterProvider
    ///////////////////////////////////////////////////////////////////////////
    export interface FilterService {
        (name: string): Function;
    }

    export interface FilterProvider extends ServiceProvider {
        register(name: string, filterFactory: Function): ServiceProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // LocaleService
    // see http://docs.angularjs.org/api/ng.$locale
    ///////////////////////////////////////////////////////////////////////////
    export interface LocaleService {
        id: string;

        // These are not documented
        // Check angular's i18n files for exemples
        NUMBER_FORMATS: LocaleNumberFormatDescriptor;
        DATETIME_FORMATS: any;
        pluralCat: (num: any) => string;
    }

    export interface LocaleNumberFormatDescriptor {
        DECIMAL_SEP: string;
        GROUP_SEP: string;
        PATTERNS: LocaleNumberPatternDescriptor[];
        CURRENCY_SYM: string;
    }

    export interface LocaleNumberPatternDescriptor {
        minInt: number;
        minFrac: number;
        maxFrac: number;
        posPre: string;
        posSuf: string;
        negPre: string;
        negSuf: string;
        gSize: number;
        lgSize: number;
    }

    export interface LacaleDateTimeFormatDescriptor {
        MONTH: string[];
        SHORTMONTH: string[];
        DAY: string[];
        SHORTDAY: string[];
        AMPMS: string[];
        medium: string;
        short: string;
        fullDate: string;
        longDate: string;
        mediumDate: string;
        shortDate: string;
        mediumTime: string;
        shortTime: string;
    }

    ///////////////////////////////////////////////////////////////////////////
    // LogService
    // see http://docs.angularjs.org/api/ng.$log
    ///////////////////////////////////////////////////////////////////////////
    export interface LogService {
        error: LogCall;
        info: LogCall;
        log: LogCall;
        warn: LogCall;
    }

    // We define this as separete interface so we can reopen it later for
    // the ngMock module.
    interface LogCall {
        (...args: any[]): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ParseService
    // see http://docs.angularjs.org/api/ng.$parse
    ///////////////////////////////////////////////////////////////////////////
    export interface ParseService {
        (expression: string): CompiledExpression;
    }

    export interface CompiledExpression {
        (context: any, locals?: any): any;

        // If value is not provided, undefined is gonna be used since the implementation
        // does not check the parameter. Let's force a value for consistency. If consumer
        // whants to undefine it, pass the undefined value explicitly.
        assign(context: any, value: any): any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // LocationService
    // see http://docs.angularjs.org/api/ng.$location
    // see http://docs.angularjs.org/api/ng.$locationProvider
    // see http://docs.angularjs.org/guide/dev_guide.services.$location
    ///////////////////////////////////////////////////////////////////////////
    export interface LocationService {
        absUrl(): string;
        hash(): string;
        hash(newHash: string): LocationService;
        host(): string;
        path(): string;
        path(newPath: string): LocationService;
        port(): number;
        protocol(): string;
        replace(): LocationService;
        search(): string;
        search(parametersMap: any): LocationService;
        search(parameter: string, parameterValue: any): LocationService;
        url(): string;
        url(url: string): LocationService;
    }

    export interface LocationProvider extends ServiceProvider {
        hashPrefix(): string;
        hashPrefix(prefix: string): LocationProvider;
        html5Mode(): bool;

        // Documentation states that parameter is string, but
        // implementation tests it as boolean, which makes more sense
        // since this is a toggler
        html5Mode(active: bool): LocationProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // DocumentService
    // see http://docs.angularjs.org/api/ng.$document
    ///////////////////////////////////////////////////////////////////////////
    export interface DocumentService extends Document {}

    ///////////////////////////////////////////////////////////////////////////
    // ExceptionHandlerService
    // see http://docs.angularjs.org/api/ng.$exceptionHandler
    ///////////////////////////////////////////////////////////////////////////
    export interface ExceptionHandlerService {
        (exception: Error, cause?: string): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // RootElementService
    // see http://docs.angularjs.org/api/ng.$rootElement
    ///////////////////////////////////////////////////////////////////////////
    export interface RootElementService extends JQLiteOrBetter {}

    ///////////////////////////////////////////////////////////////////////////
    // QService
    // see http://docs.angularjs.org/api/ng.$q
    ///////////////////////////////////////////////////////////////////////////
    export interface QService {
        all(promises: Promise[]): Promise;
        defer(): Deferred;
        reject(reason?: any): Promise;
        when(value: any): Promise;
    }

    export interface Promise {
        then(successCallback: Function, errorCallback?: Function): Promise;
    }

    export interface Deferred {
        resolve(value?: any): void;
        reject(reason?: string): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AnchorScrollService
    // see http://docs.angularjs.org/api/ng.$anchorScroll
    ///////////////////////////////////////////////////////////////////////////
    export interface AnchorScrollService {
        (): void;
    }

    export interface AnchorScrollProvider extends ServiceProvider {
        disableAutoScrolling(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // CacheFactoryService
    // see http://docs.angularjs.org/api/ng.$cacheFactory
    ///////////////////////////////////////////////////////////////////////////
    export interface CacheFactoryService {
        // Lets not foce the optionsMap to have the capacity member. Even though
        // it's the ONLY option considered by the implementation today, a consumer
        // might find it useful to associate some other options to the cache object.
        //(cacheId: string, optionsMap?: { capacity: number; }): CacheObject;
        (cacheId: string, optionsMap?: { capacity: number; }): CacheObject;

        // Methods bellow are not documented
        info(): any;
        get(cacheId: string): CacheObject;
    }

    export interface CacheObject {
        info(): {
            id: string;
            size: number;

            // Not garanteed to have, since it's a non-mandatory option
            //capacity: number;
        };
        put(key: string, value?: any): void;
        get(key: string): any;
        remove(key: string): void;
        removeAll(): void;
        destroy(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // CompileService
    // see http://docs.angularjs.org/api/ng.$compile
    // see http://docs.angularjs.org/api/ng.$compileProvider
    ///////////////////////////////////////////////////////////////////////////
    export interface CompileService {
        (element: string, transclude?: TemplateLinkingFunction, maxPriority?: number): TemplateLinkingFunction;
        (element: Element, transclude?: TemplateLinkingFunction, maxPriority?: number): TemplateLinkingFunction;
        (element: JQLiteOrBetter, transclude?: TemplateLinkingFunction, maxPriority?: number): TemplateLinkingFunction;
    }

    export interface CompileProvider extends ServiceProvider {
        directive(name: string, directiveFactory: Function): CompileProvider;

        // Undocumented, but it is there...
        directive(directivesMap: any): CompileProvider;
    }

    export interface TemplateLinkingFunction {
        // Let's hint but not force cloneAttachFn's signature
        (scope: Scope, cloneAttachFn?: (clonedElement?: JQLiteOrBetter, scope?: Scope) => any): JQLiteOrBetter;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ControllerService
    // see http://docs.angularjs.org/api/ng.$controller
    // see http://docs.angularjs.org/api/ng.$controllerProvider
    ///////////////////////////////////////////////////////////////////////////
    export interface ControllerService {
        // Although the documentation doesn't state this, locals are optional
        (controllerConstructor: Function, locals?: any): any;
        (controllerName: string, locals?: any): any;
    }

    export interface ControlerPovider extends ServiceProvider {
        register(name: string, controllerConstructor: Function): void;
        register(name: string, dependencyAnnotadedConstructor: any[]): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // HttpService
    // see http://docs.angularjs.org/api/ng.$http
    ///////////////////////////////////////////////////////////////////////////
    export interface HttpService {
        // At least moethod and url must be provided...
        (config: RequestConfig): HttpPromise;
        get(url: string, RequestConfig?: any): HttpPromise;
        delete(url: string, RequestConfig?: any): HttpPromise;
        head(url: string, RequestConfig?: any): HttpPromise;
        jsonp(url: string, RequestConfig?: any): HttpPromise;
        post(url: string, data: any, RequestConfig?: any): HttpPromise;
        put(url: string, data: any, RequestConfig?: any): HttpPromise;
        defaults: RequestConfig;

        // For debugging, BUT it is documented as public, so...
        pendingRequests: any[];
    }

    // This is just for hinting.    
    // Some opetions might not be available depending on the request. 
    // see http://docs.angularjs.org/api/ng.$http#Usage for options explanations
    export interface RequestConfig {
        method: string;
        url: string;
        params?: any;
        
        // XXX it has it's own structure...  perhaps we should define it in the future
        headers?: any;
        
        cache?: any;
        timeout?: number;
        withCredentials?: bool;

        // These accept multiple types, so let's defile them as any
        data?: any;
        transformRequest?: any;
        transformResponse?: any;
    }

    export interface HttpPromise extends Promise {
        success(callback: (response: DestructuredResponse) => any): HttpPromise;
        error(callback: (response: DestructuredResponse) => any): HttpPromise;
    }

    export interface DestructuredResponse {
        data: any;
        status: number;
        headers: (headerName: string) => string;
        config: RequestConfig;
    }

    export interface HttpProvider extends ServiceProvider {        
        defaults: RequestConfig;
    }

    ///////////////////////////////////////////////////////////////////////////
    // HttpBackendService
    // see http://docs.angularjs.org/api/ng.$httpBackend
    // You should never need to use this service directly.
    ///////////////////////////////////////////////////////////////////////////
    export interface HttpBackendService {
        // XXX Perhaps define callback signature in the future
        (method: string, url: string, post?: any, callback?: Function, headers?: any, timeout?: number, withCredentials?: bool); void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // InterpolateService
    // see http://docs.angularjs.org/api/ng.$interpolate
    // see http://docs.angularjs.org/api/ng.$interpolateProvider
    ///////////////////////////////////////////////////////////////////////////
    export interface InterpolateService {
        (text: string, mustHaveExpression?: bool): InterpolationFunction;
        endSymbol(): string;
        startSymbol(): string;
    }

    export interface InterpolationFunction {
        (context: any): string;
    }

    export interface InterpolateProvider extends ServiceProvider {
        startSymbol(): string;
        startSymbol(value: string): InterpolateProvider;
        endSymbol(): string;
        endSymbol(value: string): InterpolateProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // RouteParamsService
    // see http://docs.angularjs.org/api/ng.$routeParams
    ///////////////////////////////////////////////////////////////////////////
    export interface RouteParamsService {}

    ///////////////////////////////////////////////////////////////////////////
    // TemplateCacheService
    // see http://docs.angularjs.org/api/ng.$templateCache
    ///////////////////////////////////////////////////////////////////////////
    export interface TemplateCacheService extends CacheObject {}

    ///////////////////////////////////////////////////////////////////////////
    // RootScopeService
    // see http://docs.angularjs.org/api/ng.$rootScope
    ///////////////////////////////////////////////////////////////////////////
    export interface RootScopeService extends Scope {}

    ///////////////////////////////////////////////////////////////////////////
    // RouteService
    // see http://docs.angularjs.org/api/ng.$route
    // see http://docs.angularjs.org/api/ng.$routeProvider
    ///////////////////////////////////////////////////////////////////////////
    export interface RouteService {
        reload(): void;
        routes: any;

        // May not always be available. For instance, current will not be available
        // to a controller that was not initialized as a result of a route maching.
        current?: CurrentRoute;
    }    

    // see http://docs.angularjs.org/api/ng.$routeProvider#when for options explanations
    export interface Route {
        controller?: any;
        template?: string;
        templateUrl?: string;
        resolve?: any;
        redirectTo?: any;
        reloadOnSearch?: bool;
    }

    // see http://docs.angularjs.org/api/ng.$route#current
    export interface CurrentRoute extends Route {
        locals: {
            $scope: Scope;
            $template: string;
        };
    }

    export interface RouteProviderProvider extends ServiceProvider {
        otherwise(params: any): RouteProviderProvider;
        when(path: string, route: Route): RouteProviderProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AUTO module (angular.js)
    ///////////////////////////////////////////////////////////////////////////
    module auto {

        ///////////////////////////////////////////////////////////////////////
        // InjectorService
        // see http://docs.angularjs.org/api/AUTO.$injector
        ///////////////////////////////////////////////////////////////////////
        export interface InjectorService {
            annotate(fn: Function): string[];
            annotate(inlineAnnotadedFunction: any[]): string[];
            get(name: string): any;
            instantiate(typeConstructor: Function, locals?: any): any;
            invoke(func: Function, context?: any, locals?: any): any;
        }

        ///////////////////////////////////////////////////////////////////////
        // ProvideService
        // see http://docs.angularjs.org/api/AUTO.$provide
        ///////////////////////////////////////////////////////////////////////
        export interface ProvideService {
            // Documentation says it returns the registered instance, but actual
            // implementation does not return anything.
            // constant(name: string, value: any): any;
            constant(name: string, value: any): void;

            decorator(name: string, decorator: Function): void;
            factory(name: string, serviceFactoryFunction: Function): ng.ServiceProvider;
            provider(name: string, provider: ng.ServiceProvider): ng.ServiceProvider;
            provider(name: string, serviceProviderConstructor: Function): ng.ServiceProvider;
            service(name: string, constructor: Function): ng.ServiceProvider;
            value(name: string, value: any): ng.ServiceProvider;
        }

    }

}
