// Type definitions for sendgrid 1.1.0
// Project: https://github.com/sendgrid/sendgrid-nodejs
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Sendgrid {
    //#region Options

    export interface UriParts {
        protocol: string;
        host: string;
        port: string;
        endpoint: string;
    }

    export interface Options {
        protocol?: string;
        host?: string;
        port?: string;
        endpoint?: string;
        uri?: string;
        proxy?: string;
        web?: {
            pool?: any;
        }
    }

    export interface OptionsExport {
        uriParts: UriParts;
        uri: string;

        proxy?: string;
        web?: {
            pool?: any;
        }
    }

    //#endregion

    //#region Email

    export interface EmailOptions {
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
        files?: FileHandlerOptions[];
        smtpapi?: any;
    }

    export class Email {
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
        files: FileHandler[];
        smtpapi: any;

        constructor();
        constructor(options: EmailOptions);

        addTo(address: string): void;
        addHeader(type: string, value: string): void;
        addSubstitution(type: string, value: string): void;
        addSubstitution(type: string, value: string[]): void;
        addSection(section: { [key: string]: string }): void;
        addUniqueArg(uarg: { [key: string]: string }): void;
        addCategory(category: string): void;
        addFilter(filter: string, command: string, value: number): void;
        addFilter(filter: string, command: string, value: string): void;
        addFile(file: FileHandlerOptions): void;

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

    //#endregion

    //#region FileHandler

    export interface FileHandlerOptions {
        filename?: string;
        contentType?: string;
        cid?: string;
        path?: string;
        url?: string;
        content?: any;
    }

    export class FileHandler {
        filename: string;
        contentType: string;
        cid: string;

        type: string;
        content: string;
        path: string;
        url: string;

        constructor(options: FileHandlerOptions);

        loadContent(callback: HandlerCallback): void;

        static handlers: {
            content: Handler;
            path: Handler;
            url: Handler;
            none: Handler;
        };
    }

    export interface Handler {
        (file: FileHandler, callback: HandlerCallback): void;
    }

    export interface HandlerCallback {
        (hasError: boolean, error: Error): void;
        (hasError: boolean, error: string): void;
    }

    //#endregion

    //#region Sendgrid Class

    interface Constructor {
        (api_user: string, api_key: string, options?: Options): Instance;
        new (api_user: string, api_key: string, options?: Options): Instance;
    }

    export interface Instance {
        version: string;
        api_user: string;
        api_key: string;
        options: OptionsExport;
        Email: typeof Email;

        send(email: EmailOptions, callback: (err: Error, json: any) => any): void;
        send(email: Email, callback: (err: Error, json: any) => any): void;
    }

    //#endregion
}

declare module "sendgrid" {
    var ctor: Sendgrid.Constructor;
    export = ctor;
}