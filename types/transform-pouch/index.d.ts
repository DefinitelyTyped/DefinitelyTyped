/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    interface Database<Content extends {} = {}> {
        transform<NewContent extends {}>(config: {
            incoming?(doc: Core.Document<Content>): Core.Document<NewContent> | Promise<Core.Document<NewContent>>;
            outgoing?(doc: Core.Document<NewContent>): Core.Document<Content> | Promise<Core.Document<Content>>;
        }): void;
        // api.filter provided for backwards compat with the old "filter-pouch"
        filter<NewContent extends {}>(config: {
            incoming?(doc: Core.Document<Content>): Core.Document<NewContent> | Promise<Core.Document<NewContent>>;
            outgoing?(doc: Core.Document<NewContent>): Core.Document<Content> | Promise<Core.Document<Content>>;
        }): void;
    }
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "transform-pouch" {
    const plugin: PouchDB.Plugin & { transform: () => void; filter: () => void };
    export = plugin;
}
