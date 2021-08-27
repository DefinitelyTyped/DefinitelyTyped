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
        additionalRoleInfo?: Drive.Schema.AboutAdditionalRoleInfo[] | undefined;
        canCreateDrives?: boolean | undefined;
        canCreateTeamDrives?: boolean | undefined;
        domainSharingPolicy?: string | undefined;
        driveThemes?: Drive.Schema.AboutDriveThemes[] | undefined;
        etag?: string | undefined;
        exportFormats?: Drive.Schema.AboutExportFormats[] | undefined;
        features?: Drive.Schema.AboutFeatures[] | undefined;
        folderColorPalette?: string[] | undefined;
        importFormats?: Drive.Schema.AboutImportFormats[] | undefined;
        isCurrentAppInstalled?: boolean | undefined;
        kind?: string | undefined;
        languageCode?: string | undefined;
        largestChangeId?: string | undefined;
        maxUploadSizes?: Drive.Schema.AboutMaxUploadSizes[] | undefined;
        name?: string | undefined;
        permissionId?: string | undefined;
        quotaBytesByService?: Drive.Schema.AboutQuotaBytesByService[] | undefined;
        quotaBytesTotal?: string | undefined;
        quotaBytesUsed?: string | undefined;
        quotaBytesUsedAggregate?: string | undefined;
        quotaBytesUsedInTrash?: string | undefined;
        quotaType?: string | undefined;
        remainingChangeIds?: string | undefined;
        rootFolderId?: string | undefined;
        selfLink?: string | undefined;
        teamDriveThemes?: Drive.Schema.AboutTeamDriveThemes[] | undefined;
        user?: Drive.Schema.User | undefined;
      }
      interface AboutAdditionalRoleInfo {
        roleSets?: Drive.Schema.AboutAdditionalRoleInfoRoleSets[] | undefined;
        type?: string | undefined;
      }
      interface AboutAdditionalRoleInfoRoleSets {
        additionalRoles?: string[] | undefined;
        primaryRole?: string | undefined;
      }
      interface AboutDriveThemes {
        backgroundImageLink?: string | undefined;
        colorRgb?: string | undefined;
        id?: string | undefined;
      }
      interface AboutExportFormats {
        source?: string | undefined;
        targets?: string[] | undefined;
      }
      interface AboutFeatures {
        featureName?: string | undefined;
        featureRate?: number | undefined;
      }
      interface AboutImportFormats {
        source?: string | undefined;
        targets?: string[] | undefined;
      }
      interface AboutMaxUploadSizes {
        size?: string | undefined;
        type?: string | undefined;
      }
      interface AboutQuotaBytesByService {
        bytesUsed?: string | undefined;
        serviceName?: string | undefined;
      }
      interface AboutTeamDriveThemes {
        backgroundImageLink?: string | undefined;
        colorRgb?: string | undefined;
        id?: string | undefined;
      }
      interface App {
        authorized?: boolean | undefined;
        createInFolderTemplate?: string | undefined;
        createUrl?: string | undefined;
        hasDriveWideScope?: boolean | undefined;
        icons?: Drive.Schema.AppIcons[] | undefined;
        id?: string | undefined;
        installed?: boolean | undefined;
        kind?: string | undefined;
        longDescription?: string | undefined;
        name?: string | undefined;
        objectType?: string | undefined;
        openUrlTemplate?: string | undefined;
        primaryFileExtensions?: string[] | undefined;
        primaryMimeTypes?: string[] | undefined;
        productId?: string | undefined;
        productUrl?: string | undefined;
        secondaryFileExtensions?: string[] | undefined;
        secondaryMimeTypes?: string[] | undefined;
        shortDescription?: string | undefined;
        supportsCreate?: boolean | undefined;
        supportsImport?: boolean | undefined;
        supportsMultiOpen?: boolean | undefined;
        supportsOfflineCreate?: boolean | undefined;
        useByDefault?: boolean | undefined;
      }
      interface AppIcons {
        category?: string | undefined;
        iconUrl?: string | undefined;
        size?: number | undefined;
      }
      interface AppList {
        defaultAppIds?: string[] | undefined;
        etag?: string | undefined;
        items?: Drive.Schema.App[] | undefined;
        kind?: string | undefined;
        selfLink?: string | undefined;
      }
      interface Change {
        deleted?: boolean | undefined;
        drive?: Drive.Schema.Drive | undefined;
        driveId?: string | undefined;
        file?: Drive.Schema.File | undefined;
        fileId?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        modificationDate?: string | undefined;
        selfLink?: string | undefined;
        teamDrive?: Drive.Schema.TeamDrive | undefined;
        teamDriveId?: string | undefined;
        type?: string | undefined;
      }
      interface ChangeList {
        etag?: string | undefined;
        items?: Drive.Schema.Change[] | undefined;
        kind?: string | undefined;
        largestChangeId?: string | undefined;
        newStartPageToken?: string | undefined;
        nextLink?: string | undefined;
        nextPageToken?: string | undefined;
        selfLink?: string | undefined;
      }
      interface Channel {
        address?: string | undefined;
        expiration?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        params?: object | undefined;
        payload?: boolean | undefined;
        resourceId?: string | undefined;
        resourceUri?: string | undefined;
        token?: string | undefined;
        type?: string | undefined;
      }
      interface ChildList {
        etag?: string | undefined;
        items?: Drive.Schema.ChildReference[] | undefined;
        kind?: string | undefined;
        nextLink?: string | undefined;
        nextPageToken?: string | undefined;
        selfLink?: string | undefined;
      }
      interface ChildReference {
        childLink?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        selfLink?: string | undefined;
      }
      interface Comment {
        anchor?: string | undefined;
        author?: Drive.Schema.User | undefined;
        commentId?: string | undefined;
        content?: string | undefined;
        context?: Drive.Schema.CommentContext | undefined;
        createdDate?: string | undefined;
        deleted?: boolean | undefined;
        fileId?: string | undefined;
        fileTitle?: string | undefined;
        htmlContent?: string | undefined;
        kind?: string | undefined;
        modifiedDate?: string | undefined;
        replies?: Drive.Schema.CommentReply[] | undefined;
        selfLink?: string | undefined;
        status?: string | undefined;
      }
      interface CommentContext {
        type?: string | undefined;
        value?: string | undefined;
      }
      interface CommentList {
        items?: Drive.Schema.Comment[] | undefined;
        kind?: string | undefined;
        nextLink?: string | undefined;
        nextPageToken?: string | undefined;
        selfLink?: string | undefined;
      }
      interface CommentReply {
        author?: Drive.Schema.User | undefined;
        content?: string | undefined;
        createdDate?: string | undefined;
        deleted?: boolean | undefined;
        htmlContent?: string | undefined;
        kind?: string | undefined;
        modifiedDate?: string | undefined;
        replyId?: string | undefined;
        verb?: string | undefined;
      }
      interface CommentReplyList {
        items?: Drive.Schema.CommentReply[] | undefined;
        kind?: string | undefined;
        nextLink?: string | undefined;
        nextPageToken?: string | undefined;
        selfLink?: string | undefined;
      }
      interface Drive {
        backgroundImageFile?: Drive.Schema.DriveBackgroundImageFile | undefined;
        backgroundImageLink?: string | undefined;
        capabilities?: Drive.Schema.DriveCapabilities | undefined;
        colorRgb?: string | undefined;
        createdDate?: string | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        name?: string | undefined;
        restrictions?: Drive.Schema.DriveRestrictions | undefined;
        themeId?: string | undefined;
      }
      interface DriveBackgroundImageFile {
        id?: string | undefined;
        width?: number | undefined;
        xCoordinate?: number | undefined;
        yCoordinate?: number | undefined;
      }
      interface DriveCapabilities {
        canAddChildren?: boolean | undefined;
        canChangeCopyRequiresWriterPermissionRestriction?: boolean | undefined;
        canChangeDomainUsersOnlyRestriction?: boolean | undefined;
        canChangeDriveBackground?: boolean | undefined;
        canChangeDriveMembersOnlyRestriction?: boolean | undefined;
        canComment?: boolean | undefined;
        canCopy?: boolean | undefined;
        canDeleteChildren?: boolean | undefined;
        canDeleteDrive?: boolean | undefined;
        canDownload?: boolean | undefined;
        canEdit?: boolean | undefined;
        canListChildren?: boolean | undefined;
        canManageMembers?: boolean | undefined;
        canReadRevisions?: boolean | undefined;
        canRename?: boolean | undefined;
        canRenameDrive?: boolean | undefined;
        canShare?: boolean | undefined;
        canTrashChildren?: boolean | undefined;
      }
      interface DriveList {
        items?: Drive.Schema.Drive[] | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
      }
      interface DriveRestrictions {
        adminManagedRestrictions?: boolean | undefined;
        copyRequiresWriterPermission?: boolean | undefined;
        domainUsersOnly?: boolean | undefined;
        driveMembersOnly?: boolean | undefined;
      }
      interface File {
        alternateLink?: string | undefined;
        appDataContents?: boolean | undefined;
        canComment?: boolean | undefined;
        canReadRevisions?: boolean | undefined;
        capabilities?: Drive.Schema.FileCapabilities | undefined;
        copyRequiresWriterPermission?: boolean | undefined;
        copyable?: boolean | undefined;
        createdDate?: string | undefined;
        defaultOpenWithLink?: string | undefined;
        description?: string | undefined;
        downloadUrl?: string | undefined;
        driveId?: string | undefined;
        editable?: boolean | undefined;
        embedLink?: string | undefined;
        etag?: string | undefined;
        explicitlyTrashed?: boolean | undefined;
        exportLinks?: object | undefined;
        fileExtension?: string | undefined;
        fileSize?: string | undefined;
        folderColorRgb?: string | undefined;
        fullFileExtension?: string | undefined;
        hasAugmentedPermissions?: boolean | undefined;
        hasThumbnail?: boolean | undefined;
        headRevisionId?: string | undefined;
        iconLink?: string | undefined;
        id?: string | undefined;
        imageMediaMetadata?: Drive.Schema.FileImageMediaMetadata | undefined;
        indexableText?: Drive.Schema.FileIndexableText | undefined;
        isAppAuthorized?: boolean | undefined;
        kind?: string | undefined;
        labels?: Drive.Schema.FileLabels | undefined;
        lastModifyingUser?: Drive.Schema.User | undefined;
        lastModifyingUserName?: string | undefined;
        lastViewedByMeDate?: string | undefined;
        markedViewedByMeDate?: string | undefined;
        md5Checksum?: string | undefined;
        mimeType?: string | undefined;
        modifiedByMeDate?: string | undefined;
        modifiedDate?: string | undefined;
        openWithLinks?: object | undefined;
        originalFilename?: string | undefined;
        ownedByMe?: boolean | undefined;
        ownerNames?: string[] | undefined;
        owners?: Drive.Schema.User[] | undefined;
        parents?: Drive.Schema.ParentReference[] | undefined;
        permissionIds?: string[] | undefined;
        permissions?: Drive.Schema.Permission[] | undefined;
        properties?: Drive.Schema.Property[] | undefined;
        quotaBytesUsed?: string | undefined;
        selfLink?: string | undefined;
        shareable?: boolean | undefined;
        shared?: boolean | undefined;
        sharedWithMeDate?: string | undefined;
        sharingUser?: Drive.Schema.User | undefined;
        shortcutDetails?: Drive.Schema.ShortcutDetails | undefined;
        spaces?: string[] | undefined;
        teamDriveId?: string | undefined;
        thumbnail?: Drive.Schema.FileThumbnail | undefined;
        thumbnailLink?: string | undefined;
        thumbnailVersion?: string | undefined;
        title?: string | undefined;
        trashedDate?: string | undefined;
        trashingUser?: Drive.Schema.User | undefined;
        userPermission?: Drive.Schema.Permission | undefined;
        version?: string | undefined;
        videoMediaMetadata?: Drive.Schema.FileVideoMediaMetadata | undefined;
        webContentLink?: string | undefined;
        webViewLink?: string | undefined;
        writersCanShare?: boolean | undefined;
      }
      interface FileCapabilities {
        canAddChildren?: boolean | undefined;
        canChangeCopyRequiresWriterPermission?: boolean | undefined;
        canChangeRestrictedDownload?: boolean | undefined;
        canComment?: boolean | undefined;
        canCopy?: boolean | undefined;
        canDelete?: boolean | undefined;
        canDeleteChildren?: boolean | undefined;
        canDownload?: boolean | undefined;
        canEdit?: boolean | undefined;
        canListChildren?: boolean | undefined;
        canMoveChildrenOutOfDrive?: boolean | undefined;
        canMoveChildrenOutOfTeamDrive?: boolean | undefined;
        canMoveChildrenWithinDrive?: boolean | undefined;
        canMoveChildrenWithinTeamDrive?: boolean | undefined;
        canMoveItemIntoTeamDrive?: boolean | undefined;
        canMoveItemOutOfDrive?: boolean | undefined;
        canMoveItemOutOfTeamDrive?: boolean | undefined;
        canMoveItemWithinDrive?: boolean | undefined;
        canMoveItemWithinTeamDrive?: boolean | undefined;
        canMoveTeamDriveItem?: boolean | undefined;
        canReadRevisions?: boolean | undefined;
        canReadDrive?: boolean | undefined;
        canReadTeamDrive?: boolean | undefined;
        canRemoveChildren?: boolean | undefined;
        canRename?: boolean | undefined;
        canShare?: boolean | undefined;
        canTrash?: boolean | undefined;
        canTrashChildren?: boolean | undefined;
        canUntrash?: boolean | undefined;
      }
      interface FileImageMediaMetadata {
        aperture?: number | undefined;
        cameraMake?: string | undefined;
        cameraModel?: string | undefined;
        colorSpace?: string | undefined;
        date?: string | undefined;
        exposureBias?: number | undefined;
        exposureMode?: string | undefined;
        exposureTime?: number | undefined;
        flashUsed?: boolean | undefined;
        focalLength?: number | undefined;
        height?: number | undefined;
        isoSpeed?: number | undefined;
        lens?: string | undefined;
        location?: Drive.Schema.FileImageMediaMetadataLocation | undefined;
        maxApertureValue?: number | undefined;
        meteringMode?: string | undefined;
        rotation?: number | undefined;
        sensor?: string | undefined;
        subjectDistance?: number | undefined;
        whiteBalance?: string | undefined;
        width?: number | undefined;
      }
      interface FileImageMediaMetadataLocation {
        altitude?: number | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
      }
      interface FileIndexableText {
        text?: string | undefined;
      }
      interface FileLabels {
        hidden?: boolean | undefined;
        modified?: boolean | undefined;
        restricted?: boolean | undefined;
        starred?: boolean | undefined;
        trashed?: boolean | undefined;
        viewed?: boolean | undefined;
      }
      interface FileList {
        etag?: string | undefined;
        incompleteSearch?: boolean | undefined;
        items?: Drive.Schema.File[] | undefined;
        kind?: string | undefined;
        nextLink?: string | undefined;
        nextPageToken?: string | undefined;
        selfLink?: string | undefined;
      }
      interface FileThumbnail {
        image?: string | undefined;
        mimeType?: string | undefined;
      }
      interface FileVideoMediaMetadata {
        durationMillis?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
      }
      interface GeneratedIds {
        ids?: string[] | undefined;
        kind?: string | undefined;
        space?: string | undefined;
      }
      interface ParentList {
        etag?: string | undefined;
        items?: Drive.Schema.ParentReference[] | undefined;
        kind?: string | undefined;
        selfLink?: string | undefined;
      }
      interface ParentReference {
        id?: string | undefined;
        isRoot?: boolean | undefined;
        kind?: string | undefined;
        parentLink?: string | undefined;
        selfLink?: string | undefined;
      }
      interface Permission {
        additionalRoles?: string[] | undefined;
        authKey?: string | undefined;
        deleted?: boolean | undefined;
        domain?: string | undefined;
        emailAddress?: string | undefined;
        etag?: string | undefined;
        expirationDate?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        name?: string | undefined;
        permissionDetails?: Drive.Schema.PermissionPermissionDetails[] | undefined;
        photoLink?: string | undefined;
        role?: "owner" | "organizer" | "fileOrganizer" | "writer" | "reader" | undefined;
        selfLink?: string | undefined;
        teamDrivePermissionDetails?: Drive.Schema.PermissionTeamDrivePermissionDetails[] | undefined;
        type?: string | undefined;
        value?: string | undefined;
        withLink?: boolean | undefined;
      }
      interface PermissionId {
        id?: string | undefined;
        kind?: string | undefined;
      }
      interface PermissionList {
        etag?: string | undefined;
        items?: Drive.Schema.Permission[] | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        selfLink?: string | undefined;
      }
      interface PermissionPermissionDetails {
        additionalRoles?: string[] | undefined;
        inherited?: boolean | undefined;
        inheritedFrom?: string | undefined;
        permissionType?: string | undefined;
        role?: "organizer" | "fileOrganizer" | "writer" | "reader" | undefined;
      }
      interface PermissionTeamDrivePermissionDetails {
        additionalRoles?: string[] | undefined;
        inherited?: boolean | undefined;
        inheritedFrom?: string | undefined;
        role?: string | undefined;
        teamDrivePermissionType?: string | undefined;
      }
      interface Property {
        etag?: string | undefined;
        key?: string | undefined;
        kind?: string | undefined;
        selfLink?: string | undefined;
        value?: string | undefined;
        visibility?: string | undefined;
      }
      interface PropertyList {
        etag?: string | undefined;
        items?: Drive.Schema.Property[] | undefined;
        kind?: string | undefined;
        selfLink?: string | undefined;
      }
      interface Revision {
        downloadUrl?: string | undefined;
        etag?: string | undefined;
        exportLinks?: object | undefined;
        fileSize?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        lastModifyingUser?: Drive.Schema.User | undefined;
        lastModifyingUserName?: string | undefined;
        md5Checksum?: string | undefined;
        mimeType?: string | undefined;
        modifiedDate?: string | undefined;
        originalFilename?: string | undefined;
        pinned?: boolean | undefined;
        publishAuto?: boolean | undefined;
        published?: boolean | undefined;
        publishedLink?: string | undefined;
        publishedOutsideDomain?: boolean | undefined;
        selfLink?: string | undefined;
      }
      interface RevisionList {
        etag?: string | undefined;
        items?: Drive.Schema.Revision[] | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        selfLink?: string | undefined;
      }
      interface ShortcutDetails {
        targetId?: string | undefined;
        targetMimeType?: string | undefined;
      }
      interface StartPageToken {
        kind?: string | undefined;
        startPageToken?: string | undefined;
      }
      interface TeamDrive {
        backgroundImageFile?: Drive.Schema.TeamDriveBackgroundImageFile | undefined;
        backgroundImageLink?: string | undefined;
        capabilities?: Drive.Schema.TeamDriveCapabilities | undefined;
        colorRgb?: string | undefined;
        createdDate?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        name?: string | undefined;
        restrictions?: Drive.Schema.TeamDriveRestrictions | undefined;
        themeId?: string | undefined;
      }
      interface TeamDriveBackgroundImageFile {
        id?: string | undefined;
        width?: number | undefined;
        xCoordinate?: number | undefined;
        yCoordinate?: number | undefined;
      }
      interface TeamDriveCapabilities {
        canAddChildren?: boolean | undefined;
        canChangeCopyRequiresWriterPermissionRestriction?: boolean | undefined;
        canChangeDomainUsersOnlyRestriction?: boolean | undefined;
        canChangeTeamDriveBackground?: boolean | undefined;
        canChangeTeamMembersOnlyRestriction?: boolean | undefined;
        canComment?: boolean | undefined;
        canCopy?: boolean | undefined;
        canDeleteChildren?: boolean | undefined;
        canDeleteTeamDrive?: boolean | undefined;
        canDownload?: boolean | undefined;
        canEdit?: boolean | undefined;
        canListChildren?: boolean | undefined;
        canManageMembers?: boolean | undefined;
        canReadRevisions?: boolean | undefined;
        canRemoveChildren?: boolean | undefined;
        canRename?: boolean | undefined;
        canRenameTeamDrive?: boolean | undefined;
        canShare?: boolean | undefined;
        canTrashChildren?: boolean | undefined;
      }
      interface TeamDriveList {
        items?: Drive.Schema.TeamDrive[] | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
      }
      interface TeamDriveRestrictions {
        adminManagedRestrictions?: boolean | undefined;
        copyRequiresWriterPermission?: boolean | undefined;
        domainUsersOnly?: boolean | undefined;
        teamMembersOnly?: boolean | undefined;
      }
      interface User {
        displayName?: string | undefined;
        emailAddress?: string | undefined;
        isAuthenticatedUser?: boolean | undefined;
        kind?: string | undefined;
        permissionId?: string | undefined;
        picture?: Drive.Schema.UserPicture | undefined;
      }
      interface UserPicture {
        url?: string | undefined;
      }
    }
  }
  interface Drive {
    About?: Drive.Collection.AboutCollection | undefined;
    Apps?: Drive.Collection.AppsCollection | undefined;
    Changes?: Drive.Collection.ChangesCollection | undefined;
    Channels?: Drive.Collection.ChannelsCollection | undefined;
    Children?: Drive.Collection.ChildrenCollection | undefined;
    Comments?: Drive.Collection.CommentsCollection | undefined;
    Drives?: Drive.Collection.DrivesCollection | undefined;
    Files?: Drive.Collection.FilesCollection | undefined;
    Parents?: Drive.Collection.ParentsCollection | undefined;
    Permissions?: Drive.Collection.PermissionsCollection | undefined;
    Properties?: Drive.Collection.PropertiesCollection | undefined;
    Realtime?: Drive.Collection.RealtimeCollection | undefined;
    Replies?: Drive.Collection.RepliesCollection | undefined;
    Revisions?: Drive.Collection.RevisionsCollection | undefined;
    Teamdrives?: Drive.Collection.TeamdrivesCollection | undefined;
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
