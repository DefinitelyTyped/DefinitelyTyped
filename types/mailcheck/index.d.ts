// Type definitions for Mailcheck 1.1
// Project: https://github.com/mailcheck/mailcheck
// Definitions by: Paulo Cesar <http://github.com/pocesar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare var Mailcheck: MailcheckModule.Static;

declare namespace MailcheckModule {

    export interface IDistanceFunction {
        (s1: string, s2: string): number;
    }

    export interface ISuggestFunction {
        (email: string, domains?: string[], topLevelDomains?: string[], distanceFunction?: IDistanceFunction):void;
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
        topLevelDomain?: string;
        domain?: string;
        address?: string;
    }

    export interface ISuggestion {
        address: string;
        domain: string;
        full: string;
    }

    export interface IOptions {
        email: string;
        domains?: string[];
        secondLevelDomains?: string[];
        topLevelDomains?: string[];
        distanceFunction?: IDistanceFunction;
        suggested?: ISuggested | IJQuerySuggested;
        empty?: IEmpty | IJQueryEmpty;
    }

    export interface Static {
        defaultDomains: string[];
        defaultSecondLevelDomains: string[];
        defaultTopLevelDomains: string[];
        domainThreshold: number;
        topLevelThreshold: number;
        run(opts: IOptions):void;
        suggest: ISuggestFunction;
        encodeEmail(email: string): string;
        splitEmail(email: string): ISplitEmail;
        sift3Distance(s1: string, s2: string): number;
        findClosestDomain(domain: string, domains: string[], distanceFunction?: IDistanceFunction, threshold?: number): boolean|string;
    }

}

interface JQuery {
    mailcheck(opts: MailcheckModule.IOptions): void;
}

declare module 'mailcheck' {
    export = Mailcheck;
}
