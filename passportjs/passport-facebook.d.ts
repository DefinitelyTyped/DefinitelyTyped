///<reference path='./passport.d.ts'/>

declare module "passport-facebook"
{
    export class Strategy implements passport.IStrategy
    {
        constructor(options:Object, verify:Function);
        constructor(verify:Function);
        authenticate(req, options?:Object);
    }
}