// Type definitions for Nodemailer
// Project: https://github.com/andris9/Nodemailer
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Nodemailer is an easy to use module to send e-mails with Node.JS (using SMTP or sendmail or Amazon SES) and is unicode friendly .

declare module "nodemailer"
{
    export function createTransport(type:string):Transport;

    export function createTransport(type:string, options:NodemailerTransportOptions):Transport;

    export function createTransport(type:string, options:NodemailerSMTPTransportOptions):Transport;

    export function createTransport(type:string, path:string):Transport;

    export function createXOAuthGenerator(options:XOAuthGeneratorOptions):XOAuthGenerator;

    export class Transport
    {
        static transports:{
            SMTP: Transport;
            SES: Transport;
            SENDMAIL: Transport;
            STUB: Transport;
        };

        constructor(type:string, options?:any);

        options:Object;
        transportType:string;

        sendMailWithTransport(emailMessage:MailComposer, callback?:(err:Error, response:any) => any):any;

        useDKIM(dkim:DKIMOptions);

        close(callback?:(err:Error) => any);

        sendMail(message:MailComposer, callback?:(err:Error, response:any) => any):any;

        send_mail(message:MailComposer, callback?:(err:Error, response:any) => any):any;
    }

    export interface NodeMailerAttachment
    {
        fileName: string;
        filePath?: string;
        contents?: any;
        contentType?: string;
        cid?: string;
    }

    export interface MailComposer
    {
        from: string; // sender info
        to: string;   // Comma separated list of recipients
        subject: string; // Subject of the message
        headers?: {};
        text?: string;  // plaintext body
        html?: string;  // HTML body
        attachments?: NodeMailerAttachment[];  // An array of attachments
        forceEmbeddedImages?: boolean;
    }

    export interface DKIMOptions
    {
        domainName: string; // signing domain
        keySelector: string; // selector name (in this case there's a dkim._domainkey.do-not-trust.node.ee TXT record set up)
        privateKey: any;
    }

    export class XOAuthGenerator
    {
        constructor(options:XOAuthGeneratorOptions);

        generate(callback:() => any):string;
    }

    export interface XOAuthGeneratorOptions
    {
        user: string;
        consumerKey: string; // optional
        consumerSecret: string; // optional
        token: string;
        tokenSecret: string;
    }

    export interface XOAuth2Options
    {
        user: string;
        clientId: string;
        clientSecret: string;
        refreshToken: string;
    }

    export interface NodemailerTransportOptions
    {
        service?: string;
        auth?: NodemailerAuthInterface;
        debug?: boolean;
        AWSAccessKeyID?: string;
        AWSSecretKey: string;
        ServiceUrl: string;
    }

    export interface NodemailerAuthInterface
    {
        user?: string;
        pass?: string;
        XOAuthToken?: XOAuthGenerator;
        XOAuth2?: XOAuth2Options;
    }

    export interface NodemailerSMTPTransportOptions
    {
        service?:          string;
        host?:             string;
        port?:             number;
        secureConnection?: boolean;
        name?:             string;
        auth:              NodemailerAuthInterface;
        ignoreTLS?:        boolean;
        debug?:            boolean;
        maxConnections?:   number;
    }

}
