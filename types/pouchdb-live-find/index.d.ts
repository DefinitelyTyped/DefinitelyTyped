/// <reference types="pouchdb-core" />
declare namespace PouchDB {
    namespace LiveFind {
        interface RequestDef<Content extends {}>
            extends Pick<Find.FindRequest<Content>, Exclude<keyof Find.FindRequest<Content>, "use_index">>
        {
            aggregate?: boolean | undefined; // if true outputs an aggregate list on every update event
        }

        interface PaginateOptions<Content extends {}>
            extends Pick<Find.FindRequest<Content>, "sort" | "skip" | "limit">
        {}

        interface UpdateEvent {
            action: "REMOVE" | "ADD" | "UPDATE";
            id: any;
            rev: any;
            doc: any;
        }
        interface LiveFeed<Content extends {} = {}> {
            on(event: "ready" | "cancelled", listener: () => void): this;
            on(event: "error", listener: (err: any) => void): this;
            on(event: "update", listener: (event: UpdateEvent, list: any) => void): this;
        }

        interface LiveFeed<Content extends {} = {}> extends EventEmitter {
            // stops the query and removes all listeners
            cancel(): void;
            // a convenience function to sort any list in place by the sort order you provided. (This will mutate the Array.)
            sort(list: []): [];
            // updates the pagination and sorting of the aggregate list and immediately returns the updated list. Available options are sort, skip, and limit.
            paginate(options: PaginateOptions<Content>): [];
            then(callbackSuccess: () => any): void;
            catch(callbackFailure: () => any): void;
        }
    }
    interface Database<Content extends {} = {}> {
        liveFind(requestDef: LiveFind.RequestDef<Content>): LiveFind.LiveFeed<Content>;
    }
}

declare module "pouchdb-live-find" {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
