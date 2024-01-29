/// <reference types="angular" />

declare namespace OData {
    /**
     * Currently supported options for the $resource factory options argument.
     */
    interface IResourceOptions {
        /**
         * If true then the trailing slashes from any calculated URL will be stripped (defaults to true)
         */
        stripTrailingSlashes?: boolean | undefined;
        odata?: {
            url?: string | undefined;
            method?: string | undefined;
        } | undefined;
        isodatav4?: boolean | undefined;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ResourceService
    // see http://docs.angularjs.org/api/ngResource.$resource
    // Most part of the following definitions were achieved by analyzing the
    // actual implementation, since the documentation doesn't seem to cover
    // that deeply.
    ///////////////////////////////////////////////////////////////////////////
    interface IResourceService {
        (
            url: string,
            paramDefaults?: any,
            /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
             where deleteDescriptor : IActionDescriptor */
            actions?: any,
            options?: IResourceOptions,
        ): IResourceClass<IResource<any>>;
        <T, U>(
            url: string,
            paramDefaults?: any,
            /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
             where deleteDescriptor : IActionDescriptor */
            actions?: any,
            options?: IResourceOptions,
        ): U;
        <T>(
            url: string,
            paramDefaults?: any,
            /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
             where deleteDescriptor : IActionDescriptor */
            actions?: any,
            options?: IResourceOptions,
        ): IResourceClass<T>;
    }

    // Just a reference to facilitate describing new actions
    interface IActionDescriptor {
        url?: string | undefined;
        method: string;
        isArray?: boolean | undefined;
        params?: any;
        headers?: any;
    }

    // Baseclass for everyresource with default actions.
    // If you define your new actions for the resource, you will need
    // to extend this interface and typecast the ResourceClass to it.
    //
    // In case of passing the first argument as anything but a function,
    // it's gonna be considered data if the action method is POST, PUT or
    // PATCH (in other words, methods with body). Otherwise, it's going
    // to be considered as parameters to the request.
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L461-L465
    //
    // Only those methods with an HTTP body do have 'data' as first parameter:
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L463
    // More specifically, those methods are POST, PUT and PATCH:
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L432
    //
    // Also, static calls always return the IResource (or IResourceArray) retrieved
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L538-L549
    interface IResourceClass<T> {
        new(dataOrParams?: any): IResource<T>;
        get(): IResource<T>;
        get(params: Object): IResource<T>;
        get(success: Function, error?: Function): IResource<T>;
        get(params: Object, success: Function, error?: Function): IResource<T>;
        get(params: Object, data: Object, success?: Function, error?: Function): IResource<T>;

        query(): IResourceArray<T>;
        query(params: Object): IResourceArray<T>;
        query(success: Function, error?: Function): IResourceArray<T>;
        query(params: Object, success: Function, error?: Function): IResourceArray<T>;
        query(params: Object, data: Object, success?: Function, error?: Function): IResourceArray<T>;

        save(): IResource<T>;
        save(data: Object): IResource<T>;
        save(success: Function, error?: Function): IResource<T>;
        save(data: Object, success: Function, error?: Function): IResource<T>;
        save(params: Object, data: Object, success?: Function, error?: Function): IResource<T>;

        update(): IResource<T>;
        update(data: Object): IResource<T>;
        update(success: Function, error?: Function): IResource<T>;
        update(data: Object, success: Function, error?: Function): IResource<T>;
        update(params: Object, data: Object, success?: Function, error?: Function): IResource<T>;

        remove(): IResource<T>;
        remove(params: Object): IResource<T>;
        remove(success: Function, error?: Function): IResource<T>;
        remove(params: Object, success: Function, error?: Function): IResource<T>;
        remove(params: Object, data: Object, success?: Function, error?: Function): IResource<T>;

        delete(): IResource<T>;
        delete(params: Object): IResource<T>;
        delete(success: Function, error?: Function): IResource<T>;
        delete(params: Object, success: Function, error?: Function): IResource<T>;
        delete(params: Object, data: Object, success?: Function, error?: Function): IResource<T>;

        odata(): OData.Provider<T>;
    }

    // Instance calls always return the the promise of the request which retrieved the object
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L538-L546
    interface IResource<T> {
        $get(): angular.IPromise<T>;
        $get(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $get(success: Function, error?: Function): angular.IPromise<T>;

        $query(): angular.IPromise<IResourceArray<T>>;
        $query(params?: Object, success?: Function, error?: Function): angular.IPromise<IResourceArray<T>>;
        $query(success: Function, error?: Function): angular.IPromise<IResourceArray<T>>;

        $save(): angular.IPromise<T>;
        $save(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $save(success: Function, error?: Function): angular.IPromise<T>;

        $update(): angular.IPromise<T>;
        $update(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $update(success: Function, error?: Function): angular.IPromise<T>;

        $remove(): angular.IPromise<T>;
        $remove(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $remove(success: Function, error?: Function): angular.IPromise<T>;

        $delete(): angular.IPromise<T>;
        $delete(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $delete(success: Function, error?: Function): angular.IPromise<T>;

        /** the promise of the original server interaction that created this instance. **/
        $promise: angular.IPromise<T>;
        $resolved: boolean;
    }

    /**
     * Really just a regular Array object with $promise and $resolve attached to it
     */
    interface IResourceArray<T> extends Array<T> {
        /** the promise of the original server interaction that created this collection. **/
        $promise: angular.IPromise<IResourceArray<T>>;
        $resolved: boolean;
    }

    /** when creating a resource factory via IModule.factory */
    interface IResourceServiceFactoryFunction<T> {
        ($resource: OData.IResourceService): IResourceClass<T>;
        <U extends IResourceClass<T>>($resource: OData.IResourceService): U;
    }

    // IResourceServiceProvider used to configure global settings
    interface IResourceServiceProvider extends angular.IServiceProvider {
        defaults: IResourceOptions;
    }

    interface IExecutable {
        execute(noParenthesis?: any): string;
    }
    class Global {
        static $inject: string[];
        constructor(
            ODataBinaryOperation: any,
            ODataProvider: any,
            ODataValue: any,
            ODataProperty: any,
            ODataMethodCall: any,
            ODataPredicate: any,
            ODataOrderByStatement: any,
        );
        Provider: Provider<any>;
        BinaryOperation: typeof BinaryOperation;
        Value: typeof Value;
        Property: typeof Property;
        Func: typeof MethodCall;
        Predicate: typeof Predicate;
        OrderBy: typeof OrderByStatement;
    }

    interface BinaryOperationFactory {
        new(propertyOrPredicate: any, valueOrOperator?: any, value?: any): BinaryOperation;
    }
    class BinaryOperation implements IExecutable {
        private operandA;
        private operandB;
        private filterOperator;
        constructor(propertyOrPredicate: any, valueOrOperator?: any, value?: any);
        execute(noParenthesis?: any): string;
        or(propertyOrPredicate: any, operatorOrValue?: any, value?: any): BinaryOperation;
        and(propertyOrPredicate: any, operatorOrValue?: any, value?: any): BinaryOperation;
    }

    interface MethodCallFactory {
        new(methodName: string, ...args: any[]): MethodCall;
    }
    class MethodCall implements IExecutable {
        private methodName;
        private params;
        execute(): string;
        constructor(methodName: string, ...args: any[]);
    }

    class Operators {
        operators: {
            "eq": string[];
            "ne": string[];
            "gt": string[];
            "ge": string[];
            "lt": string[];
            "le": string[];
            "and": string[];
            "or": string[];
            "not": string[];
            "add": string[];
            "sub": string[];
            "mul": string[];
            "div": string[];
            "mod": string[];
        };
        private rtrim;
        private trim(value);
        convert(from: string): any;
    }

    interface OrderByStatementFactory {
        new(propertyName: string, sortOrder?: string): OrderByStatement;
    }
    class OrderByStatement implements IExecutable {
        private propertyName;
        private direction;
        execute(): string;
        constructor(propertyName: string, sortOrder?: string);
    }

    interface PredicateFactory {
        new(propertyOrValueOrPredicate: any, valueOrOperator?: any, value?: any): Predicate;
        or(orStatements: any[]): IExecutable;
        create(propertyOrPredicate: any, operatorOrValue?: any, value?: any): IExecutable;
        and(andStatements: any): IExecutable;
    }
    class Predicate extends BinaryOperation {
        constructor(propertyOrValueOrPredicate: any, valueOrOperator?: any, value?: any);
        static or(orStatements: any[]): IExecutable;
        static create(propertyOrPredicate: any, operatorOrValue?: any, value?: any): IExecutable;
        static and(andStatements: any): IExecutable;
    }

    interface PropertyFactory {
        new(value: string): Property;
    }
    class Property implements IExecutable {
        private value;
        constructor(value: string);
        execute(): string;
    }

    interface ProviderFactory {
        new<T>(callback: ProviderCallback<T>): Provider<T>;
    }
    interface ProviderCallback<T> {
        (queryString: string, success: () => any, error: () => any): T[];
        (
            queryString: string,
            success: () => any,
            error: () => any,
            isSingleElement?: boolean,
            forceSingleElement?: boolean,
        ): T;
    }

    interface ICountResult {
        result: number;
        $promise: angular.IPromise<any>;
    }

    class Provider<T> {
        private callback;
        private filters;
        private sortOrders;
        private takeAmount;
        private skipAmount;
        private expandables;
        constructor(callback: ProviderCallback<T>);
        filter(operand1: any, operand2?: any, operand3?: any): Provider<T>;
        orderBy(arg1: string, arg2?: string): Provider<T>;
        transformUrl(transformMethod: (url: string) => string): Provider<T>;
        take(amount: number): Provider<T>;
        skip(amount: number): Provider<T>;
        private execute();
        query(success?: (p: T[]) => void, error?: () => void): T[];
        single(success?: (p: T) => void, error?: () => void): T;
        get(key: any, success?: (p: T) => void, error?: () => void): T;
        expand(...params: string[]): Provider<T>;
        expand(params: string[]): Provider<T>;
        select(...params: string[]): Provider<T>;
        select(params: string[]): Provider<T>;
        count(success?: (result: ICountResult) => any, error?: () => any): ICountResult;
        withInlineCount(): Provider<T>;
    }

    interface ValueFactory {
        new(value: any, type?: string): Value;
    }
    class ValueTypes {
        static Boolean: string;
        static Byte: string;
        static DateTime: string;
        static Decimal: string;
        static Double: string;
        static Single: string;
        static Guid: string;
        static Int32: string;
        static String: string;
    }
    class Value {
        private value;
        private type;
        private illegalChars;
        private escapeIllegalChars(haystack);
        private generateDate(date);
        executeWithUndefinedType(): any;
        executeWithType(): any;
        execute(): string;
        constructor(value: any, type?: string);
    }
}
