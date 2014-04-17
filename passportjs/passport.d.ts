declare module "passport"
{
    export function use(name:any, strategy:Strategy);
    export function unuse(name:string);
    export function framework(fw:string);
    export function initialize(options?:Object);
    export function session(options:Object);
    export function authenticate(strategy:any, options?:Object, callback?:Function);
    export function authorize(strategy, options, callback);
    export function serializeUser(fn:Function);
    export function deserializeUser(fn:Function);
    export function transformAuthInfo(fn, done);

    export class Strategy
    {

    }

    export interface IStrategy {
        authenticate(req, options?:Object);
    }

    export var IStrategy : {
        new(verify:Function):IStrategy;
        new(options:Object, verify:Function):IStrategy;
    };

}