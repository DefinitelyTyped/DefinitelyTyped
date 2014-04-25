///<reference path='./passport.d.ts'/>

declare module "passport-linkedin-oauth2"
{
    import passport                                      = require('passport');

    export class Strategy implements passport.IStrategy
    {
        constructor(options:Object, verify:Function);
        constructor(verify:Function);
        authenticate(req, options?:Object);
    }
}