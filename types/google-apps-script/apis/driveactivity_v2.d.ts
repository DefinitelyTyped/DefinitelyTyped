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
        actor?: DriveActivity.Schema.Actor | undefined;
        detail?: DriveActivity.Schema.ActionDetail | undefined;
        target?: DriveActivity.Schema.Target | undefined;
        timeRange?: DriveActivity.Schema.TimeRange | undefined;
        timestamp?: string | undefined;
      }
      interface ActionDetail {
        comment?: DriveActivity.Schema.Comment | undefined;
        create?: DriveActivity.Schema.Create | undefined;
        delete?: DriveActivity.Schema.Delete | undefined;
        dlpChange?: DriveActivity.Schema.DataLeakPreventionChange | undefined;
        edit?: any;
        move?: DriveActivity.Schema.Move | undefined;
        permissionChange?: DriveActivity.Schema.PermissionChange | undefined;
        reference?: DriveActivity.Schema.ApplicationReference | undefined;
        rename?: DriveActivity.Schema.Rename | undefined;
        restore?: DriveActivity.Schema.Restore | undefined;
        settingsChange?: DriveActivity.Schema.SettingsChange | undefined;
      }
      interface Actor {
        administrator?: string | undefined;
        anonymous?: string | undefined;
        impersonation?: DriveActivity.Schema.Impersonation | undefined;
        system?: DriveActivity.Schema.SystemEvent | undefined;
        user?: DriveActivity.Schema.User | undefined;
      }
      interface ApplicationReference {
        type?: string | undefined;
      }
      interface Assignment {
        subtype?: string | undefined;
      }
      interface Comment {
        assignment?: DriveActivity.Schema.Assignment | undefined;
        mentionedUsers?: DriveActivity.Schema.User[] | undefined;
        post?: DriveActivity.Schema.Post | undefined;
        suggestion?: DriveActivity.Schema.Suggestion | undefined;
      }
      interface ConsolidationStrategy {
        legacy?: any;
        none?: any;
      }
      interface Copy {
        originalObject?: DriveActivity.Schema.TargetReference | undefined;
      }
      interface Create {
        copy?: DriveActivity.Schema.Copy | undefined;
        new?: any;
        upload?: any;
      }
      interface DataLeakPreventionChange {
        type?: string | undefined;
      }
      interface Delete {
        type?: string | undefined;
      }
      interface Domain {
        legacyId?: string | undefined;
        name?: string | undefined;
      }
      interface DriveActivity {
        actions?: DriveActivity.Schema.Action[] | undefined;
        actors?: DriveActivity.Schema.Actor[] | undefined;
        primaryActionDetail?: DriveActivity.Schema.ActionDetail | undefined;
        targets?: DriveActivity.Schema.Target[] | undefined;
        timeRange?: DriveActivity.Schema.TimeRange | undefined;
        timestamp?: string | undefined;
      }
      interface DriveItem {
        file?: any;
        folder?: DriveActivity.Schema.Folder | undefined;
        mimeType?: string | undefined;
        name?: string | undefined;
        owner?: DriveActivity.Schema.Owner | undefined;
        title?: string | undefined;
      }
      interface DriveItemReference {
        file?: any;
        folder?: DriveActivity.Schema.Folder | undefined;
        name?: string | undefined;
        title?: string | undefined;
      }
      interface FileComment {
        legacyCommentId?: string | undefined;
        legacyDiscussionId?: string | undefined;
        linkToDiscussion?: string | undefined;
        parent?: DriveActivity.Schema.DriveItem | undefined;
      }
      interface Folder {
        type?: string | undefined;
      }
      interface Group {
        email?: string | undefined;
        title?: string | undefined;
      }
      interface Impersonation {
        impersonatedUser?: DriveActivity.Schema.User | undefined;
      }
      interface KnownUser {
        isCurrentUser?: boolean | undefined;
        personName?: string | undefined;
      }
      interface Move {
        addedParents?: DriveActivity.Schema.TargetReference[] | undefined;
        removedParents?: DriveActivity.Schema.TargetReference[] | undefined;
      }
      interface Owner {
        domain?: DriveActivity.Schema.Domain | undefined;
        teamDrive?: DriveActivity.Schema.TeamDriveReference | undefined;
        user?: DriveActivity.Schema.User | undefined;
      }
      interface Permission {
        allowDiscovery?: boolean | undefined;
        anyone?: any;
        domain?: DriveActivity.Schema.Domain | undefined;
        group?: DriveActivity.Schema.Group | undefined;
        role?: string | undefined;
        user?: DriveActivity.Schema.User | undefined;
      }
      interface PermissionChange {
        addedPermissions?: DriveActivity.Schema.Permission[] | undefined;
        removedPermissions?: DriveActivity.Schema.Permission[] | undefined;
      }
      interface Post {
        subtype?: string | undefined;
      }
      interface QueryDriveActivityRequest {
        ancestorName?: string | undefined;
        consolidationStrategy?: DriveActivity.Schema.ConsolidationStrategy | undefined;
        filter?: string | undefined;
        itemName?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
      }
      interface QueryDriveActivityResponse {
        activities?: DriveActivity.Schema.DriveActivity[] | undefined;
        nextPageToken?: string | undefined;
      }
      interface Rename {
        newTitle?: string | undefined;
        oldTitle?: string | undefined;
      }
      interface Restore {
        type?: string | undefined;
      }
      interface RestrictionChange {
        feature?: string | undefined;
        newRestriction?: string | undefined;
      }
      interface SettingsChange {
        restrictionChanges?: DriveActivity.Schema.RestrictionChange[] | undefined;
      }
      interface Suggestion {
        subtype?: string | undefined;
      }
      interface SystemEvent {
        type?: string | undefined;
      }
      interface Target {
        driveItem?: DriveActivity.Schema.DriveItem | undefined;
        fileComment?: any;
        teamDrive?: DriveActivity.Schema.TeamDrive | undefined;
      }
      interface TargetReference {
        driveItem?: DriveActivity.Schema.DriveItemReference | undefined;
        teamDrive?: DriveActivity.Schema.TeamDriveReference | undefined;
      }
      interface TeamDrive {
        name?: string | undefined;
        root?: DriveActivity.Schema.DriveItem | undefined;
        title?: string | undefined;
      }
      interface TeamDriveReference {
        name?: string | undefined;
        title?: string | undefined;
      }
      interface TimeRange {
        endTime?: string | undefined;
        startTime?: string | undefined;
      }
      interface User {
        deletedUser?: any;
        knownUser?: DriveActivity.Schema.KnownUser | undefined;
        unknownUser?: any;
      }
    }
  }
  interface DriveActivity {
    Activity?: DriveActivity.Collection.ActivityCollection | undefined;
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
