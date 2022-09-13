// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Appsactivity {
    namespace Collection {
      interface ActivitiesCollection {
        // Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
        list(): Appsactivity.Schema.ListActivitiesResponse;
        // Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
        list(optionalArgs: object): Appsactivity.Schema.ListActivitiesResponse;
      }
    }
    namespace Schema {
      interface Activity {
        combinedEvent?: Appsactivity.Schema.Event | undefined;
        singleEvents?: Appsactivity.Schema.Event[] | undefined;
      }
      interface Event {
        additionalEventTypes?: string[] | undefined;
        eventTimeMillis?: string | undefined;
        fromUserDeletion?: boolean | undefined;
        move?: Appsactivity.Schema.Move | undefined;
        permissionChanges?: Appsactivity.Schema.PermissionChange[] | undefined;
        primaryEventType?: string | undefined;
        rename?: Appsactivity.Schema.Rename | undefined;
        target?: Appsactivity.Schema.Target | undefined;
        user?: Appsactivity.Schema.User | undefined;
      }
      interface ListActivitiesResponse {
        activities?: Appsactivity.Schema.Activity[] | undefined;
        nextPageToken?: string | undefined;
      }
      interface Move {
        addedParents?: Appsactivity.Schema.Parent[] | undefined;
        removedParents?: Appsactivity.Schema.Parent[] | undefined;
      }
      interface Parent {
        id?: string | undefined;
        isRoot?: boolean | undefined;
        title?: string | undefined;
      }
      interface Permission {
        name?: string | undefined;
        permissionId?: string | undefined;
        role?: string | undefined;
        type?: string | undefined;
        user?: Appsactivity.Schema.User | undefined;
        withLink?: boolean | undefined;
      }
      interface PermissionChange {
        addedPermissions?: Appsactivity.Schema.Permission[] | undefined;
        removedPermissions?: Appsactivity.Schema.Permission[] | undefined;
      }
      interface Photo {
        url?: string | undefined;
      }
      interface Rename {
        newTitle?: string | undefined;
        oldTitle?: string | undefined;
      }
      interface Target {
        id?: string | undefined;
        mimeType?: string | undefined;
        name?: string | undefined;
      }
      interface User {
        isDeleted?: boolean | undefined;
        isMe?: boolean | undefined;
        name?: string | undefined;
        permissionId?: string | undefined;
        photo?: Appsactivity.Schema.Photo | undefined;
      }
    }
  }
  interface Appsactivity {
    Activities?: Appsactivity.Collection.ActivitiesCollection | undefined;
  }
}

declare var Appsactivity: GoogleAppsScript.Appsactivity;
