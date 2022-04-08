// Type definitions for transform-pouch 1.0
// Project: https://github.com/pouchdb-community/transform-pouch
// Definitions by: Lucas Rainett <https://github.com/lucasrainett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    interface Database<Content extends {} = {}> {
        transform<NewContent>(config: {
            incoming?(doc: Core.Document<Content>): Core.Document<NewContent> | Promise<Core.Document<NewContent>>;
            outgoing?(doc: Core.Document<NewContent>): Core.Document<Content> | Promise<Core.Document<Content>>;
        }): void;
        // api.filter provided for backwards compat with the old "filter-pouch"
        filter<NewContent>(config: {
            incoming?(doc: Core.Document<Content>): Core.Document<NewContent> | Promise<Core.Document<NewContent>>;
            outgoing?(doc: Core.Document<NewContent>): Core.Document<Content> | Promise<Core.Document<Content>>;
        }): void;
    }
}

// tslint:disable-next-line:no-declare-current-package no-single-declare-module
declare module 'transform-pouch' {
    const plugin: PouchDB.Plugin & {transform: () => void, filter: () => void};
    export = plugin;
}
