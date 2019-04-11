// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Driveactivity_v2 {
    namespace Collection {
      export interface ActivityCollection {
        // Query past activity in Google Drive.
        query(resource: Schema.QueryDriveActivityRequest): Driveactivity_v2.Schema.QueryDriveActivityResponse;
      }
    }
    namespace Schema {
      export interface Action {
        actor?: Driveactivity_v2.Schema.Actor;
        detail?: Driveactivity_v2.Schema.ActionDetail;
        target?: Driveactivity_v2.Schema.Target;
        timeRange?: Driveactivity_v2.Schema.TimeRange;
        timestamp?: string;
      }
      export interface ActionDetail {
        comment?: Driveactivity_v2.Schema.Comment;
        create?: Driveactivity_v2.Schema.Create;
        delete?: Driveactivity_v2.Schema.Delete;
        dlpChange?: Driveactivity_v2.Schema.DataLeakPreventionChange;
        edit?: any;
        move?: Driveactivity_v2.Schema.Move;
        permissionChange?: Driveactivity_v2.Schema.PermissionChange;
        reference?: Driveactivity_v2.Schema.ApplicationReference;
        rename?: Driveactivity_v2.Schema.Rename;
        restore?: Driveactivity_v2.Schema.Restore;
        settingsChange?: Driveactivity_v2.Schema.SettingsChange;
      }
      export interface Actor {
        administrator?: string;
        anonymous?: string;
        impersonation?: Driveactivity_v2.Schema.Impersonation;
        system?: Driveactivity_v2.Schema.SystemEvent;
        user?: Driveactivity_v2.Schema.User;
      }
      export interface ApplicationReference {
        type?: string;
      }
      export interface Assignment {
        subtype?: string;
      }
      export interface Comment {
        assignment?: Driveactivity_v2.Schema.Assignment;
        mentionedUsers?: Driveactivity_v2.Schema.User[];
        post?: Driveactivity_v2.Schema.Post;
        suggestion?: Driveactivity_v2.Schema.Suggestion;
      }
      export interface ConsolidationStrategy {
        legacy?: any;
        none?: any;
      }
      export interface Copy {
        originalObject?: Driveactivity_v2.Schema.TargetReference;
      }
      export interface Create {
        copy?: Driveactivity_v2.Schema.Copy;
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
        actions?: Driveactivity_v2.Schema.Action[];
        actors?: Driveactivity_v2.Schema.Actor[];
        primaryActionDetail?: Driveactivity_v2.Schema.ActionDetail;
        targets?: Driveactivity_v2.Schema.Target[];
        timeRange?: Driveactivity_v2.Schema.TimeRange;
        timestamp?: string;
      }
      export interface DriveItem {
        file?: any;
        folder?: Driveactivity_v2.Schema.Folder;
        mimeType?: string;
        name?: string;
        owner?: Driveactivity_v2.Schema.Owner;
        title?: string;
      }
      export interface DriveItemReference {
        file?: any;
        folder?: Driveactivity_v2.Schema.Folder;
        name?: string;
        title?: string;
      }
      export interface FileComment {
        legacyCommentId?: string;
        legacyDiscussionId?: string;
        linkToDiscussion?: string;
        parent?: Driveactivity_v2.Schema.DriveItem;
      }
      export interface Folder {
        type?: string;
      }
      export interface Group {
        email?: string;
        title?: string;
      }
      export interface Impersonation {
        impersonatedUser?: Driveactivity_v2.Schema.User;
      }
      export interface KnownUser {
        isCurrentUser?: boolean;
        personName?: string;
      }
      export interface Move {
        addedParents?: Driveactivity_v2.Schema.TargetReference[];
        removedParents?: Driveactivity_v2.Schema.TargetReference[];
      }
      export interface Owner {
        domain?: Driveactivity_v2.Schema.Domain;
        teamDrive?: Driveactivity_v2.Schema.TeamDriveReference;
        user?: Driveactivity_v2.Schema.User;
      }
      export interface Permission {
        allowDiscovery?: boolean;
        anyone?: any;
        domain?: Driveactivity_v2.Schema.Domain;
        group?: Driveactivity_v2.Schema.Group;
        role?: string;
        user?: Driveactivity_v2.Schema.User;
      }
      export interface PermissionChange {
        addedPermissions?: Driveactivity_v2.Schema.Permission[];
        removedPermissions?: Driveactivity_v2.Schema.Permission[];
      }
      export interface Post {
        subtype?: string;
      }
      export interface QueryDriveActivityRequest {
        ancestorName?: string;
        consolidationStrategy?: Driveactivity_v2.Schema.ConsolidationStrategy;
        filter?: string;
        itemName?: string;
        pageSize?: number;
        pageToken?: string;
      }
      export interface QueryDriveActivityResponse {
        activities?: Driveactivity_v2.Schema.DriveActivity[];
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
        restrictionChanges?: Driveactivity_v2.Schema.RestrictionChange[];
      }
      export interface Suggestion {
        subtype?: string;
      }
      export interface SystemEvent {
        type?: string;
      }
      export interface Target {
        driveItem?: Driveactivity_v2.Schema.DriveItem;
        fileComment?: any;
        teamDrive?: Driveactivity_v2.Schema.TeamDrive;
      }
      export interface TargetReference {
        driveItem?: Driveactivity_v2.Schema.DriveItemReference;
        teamDrive?: Driveactivity_v2.Schema.TeamDriveReference;
      }
      export interface TeamDrive {
        name?: string;
        root?: Driveactivity_v2.Schema.DriveItem;
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
        knownUser?: Driveactivity_v2.Schema.KnownUser;
        unknownUser?: any;
      }
    }
  }
  export interface Driveactivity_v2 {
    Activity?: Driveactivity_v2.Collection.ActivityCollection;
    // Create a new instance of ConsolidationStrategy
    newConsolidationStrategy(): Driveactivity_v2.Schema.ConsolidationStrategy;
    // Create a new instance of Legacy
    newLegacy(): any;
    // Create a new instance of NoConsolidation
    newNoConsolidation(): any;
    // Create a new instance of QueryDriveActivityRequest
    newQueryDriveActivityRequest(): Driveactivity_v2.Schema.QueryDriveActivityRequest;
  }
}

declare var Driveactivity_v2: GoogleAppsScript.Driveactivity_v2;