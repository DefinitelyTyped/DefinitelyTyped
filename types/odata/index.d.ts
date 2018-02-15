// Type definitions for odata v0.3.4
// Project: https://github.com/janhommes/odata
// Definitions by: Jan Hommes <https://github.com/janhommes>, Jean-Christophe Chalte <https://github.com/jcchalte>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'odata' {
    import Q = require("q");

    interface Options {
        endpoint : string
        format ?: string
        autoFormat ?: boolean
        version ?: number
        strictMode ?: boolean
        start ?: () => any
        ready ?: () => any
        error ?: () => any
        headers ?: { name: string, value: string }[]
        username ?: string
        password ?: string
        isAsync ?: boolean
        isCors ?: boolean
        isHashRoute ?: boolean
        appending ?: string
    }

    interface OHandler<T> {
        inlinecount : number
        data : T

        config<T>(options ?: Options) : OHandler<T>
        progress<T>(callback : () => any) : OHandler<T>

        get<T>(callback ?: (data : T) => void) : Q.Promise<OHandler<T>>
        save<T>(callback ?: (data : T) => void) : Q.Promise<OHandler<T>>

        post<T>(params : any) : OHandler<T>
        patch<T>(params : any) : OHandler<T>
        put<T>(params : any) : OHandler<T>
        remove<T>(params ?: any) : OHandler<T>

        routes<T>(path : string, callback ?: (data : T) => void) : OHandler<T>
        route<T>(path : string, callback ?: (data : T) => void) : OHandler<T>
        triggerRoute(hash : string) : OHandler<T>
        beforeRouting(callback : (routeParams : any) => boolean) : OHandler<T>

        isEndpoint() : boolean
        loading<T>(startFn : () => any | boolean, endFn : () => any) : OHandler<T>

        find<T>(selector : string|number) : OHandler<T>

        top<T>(quantity : number) : OHandler<T>
        take<T>(quantity : number) : OHandler<T>
        skip<T>(quantity : number) : OHandler<T>
        first<T>() : OHandler<T>

        include<T>(column : string, data : string) : OHandler<T>
        exclude<T>(column : string, data : string) : OHandler<T>
        filterByList<T>(column : string, data : string) : OHandler<T>

        filter<T>(filter : string) : OHandler<T>
        where<T>(filter : string) : OHandler<T>
        any<T>(filter : string, resource : string) : OHandler<T>
        search<T>(columns : string[], term : string) : OHandler<T>

        orderBy<T>(column : string, direction ?: boolean) : OHandler<T>
        orderByDesc<T>(column : string) : OHandler<T>
        select<T>(selectStr : string) : OHandler<T>

        count<T>() : OHandler<T>
        inlineCount<T>(paramName ?: string) : OHandler<T>

        batch<T>(resource : string) : OHandler<T>
        expand<T>(resource : string) : OHandler<T>
        ref<T>(resource : string, id : string | number) : OHandler<T>
        removeRef<T>(resource : string, id : string | number) : OHandler<T>
        deleteRef<T>(resource : string, id : string | number) : OHandler<T>
    }

    interface OFn<T> extends OHandler<T> {
        (options ?: string | Options) : OHandler<T>
    }

    var o : OFn<{}>;

    export = o
}