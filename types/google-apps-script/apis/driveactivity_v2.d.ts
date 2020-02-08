// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace DriveActivity {
    namespace Collection {
      interface ActivityCollection {
        // Query past activity in Google Drive.
        query(resource: Schema.QueryDriveActivityRequest): DriveActivity.Schema.QueryDriveActivityResponse;
      }
    }
    namespace Schema {
      interface Action {
        actor?: DriveActivity.Schema.Actor;
        detail?: DriveActivity.Schema.ActionDetail;
        target?: DriveActivity.Schema.Target;
        timeRange?: DriveActivity.Schema.TimeRange;
        timestamp?: string;
      }
      interface ActionDetail {
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
      interface Actor {
        administrator?: string;
        anonymous?: string;
        impersonation?: DriveActivity.Schema.Impersonation;
        system?: DriveActivity.Schema.SystemEvent;
        user?: DriveActivity.Schema.User;
      }
      interface ApplicationReference {
        type?: string;
      }
      interface Assignment {
        subtype?: string;
      }
      interface Comment {
        assignment?: DriveActivity.Schema.Assignment;
        mentionedUsers?: DriveActivity.Schema.User[];
        post?: DriveActivity.Schema.Post;
        suggestion?: DriveActivity.Schema.Suggestion;
      }
      interface ConsolidationStrategy {
        legacy?: any;
        none?: any;
      }
      interface Copy {
        originalObject?: DriveActivity.Schema.TargetReference;
      }
      interface Create {
        copy?: DriveActivity.Schema.Copy;
        new?: any;
        upload?: any;
      }
      interface DataLeakPreventionChange {
        type?: string;
      }
      interface Delete {
        type?: string;
      }
      interface Domain {
        legacyId?: string;
        name?: string;
      }
      interface DriveActivity {
        actions?: DriveActivity.Schema.Action[];
        actors?: DriveActivity.Schema.Actor[];
        primaryActionDetail?: DriveActivity.Schema.ActionDetail;
        targets?: DriveActivity.Schema.Target[];
        timeRange?: DriveActivity.Schema.TimeRange;
        timestamp?: string;
      }
      interface DriveItem {
        file?: any;
        folder?: DriveActivity.Schema.Folder;
        mimeType?: string;
        name?: string;
        owner?: DriveActivity.Schema.Owner;
        title?: string;
      }
      interface DriveItemReference {
        file?: any;
        folder?: DriveActivity.Schema.Folder;
        name?: string;
        title?: string;
      }
      interface FileComment {
        legacyCommentId?: string;
        legacyDiscussionId?: string;
        linkToDiscussion?: string;
        parent?: DriveActivity.Schema.DriveItem;
      }
      interface Folder {
        type?: string;
      }
      interface Group {
        email?: string;
        title?: string;
      }
      interface Impersonation {
        impersonatedUser?: DriveActivity.Schema.User;
      }
      interface KnownUser {
        isCurrentUser?: boolean;
        personName?: string;
      }
      interface Move {
        addedParents?: DriveActivity.Schema.TargetReference[];
        removedParents?: DriveActivity.Schema.TargetReference[];
      }
      interface Owner {
        domain?: DriveActivity.Schema.Domain;
        teamDrive?: DriveActivity.Schema.TeamDriveReference;
        user?: DriveActivity.Schema.User;
      }
      interface Permission {
        allowDiscovery?: boolean;
        anyone?: any;
        domain?: DriveActivity.Schema.Domain;
        group?: DriveActivity.Schema.Group;
        role?: string;
        user?: DriveActivity.Schema.User;
      }
      interface PermissionChange {
        addedPermissions?: DriveActivity.Schema.Permission[];
        removedPermissions?: DriveActivity.Schema.Permission[];
      }
      interface Post {
        subtype?: string;
      }
      interface QueryDriveActivityRequest {
        ancestorName?: string;
        consolidationStrategy?: DriveActivity.Schema.ConsolidationStrategy;
        filter?: string;
        itemName?: string;
        pageSize?: number;
        pageToken?: string;
      }
      interface QueryDriveActivityResponse {
        activities?: DriveActivity.Schema.DriveActivity[];
        nextPageToken?: string;
      }
      interface Rename {
        newTitle?: string;
        oldTitle?: string;
      }
      interface Restore {
        type?: string;
      }
      interface RestrictionChange {
        feature?: string;
        newRestriction?: string;
      }
      interface SettingsChange {
        restrictionChanges?: DriveActivity.Schema.RestrictionChange[];
      }
      interface Suggestion {
        subtype?: string;
      }
      interface SystemEvent {
        type?: string;
      }
      interface Target {
        driveItem?: DriveActivity.Schema.DriveItem;
        fileComment?: any;
        teamDrive?: DriveActivity.Schema.TeamDrive;
      }
      interface TargetReference {
        driveItem?: DriveActivity.Schema.DriveItemReference;
        teamDrive?: DriveActivity.Schema.TeamDriveReference;
      }
      interface TeamDrive {
        name?: string;
        root?: DriveActivity.Schema.DriveItem;
        title?: string;
      }
      interface TeamDriveReference {
        name?: string;
        title?: string;
      }
      interface TimeRange {
        endTime?: string;
        startTime?: string;
      }
      interface User {
        deletedUser?: any;
        knownUser?: DriveActivity.Schema.KnownUser;
        unknownUser?: any;
      }
    }
  }
  interface DriveActivity {
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
