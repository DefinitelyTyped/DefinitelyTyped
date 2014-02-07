///<reference path='../q/Q.d.ts'/>

declare module "twilio"
{
    import q            = require('q');

    export function sendMessage(options:Object, callback?:Function):q.Promise<any>
    export function makeCall(options:Object, callback?:Function):q.Promise<any>
}