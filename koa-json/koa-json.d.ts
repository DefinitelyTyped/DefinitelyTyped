// Type definitions for koa-json v2.x
// Project: https://github.com/koajs/json
// Definitions by: Alex Friedman <https://github.com/brooklyndev/>
// Definitions: https://github.com/brooklyndev/DefinitelyTyped

/* =================== USAGE ===================

    import * as Koa from 'koa';
    import * as json from 'koa-json';
    
    const app = new Koa();
    app.use(json());

 =============================================== */
/// <reference path="../koa/koa.d.ts" />

declare module "koa-json" {
    
    import * as Koa from "koa";
    
    function json(opts?:{
        
        /** 
         * default to pretty response [true]
        */
        pretty?: boolean,
        
        /**
         * optional query-string param for pretty responses [none]
         */
        param?: string,
        
        /**
         * JSON spaces [2]
         */
        spaces?: number
    }) : { (ctx: Koa.Context, next?: () => any): any } ;
    namespace json {}
    export = json;
}