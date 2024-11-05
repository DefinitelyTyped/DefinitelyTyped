/// <reference types="pouchdb-core" />

declare global {
    namespace PouchDB {
        namespace IndexedDBAdapter {
            interface IndexedDBAdapterConfiguration extends PouchDB.Configuration.LocalDatabaseConfiguration {
                adapter: "indexeddb";
            }
        }

        namespace Core {
            interface PurgeResult {
                ok: boolean;
                deletedRevs: string[];
                documentWasRemovedCompletely: boolean;
            }
        }

        interface Database<Content extends {} = {}> {
            /**
             * Purges the specified document's revision from the database, removing the revision and its history from storage.
             * This operation permanently deletes the revision data, unlike a typical deletion that keeps the revision
             * metadata. Use with caution, as purged revisions cannot be restored and are fully erased.
             *
             * Purge only affects the targeted revision's branch of the revision tree, ensuring that other branches
             * and non-ancestor revisions remain unaffected. If purging results in an empty revision tree,
             * the entire document is deleted.
             *
             * @param docId - The ID of the document to purge.
             * @param rev - The leaf revision ID to purge from the revision tree.
             * @returns A promise that resolves with the purge result, containing:
             * - `ok` (boolean): Indicates the purge operation's success.
             * - `deletedRevs` (string[]): An array of revision IDs that were purged from the document.
             * - `documentWasRemovedCompletely` (boolean): Whether the entire document was removed due to an empty revision tree.
             *
             * @throws {Error} If the specified revision does not exist or is not a leaf.
             */
            purge(docId: string, rev: string): Promise<Core.PurgeResult>;
        }

        interface Static {
            new<Content extends {}>(
                name: string | null,
                options: IndexedDBAdapter.IndexedDBAdapterConfiguration,
            ): Database<Content>;
        }
    }
}

declare function plugin(PouchDB: PouchDB.Static): void;
export = plugin;
