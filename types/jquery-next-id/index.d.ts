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
