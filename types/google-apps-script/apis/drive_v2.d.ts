// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Drive_v2 {
    namespace Collection {
      export interface AboutCollection {
        // Gets the information about the current user along with Drive API settings
        get(): Drive_v2.Schema.About;
        // Gets the information about the current user along with Drive API settings
        get(optionalArgs: object): Drive_v2.Schema.About;
      }
      export interface AppsCollection {
        // Gets a specific app.
        get(appId: string): Drive_v2.Schema.App;
        // Lists a user's installed apps.
        list(): Drive_v2.Schema.AppList;
        // Lists a user's installed apps.
        list(optionalArgs: object): Drive_v2.Schema.AppList;
      }
      export interface ChangesCollection {
        // Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
        get(changeId: string): Drive_v2.Schema.Change;
        // Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
        get(changeId: string, optionalArgs: object): Drive_v2.Schema.Change;
        // Gets the starting pageToken for listing future changes.
        getStartPageToken(): Drive_v2.Schema.StartPageToken;
        // Gets the starting pageToken for listing future changes.
        getStartPageToken(optionalArgs: object): Drive_v2.Schema.StartPageToken;
        // Lists the changes for a user or Team Drive.
        list(): Drive_v2.Schema.ChangeList;
        // Lists the changes for a user or Team Drive.
        list(optionalArgs: object): Drive_v2.Schema.ChangeList;
        // Subscribe to changes for a user.
        watch(resource: Schema.Channel): Drive_v2.Schema.Channel;
        // Subscribe to changes for a user.
        watch(resource: Schema.Channel, optionalArgs: object): Drive_v2.Schema.Channel;
      }
      export interface ChannelsCollection {
        // Stop watching resources through this channel
        stop(resource: Schema.Channel): void;
      }
      export interface ChildrenCollection {
        // Gets a specific child reference.
        get(folderId: string, childId: string): Drive_v2.Schema.ChildReference;
        // Inserts a file into a folder.
        insert(resource: Schema.ChildReference, folderId: string): Drive_v2.Schema.ChildReference;
        // Inserts a file into a folder.
        insert(resource: Schema.ChildReference, folderId: string, optionalArgs: object): Drive_v2.Schema.ChildReference;
        // Lists a folder's children.
        list(folderId: string): Drive_v2.Schema.ChildList;
        // Lists a folder's children.
        list(folderId: string, optionalArgs: object): Drive_v2.Schema.ChildList;
        // Removes a child from a folder.
        remove(folderId: string, childId: string): void;
      }
      export interface CommentsCollection {
        // Gets a comment by ID.
        get(fileId: string, commentId: string): Drive_v2.Schema.Comment;
        // Gets a comment by ID.
        get(fileId: string, commentId: string, optionalArgs: object): Drive_v2.Schema.Comment;
        // Creates a new comment on the given file.
        insert(resource: Schema.Comment, fileId: string): Drive_v2.Schema.Comment;
        // Lists a file's comments.
        list(fileId: string): Drive_v2.Schema.CommentList;
        // Lists a file's comments.
        list(fileId: string, optionalArgs: object): Drive_v2.Schema.CommentList;
        // Updates an existing comment. This method supports patch semantics.
        patch(resource: Schema.Comment, fileId: string, commentId: string): Drive_v2.Schema.Comment;
        // Deletes a comment.
        remove(fileId: string, commentId: string): void;
        // Updates an existing comment.
        update(resource: Schema.Comment, fileId: string, commentId: string): Drive_v2.Schema.Comment;
      }
      export interface FilesCollection {
        // Creates a copy of the specified file.
        copy(resource: Schema.File, fileId: string): Drive_v2.Schema.File;
        // Creates a copy of the specified file.
        copy(resource: Schema.File, fileId: string, optionalArgs: object): Drive_v2.Schema.File;
        // Permanently deletes all of the user's trashed files.
        emptyTrash(): void;
        // Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.
        export(fileId: string, mimeType: string): void;
        // Generates a set of file IDs which can be provided in insert requests.
        generateIds(): Drive_v2.Schema.GeneratedIds;
        // Generates a set of file IDs which can be provided in insert requests.
        generateIds(optionalArgs: object): Drive_v2.Schema.GeneratedIds;
        // Gets a file's metadata by ID.
        get(fileId: string): Drive_v2.Schema.File;
        // Gets a file's metadata by ID.
        get(fileId: string, optionalArgs: object): Drive_v2.Schema.File;
        // Insert a new file.
        insert(resource: Schema.File): Drive_v2.Schema.File;
        // Insert a new file.
        insert(resource: Schema.File, mediaData: any): Drive_v2.Schema.File;
        // Insert a new file.
        insert(resource: Schema.File, mediaData: any, optionalArgs: object): Drive_v2.Schema.File;
        // Lists the user's files.
        list(): Drive_v2.Schema.FileList;
        // Lists the user's files.
        list(optionalArgs: object): Drive_v2.Schema.FileList;
        // Updates file metadata and/or content. This method supports patch semantics.
        patch(resource: Schema.File, fileId: string): Drive_v2.Schema.File;
        // Updates file metadata and/or content. This method supports patch semantics.
        patch(resource: Schema.File, fileId: string, optionalArgs: object): Drive_v2.Schema.File;
        // Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.
        remove(fileId: string): void;
        // Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.
        remove(fileId: string, optionalArgs: object): void;
        // Set the file's updated time to the current server time.
        touch(fileId: string): Drive_v2.Schema.File;
        // Set the file's updated time to the current server time.
        touch(fileId: string, optionalArgs: object): Drive_v2.Schema.File;
        // Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for Team Drive files.
        trash(fileId: string): Drive_v2.Schema.File;
        // Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for Team Drive files.
        trash(fileId: string, optionalArgs: object): Drive_v2.Schema.File;
        // Restores a file from the trash.
        untrash(fileId: string): Drive_v2.Schema.File;
        // Restores a file from the trash.
        untrash(fileId: string, optionalArgs: object): Drive_v2.Schema.File;
        // Updates file metadata and/or content.
        update(resource: Schema.File, fileId: string): Drive_v2.Schema.File;
        // Updates file metadata and/or content.
        update(resource: Schema.File, fileId: string, mediaData: any): Drive_v2.Schema.File;
        // Updates file metadata and/or content.
        update(resource: Schema.File, fileId: string, mediaData: any, optionalArgs: object): Drive_v2.Schema.File;
        // Subscribe to changes on a file
        watch(resource: Schema.Channel, fileId: string): Drive_v2.Schema.Channel;
        // Subscribe to changes on a file
        watch(resource: Schema.Channel, fileId: string, optionalArgs: object): Drive_v2.Schema.Channel;
      }
      export interface ParentsCollection {
        // Gets a specific parent reference.
        get(fileId: string, parentId: string): Drive_v2.Schema.ParentReference;
        // Adds a parent folder for a file.
        insert(resource: Schema.ParentReference, fileId: string): Drive_v2.Schema.ParentReference;
        // Adds a parent folder for a file.
        insert(resource: Schema.ParentReference, fileId: string, optionalArgs: object): Drive_v2.Schema.ParentReference;
        // Lists a file's parents.
        list(fileId: string): Drive_v2.Schema.ParentList;
        // Removes a parent from a file.
        remove(fileId: string, parentId: string): void;
      }
      export interface PermissionsCollection {
        // Gets a permission by ID.
        get(fileId: string, permissionId: string): Drive_v2.Schema.Permission;
        // Gets a permission by ID.
        get(fileId: string, permissionId: string, optionalArgs: object): Drive_v2.Schema.Permission;
        // Returns the permission ID for an email address.
        getIdForEmail(email: string): Drive_v2.Schema.PermissionId;
        // Inserts a permission for a file or Team Drive.
        insert(resource: Schema.Permission, fileId: string): Drive_v2.Schema.Permission;
        // Inserts a permission for a file or Team Drive.
        insert(resource: Schema.Permission, fileId: string, optionalArgs: object): Drive_v2.Schema.Permission;
        // Lists a file's or Team Drive's permissions.
        list(fileId: string): Drive_v2.Schema.PermissionList;
        // Lists a file's or Team Drive's permissions.
        list(fileId: string, optionalArgs: object): Drive_v2.Schema.PermissionList;
        // Updates a permission using patch semantics.
        patch(resource: Schema.Permission, fileId: string, permissionId: string): Drive_v2.Schema.Permission;
        // Updates a permission using patch semantics.
        patch(resource: Schema.Permission, fileId: string, permissionId: string, optionalArgs: object): Drive_v2.Schema.Permission;
        // Deletes a permission from a file or Team Drive.
        remove(fileId: string, permissionId: string): void;
        // Deletes a permission from a file or Team Drive.
        remove(fileId: string, permissionId: string, optionalArgs: object): void;
        // Updates a permission.
        update(resource: Schema.Permission, fileId: string, permissionId: string): Drive_v2.Schema.Permission;
        // Updates a permission.
        update(resource: Schema.Permission, fileId: string, permissionId: string, optionalArgs: object): Drive_v2.Schema.Permission;
      }
      export interface PropertiesCollection {
        // Gets a property by its key.
        get(fileId: string, propertyKey: string): Drive_v2.Schema.Property;
        // Gets a property by its key.
        get(fileId: string, propertyKey: string, optionalArgs: object): Drive_v2.Schema.Property;
        // Adds a property to a file, or updates it if it already exists.
        insert(resource: Schema.Property, fileId: string): Drive_v2.Schema.Property;
        // Lists a file's properties.
        list(fileId: string): Drive_v2.Schema.PropertyList;
        // Updates a property.
        patch(resource: Schema.Property, fileId: string, propertyKey: string): Drive_v2.Schema.Property;
        // Updates a property.
        patch(resource: Schema.Property, fileId: string, propertyKey: string, optionalArgs: object): Drive_v2.Schema.Property;
        // Deletes a property.
        remove(fileId: string, propertyKey: string): void;
        // Deletes a property.
        remove(fileId: string, propertyKey: string, optionalArgs: object): void;
        // Updates a property.
        update(resource: Schema.Property, fileId: string, propertyKey: string): Drive_v2.Schema.Property;
        // Updates a property.
        update(resource: Schema.Property, fileId: string, propertyKey: string, optionalArgs: object): Drive_v2.Schema.Property;
      }
      export interface RealtimeCollection {
        // Exports the contents of the Realtime API data model associated with this file as JSON.
        get(fileId: string): void;
        // Exports the contents of the Realtime API data model associated with this file as JSON.
        get(fileId: string, optionalArgs: object): void;
        // Overwrites the Realtime API data model associated with this file with the provided JSON data model.
        update(fileId: string): void;
        // Overwrites the Realtime API data model associated with this file with the provided JSON data model.
        update(fileId: string, mediaData: any): void;
        // Overwrites the Realtime API data model associated with this file with the provided JSON data model.
        update(fileId: string, mediaData: any, optionalArgs: object): void;
      }
      export interface RepliesCollection {
        // Gets a reply.
        get(fileId: string, commentId: string, replyId: string): Drive_v2.Schema.CommentReply;
        // Gets a reply.
        get(fileId: string, commentId: string, replyId: string, optionalArgs: object): Drive_v2.Schema.CommentReply;
        // Creates a new reply to the given comment.
        insert(resource: Schema.CommentReply, fileId: string, commentId: string): Drive_v2.Schema.CommentReply;
        // Lists all of the replies to a comment.
        list(fileId: string, commentId: string): Drive_v2.Schema.CommentReplyList;
        // Lists all of the replies to a comment.
        list(fileId: string, commentId: string, optionalArgs: object): Drive_v2.Schema.CommentReplyList;
        // Updates an existing reply. This method supports patch semantics.
        patch(resource: Schema.CommentReply, fileId: string, commentId: string, replyId: string): Drive_v2.Schema.CommentReply;
        // Deletes a reply.
        remove(fileId: string, commentId: string, replyId: string): void;
        // Updates an existing reply.
        update(resource: Schema.CommentReply, fileId: string, commentId: string, replyId: string): Drive_v2.Schema.CommentReply;
      }
      export interface RevisionsCollection {
        // Gets a specific revision.
        get(fileId: string, revisionId: string): Drive_v2.Schema.Revision;
        // Lists a file's revisions.
        list(fileId: string): Drive_v2.Schema.RevisionList;
        // Lists a file's revisions.
        list(fileId: string, optionalArgs: object): Drive_v2.Schema.RevisionList;
        // Updates a revision. This method supports patch semantics.
        patch(resource: Schema.Revision, fileId: string, revisionId: string): Drive_v2.Schema.Revision;
        // Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
        remove(fileId: string, revisionId: string): void;
        // Updates a revision.
        update(resource: Schema.Revision, fileId: string, revisionId: string): Drive_v2.Schema.Revision;
      }
      export interface TeamdrivesCollection {
        // Gets a Team Drive's metadata by ID.
        get(teamDriveId: string): Drive_v2.Schema.TeamDrive;
        // Gets a Team Drive's metadata by ID.
        get(teamDriveId: string, optionalArgs: object): Drive_v2.Schema.TeamDrive;
        // Creates a new Team Drive.
        insert(resource: Schema.TeamDrive, requestId: string): Drive_v2.Schema.TeamDrive;
        // Lists the user's Team Drives.
        list(): Drive_v2.Schema.TeamDriveList;
        // Lists the user's Team Drives.
        list(optionalArgs: object): Drive_v2.Schema.TeamDriveList;
        // Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.
        remove(teamDriveId: string): void;
        // Updates a Team Drive's metadata
        update(resource: Schema.TeamDrive, teamDriveId: string): Drive_v2.Schema.TeamDrive;
        // Updates a Team Drive's metadata
        update(resource: Schema.TeamDrive, teamDriveId: string, optionalArgs: object): Drive_v2.Schema.TeamDrive;
      }
    }
    namespace Schema {
      export interface About {
        additionalRoleInfo?: Drive_v2.Schema.AboutAdditionalRoleInfo[];
        canCreateTeamDrives?: boolean;
        domainSharingPolicy?: string;
        etag?: string;
        exportFormats?: Drive_v2.Schema.AboutExportFormats[];
        features?: Drive_v2.Schema.AboutFeatures[];
        folderColorPalette?: string[];
        importFormats?: Drive_v2.Schema.AboutImportFormats[];
        isCurrentAppInstalled?: boolean;
        kind?: string;
        languageCode?: string;
        largestChangeId?: string;
        maxUploadSizes?: Drive_v2.Schema.AboutMaxUploadSizes[];
        name?: string;
        permissionId?: string;
        quotaBytesByService?: Drive_v2.Schema.AboutQuotaBytesByService[];
        quotaBytesTotal?: string;
        quotaBytesUsed?: string;
        quotaBytesUsedAggregate?: string;
        quotaBytesUsedInTrash?: string;
        quotaType?: string;
        remainingChangeIds?: string;
        rootFolderId?: string;
        selfLink?: string;
        teamDriveThemes?: Drive_v2.Schema.AboutTeamDriveThemes[];
        user?: Drive_v2.Schema.User;
      }
      export interface AboutAdditionalRoleInfo {
        roleSets?: Drive_v2.Schema.AboutAdditionalRoleInfoRoleSets[];
        type?: string;
      }
      export interface AboutAdditionalRoleInfoRoleSets {
        additionalRoles?: string[];
        primaryRole?: string;
      }
      export interface AboutExportFormats {
        source?: string;
        targets?: string[];
      }
      export interface AboutFeatures {
        featureName?: string;
        featureRate?: Number;
      }
      export interface AboutImportFormats {
        source?: string;
        targets?: string[];
      }
      export interface AboutMaxUploadSizes {
        size?: string;
        type?: string;
      }
      export interface AboutQuotaBytesByService {
        bytesUsed?: string;
        serviceName?: string;
      }
      export interface AboutTeamDriveThemes {
        backgroundImageLink?: string;
        colorRgb?: string;
        id?: string;
      }
      export interface App {
        authorized?: boolean;
        createInFolderTemplate?: string;
        createUrl?: string;
        hasDriveWideScope?: boolean;
        icons?: Drive_v2.Schema.AppIcons[];
        id?: string;
        installed?: boolean;
        kind?: string;
        longDescription?: string;
        name?: string;
        objectType?: string;
        openUrlTemplate?: string;
        primaryFileExtensions?: string[];
        primaryMimeTypes?: string[];
        productId?: string;
        productUrl?: string;
        secondaryFileExtensions?: string[];
        secondaryMimeTypes?: string[];
        shortDescription?: string;
        supportsCreate?: boolean;
        supportsImport?: boolean;
        supportsMultiOpen?: boolean;
        supportsOfflineCreate?: boolean;
        useByDefault?: boolean;
      }
      export interface AppIcons {
        category?: string;
        iconUrl?: string;
        size?: number;
      }
      export interface AppList {
        defaultAppIds?: string[];
        etag?: string;
        items?: Drive_v2.Schema.App[];
        kind?: string;
        selfLink?: string;
      }
      export interface Change {
        deleted?: boolean;
        file?: Drive_v2.Schema.File;
        fileId?: string;
        id?: string;
        kind?: string;
        modificationDate?: string;
        selfLink?: string;
        teamDrive?: Drive_v2.Schema.TeamDrive;
        teamDriveId?: string;
        type?: string;
      }
      export interface ChangeList {
        etag?: string;
        items?: Drive_v2.Schema.Change[];
        kind?: string;
        largestChangeId?: string;
        newStartPageToken?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      export interface Channel {
        address?: string;
        expiration?: string;
        id?: string;
        kind?: string;
        params?: object;
        payload?: boolean;
        resourceId?: string;
        resourceUri?: string;
        token?: string;
        type?: string;
      }
      export interface ChildList {
        etag?: string;
        items?: Drive_v2.Schema.ChildReference[];
        kind?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      export interface ChildReference {
        childLink?: string;
        id?: string;
        kind?: string;
        selfLink?: string;
      }
      export interface Comment {
        anchor?: string;
        author?: Drive_v2.Schema.User;
        commentId?: string;
        content?: string;
        context?: Drive_v2.Schema.CommentContext;
        createdDate?: string;
        deleted?: boolean;
        fileId?: string;
        fileTitle?: string;
        htmlContent?: string;
        kind?: string;
        modifiedDate?: string;
        replies?: Drive_v2.Schema.CommentReply[];
        selfLink?: string;
        status?: string;
      }
      export interface CommentContext {
        type?: string;
        value?: string;
      }
      export interface CommentList {
        items?: Drive_v2.Schema.Comment[];
        kind?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      export interface CommentReply {
        author?: Drive_v2.Schema.User;
        content?: string;
        createdDate?: string;
        deleted?: boolean;
        htmlContent?: string;
        kind?: string;
        modifiedDate?: string;
        replyId?: string;
        verb?: string;
      }
      export interface CommentReplyList {
        items?: Drive_v2.Schema.CommentReply[];
        kind?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      export interface File {
        alternateLink?: string;
        appDataContents?: boolean;
        canComment?: boolean;
        canReadRevisions?: boolean;
        capabilities?: Drive_v2.Schema.FileCapabilities;
        copyRequiresWriterPermission?: boolean;
        copyable?: boolean;
        createdDate?: string;
        defaultOpenWithLink?: string;
        description?: string;
        downloadUrl?: string;
        editable?: boolean;
        embedLink?: string;
        etag?: string;
        explicitlyTrashed?: boolean;
        exportLinks?: object;
        fileExtension?: string;
        fileSize?: string;
        folderColorRgb?: string;
        fullFileExtension?: string;
        hasAugmentedPermissions?: boolean;
        hasThumbnail?: boolean;
        headRevisionId?: string;
        iconLink?: string;
        id?: string;
        imageMediaMetadata?: Drive_v2.Schema.FileImageMediaMetadata;
        indexableText?: Drive_v2.Schema.FileIndexableText;
        isAppAuthorized?: boolean;
        kind?: string;
        labels?: Drive_v2.Schema.FileLabels;
        lastModifyingUser?: Drive_v2.Schema.User;
        lastModifyingUserName?: string;
        lastViewedByMeDate?: string;
        markedViewedByMeDate?: string;
        md5Checksum?: string;
        mimeType?: string;
        modifiedByMeDate?: string;
        modifiedDate?: string;
        openWithLinks?: object;
        originalFilename?: string;
        ownedByMe?: boolean;
        ownerNames?: string[];
        owners?: Drive_v2.Schema.User[];
        parents?: Drive_v2.Schema.ParentReference[];
        permissionIds?: string[];
        permissions?: Drive_v2.Schema.Permission[];
        properties?: Drive_v2.Schema.Property[];
        quotaBytesUsed?: string;
        selfLink?: string;
        shareable?: boolean;
        shared?: boolean;
        sharedWithMeDate?: string;
        sharingUser?: Drive_v2.Schema.User;
        spaces?: string[];
        teamDriveId?: string;
        thumbnail?: Drive_v2.Schema.FileThumbnail;
        thumbnailLink?: string;
        thumbnailVersion?: string;
        title?: string;
        trashedDate?: string;
        trashingUser?: Drive_v2.Schema.User;
        userPermission?: Drive_v2.Schema.Permission;
        version?: string;
        videoMediaMetadata?: Drive_v2.Schema.FileVideoMediaMetadata;
        webContentLink?: string;
        webViewLink?: string;
        writersCanShare?: boolean;
      }
      export interface FileCapabilities {
        canAddChildren?: boolean;
        canChangeCopyRequiresWriterPermission?: boolean;
        canChangeRestrictedDownload?: boolean;
        canComment?: boolean;
        canCopy?: boolean;
        canDelete?: boolean;
        canDeleteChildren?: boolean;
        canDownload?: boolean;
        canEdit?: boolean;
        canListChildren?: boolean;
        canMoveChildrenOutOfTeamDrive?: boolean;
        canMoveChildrenWithinTeamDrive?: boolean;
        canMoveItemIntoTeamDrive?: boolean;
        canMoveItemOutOfTeamDrive?: boolean;
        canMoveItemWithinTeamDrive?: boolean;
        canMoveTeamDriveItem?: boolean;
        canReadRevisions?: boolean;
        canReadTeamDrive?: boolean;
        canRemoveChildren?: boolean;
        canRename?: boolean;
        canShare?: boolean;
        canTrash?: boolean;
        canTrashChildren?: boolean;
        canUntrash?: boolean;
      }
      export interface FileImageMediaMetadata {
        aperture?: Number;
        cameraMake?: string;
        cameraModel?: string;
        colorSpace?: string;
        date?: string;
        exposureBias?: Number;
        exposureMode?: string;
        exposureTime?: Number;
        flashUsed?: boolean;
        focalLength?: Number;
        height?: number;
        isoSpeed?: number;
        lens?: string;
        location?: Drive_v2.Schema.FileImageMediaMetadataLocation;
        maxApertureValue?: Number;
        meteringMode?: string;
        rotation?: number;
        sensor?: string;
        subjectDistance?: number;
        whiteBalance?: string;
        width?: number;
      }
      export interface FileImageMediaMetadataLocation {
        altitude?: Number;
        latitude?: Number;
        longitude?: Number;
      }
      export interface FileIndexableText {
        text?: string;
      }
      export interface FileLabels {
        hidden?: boolean;
        modified?: boolean;
        restricted?: boolean;
        starred?: boolean;
        trashed?: boolean;
        viewed?: boolean;
      }
      export interface FileList {
        etag?: string;
        incompleteSearch?: boolean;
        items?: Drive_v2.Schema.File[];
        kind?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      export interface FileThumbnail {
        image?: string;
        mimeType?: string;
      }
      export interface FileVideoMediaMetadata {
        durationMillis?: string;
        height?: number;
        width?: number;
      }
      export interface GeneratedIds {
        ids?: string[];
        kind?: string;
        space?: string;
      }
      export interface ParentList {
        etag?: string;
        items?: Drive_v2.Schema.ParentReference[];
        kind?: string;
        selfLink?: string;
      }
      export interface ParentReference {
        id?: string;
        isRoot?: boolean;
        kind?: string;
        parentLink?: string;
        selfLink?: string;
      }
      export interface Permission {
        additionalRoles?: string[];
        authKey?: string;
        deleted?: boolean;
        domain?: string;
        emailAddress?: string;
        etag?: string;
        expirationDate?: string;
        id?: string;
        kind?: string;
        name?: string;
        photoLink?: string;
        role?: string;
        selfLink?: string;
        teamDrivePermissionDetails?: Drive_v2.Schema.PermissionTeamDrivePermissionDetails[];
        type?: string;
        value?: string;
        withLink?: boolean;
      }
      export interface PermissionId {
        id?: string;
        kind?: string;
      }
      export interface PermissionList {
        etag?: string;
        items?: Drive_v2.Schema.Permission[];
        kind?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      export interface PermissionTeamDrivePermissionDetails {
        additionalRoles?: string[];
        inherited?: boolean;
        inheritedFrom?: string;
        role?: string;
        teamDrivePermissionType?: string;
      }
      export interface Property {
        etag?: string;
        key?: string;
        kind?: string;
        selfLink?: string;
        value?: string;
        visibility?: string;
      }
      export interface PropertyList {
        etag?: string;
        items?: Drive_v2.Schema.Property[];
        kind?: string;
        selfLink?: string;
      }
      export interface Revision {
        downloadUrl?: string;
        etag?: string;
        exportLinks?: object;
        fileSize?: string;
        id?: string;
        kind?: string;
        lastModifyingUser?: Drive_v2.Schema.User;
        lastModifyingUserName?: string;
        md5Checksum?: string;
        mimeType?: string;
        modifiedDate?: string;
        originalFilename?: string;
        pinned?: boolean;
        publishAuto?: boolean;
        published?: boolean;
        publishedLink?: string;
        publishedOutsideDomain?: boolean;
        selfLink?: string;
      }
      export interface RevisionList {
        etag?: string;
        items?: Drive_v2.Schema.Revision[];
        kind?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      export interface StartPageToken {
        kind?: string;
        startPageToken?: string;
      }
      export interface TeamDrive {
        backgroundImageFile?: Drive_v2.Schema.TeamDriveBackgroundImageFile;
        backgroundImageLink?: string;
        capabilities?: Drive_v2.Schema.TeamDriveCapabilities;
        colorRgb?: string;
        createdDate?: string;
        id?: string;
        kind?: string;
        name?: string;
        restrictions?: Drive_v2.Schema.TeamDriveRestrictions;
        themeId?: string;
      }
      export interface TeamDriveBackgroundImageFile {
        id?: string;
        width?: Number;
        xCoordinate?: Number;
        yCoordinate?: Number;
      }
      export interface TeamDriveCapabilities {
        canAddChildren?: boolean;
        canChangeCopyRequiresWriterPermissionRestriction?: boolean;
        canChangeDomainUsersOnlyRestriction?: boolean;
        canChangeTeamDriveBackground?: boolean;
        canChangeTeamMembersOnlyRestriction?: boolean;
        canComment?: boolean;
        canCopy?: boolean;
        canDeleteChildren?: boolean;
        canDeleteTeamDrive?: boolean;
        canDownload?: boolean;
        canEdit?: boolean;
        canListChildren?: boolean;
        canManageMembers?: boolean;
        canReadRevisions?: boolean;
        canRemoveChildren?: boolean;
        canRename?: boolean;
        canRenameTeamDrive?: boolean;
        canShare?: boolean;
        canTrashChildren?: boolean;
      }
      export interface TeamDriveList {
        items?: Drive_v2.Schema.TeamDrive[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface TeamDriveRestrictions {
        adminManagedRestrictions?: boolean;
        copyRequiresWriterPermission?: boolean;
        domainUsersOnly?: boolean;
        teamMembersOnly?: boolean;
      }
      export interface User {
        displayName?: string;
        emailAddress?: string;
        isAuthenticatedUser?: boolean;
        kind?: string;
        permissionId?: string;
        picture?: Drive_v2.Schema.UserPicture;
      }
      export interface UserPicture {
        url?: string;
      }
    }
  }
  export interface Drive_v2 {
    About?: Drive_v2.Collection.AboutCollection;
    Apps?: Drive_v2.Collection.AppsCollection;
    Changes?: Drive_v2.Collection.ChangesCollection;
    Channels?: Drive_v2.Collection.ChannelsCollection;
    Children?: Drive_v2.Collection.ChildrenCollection;
    Comments?: Drive_v2.Collection.CommentsCollection;
    Files?: Drive_v2.Collection.FilesCollection;
    Parents?: Drive_v2.Collection.ParentsCollection;
    Permissions?: Drive_v2.Collection.PermissionsCollection;
    Properties?: Drive_v2.Collection.PropertiesCollection;
    Realtime?: Drive_v2.Collection.RealtimeCollection;
    Replies?: Drive_v2.Collection.RepliesCollection;
    Revisions?: Drive_v2.Collection.RevisionsCollection;
    Teamdrives?: Drive_v2.Collection.TeamdrivesCollection;
    // Create a new instance of Channel
    newChannel(): Drive_v2.Schema.Channel;
    // Create a new instance of ChildReference
    newChildReference(): Drive_v2.Schema.ChildReference;
    // Create a new instance of Comment
    newComment(): Drive_v2.Schema.Comment;
    // Create a new instance of CommentContext
    newCommentContext(): Drive_v2.Schema.CommentContext;
    // Create a new instance of CommentReply
    newCommentReply(): Drive_v2.Schema.CommentReply;
    // Create a new instance of File
    newFile(): Drive_v2.Schema.File;
    // Create a new instance of FileCapabilities
    newFileCapabilities(): Drive_v2.Schema.FileCapabilities;
    // Create a new instance of FileImageMediaMetadata
    newFileImageMediaMetadata(): Drive_v2.Schema.FileImageMediaMetadata;
    // Create a new instance of FileImageMediaMetadataLocation
    newFileImageMediaMetadataLocation(): Drive_v2.Schema.FileImageMediaMetadataLocation;
    // Create a new instance of FileIndexableText
    newFileIndexableText(): Drive_v2.Schema.FileIndexableText;
    // Create a new instance of FileLabels
    newFileLabels(): Drive_v2.Schema.FileLabels;
    // Create a new instance of FileThumbnail
    newFileThumbnail(): Drive_v2.Schema.FileThumbnail;
    // Create a new instance of FileVideoMediaMetadata
    newFileVideoMediaMetadata(): Drive_v2.Schema.FileVideoMediaMetadata;
    // Create a new instance of ParentReference
    newParentReference(): Drive_v2.Schema.ParentReference;
    // Create a new instance of Permission
    newPermission(): Drive_v2.Schema.Permission;
    // Create a new instance of PermissionTeamDrivePermissionDetails
    newPermissionTeamDrivePermissionDetails(): Drive_v2.Schema.PermissionTeamDrivePermissionDetails;
    // Create a new instance of Property
    newProperty(): Drive_v2.Schema.Property;
    // Create a new instance of Revision
    newRevision(): Drive_v2.Schema.Revision;
    // Create a new instance of TeamDrive
    newTeamDrive(): Drive_v2.Schema.TeamDrive;
    // Create a new instance of TeamDriveBackgroundImageFile
    newTeamDriveBackgroundImageFile(): Drive_v2.Schema.TeamDriveBackgroundImageFile;
    // Create a new instance of TeamDriveCapabilities
    newTeamDriveCapabilities(): Drive_v2.Schema.TeamDriveCapabilities;
    // Create a new instance of TeamDriveRestrictions
    newTeamDriveRestrictions(): Drive_v2.Schema.TeamDriveRestrictions;
    // Create a new instance of User
    newUser(): Drive_v2.Schema.User;
    // Create a new instance of UserPicture
    newUserPicture(): Drive_v2.Schema.UserPicture;
  }
}

declare var Drive_v2: GoogleAppsScript.Drive_v2;