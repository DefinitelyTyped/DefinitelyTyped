// Type definitions for Angular JS 1.6
// Project: http://angularjs.org
// Definitions by: Diego Vilar <https://github.com/diegovilar>
//                 Georgii Dolzhykov <https://github.com/thorn0>
//                 Caleb St-Denis <https://github.com/calebstdenis>
//                 Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference path="jqlite.d.ts" />

declare var angular: angular.IAngularStatic;

// Support for painless dependency injection
declare global {
    interface Function {
        $inject?: ReadonlyArray<string>;
    }
}

export as namespace angular;
export as namespace ng;

// Support AMD require
export = angular;

import ng = angular;

///////////////////////////////////////////////////////////////////////////////
// ng module (angular.js)
///////////////////////////////////////////////////////////////////////////////
declare namespace angular {
    type Injectable<T extends Function> = T | Array<string | T>;

    // not directly implemented, but ensures that constructed class implements $get
    interface IServiceProviderClass {
        new (...args: any[]): IServiceProvider;
    }

    interface IServiceProviderFactory {
        (...args: any[]): IServiceProvider;
    }

    // All service providers extend this interface
    interface IServiceProvider {
        $get: any;
    }

    interface IAngularBootstrapConfig {
        strictDi?: boolean;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AngularStatic
    // see http://docs.angularjs.org/api
    ///////////////////////////////////////////////////////////////////////////
    interface IAngularStatic {
        bind(context: any, fn: Function, ...args: any[]): Function;

        /**
         * Use this function to manually start up angular application.
         *
         * @param element DOM element which is the root of angular application.
         * @param modules An array of modules to load into the application.
         *     Each item in the array should be the name of a predefined module or a (DI annotated)
         *     function that will be invoked by the injector as a config block.
         * @param config an object for defining configuration options for the application. The following keys are supported:
         *     - `strictDi`: disable automatic function annotation for the application. This is meant to assist in finding bugs which break minified code.
         */
        bootstrap(element: string|Element|JQuery|Document, modules?: Array<string|Function|any[]>, config?: IAngularBootstrapConfig): auto.IInjectorService;

        /**
         * Creates a deep copy of source, which should be an object or an array.
         *
         * - If no destination is supplied, a copy of the object or array is created.
         * - If a destination is provided, all of its elements (for array) or properties (for objects) are deleted and then all elements/properties from the source are copied to it.
         * - If source is not an object or array (inc. null and undefined), source is returned.
         * - If source is identical to 'destination' an exception will be thrown.
         *
         * @param source The source that will be used to make a copy. Can be any type, including primitives, null, and undefined.
         * @param destination Destination into which the source is copied. If provided, must be of the same type as source.
         */
        copy<T>(source: T, destination?: T): T;

        /**
         * Wraps a raw DOM element or HTML string as a jQuery element.
         *
         * If jQuery is available, angular.element is an alias for the jQuery function. If jQuery is not available, angular.element delegates to Angular's built-in subset of jQuery, called "jQuery lite" or "jqLite."
         */
        element: JQueryStatic;
        equals(value1: any, value2: any): boolean;
        extend(destination: any, ...sources: any[]): any;

        /**
         * Invokes the iterator function once for each item in obj collection, which can be either an object or an array. The iterator function is invoked with iterator(value, key), where value is the value of an object property or an array element and key is the object property key or array element index. Specifying a context for the function is optional.
         *
         * It is worth noting that .forEach does not iterate over inherited properties because it filters using the hasOwnProperty method.
         *
         * @param obj Object to iterate over.
         * @param iterator Iterator function.
         * @param context Object to become context (this) for the iterator function.
         */
        forEach<T>(obj: T[], iterator: (value: T, key: number, obj: T[]) => void, context?: any): T[];
        /**
         * Invokes the iterator function once for each item in obj collection, which can be either an object or an array. The iterator function is invoked with iterator(value, key), where value is the value of an object property or an array element and key is the object property key or array element index. Specifying a context for the function is optional.
         *
         * It is worth noting that .forEach does not iterate over inherited properties because it filters using the hasOwnProperty method.
         *
         * @param obj Object to iterate over.
         * @param iterator Iterator function.
         * @param context Object to become context (this) for the iterator function.
         */
        forEach<T>(obj: { [index: string]: T; }, iterator: (value: T, key: string, obj: { [index: string]: T; }) => void, context?: any): { [index: string]: T; };
        /**
         * Invokes the iterator function once for each item in obj collection, which can be either an object or an array. The iterator function is invoked with iterator(value, key), where value is the value of an object property or an array element and key is the object property key or array element index. Specifying a context for the function is optional.
         *
         * It is worth noting that .forEach does not iterate over inherited properties because it filters using the hasOwnProperty method.
         *
         * @param obj Object to iterate over.
         * @param iterator Iterator function.
         * @param context Object to become context (this) for the iterator function.
         */
        forEach(obj: any, iterator: (value: any, key: any, obj: any) => void, context?: any): any;

        fromJson(json: string): any;
        identity<T>(arg?: T): T;
        injector(modules?: any[], strictDi?: boolean): auto.IInjectorService;
        isArray(value: any): value is any[];
        isDate(value: any): value is Date;
        isDefined(value: any): boolean;
        isElement(value: any): boolean;
        isFunction(value: any): value is Function;
        isNumber(value: any): value is number;
        isObject(value: any): value is Object;
        isObject<T>(value: any): value is T;
        isString(value: any): value is string;
        isUndefined(value: any): boolean;
        lowercase(str: string): string;

        /**
         * Deeply extends the destination object dst by copying own enumerable properties from the src object(s) to dst. You can specify multiple src objects. If you want to preserve original objects, you can do so by passing an empty object as the target: var object = angular.merge({}, object1, object2).
         *
         * Unlike extend(), merge() recursively descends into object properties of source objects, performing a deep copy.
         *
         * @param dst Destination object.
         * @param src Source object(s).
         */
        merge(dst: any, ...src: any[]): any;

        /**
         * The angular.module is a global place for creating, registering and retrieving Angular modules. All modules (angular core or 3rd party) that should be available to an application must be registered using this mechanism.
         *
         * When passed two or more arguments, a new module is created. If passed only one argument, an existing module (the name passed as the first argument to module) is retrieved.
         *
         * @param name The name of the module to create or retrieve.
         * @param requires The names of modules this module depends on. If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
         * @param configFn Optional configuration function for the module.
         */
        module(
            name: string,
            requires?: string[],
            configFn?: Injectable<Function>): IModule;

        noop(...args: any[]): void;
        reloadWithDebugInfo(): void;
        toJson(obj: any, pretty?: boolean | number): string;
        uppercase(str: string): string;
        version: {
            full: string;
            major: number;
            minor: number;
            dot: number;
            codeName: string;
        };

        /**
         * If window.name contains prefix NG_DEFER_BOOTSTRAP! when angular.bootstrap is called, the bootstrap process will be paused until angular.resumeBootstrap() is called.
         * @param extraModules An optional array of modules that should be added to the original list of modules that the app was about to be bootstrapped with.
         */
        resumeBootstrap?(extraModules?: string[]): ng.auto.IInjectorService;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Module
    // see http://docs.angularjs.org/api/angular.Module
    ///////////////////////////////////////////////////////////////////////////
    interface IModule {
        /**
         * Use this method to register a component.
         *
         * @param name The name of the component.
         * @param options A definition object passed into the component.
         */
        component(name: string, options: IComponentOptions): IModule;
        /**
         * Use this method to register work which needs to be performed on module loading.
         *
         * @param configFn Execute this function on module load. Useful for service configuration.
         */
        config(configFn: Function): IModule;
        /**
         * Use this method to register work which needs to be performed on module loading.
         *
         * @param inlineAnnotatedFunction Execute this function on module load. Useful for service configuration.
         */
        config(inlineAnnotatedFunction: any[]): IModule;
        config(object: Object): IModule;
        /**
         * Register a constant service, such as a string, a number, an array, an object or a function, with the $injector. Unlike value it can be injected into a module configuration function (see config) and it cannot be overridden by an Angular decorator.
         *
         * @param name The name of the constant.
         * @param value The constant value.
         */
        constant<T>(name: string, value: T): IModule;
        constant(object: Object): IModule;
        /**
         * The $controller service is used by Angular to create new controllers.
         *
         * This provider allows controller registration via the register method.
         *
         * @param name Controller name, or an object map of controllers where the keys are the names and the values are the constructors.
         * @param controllerConstructor Controller constructor fn (optionally decorated with DI annotations in the array notation).
         */
        controller(name: string, controllerConstructor: Injectable<IControllerConstructor>): IModule;
        controller(object: {[name: string]: Injectable<IControllerConstructor>}): IModule;
        /**
         * Register a new directive with the compiler.
         *
         * @param name Name of the directive in camel-case (i.e. ngBind which will match as ng-bind)
         * @param directiveFactory An injectable directive factory function.
         */
        directive<TScope extends IScope = IScope>(name: string, directiveFactory: Injectable<IDirectiveFactory<TScope>>): IModule;
        directive<TScope extends IScope = IScope>(object: {[directiveName: string]: Injectable<IDirectiveFactory<TScope>>}): IModule;
        /**
         * Register a service factory, which will be called to return the service instance. This is short for registering a service where its provider consists of only a $get property, which is the given service factory function. You should use $provide.factory(getFn) if you do not need to configure your service in a provider.
         *
         * @param name The name of the instance.
         * @param $getFn The $getFn for the instance creation. Internally this is a short hand for $provide.provider(name, {$get: $getFn}).
         */
        factory(name: string, $getFn: Injectable<Function>): IModule;
        factory(object: {[name: string]: Injectable<Function>}): IModule;
        filter(name: string, filterFactoryFunction: Injectable<Function>): IModule;
        filter(object: {[name: string]: Injectable<Function>}): IModule;
        provider(name: string, serviceProviderFactory: IServiceProviderFactory): IModule;
        provider(name: string, serviceProviderConstructor: IServiceProviderClass): IModule;
        provider(name: string, inlineAnnotatedConstructor: any[]): IModule;
        provider(name: string, providerObject: IServiceProvider): IModule;
        provider(object: Object): IModule;
        /**
         * Run blocks are the closest thing in Angular to the main method. A run block is the code which needs to run to kickstart the application. It is executed after all of the service have been configured and the injector has been created. Run blocks typically contain code which is hard to unit-test, and for this reason should be declared in isolated modules, so that they can be ignored in the unit-tests.
         */
        run(initializationFunction: Injectable<Function>): IModule;
        /**
         * Register a service constructor, which will be invoked with new to create the service instance. This is short for registering a service where its provider's $get property is a factory function that returns an instance instantiated by the injector from the service constructor function.
         *
         * @param name The name of the instance.
         * @param serviceConstructor An injectable class (constructor function) that will be instantiated.
         */
        service(name: string, serviceConstructor: Injectable<Function>): IModule;
        service(object: {[name: string]: Injectable<Function>}): IModule;
        /**
         * Register a value service with the $injector, such as a string, a number, an array, an object or a function. This is short for registering a service where its provider's $get property is a factory function that takes no arguments and returns the value service.

           Value services are similar to constant services, except that they cannot be injected into a module configuration function (see config) but they can be overridden by an Angular decorator.
         *
         * @param name The name of the instance.
         * @param value The value.
         */
        value<T>(name: string, value: T): IModule;
        value(object: Object): IModule;

        /**
         * Register a service decorator with the $injector. A service decorator intercepts the creation of a service, allowing it to override or modify the behaviour of the service. The object returned by the decorator may be the original service, or a new service object which replaces or wraps and delegates to the original service.
         * @param name The name of the service to decorate
         * @param decorator This function will be invoked when the service needs to be instantiated and should return the decorated service instance. The function is called using the injector.invoke method and is therefore fully injectable. Local injection arguments: $delegate - The original service instance, which can be monkey patched, configured, decorated or delegated to.
         */
        decorator(name: string, decorator: Injectable<Function>): IModule;

        // Properties
        name: string;
        requires: string[];
    }

    ///////////////////////////////////////////////////////////////////////////
    // Attributes
    // see http://docs.angularjs.org/api/ng.$compile.directive.Attributes
    ///////////////////////////////////////////////////////////////////////////
    interface IAttributes {
        /**
         * this is necessary to be able to access the scoped attributes. it's not very elegant
         * because you have to use attrs['foo'] instead of attrs.foo but I don't know of a better way
         * this should really be limited to return string but it creates this problem: http://stackoverflow.com/q/17201854/165656
         */
        [name: string]: any;

        /**
         * Converts an attribute name (e.g. dash/colon/underscore-delimited string, optionally prefixed with x- or data-) to its normalized, camelCase form.
         *
         * Also there is special case for Moz prefix starting with upper case letter.
         *
         * For further information check out the guide on @see https://docs.angularjs.org/guide/directive#matching-directives
         */
        $normalize(name: string): string;

        /**
         * Adds the CSS class value specified by the classVal parameter to the
         * element. If animations are enabled then an animation will be triggered
         * for the class addition.
         */
        $addClass(classVal: string): void;

        /**
         * Removes the CSS class value specified by the classVal parameter from the
         * element. If animations are enabled then an animation will be triggered for
         * the class removal.
         */
        $removeClass(classVal: string): void;

        /**
         * Adds and removes the appropriate CSS class values to the element based on the difference between
         * the new and old CSS class values (specified as newClasses and oldClasses).
         */
        $updateClass(newClasses: string, oldClasses: string): void;

        /**
         * Set DOM element attribute value.
         */
        $set(key: string, value: any): void;

        /**
         * Observes an interpolated attribute.
         * The observer function will be invoked once during the next $digest
         * following compilation. The observer is then invoked whenever the
         * interpolated value changes.
         */
        $observe<T>(name: string, fn: (value?: T) => any): Function;

        /**
         * A map of DOM element attribute names to the normalized name. This is needed
         * to do reverse lookup from normalized name back to actual name.
         */
        $attr: Object;
    }

    /**
     * form.FormController - type in module ng
     * see https://docs.angularjs.org/api/ng/type/form.FormController
     */
    interface IFormController {
        /**
         * Indexer which should return ng.INgModelController for most properties but cannot because of "All named properties must be assignable to string indexer type" constraint - see https://github.com/Microsoft/TypeScript/issues/272
         */
        [name: string]: any;

        $pristine: boolean;
        $dirty: boolean;
        $valid: boolean;
        $invalid: boolean;
        $submitted: boolean;
        $error: { [validationErrorKey: string]: Array<INgModelController | IFormController> };
        $name?: string;
        $pending?: { [validationErrorKey: string]: Array<INgModelController | IFormController> };
        $addControl(control: INgModelController | IFormController): void;
        $removeControl(control: INgModelController | IFormController): void;
        $setValidity(validationErrorKey: string, isValid: boolean, control: INgModelController | IFormController): void;
        $setDirty(): void;
        $setPristine(): void;
        $commitViewValue(): void;
        $rollbackViewValue(): void;
        $setSubmitted(): void;
        $setUntouched(): void;
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
        $setViewValue(value: any, trigger?: string): void;
        $setPristine(): void;
        $setDirty(): void;
        $validate(): void;
        $setTouched(): void;
        $setUntouched(): void;
        $rollbackViewValue(): void;
        $commitViewValue(): void;
        $processModelValue(): void;
        $isEmpty(value: any): boolean;
        $overrideModelOptions(options: INgModelOptions): void;

        $viewValue: any;

        $modelValue: any;

        $parsers: IModelParser[];
        $formatters: IModelFormatter[];
        $viewChangeListeners: IModelViewChangeListener[];
        $error: { [validationErrorKey: string]: boolean };
        $name?: string;

        $touched: boolean;
        $untouched: boolean;

        $validators: IModelValidators;
        $asyncValidators: IAsyncModelValidators;

        $pending?: { [validationErrorKey: string]: boolean };
        $pristine: boolean;
        $dirty: boolean;
        $valid: boolean;
        $invalid: boolean;
    }

    // Allows tuning how model updates are done.
    // https://docs.angularjs.org/api/ng/directive/ngModelOptions
    interface INgModelOptions {
        updateOn?: string;
        debounce?: number | { [key: string]: number; };
        allowInvalid?: boolean;
        getterSetter?: boolean;
        timezone?: string;
    }

    interface IModelValidators {
        /**
         * viewValue is any because it can be an object that is called in the view like $viewValue.name:$viewValue.subName
         */
        [index: string]: (modelValue: any, viewValue: any) => boolean;
    }

    interface IAsyncModelValidators {
        [index: string]: (modelValue: any, viewValue: any) => IPromise<any>;
    }

    interface IModelParser {
        (value: any): any;
    }

    interface IModelFormatter {
        (value: any): any;
    }

    interface IModelViewChangeListener {
        (): void;
    }

    /**
     * $rootScope - $rootScopeProvider - service in module ng
     * see https://docs.angularjs.org/api/ng/type/$rootScope.Scope and https://docs.angularjs.org/api/ng/service/$rootScope
     */
    interface IRootScopeService {
        $apply(): any;
        $apply(exp: string): any;
        $apply(exp: (scope: IScope) => any): any;

        $applyAsync(): any;
        $applyAsync(exp: string): any;
        $applyAsync(exp: (scope: IScope) => any): any;

        /**
         * Dispatches an event name downwards to all child scopes (and their children) notifying the registered $rootScope.Scope listeners.
         *
         * The event life cycle starts at the scope on which $broadcast was called. All listeners listening for name event on this scope get notified. Afterwards, the event propagates to all direct and indirect scopes of the current scope and calls all registered listeners along the way. The event cannot be canceled.
         *
         * Any exception emitted from the listeners will be passed onto the $exceptionHandler service.
         *
         * @param name Event name to broadcast.
         * @param args Optional one or more arguments which will be passed onto the event listeners.
         */
        $broadcast(name: string, ...args: any[]): IAngularEvent;
        $destroy(): void;
        $digest(): void;
        /**
         * Dispatches an event name upwards through the scope hierarchy notifying the registered $rootScope.Scope listeners.
         *
         * The event life cycle starts at the scope on which $emit was called. All listeners listening for name event on this scope get notified. Afterwards, the event traverses upwards toward the root scope and calls all registered listeners along the way. The event will stop propagating if one of the listeners cancels it.
         *
         * Any exception emitted from the listeners will be passed onto the $exceptionHandler service.
         *
         * @param name Event name to emit.
         * @param args Optional one or more arguments which will be passed onto the event listeners.
         */
        $emit(name: string, ...args: any[]): IAngularEvent;

        $eval(): any;
        $eval(expression: string, locals?: Object): any;
        $eval(expression: (scope: IScope) => any, locals?: Object): any;

        $evalAsync(): void;
        $evalAsync(expression: string, locals?: Object): void;
        $evalAsync(expression: (scope: IScope) => void, locals?: Object): void;

        // Defaults to false by the implementation checking strategy
        $new(isolate?: boolean, parent?: IScope): IScope;

        /**
         * Listens on events of a given type. See $emit for discussion of event life cycle.
         *
         * The event listener function format is: function(event, args...).
         *
         * @param name Event name to listen on.
         * @param listener Function to call when the event is emitted.
         */
        $on(name: string, listener: (event: IAngularEvent, ...args: any[]) => any): () => void;

        $watch(watchExpression: string, listener?: string, objectEquality?: boolean): () => void;
        $watch<T>(watchExpression: string, listener?: (newValue: T, oldValue: T, scope: IScope) => any, objectEquality?: boolean): () => void;
        $watch(watchExpression: (scope: IScope) => any, listener?: string, objectEquality?: boolean): () => void;
        $watch<T>(watchExpression: (scope: IScope) => T, listener?: (newValue: T, oldValue: T, scope: IScope) => any, objectEquality?: boolean): () => void;

        $watchCollection<T>(watchExpression: string, listener: (newValue: T, oldValue: T, scope: IScope) => any): () => void;
        $watchCollection<T>(watchExpression: (scope: IScope) => T, listener: (newValue: T, oldValue: T, scope: IScope) => any): () => void;

        $watchGroup(watchExpressions: any[], listener: (newValue: any, oldValue: any, scope: IScope) => any): () => void;
        $watchGroup(watchExpressions: Array<{ (scope: IScope): any }>, listener: (newValue: any, oldValue: any, scope: IScope) => any): () => void;

        $parent: IScope;
        $root: IRootScopeService;
        $id: number;

        // Hidden members
        $$isolateBindings: any;
        $$phase: any;
    }

    interface IScope extends IRootScopeService { }

    /**
     * $scope for ngRepeat directive.
     * see https://docs.angularjs.org/api/ng/directive/ngRepeat
     */
    interface IRepeatScope extends IScope {
        /**
         * iterator offset of the repeated element (0..length-1).
         */
        $index: number;

        /**
         * true if the repeated element is first in the iterator.
         */
        $first: boolean;

        /**
         * true if the repeated element is between the first and last in the iterator.
         */
        $middle: boolean;

        /**
         * true if the repeated element is last in the iterator.
         */
        $last: boolean;

        /**
         * true if the iterator position $index is even (otherwise false).
         */
        $even: boolean;

        /**
         * true if the iterator position $index is odd (otherwise false).
         */
        $odd: boolean;
    }

    interface IAngularEvent {
        /**
         * the scope on which the event was $emit-ed or $broadcast-ed.
         */
        targetScope: IScope;
        /**
         * the scope that is currently handling the event. Once the event propagates through the scope hierarchy, this property is set to null.
         */
        currentScope: IScope;
        /**
         * name of the event.
         */
        name: string;
        /**
         * calling stopPropagation function will cancel further event propagation (available only for events that were $emit-ed).
         */
        stopPropagation?(): void;
        /**
         * calling preventDefault sets defaultPrevented flag to true.
         */
        preventDefault(): void;
        /**
         * true if preventDefault was called.
         */
        defaultPrevented: boolean;
    }

    ///////////////////////////////////////////////////////////////////////////
    // WindowService
    // see http://docs.angularjs.org/api/ng.$window
    ///////////////////////////////////////////////////////////////////////////
    interface IWindowService extends Window {
        [key: string]: any;
    }

    ///////////////////////////////////////////////////////////////////////////
    // TimeoutService
    // see http://docs.angularjs.org/api/ng.$timeout
    ///////////////////////////////////////////////////////////////////////////
    interface ITimeoutService {
        (delay?: number, invokeApply?: boolean): IPromise<void>;
        <T>(fn: (...args: any[]) => T | IPromise<T>, delay?: number, invokeApply?: boolean, ...args: any[]): IPromise<T>;
        cancel(promise?: IPromise<any>): boolean;
    }

    ///////////////////////////////////////////////////////////////////////////
    // IntervalService
    // see http://docs.angularjs.org/api/ng.$interval
    ///////////////////////////////////////////////////////////////////////////
    interface IIntervalService {
        (func: Function, delay: number, count?: number, invokeApply?: boolean, ...args: any[]): IPromise<any>;
        cancel(promise: IPromise<any>): boolean;
    }

    /**
     * $filter - $filterProvider - service in module ng
     *
     * Filters are used for formatting data displayed to the user.
     *
     * see https://docs.angularjs.org/api/ng/service/$filter
     */
    interface IFilterService {
        (name: 'filter'): IFilterFilter;
        (name: 'currency'): IFilterCurrency;
        (name: 'number'): IFilterNumber;
        (name: 'date'): IFilterDate;
        (name: 'json'): IFilterJson;
        (name: 'lowercase'): IFilterLowercase;
        (name: 'uppercase'): IFilterUppercase;
        (name: 'limitTo'): IFilterLimitTo;
        (name: 'orderBy'): IFilterOrderBy;
        /**
         * Usage:
         * $filter(name);
         *
         * @param name Name of the filter function to retrieve
         */
        <T>(name: string): T;
    }

    interface IFilterFilter {
        <T>(array: T[], expression: string | IFilterFilterPatternObject | IFilterFilterPredicateFunc<T>, comparator?: IFilterFilterComparatorFunc<T>|boolean): T[];
    }

    interface IFilterFilterPatternObject {
        [name: string]: any;
    }

    interface IFilterFilterPredicateFunc<T> {
        (value: T, index: number, array: T[]): boolean;
    }

    interface IFilterFilterComparatorFunc<T> {
        (actual: T, expected: T): boolean;
    }

    interface IFilterOrderByItem {
        value: any;
        type: string;
        index: any;
    }

    interface IFilterOrderByComparatorFunc {
        (left: IFilterOrderByItem, right: IFilterOrderByItem): -1 | 0 | 1;
    }

    interface IFilterCurrency {
        /**
         * Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default symbol for current locale is used.
         * @param amount Input to filter.
         * @param symbol Currency symbol or identifier to be displayed.
         * @param fractionSize Number of decimal places to round the amount to, defaults to default max fraction size for current locale
         * @return Formatted number
         */
        (amount: number, symbol?: string, fractionSize?: number): string;
    }

    interface IFilterNumber {
        /**
         * Formats a number as text.
         * @param number Number to format.
         * @param fractionSize Number of decimal places to round the number to. If this is not provided then the fraction size is computed from the current locale's number formatting pattern. In the case of the default locale, it will be 3.
         * @return Number rounded to decimalPlaces and places a “,” after each third digit.
         */
        (value: number|string, fractionSize?: number|string): string;
    }

    interface IFilterDate {
        /**
         * Formats date to a string based on the requested format.
         *
         * @param date Date to format either as Date object, milliseconds (string or number) or various ISO 8601 datetime string formats (e.g. yyyy-MM-ddTHH:mm:ss.sssZ and its shorter versions like yyyy-MM-ddTHH:mmZ, yyyy-MM-dd or yyyyMMddTHHmmssZ). If no timezone is specified in the string input, the time is considered to be in the local timezone.
         * @param format Formatting rules (see Description). If not specified, mediumDate is used.
         * @param timezone Timezone to be used for formatting. It understands UTC/GMT and the continental US time zone abbreviations, but for general use, use a time zone offset, for example, '+0430' (4 hours, 30 minutes east of the Greenwich meridian) If not specified, the timezone of the browser will be used.
         * @return Formatted string or the input if input is not recognized as date/millis.
         */
        (date: Date | number | string, format?: string, timezone?: string): string;
    }

    interface IFilterJson {
        /**
         * Allows you to convert a JavaScript object into JSON string.
         * @param object Any JavaScript object (including arrays and primitive types) to filter.
         * @param spacing The number of spaces to use per indentation, defaults to 2.
         * @return JSON string.
         */
        (object: any, spacing?: number): string;
    }

    interface IFilterLowercase {
        /**
         * Converts string to lowercase.
         */
        (value: string): string;
    }

    interface IFilterUppercase {
        /**
         * Converts string to uppercase.
         */
        (value: string): string;
    }

    interface IFilterLimitTo {
        /**
         * Creates a new array containing only a specified number of elements. The elements are taken from either the beginning or the end of the source array, string or number, as specified by the value and sign (positive or negative) of limit.
         * @param input Source array to be limited.
         * @param limit The length of the returned array. If the limit number is positive, limit number of items from the beginning of the source array/string are copied. If the number is negative, limit number of items from the end of the source array are copied. The limit will be trimmed if it exceeds array.length. If limit is undefined, the input will be returned unchanged.
         * @param begin Index at which to begin limitation. As a negative index, begin indicates an offset from the end of input. Defaults to 0.
         * @return A new sub-array of length limit or less if input array had less than limit elements.
         */
        <T>(input: T[], limit: string|number, begin?: string|number): T[];
        /**
         * Creates a new string containing only a specified number of elements. The elements are taken from either the beginning or the end of the source string or number, as specified by the value and sign (positive or negative) of limit. If a number is used as input, it is converted to a string.
         * @param input Source string or number to be limited.
         * @param limit The length of the returned string. If the limit number is positive, limit number of items from the beginning of the source string are copied. If the number is negative, limit number of items from the end of the source string are copied. The limit will be trimmed if it exceeds input.length. If limit is undefined, the input will be returned unchanged.
         * @param begin Index at which to begin limitation. As a negative index, begin indicates an offset from the end of input. Defaults to 0.
         * @return A new substring of length limit or less if input had less than limit elements.
         */
        (input: string|number, limit: string|number, begin?: string|number): string;
    }

    interface IFilterOrderBy {
        /**
         * Orders a specified array by the expression predicate. It is ordered alphabetically for strings and numerically for numbers. Note: if you notice numbers are not being sorted as expected, make sure they are actually being saved as numbers and not strings.
         * @param array The array to sort.
         * @param expression A predicate to be used by the comparator to determine the order of elements.
         * @param reverse Reverse the order of the array.
         * @param comparator Function used to determine the relative order of value pairs.
         * @return An array containing the items from the specified collection, ordered by a comparator function based on the values computed using the expression predicate.
         */
        <T>(array: T[], expression: string|((value: T) => any)|Array<((value: T) => any)|string>, reverse?: boolean, comparator?: IFilterOrderByComparatorFunc): T[];
    }

    /**
     * $filterProvider - $filter - provider in module ng
     *
     * Filters are just functions which transform input to an output. However filters need to be Dependency Injected. To achieve this a filter definition consists of a factory function which is annotated with dependencies and is responsible for creating a filter function.
     *
     * see https://docs.angularjs.org/api/ng/provider/$filterProvider
     */
    interface IFilterProvider extends IServiceProvider {
        /**
         * register(name);
         *
         * @param name Name of the filter function, or an object map of filters where the keys are the filter names and the values are the filter factories. Note: Filter names must be valid angular Expressions identifiers, such as uppercase or orderBy. Names with special characters, such as hyphens and dots, are not allowed. If you wish to namespace your filters, then you can use capitalization (myappSubsectionFilterx) or underscores (myapp_subsection_filterx).
         */
        register(name: string | {}): IServiceProvider;
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
        pluralCat(num: any): string;
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
    // see http://docs.angularjs.org/api/ng.$logProvider
    ///////////////////////////////////////////////////////////////////////////
    interface ILogService {
        debug: ILogCall;
        error: ILogCall;
        info: ILogCall;
        log: ILogCall;
        warn: ILogCall;
    }

    interface ILogProvider extends IServiceProvider {
        debugEnabled(): boolean;
        debugEnabled(enabled: boolean): ILogProvider;
    }

    // We define this as separate interface so we can reopen it later for
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
        (expression: string, interceptorFn?: (value: any, scope: IScope, locals: any) => any, expensiveChecks?: boolean): ICompiledExpression;
    }

    interface IParseProvider {
        logPromiseWarnings(): boolean;
        logPromiseWarnings(value: boolean): IParseProvider;

        unwrapPromises(): boolean;
        unwrapPromises(value: boolean): IParseProvider;

        /**
         * Configure $parse service to add literal values that will be present as literal at expressions.
         *
         * @param literalName Token for the literal value. The literal name value must be a valid literal name.
         * @param literalValue Value for this literal. All literal values must be primitives or `undefined`.
         **/
        addLiteral(literalName: string, literalValue: any): void;

        /**
         * Allows defining the set of characters that are allowed in Angular expressions. The function identifierStart will get called to know if a given character is a valid character to be the first character for an identifier. The function identifierContinue will get called to know if a given character is a valid character to be a follow-up identifier character. The functions identifierStart and identifierContinue will receive as arguments the single character to be identifier and the character code point. These arguments will be string and numeric. Keep in mind that the string parameter can be two characters long depending on the character representation. It is expected for the function to return true or false, whether that character is allowed or not.
         * Since this function will be called extensivelly, keep the implementation of these functions fast, as the performance of these functions have a direct impact on the expressions parsing speed.
         *
         * @param identifierStart The function that will decide whether the given character is a valid identifier start character.
         * @param identifierContinue The function that will decide whether the given character is a valid identifier continue character.
         **/
        setIdentifierFns(
            identifierStart?: (character: string, codePoint: number) => boolean,
            identifierContinue?: (character: string, codePoint: number) => boolean): void;
    }

    interface ICompiledExpression {
        (context: any, locals?: any): any;

        literal: boolean;
        constant: boolean;

        // If value is not provided, undefined is gonna be used since the implementation
        // does not check the parameter. Let's force a value for consistency. If consumer
        // whants to undefine it, pass the undefined value explicitly.
        assign(context: any, value: any): any;
    }

    /**
     * $location - $locationProvider - service in module ng
     * see https://docs.angularjs.org/api/ng/service/$location
     */
    interface ILocationService {
        absUrl(): string;

        /**
         * Returns the hash fragment
         */
        hash(): string;

        /**
         * Changes the hash fragment and returns `$location`
         */
        hash(newHash: string|null): ILocationService;

        host(): string;

        /**
         * Return path of current url
         */
        path(): string;

        /**
         * Change path when called with parameter and return $location.
         * Note: Path should always begin with forward slash (/), this method will add the forward slash if it is missing.
         *
         * @param path New path
         */
        path(path: string): ILocationService;

        port(): number;
        protocol(): string;
        replace(): ILocationService;

        /**
         * Return search part (as object) of current url
         */
        search(): any;

        /**
         * Change search part when called with parameter and return $location.
         *
         * @param search When called with a single argument the method acts as a setter, setting the search component of $location to the specified value.
         *
         * If the argument is a hash object containing an array of values, these values will be encoded as duplicate search parameters in the url.
         */
        search(search: any): ILocationService;

        /**
         * Change search part when called with parameter and return $location.
         *
         * @param search New search params
         * @param paramValue If search is a string or a Number, then paramValue will override only a single search property. If paramValue is null, the property specified via the first argument will be deleted. If paramValue is an array, it will override the property of the search component of $location specified via the first argument. If paramValue is true, the property specified via the first argument will be added with no value nor trailing equal sign.
         */
        search(search: string, paramValue: string|number|null|string[]|boolean): ILocationService;

        state(): any;
        state(state: any): ILocationService;
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
        html5Mode(mode: { enabled?: boolean; requireBase?: boolean; rewriteLinks?: boolean; }): ILocationProvider;
    }

    ///////////////////////////////////////////////////////////////////////////
    // DocumentService
    // see http://docs.angularjs.org/api/ng.$document
    ///////////////////////////////////////////////////////////////////////////
    interface IDocumentService extends JQLite {
        // Must return intersection type for index signature compatibility with JQuery
        [index: number]: HTMLElement & Document;
    }

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
    interface IRootElementService extends JQLite {}

    interface IQResolveReject<T> {
        (): void;
        (value: T): void;
    }
    /**
     * $q - service in module ng
     * A promise/deferred implementation inspired by Kris Kowal's Q.
     * See http://docs.angularjs.org/api/ng/service/$q
     */
    interface IQService {
        new <T>(resolver: (resolve: IQResolveReject<T>, reject: IQResolveReject<any>) => any): IPromise<T>;
        <T>(resolver: (resolve: IQResolveReject<T>, reject: IQResolveReject<any>) => any): IPromise<T>;

        /**
         * Combines multiple promises into a single promise that is resolved when all of the input promises are resolved.
         *
         * Returns a single promise that will be resolved with an array of values, each value corresponding to the promise at the same index in the promises array. If any of the promises is resolved with a rejection, this resulting promise will be rejected with the same rejection value.
         *
         * @param promises An array of promises.
         */
        all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise <T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>, T9 | IPromise<T9>, T10 | IPromise<T10>]): IPromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
        all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise <T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>, T9 | IPromise<T9>]): IPromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
        all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise <T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>]): IPromise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
        all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise <T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>]): IPromise<[T1, T2, T3, T4, T5, T6, T7]>;
        all<T1, T2, T3, T4, T5, T6>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise <T4>, T5 | IPromise<T5>, T6 | IPromise<T6>]): IPromise<[T1, T2, T3, T4, T5, T6]>;
        all<T1, T2, T3, T4, T5>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise <T4>, T5 | IPromise<T5>]): IPromise<[T1, T2, T3, T4, T5]>;
        all<T1, T2, T3, T4>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise <T4>]): IPromise<[T1, T2, T3, T4]>;
        all<T1, T2, T3>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>]): IPromise<[T1, T2, T3]>;
        all<T1, T2>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>]): IPromise<[T1, T2]>;
        all<TAll>(promises: Array<IPromise<TAll>>): IPromise<TAll[]>;
        /**
         * Combines multiple promises into a single promise that is resolved when all of the input promises are resolved.
         *
         * Returns a single promise that will be resolved with a hash of values, each value corresponding to the promise at the same key in the promises hash. If any of the promises is resolved with a rejection, this resulting promise will be rejected with the same rejection value.
         *
         * @param promises A hash of promises.
         */
        all<T>(promises: { [K in keyof T]: (IPromise<T[K]> | T[K]); }): IPromise<T>;
        /**
         * Creates a Deferred object which represents a task which will finish in the future.
         */
        defer<T>(): IDeferred<T>;
        /**
         * Returns a promise that resolves or rejects as soon as one of those promises resolves or rejects, with the value or reason from that promise.
         *
         * @param promises A list or hash of promises.
         */
        race<T>(promises: Array<IPromise<T>> | {[key: string]: IPromise<T>}): IPromise<T>;
        /**
         * Creates a promise that is resolved as rejected with the specified reason. This api should be used to forward rejection in a chain of promises. If you are dealing with the last promise in a promise chain, you don't need to worry about it.
         *
         * When comparing deferreds/promises to the familiar behavior of try/catch/throw, think of reject as the throw keyword in JavaScript. This also means that if you "catch" an error via a promise error callback and you want to forward the error to the promise derived from the current promise, you have to "rethrow" the error by returning a rejection constructed via reject.
         *
         * @param reason Constant, message, exception or an object representing the rejection reason.
         */
        reject(reason?: any): IPromise<never>;
        /**
         * Wraps an object that might be a value or a (3rd party) then-able promise into a $q promise. This is useful when you are dealing with an object that might or might not be a promise, or if the promise comes from a source that can't be trusted.
         *
         * @param value Value or a promise
         */
        resolve<T>(value: IPromise<T>|T): IPromise<T>;
        /**
         * @deprecated Since TS 2.4, inference is stricter and no longer produces the desired type when T1 !== T2.
         * To use resolve with two different types, pass a union type to the single-type-argument overload.
         */
        resolve<T1, T2>(value: IPromise<T1>|T2): IPromise<T1|T2>;
        /**
         * Wraps an object that might be a value or a (3rd party) then-able promise into a $q promise. This is useful when you are dealing with an object that might or might not be a promise, or if the promise comes from a source that can't be trusted.
         */
        resolve(): IPromise<void>;
        /**
         * Wraps an object that might be a value or a (3rd party) then-able promise into a $q promise. This is useful when you are dealing with an object that might or might not be a promise, or if the promise comes from a source that can't be trusted.
         *
         * @param value Value or a promise
         */
        when<T>(value: IPromise<T>|T): IPromise<T>;
        when<T1, T2>(value: IPromise<T1>|T2): IPromise<T1|T2>;
        when<TResult, T>(value: IPromise<T>|T, successCallback: (promiseValue: T) => IPromise<TResult>|TResult): IPromise<TResult>;
        when<TResult, T>(value: T, successCallback: (promiseValue: T) => IPromise<TResult>|TResult, errorCallback: null | undefined | ((reason: any) => any), notifyCallback?: (state: any) => any): IPromise<TResult>;
        when<TResult, TResult2, T>(value: IPromise<T>, successCallback: (promiseValue: T) => IPromise<TResult>|TResult, errorCallback: (reason: any) => TResult2 | IPromise<TResult2>, notifyCallback?: (state: any) => any): IPromise<TResult | TResult2>;
        /**
         * Wraps an object that might be a value or a (3rd party) then-able promise into a $q promise. This is useful when you are dealing with an object that might or might not be a promise, or if the promise comes from a source that can't be trusted.
         */
        when(): IPromise<void>;
    }

    interface IQProvider {
        /**
         * Retrieves or overrides whether to generate an error when a rejected promise is not handled.
         * This feature is enabled by default.
         *
         * @returns Current value
         */
        errorOnUnhandledRejections(): boolean;

        /**
         * Retrieves or overrides whether to generate an error when a rejected promise is not handled.
         * This feature is enabled by default.
         *
         * @param value Whether to generate an error when a rejected promise is not handled.
         * @returns Self for chaining otherwise.
         */
        errorOnUnhandledRejections(value: boolean): IQProvider;
    }

    interface IPromise<T> {
        /**
         * Regardless of when the promise was or will be resolved or rejected, then calls one of
         * the success or error callbacks asynchronously as soon as the result is available. The
         * callbacks are called with a single argument: the result or rejection reason.
         * Additionally, the notify callback may be called zero or more times to provide a
         * progress indication, before the promise is resolved or rejected.
         * The `successCallBack` may return `IPromise<never>` for when a `$q.reject()` needs to
         * be returned.
         * This method returns a new promise which is resolved or rejected via the return value
         * of the `successCallback`, `errorCallback`. It also notifies via the return value of
         * the `notifyCallback` method. The promise can not be resolved or rejected from the
         * `notifyCallback` method.
         */
        then<TResult1 = T, TResult2 = never>(
            successCallback?:
                | ((value: T) => IPromise<never> | IPromise<TResult1> | TResult1)
                | null,
            errorCallback?:
                | ((reason: any) => IPromise<never> | IPromise<TResult2> | TResult2)
                | null,
            notifyCallback?: (state: any) => any
        ): IPromise<TResult1 | TResult2>;

        /**
         * Shorthand for promise.then(null, errorCallback)
         */
        catch<TResult = never>(
            onRejected?:
                | ((reason: any) => IPromise<never> | IPromise<TResult> | TResult)
                | null
        ): IPromise<T | TResult>;

        /**
         * Allows you to observe either the fulfillment or rejection of a promise, but to do so without modifying the final value. This is useful to release resources or do some clean-up that needs to be done whether the promise was rejected or resolved. See the full specification for more information.
         *
         * Because finally is a reserved word in JavaScript and reserved keywords are not supported as property names by ES3, you'll need to invoke the method like promise['finally'](callback) to make your code IE8 and Android 2.x compatible.
         */
        finally(finallyCallback: () => void): IPromise<T>;
    }

    interface IDeferred<T> {
        resolve(value?: T|IPromise<T>): void;
        reject(reason?: any): void;
        notify(state?: any): void;
        promise: IPromise<T>;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AnchorScrollService
    // see http://docs.angularjs.org/api/ng.$anchorScroll
    ///////////////////////////////////////////////////////////////////////////
    interface IAnchorScrollService {
        (): void;
        (hash: string): void;
        yOffset: any;
    }

    interface IAnchorScrollProvider extends IServiceProvider {
        disableAutoScrolling(): void;
    }

    /**
     * $cacheFactory - service in module ng
     *
     * Factory that constructs Cache objects and gives access to them.
     *
     * see https://docs.angularjs.org/api/ng/service/$cacheFactory
     */
    interface ICacheFactoryService {
        /**
         * Factory that constructs Cache objects and gives access to them.
         *
         * @param cacheId Name or id of the newly created cache.
         * @param optionsMap Options object that specifies the cache behavior. Properties:
         *
         * capacity — turns the cache into LRU cache.
         */
        (cacheId: string, optionsMap?: { capacity?: number; }): ICacheObject;

        /**
         * Get information about all the caches that have been created.
         * @returns key-value map of cacheId to the result of calling cache#info
         */
        info(): any;

        /**
         * Get access to a cache object by the cacheId used when it was created.
         *
         * @param cacheId Name or id of a cache to access.
         */
        get(cacheId: string): ICacheObject;
    }

    /**
     * $cacheFactory.Cache - type in module ng
     *
     * A cache object used to store and retrieve data, primarily used by $http and the script directive to cache templates and other data.
     *
     * see https://docs.angularjs.org/api/ng/type/$cacheFactory.Cache
     */
    interface ICacheObject {
        /**
         * Retrieve information regarding a particular Cache.
         */
        info(): {
            /**
             * the id of the cache instance
             */
            id: string;

            /**
             * the number of entries kept in the cache instance
             */
            size: number;

            // ...: any additional properties from the options object when creating the cache.
        };

        /**
         * Inserts a named entry into the Cache object to be retrieved later, and incrementing the size of the cache if the key was not already present in the cache. If behaving like an LRU cache, it will also remove stale entries from the set.
         *
         * It will not insert undefined values into the cache.
         *
         * @param key the key under which the cached data is stored.
         * @param value the value to store alongside the key. If it is undefined, the key will not be stored.
         */
        put<T>(key: string, value?: T): T;

        /**
         * Retrieves named data stored in the Cache object.
         *
         * @param key the key of the data to be retrieved
         */
        get<T>(key: string): T;

        /**
         * Removes an entry from the Cache object.
         *
         * @param key the key of the entry to be removed
         */
        remove(key: string): void;

        /**
         * Clears the cache object of any entries.
         */
        removeAll(): void;

        /**
         * Destroys the Cache object entirely, removing it from the $cacheFactory set.
         */
        destroy(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // CompileService
    // see http://docs.angularjs.org/api/ng.$compile
    // see http://docs.angularjs.org/api/ng.$compileProvider
    ///////////////////////////////////////////////////////////////////////////
    interface ICompileService {
        (element: string | Element | JQuery, transclude?: ITranscludeFunction, maxPriority?: number): ITemplateLinkingFunction;
    }

    interface ICompileProvider extends IServiceProvider {
        directive<TScope extends IScope = IScope>(name: string, directiveFactory: Injectable<IDirectiveFactory<TScope>>): ICompileProvider;
        directive<TScope extends IScope = IScope>(object: {[directiveName: string]: Injectable<IDirectiveFactory<TScope>>}): ICompileProvider;

        component(name: string, options: IComponentOptions): ICompileProvider;

        aHrefSanitizationWhitelist(): RegExp;
        aHrefSanitizationWhitelist(regexp: RegExp): ICompileProvider;

        imgSrcSanitizationWhitelist(): RegExp;
        imgSrcSanitizationWhitelist(regexp: RegExp): ICompileProvider;

        debugInfoEnabled(): boolean;
        debugInfoEnabled(enabled: boolean): ICompileProvider;

        /**
         * Call this method to enable/disable whether directive controllers are assigned bindings before calling the controller's constructor.
         * If enabled (true), the compiler assigns the value of each of the bindings to the properties of the controller object before the constructor of this object is called.
         * If disabled (false), the compiler calls the constructor first before assigning bindings.
         * Defaults to false.
         * See: https://docs.angularjs.org/api/ng/provider/$compileProvider#preAssignBindingsEnabled
         */
        preAssignBindingsEnabled(): boolean;
        preAssignBindingsEnabled(enabled: boolean): ICompileProvider;

        /**
         * Sets the number of times $onChanges hooks can trigger new changes before giving up and assuming that the model is unstable.
         * Increasing the TTL could have performance implications, so you should not change it without proper justification.
         * Default: 10.
         * See: https://docs.angularjs.org/api/ng/provider/$compileProvider#onChangesTtl
         */
        onChangesTtl(): number;
        onChangesTtl(limit: number): ICompileProvider;

        /**
         * It indicates to the compiler whether or not directives on comments should be compiled.
         * It results in a compilation performance gain since the compiler doesn't have to check comments when looking for directives.
         * Defaults to true.
         * See: https://docs.angularjs.org/api/ng/provider/$compileProvider#commentDirectivesEnabled
         */
        commentDirectivesEnabled(): boolean;
        commentDirectivesEnabled(enabled: boolean): ICompileProvider;

        /**
         * It indicates to the compiler whether or not directives on element classes should be compiled.
         * It results in a compilation performance gain since the compiler doesn't have to check element classes when looking for directives.
         * Defaults to true.
         * See: https://docs.angularjs.org/api/ng/provider/$compileProvider#cssClassDirectivesEnabled
         */
        cssClassDirectivesEnabled(): boolean;
        cssClassDirectivesEnabled(enabled: boolean): ICompileProvider;

        /**
        * Call this method to enable/disable strict component bindings check.
        * If enabled, the compiler will enforce that for all bindings of a
        * component that are not set as optional with ?, an attribute needs
        * to be provided on the component's HTML tag.
        * Defaults to false.
        * See: https://docs.angularjs.org/api/ng/provider/$compileProvider#strictComponentBindingsEnabled
        */
        strictComponentBindingsEnabled(): boolean;
        strictComponentBindingsEnabled(enabled: boolean): ICompileProvider;
    }

    interface ICloneAttachFunction {
        // Let's hint but not force cloneAttachFn's signature
        (clonedElement?: JQLite, scope?: IScope): any;
    }

    // This corresponds to the "publicLinkFn" returned by $compile.
    interface ITemplateLinkingFunction {
        (scope: IScope, cloneAttachFn?: ICloneAttachFunction, options?: ITemplateLinkingFunctionOptions): JQLite;
    }

    interface ITemplateLinkingFunctionOptions {
        parentBoundTranscludeFn?: ITranscludeFunction;
        transcludeControllers?: {
            [controller: string]: { instance: IController }
        };
        futureParentElement?: JQuery;
    }

    /**
     * This corresponds to $transclude passed to controllers and to the transclude function passed to link functions.
     * https://docs.angularjs.org/api/ng/service/$compile#-controller-
     * http://teropa.info/blog/2015/06/09/transclusion.html
     */
    interface ITranscludeFunction {
        // If the scope is provided, then the cloneAttachFn must be as well.
        (scope: IScope, cloneAttachFn: ICloneAttachFunction, futureParentElement?: JQuery, slotName?: string): JQLite;
        // If one argument is provided, then it's assumed to be the cloneAttachFn.
        (cloneAttachFn?: ICloneAttachFunction, futureParentElement?: JQuery, slotName?: string): JQLite;

        /**
         * Returns true if the specified slot contains content (i.e. one or more DOM nodes)
         */
        isSlotFilled(slotName: string): boolean;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ControllerService
    // see http://docs.angularjs.org/api/ng.$controller
    // see http://docs.angularjs.org/api/ng.$controllerProvider
    ///////////////////////////////////////////////////////////////////////////

    /**
     * The minimal local definitions required by $controller(ctrl, locals) calls.
     */
    interface IControllerLocals {
        $scope: ng.IScope;
        $element: JQuery;
    }

    interface IControllerService {
        // Although the documentation doesn't state this, locals are optional
        <T>(controllerConstructor: new (...args: any[]) => T, locals?: any, later?: boolean, ident?: string): T;
        <T>(controllerConstructor: Function, locals?: IControllerLocals, later?: boolean, ident?: string): T;
        <T>(controllerConstructor: Function, locals?: any, later?: boolean, ident?: string): T;
        <T>(controllerName: string, locals?: any, later?: boolean, ident?: string): T;
    }

    interface IControllerProvider extends IServiceProvider {
        register(name: string, controllerConstructor: Function): void;
        register(name: string, dependencyAnnotatedConstructor: any[]): void;
        allowGlobals(): void;
    }

    /**
     * xhrFactory
     * Replace or decorate this service to create your own custom XMLHttpRequest objects.
     * see https://docs.angularjs.org/api/ng/service/$xhrFactory
     */
    interface IXhrFactory<T> {
        (method: string, url: string): T;
    }

    /**
     * HttpService
     * see http://docs.angularjs.org/api/ng/service/$http
     */
    interface IHttpService {
        /**
         * Object describing the request to be made and how it should be processed.
         */
        <T>(config: IRequestConfig): IHttpPromise<T>;

        /**
         * Shortcut method to perform GET request.
         *
         * @param url Relative or absolute URL specifying the destination of the request
         * @param config Optional configuration object
         */
        get<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>;

        /**
         * Shortcut method to perform DELETE request.
         *
         * @param url Relative or absolute URL specifying the destination of the request
         * @param config Optional configuration object
         */
        delete<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>;

        /**
         * Shortcut method to perform HEAD request.
         *
         * @param url Relative or absolute URL specifying the destination of the request
         * @param config Optional configuration object
         */
        head<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>;

        /**
         * Shortcut method to perform JSONP request.
         *
         * @param url Relative or absolute URL specifying the destination of the request
         * @param config Optional configuration object
         */
        jsonp<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>;

        /**
         * Shortcut method to perform POST request.
         *
         * @param url Relative or absolute URL specifying the destination of the request
         * @param data Request content
         * @param config Optional configuration object
         */
        post<T>(url: string, data: any, config?: IRequestShortcutConfig): IHttpPromise<T>;

        /**
         * Shortcut method to perform PUT request.
         *
         * @param url Relative or absolute URL specifying the destination of the request
         * @param data Request content
         * @param config Optional configuration object
         */
        put<T>(url: string, data: any, config?: IRequestShortcutConfig): IHttpPromise<T>;

        /**
         * Shortcut method to perform PATCH request.
         *
         * @param url Relative or absolute URL specifying the destination of the request
         * @param data Request content
         * @param config Optional configuration object
         */
        patch<T>(url: string, data: any, config?: IRequestShortcutConfig): IHttpPromise<T>;

        /**
         * Runtime equivalent of the $httpProvider.defaults property. Allows configuration of default headers, withCredentials as well as request and response transformations.
         */
        defaults: IHttpProviderDefaults;

        /**
         * Array of config objects for currently pending requests. This is primarily meant to be used for debugging purposes.
         */
        pendingRequests: IRequestConfig[];
    }

    /**
     * Object describing the request to be made and how it should be processed.
     * see http://docs.angularjs.org/api/ng/service/$http#usage
     */
    interface IRequestShortcutConfig extends IHttpProviderDefaults {
        /**
         * {Object.<string|Object>}
         * Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be JSONified.
         */
        params?: any;

        /**
         * {string|Object}
         * Data to be sent as the request message data.
         */
        data?: any;

        /**
         * Timeout in milliseconds, or promise that should abort the request when resolved.
         */
        timeout?: number|IPromise<any>;

        /**
         * See [XMLHttpRequest.responseType]https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#xmlhttprequest-responsetype
         */
        responseType?: string;

        /**
         * Name of the parameter added (by AngularJS) to the request to specify the name (in the server response) of the JSON-P callback to invoke.
         * If unspecified, $http.defaults.jsonpCallbackParam will be used by default. This property is only applicable to JSON-P requests.
         */
        jsonpCallbackParam?: string;
    }

    /**
     * Object describing the request to be made and how it should be processed.
     * see http://docs.angularjs.org/api/ng/service/$http#usage
     */
    interface IRequestConfig extends IRequestShortcutConfig {
        /**
         * HTTP method (e.g. 'GET', 'POST', etc)
         */
        method: string;
        /**
         * Absolute or relative URL of the resource that is being requested.
         */
        url: string;
        /**
         * Event listeners to be bound to the XMLHttpRequest object.
         * To bind events to the XMLHttpRequest upload object, use uploadEventHandlers. The handler will be called in the context of a $apply block.
         */
        eventHandlers?: { [type: string]: EventListenerOrEventListenerObject };
        /**
         * Event listeners to be bound to the XMLHttpRequest upload object.
         * To bind events to the XMLHttpRequest object, use eventHandlers. The handler will be called in the context of a $apply block.
         */
        uploadEventHandlers?: { [type: string]: EventListenerOrEventListenerObject };
    }

    interface IHttpHeadersGetter {
        (): { [name: string]: string; };
        (headerName: string): string;
    }

    interface IHttpPromiseCallback<T> {
        (data: T, status: number, headers: IHttpHeadersGetter, config: IRequestConfig): void;
    }

    interface IHttpResponse<T> {
        data: T;
        status: number;
        headers: IHttpHeadersGetter;
        config: IRequestConfig;
        statusText: string;
        /** Added in AngularJS 1.6.6 */
        xhrStatus: 'complete' | 'error' | 'timeout' | 'abort';
    }

    /** @deprecated The old name of IHttpResponse. Kept for compatibility. */
    type IHttpPromiseCallbackArg<T> = IHttpResponse<T>;

    type IHttpPromise<T> = IPromise<IHttpResponse<T>>;

    // See the jsdoc for transformData() at https://github.com/angular/angular.js/blob/master/src/ng/http.js#L228
    interface IHttpRequestTransformer {
        (data: any, headersGetter: IHttpHeadersGetter): any;
    }

    // The definition of fields are the same as IHttpResponse
    interface IHttpResponseTransformer {
        (data: any, headersGetter: IHttpHeadersGetter, status: number): any;
    }

    interface HttpHeaderType {
        [requestType: string]: string|((config: IRequestConfig) => string);
    }

    interface IHttpRequestConfigHeaders {
        [requestType: string]: any;
        common?: any;
        get?: any;
        post?: any;
        put?: any;
        patch?: any;
    }

    /**
    * Object that controls the defaults for $http provider. Not all fields of IRequestShortcutConfig can be configured
    * via defaults and the docs do not say which. The following is based on the inspection of the source code.
    * https://docs.angularjs.org/api/ng/service/$http#defaults
    * https://docs.angularjs.org/api/ng/service/$http#usage
    * https://docs.angularjs.org/api/ng/provider/$httpProvider The properties section
    */
    interface IHttpProviderDefaults {
        /**
         * {boolean|Cache}
         * If true, a default $http cache will be used to cache the GET request, otherwise if a cache instance built with $cacheFactory, this cache will be used for caching.
         */
        cache?: any;

        /**
         * Transform function or an array of such functions. The transform function takes the http request body and
         * headers and returns its transformed (typically serialized) version.
         * @see {@link https://docs.angularjs.org/api/ng/service/$http#transforming-requests-and-responses}
         */
        transformRequest?: IHttpRequestTransformer |IHttpRequestTransformer[];

        /**
         * Transform function or an array of such functions. The transform function takes the http response body and
         * headers and returns its transformed (typically deserialized) version.
         */
        transformResponse?: IHttpResponseTransformer | IHttpResponseTransformer[];

        /**
         * Map of strings or functions which return strings representing HTTP headers to send to the server. If the
         * return value of a function is null, the header will not be sent.
         * The key of the map is the request verb in lower case. The "common" key applies to all requests.
         * @see {@link https://docs.angularjs.org/api/ng/service/$http#setting-http-headers}
         */
        headers?: IHttpRequestConfigHeaders;

        /** Name of HTTP header to populate with the XSRF token. */
        xsrfHeaderName?: string;

        /** Name of cookie containing the XSRF token. */
        xsrfCookieName?: string;

        /**
         * whether to to set the withCredentials flag on the XHR object. See [requests with credentials]https://developer.mozilla.org/en/http_access_control#section_5 for more information.
         */
        withCredentials?: boolean;

        /**
        * A function used to the prepare string representation of request parameters (specified as an object). If
        * specified as string, it is interpreted as a function registered with the $injector. Defaults to
        * $httpParamSerializer.
        */
        paramSerializer?: string | ((obj: any) => string);
    }

    interface IHttpInterceptor {
        request?(config: IRequestConfig): IRequestConfig | IPromise<IRequestConfig>;
        requestError?(rejection: any): IRequestConfig | IPromise<IRequestConfig>;
        response?<T>(response: IHttpResponse<T>): IPromise<IHttpResponse<T>> | IHttpResponse<T>;
        responseError?<T>(rejection: any): IPromise<IHttpResponse<T>> | IHttpResponse<T>;
    }

    interface IHttpInterceptorFactory {
        (...args: any[]): IHttpInterceptor;
    }

    interface IHttpProvider extends IServiceProvider {
        defaults: IHttpProviderDefaults;

        /**
         * Register service factories (names or implementations) for interceptors which are called before and after
         * each request.
         */
        interceptors: Array<string | Injectable<IHttpInterceptorFactory>>;
        useApplyAsync(): boolean;
        useApplyAsync(value: boolean): IHttpProvider;

        /**
         * @param value If true, `$http` will return a normal promise without the `success` and `error` methods.
         * @returns If a value is specified, returns the $httpProvider for chaining.
         *    otherwise, returns the current configured value.
         */
        useLegacyPromiseExtensions(value: boolean): boolean | IHttpProvider;
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
        (text: string, mustHaveExpression?: boolean, trustedContext?: string, allOrNothing?: boolean): IInterpolationFunction;
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
        resourceUrlBlacklist(): any[];
        resourceUrlBlacklist(blacklist: any[]): void;
        resourceUrlWhitelist(): any[];
        resourceUrlWhitelist(whitelist: any[]): void;
    }

    /**
     * $templateRequest service
     * see http://docs.angularjs.org/api/ng/service/$templateRequest
     */
    interface ITemplateRequestService {
        /**
         * Downloads a template using $http and, upon success, stores the
         * contents inside of $templateCache.
         *
         * If the HTTP request fails or the response data of the HTTP request is
         * empty then a $compile error will be thrown (unless
         * {ignoreRequestError} is set to true).
         *
         * @param tpl                  The template URL.
         * @param ignoreRequestError   Whether or not to ignore the exception
         *                             when the request fails or the template is
         *                             empty.
         *
         * @return   A promise whose value is the template content.
         */
        (tpl: string, ignoreRequestError?: boolean): IPromise<string>;
        /**
         * total amount of pending template requests being downloaded.
         */
        totalPendingRequests: number;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Component
    // see http://angularjs.blogspot.com.br/2015/11/angularjs-15-beta2-and-14-releases.html
    // and http://toddmotto.com/exploring-the-angular-1-5-component-method/
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Component definition object (a simplified directive definition object)
     */
    interface IComponentOptions {
        /**
         * Controller constructor function that should be associated with newly created scope or the name of a registered
         * controller if passed as a string. Empty function by default.
         * Use the array form to define dependencies (necessary if strictDi is enabled and you require dependency injection)
         */
        controller?: string | Injectable<IControllerConstructor>;
        /**
         * An identifier name for a reference to the controller. If present, the controller will be published to its scope under
         * the specified name. If not present, this will default to '$ctrl'.
         */
        controllerAs?: string;
        /**
         * html template as a string or a function that returns an html template as a string which should be used as the
         * contents of this component. Empty string by default.
         * If template is a function, then it is injected with the following locals:
         * $element - Current element
         * $attrs - Current attributes object for the element
         * Use the array form to define dependencies (necessary if strictDi is enabled and you require dependency injection)
         */
        template?: string | Injectable<(...args: any[]) => string>;
        /**
         * Path or function that returns a path to an html template that should be used as the contents of this component.
         * If templateUrl is a function, then it is injected with the following locals:
         * $element - Current element
         * $attrs - Current attributes object for the element
         * Use the array form to define dependencies (necessary if strictDi is enabled and you require dependency injection)
         */
        templateUrl?: string | Injectable<(...args: any[]) => string>;
        /**
         * Define DOM attribute binding to component properties. Component properties are always bound to the component
         * controller and not to the scope.
         */
        bindings?: {[boundProperty: string]: string};
        /**
         * Whether transclusion is enabled. Disabled by default.
         */
        transclude?: boolean | {[slot: string]: string};
        /**
         * Requires the controllers of other directives and binds them to this component's controller.
         * The object keys specify the property names under which the required controllers (object values) will be bound.
         * Note that the required controllers will not be available during the instantiation of the controller,
         * but they are guaranteed to be available just before the $onInit method is executed!
         */
        require?: {[controller: string]: string};
    }

    type IControllerConstructor =
        (new (...args: any[]) => IController) |
        // Instead of classes, plain functions are often used as controller constructors, especially in examples.
        ((...args: any[]) => (void | IController));

    /**
     * Directive controllers have a well-defined lifecycle. Each controller can implement "lifecycle hooks". These are methods that
     * will be called by Angular at certain points in the life cycle of the directive.
     * https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
     * https://docs.angularjs.org/guide/component
     */
    interface IController {
        /**
         * Called on each controller after all the controllers on an element have been constructed and had their bindings
         * initialized (and before the pre & post linking functions for the directives on this element). This is a good
         * place to put initialization code for your controller.
         */
        $onInit?(): void;
        /**
         * Called on each turn of the digest cycle. Provides an opportunity to detect and act on changes.
         * Any actions that you wish to take in response to the changes that you detect must be invoked from this hook;
         * implementing this has no effect on when `$onChanges` is called. For example, this hook could be useful if you wish
         * to perform a deep equality check, or to check a `Dat`e object, changes to which would not be detected by Angular's
         * change detector and thus not trigger `$onChanges`. This hook is invoked with no arguments; if detecting changes,
         * you must store the previous value(s) for comparison to the current values.
         */
        $doCheck?(): void;
        /**
         * Called whenever one-way bindings are updated. The onChangesObj is a hash whose keys are the names of the bound
         * properties that have changed, and the values are an {@link IChangesObject} object  of the form
         * { currentValue, previousValue, isFirstChange() }. Use this hook to trigger updates within a component such as
         * cloning the bound value to prevent accidental mutation of the outer value.
         */
        $onChanges?(onChangesObj: IOnChangesObject): void;
        /**
         * Called on a controller when its containing scope is destroyed. Use this hook for releasing external resources,
         * watches and event handlers.
         */
        $onDestroy?(): void;
        /**
         * Called after this controller's element and its children have been linked. Similar to the post-link function this
         * hook can be used to set up DOM event handlers and do direct DOM manipulation. Note that child elements that contain
         * templateUrl directives will not have been compiled and linked since they are waiting for their template to load
         * asynchronously and their own compilation and linking has been suspended until that occurs. This hook can be considered
         * analogous to the ngAfterViewInit and ngAfterContentInit hooks in Angular 2. Since the compilation process is rather
         * different in Angular 1 there is no direct mapping and care should be taken when upgrading.
         */
        $postLink?(): void;

        // IController implementations frequently do not implement any of its methods.
        // A string indexer indicates to TypeScript not to issue a weak type error in this case.
        [s: string]: any;
    }

    /**
     * Interface for the $onInit lifecycle hook
     * https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
     */
    interface IOnInit {
        /**
         * Called on each controller after all the controllers on an element have been constructed and had their bindings
         * initialized (and before the pre & post linking functions for the directives on this element). This is a good
         * place to put initialization code for your controller.
         */
        $onInit(): void;
    }

    /**
     * Interface for the $doCheck lifecycle hook
     * https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
     */
    interface IDoCheck {
        /**
         * Called on each turn of the digest cycle. Provides an opportunity to detect and act on changes.
         * Any actions that you wish to take in response to the changes that you detect must be invoked from this hook;
         * implementing this has no effect on when `$onChanges` is called. For example, this hook could be useful if you wish
         * to perform a deep equality check, or to check a `Dat`e object, changes to which would not be detected by Angular's
         * change detector and thus not trigger `$onChanges`. This hook is invoked with no arguments; if detecting changes,
         * you must store the previous value(s) for comparison to the current values.
         */
        $doCheck(): void;
    }

    /**
     * Interface for the $onChanges lifecycle hook
     * https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
     */
    interface IOnChanges {
        /**
         * Called whenever one-way bindings are updated. The onChangesObj is a hash whose keys are the names of the bound
         * properties that have changed, and the values are an {@link IChangesObject} object  of the form
         * { currentValue, previousValue, isFirstChange() }. Use this hook to trigger updates within a component such as
         * cloning the bound value to prevent accidental mutation of the outer value.
         */
        $onChanges(onChangesObj: IOnChangesObject): void;
    }

    /**
     * Interface for the $onDestroy lifecycle hook
     * https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
     */
    interface IOnDestroy {
        /**
         * Called on a controller when its containing scope is destroyed. Use this hook for releasing external resources,
         * watches and event handlers.
         */
        $onDestroy(): void;
    }

    /**
     * Interface for the $postLink lifecycle hook
     * https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
     */
    interface IPostLink {
        /**
         * Called after this controller's element and its children have been linked. Similar to the post-link function this
         * hook can be used to set up DOM event handlers and do direct DOM manipulation. Note that child elements that contain
         * templateUrl directives will not have been compiled and linked since they are waiting for their template to load
         * asynchronously and their own compilation and linking has been suspended until that occurs. This hook can be considered
         * analogous to the ngAfterViewInit and ngAfterContentInit hooks in Angular 2. Since the compilation process is rather
         * different in Angular 1 there is no direct mapping and care should be taken when upgrading.
         */
        $postLink(): void;
    }

    interface IOnChangesObject {
        [property: string]: IChangesObject<any>;
    }

    interface IChangesObject<T> {
        currentValue: T;
        previousValue: T;
        isFirstChange(): boolean;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Directive
    // see http://docs.angularjs.org/api/ng.$compileProvider#directive
    // and http://docs.angularjs.org/guide/directive
    ///////////////////////////////////////////////////////////////////////////

    interface IDirectiveFactory<TScope extends IScope = IScope> {
        (...args: any[]): IDirective<TScope> | IDirectiveLinkFn<TScope>;
    }

    interface IDirectiveLinkFn<TScope extends IScope = IScope> {
        (
            scope: TScope,
            instanceElement: JQLite,
            instanceAttributes: IAttributes,
            controller?: IController | IController[] | {[key: string]: IController},
            transclude?: ITranscludeFunction
        ): void;
    }

    interface IDirectivePrePost<TScope extends IScope = IScope> {
        pre?: IDirectiveLinkFn<TScope>;
        post?: IDirectiveLinkFn<TScope>;
    }

    interface IDirectiveCompileFn<TScope extends IScope = IScope> {
        (
            templateElement: JQLite,
            templateAttributes: IAttributes,
            /**
             * @deprecated
             * Note: The transclude function that is passed to the compile function is deprecated,
             * as it e.g. does not know about the right outer scope. Please use the transclude function
             * that is passed to the link function instead.
             */
            transclude: ITranscludeFunction
        ): void | IDirectiveLinkFn<TScope> | IDirectivePrePost<TScope>;
    }

    interface IDirective<TScope extends IScope = IScope> {
        compile?: IDirectiveCompileFn<TScope>;
        controller?: string | Injectable<IControllerConstructor>;
        controllerAs?: string;
        /**
         * Deprecation warning: although bindings for non-ES6 class controllers are currently bound to this before
         * the controller constructor is called, this use is now deprecated. Please place initialization code that
         * relies upon bindings inside a $onInit method on the controller, instead.
         */
        bindToController?: boolean | {[boundProperty: string]: string};
        link?: IDirectiveLinkFn<TScope> | IDirectivePrePost<TScope>;
        multiElement?: boolean;
        priority?: number;
        /**
         * @deprecated
         */
        replace?: boolean;
        require?: string | string[] | {[controller: string]: string};
        restrict?: string;
        scope?: boolean | {[boundProperty: string]: string};
        template?: string | ((tElement: JQLite, tAttrs: IAttributes) => string);
        templateNamespace?: string;
        templateUrl?: string | ((tElement: JQLite, tAttrs: IAttributes) => string);
        terminal?: boolean;
        transclude?: boolean | 'element' | {[slot: string]: string};
    }

    /**
     * These interfaces are kept for compatibility with older versions of these type definitions.
     * Actually, Angular doesn't create a special subclass of jQuery objects. It extends jQuery.prototype
     * like jQuery plugins do, that's why all jQuery objects have these Angular-specific methods, not
     * only those returned from angular.element.
     * See: http://docs.angularjs.org/api/angular.element
     */
    interface IAugmentedJQueryStatic extends JQueryStatic {}
    interface IAugmentedJQuery extends JQLite {}

    /**
     * Same as IController. Keeping it for compatibility with older versions of these type definitions.
     */
    interface IComponentController extends IController {}

    ///////////////////////////////////////////////////////////////////////////
    // AUTO module (angular.js)
    ///////////////////////////////////////////////////////////////////////////
    namespace auto {
        ///////////////////////////////////////////////////////////////////////
        // InjectorService
        // see http://docs.angularjs.org/api/AUTO.$injector
        ///////////////////////////////////////////////////////////////////////
        interface IInjectorService {
            annotate(fn: Function, strictDi?: boolean): string[];
            annotate(inlineAnnotatedFunction: any[]): string[];
            get<T>(name: string, caller?: string): T;
            get(name: '$anchorScroll'): IAnchorScrollService;
            get(name: '$cacheFactory'): ICacheFactoryService;
            get(name: '$compile'): ICompileService;
            get(name: '$controller'): IControllerService;
            get(name: '$document'): IDocumentService;
            get(name: '$exceptionHandler'): IExceptionHandlerService;
            get(name: '$filter'): IFilterService;
            get(name: '$http'): IHttpService;
            get(name: '$httpBackend'): IHttpBackendService;
            get(name: '$httpParamSerializer'): IHttpParamSerializer;
            get(name: '$httpParamSerializerJQLike'): IHttpParamSerializer;
            get(name: '$interpolate'): IInterpolateService;
            get(name: '$interval'): IIntervalService;
            get(name: '$locale'): ILocaleService;
            get(name: '$location'): ILocationService;
            get(name: '$log'): ILogService;
            get(name: '$parse'): IParseService;
            get(name: '$q'): IQService;
            get(name: '$rootElement'): IRootElementService;
            get(name: '$rootScope'): IRootScopeService;
            get(name: '$sce'): ISCEService;
            get(name: '$sceDelegate'): ISCEDelegateService;
            get(name: '$templateCache'): ITemplateCacheService;
            get(name: '$templateRequest'): ITemplateRequestService;
            get(name: '$timeout'): ITimeoutService;
            get(name: '$window'): IWindowService;
            get<T>(name: '$xhrFactory'): IXhrFactory<T>;
            has(name: string): boolean;
            instantiate<T>(typeConstructor: {new(...args: any[]): T}, locals?: any): T;
            invoke<T = any>(func: Injectable<Function | ((...args: any[]) => T)>, context?: any, locals?: any): T;
            strictDi: boolean;
        }

        ///////////////////////////////////////////////////////////////////////
        // ProvideService
        // see http://docs.angularjs.org/api/AUTO.$provide
        ///////////////////////////////////////////////////////////////////////
        interface IProvideService {
            // Documentation says it returns the registered instance, but actual
            // implementation does not return anything.
            // constant(name: string, value: any): any;
            /**
             * Register a constant service, such as a string, a number, an array, an object or a function, with the $injector. Unlike value it can be injected into a module configuration function (see config) and it cannot be overridden by an Angular decorator.
             *
             * @param name The name of the constant.
             * @param value The constant value.
             */
            constant(name: string, value: any): void;

            /**
             * Register a service decorator with the $injector. A service decorator intercepts the creation of a service, allowing it to override or modify the behaviour of the service. The object returned by the decorator may be the original service, or a new service object which replaces or wraps and delegates to the original service.
             *
             * @param name The name of the service to decorate.
             * @param decorator This function will be invoked when the service needs to be instantiated and should return the decorated service instance. The function is called using the injector.invoke method and is therefore fully injectable. Local injection arguments:
             *
             * $delegate - The original service instance, which can be monkey patched, configured, decorated or delegated to.
             */
            decorator(name: string, decorator: Function): void;
            /**
             * Register a service decorator with the $injector. A service decorator intercepts the creation of a service, allowing it to override or modify the behaviour of the service. The object returned by the decorator may be the original service, or a new service object which replaces or wraps and delegates to the original service.
             *
             * @param name The name of the service to decorate.
             * @param inlineAnnotatedFunction This function will be invoked when the service needs to be instantiated and should return the decorated service instance. The function is called using the injector.invoke method and is therefore fully injectable. Local injection arguments:
             *
             * $delegate - The original service instance, which can be monkey patched, configured, decorated or delegated to.
             */
            decorator(name: string, inlineAnnotatedFunction: any[]): void;
            factory(name: string, serviceFactoryFunction: Function): IServiceProvider;
            factory(name: string, inlineAnnotatedFunction: any[]): IServiceProvider;
            provider(name: string, provider: IServiceProvider): IServiceProvider;
            provider(name: string, serviceProviderConstructor: Function): IServiceProvider;
            service(name: string, constructor: Function): IServiceProvider;
            service(name: string, inlineAnnotatedFunction: any[]): IServiceProvider;
            value(name: string, value: any): IServiceProvider;
        }
    }

    /**
     * $http params serializer that converts objects to strings
     * see https://docs.angularjs.org/api/ng/service/$httpParamSerializer
     */
    interface IHttpParamSerializer {
        (obj: Object): string;
    }
}
