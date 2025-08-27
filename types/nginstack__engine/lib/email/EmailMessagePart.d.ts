export = EmailMessagePart;
declare function EmailMessagePart(): void;
declare class EmailMessagePart {
    ownerMessagePart: EmailMessagePart;
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
