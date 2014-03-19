// Type definitions for Angular JS 1.2+
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

declare var angular: ng.IAngularStatic;

// Support for painless dependency injection
interface Function {
    $inject:string[];
}

///////////////////////////////////////////////////////////////////////////////
// ng module (angular.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng {

    // All service providers extend this interface
    interface IServiceProvider {
        $get: any;
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
        bootstrap(element: Document, modules?: any[]): auto.IInjectorService;
        copy(source: any, destination?: any): any;
        element: IAugmentedJQueryStatic;
        equals(value1: any, value2: any): boolean;
        extend(destination: any, ...sources: any[]): any;
        forEach(obj: any, iterator: (value: any, key: any) => any, context?: any): any;
        fromJson(json: string): any;
        identity(arg?: any): any;
        injector(modules?: any[]): auto.IInjectorService;
        isArray(value: any): boolean;
        isDate(value: any): boolean;
        isDefined(value: any): boolean;
        isElement(value: any): boolean;
        isFunction(value: any): boolean;
        isNumber(value: any): boolean;
        isObject(value: any): boolean;
        isString(value: any): boolean;
        isUndefined(value: any): boolean;
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
            configFunction?: any): IModule;
        noop(...args: any[]): void;
        toJson(obj: any, pretty?: boolean): string;
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
        animation(name: string, inlineAnnotatedFunction: any[]): IModule;
        animation(object: Object): IModule;
        /** configure existing services.
		Use this method to register work which needs to be performed on module loading
		 */
        config(configFn: Function): IModule;
        /** configure existing services.
		Use this method to register work which needs to be performed on module loading
		 */
        config(inlineAnnotatedFunction: any[]): IModule;
        constant(name: string, value: any): IModule;
        constant(object: Object): IModule;
        controller(name: string, controllerConstructor: Function): IModule;
        controller(name: string, inlineAnnotatedConstructor: any[]): IModule;
        controller(object : Object): IModule;
        directive(name: string, directiveFactory: Function): IModule;
        directive(name: string, inlineAnnotatedFunction: any[]): IModule;
        directive(object: Object): IModule;
        factory(name: string, serviceFactoryFunction: Function): IModule;
        factory(name: string, inlineAnnotatedFunction: any[]): IModule;
        factory(object: Object): IModule;
        filter(name: string, filterFactoryFunction: Function): IModule;
        filter(name: string, inlineAnnotatedFunction: any[]): IModule;
        filter(object: Object): IModule;
        provider(name: string, serviceProviderConstructor: Function): IModule;
        provider(name: string, inlineAnnotatedConstructor: any[]): IModule;
        provider(name: string, providerObject: auto.IProvider): IModule;
        provider(object: Object): IModule;
        run(initializationFunction: Function): IModule;
        run(inlineAnnotatedFunction: any[]): IModule;
        service(name: string, serviceConstructor: Function): IModule;
        service(name: string, inlineAnnotatedConstructor: any[]): IModule;
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
    	// this is necessary to be able to access the scoped attributes. it's not very elegant
    	// because you have to use attrs['foo'] instead of attrs.foo but I don't know of a better way
    	// this should really be limited to return string but it creates this problem: http://stackoverflow.com/q/17201854/165656
    	[name: string]: any;

        // Adds the CSS class value specified by the classVal parameter to the
        // element. If animations are enabled then an animation will be triggered
        // for the class addition.
        $addClass(classVal: string): void;

        // Removes the CSS class value specified by the classVal parameter from the
        // element. If animations are enabled then an animation will be triggered for
        // the class removal.
        $removeClass(classVal: string): void;

        // Set DOM element attribute value.
        $set(key: string, value: any): void;

        // Observes an interpolated attribute.
        // The observer function will be invoked once during the next $digest
        // following compilation. The observer is then invoked whenever the
        // interpolated value changes.
        $observe(name: string, fn:(value?:any)=>any): Function;

        // A map of DOM element attribute names to the normalized name. This is needed
        // to do reverse lookup from normalized name back to actual name.
        $attr: Object;
    }

    ///////////////////////////////////////////////////////////////////////////
    // FormController
    // see http://docs.angularjs.org/api/ng.directive:form.FormController
    ///////////////////////////////////////////////////////////////////////////
    interface IFormController {
        $pristine: boolean;
        $dirty: boolean;
        $valid: boolean;
        $invalid: boolean;
        $error: any;
        $addControl(control: ng.INgModelController): void;
        $removeControl(control: ng.INgModelController): void;
        $setDirty(): void;
        $setPristine(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // NgModelController
    // see http://docs.angularjs.org/api/ng.directive:ngModel.NgModelController
    ///////////////////////////////////////////////////////////////////////////
    interface INgModelController {
        $render(): void;
        $setValidity(validationErrorKey: string, isValid: boolean): void;
        // Documentation states viewValue and modelValue to be a string but other
        // types do work and it's common to use them.
        $setViewValue(value: any): void;
        $viewValue: any;

        $modelValue: any;

        $parsers: IModelParser[];
        $formatters: IModelFormatter[];
        $error: any;
        $pristine: boolean;
        $dirty: boolean;
        $valid: boolean;
        $invalid: boolean;
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
        $apply(): any;
        $apply(exp: string): any;
        $apply(exp: (scope: IScope) => any): any;

        $broadcast(name: string, ...args: any[]): IAngularEvent;
        $destroy(): void;
        $digest(): void;
        $emit(name: string, ...args: any[]): IAngularEvent;

        // Documentation says exp is optional, but actual implementaton counts on it
        $eval(expression: string, args?: Object): any;
        $eval(expression: (scope: IScope) => any, args?: Object): any;

        // Documentation says exp is optional, but actual implementaton counts on it
        $evalAsync(expression: string): void;
        $evalAsync(expression: (scope: IScope) => any): void;

        // Defaults to false by the implementation checking strategy
        $new(isolate?: boolean): IScope;

        $on(name: string, listener: (event: IAngularEvent, ...args: any[]) => any): Function;

        $watch(watchExpression: string, listener?: string, objectEquality?: boolean): Function;
        $watch(watchExpression: string, listener?: (newValue: any, oldValue: any, scope: IScope) => any, objectEquality?: boolean): Function;
        $watch(watchExpression: (scope: IScope) => any, listener?: string, objectEquality?: boolean): Function;
        $watch(watchExpression: (scope: IScope) => any, listener?: (newValue: any, oldValue: any, scope: IScope) => any, objectEquality?: boolean): Function;

        $watchCollection(watchExpression: string, listener: (newValue: any, oldValue: any, scope: IScope) => any): Function;
        $watchCollection(watchExpression: (scope: IScope) => any, listener: (newValue: any, oldValue: any, scope: IScope) => any): Function;

        $parent: IScope;

        $id: number;

        // Hidden members
        $$isolateBindings: any;
        $$phase: any;
    }

    interface IAngularEvent {
        targetScope: IScope;
        currentScope: IScope;
        name: string;
        preventDefault: Function;
        defaultPrevented: boolean;

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
        (func: Function, delay?: number, invokeApply?: boolean): IPromise<any>;
        cancel(promise: IPromise<any>): boolean;
    }

    ///////////////////////////////////////////////////////////////////////////
    // IntervalService
    // see http://docs.angularjs.org/api/ng.$interval
    ///////////////////////////////////////////////////////////////////////////
    interface IIntervalService {
        (func: Function, delay: number, count?: number, invokeApply?: boolean): IPromise<any>;
        cancel(promise: IPromise<any>): boolean;
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
        debug: ILogCall;
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
    // see http://docs.angularjs.org/api/ng.$parseProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IParseService {
        (expression: string): ICompiledExpression;
    }

    interface IParseProvider {
    	logPromiseWarnings(): boolean;
    	logPromiseWarnings(value: boolean): IParseProvider;

    	unwrapPromises(): boolean;
    	unwrapPromises(value: boolean): IParseProvider;
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
        search(): any;
        search(parametersMap: any): ILocationService;
        search(parameter: string, parameterValue: any): ILocationService;
        url(): string;
        url(url: string): ILocationService;
    }

    interface ILocationProvider extends IServiceProvider {
        hashPrefix(): string;
        hashPrefix(prefix: string): ILocationProvider;
        html5Mode(): boolean;

        // Documentation states that parameter is string, but
        // implementation tests it as boolean, which makes more sense
        // since this is a toggler
        html5Mode(active: boolean): ILocationProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // DocumentService
    // see http://docs.angularjs.org/api/ng.$document
    ///////////////////////////////////////////////////////////////////////////
    interface IDocumentService extends IAugmentedJQuery {}

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
        all(promises: IPromise<any>[]): IPromise<any[]>;
        all(promises: {[id: string]: IPromise<any>;}): IPromise<{[id: string]: any}>;
        defer<T>(): IDeferred<T>;
        reject(reason?: any): IPromise<void>;
        when<T>(value: IPromise<T>): IPromise<T>;
        when<T>(value: T): IPromise<T>;
    }

    interface IPromise<T> {
        then<TResult>(successCallback: (promiseValue: T) => IHttpPromise<TResult>, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any): IPromise<TResult>;
        then<TResult>(successCallback: (promiseValue: T) => IPromise<TResult>, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any): IPromise<TResult>;
        then<TResult>(successCallback: (promiseValue: T) => TResult, errorCallback?: (reason: any) => TResult, notifyCallback?: (state: any) => any): IPromise<TResult>;


        catch<TResult>(onRejected: (reason: any) => IHttpPromise<TResult>): IPromise<TResult>;
        catch<TResult>(onRejected: (reason: any) => IPromise<TResult>): IPromise<TResult>;
        catch<TResult>(onRejected: (reason: any) => TResult): IPromise<TResult>;

        finally<TResult>(finallyCallback: ()=>any):IPromise<TResult>;
    }

    interface IDeferred<T> {
        resolve(value?: T): void;
        reject(reason?: any): void;
        notify(state?:any): void;
        promise: IPromise<T>;
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
        (element: string, transclude?: ITranscludeFunction, maxPriority?: number): ITemplateLinkingFunction;
        (element: Element, transclude?: ITranscludeFunction, maxPriority?: number): ITemplateLinkingFunction;
        (element: JQuery, transclude?: ITranscludeFunction, maxPriority?: number): ITemplateLinkingFunction;
    }

    interface ICompileProvider extends IServiceProvider {
        directive(name: string, directiveFactory: Function): ICompileProvider;

        // Undocumented, but it is there...
        directive(directivesMap: any): ICompileProvider;
    }

    interface ICloneAttachFunction {
        // Let's hint but not force cloneAttachFn's signature
        (clonedElement?: JQuery, scope?: IScope): any;
    }

    // This corresponds to the "publicLinkFn" returned by $compile.
    interface ITemplateLinkingFunction {
        (scope: IScope, cloneAttachFn?: ICloneAttachFunction): IAugmentedJQuery;
    }

    // This corresponds to $transclude (and also the transclude function passed to link).
    interface ITranscludeFunction {
        // If the scope is provided, then the cloneAttachFn must be as well.
        (scope: IScope, cloneAttachFn: ICloneAttachFunction): IAugmentedJQuery;
        // If one argument is provided, then it's assumed to be the cloneAttachFn.
        (cloneAttachFn?: ICloneAttachFunction): IAugmentedJQuery;
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

    interface IControllerProvider extends IServiceProvider {
        register(name: string, controllerConstructor: Function): void;
        register(name: string, dependencyAnnotatedConstructor: any[]): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // HttpService
    // see http://docs.angularjs.org/api/ng.$http
    ///////////////////////////////////////////////////////////////////////////
    interface IHttpService {
        // At least moethod and url must be provided...
        (config: IRequestConfig): IHttpPromise<any>;
        get (url: string, RequestConfig?: any): IHttpPromise<any>;
        delete (url: string, RequestConfig?: any): IHttpPromise<any>;
        head(url: string, RequestConfig?: any): IHttpPromise<any>;
        jsonp(url: string, RequestConfig?: any): IHttpPromise<any>;
        post(url: string, data: any, RequestConfig?: any): IHttpPromise<any>;
        put(url: string, data: any, RequestConfig?: any): IHttpPromise<any>;
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
        withCredentials?: boolean;

        // These accept multiple types, so let's define them as any
        data?: any;
        transformRequest?: any;
        transformResponse?: any;
        timeout?: any; // number | promise
    }

    interface IHttpPromiseCallback<T> {
        (data: T, status: number, headers: (headerName: string) => string, config: IRequestConfig): void;
    }

    interface IHttpPromiseCallbackArg<T> {
        data?: T;
        status?: number;
        headers?: (headerName: string) => string;
        config?: IRequestConfig;
    }

    interface IHttpPromise<T> extends IPromise<T> {
        success(callback: IHttpPromiseCallback<T>): IHttpPromise<T>;
        error(callback: IHttpPromiseCallback<T>): IHttpPromise<T>;
        then<TResult>(successCallback: (response: IHttpPromiseCallbackArg<T>) => TResult, errorCallback?: (response: IHttpPromiseCallbackArg<T>) => any): IPromise<TResult>;
        then<TResult>(successCallback: (response: IHttpPromiseCallbackArg<T>) => IPromise<TResult>, errorCallback?: (response: IHttpPromiseCallbackArg<T>) => any): IPromise<TResult>;
    }

    interface IHttpProvider extends IServiceProvider {
        defaults: IRequestConfig;
        interceptors: any[];
        responseInterceptors: any[];
    }

    ///////////////////////////////////////////////////////////////////////////
    // HttpBackendService
    // see http://docs.angularjs.org/api/ng.$httpBackend
    // You should never need to use this service directly.
    ///////////////////////////////////////////////////////////////////////////
    interface IHttpBackendService {
        // XXX Perhaps define callback signature in the future
        (method: string, url: string, post?: any, callback?: Function, headers?: any, timeout?: number, withCredentials?: boolean): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // InterpolateService
    // see http://docs.angularjs.org/api/ng.$interpolate
    // see http://docs.angularjs.org/api/ng.$interpolateProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IInterpolateService {
        (text: string, mustHaveExpression?: boolean): IInterpolationFunction;
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
    // SCEService
    // see http://docs.angularjs.org/api/ng.$sce
    ///////////////////////////////////////////////////////////////////////////
	interface ISCEService {
		getTrusted(type: string, mayBeTrusted: any): any;
		getTrustedCss(value: any): any;
		getTrustedHtml(value: any): any;
		getTrustedJs(value: any): any;
		getTrustedResourceUrl(value: any): any;
		getTrustedUrl(value: any): any;
		parse(type: string, expression: string): (context: any, locals: any) => any;
		parseAsCss(expression: string): (context: any, locals: any) => any;
		parseAsHtml(expression: string): (context: any, locals: any) => any;
		parseAsJs(expression: string): (context: any, locals: any) => any;
		parseAsResourceUrl(expression: string): (context: any, locals: any) => any;
		parseAsUrl(expression: string): (context: any, locals: any) => any;
		trustAs(type: string, value: any): any;
		trustAsHtml(value: any): any;
		trustAsJs(value: any): any;
		trustAsResourceUrl(value: any): any;
		trustAsUrl(value: any): any;
		isEnabled(): boolean;
	}

    ///////////////////////////////////////////////////////////////////////////
    // SCEProvider
    // see http://docs.angularjs.org/api/ng.$sceProvider
    ///////////////////////////////////////////////////////////////////////////
    interface ISCEProvider extends IServiceProvider {
        enabled(value: boolean): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // SCEDelegateService
    // see http://docs.angularjs.org/api/ng.$sceDelegate
    ///////////////////////////////////////////////////////////////////////////
    interface ISCEDelegateService {
        getTrusted(type: string, mayBeTrusted: any): any;
        trustAs(type: string, value: any): any;
        valueOf(value: any): any;
    }


    ///////////////////////////////////////////////////////////////////////////
    // SCEDelegateProvider
    // see http://docs.angularjs.org/api/ng.$sceDelegateProvider
    ///////////////////////////////////////////////////////////////////////////
    interface ISCEDelegateProvider extends IServiceProvider {
        resourceUrlBlacklist(blacklist: any[]): void;
        resourceUrlWhitelist(whitelist: any[]): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Directive
    // see http://docs.angularjs.org/api/ng.$compileProvider#directive
    // and http://docs.angularjs.org/guide/directive
    ///////////////////////////////////////////////////////////////////////////

    interface IDirective{
        compile?:
            (templateElement: IAugmentedJQuery,
            templateAttributes: IAttributes,
            transclude: ITranscludeFunction
            ) => any;
        controller?: any;
        controllerAs?: string;
        link?:
            (scope: IScope,
            instanceElement: IAugmentedJQuery,
            instanceAttributes: IAttributes,
            controller: any,
            transclude: ITranscludeFunction
            ) => void;
        name?: string;
        priority?: number;
        replace?: boolean;
        require?: any;
        restrict?: string;
        scope?: any;
        template?: any;
        templateUrl?: any;
        terminal?: boolean;
        transclude?: any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // angular.element
    // when calling angular.element, angular returns a jQuery object,
    // augmented with additional methods like e.g. scope.
    // see: http://docs.angularjs.org/api/angular.element
    ///////////////////////////////////////////////////////////////////////////
    interface IAugmentedJQueryStatic extends JQueryStatic {
        (selector: string, context?: any): IAugmentedJQuery;
        (element: Element): IAugmentedJQuery;
        (object: {}): IAugmentedJQuery;
        (elementArray: Element[]): IAugmentedJQuery;
        (object: JQuery): IAugmentedJQuery;
        (func: Function): IAugmentedJQuery;
        (array: any[]): IAugmentedJQuery;
        (): IAugmentedJQuery;
    }

    interface IAugmentedJQuery extends JQuery {
        // TODO: events, how to define?
        //$destroy

        find(selector: string): IAugmentedJQuery;
        find(element: any): IAugmentedJQuery;
        find(obj: JQuery): IAugmentedJQuery;

        controller(name: string): any;
        injector(): any;
        scope(): IScope;

        inheritedData(key: string, value: any): JQuery;
        inheritedData(obj: { [key: string]: any; }): JQuery;
        inheritedData(key?: string): any;
    }

    ///////////////////////////////////////////////////////////////////////
    // AnimateService
    // see http://docs.angularjs.org/api/ng.$animate
    ///////////////////////////////////////////////////////////////////////
    interface IAnimateService {
        addClass(element: JQuery, className: string, done?: Function): void;
        enter(element: JQuery, parent: JQuery, after: JQuery, done?: Function): void;
        leave(element: JQuery, done?: Function): void;
        move(element: JQuery, parent: JQuery, after: JQuery, done?: Function): void;
        removeClass(element: JQuery, className: string, done?: Function): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AUTO module (angular.js)
    ///////////////////////////////////////////////////////////////////////////
    export module auto {
        interface IProvider {
            $get: any;
        }

        ///////////////////////////////////////////////////////////////////////
        // InjectorService
        // see http://docs.angularjs.org/api/AUTO.$injector
        ///////////////////////////////////////////////////////////////////////
        interface IInjectorService {
            annotate(fn: Function): string[];
            annotate(inlineAnnotatedFunction: any[]): string[];
            get(name: string): any;
            has(name: string): boolean; 
            instantiate(typeConstructor: Function, locals?: any): any;
            invoke(inlineAnnotatedFunction: any[]): any;
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
            decorator(name: string, decoratorInline: any[]): void;
            factory(name: string, serviceFactoryFunction: Function): ng.IServiceProvider;
            factory(name: string, inlineAnnotatedFunction: any[]): ng.IServiceProvider;
            provider(name: string, provider: ng.IServiceProvider): ng.IServiceProvider;
            provider(name: string, serviceProviderConstructor: Function): ng.IServiceProvider;
            service(name: string, constructor: Function): ng.IServiceProvider;
            value(name: string, value: any): ng.IServiceProvider;
        }

    }
}
