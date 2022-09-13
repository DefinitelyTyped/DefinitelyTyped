export = HumanSms;
declare function HumanSms(account: string, code: string): void;
declare class HumanSms {
    constructor(account: string, code: string);
    account: string;
    code: string;
    sms(originator: any, recipientsPhoneNumbers: any, title: any, text: any): string;
}
