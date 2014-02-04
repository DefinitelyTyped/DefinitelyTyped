declare module passport
{
    export interface IStrategy {
        authenticate(req, options?:Object);
    }

    export var IStrategy : {
        new(verify:Function):IStrategy;
        new(options:Object, verify:Function):IStrategy;
    };

}

interface passport
{
    use(name:any, strategy:any);
    unuse(name:string);
    framework(fw:string);
    initialize(options?:Object);
    session(options:Object);
    authenticate(strategy:any, options?:Object, callback?:Function);
    authorize(strategy, options, callback);
    serializeUser(fn:Function);
    deserializeUser(fn:Function);
    transformAuthInfo(fn, done);
}

declare var passport:passport;
