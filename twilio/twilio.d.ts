///<reference path='../q/Q.d.ts'/>

declare module twilio
{

    export class RestClient
    {
        constructor(sid:string, tkn:string, options?:any);
        sendMessage(options:Object, callback?:Function)
        makeCall(options:Object, callback?:Function)
    }

    export class TwimlResponse
    {

    }

    export class Capability
    {

    }
}

interface TwilioStatic
{
    (sid:string, tkn:string, options?:any):twilio.RestClient;

}
declare var twilioStatic:TwilioStatic

declare module "twilio"
{
    export = twilioStatic;
}