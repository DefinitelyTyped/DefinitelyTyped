/// <reference types="jquery" />

declare var Mailcheck: MailcheckModule.Static;

declare namespace MailcheckModule {
    export interface IDistanceFunction {
        (s1: string, s2: string): number;
    }

    export interface ISuggestFunction {
        (email: string, domains?: string[], topLevelDomains?: string[], distanceFunction?: IDistanceFunction): void;
    }

    export interface IJQuerySuggested {
        (element: JQuery, suggested: ISuggestion): void;
    }

    export interface IJQueryEmpty {
        (element: JQuery): void;
    }

    export interface IEmpty {
        (): void;
    }

    export interface ISuggested {
        (suggested: ISuggestion): void;
    }

    export interface ISplitEmail {
        topLevelDomain?: string | undefined;
        domain?: string | undefined;
        address?: string | undefined;
    }

    export interface ISuggestion {
        address: string;
        domain: string;
        full: string;
    }

    export interface IAsynchronousOptions {
        email: string;
        domains?: string[] | undefined;
        secondLevelDomains?: string[] | undefined;
        topLevelDomains?: string[] | undefined;
        distanceFunction?: IDistanceFunction | undefined;
        suggested: ISuggested | IJQuerySuggested;
        empty?: IEmpty | IJQueryEmpty | undefined;
    }
    export interface ISynchronousOptions {
        email: string;
        domains?: string[] | undefined;
        secondLevelDomains?: string[] | undefined;
        topLevelDomains?: string[] | undefined;
        distanceFunction?: IDistanceFunction | undefined;
    }
    export interface Static {
        defaultDomains: string[];
        defaultSecondLevelDomains: string[];
        defaultTopLevelDomains: string[];
        domainThreshold: number;
        topLevelThreshold: number;
        run(opts: IAsynchronousOptions): void;
        run(opts: ISynchronousOptions): ISuggestion | undefined;
        suggest: ISuggestFunction;
        encodeEmail(email: string): string;
        splitEmail(email: string): ISplitEmail;
        sift3Distance(s1: string, s2: string): number;
        findClosestDomain(
            domain: string,
            domains: string[],
            distanceFunction?: IDistanceFunction,
            threshold?: number,
        ): boolean | string;
    }
}

interface JQuery {
    mailcheck(opts: MailcheckModule.IAsynchronousOptions): void;
    mailcheck(opts: MailcheckModule.ISynchronousOptions): MailcheckModule.ISuggestion | void;
}

declare module "mailcheck" {
    export = Mailcheck;
}
