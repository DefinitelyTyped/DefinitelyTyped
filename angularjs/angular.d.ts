// Type definitions for Angular JS 1.0
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

declare var angular: ng.IAngularStatic;

///////////////////////////////////////////////////////////////////////////////
// ng module (angular.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng {

    // All service providers extend this interface
    interface IServiceProvider {
        $get(): any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AngularStatic
    // see http://docs.angularjs.org/api
    ///////////////////////////////////////////////////////////////////////////
    interface IAngularStatic {
        bind(context: any, fn: Function, ...args: any[]): Function;
        bootstrap(element: string, modules?: any[]): auto.IInjectorService;
        bootstrap(element: JQuery, modules?: any[]): auto.IInjectorService;
        bootstrap(element: Element, modules?: any[]): auto.IInjectorService;
        copy(source: any, destination?: any): any;
        element: JQueryStatic;
        equals(value1: any, value2: any): bool;
        extend(destination: any, ...sources: any[]): any;
        forEach(obj: any, iterator: (value, key) => any, context?: any): any;
        fromJson(json: string): any;
        identity(arg?: any): any;
        injector(modules?: any[]): auto.IInjectorService;
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
        /** construct your angular application
		official docs: Interface for configuring angular modules.
		see: http://docs.angularjs.org/api/angular.Module
		*/
        module(
            /** name of your module you want to create */
            name: string,
            /** name of modules yours depends on */
            requires?: string[],
            configFunction?: Function): IModule;
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
    interface IModule {
        animation(name: string, animationFactory: Function): IModule;
        animation(name: string, inlineAnnotadedFunction: any[]): IModule;
        animation(object: Object): IModule;
        /** configure existing services.  
		Use this method to register work which needs to be performed on module loading
		 */
        config(configFn: Function): IModule;
        /** configure existing services.  
		Use this method to register work which needs to be performed on module loading
		 */
        config(inlineAnnotadedFunction: any[]): IModule;
        constant(name: string, value: any): IModule;
        constant(object: Object): IModule;
        controller(name: string, controllerConstructor: Function): IModule;
        controller(name: string, inlineAnnotadedConstructor: any[]): IModule;
        controller(object : Object): IModule;
        directive(name: string, directiveFactory: (...params:any[])=> IDirective): IModule;
        directive(name: string, inlineAnnotadedFunction: any[]): IModule;
        directive(object: Object): IModule;        
        factory(name: string, serviceFactoryFunction: Function): IModule;
        factory(name: string, inlineAnnotadedFunction: any[]): IModule;
        factory(object: Object): IModule;
        filter(name: string, filterFactoryFunction: Function): IModule;
        filter(name: string, inlineAnnotadedFunction: any[]): IModule;
        filter(object: Object): IModule;
        provider(name: string, serviceProviderConstructor: Function): IModule;
        provider(name: string, inlineAnnotadedConstructor: any[]): IModule;
        provider(object: Object): IModule;
        run(initializationFunction: Function): IModule;
        run(inlineAnnotadedFunction: any[]): IModule;
        service(name: string, serviceConstructor: Function): IModule;
        service(name: string, inlineAnnotadedConstructor: any[]): IModule;
        service(object: Object): IModule;
        value(name: string, value: any): IModule;
        value(object: Object): IModule;

        // Properties
        name: string;
        requires: string[];
    }

    ///////////////////////////////////////////////////////////////////////////
    // Attributes
    // see http://docs.angularjs.org/api/ng.$compile.directive.Attributes
    ///////////////////////////////////////////////////////////////////////////
    interface IAttributes {
        $set(name: string, value: any): void;
        $attr: any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // FormController
    // see http://docs.angularjs.org/api/ng.directive:form.FormController
    ///////////////////////////////////////////////////////////////////////////
    interface IFormController {
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
    interface INgModelController {
        $render(): void;
        $setValidity(validationErrorKey: string, isValid: bool): void;
        $setViewValue(value: string): void;

        // XXX Not sure about the types here. Documentation states it's a string, but
        // I've seen it receiving other types throughout the code.
        // Falling back to any for now.
        $viewValue: any;

        // XXX Same as avove
        $modelValue: any;

        $parsers: IModelParser[];
        $formatters: IModelFormatter[];
        $error: any;
        $pristine: bool;
        $dirty: bool;
        $valid: bool;
        $invalid: bool;
    }

    interface IModelParser {
        (value: any): any;
    }

    interface IModelFormatter {
        (value: any): any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Scope
    // see http://docs.angularjs.org/api/ng.$rootScope.Scope
    ///////////////////////////////////////////////////////////////////////////
    interface IScope {
        // Documentation says exp is optional, but actual implementaton counts on it
        $apply(exp: string): any;
        $apply(exp: (scope: IScope) => any): any;

        $broadcast(name: string, ...args: any[]): IAngularEvent;
        $destroy(): void;
        $digest(): void;
        $emit(name: string, ...args: any[]): IAngularEvent;

        // Documentation says exp is optional, but actual implementaton counts on it
        $eval(expression: string): any;
        $eval(expression: (scope: IScope) => any): any;

        // Documentation says exp is optional, but actual implementaton counts on it
        $evalAsync(expression: string): void;
        $evalAsync(expression: (scope: IScope) => any): void;

        // Defaults to false by the implementation checking strategy
        $new(isolate?: bool): IScope;

        $on(name: string, listener: (event: IAngularEvent, ...args: any[]) => any): Function;

        $watch(watchExpression: string, listener?: string, objectEquality?: bool): Function;
        $watch(watchExpression: string, listener?: (newValue: any, oldValue: any, scope: IScope) => any, objectEquality?: bool): Function;
        $watch(watchExpression: (scope: IScope) => any, listener?: string, objectEquality?: bool): Function;
        $watch(watchExpression: (scope: IScope) => any, listener?: (newValue: any, oldValue: any, scope: IScope) => any, objectEquality?: bool): Function;

        $id: number;
    }

    interface IAngularEvent {
        targetScope: IScope;
        currentScope: IScope;
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
    interface IWindowService extends Window {}

    ///////////////////////////////////////////////////////////////////////////
    // BrowserService
    // TODO undocumented, so we need to get it from the source code
    ///////////////////////////////////////////////////////////////////////////
    interface IBrowserService {}

    ///////////////////////////////////////////////////////////////////////////
    // TimeoutService
    // see http://docs.angularjs.org/api/ng.$timeout
    ///////////////////////////////////////////////////////////////////////////
    interface ITimeoutService {
        (func: Function, delay?: number, invokeApply?: bool): IPromise;
        cancel(promise: IPromise): bool;
    }

    ///////////////////////////////////////////////////////////////////////////
    // FilterService
    // see http://docs.angularjs.org/api/ng.$filter
    // see http://docs.angularjs.org/api/ng.$filterProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IFilterService {
        (name: string): Function;
    }

    interface IFilterProvider extends IServiceProvider {
        register(name: string, filterFactory: Function): IServiceProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // LocaleService
    // see http://docs.angularjs.org/api/ng.$locale
    ///////////////////////////////////////////////////////////////////////////
    interface ILocaleService {
        id: string;

        // These are not documented
        // Check angular's i18n files for exemples
        NUMBER_FORMATS: ILocaleNumberFormatDescriptor;
        DATETIME_FORMATS: ILocaleDateTimeFormatDescriptor;
        pluralCat: (num: any) => string;
    }

    interface ILocaleNumberFormatDescriptor {
        DECIMAL_SEP: string;
        GROUP_SEP: string;
        PATTERNS: ILocaleNumberPatternDescriptor[];
        CURRENCY_SYM: string;
    }

    interface ILocaleNumberPatternDescriptor {
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

    interface ILocaleDateTimeFormatDescriptor {
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
    interface ILogService {
        error: ILogCall;
        info: ILogCall;
        log: ILogCall;
        warn: ILogCall;
    }

    // We define this as separete interface so we can reopen it later for
    // the ngMock module.
    interface ILogCall {
        (...args: any[]): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ParseService
    // see http://docs.angularjs.org/api/ng.$parse
    ///////////////////////////////////////////////////////////////////////////
    interface IParseService {
        (expression: string): ICompiledExpression;
    }

    interface ICompiledExpression {
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
    interface ILocationService {
        absUrl(): string;
        hash(): string;
        hash(newHash: string): ILocationService;
        host(): string;
        path(): string;
        path(newPath: string): ILocationService;
        port(): number;
        protocol(): string;
        replace(): ILocationService;
        search(): string;
        search(parametersMap: any): ILocationService;
        search(parameter: string, parameterValue: any): ILocationService;
        url(): string;
        url(url: string): ILocationService;
    }

    interface ILocationProvider extends IServiceProvider {
        hashPrefix(): string;
        hashPrefix(prefix: string): ILocationProvider;
        html5Mode(): bool;

        // Documentation states that parameter is string, but
        // implementation tests it as boolean, which makes more sense
        // since this is a toggler
        html5Mode(active: bool): ILocationProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // DocumentService
    // see http://docs.angularjs.org/api/ng.$document
    ///////////////////////////////////////////////////////////////////////////
    interface IDocumentService extends Document {}

    ///////////////////////////////////////////////////////////////////////////
    // ExceptionHandlerService
    // see http://docs.angularjs.org/api/ng.$exceptionHandler
    ///////////////////////////////////////////////////////////////////////////
    interface IExceptionHandlerService {
        (exception: Error, cause?: string): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // RootElementService
    // see http://docs.angularjs.org/api/ng.$rootElement
    ///////////////////////////////////////////////////////////////////////////
    interface IRootElementService extends JQuery {}

    ///////////////////////////////////////////////////////////////////////////
    // QService
    // see http://docs.angularjs.org/api/ng.$q
    ///////////////////////////////////////////////////////////////////////////
    interface IQService {
        all(promises: IPromise[]): IPromise;
        defer(): IDeferred;
        reject(reason?: any): IPromise;
        when(value: any): IPromise;
    }

    interface IPromise {
        then(successCallback: (promiseValue: any) => any, errorCallback?: (reason: any) => any): IPromise;
    }

    interface IDeferred {
        resolve(value?: any): void;
        reject(reason?: any): void;
        promise: IPromise;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AnchorScrollService
    // see http://docs.angularjs.org/api/ng.$anchorScroll
    ///////////////////////////////////////////////////////////////////////////
    interface IAnchorScrollService {
        (): void;
    }

    interface IAnchorScrollProvider extends IServiceProvider {
        disableAutoScrolling(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // CacheFactoryService
    // see http://docs.angularjs.org/api/ng.$cacheFactory
    ///////////////////////////////////////////////////////////////////////////
    interface ICacheFactoryService {
        // Lets not foce the optionsMap to have the capacity member. Even though
        // it's the ONLY option considered by the implementation today, a consumer
        // might find it useful to associate some other options to the cache object.
        //(cacheId: string, optionsMap?: { capacity: number; }): CacheObject;
        (cacheId: string, optionsMap?: { capacity: number; }): ICacheObject;

        // Methods bellow are not documented
        info(): any;
        get (cacheId: string): ICacheObject;
    }

    interface ICacheObject {
        info(): {
            id: string;
            size: number;

            // Not garanteed to have, since it's a non-mandatory option
            //capacity: number;
        };
        put(key: string, value?: any): void;
        get (key: string): any;
        remove(key: string): void;
        removeAll(): void;
        destroy(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // CompileService
    // see http://docs.angularjs.org/api/ng.$compile
    // see http://docs.angularjs.org/api/ng.$compileProvider
    ///////////////////////////////////////////////////////////////////////////
    interface ICompileService {
        (element: string, transclude?: ITemplateLinkingFunction, maxPriority?: number): ITemplateLinkingFunction;
        (element: Element, transclude?: ITemplateLinkingFunction, maxPriority?: number): ITemplateLinkingFunction;
        (element: JQuery, transclude?: ITemplateLinkingFunction, maxPriority?: number): ITemplateLinkingFunction;
    }

    interface ICompileProvider extends IServiceProvider {
        directive(name: string, directiveFactory: Function): ICompileProvider;

        // Undocumented, but it is there...
        directive(directivesMap: any): ICompileProvider;
    }

    interface ITemplateLinkingFunction {
        // Let's hint but not force cloneAttachFn's signature
        (scope: IScope, cloneAttachFn?: (clonedElement?: JQuery, scope?: IScope) => any): JQuery;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ControllerService
    // see http://docs.angularjs.org/api/ng.$controller
    // see http://docs.angularjs.org/api/ng.$controllerProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IControllerService {
        // Although the documentation doesn't state this, locals are optional
        (controllerConstructor: Function, locals?: any): any;
        (controllerName: string, locals?: any): any;
    }

    interface IControlerProvider extends IServiceProvider {
        register(name: string, controllerConstructor: Function): void;
        register(name: string, dependencyAnnotadedConstructor: any[]): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // HttpService
    // see http://docs.angularjs.org/api/ng.$http
    ///////////////////////////////////////////////////////////////////////////
    interface IHttpService {
        // At least moethod and url must be provided...
        (config: IRequestConfig): IHttpPromise;
        get (url: string, RequestConfig?: any): IHttpPromise;
        delete (url: string, RequestConfig?: any): IHttpPromise;
        head(url: string, RequestConfig?: any): IHttpPromise;
        jsonp(url: string, RequestConfig?: any): IHttpPromise;
        post(url: string, data: any, RequestConfig?: any): IHttpPromise;
        put(url: string, data: any, RequestConfig?: any): IHttpPromise;
        defaults: IRequestConfig;

        // For debugging, BUT it is documented as public, so...
        pendingRequests: any[];
    }

    // This is just for hinting.    
    // Some opetions might not be available depending on the request. 
    // see http://docs.angularjs.org/api/ng.$http#Usage for options explanations
    interface IRequestConfig {
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

    interface IHttpPromiseCallbackArg {
        data?: any;
        status?: number;
        headers?: (headerName: string) => string;
        config?: IRequestConfig;
    }

    interface IHttpPromise extends IPromise {
        success(callback: (data: any, status: number, headers: (headerName: string) => string, config: IRequestConfig) => any): IHttpPromise;
        error(callback: (data: any, status: number, headers: (headerName: string) => string, config: IRequestConfig) => any): IHttpPromise;
        then(successCallback: (response: IHttpPromiseCallbackArg) => any, errorCallback?: (response: IHttpPromiseCallbackArg) => any): IPromise;
    }

    interface IHttpProvider extends IServiceProvider {
        defaults: IRequestConfig;
        responseInterceptors: any[];
    }

    ///////////////////////////////////////////////////////////////////////////
    // HttpBackendService
    // see http://docs.angularjs.org/api/ng.$httpBackend
    // You should never need to use this service directly.
    ///////////////////////////////////////////////////////////////////////////
    interface IHttpBackendService {
        // XXX Perhaps define callback signature in the future
        (method: string, url: string, post?: any, callback?: Function, headers?: any, timeout?: number, withCredentials?: bool): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // InterpolateService
    // see http://docs.angularjs.org/api/ng.$interpolate
    // see http://docs.angularjs.org/api/ng.$interpolateProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IInterpolateService {
        (text: string, mustHaveExpression?: bool): IInterpolationFunction;
        endSymbol(): string;
        startSymbol(): string;
    }

    interface IInterpolationFunction {
        (context: any): string;
    }

    interface IInterpolateProvider extends IServiceProvider {
        startSymbol(): string;
        startSymbol(value: string): IInterpolateProvider;
        endSymbol(): string;
        endSymbol(value: string): IInterpolateProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // RouteParamsService
    // see http://docs.angularjs.org/api/ng.$routeParams
    ///////////////////////////////////////////////////////////////////////////
    interface IRouteParamsService {}

    ///////////////////////////////////////////////////////////////////////////
    // TemplateCacheService
    // see http://docs.angularjs.org/api/ng.$templateCache
    ///////////////////////////////////////////////////////////////////////////
    interface ITemplateCacheService extends ICacheObject {}

    ///////////////////////////////////////////////////////////////////////////
    // RootScopeService
    // see http://docs.angularjs.org/api/ng.$rootScope
    ///////////////////////////////////////////////////////////////////////////
    interface IRootScopeService extends IScope {}

    ///////////////////////////////////////////////////////////////////////////
    // RouteService
    // see http://docs.angularjs.org/api/ng.$route
    // see http://docs.angularjs.org/api/ng.$routeProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IRouteService {
        reload(): void;
        routes: any;

        // May not always be available. For instance, current will not be available
        // to a controller that was not initialized as a result of a route maching.
        current?: ICurrentRoute;
    }

    // see http://docs.angularjs.org/api/ng.$routeProvider#when for options explanations
    interface IRoute {
        controller?: any;
        template?: string;
        templateUrl?: string;
        resolve?: any;
        redirectTo?: any;
        reloadOnSearch?: bool;
    }

    // see http://docs.angularjs.org/api/ng.$route#current
    interface ICurrentRoute extends IRoute {
        locals: {
            $scope: IScope;
            $template: string;
        };
    }

    interface IRouteProvider extends IServiceProvider {
        otherwise(params: any): IRouteProvider;
        when(path: string, route: IRoute): IRouteProvider;
    }
    
    ///////////////////////////////////////////////////////////////////////////
    // Directive
    // see http://docs.angularjs.org/api/ng.$compileProvider#directive
    // and http://docs.angularjs.org/guide/directive
    ///////////////////////////////////////////////////////////////////////////

    interface IDirective{
        priority?: number;
        template?: string;
        templateUrl?: string;
        replace?: bool;
        transclude?: bool;
        restrict?: string;
        scope?: any;
        link?: Function;
        compile?: Function;
    }


    ///////////////////////////////////////////////////////////////////////////
    // AUTO module (angular.js)
    ///////////////////////////////////////////////////////////////////////////
    export module auto {

        ///////////////////////////////////////////////////////////////////////
        // InjectorService
        // see http://docs.angularjs.org/api/AUTO.$injector
        ///////////////////////////////////////////////////////////////////////
        interface IInjectorService {
            annotate(fn: Function): string[];
            annotate(inlineAnnotadedFunction: any[]): string[];
            get (name: string): any;
            instantiate(typeConstructor: Function, locals?: any): any;
            invoke(func: Function, context?: any, locals?: any): any;
        }

        ///////////////////////////////////////////////////////////////////////
        // ProvideService
        // see http://docs.angularjs.org/api/AUTO.$provide
        ///////////////////////////////////////////////////////////////////////
        interface IProvideService {
            // Documentation says it returns the registered instance, but actual
            // implementation does not return anything.
            // constant(name: string, value: any): any;
            constant(name: string, value: any): void;

            decorator(name: string, decorator: Function): void;
            factory(name: string, serviceFactoryFunction: Function): ng.IServiceProvider;
            provider(name: string, provider: ng.IServiceProvider): ng.IServiceProvider;
            provider(name: string, serviceProviderConstructor: Function): ng.IServiceProvider;
            service(name: string, constructor: Function): ng.IServiceProvider;
            value(name: string, value: any): ng.IServiceProvider;
        }

    }

}
