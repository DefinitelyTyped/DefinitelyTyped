export = EmailMessage;
declare function EmailMessage(): void;
declare class EmailMessage {
    header: EmailMessageHeader;
    messagesParts: EmailMessagePart[];
    decode(mailSource: string): void;
}
declare namespace EmailMessage {
    export { EmailMessageHeader, EmailMessagePart };
}
type EmailMessageHeader = import('./EmailMessageHeader');
type EmailMessagePart = import('./EmailMessagePart');
