// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace DriveActivity {
    namespace Collection {
      export interface ActivityCollection {
        // Query past activity in Google Drive.
        query(resource: Schema.QueryDriveActivityRequest): DriveActivity.Schema.QueryDriveActivityResponse;
      }
    }
    namespace Schema {
      export interface Action {
        actor?: DriveActivity.Schema.Actor;
        detail?: DriveActivity.Schema.ActionDetail;
        target?: DriveActivity.Schema.Target;
        timeRange?: DriveActivity.Schema.TimeRange;
        timestamp?: string;
      }
      export interface ActionDetail {
        comment?: DriveActivity.Schema.Comment;
        create?: DriveActivity.Schema.Create;
        delete?: DriveActivity.Schema.Delete;
        dlpChange?: DriveActivity.Schema.DataLeakPreventionChange;
        edit?: any;
        move?: DriveActivity.Schema.Move;
        permissionChange?: DriveActivity.Schema.PermissionChange;
        reference?: DriveActivity.Schema.ApplicationReference;
        rename?: DriveActivity.Schema.Rename;
        restore?: DriveActivity.Schema.Restore;
        settingsChange?: DriveActivity.Schema.SettingsChange;
      }
      export interface Actor {
        administrator?: string;
        anonymous?: string;
        impersonation?: DriveActivity.Schema.Impersonation;
        system?: DriveActivity.Schema.SystemEvent;
        user?: DriveActivity.Schema.User;
      }
      export interface ApplicationReference {
        type?: string;
      }
      export interface Assignment {
        subtype?: string;
      }
      export interface Comment {
        assignment?: DriveActivity.Schema.Assignment;
        mentionedUsers?: DriveActivity.Schema.User[];
        post?: DriveActivity.Schema.Post;
        suggestion?: DriveActivity.Schema.Suggestion;
      }
      export interface ConsolidationStrategy {
        legacy?: any;
        none?: any;
      }
      export interface Copy {
        originalObject?: DriveActivity.Schema.TargetReference;
      }
      export interface Create {
        copy?: DriveActivity.Schema.Copy;
        new?: any;
        upload?: any;
      }
      export interface DataLeakPreventionChange {
        type?: string;
      }
      export interface Delete {
        type?: string;
      }
      export interface Domain {
        legacyId?: string;
        name?: string;
      }
      export interface DriveActivity {
        actions?: DriveActivity.Schema.Action[];
        actors?: DriveActivity.Schema.Actor[];
        primaryActionDetail?: DriveActivity.Schema.ActionDetail;
        targets?: DriveActivity.Schema.Target[];
        timeRange?: DriveActivity.Schema.TimeRange;
        timestamp?: string;
      }
      export interface DriveItem {
        file?: any;
        folder?: DriveActivity.Schema.Folder;
        mimeType?: string;
        name?: string;
        owner?: DriveActivity.Schema.Owner;
        title?: string;
      }
      export interface DriveItemReference {
        file?: any;
        folder?: DriveActivity.Schema.Folder;
        name?: string;
        title?: string;
      }
      export interface FileComment {
        legacyCommentId?: string;
        legacyDiscussionId?: string;
        linkToDiscussion?: string;
        parent?: DriveActivity.Schema.DriveItem;
      }
      export interface Folder {
        type?: string;
      }
      export interface Group {
        email?: string;
        title?: string;
      }
      export interface Impersonation {
        impersonatedUser?: DriveActivity.Schema.User;
      }
      export interface KnownUser {
        isCurrentUser?: boolean;
        personName?: string;
      }
      export interface Move {
        addedParents?: DriveActivity.Schema.TargetReference[];
        removedParents?: DriveActivity.Schema.TargetReference[];
      }
      export interface Owner {
        domain?: DriveActivity.Schema.Domain;
        teamDrive?: DriveActivity.Schema.TeamDriveReference;
        user?: DriveActivity.Schema.User;
      }
      export interface Permission {
        allowDiscovery?: boolean;
        anyone?: any;
        domain?: DriveActivity.Schema.Domain;
        group?: DriveActivity.Schema.Group;
        role?: string;
        user?: DriveActivity.Schema.User;
      }
      export interface PermissionChange {
        addedPermissions?: DriveActivity.Schema.Permission[];
        removedPermissions?: DriveActivity.Schema.Permission[];
      }
      export interface Post {
        subtype?: string;
      }
      export interface QueryDriveActivityRequest {
        ancestorName?: string;
        consolidationStrategy?: DriveActivity.Schema.ConsolidationStrategy;
        filter?: string;
        itemName?: string;
        pageSize?: number;
        pageToken?: string;
      }
      export interface QueryDriveActivityResponse {
        activities?: DriveActivity.Schema.DriveActivity[];
        nextPageToken?: string;
      }
      export interface Rename {
        newTitle?: string;
        oldTitle?: string;
      }
      export interface Restore {
        type?: string;
      }
      export interface RestrictionChange {
        feature?: string;
        newRestriction?: string;
      }
      export interface SettingsChange {
        restrictionChanges?: DriveActivity.Schema.RestrictionChange[];
      }
      export interface Suggestion {
        subtype?: string;
      }
      export interface SystemEvent {
        type?: string;
      }
      export interface Target {
        driveItem?: DriveActivity.Schema.DriveItem;
        fileComment?: any;
        teamDrive?: DriveActivity.Schema.TeamDrive;
      }
      export interface TargetReference {
        driveItem?: DriveActivity.Schema.DriveItemReference;
        teamDrive?: DriveActivity.Schema.TeamDriveReference;
      }
      export interface TeamDrive {
        name?: string;
        root?: DriveActivity.Schema.DriveItem;
        title?: string;
      }
      export interface TeamDriveReference {
        name?: string;
        title?: string;
      }
      export interface TimeRange {
        endTime?: string;
        startTime?: string;
      }
      export interface User {
        deletedUser?: any;
        knownUser?: DriveActivity.Schema.KnownUser;
        unknownUser?: any;
      }
    }
  }
  export interface DriveActivity {
    Activity?: DriveActivity.Collection.ActivityCollection;
    // Create a new instance of ConsolidationStrategy
    newConsolidationStrategy(): DriveActivity.Schema.ConsolidationStrategy;
    // Create a new instance of Legacy
    newLegacy(): any;
    // Create a new instance of NoConsolidation
    newNoConsolidation(): any;
    // Create a new instance of QueryDriveActivityRequest
    newQueryDriveActivityRequest(): DriveActivity.Schema.QueryDriveActivityRequest;
  }
}

declare var DriveActivity: GoogleAppsScript.DriveActivity;
