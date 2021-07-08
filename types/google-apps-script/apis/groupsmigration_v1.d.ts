// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace AdminGroupsMigration {
    namespace Collection {
      interface ArchiveCollection {
        // Inserts a new mail into the archive of the Google group.
        insert(groupId: string): AdminGroupsMigration.Schema.Groups;
        // Inserts a new mail into the archive of the Google group.
        insert(groupId: string, mediaData: any): AdminGroupsMigration.Schema.Groups;
      }
    }
    namespace Schema {
      interface Groups {
        kind?: string | undefined;
        responseCode?: string | undefined;
      }
    }
  }
  interface AdminGroupsMigration {
    Archive?: AdminGroupsMigration.Collection.ArchiveCollection | undefined;
  }
}

declare var AdminGroupsMigration: GoogleAppsScript.AdminGroupsMigration;
