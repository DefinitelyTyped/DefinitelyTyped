// Type definitions for universal-analytics v0.3.2
// Project: https://github.com/peaksandpies/universal-analytics
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface UniversalAnalytics {
    (accountID:string, uuid?:string, opts?:Object):UniversalAnalytics.Client;
}

declare module UniversalAnalytics {

    interface Client {
        debug():UniversalAnalytics.Client;

        send():void;

        pageview(path:string):Client;
        pageview(path:string, callback?:(err:any) => void):void;
        pageview(params:Object):Client;
        pageview(params:Object, callback?:(err:any) => void):void;
        pageview(path:string, hostname:string):Client;
        pageview(path:string, hostname:string, callback?:(err:any) => void):void;
        pageview(path:string, title:string, hostname:string):Client;
        pageview(path:string, title:string, hostname:string, callback?:(err:any) => void):void;


        event(category:string, action:string):Client;
        event(category:string, action:string, callback?:(err:any) => void):void;
        event(category:string, action:string, label:string):Client;
        event(category:string, action:string, label:string, callback?:(err:any) => void):void;
        event(category:string, action:string, label:string, value:any):Client;
        event(category:string, action:string, label:string, value:any, callback?:(err:any) => void):void;
        event(category:string, action:string, label:string, value:any, params:Object, callback?:(err:any) => void):void;
        event(params:Object):Client;
        event(params:Object, callback:(err:any) => void):void;


        transaction(id:string):Client;
        transaction(id:string, callback:(err:any) => void):void;
        transaction(id:string, revenue:number):Client;
        transaction(id:string, revenue:number, callback:(err:any) => void):void;
        transaction(id:string, revenue:number, shipping:number):Client;
        transaction(id:string, revenue:number, shipping:number, callback:(err:any) => void):void;
        transaction(id:string, revenue:number, shipping:number, taxping:number):Client;
        transaction(id:string, revenue:number, shipping:number, taxping:number, callback:(err:any) => void):void;
        transaction(id:string, revenue:number, shipping:number, taxping:number, affiliation:string):Client;
        transaction(id:string, revenue:number, shipping:number, taxping:number, affiliation:string, callback:(err:any) => void):void;
        transaction(params:Object):Client;
        transaction(params:Object, callback:(err:any) => void):void;


        item(price:number):Client;
        item(price:number, callback:(err:any) => void):void;
        item(price:number, quantity:number):Client;
        item(price:number, quantity:number, callback:(err:any) => void):void;
        item(price:number, quantity:number, sku:number):Client;
        item(price:number, quantity:number, sku:number, callback:(err:any) => void):void;
        item(price:number, quantity:number, sku:number, name:string):Client;
        item(price:number, quantity:number, sku:number, name:string, callback:(err:any) => void):void;
        item(price:number, quantity:number, sku:number, name:string, variation:string):Client;
        item(price:number, quantity:number, sku:number, name:string, variation:string, callback:(err:any) => void):void;
        item(price:number, quantity:number, sku:number, name:string, variation:string, params:Object):Client;
        item(price:number, quantity:number, sku:number, name:string, variation:string, params:Object, callback:(err:any) => void):void;
        item(params:Object):Client;
        item(params:Object, callback:(err:any) => void):void;


        exception(description:string):Client;
        exception(description:string, callback:(err:any) => void):void;
        exception(description:string, fatal:boolean):Client;
        exception(description:string, fatal:boolean, callback:(err:any) => void):void;
        exception(params:Object):Client;
        exception(params:Object, callback:(err:any) => void):void;


        timing(category:string):Client;
        timing(category:string, callback:(err:any) => void):void;
        timing(category:string, variable:string):Client;
        timing(category:string, variable:string, callback:(err:any) => void):void;
        timing(category:string, variable:string, time:number):Client;
        timing(category:string, variable:string, time:number, callback:(err:any) => void):void;
        timing(category:string, variable:string, time:number, label:string):Client;
        timing(category:string, variable:string, time:number, label:string, callback:(err:any) => void):void;
        timing(params:Object):Client;
        timing(params:Object, callback:(err:any) => void):void;


        middleware(accountID:string, options?:any):any;
    }
}

declare module 'universal-analytics' {
export = UniversalAnalytics;
}
