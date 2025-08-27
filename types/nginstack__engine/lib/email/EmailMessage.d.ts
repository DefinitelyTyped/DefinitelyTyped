export = EmailMessage;
declare function EmailMessage(): void;
declare class EmailMessage {
    header: EmailMessageHeader;
    messagesParts: any[];
    decode(mailSource: string): void;
}
declare namespace EmailMessage {
    export { EmailMessageHeader };
}
type EmailMessageHeader = import('./EmailMessageHeader');
