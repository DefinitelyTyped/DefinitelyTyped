declare module twilio
{

}

interface TwilioStatic
{
    sendMessage(options:Object, callback?:Function):Q.Promise<any>
    makeCall(options:Object, callback?:Function):Q.Promise<any>
}

declare var twilio:TwilioStatic;

declare module "twilio"
{
    export = twilio;
}