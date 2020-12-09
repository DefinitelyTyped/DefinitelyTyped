// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Drive {
    namespace Collection {
      interface AboutCollection {
        // Gets the information about the current user along with Drive API settings
        get(): Drive.Schema.About;
        // Gets the information about the current user along with Drive API settings
        get(optionalArgs: object): Drive.Schema.About;
      }
      interface AppsCollection {
        // Gets a specific app.
        get(appId: string): Drive.Schema.App;
        // Lists a user's installed apps.
        list(): Drive.Schema.AppList;
        // Lists a user's installed apps.
        list(optionalArgs: object): Drive.Schema.AppList;
      }
      interface ChangesCollection {
        // Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
        get(changeId: string): Drive.Schema.Change;
        // Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
        get(changeId: string, optionalArgs: object): Drive.Schema.Change;
        // Gets the starting pageToken for listing future changes.
        getStartPageToken(): Drive.Schema.StartPageToken;
        // Gets the starting pageToken for listing future changes.
        getStartPageToken(optionalArgs: object): Drive.Schema.StartPageToken;
        // Lists the changes for a user or Team Drive.
        list(): Drive.Schema.ChangeList;
        // Lists the changes for a user or Team Drive.
        list(optionalArgs: object): Drive.Schema.ChangeList;
        // Subscribe to changes for a user.
        watch(resource: Schema.Channel): Drive.Schema.Channel;
        // Subscribe to changes for a user.
        watch(resource: Schema.Channel, optionalArgs: object): Drive.Schema.Channel;
      }
      interface ChannelsCollection {
        // Stop watching resources through this channel
        stop(resource: Schema.Channel): void;
      }
      interface ChildrenCollection {
        // Gets a specific child reference.
        get(folderId: string, childId: string): Drive.Schema.ChildReference;
        // Inserts a file into a folder.
        insert(resource: Schema.ChildReference, folderId: string): Drive.Schema.ChildReference;
        // Inserts a file into a folder.
        insert(resource: Schema.ChildReference, folderId: string, optionalArgs: object): Drive.Schema.ChildReference;
        // Lists a folder's children.
        list(folderId: string): Drive.Schema.ChildList;
        // Lists a folder's children.
        list(folderId: string, optionalArgs: object): Drive.Schema.ChildList;
        // Removes a child from a folder.
        remove(folderId: string, childId: string): void;
      }
      interface CommentsCollection {
        // Gets a comment by ID.
        get(fileId: string, commentId: string): Drive.Schema.Comment;
        // Gets a comment by ID.
        get(fileId: string, commentId: string, optionalArgs: object): Drive.Schema.Comment;
        // Creates a new comment on the given file.
        insert(resource: Schema.Comment, fileId: string): Drive.Schema.Comment;
        // Lists a file's comments.
        list(fileId: string): Drive.Schema.CommentList;
        // Lists a file's comments.
        list(fileId: string, optionalArgs: object): Drive.Schema.CommentList;
        // Updates an existing comment. This method supports patch semantics.
        patch(resource: Schema.Comment, fileId: string, commentId: string): Drive.Schema.Comment;
        // Deletes a comment.
        remove(fileId: string, commentId: string): void;
        // Updates an existing comment.
        update(resource: Schema.Comment, fileId: string, commentId: string): Drive.Schema.Comment;
      }
      interface DrivesCollection {
        // Gets a shared drive's metadata by ID.
        get(driveId: string): Drive.Schema.Drive;
        // Gets a shared drive's metadata by ID.
        get(driveId: string, optionalArgs: object): Drive.Schema.Drive;
        // Hides a shared drive from the default view.
        hide(driveId: string): Drive.Schema.Drive;
        // Creates a new shared drive.
        insert(resource: Schema.Drive, requestId: string): Drive.Schema.Drive;
        // Lists the user's shared drives.
        list(): Drive.Schema.DriveList;
        // Lists the user's shared drives.
        list(optionalArgs: object): Drive.Schema.DriveList;
        // Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
        remove(driveId: string): void;
        // Restores a shared drive to the default view.
        unhide(driveId: string): Drive.Schema.Drive;
        // Updates the metadata for a shared drive.
        update(resource: Schema.Drive, driveId: string): Drive.Schema.Drive;
        // Updates the metadata for a shared drive.
        update(resource: Schema.Drive, driveId: string, optionalArgs: object): Drive.Schema.Drive;
      }
      interface FilesCollection {
        // Creates a copy of the specified file.
        copy(resource: Schema.File, fileId: string): Drive.Schema.File;
        // Creates a copy of the specified file.
        copy(resource: Schema.File, fileId: string, optionalArgs: object): Drive.Schema.File;
        // Permanently deletes all of the user's trashed files.
        emptyTrash(): void;
        // Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.
        export(fileId: string, mimeType: string): void;
        // Generates a set of file IDs which can be provided in insert requests.
        generateIds(): Drive.Schema.GeneratedIds;
        // Generates a set of file IDs which can be provided in insert requests.
        generateIds(optionalArgs: object): Drive.Schema.GeneratedIds;
        // Gets a file's metadata by ID.
        get(fileId: string): Drive.Schema.File;
        // Gets a file's metadata by ID.
        get(fileId: string, optionalArgs: object): Drive.Schema.File;
        // Insert a new file.
        insert(resource: Schema.File): Drive.Schema.File;
        // Insert a new file.
        insert(resource: Schema.File, mediaData: any): Drive.Schema.File;
        // Insert a new file.
        insert(resource: Schema.File, mediaData: any, optionalArgs: object): Drive.Schema.File;
        // Lists the user's files.
        list(): Drive.Schema.FileList;
        // Lists the user's files.
        list(optionalArgs: object): Drive.Schema.FileList;
        // Updates file metadata and/or content. This method supports patch semantics.
        patch(resource: Schema.File, fileId: string): Drive.Schema.File;
        // Updates file metadata and/or content. This method supports patch semantics.
        patch(resource: Schema.File, fileId: string, optionalArgs: object): Drive.Schema.File;
        // Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.
        remove(fileId: string): void;
        // Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.
        remove(fileId: string, optionalArgs: object): void;
        // Set the file's updated time to the current server time.
        touch(fileId: string): Drive.Schema.File;
        // Set the file's updated time to the current server time.
        touch(fileId: string, optionalArgs: object): Drive.Schema.File;
        // Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for Team Drive files.
        trash(fileId: string): Drive.Schema.File;
        // Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for Team Drive files.
        trash(fileId: string, optionalArgs: object): Drive.Schema.File;
        // Restores a file from the trash.
        untrash(fileId: string): Drive.Schema.File;
        // Restores a file from the trash.
        untrash(fileId: string, optionalArgs: object): Drive.Schema.File;
        // Updates file metadata and/or content.
        update(resource: Schema.File, fileId: string): Drive.Schema.File;
        // Updates file metadata and/or content.
        update(resource: Schema.File, fileId: string, mediaData: any): Drive.Schema.File;
        // Updates file metadata and/or content.
        update(resource: Schema.File, fileId: string, mediaData: any, optionalArgs: object): Drive.Schema.File;
        // Subscribe to changes on a file
        watch(resource: Schema.Channel, fileId: string): Drive.Schema.Channel;
        // Subscribe to changes on a file
        watch(resource: Schema.Channel, fileId: string, optionalArgs: object): Drive.Schema.Channel;
      }
      interface ParentsCollection {
        // Gets a specific parent reference.
        get(fileId: string, parentId: string): Drive.Schema.ParentReference;
        // Adds a parent folder for a file.
        insert(resource: Schema.ParentReference, fileId: string): Drive.Schema.ParentReference;
        // Adds a parent folder for a file.
        insert(resource: Schema.ParentReference, fileId: string, optionalArgs: object): Drive.Schema.ParentReference;
        // Lists a file's parents.
        list(fileId: string): Drive.Schema.ParentList;
        // Removes a parent from a file.
        remove(fileId: string, parentId: string): void;
      }
      interface PermissionsCollection {
        // Gets a permission by ID.
        get(fileId: string, permissionId: string): Drive.Schema.Permission;
        // Gets a permission by ID.
        get(fileId: string, permissionId: string, optionalArgs: object): Drive.Schema.Permission;
        // Returns the permission ID for an email address.
        getIdForEmail(email: string): Drive.Schema.PermissionId;
        // Inserts a permission for a file or Team Drive.
        insert(resource: Schema.Permission, fileId: string): Drive.Schema.Permission;
        // Inserts a permission for a file or Team Drive.
        insert(resource: Schema.Permission, fileId: string, optionalArgs: object): Drive.Schema.Permission;
        // Lists a file's or Team Drive's permissions.
        list(fileId: string): Drive.Schema.PermissionList;
        // Lists a file's or Team Drive's permissions.
        list(fileId: string, optionalArgs: object): Drive.Schema.PermissionList;
        // Updates a permission using patch semantics.
        patch(resource: Schema.Permission, fileId: string, permissionId: string): Drive.Schema.Permission;
        // Updates a permission using patch semantics.
        patch(resource: Schema.Permission, fileId: string, permissionId: string, optionalArgs: object): Drive.Schema.Permission;
        // Deletes a permission from a file or Team Drive.
        remove(fileId: string, permissionId: string): void;
        // Deletes a permission from a file or Team Drive.
        remove(fileId: string, permissionId: string, optionalArgs: object): void;
        // Updates a permission.
        update(resource: Schema.Permission, fileId: string, permissionId: string): Drive.Schema.Permission;
        // Updates a permission.
        update(resource: Schema.Permission, fileId: string, permissionId: string, optionalArgs: object): Drive.Schema.Permission;
      }
      interface PropertiesCollection {
        // Gets a property by its key.
        get(fileId: string, propertyKey: string): Drive.Schema.Property;
        // Gets a property by its key.
        get(fileId: string, propertyKey: string, optionalArgs: object): Drive.Schema.Property;
        // Adds a property to a file, or updates it if it already exists.
        insert(resource: Schema.Property, fileId: string): Drive.Schema.Property;
        // Lists a file's properties.
        list(fileId: string): Drive.Schema.PropertyList;
        // Updates a property.
        patch(resource: Schema.Property, fileId: string, propertyKey: string): Drive.Schema.Property;
        // Updates a property.
        patch(resource: Schema.Property, fileId: string, propertyKey: string, optionalArgs: object): Drive.Schema.Property;
        // Deletes a property.
        remove(fileId: string, propertyKey: string): void;
        // Deletes a property.
        remove(fileId: string, propertyKey: string, optionalArgs: object): void;
        // Updates a property.
        update(resource: Schema.Property, fileId: string, propertyKey: string): Drive.Schema.Property;
        // Updates a property.
        update(resource: Schema.Property, fileId: string, propertyKey: string, optionalArgs: object): Drive.Schema.Property;
      }
      interface RealtimeCollection {
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
      interface RepliesCollection {
        // Gets a reply.
        get(fileId: string, commentId: string, replyId: string): Drive.Schema.CommentReply;
        // Gets a reply.
        get(fileId: string, commentId: string, replyId: string, optionalArgs: object): Drive.Schema.CommentReply;
        // Creates a new reply to the given comment.
        insert(resource: Schema.CommentReply, fileId: string, commentId: string): Drive.Schema.CommentReply;
        // Lists all of the replies to a comment.
        list(fileId: string, commentId: string): Drive.Schema.CommentReplyList;
        // Lists all of the replies to a comment.
        list(fileId: string, commentId: string, optionalArgs: object): Drive.Schema.CommentReplyList;
        // Updates an existing reply. This method supports patch semantics.
        patch(resource: Schema.CommentReply, fileId: string, commentId: string, replyId: string): Drive.Schema.CommentReply;
        // Deletes a reply.
        remove(fileId: string, commentId: string, replyId: string): void;
        // Updates an existing reply.
        update(resource: Schema.CommentReply, fileId: string, commentId: string, replyId: string): Drive.Schema.CommentReply;
      }
      interface RevisionsCollection {
        // Gets a specific revision.
        get(fileId: string, revisionId: string): Drive.Schema.Revision;
        // Lists a file's revisions.
        list(fileId: string): Drive.Schema.RevisionList;
        // Lists a file's revisions.
        list(fileId: string, optionalArgs: object): Drive.Schema.RevisionList;
        // Updates a revision. This method supports patch semantics.
        patch(resource: Schema.Revision, fileId: string, revisionId: string): Drive.Schema.Revision;
        // Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
        remove(fileId: string, revisionId: string): void;
        // Updates a revision.
        update(resource: Schema.Revision, fileId: string, revisionId: string): Drive.Schema.Revision;
      }
      interface TeamdrivesCollection {
        // Gets a Team Drive's metadata by ID.
        get(teamDriveId: string): Drive.Schema.TeamDrive;
        // Gets a Team Drive's metadata by ID.
        get(teamDriveId: string, optionalArgs: object): Drive.Schema.TeamDrive;
        // Creates a new Team Drive.
        insert(resource: Schema.TeamDrive, requestId: string): Drive.Schema.TeamDrive;
        // Lists the user's Team Drives.
        list(): Drive.Schema.TeamDriveList;
        // Lists the user's Team Drives.
        list(optionalArgs: object): Drive.Schema.TeamDriveList;
        // Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.
        remove(teamDriveId: string): void;
        // Updates a Team Drive's metadata
        update(resource: Schema.TeamDrive, teamDriveId: string): Drive.Schema.TeamDrive;
        // Updates a Team Drive's metadata
        update(resource: Schema.TeamDrive, teamDriveId: string, optionalArgs: object): Drive.Schema.TeamDrive;
      }
    }
    namespace Schema {
      interface About {
        additionalRoleInfo?: Drive.Schema.AboutAdditionalRoleInfo[];
        canCreateDrives?: boolean;
        canCreateTeamDrives?: boolean;
        domainSharingPolicy?: string;
        driveThemes?: Drive.Schema.AboutDriveThemes[];
        etag?: string;
        exportFormats?: Drive.Schema.AboutExportFormats[];
        features?: Drive.Schema.AboutFeatures[];
        folderColorPalette?: string[];
        importFormats?: Drive.Schema.AboutImportFormats[];
        isCurrentAppInstalled?: boolean;
        kind?: string;
        languageCode?: string;
        largestChangeId?: string;
        maxUploadSizes?: Drive.Schema.AboutMaxUploadSizes[];
        name?: string;
        permissionId?: string;
        quotaBytesByService?: Drive.Schema.AboutQuotaBytesByService[];
        quotaBytesTotal?: string;
        quotaBytesUsed?: string;
        quotaBytesUsedAggregate?: string;
        quotaBytesUsedInTrash?: string;
        quotaType?: string;
        remainingChangeIds?: string;
        rootFolderId?: string;
        selfLink?: string;
        teamDriveThemes?: Drive.Schema.AboutTeamDriveThemes[];
        user?: Drive.Schema.User;
      }
      interface AboutAdditionalRoleInfo {
        roleSets?: Drive.Schema.AboutAdditionalRoleInfoRoleSets[];
        type?: string;
      }
      interface AboutAdditionalRoleInfoRoleSets {
        additionalRoles?: string[];
        primaryRole?: string;
      }
      interface AboutDriveThemes {
        backgroundImageLink?: string;
        colorRgb?: string;
        id?: string;
      }
      interface AboutExportFormats {
        source?: string;
        targets?: string[];
      }
      interface AboutFeatures {
        featureName?: string;
        featureRate?: number;
      }
      interface AboutImportFormats {
        source?: string;
        targets?: string[];
      }
      interface AboutMaxUploadSizes {
        size?: string;
        type?: string;
      }
      interface AboutQuotaBytesByService {
        bytesUsed?: string;
        serviceName?: string;
      }
      interface AboutTeamDriveThemes {
        backgroundImageLink?: string;
        colorRgb?: string;
        id?: string;
      }
      interface App {
        authorized?: boolean;
        createInFolderTemplate?: string;
        createUrl?: string;
        hasDriveWideScope?: boolean;
        icons?: Drive.Schema.AppIcons[];
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
      interface AppIcons {
        category?: string;
        iconUrl?: string;
        size?: number;
      }
      interface AppList {
        defaultAppIds?: string[];
        etag?: string;
        items?: Drive.Schema.App[];
        kind?: string;
        selfLink?: string;
      }
      interface Change {
        deleted?: boolean;
        drive?: Drive.Schema.Drive;
        driveId?: string;
        file?: Drive.Schema.File;
        fileId?: string;
        id?: string;
        kind?: string;
        modificationDate?: string;
        selfLink?: string;
        teamDrive?: Drive.Schema.TeamDrive;
        teamDriveId?: string;
        type?: string;
      }
      interface ChangeList {
        etag?: string;
        items?: Drive.Schema.Change[];
        kind?: string;
        largestChangeId?: string;
        newStartPageToken?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      interface Channel {
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
      interface ChildList {
        etag?: string;
        items?: Drive.Schema.ChildReference[];
        kind?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      interface ChildReference {
        childLink?: string;
        id?: string;
        kind?: string;
        selfLink?: string;
      }
      interface Comment {
        anchor?: string;
        author?: Drive.Schema.User;
        commentId?: string;
        content?: string;
        context?: Drive.Schema.CommentContext;
        createdDate?: string;
        deleted?: boolean;
        fileId?: string;
        fileTitle?: string;
        htmlContent?: string;
        kind?: string;
        modifiedDate?: string;
        replies?: Drive.Schema.CommentReply[];
        selfLink?: string;
        status?: string;
      }
      interface CommentContext {
        type?: string;
        value?: string;
      }
      interface CommentList {
        items?: Drive.Schema.Comment[];
        kind?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      interface CommentReply {
        author?: Drive.Schema.User;
        content?: string;
        createdDate?: string;
        deleted?: boolean;
        htmlContent?: string;
        kind?: string;
        modifiedDate?: string;
        replyId?: string;
        verb?: string;
      }
      interface CommentReplyList {
        items?: Drive.Schema.CommentReply[];
        kind?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      interface Drive {
        backgroundImageFile?: Drive.Schema.DriveBackgroundImageFile;
        backgroundImageLink?: string;
        capabilities?: Drive.Schema.DriveCapabilities;
        colorRgb?: string;
        createdDate?: string;
        hidden?: boolean;
        id?: string;
        kind?: string;
        name?: string;
        restrictions?: Drive.Schema.DriveRestrictions;
        themeId?: string;
      }
      interface DriveBackgroundImageFile {
        id?: string;
        width?: number;
        xCoordinate?: number;
        yCoordinate?: number;
      }
      interface DriveCapabilities {
        canAddChildren?: boolean;
        canChangeCopyRequiresWriterPermissionRestriction?: boolean;
        canChangeDomainUsersOnlyRestriction?: boolean;
        canChangeDriveBackground?: boolean;
        canChangeDriveMembersOnlyRestriction?: boolean;
        canComment?: boolean;
        canCopy?: boolean;
        canDeleteChildren?: boolean;
        canDeleteDrive?: boolean;
        canDownload?: boolean;
        canEdit?: boolean;
        canListChildren?: boolean;
        canManageMembers?: boolean;
        canReadRevisions?: boolean;
        canRename?: boolean;
        canRenameDrive?: boolean;
        canShare?: boolean;
        canTrashChildren?: boolean;
      }
      interface DriveList {
        items?: Drive.Schema.Drive[];
        kind?: string;
        nextPageToken?: string;
      }
      interface DriveRestrictions {
        adminManagedRestrictions?: boolean;
        copyRequiresWriterPermission?: boolean;
        domainUsersOnly?: boolean;
        driveMembersOnly?: boolean;
      }
      interface File {
        alternateLink?: string;
        appDataContents?: boolean;
        canComment?: boolean;
        canReadRevisions?: boolean;
        capabilities?: Drive.Schema.FileCapabilities;
        copyRequiresWriterPermission?: boolean;
        copyable?: boolean;
        createdDate?: string;
        defaultOpenWithLink?: string;
        description?: string;
        downloadUrl?: string;
        driveId?: string;
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
        imageMediaMetadata?: Drive.Schema.FileImageMediaMetadata;
        indexableText?: Drive.Schema.FileIndexableText;
        isAppAuthorized?: boolean;
        kind?: string;
        labels?: Drive.Schema.FileLabels;
        lastModifyingUser?: Drive.Schema.User;
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
        owners?: Drive.Schema.User[];
        parents?: Drive.Schema.ParentReference[];
        permissionIds?: string[];
        permissions?: Drive.Schema.Permission[];
        properties?: Drive.Schema.Property[];
        quotaBytesUsed?: string;
        selfLink?: string;
        shareable?: boolean;
        shared?: boolean;
        sharedWithMeDate?: string;
        sharingUser?: Drive.Schema.User;
        spaces?: string[];
        teamDriveId?: string;
        thumbnail?: Drive.Schema.FileThumbnail;
        thumbnailLink?: string;
        thumbnailVersion?: string;
        title?: string;
        trashedDate?: string;
        trashingUser?: Drive.Schema.User;
        userPermission?: Drive.Schema.Permission;
        version?: string;
        videoMediaMetadata?: Drive.Schema.FileVideoMediaMetadata;
        webContentLink?: string;
        webViewLink?: string;
        writersCanShare?: boolean;
      }
      interface FileCapabilities {
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
        canMoveChildrenOutOfDrive?: boolean;
        canMoveChildrenOutOfTeamDrive?: boolean;
        canMoveChildrenWithinDrive?: boolean;
        canMoveChildrenWithinTeamDrive?: boolean;
        canMoveItemIntoTeamDrive?: boolean;
        canMoveItemOutOfDrive?: boolean;
        canMoveItemOutOfTeamDrive?: boolean;
        canMoveItemWithinDrive?: boolean;
        canMoveItemWithinTeamDrive?: boolean;
        canMoveTeamDriveItem?: boolean;
        canReadRevisions?: boolean;
        canReadDrive?: boolean;
        canReadTeamDrive?: boolean;
        canRemoveChildren?: boolean;
        canRename?: boolean;
        canShare?: boolean;
        canTrash?: boolean;
        canTrashChildren?: boolean;
        canUntrash?: boolean;
      }
      interface FileImageMediaMetadata {
        aperture?: number;
        cameraMake?: string;
        cameraModel?: string;
        colorSpace?: string;
        date?: string;
        exposureBias?: number;
        exposureMode?: string;
        exposureTime?: number;
        flashUsed?: boolean;
        focalLength?: number;
        height?: number;
        isoSpeed?: number;
        lens?: string;
        location?: Drive.Schema.FileImageMediaMetadataLocation;
        maxApertureValue?: number;
        meteringMode?: string;
        rotation?: number;
        sensor?: string;
        subjectDistance?: number;
        whiteBalance?: string;
        width?: number;
      }
      interface FileImageMediaMetadataLocation {
        altitude?: number;
        latitude?: number;
        longitude?: number;
      }
      interface FileIndexableText {
        text?: string;
      }
      interface FileLabels {
        hidden?: boolean;
        modified?: boolean;
        restricted?: boolean;
        starred?: boolean;
        trashed?: boolean;
        viewed?: boolean;
      }
      interface FileList {
        etag?: string;
        incompleteSearch?: boolean;
        items?: Drive.Schema.File[];
        kind?: string;
        nextLink?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      interface FileThumbnail {
        image?: string;
        mimeType?: string;
      }
      interface FileVideoMediaMetadata {
        durationMillis?: string;
        height?: number;
        width?: number;
      }
      interface GeneratedIds {
        ids?: string[];
        kind?: string;
        space?: string;
      }
      interface ParentList {
        etag?: string;
        items?: Drive.Schema.ParentReference[];
        kind?: string;
        selfLink?: string;
      }
      interface ParentReference {
        id?: string;
        isRoot?: boolean;
        kind?: string;
        parentLink?: string;
        selfLink?: string;
      }
      interface Permission {
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
        permissionDetails?: Drive.Schema.PermissionPermissionDetails[];
        photoLink?: string;
        role?: "owner" | "organizer" | "fileOrganizer" | "writer" | "reader";
        selfLink?: string;
        teamDrivePermissionDetails?: Drive.Schema.PermissionTeamDrivePermissionDetails[];
        type?: string;
        value?: string;
        withLink?: boolean;
      }
      interface PermissionId {
        id?: string;
        kind?: string;
      }
      interface PermissionList {
        etag?: string;
        items?: Drive.Schema.Permission[];
        kind?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      interface PermissionPermissionDetails {
        additionalRoles?: string[];
        inherited?: boolean;
        inheritedFrom?: string;
        permissionType?: string;
        role?: "organizer" | "fileOrganizer" | "writer" | "reader";
      }
      interface PermissionTeamDrivePermissionDetails {
        additionalRoles?: string[];
        inherited?: boolean;
        inheritedFrom?: string;
        role?: string;
        teamDrivePermissionType?: string;
      }
      interface Property {
        etag?: string;
        key?: string;
        kind?: string;
        selfLink?: string;
        value?: string;
        visibility?: string;
      }
      interface PropertyList {
        etag?: string;
        items?: Drive.Schema.Property[];
        kind?: string;
        selfLink?: string;
      }
      interface Revision {
        downloadUrl?: string;
        etag?: string;
        exportLinks?: object;
        fileSize?: string;
        id?: string;
        kind?: string;
        lastModifyingUser?: Drive.Schema.User;
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
      interface RevisionList {
        etag?: string;
        items?: Drive.Schema.Revision[];
        kind?: string;
        nextPageToken?: string;
        selfLink?: string;
      }
      interface StartPageToken {
        kind?: string;
        startPageToken?: string;
      }
      interface TeamDrive {
        backgroundImageFile?: Drive.Schema.TeamDriveBackgroundImageFile;
        backgroundImageLink?: string;
        capabilities?: Drive.Schema.TeamDriveCapabilities;
        colorRgb?: string;
        createdDate?: string;
        id?: string;
        kind?: string;
        name?: string;
        restrictions?: Drive.Schema.TeamDriveRestrictions;
        themeId?: string;
      }
      interface TeamDriveBackgroundImageFile {
        id?: string;
        width?: number;
        xCoordinate?: number;
        yCoordinate?: number;
      }
      interface TeamDriveCapabilities {
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
      interface TeamDriveList {
        items?: Drive.Schema.TeamDrive[];
        kind?: string;
        nextPageToken?: string;
      }
      interface TeamDriveRestrictions {
        adminManagedRestrictions?: boolean;
        copyRequiresWriterPermission?: boolean;
        domainUsersOnly?: boolean;
        teamMembersOnly?: boolean;
      }
      interface User {
        displayName?: string;
        emailAddress?: string;
        isAuthenticatedUser?: boolean;
        kind?: string;
        permissionId?: string;
        picture?: Drive.Schema.UserPicture;
      }
      interface UserPicture {
        url?: string;
      }
    }
  }
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
    Realtime?: Drive.Collection.RealtimeCollection;
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

declare var Drive: GoogleAppsScript.Drive;
