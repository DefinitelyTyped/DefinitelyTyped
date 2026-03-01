// JSBox Message API TypeScript Declaration

declare namespace MessageTypes {
    interface SMSOptions {
        recipients: string[];
        body: string;
        subject?: string;
        attachments?: NSData[];
        handler?: (result: 0 | 1 | 2) => void; // 0: cancelled 1: succeeded 2: failed
    }

    interface MailOptions {
        subject: string;
        to: string[];
        cc?: string[];
        bcc?: string[];
        body: string;
        isHTML?: boolean;
        attachments?: NSData[];
        handler?: (result: 0 | 1 | 2 | 3) => void; // 0: cancelled 1: succeeded 2: failed
    }
}

interface JBMessage {
    sms(options: MessageTypes.SMSOptions): void;
    mail(options: MessageTypes.MailOptions): void;
}

declare const $message: JBMessage;
