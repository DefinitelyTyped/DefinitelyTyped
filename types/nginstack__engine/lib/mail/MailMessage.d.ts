export = MailMessage;
declare function MailMessage(): void;
declare class MailMessage {
    header: any;
    messagesParts: any[];
    decode(mailSource: string): void;
}
