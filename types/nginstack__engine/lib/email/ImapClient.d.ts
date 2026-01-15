export = ImapClient;
declare function ImapClient(domain: string, port?: number): void;
declare class ImapClient {
    constructor(domain: string, port?: number);
    authenticate(
        type: AuthenticationType,
        options: PlainAuthentication | XOAuth2Authentication
    ): void;
    login(user: string, password: string): void;
    logout(): void;
    listMailboxes(referenceName?: string, mailboxPattern?: string): Mailbox[];
    selectMailbox(mailbox: string): void;
    createMailbox(mailbox: string): void;
    renameMailbox(oldName: string, newName: string): void;
    deleteMailbox(mailbox: string): void;
    copy(idSet: string | number | number[], destinationMailbox: string): void;
    uidCopy(uidSet: string | number | number[], destinationMailbox: string): void;
    move(idSet: string | number | number[], destinationMailbox: string): void;
    uidMove(uidSet: string | number | number[], destinationMailbox: string): void;
    expunge(): number[];
    uidExpunge(uidSet: string | number | number[]): number[];
    store(idSet: string | number | number[], query: string): ImapEmail[];
    uidStore(uidSet: string | number | number[], query: string): void;
    fetch(idSet: string | number | number[], query?: string): ImapEmail[];
    uidFetch(uidSet: string | number | number[], query?: string): ImapEmail[];
    search(query: string | SearchOptions): number[];
    uidSearch(query: string | SearchOptions): number[];
}
declare namespace ImapClient {
    export {
        Mailbox,
        SearchOptions,
        PlainAuthentication,
        XOAuth2Authentication,
        AuthenticationType,
        ImapAttachment,
    };
}
declare function ImapEmail(): void;
declare class ImapEmail {
    messageId: number;
    uid: number;
    size: number;
    internalDate: Date;
    date: Date;
    flags: string[];
    subject: string;
    to: string;
    from: string;
    plainBody: string;
    htmlBody: string;
    getAttachments(): ImapAttachment[];
}
interface Mailbox {
    name: string;
    delimiter: string;
    attributes: string[];
}
interface SearchOptions {
    since: Date;
    before: Date;
    subject: string;
    from: string;
    to: string;
    flags: string[];
}
interface PlainAuthentication {
    user: string;
    password: string;
}
interface XOAuth2Authentication {
    user: string;
    accessToken: string;
}
type AuthenticationType = 'plain' | 'xoauth2';
interface ImapAttachment {
    filename: string;
    contentType: string;
    textContent: string;
    data: Uint8Array;
}
