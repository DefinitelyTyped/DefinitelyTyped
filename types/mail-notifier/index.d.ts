// Type definitions for mail-notifier 0.5
// Project: https://github.com/jcreigno/nodejs-mail-notifier#readme
// Definitions by: Jack Hedaya <https://github.com/jackHedaya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function mailNotifier(params: mailNotifier.NotifierParams): mailNotifier.Notifier;

declare namespace mailNotifier {
    export type EmailContent = {
        html: string;
        text: string;
        headers: {
            'delivered-to': string;
            received: string[];
            'x-received': string[];
            'arc-seal': string;
            'arc-message-signature': string;
            'arc-authentication-results': string;
            'return-path': string;
            'received-spf': string;
            'authentication-results': string;
            'dkim-signature': string;
            'x-google-dkim-signature': string;
            'x-gm-message-state': string;
            'x-google-smtp-source': string;
            'mime-version': string;
            from: string;
            date: string;
            'message-id': string;
            subject: string;
            to: string;
            'content-type': string;
        };
        subject: string;
        messageId: string;
        priority: string;
        from: { address: string; name: string }[];
        to: { address: string; name: string }[];
        date: string;
        receivedDate: string;
        uid: 16;
        flags: ['\\Seen'];
    };

    interface NotifierEvents {
        end: () => void;
        mail: (email: EmailContent) => void;
        error: (error: string) => void;
    }

    export interface Notifier {
        on<U extends keyof NotifierEvents>(event: U, listener: NotifierEvents[U]): this;

        emit<U extends keyof NotifierEvents>(event: U, ...args: Parameters<NotifierEvents[U]>): boolean;

        start: () => this;
        stop: () => this;
        scan: (callback: () => void) => this;
    }

    type NotifierParams = {
        user: string;
        /**
         * @deprecated
         */
        username?: string;
        password: string;
        box?: string | 'INBOX';
        host: string;
        port: number;
        tls: boolean;
        tlsOptions: { rejectUnauthorized: boolean };
    };
}

export = mailNotifier;
