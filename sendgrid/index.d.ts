// Type definitions for sendgrid v2.0.0
// Project: https://github.com/sendgrid/sendgrid-nodejs
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as SmtpApi from 'smtpapi';

declare var ctor: Sendgrid.Constructor;
export = ctor;

declare namespace Sendgrid {
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
        cc?: string[];
        bcc?: string[];
        replyto?: string;
        date?: Date;
        headers?: { [key: string]: string };
        files?: FileHandlerOptions[];
        smtpapi?: SmtpApi.Instance;
    }

    export class Email {
        to: any;
        toname: string;
        from: string;
        fromname: string;
        subject: string;
        text: string;
        html: string;
        cc: string[];
        bcc: string[];
        replyto: string;
        date: Date;
        headers: { [key: string]: string };
        files: FileHandler[];
        smtpapi: SmtpApi.Instance;

        constructor();
        constructor(options: EmailOptions);

        new(options: EmailOptions): Email;

        addTo(address: string): Email;
        addHeader(type: string, value: string): Email;
        addSubstitution(type: string, value: string): Email;
        addSubstitution(type: string, value: string[]): Email;
        addSection(section: { [key: string]: string }): Email;
        addUniqueArg(uarg: { [key: string]: string }): Email;
        addCategory(category: string): Email;
        addFilter(filter: string, command: string, value: number): Email;
        addFilter(filter: string, command: string, value: string): Email;
        addFile(file: FileHandlerOptions): Email;
        addSmtpapiTo(to: string): Email;
        addCc(cc: string): Email;
        addBcc(bcc: string): Email;
        addSendEachAt(send_each_at: number): Email;

        setFrom(address: string): Email;
        setSubject(subject: string): Email;
        setText(text: string): Email;
        setHtml(html: string): Email;
        setHeaders(headers: { [key: string]: string }): Email;
        setSubstitutions(substitutions: { [key: string]: string[] }): Email;
        setSections(sections: { [key: string]: string }): Email;
        setUniqueArgs(uargs: { [key: string]: string }): Email;
        setCategories(categories: string[]): Email;
        setFilters(filters: any): Email;
        setSmtpapiTos(tos: string[]): Email;
        setTos(tos: string[]): Email;
        setFromName(fromname: string): Email;
        setCcs(ccs: string[]): Email;
        setBccs(bcc: string[]): Email;
        setDate(date: string): Email;
        setSendAt(send_at: number): Email;
        setSendEachAt(send_each_at: number[]): Email;
        setASMGroupID(val: number): Email;
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
        (api_key: string, option?: Options): Instance
        new (api_user: string, api_key: string, options?: Options): Instance;
        new (api_key: string, options?: Options): Instance;
    }

    export interface Instance {
        version: string;
        api_user: string;
        api_key: string;
        smtpapi: SmtpApi.Instance;
        options: OptionsExport;
        Email: typeof Email;

        send(email: EmailOptions, callback: (err: Error, json: Object) => any): void;
        send(email: Email, callback: (err: Error, json: Object) => any): void;
    }

    //#endregion
}
