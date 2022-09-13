export = AspSms;
declare function AspSms(userKey: string, password: string): void;
declare class AspSms {
    constructor(userKey: string, password: string);
    userKey: string;
    password: string;
    postHttp(content: any): string;
    send(
        originator: any,
        recipientsPhoneNumbers: any,
        title: any,
        text: any,
        wapPushDescription: any,
        wapPushUrl: any
    ): string;
    sms(originator: any, recipientsPhoneNumbers: any, title: any, text: any): string;
    wapPush(
        originator: any,
        recipientsPhoneNumbers: any,
        wapPushDescription: any,
        wapPushUrl: any
    ): string;
}
