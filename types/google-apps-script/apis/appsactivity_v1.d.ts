// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Appsactivity_v1 {
    namespace Collection {
      export interface ActivitiesCollection {
        // Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
        list(): Appsactivity_v1.Schema.ListActivitiesResponse;
        // Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
        list(optionalArgs: object): Appsactivity_v1.Schema.ListActivitiesResponse;
      }
    }
    namespace Schema {
      export interface Activity {
        combinedEvent?: Appsactivity_v1.Schema.Event;
        singleEvents?: Appsactivity_v1.Schema.Event[];
      }
      export interface Event {
        additionalEventTypes?: string[];
        eventTimeMillis?: string;
        fromUserDeletion?: boolean;
        move?: Appsactivity_v1.Schema.Move;
        permissionChanges?: Appsactivity_v1.Schema.PermissionChange[];
        primaryEventType?: string;
        rename?: Appsactivity_v1.Schema.Rename;
        target?: Appsactivity_v1.Schema.Target;
        user?: Appsactivity_v1.Schema.User;
      }
      export interface ListActivitiesResponse {
        activities?: Appsactivity_v1.Schema.Activity[];
        nextPageToken?: string;
      }
      export interface Move {
        addedParents?: Appsactivity_v1.Schema.Parent[];
        removedParents?: Appsactivity_v1.Schema.Parent[];
      }
      export interface Parent {
        id?: string;
        isRoot?: boolean;
        title?: string;
      }
      export interface Permission {
        name?: string;
        permissionId?: string;
        role?: string;
        type?: string;
        user?: Appsactivity_v1.Schema.User;
        withLink?: boolean;
      }
      export interface PermissionChange {
        addedPermissions?: Appsactivity_v1.Schema.Permission[];
        removedPermissions?: Appsactivity_v1.Schema.Permission[];
      }
      export interface Photo {
        url?: string;
      }
      export interface Rename {
        newTitle?: string;
        oldTitle?: string;
      }
      export interface Target {
        id?: string;
        mimeType?: string;
        name?: string;
      }
      export interface User {
        isDeleted?: boolean;
        isMe?: boolean;
        name?: string;
        permissionId?: string;
        photo?: Appsactivity_v1.Schema.Photo;
      }
    }
  }
  export interface Appsactivity_v1 {
    Activities?: Appsactivity_v1.Collection.ActivitiesCollection;
  }
}

declare var Appsactivity_v1: GoogleAppsScript.Appsactivity_v1;