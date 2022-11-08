export = MailMessage;
declare function MailMessage(): void;
declare class MailMessage {
    header: MailMessageHeader;
    messagesParts: any[];
    decode(mailSource: string): void;
}
declare namespace MailMessage {
    export { MailMessageHeader };
}
type MailMessageHeader = import('./MailMessageHeader');
