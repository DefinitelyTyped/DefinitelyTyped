// Type definitions for calq
// Project: https://calq.io/docs/client/javascript/reference
// Definitions by: Eirik Hoem <https://github.com/eirikhm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Calq
{
    action:Calq.Action;
    user:Calq.User;

    init(writeKey:string, options?:{[index:string]:any}):void;
}

declare namespace Calq
{
    interface Action
    {
        track(action:string, params?:{[index:string]:any}):void;
        trackSale(action:string, params:{[index:string]:any}, currency:string, amount:number):void;
        trackHTMLLink(action:string, params?:{[index:string]:any}):void;
        trackPageView(action?:string):void;

        setGlobalProperty(name:string, value:any):void;
        setGlobalProperty(params: {[index:string]: any}):void;
    }

    interface User
    {
        identify(userId:string):void;
        clear():void;
        profile(params:{[index:string]:any}):void;

    }
}

declare var calq:Calq;
