declare namespace GoogleAppsScript {
    namespace DriveActivity {
        namespace Collection {
            interface ActivityCollection {
                query(
                    $resource: DriveActivity.Schema.QueryDriveActivityRequest,
                ): DriveActivity.Schema.QueryDriveActivityResponse;
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
                appliedLabelChange?: DriveActivity.Schema.AppliedLabelChange | undefined;
                comment?: DriveActivity.Schema.Comment | undefined;
                create?: DriveActivity.Schema.Create | undefined;
                delete?: DriveActivity.Schema.Delete | undefined;
                dlpChange?: DriveActivity.Schema.DataLeakPreventionChange | undefined;
                edit?: DriveActivity.Schema.Edit | undefined;
                move?: DriveActivity.Schema.Move | undefined;
                permissionChange?: DriveActivity.Schema.PermissionChange | undefined;
                reference?: DriveActivity.Schema.ApplicationReference | undefined;
                rename?: DriveActivity.Schema.Rename | undefined;
                restore?: DriveActivity.Schema.Restore | undefined;
                settingsChange?: DriveActivity.Schema.SettingsChange | undefined;
            }
            interface Actor {
                administrator?: DriveActivity.Schema.Administrator | undefined;
                anonymous?: DriveActivity.Schema.AnonymousUser | undefined;
                impersonation?: DriveActivity.Schema.Impersonation | undefined;
                system?: DriveActivity.Schema.SystemEvent | undefined;
                user?: DriveActivity.Schema.User | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface Administrator {
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface AnonymousUser {
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface Anyone {
            }
            interface ApplicationReference {
                type?: "UNSPECIFIED_REFERENCE_TYPE" | "LINK" | "DISCUSS" | undefined;
            }
            interface AppliedLabelChange {
                changes?: DriveActivity.Schema.AppliedLabelChangeDetail[] | undefined;
            }
            interface AppliedLabelChangeDetail {
                fieldChanges?: DriveActivity.Schema.FieldValueChange[] | undefined;
                label?: string | undefined;
                title?: string | undefined;
                types?:
                    | Array<
                        | "TYPE_UNSPECIFIED"
                        | "LABEL_ADDED"
                        | "LABEL_REMOVED"
                        | "LABEL_FIELD_VALUE_CHANGED"
                        | "LABEL_APPLIED_BY_ITEM_CREATE"
                    >
                    | undefined;
            }
            interface Assignment {
                assignedUser?: DriveActivity.Schema.User | undefined;
                subtype?:
                    | "SUBTYPE_UNSPECIFIED"
                    | "ADDED"
                    | "DELETED"
                    | "REPLY_ADDED"
                    | "REPLY_DELETED"
                    | "RESOLVED"
                    | "REOPENED"
                    | "REASSIGNED"
                    | undefined;
            }
            interface Comment {
                assignment?: DriveActivity.Schema.Assignment | undefined;
                mentionedUsers?: DriveActivity.Schema.User[] | undefined;
                post?: DriveActivity.Schema.Post | undefined;
                suggestion?: DriveActivity.Schema.Suggestion | undefined;
            }
            interface ConsolidationStrategy {
                legacy?: DriveActivity.Schema.Legacy | undefined;
                none?: DriveActivity.Schema.NoConsolidation | undefined;
            }
            interface Copy {
                originalObject?: DriveActivity.Schema.TargetReference | undefined;
            }
            interface Create {
                copy?: DriveActivity.Schema.Copy | undefined;
                new?: DriveActivity.Schema.New | undefined;
                upload?: DriveActivity.Schema.Upload | undefined;
            }
            interface DataLeakPreventionChange {
                type?: "TYPE_UNSPECIFIED" | "FLAGGED" | "CLEARED" | undefined;
            }
            interface Date {
                value?: string | undefined;
            }
            interface Delete {
                type?: "TYPE_UNSPECIFIED" | "TRASH" | "PERMANENT_DELETE" | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface DeletedUser {
            }
            interface Domain {
                legacyId?: string | undefined;
                name?: string | undefined;
            }
            interface Drive {
                name?: string | undefined;
                root?: DriveActivity.Schema.DriveItem | undefined;
                title?: string | undefined;
            }
            interface DriveActivity {
                actions?: DriveActivity.Schema.Action[] | undefined;
                actors?: DriveActivity.Schema.Actor[] | undefined;
                primaryActionDetail?: DriveActivity.Schema.ActionDetail | undefined;
                targets?: DriveActivity.Schema.Target[] | undefined;
                timeRange?: DriveActivity.Schema.TimeRange | undefined;
                timestamp?: string | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface DriveFile {
            }
            interface DriveFolder {
                type?: "TYPE_UNSPECIFIED" | "MY_DRIVE_ROOT" | "SHARED_DRIVE_ROOT" | "STANDARD_FOLDER" | undefined;
            }
            interface DriveItem {
                driveFile?: DriveActivity.Schema.DriveFile | undefined;
                driveFolder?: DriveActivity.Schema.DriveFolder | undefined;
                file?: DriveActivity.Schema.File | undefined;
                folder?: DriveActivity.Schema.Folder | undefined;
                mimeType?: string | undefined;
                name?: string | undefined;
                owner?: DriveActivity.Schema.Owner | undefined;
                title?: string | undefined;
            }
            interface DriveItemReference {
                driveFile?: DriveActivity.Schema.DriveFile | undefined;
                driveFolder?: DriveActivity.Schema.DriveFolder | undefined;
                file?: DriveActivity.Schema.File | undefined;
                folder?: DriveActivity.Schema.Folder | undefined;
                name?: string | undefined;
                title?: string | undefined;
            }
            interface DriveReference {
                name?: string | undefined;
                title?: string | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface Edit {
            }
            interface FieldValue {
                date?: DriveActivity.Schema.Date | undefined;
                integer?: DriveActivity.Schema.Integer | undefined;
                selection?: DriveActivity.Schema.Selection | undefined;
                selectionList?: DriveActivity.Schema.SelectionList | undefined;
                text?: DriveActivity.Schema.Text | undefined;
                textList?: DriveActivity.Schema.TextList | undefined;
                user?: DriveActivity.Schema.SingleUser | undefined;
                userList?: DriveActivity.Schema.UserList | undefined;
            }
            interface FieldValueChange {
                displayName?: string | undefined;
                fieldId?: string | undefined;
                newValue?: DriveActivity.Schema.FieldValue | undefined;
                oldValue?: DriveActivity.Schema.FieldValue | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface File {
            }
            interface FileComment {
                legacyCommentId?: string | undefined;
                legacyDiscussionId?: string | undefined;
                linkToDiscussion?: string | undefined;
                parent?: DriveActivity.Schema.DriveItem | undefined;
            }
            interface Folder {
                type?: "TYPE_UNSPECIFIED" | "MY_DRIVE_ROOT" | "TEAM_DRIVE_ROOT" | "STANDARD_FOLDER" | undefined;
            }
            interface Group {
                email?: string | undefined;
                title?: string | undefined;
            }
            interface Impersonation {
                impersonatedUser?: DriveActivity.Schema.User | undefined;
            }
            interface Integer {
                value?: string | undefined;
            }
            interface KnownUser {
                isCurrentUser?: boolean | undefined;
                personName?: string | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface Legacy {
            }
            interface Move {
                addedParents?: DriveActivity.Schema.TargetReference[] | undefined;
                removedParents?: DriveActivity.Schema.TargetReference[] | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface New {
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface NoConsolidation {
            }
            interface Owner {
                domain?: DriveActivity.Schema.Domain | undefined;
                drive?: DriveActivity.Schema.DriveReference | undefined;
                teamDrive?: DriveActivity.Schema.TeamDriveReference | undefined;
                user?: DriveActivity.Schema.User | undefined;
            }
            interface Permission {
                allowDiscovery?: boolean | undefined;
                anyone?: DriveActivity.Schema.Anyone | undefined;
                domain?: DriveActivity.Schema.Domain | undefined;
                group?: DriveActivity.Schema.Group | undefined;
                role?:
                    | "ROLE_UNSPECIFIED"
                    | "OWNER"
                    | "ORGANIZER"
                    | "FILE_ORGANIZER"
                    | "EDITOR"
                    | "COMMENTER"
                    | "VIEWER"
                    | "PUBLISHED_VIEWER"
                    | undefined;
                user?: DriveActivity.Schema.User | undefined;
            }
            interface PermissionChange {
                addedPermissions?: DriveActivity.Schema.Permission[] | undefined;
                removedPermissions?: DriveActivity.Schema.Permission[] | undefined;
            }
            interface Post {
                subtype?:
                    | "SUBTYPE_UNSPECIFIED"
                    | "ADDED"
                    | "DELETED"
                    | "REPLY_ADDED"
                    | "REPLY_DELETED"
                    | "RESOLVED"
                    | "REOPENED"
                    | undefined;
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
                type?: "TYPE_UNSPECIFIED" | "UNTRASH" | undefined;
            }
            interface RestrictionChange {
                feature?:
                    | "FEATURE_UNSPECIFIED"
                    | "SHARING_OUTSIDE_DOMAIN"
                    | "DIRECT_SHARING"
                    | "ITEM_DUPLICATION"
                    | "DRIVE_FILE_STREAM"
                    | "FILE_ORGANIZER_CAN_SHARE_FOLDERS"
                    | "READERS_CAN_DOWNLOAD"
                    | "WRITERS_CAN_DOWNLOAD"
                    | undefined;
                newRestriction?: "RESTRICTION_UNSPECIFIED" | "UNRESTRICTED" | "FULLY_RESTRICTED" | undefined;
            }
            interface Selection {
                displayName?: string | undefined;
                value?: string | undefined;
            }
            interface SelectionList {
                values?: DriveActivity.Schema.Selection[] | undefined;
            }
            interface SettingsChange {
                restrictionChanges?: DriveActivity.Schema.RestrictionChange[] | undefined;
            }
            interface SingleUser {
                value?: string | undefined;
            }
            interface Suggestion {
                subtype?:
                    | "SUBTYPE_UNSPECIFIED"
                    | "ADDED"
                    | "DELETED"
                    | "REPLY_ADDED"
                    | "REPLY_DELETED"
                    | "ACCEPTED"
                    | "REJECTED"
                    | "ACCEPT_DELETED"
                    | "REJECT_DELETED"
                    | undefined;
            }
            interface SystemEvent {
                type?: "TYPE_UNSPECIFIED" | "USER_DELETION" | "TRASH_AUTO_PURGE" | undefined;
            }
            interface Target {
                drive?: DriveActivity.Schema.Drive | undefined;
                driveItem?: DriveActivity.Schema.DriveItem | undefined;
                fileComment?: DriveActivity.Schema.FileComment | undefined;
                teamDrive?: DriveActivity.Schema.TeamDrive | undefined;
            }
            interface TargetReference {
                drive?: DriveActivity.Schema.DriveReference | undefined;
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
            interface Text {
                value?: string | undefined;
            }
            interface TextList {
                values?: DriveActivity.Schema.Text[] | undefined;
            }
            interface TimeRange {
                endTime?: string | undefined;
                startTime?: string | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface UnknownUser {
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface Upload {
            }
            interface User {
                deletedUser?: DriveActivity.Schema.DeletedUser | undefined;
                knownUser?: DriveActivity.Schema.KnownUser | undefined;
                unknownUser?: DriveActivity.Schema.UnknownUser | undefined;
            }
            interface UserList {
                values?: DriveActivity.Schema.SingleUser[] | undefined;
            }
        }
    }
    interface DriveActivity {
        Activity: DriveActivity.Collection.ActivityCollection;
        // Create a new instance of ConsolidationStrategy
        newConsolidationStrategy(): DriveActivity.Schema.ConsolidationStrategy;
        // Create a new instance of Legacy
        newLegacy(): DriveActivity.Schema.Legacy;
        // Create a new instance of NoConsolidation
        newNoConsolidation(): DriveActivity.Schema.NoConsolidation;
        // Create a new instance of QueryDriveActivityRequest
        newQueryDriveActivityRequest(): DriveActivity.Schema.QueryDriveActivityRequest;
    }
}

/**
 * The `DriveActivity` advanced service must be enabled.
 */
declare var DriveActivity: GoogleAppsScript.DriveActivity | undefined;
