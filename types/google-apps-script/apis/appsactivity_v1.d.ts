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
        combinedEvent?: Appsactivity.Schema.Event;
        singleEvents?: Appsactivity.Schema.Event[];
      }
      interface Event {
        additionalEventTypes?: string[];
        eventTimeMillis?: string;
        fromUserDeletion?: boolean;
        move?: Appsactivity.Schema.Move;
        permissionChanges?: Appsactivity.Schema.PermissionChange[];
        primaryEventType?: string;
        rename?: Appsactivity.Schema.Rename;
        target?: Appsactivity.Schema.Target;
        user?: Appsactivity.Schema.User;
      }
      interface ListActivitiesResponse {
        activities?: Appsactivity.Schema.Activity[];
        nextPageToken?: string;
      }
      interface Move {
        addedParents?: Appsactivity.Schema.Parent[];
        removedParents?: Appsactivity.Schema.Parent[];
      }
      interface Parent {
        id?: string;
        isRoot?: boolean;
        title?: string;
      }
      interface Permission {
        name?: string;
        permissionId?: string;
        role?: string;
        type?: string;
        user?: Appsactivity.Schema.User;
        withLink?: boolean;
      }
      interface PermissionChange {
        addedPermissions?: Appsactivity.Schema.Permission[];
        removedPermissions?: Appsactivity.Schema.Permission[];
      }
      interface Photo {
        url?: string;
      }
      interface Rename {
        newTitle?: string;
        oldTitle?: string;
      }
      interface Target {
        id?: string;
        mimeType?: string;
        name?: string;
      }
      interface User {
        isDeleted?: boolean;
        isMe?: boolean;
        name?: string;
        permissionId?: string;
        photo?: Appsactivity.Schema.Photo;
      }
    }
  }
  interface Appsactivity {
    Activities?: Appsactivity.Collection.ActivitiesCollection;
  }
}

declare var Appsactivity: GoogleAppsScript.Appsactivity;
