// Type definitions for o.js v0.2.2
// Project: https://github.com/janhommes/o.js
// Definitions by: Matteo Antony Mistretta <https://github.com/IceOnFire>, Brad Zacher <https://github.com/bradzacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../q/Q.d.ts" />

declare module 'o.js' {
    interface Options {
        endpoint : string
        json ?: boolean
        version ?: number
        strictMode ?: boolean
        start ?: () => any
        ready ?: () => any
        error ?: () => any
        headers ?: string[]
        username ?: string
        password ?: string
        isAsync ?: boolean
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