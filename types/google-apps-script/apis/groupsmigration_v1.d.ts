// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace AdminGroupsMigration {
        namespace Collection {
            interface ArchiveCollection {
                // Inserts a new mail into the archive of the Google group.
                insert(groupId: string): Schema.Groups;
                // Inserts a new mail into the archive of the Google group.
                insert(groupId: string, mediaData: Base.Blob): Schema.Groups;
            }
        }
        namespace Schema {
            // JSON response template for groups migration API.
            interface Groups {
                // The kind of insert resource this is.
                kind?: string;
                // The status of the insert request.
                responseCode?: string;
            }
        }
    }
    // The Groups Migration API allows domain administrators to archive emails into Google groups.
    interface AdminGroupsMigration {
        Archive?: AdminGroupsMigration.Collection.ArchiveCollection;
    }
}
declare const AdminGroupsMigration: GoogleAppsScript.AdminGroupsMigration;
