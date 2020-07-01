// Type definitions for jquery-next-id 1.0
// Project: https://github.com/makeup-jquery/jquery-next-id
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export interface JQueryNextId {
    (prefix?: string): JQuery;

    defaults: {
        prefix: string;
        separator: string;
    };
}

declare global {
    interface JQuery {
        nextId: JQueryNextId;
    }
}
