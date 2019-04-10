// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace AdminGroupsMigration {
    namespace Collection {
      export interface ArchiveCollection {
        // Inserts a new mail into the archive of the Google group.
        insert(groupId: string): AdminGroupsMigration.Schema.Groups;
        // Inserts a new mail into the archive of the Google group.
        insert(groupId: string, mediaData: any): AdminGroupsMigration.Schema.Groups;
      }
    }
    namespace Schema {
      export interface Groups {
        kind?: string;
        responseCode?: string;
      }
    }
  }
  export interface AdminGroupsMigration {
    Archive?: AdminGroupsMigration.Collection.ArchiveCollection;
  }
}

declare var AdminGroupsMigration: GoogleAppsScript.AdminGroupsMigration;
