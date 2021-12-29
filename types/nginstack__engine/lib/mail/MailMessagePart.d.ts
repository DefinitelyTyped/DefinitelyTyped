export = MailMessagePart;
declare function MailMessagePart(): void;
declare class MailMessagePart {
    ownerMessagePart: MailMessagePart;
    primary: string;
    encoding: string;
    charset: string;
    defaultCharset: string;
    secondary: string;
    description: string;
    disposition: string;
    contentID: string;
    boundary: string;
    fileName: string;
    partBody: string;
    headers: any[];
    prePart: string;
    postPart: string;
    level: number;
    content: string;
}
