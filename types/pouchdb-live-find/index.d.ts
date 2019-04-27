// Type definitions for pouchdb-live-find 0.4
// Project: https://github.com/colinskow/pouchdb-live-find
// Definitions by: assemblethis <https://github.com/assemblethis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="pouchdb-core" />
declare namespace PouchDB {
    namespace LiveFind {

        interface RequestDef<Content extends {}> extends Pick<PouchDB.Find.FindRequest<Content>, Exclude<keyof PouchDB.Find.FindRequest<Content>, 'use_index'>>
        {
            aggregate?: boolean; // if true outputs an aggregate list on every update event
        }

        interface PaginateOptions<Content extends {}> extends Pick<PouchDB.Find.FindRequest<Content>, 'sort' | 'skip'| 'limit'> {}

        interface UpdateEvent {
            action: 'REMOVE' | 'ADD' | 'UPDATE'
            id: any
            rev: any
            doc: any
        }
        interface LiveFeed<Content extends {} = {}> {
            on(event: 'ready', listener: () => void): this;
            on(event: 'error', listener: (err: any) => void): this;
            on(event: 'cancelled', listener: () => void): this;
            on(event: 'update', listener: (event: UpdateEvent, list: any) => void): this;
        }

        interface LiveFeed<Content extends {} = {}> extends EventEmitter {
            cancel(): void // stops the query and removes all listeners
            sort(list: []): []; //a convenience function to sort any list in place by the sort order you provided. (This will mutate the Array.)
            paginate(options: PaginateOptions<Content>): []; // updates the pagination and sorting of the aggregate list and immediately returns the updated list. Available options are sort, skip, and limit.
            then(callbackSuccess: ()=>any): void;
            catch(callbackFailure: ()=> any): void;
        }

    }
    interface Database<Content extends {} = {}> {
        liveFind(requestDef: LiveFind.RequestDef<Content>): LiveFind.LiveFeed<Content>;
    }
}

declare module 'pouchdb-live-find' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
