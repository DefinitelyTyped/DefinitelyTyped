// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace DriveActivity {
        namespace Collection {
            interface ActivityCollection {
                // Query past activity in Google Drive.
                query(resource: Schema.QueryDriveActivityRequest): Schema.QueryDriveActivityResponse;
            }
        }
        namespace Schema {
            // Information about the action.
            interface Action {
                // The actor responsible for this action (or empty if all actors are responsible).
                actor?: Schema.Actor;
                // The type and detailed information about the action.
                detail?: Schema.ActionDetail;
                // The target this action affects (or empty if affecting all targets). This represents the state of the target immediately
                // after this action occurred.
                target?: Schema.Target;
                // The action occurred over this time range.
                timeRange?: Schema.TimeRange;
                // The action occurred at this specific time.
                timestamp?: string;
            }
            // Data describing the type and additional information of an action.
            interface ActionDetail {
                // A change about comments was made.
                comment?: Schema.Comment;
                // An object was created.
                create?: Schema.Create;
                // An object was deleted.
                delete?: Schema.Delete;
                // A change happened in data leak prevention status.
                dlpChange?: Schema.DataLeakPreventionChange;
                // An object was edited.
                edit?: any;
                // An object was moved.
                move?: Schema.Move;
                // The permission on an object was changed.
                permissionChange?: Schema.PermissionChange;
                // An object was referenced in an application outside of Drive/Docs.
                reference?: Schema.ApplicationReference;
                // An object was renamed.
                rename?: Schema.Rename;
                // A deleted object was restored.
                restore?: Schema.Restore;
                // Settings were changed.
                settingsChange?: Schema.SettingsChange;
            }
            // The actor of a Drive activity.
            interface Actor {
                // An administrator.
                administrator?: any;
                // An anonymous user.
                anonymous?: any;
                // An account acting on behalf of another.
                impersonation?: Schema.Impersonation;
                // A non-user actor (i.e. system triggered).
                system?: Schema.SystemEvent;
                // An end user.
                user?: Schema.User;
            }
            // Activity in applications other than Drive.
            interface ApplicationReference {
                // The reference type corresponding to this event.
                type?: string;
            }
            // A comment with an assignment.
            interface Assignment {
                // The user to whom the comment was assigned.
                assignedUser?: Schema.User;
                // The sub-type of this event.
                subtype?: string;
            }
            // A change about comments on an object.
            interface Comment {
                // A change on an assignment.
                assignment?: Schema.Assignment;
                // Users who are mentioned in this comment.
                mentionedUsers?: Schema.User[];
                // A change on a regular posted comment.
                post?: Schema.Post;
                // A change on a suggestion.
                suggestion?: Schema.Suggestion;
            }
            // How the individual activities are consolidated. A set of activities may be consolidated into one combined activity if
            // they are related in some way, such as one actor performing the same action on multiple targets, or multiple actors
            // performing the same action on a single target. The strategy defines the rules for which activities are related.
            interface ConsolidationStrategy {
                // The individual activities are consolidated using the legacy strategy.
                legacy?: any;
                // The individual activities are not consolidated.
                none?: any;
            }
            // An object was created by copying an existing object.
            interface Copy {
                // The the original object.
                originalObject?: Schema.TargetReference;
            }
            // An object was created.
            interface Create {
                // If present, indicates the object was created by copying an existing Drive object.
                copy?: Schema.Copy;
                // If present, indicates the object was newly created (e.g. as a blank document), not derived from a Drive object or
                // external object.
                new?: any;
                // If present, indicates the object originated externally and was uploaded to Drive.
                upload?: any;
            }
            // A change in the object's data leak prevention status.
            interface DataLeakPreventionChange {
                // The type of Data Leak Prevention (DLP) change.
                type?: string;
            }
            // An object was deleted.
            interface Delete {
                // The type of delete action taken.
                type?: string;
            }
            // Information about a domain.
            interface Domain {
                // An opaque string used to identify this domain.
                legacyId?: string;
                // The name of the domain, e.g. "google.com".
                name?: string;
            }
            // Information about a shared drive.
            interface Drive {
                // The resource name of the shared drive. The format is "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific
                // collection ID for this resource name.
                name?: string;
                // The root of this shared drive.
                root?: Schema.DriveItem;
                // The title of the shared drive.
                title?: string;
            }
            // A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action
            // groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other
            // groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are
            // controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
            interface DriveActivity {
                // Details on all actions in this activity.
                actions?: Schema.Action[];
                // All actor(s) responsible for the activity.
                actors?: Schema.Actor[];
                // Key information about the primary action for this activity. This is either representative, or the most important, of all
                // actions in the activity, according to the ConsolidationStrategy in the request.
                primaryActionDetail?: Schema.ActionDetail;
                // All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target
                // immediately after the actions occurred.
                targets?: Schema.Target[];
                // The activity occurred over this time range.
                timeRange?: Schema.TimeRange;
                // The activity occurred at this specific time.
                timestamp?: string;
            }
            // A Drive item which is a folder.
            interface DriveFolder {
                // The type of Drive folder.
                type?: string;
            }
            // A Drive item, such as a file or folder.
            interface DriveItem {
                // The Drive item is a file.
                driveFile?: any;
                // The Drive item is a folder. Includes information about the type of folder.
                driveFolder?: Schema.DriveFolder;
                // This field is deprecated; please use the `driveFile` field instead.
                file?: any;
                // This field is deprecated; please use the `driveFolder` field instead.
                folder?: Schema.Folder;
                // The MIME type of the Drive item. See https://developers.google.com/drive/v3/web/mime-types.
                mimeType?: string;
                // The target Drive item. The format is "items/ITEM_ID".
                name?: string;
                // Information about the owner of this Drive item.
                owner?: Schema.Owner;
                // The title of the Drive item.
                title?: string;
            }
            // A lightweight reference to a Drive item, such as a file or folder.
            interface DriveItemReference {
                // The Drive item is a file.
                driveFile?: any;
                // The Drive item is a folder. Includes information about the type of folder.
                driveFolder?: Schema.DriveFolder;
                // This field is deprecated; please use the `driveFile` field instead.
                file?: any;
                // This field is deprecated; please use the `driveFolder` field instead.
                folder?: Schema.Folder;
                // The target Drive item. The format is "items/ITEM_ID".
                name?: string;
                // The title of the Drive item.
                title?: string;
            }
            // A lightweight reference to a shared drive.
            interface DriveReference {
                // The resource name of the shared drive. The format is "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific
                // collection ID for this resource name.
                name?: string;
                // The title of the shared drive.
                title?: string;
            }
            // A comment on a file.
            interface FileComment {
                // The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see
                // https://developers.google.com/drive/v3/reference/comments/get
                legacyCommentId?: string;
                // The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API
                // and references the first comment in a discussion; see https://developers.google.com/drive/v3/reference/comments/get
                legacyDiscussionId?: string;
                // The link to the discussion thread containing this comment, for example,
                // "https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID".
                linkToDiscussion?: string;
                // The Drive item containing this comment.
                parent?: Schema.DriveItem;
            }
            // This item is deprecated; please see `DriveFolder` instead.
            interface Folder {
                // This field is deprecated; please see `DriveFolder.type` instead.
                type?: string;
            }
            // Information about a group.
            interface Group {
                // The email address of the group.
                email?: string;
                // The title of the group.
                title?: string;
            }
            // Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is
            // not currently available.
            interface Impersonation {
                // The impersonated user.
                impersonatedUser?: Schema.User;
            }
            // A known user.
            interface KnownUser {
                // True if this is the user making the request.
                isCurrentUser?: boolean;
                // The identifier for this user that can be used with the People API to get more information. The format is
                // "people/ACCOUNT_ID". See https://developers.google.com/people/.
                personName?: string;
            }
            // An object was moved.
            interface Move {
                // The added parent object(s).
                addedParents?: Schema.TargetReference[];
                // The removed parent object(s).
                removedParents?: Schema.TargetReference[];
            }
            // Information about the owner of a Drive item.
            interface Owner {
                // The domain of the Drive item owner.
                domain?: Schema.Domain;
                // The drive that owns the item.
                drive?: Schema.DriveReference;
                // This field is deprecated; please use the `drive` field instead.
                teamDrive?: Schema.TeamDriveReference;
                // The user that owns the Drive item.
                user?: Schema.User;
            }
            // The permission setting of an object.
            interface Permission {
                // If true, the item can be discovered (e.g. in the user's "Shared with me" collection) without needing a link to the item.
                allowDiscovery?: boolean;
                // If set, this permission applies to anyone, even logged out users.
                anyone?: any;
                // The domain to whom this permission applies.
                domain?: Schema.Domain;
                // The group to whom this permission applies.
                group?: Schema.Group;
                // Indicates the Google Drive permissions role. The role determines a user's ability to read, write, and comment on items.
                role?: string;
                // The user to whom this permission applies.
                user?: Schema.User;
            }
            // A change of the permission setting on an item.
            interface PermissionChange {
                // The set of permissions added by this change.
                addedPermissions?: Schema.Permission[];
                // The set of permissions removed by this change.
                removedPermissions?: Schema.Permission[];
            }
            // A regular posted comment.
            interface Post {
                // The sub-type of this event.
                subtype?: string;
            }
            // The request message for querying Drive activity.
            interface QueryDriveActivityRequest {
                // Return activities for this Drive folder and all children and descendants. The format is "items/ITEM_ID".
                ancestorName?: string;
                // Details on how to consolidate related actions that make up the activity. If not set, then related actions are not
                // consolidated.
                consolidationStrategy?: Schema.ConsolidationStrategy;
                // The filtering for items returned from this query request. The format of the filter string is a sequence of expressions,
                // joined by an optional "AND", where each expression is of the form "field operator value". Supported fields: - time: Uses
                // numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: -
                // time > 1452409200000 AND time <= 1492812924310 - time >= "2016-01-10T01:02:03-05:00" - detail.action_detail_case: Uses
                // the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses. Examples:
                // - detail.action_detail_case: RENAME - detail.action_detail_case:(CREATE EDIT) - -detail.action_detail_case:MOVE
                filter?: string;
                // Return activities for this Drive item. The format is "items/ITEM_ID".
                itemName?: string;
                // The miminum number of activities desired in the response; the server will attempt to return at least this quanitity. The
                // server may also return fewer activities if it has a partial response ready before the request times out. If not set, a
                // default value is used.
                pageSize?: Integer;
                // The token identifying which page of results to return. Set this to the next_page_token value returned from a previous
                // query to obtain the following page of results. If not set, the first page of results will be returned.
                pageToken?: string;
            }
            // Response message for querying Drive activity.
            interface QueryDriveActivityResponse {
                // List of activity requested.
                activities?: Schema.DriveActivity[];
                // Token to retrieve the next page of results, or empty if there are no more results in the list.
                nextPageToken?: string;
            }
            // An object was renamed.
            interface Rename {
                // The new title of the drive object.
                newTitle?: string;
                // The previous title of the drive object.
                oldTitle?: string;
            }
            // A deleted object was restored.
            interface Restore {
                // The type of restore action taken.
                type?: string;
            }
            // Information about restriction policy changes to a feature.
            interface RestrictionChange {
                // The feature which had a change in restriction policy.
                feature?: string;
                // The restriction in place after the change.
                newRestriction?: string;
            }
            // Information about settings changes.
            interface SettingsChange {
                // The set of changes made to restrictions.
                restrictionChanges?: Schema.RestrictionChange[];
            }
            // A suggestion.
            interface Suggestion {
                // The sub-type of this event.
                subtype?: string;
            }
            // Event triggered by system operations instead of end users.
            interface SystemEvent {
                // The type of the system event that may triggered activity.
                type?: string;
            }
            // Information about the target of activity.
            interface Target {
                // The target is a shared drive.
                drive?: Schema.Drive;
                // The target is a Drive item.
                driveItem?: Schema.DriveItem;
                // The target is a comment on a Drive file.
                fileComment?: Schema.FileComment;
                // This field is deprecated; please use the `drive` field instead.
                teamDrive?: Schema.TeamDrive;
            }
            // A lightweight reference to the target of activity.
            interface TargetReference {
                // The target is a shared drive.
                drive?: Schema.DriveReference;
                // The target is a Drive item.
                driveItem?: Schema.DriveItemReference;
                // This field is deprecated; please use the `drive` field instead.
                teamDrive?: Schema.TeamDriveReference;
            }
            // This item is deprecated; please see `Drive` instead.
            interface TeamDrive {
                // This field is deprecated; please see `Drive.name` instead.
                name?: string;
                // This field is deprecated; please see `Drive.root` instead.
                root?: Schema.DriveItem;
                // This field is deprecated; please see `Drive.title` instead.
                title?: string;
            }
            // This item is deprecated; please see `DriveReference` instead.
            interface TeamDriveReference {
                // This field is deprecated; please see `DriveReference.name` instead.
                name?: string;
                // This field is deprecated; please see `DriveReference.title` instead.
                title?: string;
            }
            // Information about time ranges.
            interface TimeRange {
                // The end of the time range.
                endTime?: string;
                // The start of the time range.
                startTime?: string;
            }
            // Information about an end user.
            interface User {
                // A user whose account has since been deleted.
                deletedUser?: any;
                // A known user.
                knownUser?: Schema.KnownUser;
                // A user about whom nothing is currently known.
                unknownUser?: any;
            }
        }
    }
    // Provides a historical view of activity in Google Drive.
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
declare const DriveActivity: GoogleAppsScript.DriveActivity;
