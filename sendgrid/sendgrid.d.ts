// Type definitions for sendgrid 1.1.0
// Project: https://github.com/sendgrid/sendgrid-nodejs
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface SendgridUriParts {
    protocol: string;
    host: string;
    port: string;
    endpoint: string;
}

interface SendgridOptions {
    protocol?: string;
    host?: string;
    port?: string;
    endpoint?: string;
    uri?: string;
}

interface SendgridOptionsExport {
    uriParts: SendgridUriParts;
    uri: string;
}

interface SendgridEmailOptions {
    to?: any;
    toname?: string;
    from?: string;
    fromname?: string;
    subject?: string;
    text?: string;
    html?: string;
    bcc?: any;
    replyto?: string;
    date?: Date;
    headers?: { [key: string]: string };
    files?: SendgridEmailFileOptions[];
    smtpapi?: any;
}

declare class PrivateSendgridEmail {
    to: any;
    toname: string;
    from: string;
    fromname: string;
    subject: string;
    text: string;
    html: string;
    bcc: any;
    replyto: string;
    date: Date;
    headers: { [key: string]: string };
    files: PrivateSendgridFile[];
    smtpapi: any;

    constructor();
    constructor(options: SendgridEmailOptions);

    addTo(address: string): void;
    addHeader(type: string, value: string): void;
    addSubstitution(type: string, value: string): void;
    addSubstitution(type: string, value: string[]): void;
    addSection(section: { [key: string]: string }): void;
    addUniqueArg(uarg: { [key: string]: string }): void;
    addCategory(category: string): void;
    addFilter(filter: string, command: string, value: number): void;
    addFilter(filter: string, command: string, value: string): void;
    addFile(file: SendgridEmailFileOptions): void;

    setFrom(address: string): void;
    setSubject(subject: string): void;
    setText(text: string): void;
    setHtml(html: string): void;
    setHeaders(headers: { [key: string]: string }): void;
    setSubstitutions(substitutions: { [key: string]: string[] }): void;
    setSections(sections: { [key: string]: string }): void;
    setUniqueArgs(uargs: { [key: string]: string }): void;
    setCategories(categories: string[]): void;
    setFilters(filters: any): void;
}

interface SendgridEmailFileOptions {
    filename?: string;
    contentType?: string;
    cid?: string;
    path?: string;
    url?: string;
    content?: any;
}

declare class PrivateSendgridFile {
    filename: string;
    contentType: string;
    cid: string;

    type: string;
    content: string;
    path: string;
    url: string;

    loadContent(callback: (hasError: boolean, error: Error) => any): void;
}

interface Sendgrid {
    version: string;
    api_user: string;
    api_key: string;
    options: SendgridOptionsExport;
    Email: typeof PrivateSendgridEmail;

    send(email: PrivateSendgridEmail, callback: (err: Error, json: any) => any): void;
}

declare module "sendgrid" {
    interface SendgridConstructor {
        (api_user: string, api_key: string, options?: SendgridOptions): Sendgrid;
        new (api_user: string, api_key: string, options?: SendgridOptions): Sendgrid;
    }

    export = SendgridConstructor;
}