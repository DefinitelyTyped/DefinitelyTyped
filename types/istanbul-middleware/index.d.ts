// Type definitions for istanbul-middleware
// Project: https://www.npmjs.com/package/istanbul-middleware
// Definitions by: Hookclaw <https://github.com/hookclaw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express" />

declare module "istanbul-middleware" {
    import * as express from "express";

    type Matcher = (file:string)=> boolean;
    type PostLoadHookFn = (file:any)=> {};
    type PostLoadHook = (matcherfn:Matcher,transformer:any,verbose:boolean)=>PostLoadHookFn;

    export function hookLoader(matcherOrRoot:Matcher|string, opts?:{
        postLoadHook?:PostLoadHook,
        verbose?:boolean
        //and istanbul.Instrumenter(...opts)
    }): void;

    export function createHandler(opts?:{
        resetOnGet?:boolean
    }): any;

    type ClientMatcher = (req:express.Request)=> boolean;
    type PathTransformer = (req:express.Request)=> string;

    export function createClientHandler(root:string,opts?:{
        matcher?:ClientMatcher,
        pathTransformer?:PathTransformer,
        verbose?:boolean
    }): any;
}
