///<reference path='./passport.d.ts'/>

declare module "passport-http-bearer"
{
    export class Strategy implements passport.IStrategy
    {
        constructor(options:Object, verify:Function);
        constructor(verify:Function);
        authenticate(req, options?:Object);
    }
}