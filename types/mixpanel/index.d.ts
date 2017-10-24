// Type definitions for Mixpanel 2.13.0
// Project: https://mixpanel.com/
//          https://github.com/mixpanel/mixpanel-js
// Definitions by: Knut Eirik Leira Hjelle <https://github.com/hjellek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Mixpanel
{
    people:Mixpanel.People;

    init(token:string, config?:Mixpanel.Config, libraryName?:string):Mixpanel;

    push(item:any[]):void;

    disable(events?:string[]):void;

    time_event(eventName:string):void;

    track(eventName:string, params?:{[index:string]:any}, callback?:() => void):void;

    track_links(querySelector:string, eventName:string, params?:{[index:string]:any}):void;

    track_forms(querySelector:string, eventName:string, params?:{[index:string]:any}):void;

    register(params:{[index:string]:any}, days?:number):void;

    register_once(params:{[index:string]:any}, defaultValue?:string, days?:number):void;

    reset():void;

    unregister(propertyName:string):void;

    identify(id?:string):void;

    get_distinct_id():string;

    alias(alias:string, currentId?:string):void;

    set_config(config:{[index:string]:any}):void;

    get_config():{[index:string]:any};

    get_property(propertyName:string):any;
}

declare namespace Mixpanel
{
    interface People
    {
        set(keys:{[index:string]:any}, callback?:() => void):void;

        set(key:string, value:any, callback?:() => void):void;

        set_once(keys:{[index:string]:any}, callback?:() => void):void;

        set_once(key:string, value:any, callback?:() => void):void;

        union(prop: string, values:any, callback?:() => void):void;

        union(keys:{[index:string]:any}, callback?:() => void):void;

        increment(key:string):void;

        increment(keys:{[index:string]:number}):void;

        increment(key:string, value:number):void;

        append(keys:{[index:string]:any}):void;

        append(key:string, value:any):void;

        track_charge(amount:number, params?:{[index:string]:any}, callback?:() => void):void;

        clear_charges():void;

        delete_user():void;
    }

    interface Config
    {
        api_host?: string;

        app_host?: string;

        cdn?: string;

        persistence?: string;

        persistence_name?: string;

        cookie_name?: string;

        autotrack?: boolean;

        cross_subdomain_cookie?: boolean;

        store_google?: boolean;

        save_referrer?: boolean;

        test?: boolean;

        verbose?: boolean;

        img?: boolean;

        track_pageview?: boolean;

        debug?: boolean;

        upgrade?: boolean;

        disable_persistence?: boolean;

        disable_cookie?: boolean;

        secure_cookie?: boolean;

        ip?: boolean;

        loaded?: (lib:Mixpanel) => void;

        track_links_timeout?: number;

        cookie_expiration?: number;

        property_blacklist?: string[];

        [other:string]:any
    }
}

declare var mixpanel:Mixpanel;
