// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Drive {
        namespace Collection {
            interface AboutCollection {
                // Gets the information about the current user along with Drive API settings
                get(): Schema.About;
                // Gets the information about the current user along with Drive API settings
                get(optionalArgs: object): Schema.About;
            }
            interface AppsCollection {
                // Gets a specific app.
                get(appId: string): Schema.App;
                // Lists a user's installed apps.
                list(): Schema.AppList;
                // Lists a user's installed apps.
                list(optionalArgs: object): Schema.AppList;
            }
            interface ChangesCollection {
                // Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
                get(changeId: string): Schema.Change;
                // Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
                get(changeId: string, optionalArgs: object): Schema.Change;
                // Gets the starting pageToken for listing future changes.
                getStartPageToken(): Schema.StartPageToken;
                // Gets the starting pageToken for listing future changes.
                getStartPageToken(optionalArgs: object): Schema.StartPageToken;
                // Lists the changes for a user or shared drive.
                list(): Schema.ChangeList;
                // Lists the changes for a user or shared drive.
                list(optionalArgs: object): Schema.ChangeList;
                // Subscribe to changes for a user.
                watch(resource: Schema.Channel): Schema.Channel;
                // Subscribe to changes for a user.
                watch(resource: Schema.Channel, optionalArgs: object): Schema.Channel;
            }
            interface ChannelsCollection {
                // Stop watching resources through this channel
                stop(resource: Schema.Channel): void;
            }
            interface ChildrenCollection {
                // Gets a specific child reference.
                get(folderId: string, childId: string): Schema.ChildReference;
                // Inserts a file into a folder.
                insert(resource: Schema.ChildReference, folderId: string): Schema.ChildReference;
                // Inserts a file into a folder.
                insert(resource: Schema.ChildReference, folderId: string, optionalArgs: object): Schema.ChildReference;
                // Lists a folder's children.
                list(folderId: string): Schema.ChildList;
                // Lists a folder's children.
                list(folderId: string, optionalArgs: object): Schema.ChildList;
                // Removes a child from a folder.
                remove(folderId: string, childId: string): void;
                // Removes a child from a folder.
                remove(folderId: string, childId: string, optionalArgs: object): void;
            }
            interface CommentsCollection {
                // Gets a comment by ID.
                get(fileId: string, commentId: string): Schema.Comment;
                // Gets a comment by ID.
                get(fileId: string, commentId: string, optionalArgs: object): Schema.Comment;
                // Creates a new comment on the given file.
                insert(resource: Schema.Comment, fileId: string): Schema.Comment;
                // Lists a file's comments.
                list(fileId: string): Schema.CommentList;
                // Lists a file's comments.
                list(fileId: string, optionalArgs: object): Schema.CommentList;
                // Updates an existing comment.
                patch(resource: Schema.Comment, fileId: string, commentId: string): Schema.Comment;
                // Deletes a comment.
                remove(fileId: string, commentId: string): void;
                // Updates an existing comment.
                update(resource: Schema.Comment, fileId: string, commentId: string): Schema.Comment;
            }
            interface DrivesCollection {
                // Gets a shared drive's metadata by ID.
                get(driveId: string): Schema.Drive;
                // Gets a shared drive's metadata by ID.
                get(driveId: string, optionalArgs: object): Schema.Drive;
                // Hides a shared drive from the default view.
                hide(driveId: string): Schema.Drive;
                // Creates a new shared drive.
                insert(resource: Schema.Drive, requestId: string): Schema.Drive;
                // Lists the user's shared drives.
                list(): Schema.DriveList;
                // Lists the user's shared drives.
                list(optionalArgs: object): Schema.DriveList;
                // Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed
                // items.
                remove(driveId: string): void;
                // Restores a shared drive to the default view.
                unhide(driveId: string): Schema.Drive;
                // Updates the metadata for a shared drive.
                update(resource: Schema.Drive, driveId: string): Schema.Drive;
                // Updates the metadata for a shared drive.
                update(resource: Schema.Drive, driveId: string, optionalArgs: object): Schema.Drive;
            }
            interface FilesCollection {
                // Creates a copy of the specified file. Folders cannot be copied.
                copy(resource: Schema.File, fileId: string): Schema.File;
                // Creates a copy of the specified file. Folders cannot be copied.
                copy(resource: Schema.File, fileId: string, optionalArgs: object): Schema.File;
                // Permanently deletes all of the user's trashed files.
                emptyTrash(): void;
                // Permanently deletes all of the user's trashed files.
                emptyTrash(optionalArgs: object): void;
                // Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content
                // is limited to 10MB.
                export(fileId: string, mimeType: string): void;
                // Generates a set of file IDs which can be provided in insert or copy requests.
                generateIds(): Schema.GeneratedIds;
                // Generates a set of file IDs which can be provided in insert or copy requests.
                generateIds(optionalArgs: object): Schema.GeneratedIds;
                // Gets a file's metadata by ID.
                get(fileId: string): Schema.File;
                // Gets a file's metadata by ID.
                get(fileId: string, optionalArgs: object): Schema.File;
                // Insert a new file.
                insert(resource: Schema.File): Schema.File;
                // Insert a new file.
                insert(resource: Schema.File, mediaData: Base.Blob): Schema.File;
                // Insert a new file.
                insert(resource: Schema.File, mediaData: Base.Blob, optionalArgs: object): Schema.File;
                // Lists the user's files.
                list(): Schema.FileList;
                // Lists the user's files.
                list(optionalArgs: object): Schema.FileList;
                // Updates file metadata and/or content. This method supports patch semantics.
                patch(resource: Schema.File, fileId: string): Schema.File;
                // Updates file metadata and/or content. This method supports patch semantics.
                patch(resource: Schema.File, fileId: string, optionalArgs: object): Schema.File;
                // Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer
                // on the parent for shared drive files.
                remove(fileId: string): void;
                // Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer
                // on the parent for shared drive files.
                remove(fileId: string, optionalArgs: object): void;
                // Set the file's updated time to the current server time.
                touch(fileId: string): Schema.File;
                // Set the file's updated time to the current server time.
                touch(fileId: string, optionalArgs: object): Schema.File;
                // Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the
                // parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list
                // responses returned for any user who does not own the file. However, all users with access to the file can see the
                // trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
                trash(fileId: string): Schema.File;
                // Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the
                // parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list
                // responses returned for any user who does not own the file. However, all users with access to the file can see the
                // trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
                trash(fileId: string, optionalArgs: object): Schema.File;
                // Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the
                // parent for shared drive files. Only the owner may untrash a file.
                untrash(fileId: string): Schema.File;
                // Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the
                // parent for shared drive files. Only the owner may untrash a file.
                untrash(fileId: string, optionalArgs: object): Schema.File;
                // Updates file metadata and/or content.
                update(resource: Schema.File, fileId: string): Schema.File;
                // Updates file metadata and/or content.
                update(resource: Schema.File, fileId: string, mediaData: Base.Blob): Schema.File;
                // Updates file metadata and/or content.
                update(resource: Schema.File, fileId: string, mediaData: Base.Blob, optionalArgs: object): Schema.File;
                // Subscribe to changes on a file
                watch(resource: Schema.Channel, fileId: string): Schema.Channel;
                // Subscribe to changes on a file
                watch(resource: Schema.Channel, fileId: string, optionalArgs: object): Schema.Channel;
            }
            interface ParentsCollection {
                // Gets a specific parent reference.
                get(fileId: string, parentId: string): Schema.ParentReference;
                // Adds a parent folder for a file.
                insert(resource: Schema.ParentReference, fileId: string): Schema.ParentReference;
                // Adds a parent folder for a file.
                insert(resource: Schema.ParentReference, fileId: string, optionalArgs: object): Schema.ParentReference;
                // Lists a file's parents.
                list(fileId: string): Schema.ParentList;
                // Removes a parent from a file.
                remove(fileId: string, parentId: string): void;
                // Removes a parent from a file.
                remove(fileId: string, parentId: string, optionalArgs: object): void;
            }
            interface PermissionsCollection {
                // Gets a permission by ID.
                get(fileId: string, permissionId: string): Schema.Permission;
                // Gets a permission by ID.
                get(fileId: string, permissionId: string, optionalArgs: object): Schema.Permission;
                // Returns the permission ID for an email address.
                getIdForEmail(email: string): Schema.PermissionId;
                // Inserts a permission for a file or shared drive.
                insert(resource: Schema.Permission, fileId: string): Schema.Permission;
                // Inserts a permission for a file or shared drive.
                insert(resource: Schema.Permission, fileId: string, optionalArgs: object): Schema.Permission;
                // Lists a file's or shared drive's permissions.
                list(fileId: string): Schema.PermissionList;
                // Lists a file's or shared drive's permissions.
                list(fileId: string, optionalArgs: object): Schema.PermissionList;
                // Updates a permission using patch semantics.
                patch(resource: Schema.Permission, fileId: string, permissionId: string): Schema.Permission;
                // Updates a permission using patch semantics.
                patch(resource: Schema.Permission, fileId: string, permissionId: string, optionalArgs: object): Schema.Permission;
                // Deletes a permission from a file or shared drive.
                remove(fileId: string, permissionId: string): void;
                // Deletes a permission from a file or shared drive.
                remove(fileId: string, permissionId: string, optionalArgs: object): void;
                // Updates a permission.
                update(resource: Schema.Permission, fileId: string, permissionId: string): Schema.Permission;
                // Updates a permission.
                update(resource: Schema.Permission, fileId: string, permissionId: string, optionalArgs: object): Schema.Permission;
            }
            interface PropertiesCollection {
                // Gets a property by its key.
                get(fileId: string, propertyKey: string): Schema.Property;
                // Gets a property by its key.
                get(fileId: string, propertyKey: string, optionalArgs: object): Schema.Property;
                // Adds a property to a file, or updates it if it already exists.
                insert(resource: Schema.Property, fileId: string): Schema.Property;
                // Lists a file's properties.
                list(fileId: string): Schema.PropertyList;
                // Updates a property.
                patch(resource: Schema.Property, fileId: string, propertyKey: string): Schema.Property;
                // Updates a property.
                patch(resource: Schema.Property, fileId: string, propertyKey: string, optionalArgs: object): Schema.Property;
                // Deletes a property.
                remove(fileId: string, propertyKey: string): void;
                // Deletes a property.
                remove(fileId: string, propertyKey: string, optionalArgs: object): void;
                // Updates a property.
                update(resource: Schema.Property, fileId: string, propertyKey: string): Schema.Property;
                // Updates a property.
                update(resource: Schema.Property, fileId: string, propertyKey: string, optionalArgs: object): Schema.Property;
            }
            interface RepliesCollection {
                // Gets a reply.
                get(fileId: string, commentId: string, replyId: string): Schema.CommentReply;
                // Gets a reply.
                get(fileId: string, commentId: string, replyId: string, optionalArgs: object): Schema.CommentReply;
                // Creates a new reply to the given comment.
                insert(resource: Schema.CommentReply, fileId: string, commentId: string): Schema.CommentReply;
                // Lists all of the replies to a comment.
                list(fileId: string, commentId: string): Schema.CommentReplyList;
                // Lists all of the replies to a comment.
                list(fileId: string, commentId: string, optionalArgs: object): Schema.CommentReplyList;
                // Updates an existing reply.
                patch(resource: Schema.CommentReply, fileId: string, commentId: string, replyId: string): Schema.CommentReply;
                // Deletes a reply.
                remove(fileId: string, commentId: string, replyId: string): void;
                // Updates an existing reply.
                update(resource: Schema.CommentReply, fileId: string, commentId: string, replyId: string): Schema.CommentReply;
            }
            interface RevisionsCollection {
                // Gets a specific revision.
                get(fileId: string, revisionId: string): Schema.Revision;
                // Lists a file's revisions.
                list(fileId: string): Schema.RevisionList;
                // Lists a file's revisions.
                list(fileId: string, optionalArgs: object): Schema.RevisionList;
                // Updates a revision.
                patch(resource: Schema.Revision, fileId: string, revisionId: string): Schema.Revision;
                // Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos.
                // Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
                remove(fileId: string, revisionId: string): void;
                // Updates a revision.
                update(resource: Schema.Revision, fileId: string, revisionId: string): Schema.Revision;
            }
            interface TeamdrivesCollection {
                // Deprecated use drives.get instead.
                get(teamDriveId: string): Schema.TeamDrive;
                // Deprecated use drives.get instead.
                get(teamDriveId: string, optionalArgs: object): Schema.TeamDrive;
                // Deprecated use drives.insert instead.
                insert(resource: Schema.TeamDrive, requestId: string): Schema.TeamDrive;
                // Deprecated use drives.list instead.
                list(): Schema.TeamDriveList;
                // Deprecated use drives.list instead.
                list(optionalArgs: object): Schema.TeamDriveList;
                // Deprecated use drives.delete instead.
                remove(teamDriveId: string): void;
                // Deprecated use drives.update instead.
                update(resource: Schema.TeamDrive, teamDriveId: string): Schema.TeamDrive;
                // Deprecated use drives.update instead.
                update(resource: Schema.TeamDrive, teamDriveId: string, optionalArgs: object): Schema.TeamDrive;
            }
        }
        namespace Schema {
            // An item with user information and settings.
            interface About {
                // Information about supported additional roles per file type. The most specific type takes precedence.
                additionalRoleInfo?: Schema.AboutAdditionalRoleInfo[];
                // Whether the user can create shared drives.
                canCreateDrives?: boolean;
                // Deprecated - use canCreateDrives instead.
                canCreateTeamDrives?: boolean;
                // The domain sharing policy for the current user. Possible values are:
                // - allowed
                // - allowedWithWarning
                // - incomingOnly
                // - disallowed
                domainSharingPolicy?: string;
                // A list of themes that are supported for shared drives.
                driveThemes?: Schema.AboutDriveThemes[];
                // The ETag of the item.
                etag?: string;
                // The allowable export formats.
                exportFormats?: Schema.AboutExportFormats[];
                // List of additional features enabled on this account.
                features?: Schema.AboutFeatures[];
                // The palette of allowable folder colors as RGB hex strings.
                folderColorPalette?: string[];
                // The allowable import formats.
                importFormats?: Schema.AboutImportFormats[];
                // A boolean indicating whether the authenticated app is installed by the authenticated user.
                isCurrentAppInstalled?: boolean;
                // This is always drive#about.
                kind?: string;
                // The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format
                // (http://www.unicode.org/reports/tr35/).
                languageCode?: string;
                // The largest change id.
                largestChangeId?: string;
                // List of max upload sizes for each file type. The most specific type takes precedence.
                maxUploadSizes?: Schema.AboutMaxUploadSizes[];
                // The name of the current user.
                name?: string;
                // The current user's ID as visible in the permissions collection.
                permissionId?: string;
                // The amount of storage quota used by different Google services.
                quotaBytesByService?: Schema.AboutQuotaBytesByService[];
                // The total number of quota bytes. This is only relevant when quotaType is LIMITED.
                quotaBytesTotal?: string;
                // The number of quota bytes used by Google Drive.
                quotaBytesUsed?: string;
                // The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
                quotaBytesUsedAggregate?: string;
                // The number of quota bytes used by trashed items.
                quotaBytesUsedInTrash?: string;
                // The type of the user's storage quota. Possible values are:
                // - LIMITED
                // - UNLIMITED
                quotaType?: string;
                // The number of remaining change ids, limited to no more than 2500.
                remainingChangeIds?: string;
                // The id of the root folder.
                rootFolderId?: string;
                // A link back to this item.
                selfLink?: string;
                // Deprecated - use driveThemes instead.
                teamDriveThemes?: Schema.AboutTeamDriveThemes[];
                // The authenticated user.
                user?: Schema.User;
            }
            interface AboutAdditionalRoleInfo {
                // The supported additional roles per primary role.
                roleSets?: Schema.AboutAdditionalRoleInfoRoleSets[];
                // The content type that this additional role info applies to.
                type?: string;
            }
            interface AboutAdditionalRoleInfoRoleSets {
                // The supported additional roles with the primary role.
                additionalRoles?: string[];
                // A primary permission role.
                primaryRole?: string;
            }
            interface AboutDriveThemes {
                // A link to this theme's background image.
                backgroundImageLink?: string;
                // The color of this theme as an RGB hex string.
                colorRgb?: string;
                // The ID of the theme.
                id?: string;
            }
            interface AboutExportFormats {
                // The content type to convert from.
                source?: string;
                // The possible content types to convert to.
                targets?: string[];
            }
            interface AboutFeatures {
                // The name of the feature.
                featureName?: string;
                // The request limit rate for this feature, in queries per second.
                featureRate?: number;
            }
            interface AboutImportFormats {
                // The imported file's content type to convert from.
                source?: string;
                // The possible content types to convert to.
                targets?: string[];
            }
            interface AboutMaxUploadSizes {
                // The max upload size for this type.
                size?: string;
                // The file type.
                type?: string;
            }
            interface AboutQuotaBytesByService {
                // The storage quota bytes used by the service.
                bytesUsed?: string;
                // The service's name, e.g. DRIVE, GMAIL, or PHOTOS.
                serviceName?: string;
            }
            interface AboutTeamDriveThemes {
                // Deprecated - use driveThemes/backgroundImageLink instead.
                backgroundImageLink?: string;
                // Deprecated - use driveThemes/colorRgb instead.
                colorRgb?: string;
                // Deprecated - use driveThemes/id instead.
                id?: string;
            }
            // The apps resource provides a list of the apps that a user has installed, with information about each app's supported
            // MIME types, file extensions, and other details.
            interface App {
                // Whether the app is authorized to access data on the user's Drive.
                authorized?: boolean;
                // The template url to create a new file with this app in a given folder. The template will contain {folderId} to be
                // replaced by the folder to create the new file in.
                createInFolderTemplate?: string;
                // The url to create a new file with this app.
                createUrl?: string;
                // Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.
                hasDriveWideScope?: boolean;
                // The various icons for the app.
                icons?: Schema.AppIcons[];
                // The ID of the app.
                id?: string;
                // Whether the app is installed.
                installed?: boolean;
                // This is always drive#app.
                kind?: string;
                // A long description of the app.
                longDescription?: string;
                // The name of the app.
                name?: string;
                // The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
                objectType?: string;
                // The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by
                // the actual file ids. See  Open Files  for the full documentation.
                openUrlTemplate?: string;
                // The list of primary file extensions.
                primaryFileExtensions?: string[];
                // The list of primary mime types.
                primaryMimeTypes?: string[];
                // The ID of the product listing for this app.
                productId?: string;
                // A link to the product listing for this app.
                productUrl?: string;
                // The list of secondary file extensions.
                secondaryFileExtensions?: string[];
                // The list of secondary mime types.
                secondaryMimeTypes?: string[];
                // A short description of the app.
                shortDescription?: string;
                // Whether this app supports creating new objects.
                supportsCreate?: boolean;
                // Whether this app supports importing from Docs Editors.
                supportsImport?: boolean;
                // Whether this app supports opening more than one file.
                supportsMultiOpen?: boolean;
                // Whether this app supports creating new files when offline.
                supportsOfflineCreate?: boolean;
                // Whether the app is selected as the default handler for the types it supports.
                useByDefault?: boolean;
            }
            interface AppIcons {
                // Category of the icon. Allowed values are:
                // - application - icon for the application
                // - document - icon for a file associated with the app
                // - documentShared - icon for a shared file associated with the app
                category?: string;
                // URL for the icon.
                iconUrl?: string;
                // Size of the icon. Represented as the maximum of the width and height.
                size?: Integer;
            }
            // A list of third-party applications which the user has installed or given access to Google Drive.
            interface AppList {
                // List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to
                // highest).
                defaultAppIds?: string[];
                // The ETag of the list.
                etag?: string;
                // The list of apps.
                items?: Schema.App[];
                // This is always drive#appList.
                kind?: string;
                // A link back to this list.
                selfLink?: string;
            }
            // Representation of a change to a file or shared drive.
            interface Change {
                // The type of the change. Possible values are file and drive.
                changeType?: string;
                // Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
                deleted?: boolean;
                // The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared
                // drive, and the shared drive has not been deleted.
                drive?: Schema.Drive;
                // The ID of the shared drive associated with this change.
                driveId?: string;
                // The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
                file?: Schema.File;
                // The ID of the file associated with this change.
                fileId?: string;
                // The ID of the change.
                id?: string;
                // This is always drive#change.
                kind?: string;
                // The time of this modification.
                modificationDate?: string;
                // A link back to this change.
                selfLink?: string;
                // Deprecated - use drive instead.
                teamDrive?: Schema.TeamDrive;
                // Deprecated - use driveId instead.
                teamDriveId?: string;
                // Deprecated - use changeType instead.
                type?: string;
            }
            // A list of changes for a user.
            interface ChangeList {
                // The ETag of the list.
                etag?: string;
                // The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results
                // should be fetched.
                items?: Schema.Change[];
                // This is always drive#changeList.
                kind?: string;
                // The current largest change ID.
                largestChangeId?: string;
                // The starting page token for future changes. This will be present only if the end of the current changes list has been
                // reached.
                newStartPageToken?: string;
                // A link to the next page of changes.
                nextLink?: string;
                // The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the
                // token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of
                // results.
                nextPageToken?: string;
                // A link back to this list.
                selfLink?: string;
            }
            // An notification channel used to watch for resource changes.
            interface Channel {
                // The address where notifications are delivered for this channel.
                address?: string;
                // Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
                expiration?: string;
                // A UUID or similar unique string that identifies this channel.
                id?: string;
                // Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
                kind?: string;
                // Additional parameters controlling delivery channel behavior. Optional.
                params?: object;
                // A Boolean value to indicate whether payload is wanted. Optional.
                payload?: boolean;
                // An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
                resourceId?: string;
                // A version-specific identifier for the watched resource.
                resourceUri?: string;
                // An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
                token?: string;
                // The type of delivery mechanism used for this channel.
                type?: string;
            }
            // A list of children of a file.
            interface ChildList {
                // The ETag of the list.
                etag?: string;
                // The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results
                // should be fetched.
                items?: Schema.ChildReference[];
                // This is always drive#childList.
                kind?: string;
                // A link to the next page of children.
                nextLink?: string;
                // The page token for the next page of children. This will be absent if the end of the children list has been reached. If
                // the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of
                // results.
                nextPageToken?: string;
                // A link back to this list.
                selfLink?: string;
            }
            // A reference to a folder's child.
            interface ChildReference {
                // A link to the child.
                childLink?: string;
                // The ID of the child.
                id?: string;
                // This is always drive#childReference.
                kind?: string;
                // A link back to this reference.
                selfLink?: string;
            }
            // A comment on a file in Google Drive.
            interface Comment {
                // A region of the document represented as a JSON string. See anchor documentation for details on how to define and
                // interpret anchor properties.
                anchor?: string;
                // The author of the comment. The author's email address and permission ID will not be populated.
                author?: Schema.User;
                // The ID of the comment.
                commentId?: string;
                // The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to
                // make edits to a comment's content.
                content?: string;
                // The context of the file which is being commented on.
                context?: Schema.CommentContext;
                // The date when this comment was first created.
                createdDate?: string;
                // Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only
                // represent a comment that once existed.
                deleted?: boolean;
                // The file which this comment is addressing.
                fileId?: string;
                // The title of the file which this comment is addressing.
                fileTitle?: string;
                // HTML formatted content for this comment.
                htmlContent?: string;
                // This is always drive#comment.
                kind?: string;
                // The date when this comment or any of its replies were last modified.
                modifiedDate?: string;
                // Replies to this post.
                replies?: Schema.CommentReply[];
                // A link back to this comment.
                selfLink?: string;
                // The status of this comment. Status can be changed by posting a reply to a comment with the desired status.
                // - "open" - The comment is still open.
                // - "resolved" - The comment has been resolved by one of its replies.
                status?: string;
            }
            // The context of the file which is being commented on.
            interface CommentContext {
                // The MIME type of the context snippet.
                type?: string;
                // Data representation of the segment of the file being commented on. In the case of a text file for example, this would be
                // the actual text that the comment is about.
                value?: string;
            }
            // A list of comments on a file in Google Drive.
            interface CommentList {
                // The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results
                // should be fetched.
                items?: Schema.Comment[];
                // This is always drive#commentList.
                kind?: string;
                // A link to the next page of comments.
                nextLink?: string;
                // The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If
                // the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of
                // results.
                nextPageToken?: string;
                // A link back to this list.
                selfLink?: string;
            }
            // A comment on a file in Google Drive.
            interface CommentReply {
                // The author of the reply. The author's email address and permission ID will not be populated.
                author?: Schema.User;
                // The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to
                // make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).
                content?: string;
                // The date when this reply was first created.
                createdDate?: string;
                // Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only
                // represent a reply that once existed.
                deleted?: boolean;
                // HTML formatted content for this reply.
                htmlContent?: string;
                // This is always drive#commentReply.
                kind?: string;
                // The date when this reply was last modified.
                modifiedDate?: string;
                // The ID of the reply.
                replyId?: string;
                // The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the
                // parent comment. Possible values are:
                // - "resolve" - To resolve a comment.
                // - "reopen" - To reopen (un-resolve) a comment.
                verb?: string;
            }
            // A list of replies to a comment on a file in Google Drive.
            interface CommentReplyList {
                // The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results
                // should be fetched.
                items?: Schema.CommentReply[];
                // This is always drive#commentReplyList.
                kind?: string;
                // A link to the next page of replies.
                nextLink?: string;
                // The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the
                // token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of
                // results.
                nextPageToken?: string;
                // A link back to this list.
                selfLink?: string;
            }
            // A restriction for accessing the content of the file.
            interface ContentRestriction {
                // Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added,
                // comments may not be added or modified, and the title of the file may not be modified.
                readOnly?: boolean;
                // Reason for why the content of the file is restricted. This is only mutable on requests that also set readOnly=true.
                reason?: string;
                // The user who set the content restriction. Only populated if readOnly is true.
                restrictingUser?: Schema.User;
                // The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.
                restrictionDate?: string;
                // The type of the content restriction. Currently the only possible value is globalContentRestriction.
                type?: string;
            }
            // Representation of a shared drive.
            interface Drive {
                // An image file and cropping parameters from which a background image for this shared drive is set. This is a write only
                // field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the
                // backgroundImageFile must be set.
                backgroundImageFile?: Schema.DriveBackgroundImageFile;
                // A short-lived link to this shared drive's background image.
                backgroundImageLink?: string;
                // Capabilities the current user has on this shared drive.
                capabilities?: Schema.DriveCapabilities;
                // The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not
                // set themeId.
                colorRgb?: string;
                // The time at which the shared drive was created (RFC 3339 date-time).
                createdDate?: string;
                // Whether the shared drive is hidden from default view.
                hidden?: boolean;
                // The ID of this shared drive which is also the ID of the top level folder of this shared drive.
                id?: string;
                // This is always drive#drive
                kind?: string;
                // The name of this shared drive.
                name?: string;
                // A set of restrictions that apply to this shared drive or items inside this shared drive.
                restrictions?: Schema.DriveRestrictions;
                // The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be
                // retrieved from a drive.about.get response. When not specified on a drive.drives.insert request, a random theme is chosen
                // from which the background image and color are set. This is a write-only field; it can only be set on requests that don't
                // set colorRgb or backgroundImageFile.
                themeId?: string;
            }
            // An image file and cropping parameters from which a background image for this shared drive is set. This is a write only
            // field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the
            // backgroundImageFile must be set.
            interface DriveBackgroundImageFile {
                // The ID of an image file in Google Drive to use for the background image.
                id?: string;
                // The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image
                // divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9.
                // The resulting image must be at least 1280 pixels wide and 144 pixels high.
                width?: number;
                // The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed
                // range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side
                // of the cropping area divided by the width of the entire image.
                xCoordinate?: number;
                // The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed
                // range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of
                // the cropping area divided by the height of the entire image.
                yCoordinate?: number;
            }
            // Capabilities the current user has on this shared drive.
            interface DriveCapabilities {
                // Whether the current user can add children to folders in this shared drive.
                canAddChildren?: boolean;
                // Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive.
                canChangeCopyRequiresWriterPermissionRestriction?: boolean;
                // Whether the current user can change the domainUsersOnly restriction of this shared drive.
                canChangeDomainUsersOnlyRestriction?: boolean;
                // Whether the current user can change the background of this shared drive.
                canChangeDriveBackground?: boolean;
                // Whether the current user can change the driveMembersOnly restriction of this shared drive.
                canChangeDriveMembersOnlyRestriction?: boolean;
                // Whether the current user can comment on files in this shared drive.
                canComment?: boolean;
                // Whether the current user can copy files in this shared drive.
                canCopy?: boolean;
                // Whether the current user can delete children from folders in this shared drive.
                canDeleteChildren?: boolean;
                // Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are
                // untrashed items inside the shared drive.
                canDeleteDrive?: boolean;
                // Whether the current user can download files in this shared drive.
                canDownload?: boolean;
                // Whether the current user can edit files in this shared drive
                canEdit?: boolean;
                // Whether the current user can list the children of folders in this shared drive.
                canListChildren?: boolean;
                // Whether the current user can add members to this shared drive or remove them or change their role.
                canManageMembers?: boolean;
                // Whether the current user can read the revisions resource of files in this shared drive.
                canReadRevisions?: boolean;
                // Whether the current user can rename files or folders in this shared drive.
                canRename?: boolean;
                // Whether the current user can rename this shared drive.
                canRenameDrive?: boolean;
                // Whether the current user can share files or folders in this shared drive.
                canShare?: boolean;
                // Whether the current user can trash children from folders in this shared drive.
                canTrashChildren?: boolean;
            }
            // A list of shared drives.
            interface DriveList {
                // The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of
                // results should be fetched.
                items?: Schema.Drive[];
                // This is always drive#driveList
                kind?: string;
                // The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the
                // token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of
                // results.
                nextPageToken?: string;
            }
            // A set of restrictions that apply to this shared drive or items inside this shared drive.
            interface DriveRestrictions {
                // Whether administrative privileges on this shared drive are required to modify restrictions.
                adminManagedRestrictions?: boolean;
                // Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and
                // commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside
                // this shared drive.
                copyRequiresWriterPermission?: boolean;
                // Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which
                // this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this
                // shared drive.
                domainUsersOnly?: boolean;
                // Whether access to items inside this shared drive is restricted to its members.
                driveMembersOnly?: boolean;
            }
            // The metadata for a file.
            interface File {
                // A link for opening the file in a relevant Google editor or viewer.
                alternateLink?: string;
                // Whether this file is in the Application Data folder.
                appDataContents?: boolean;
                // Deprecated: use capabilities/canComment.
                canComment?: boolean;
                // Deprecated: use capabilities/canReadRevisions.
                canReadRevisions?: boolean;
                // Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may
                // take.
                capabilities?: Schema.FileCapabilities;
                // Restrictions for accessing the content of the file. Only populated if such a restriction exists.
                contentRestrictions?: Schema.ContentRestriction[];
                // Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
                copyRequiresWriterPermission?: boolean;
                // Deprecated: use capabilities/canCopy.
                copyable?: boolean;
                // Create time for this file (formatted RFC 3339 timestamp).
                createdDate?: string;
                // A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is
                // used.
                defaultOpenWithLink?: string;
                // A short description of the file.
                description?: string;
                // Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is
                // not populated for Docs Editors or shortcut files.
                downloadUrl?: string;
                // ID of the shared drive the file resides in. Only populated for items in shared drives.
                driveId?: string;
                // Deprecated: use capabilities/canEdit.
                editable?: boolean;
                // A link for embedding the file.
                embedLink?: string;
                // ETag of the file.
                etag?: string;
                // Whether this file has been explicitly trashed, as opposed to recursively trashed.
                explicitlyTrashed?: boolean;
                // Links for exporting Docs Editors files to specific formats.
                exportLinks?: object;
                // The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed.
                // This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or
                // shortcut files.
                fileExtension?: string;
                // The size of the file in bytes. This field is populated for files with content stored in Google Drive and for files in
                // Docs Editors; it is not populated for shortcut files.
                fileSize?: string;
                // Folder color as an RGB hex string if the file is a folder. The list of supported colors is available in the
                // folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest
                // color in the palette. Not populated for items in shared drives.
                folderColorRgb?: string;
                // The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz".
                // Removing an extension from the title does not clear this field; however, changing the extension on the title does update
                // this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs
                // Editors or shortcut files.
                fullFileExtension?: string;
                // Whether there are permissions directly on this file. This field is only populated for items in shared drives.
                hasAugmentedPermissions?: boolean;
                // Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To
                // check access, look for the presence of the thumbnailLink field.
                hasThumbnail?: boolean;
                // The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it is
                // not populated for Docs Editors or shortcut files.
                headRevisionId?: string;
                // A link to the file's icon.
                iconLink?: string;
                // The ID of the file.
                id?: string;
                // Metadata about image media. This will only be present for image types, and its contents will depend on what can be
                // parsed from the image content.
                imageMediaMetadata?: Schema.FileImageMediaMetadata;
                // Indexable text attributes for the file (can only be written)
                indexableText?: Schema.FileIndexableText;
                // Whether the file was created or opened by the requesting app.
                isAppAuthorized?: boolean;
                // The type of file. This is always drive#file.
                kind?: string;
                // A group of labels for the file.
                labels?: Schema.FileLabels;
                // The last user to modify this file.
                lastModifyingUser?: Schema.User;
                // Name of the last user to modify this file.
                lastModifyingUserName?: string;
                // Last time this file was viewed by the user (formatted RFC 3339 timestamp).
                lastViewedByMeDate?: string;
                // Deprecated.
                markedViewedByMeDate?: string;
                // An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google
                // Drive; it is not populated for Docs Editors or shortcut files.
                md5Checksum?: string;
                // The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and
                // the mimetype will be determined from the uploaded content's MIME type.
                mimeType?: string;
                // Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also
                // update the modifiedByMe date for the user which set the date.
                modifiedByMeDate?: string;
                // Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the
                // setModifiedDate parameter is set.
                modifiedDate?: string;
                // A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the
                // drive.apps.readonly scope is used.
                openWithLinks?: object;
                // The original filename of the uploaded content if available, or else the original value of the title field. This is only
                // available for files with binary content in Google Drive.
                originalFilename?: string;
                // Whether the file is owned by the current user. Not populated for items in shared drives.
                ownedByMe?: boolean;
                // Name(s) of the owner(s) of this file. Not populated for items in shared drives.
                ownerNames?: string[];
                // The owner(s) of this file. Not populated for items in shared drives.
                owners?: Schema.User[];
                // Collection of parent folders which contain this file.
                // If not specified as part of an insert request, the file will be placed directly in the user's My Drive folder. If not
                // specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests
                // can also use the addParents and removeParents parameters to modify the parents list.
                parents?: Schema.ParentReference[];
                // List of permission IDs for users with access to this file.
                permissionIds?: string[];
                // The list of permissions for users with access to this file. Not populated for items in shared drives.
                permissions?: Schema.Permission[];
                // The list of properties.
                properties?: Schema.Property[];
                // The number of quota bytes used by this file.
                quotaBytesUsed?: string;
                // A link back to this file.
                selfLink?: string;
                // Deprecated: use capabilities/canShare.
                shareable?: boolean;
                // Whether the file has been shared. Not populated for items in shared drives.
                shared?: boolean;
                // Time at which this file was shared with the user (formatted RFC 3339 timestamp).
                sharedWithMeDate?: string;
                // User that shared the item with the current user, if available.
                sharingUser?: Schema.User;
                // Shortcut file details. Only populated for shortcut files, which have the mimeType field set to
                // application/vnd.google-apps.shortcut.
                shortcutDetails?: Schema.FileShortcutDetails;
                // The list of spaces which contain the file. Supported values are 'drive', 'appDataFolder' and 'photos'.
                spaces?: string[];
                // Deprecated - use driveId instead.
                teamDriveId?: string;
                // A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
                thumbnail?: Schema.FileThumbnail;
                // A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting
                // app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be
                // fetched using a credentialed request.
                thumbnailLink?: string;
                // The thumbnail version for use in thumbnail cache invalidation.
                thumbnailVersion?: string;
                // The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root
                // folder, and Application Data folder the title is constant.
                title?: string;
                // The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.
                trashedDate?: string;
                // If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.
                trashingUser?: Schema.User;
                // The permissions for the authenticated user on this file.
                userPermission?: Schema.Permission;
                // A monotonically increasing version number for the file. This reflects every change made to the file on the server, even
                // those not visible to the requesting user.
                version?: string;
                // Metadata about video media. This will only be present for video types.
                videoMediaMetadata?: Schema.FileVideoMediaMetadata;
                // A link for downloading the content of the file in a browser using cookie based authentication. In cases where the
                // content is shared publicly, the content can be downloaded without any credentials.
                webContentLink?: string;
                // A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's
                // Website Hosting.
                webViewLink?: string;
                // Whether writers can share the document with other users. Not populated for items in shared drives.
                writersCanShare?: boolean;
            }
            // Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may
            // take.
            interface FileCapabilities {
                // Whether the current user can add children to this folder. This is always false when the item is not a folder.
                canAddChildren?: boolean;
                // Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This
                // is false when the item is not a folder. Only populated for items in shared drives.
                canAddFolderFromAnotherDrive?: boolean;
                // Whether the current user can add a parent for the item without removing an existing parent in the same request. Not
                // populated for shared drive files.
                canAddMyDriveParent?: boolean;
                // Whether the current user can change the copyRequiresWriterPermission restriction of this file.
                canChangeCopyRequiresWriterPermission?: boolean;
                // Deprecated
                canChangeRestrictedDownload?: boolean;
                // Whether the current user can comment on this file.
                canComment?: boolean;
                // Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder
                // descendants of this item, or this item itself if it is not a folder.
                canCopy?: boolean;
                // Whether the current user can delete this file.
                canDelete?: boolean;
                // Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated
                // for items in shared drives.
                canDeleteChildren?: boolean;
                // Whether the current user can download this file.
                canDownload?: boolean;
                // Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For
                // example, see canChangeCopyRequiresWriterPermission or canModifyContent.
                canEdit?: boolean;
                // Whether the current user can list the children of this folder. This is always false when the item is not a folder.
                canListChildren?: boolean;
                // Whether the current user can modify the content of this file.
                canModifyContent?: boolean;
                // Whether the current user can modify restrictions on content of this file.
                canModifyContentRestriction?: boolean;
                // Whether the current user can move children of this folder outside of the shared drive. This is false when the item is
                // not a folder. Only populated for items in shared drives.
                canMoveChildrenOutOfDrive?: boolean;
                // Deprecated - use canMoveChildrenOutOfDrive instead.
                canMoveChildrenOutOfTeamDrive?: boolean;
                // Whether the current user can move children of this folder within this drive. This is false when the item is not a
                // folder. Note that a request to move the child may still fail depending on the current user's access to the child and to
                // the destination folder.
                canMoveChildrenWithinDrive?: boolean;
                // Deprecated - use canMoveChildrenWithinDrive instead.
                canMoveChildrenWithinTeamDrive?: boolean;
                // Deprecated - use canMoveItemOutOfDrive instead.
                canMoveItemIntoTeamDrive?: boolean;
                // Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change
                // the parent of the item may still fail depending on the new parent that is being added.
                canMoveItemOutOfDrive?: boolean;
                // Deprecated - use canMoveItemOutOfDrive instead.
                canMoveItemOutOfTeamDrive?: boolean;
                // Whether the current user can move this item within this drive. Note that a request to change the parent of the item may
                // still fail depending on the new parent that is being added and the parent that is being removed.
                canMoveItemWithinDrive?: boolean;
                // Deprecated - use canMoveItemWithinDrive instead.
                canMoveItemWithinTeamDrive?: boolean;
                // Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead.
                canMoveTeamDriveItem?: boolean;
                // Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared
                // drives.
                canReadDrive?: boolean;
                // Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of
                // non-folder descendants of this item, or this item itself if it is not a folder, can be read.
                canReadRevisions?: boolean;
                // Deprecated - use canReadDrive instead.
                canReadTeamDrive?: boolean;
                // Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a
                // folder in a shared drive, use canDeleteChildren or canTrashChildren instead.
                canRemoveChildren?: boolean;
                // Whether the current user can remove a parent from the item without adding another parent in the same request. Not
                // populated for shared drive files.
                canRemoveMyDriveParent?: boolean;
                // Whether the current user can rename this file.
                canRename?: boolean;
                // Whether the current user can modify the sharing settings for this file.
                canShare?: boolean;
                // Whether the current user can move this file to trash.
                canTrash?: boolean;
                // Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated
                // for items in shared drives.
                canTrashChildren?: boolean;
                // Whether the current user can restore this file from trash.
                canUntrash?: boolean;
            }
            // Metadata about image media. This will only be present for image types, and its contents will depend on what can be
            // parsed from the image content.
            interface FileImageMediaMetadata {
                // The aperture used to create the photo (f-number).
                aperture?: number;
                // The make of the camera used to create the photo.
                cameraMake?: string;
                // The model of the camera used to create the photo.
                cameraModel?: string;
                // The color space of the photo.
                colorSpace?: string;
                // The date and time the photo was taken (EXIF format timestamp).
                date?: string;
                // The exposure bias of the photo (APEX value).
                exposureBias?: number;
                // The exposure mode used to create the photo.
                exposureMode?: string;
                // The length of the exposure, in seconds.
                exposureTime?: number;
                // Whether a flash was used to create the photo.
                flashUsed?: boolean;
                // The focal length used to create the photo, in millimeters.
                focalLength?: number;
                // The height of the image in pixels.
                height?: Integer;
                // The ISO speed used to create the photo.
                isoSpeed?: Integer;
                // The lens used to create the photo.
                lens?: string;
                // Geographic location information stored in the image.
                location?: Schema.FileImageMediaMetadataLocation;
                // The smallest f-number of the lens at the focal length used to create the photo (APEX value).
                maxApertureValue?: number;
                // The metering mode used to create the photo.
                meteringMode?: string;
                // The number of clockwise 90 degree rotations applied from the image's original orientation.
                rotation?: Integer;
                // The type of sensor used to create the photo.
                sensor?: string;
                // The distance to the subject of the photo, in meters.
                subjectDistance?: Integer;
                // The white balance mode used to create the photo.
                whiteBalance?: string;
                // The width of the image in pixels.
                width?: Integer;
            }
            // Geographic location information stored in the image.
            interface FileImageMediaMetadataLocation {
                // The altitude stored in the image.
                altitude?: number;
                // The latitude stored in the image.
                latitude?: number;
                // The longitude stored in the image.
                longitude?: number;
            }
            // Indexable text attributes for the file (can only be written)
            interface FileIndexableText {
                // The text to be indexed for this file.
                text?: string;
            }
            // A group of labels for the file.
            interface FileLabels {
                // Deprecated.
                hidden?: boolean;
                // Whether the file has been modified by this user.
                modified?: boolean;
                // Deprecated - use copyRequiresWriterPermission instead.
                restricted?: boolean;
                // Whether this file is starred by the user.
                starred?: boolean;
                // Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file.
                // The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all
                // users with access to the file can see the trashed item metadata in an API response. All users with access can copy,
                // download, export, and share the file.
                trashed?: boolean;
                // Whether this file has been viewed by this user.
                viewed?: boolean;
            }
            // A list of files.
            interface FileList {
                // The ETag of the list.
                etag?: string;
                // Whether the search process was incomplete. If true, then some search results may be missing, since all documents were
                // not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be
                // searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as
                // "default" or "drive".
                incompleteSearch?: boolean;
                // The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results
                // should be fetched.
                items?: Schema.File[];
                // This is always drive#fileList.
                kind?: string;
                // A link to the next page of files.
                nextLink?: string;
                // The page token for the next page of files. This will be absent if the end of the files list has been reached. If the
                // token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of
                // results.
                nextPageToken?: string;
                // A link back to this list.
                selfLink?: string;
            }
            // Shortcut file details. Only populated for shortcut files, which have the mimeType field set to
            // application/vnd.google-apps.shortcut.
            interface FileShortcutDetails {
                // The ID of the file that this shortcut points to.
                targetId?: string;
                // The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type,
                // captured when the shortcut is created.
                targetMimeType?: string;
            }
            // A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
            interface FileThumbnail {
                // The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.
                image?: Byte[];
                // The MIME type of the thumbnail.
                mimeType?: string;
            }
            // Metadata about video media. This will only be present for video types.
            interface FileVideoMediaMetadata {
                // The duration of the video in milliseconds.
                durationMillis?: string;
                // The height of the video in pixels.
                height?: Integer;
                // The width of the video in pixels.
                width?: Integer;
            }
            // A list of generated IDs which can be provided in insert requests
            interface GeneratedIds {
                // The IDs generated for the requesting user in the specified space.
                ids?: string[];
                // This is always drive#generatedIds
                kind?: string;
                // The type of file that can be created with these IDs.
                space?: string;
            }
            // A list of a file's parents.
            interface ParentList {
                // The ETag of the list.
                etag?: string;
                // The list of parents.
                items?: Schema.ParentReference[];
                // This is always drive#parentList.
                kind?: string;
                // A link back to this list.
                selfLink?: string;
            }
            // A reference to a file's parent.
            interface ParentReference {
                // The ID of the parent.
                id?: string;
                // Whether or not the parent is the root folder.
                isRoot?: boolean;
                // This is always drive#parentReference.
                kind?: string;
                // A link to the parent.
                parentLink?: string;
                // A link back to this reference.
                selfLink?: string;
            }
            // A permission for a file.
            interface Permission {
                // Additional roles for this user. Only commenter is currently allowed, though more may be supported in the future.
                additionalRoles?: string[];
                // Deprecated.
                authKey?: string;
                // Whether the account associated with this permission has been deleted. This field only pertains to user and group
                // permissions.
                deleted?: boolean;
                // The domain name of the entity this permission refers to. This is an output-only field which is present when the
                // permission type is user, group or domain.
                domain?: string;
                // The email address of the user or group this permission refers to. This is an output-only field which is present when the
                // permission type is user or group.
                emailAddress?: string;
                // The ETag of the permission.
                etag?: string;
                // The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:
                // - They cannot be set on shared drive items
                // - They can only be set on user and group permissions
                // - The date must be in the future
                // - The date cannot be more than a year in the future
                // - The date can only be set on drive.permissions.update or drive.permissions.patch requests
                expirationDate?: string;
                // The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When
                // making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission
                // type is anyone, in which case both id and value are ignored.
                id?: string;
                // This is always drive#permission.
                kind?: string;
                // The name for this permission.
                name?: string;
                // Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an
                // output-only field which is present only for shared drive items.
                permissionDetails?: Schema.PermissionPermissionDetails[];
                // A link to the profile photo, if available.
                photoLink?: string;
                // The primary role for this user. While new values may be supported in the future, the following are currently allowed:
                // - owner
                // - organizer
                // - fileOrganizer
                // - writer
                // - reader
                role?: string;
                // A link back to this permission.
                selfLink?: string;
                // Deprecated - use permissionDetails instead.
                teamDrivePermissionDetails?: Schema.PermissionTeamDrivePermissionDetails[];
                // The account type. Allowed values are:
                // - user
                // - group
                // - domain
                // - anyone
                type?: string;
                // The email address or domain name for the entity. This is used during inserts and is not populated in responses. When
                // making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission
                // type is anyone, in which case both id and value are ignored.
                value?: string;
                // Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only
                // supported value.
                view?: string;
                // Whether the link is required for this permission.
                withLink?: boolean;
            }
            // An ID for a user or group as seen in Permission items.
            interface PermissionId {
                // The permission ID.
                id?: string;
                // This is always drive#permissionId.
                kind?: string;
            }
            // A list of permissions associated with a file.
            interface PermissionList {
                // The ETag of the list.
                etag?: string;
                // The list of permissions.
                items?: Schema.Permission[];
                // This is always drive#permissionList.
                kind?: string;
                // The page token for the next page of permissions. This field will be absent if the end of the permissions list has been
                // reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the
                // first page of results.
                nextPageToken?: string;
                // A link back to this list.
                selfLink?: string;
            }
            interface PermissionPermissionDetails {
                // Additional roles for this user. Only commenter is currently possible, though more may be supported in the future.
                additionalRoles?: string[];
                // Whether this permission is inherited. This field is always populated. This is an output-only field.
                inherited?: boolean;
                // The ID of the item from which this permission is inherited. This is an output-only field.
                inheritedFrom?: string;
                // The permission type for this user. While new values may be added in future, the following are currently possible:
                // - file
                // - member
                permissionType?: string;
                // The primary role for this user. While new values may be added in the future, the following are currently possible:
                // - organizer
                // - fileOrganizer
                // - writer
                // - reader
                role?: string;
            }
            interface PermissionTeamDrivePermissionDetails {
                // Deprecated - use permissionDetails/additionalRoles instead.
                additionalRoles?: string[];
                // Deprecated - use permissionDetails/inherited instead.
                inherited?: boolean;
                // Deprecated - use permissionDetails/inheritedFrom instead.
                inheritedFrom?: string;
                // Deprecated - use permissionDetails/role instead.
                role?: string;
                // Deprecated - use permissionDetails/permissionType instead.
                teamDrivePermissionType?: string;
            }
            // A key-value pair attached to a file that is either public or private to an application.
            // The following limits apply to file properties:
            // - Maximum of 100 properties total per file
            // - Maximum of 30 private properties per app
            // - Maximum of 30 public properties
            // - Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property.
            interface Property {
                // ETag of the property.
                etag?: string;
                // The key of this property.
                key?: string;
                // This is always drive#property.
                kind?: string;
                // The link back to this property.
                selfLink?: string;
                // The value of this property.
                value?: string;
                // The visibility of this property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE). Private properties can only
                // be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2
                // client ID. You cannot use an API key to retrieve private properties.
                visibility?: string;
            }
            // A collection of properties, key-value pairs that are either public or private to an application.
            interface PropertyList {
                // The ETag of the list.
                etag?: string;
                // The list of properties.
                items?: Schema.Property[];
                // This is always drive#propertyList.
                kind?: string;
                // The link back to this list.
                selfLink?: string;
            }
            // A revision of a file.
            interface Revision {
                downloadUrl?: string;
                // The ETag of the revision.
                etag?: string;
                // Links for exporting Docs Editors files to specific formats.
                exportLinks?: object;
                // The size of the revision in bytes. This will only be populated on files with content stored in Drive.
                fileSize?: string;
                // The ID of the revision.
                id?: string;
                // This is always drive#revision.
                kind?: string;
                // The last user to modify this revision.
                lastModifyingUser?: Schema.User;
                // Name of the last user to modify this revision.
                lastModifyingUserName?: string;
                // An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.
                md5Checksum?: string;
                // The MIME type of the revision.
                mimeType?: string;
                // Last time this revision was modified (formatted RFC 3339 timestamp).
                modifiedDate?: string;
                // The original filename when this revision was created. This will only be populated on files with content stored in Drive.
                originalFilename?: string;
                // Whether this revision is pinned to prevent automatic purging. This will only be populated and can only be modified on
                // files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created
                // through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely
                // using additional storage quota, up to a maximum of 200 revisions.
                pinned?: boolean;
                // Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs
                // Editors files.
                publishAuto?: boolean;
                // Whether this revision is published. This is only populated and can only be modified for Docs Editors files.
                published?: boolean;
                // A link to the published revision. This is only populated for Google Sites files.
                publishedLink?: string;
                // Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors
                // files.
                publishedOutsideDomain?: boolean;
                // A link back to this revision.
                selfLink?: string;
            }
            // A list of revisions of a file.
            interface RevisionList {
                // The ETag of the list.
                etag?: string;
                // The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results
                // should be fetched.
                items?: Schema.Revision[];
                // This is always drive#revisionList.
                kind?: string;
                // The page token for the next page of revisions. This field will be absent if the end of the revisions list has been
                // reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the
                // first page of results.
                nextPageToken?: string;
                // A link back to this list.
                selfLink?: string;
            }
            interface StartPageToken {
                // Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken".
                kind?: string;
                // The starting page token for listing changes.
                startPageToken?: string;
            }
            // Deprecated: use the drive collection instead.
            interface TeamDrive {
                // An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only
                // field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the
                // backgroundImageFile must be set.
                backgroundImageFile?: Schema.TeamDriveBackgroundImageFile;
                // A short-lived link to this Team Drive's background image.
                backgroundImageLink?: string;
                // Capabilities the current user has on this Team Drive.
                capabilities?: Schema.TeamDriveCapabilities;
                // The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not
                // set themeId.
                colorRgb?: string;
                // The time at which the Team Drive was created (RFC 3339 date-time).
                createdDate?: string;
                // The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
                id?: string;
                // This is always drive#teamDrive
                kind?: string;
                // The name of this Team Drive.
                name?: string;
                // A set of restrictions that apply to this Team Drive or items inside this Team Drive.
                restrictions?: Schema.TeamDriveRestrictions;
                // The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be
                // retrieved from a drive.about.get response. When not specified on a drive.teamdrives.insert request, a random theme is
                // chosen from which the background image and color are set. This is a write-only field; it can only be set on requests
                // that don't set colorRgb or backgroundImageFile.
                themeId?: string;
            }
            // An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only
            // field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the
            // backgroundImageFile must be set.
            interface TeamDriveBackgroundImageFile {
                // The ID of an image file in Drive to use for the background image.
                id?: string;
                // The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image
                // divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9.
                // The resulting image must be at least 1280 pixels wide and 144 pixels high.
                width?: number;
                // The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed
                // range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side
                // of the cropping area divided by the width of the entire image.
                xCoordinate?: number;
                // The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed
                // range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of
                // the cropping area divided by the height of the entire image.
                yCoordinate?: number;
            }
            // Capabilities the current user has on this Team Drive.
            interface TeamDriveCapabilities {
                // Whether the current user can add children to folders in this Team Drive.
                canAddChildren?: boolean;
                // Whether the current user can change the copyRequiresWriterPermission restriction of this Team Drive.
                canChangeCopyRequiresWriterPermissionRestriction?: boolean;
                // Whether the current user can change the domainUsersOnly restriction of this Team Drive.
                canChangeDomainUsersOnlyRestriction?: boolean;
                // Whether the current user can change the background of this Team Drive.
                canChangeTeamDriveBackground?: boolean;
                // Whether the current user can change the teamMembersOnly restriction of this Team Drive.
                canChangeTeamMembersOnlyRestriction?: boolean;
                // Whether the current user can comment on files in this Team Drive.
                canComment?: boolean;
                // Whether the current user can copy files in this Team Drive.
                canCopy?: boolean;
                // Whether the current user can delete children from folders in this Team Drive.
                canDeleteChildren?: boolean;
                // Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are
                // untrashed items inside the Team Drive.
                canDeleteTeamDrive?: boolean;
                // Whether the current user can download files in this Team Drive.
                canDownload?: boolean;
                // Whether the current user can edit files in this Team Drive
                canEdit?: boolean;
                // Whether the current user can list the children of folders in this Team Drive.
                canListChildren?: boolean;
                // Whether the current user can add members to this Team Drive or remove them or change their role.
                canManageMembers?: boolean;
                // Whether the current user can read the revisions resource of files in this Team Drive.
                canReadRevisions?: boolean;
                // Deprecated - use canDeleteChildren or canTrashChildren instead.
                canRemoveChildren?: boolean;
                // Whether the current user can rename files or folders in this Team Drive.
                canRename?: boolean;
                // Whether the current user can rename this Team Drive.
                canRenameTeamDrive?: boolean;
                // Whether the current user can share files or folders in this Team Drive.
                canShare?: boolean;
                // Whether the current user can trash children from folders in this Team Drive.
                canTrashChildren?: boolean;
            }
            // A list of Team Drives.
            interface TeamDriveList {
                // The list of Team Drives.
                items?: Schema.TeamDrive[];
                // This is always drive#teamDriveList
                kind?: string;
                // The page token for the next page of Team Drives.
                nextPageToken?: string;
            }
            // A set of restrictions that apply to this Team Drive or items inside this Team Drive.
            interface TeamDriveRestrictions {
                // Whether administrative privileges on this Team Drive are required to modify restrictions.
                adminManagedRestrictions?: boolean;
                // Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and
                // commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside
                // this Team Drive.
                copyRequiresWriterPermission?: boolean;
                // Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this
                // Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive.
                domainUsersOnly?: boolean;
                // Whether access to items inside this Team Drive is restricted to members of this Team Drive.
                teamMembersOnly?: boolean;
            }
            // Information about a Drive user.
            interface User {
                // A plain text displayable name for this user.
                displayName?: string;
                // The email address of the user.
                emailAddress?: string;
                // Whether this user is the same as the authenticated user for whom the request was made.
                isAuthenticatedUser?: boolean;
                // This is always drive#user.
                kind?: string;
                // The user's ID as visible in the permissions collection.
                permissionId?: string;
                // The user's profile picture.
                picture?: Schema.UserPicture;
            }
            // The user's profile picture.
            interface UserPicture {
                // A URL that points to a profile picture of this user.
                url?: string;
            }
        }
    }
    // Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
    interface Drive {
        About?: Drive.Collection.AboutCollection;
        Apps?: Drive.Collection.AppsCollection;
        Changes?: Drive.Collection.ChangesCollection;
        Channels?: Drive.Collection.ChannelsCollection;
        Children?: Drive.Collection.ChildrenCollection;
        Comments?: Drive.Collection.CommentsCollection;
        Drives?: Drive.Collection.DrivesCollection;
        Files?: Drive.Collection.FilesCollection;
        Parents?: Drive.Collection.ParentsCollection;
        Permissions?: Drive.Collection.PermissionsCollection;
        Properties?: Drive.Collection.PropertiesCollection;
        Replies?: Drive.Collection.RepliesCollection;
        Revisions?: Drive.Collection.RevisionsCollection;
        Teamdrives?: Drive.Collection.TeamdrivesCollection;
        // Create a new instance of Channel
        newChannel(): Drive.Schema.Channel;
        // Create a new instance of ChildReference
        newChildReference(): Drive.Schema.ChildReference;
        // Create a new instance of Comment
        newComment(): Drive.Schema.Comment;
        // Create a new instance of CommentContext
        newCommentContext(): Drive.Schema.CommentContext;
        // Create a new instance of CommentReply
        newCommentReply(): Drive.Schema.CommentReply;
        // Create a new instance of ContentRestriction
        newContentRestriction(): Drive.Schema.ContentRestriction;
        // Create a new instance of Drive
        newDrive(): Drive.Schema.Drive;
        // Create a new instance of DriveBackgroundImageFile
        newDriveBackgroundImageFile(): Drive.Schema.DriveBackgroundImageFile;
        // Create a new instance of DriveCapabilities
        newDriveCapabilities(): Drive.Schema.DriveCapabilities;
        // Create a new instance of DriveRestrictions
        newDriveRestrictions(): Drive.Schema.DriveRestrictions;
        // Create a new instance of File
        newFile(): Drive.Schema.File;
        // Create a new instance of FileCapabilities
        newFileCapabilities(): Drive.Schema.FileCapabilities;
        // Create a new instance of FileImageMediaMetadata
        newFileImageMediaMetadata(): Drive.Schema.FileImageMediaMetadata;
        // Create a new instance of FileImageMediaMetadataLocation
        newFileImageMediaMetadataLocation(): Drive.Schema.FileImageMediaMetadataLocation;
        // Create a new instance of FileIndexableText
        newFileIndexableText(): Drive.Schema.FileIndexableText;
        // Create a new instance of FileLabels
        newFileLabels(): Drive.Schema.FileLabels;
        // Create a new instance of FileShortcutDetails
        newFileShortcutDetails(): Drive.Schema.FileShortcutDetails;
        // Create a new instance of FileThumbnail
        newFileThumbnail(): Drive.Schema.FileThumbnail;
        // Create a new instance of FileVideoMediaMetadata
        newFileVideoMediaMetadata(): Drive.Schema.FileVideoMediaMetadata;
        // Create a new instance of ParentReference
        newParentReference(): Drive.Schema.ParentReference;
        // Create a new instance of Permission
        newPermission(): Drive.Schema.Permission;
        // Create a new instance of PermissionPermissionDetails
        newPermissionPermissionDetails(): Drive.Schema.PermissionPermissionDetails;
        // Create a new instance of PermissionTeamDrivePermissionDetails
        newPermissionTeamDrivePermissionDetails(): Drive.Schema.PermissionTeamDrivePermissionDetails;
        // Create a new instance of Property
        newProperty(): Drive.Schema.Property;
        // Create a new instance of Revision
        newRevision(): Drive.Schema.Revision;
        // Create a new instance of TeamDrive
        newTeamDrive(): Drive.Schema.TeamDrive;
        // Create a new instance of TeamDriveBackgroundImageFile
        newTeamDriveBackgroundImageFile(): Drive.Schema.TeamDriveBackgroundImageFile;
        // Create a new instance of TeamDriveCapabilities
        newTeamDriveCapabilities(): Drive.Schema.TeamDriveCapabilities;
        // Create a new instance of TeamDriveRestrictions
        newTeamDriveRestrictions(): Drive.Schema.TeamDriveRestrictions;
        // Create a new instance of User
        newUser(): Drive.Schema.User;
        // Create a new instance of UserPicture
        newUserPicture(): Drive.Schema.UserPicture;
    }
}
declare const Drive: GoogleAppsScript.Drive;
