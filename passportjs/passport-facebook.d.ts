///<reference path='./passport.d.ts'/>

declare module "passport-facebook"
{
    import passport                                      = require('passport');

    export class Strategy implements passport.IStrategy
    {
        constructor(options:Object, verify:Function);
        constructor(verify:Function);
        authenticate(req, options?:Object);
    }
}