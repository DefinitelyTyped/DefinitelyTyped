// Type definitions for Mixpanel
// Project: https://mixpanel.com/
//          https://github.com/mixpanel/mixpanel-js
// Definitions by: Knut Eirik Leira Hjelle <https://github.com/hjellek/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Mixpanel
{
    people:Mixpanel.People;

    init(token:string, config?:{[index:string]:any}, libraryName?:string):Mixpanel;

    push(item:any[]):void;

    disable(events?:string[]):void;

    track(eventName:string, params?:{[index:string]:any}, callback?:() => void):void;

    track_links(querySelector:string, eventName:string, params?:{[index:string]:any}):void;

    track_forms(querySelector:string, eventName:string, params?:{[index:string]:any}):void;

    register(params:{[index:string]:any}, days?:number):void;

    register_once(params:{[index:string]:any}, defaultValue?:string, days?:number):void;

    unregister(propertyName:string):void;

    identify(id:string):void;

    get_distinct_id():string;

    alias(alias:string, currentId?:string):void;

    set_config(config:{[index:string]:any}):void;

    get_config():{[index:string]:any};

    get_property(propertyName:string):any;
}

declare module Mixpanel
{
    interface People
    {
        set(keys:{[index:string]:any}, callback?:() => void):void;

        set(key:string, value:any, callback?:() => void):void;

        set_once(keys:{[index:string]:any}, callback?:() => void):void;

        set_once(key:string, value:any, callback?:() => void):void;

        increment(key:string):void;

        increment(keys:{[index:string]:number}):void;

        increment(key:string, value:number):void;

        append(keys:{[index:string]:any}):void;

        append(key:string, value:any):void;

        track_charge(amount:number, params?:{[index:string]:any}, callback?:() => void):void;

        clear_charges():void;

        delete_user():void;
    }
}

declare var mixpanel:Mixpanel;
