///<reference path='./passport.d.ts'/>

declare module passport_facebook
{
    export class Strategy implements passport_module.IStrategy
    {
        constructor(options:Object, verify:Function);
        constructor(verify:Function);
        authenticate(req, options?:Object);
    }
}