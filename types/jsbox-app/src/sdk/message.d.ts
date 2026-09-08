// JSBox Message API TypeScript Declaration

declare namespace MessageTypes {
    interface SMSOptions {
        recipients: string[];
        body: string;
        subject?: string;
        attachments?: NSData[];
        /** 0: cancelled 1: succeeded 2: failed */
        handler?: (result: 0 | 1 | 2) => void;
    }

    interface MailOptions {
        subject: string;
        to: string[];
        cc?: string[];
        bcc?: string[];
        body: string;
        isHTML?: boolean;
        attachments?: NSData[];
        /**
         * 0: cancelled 1: saved 2: succeeded 3: failed
         *
         * This behavior was verified on a real device(Version 2.32.0).
         * The English JSBox documentation is incorrect.
         */
        handler?: (result: 0 | 1 | 2 | 3) => void;
    }
}

interface JBMessage {
    sms(options: MessageTypes.SMSOptions): void;
    mail(options: MessageTypes.MailOptions): void;
}

declare const $message: JBMessage;
