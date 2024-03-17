declare namespace GoogleAppsScript {
    namespace Drive_V3 {
        namespace Collection {
            interface TeamdrivesCollection {
                create(
                    resource: Drive_V3.Schema.TeamDrive,
                    requestId: string,
                ): Drive_V3.Schema.TeamDrive;
                get(
                    teamDriveId: string,
                ): Drive_V3.Schema.TeamDrive;
                get(
                    teamDriveId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.TeamDrive;
                list(): Drive_V3.Schema.TeamDriveList;
                list(
                    optionalArgs: object,
                ): Drive_V3.Schema.TeamDriveList;
                remove(teamDriveId: string): void;
                update(
                    resource: Drive_V3.Schema.TeamDrive,
                    teamDriveId: string,
                ): Drive_V3.Schema.TeamDrive;
                update(
                    resource: Drive_V3.Schema.TeamDrive,
                    teamDriveId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.TeamDrive;
            }
            interface RevisionsCollection {
                get(
                    fileId: string,
                    revisionId: string,
                ): Drive_V3.Schema.Revision;
                get(
                    fileId: string,
                    revisionId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Revision;
                list(
                    fileId: string,
                ): Drive_V3.Schema.RevisionList;
                list(
                    fileId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.RevisionList;
                remove(
                    fileId: string,
                    revisionId: string,
                ): void;
                update(
                    resource: Drive_V3.Schema.Revision,
                    fileId: string,
                    revisionId: string,
                ): Drive_V3.Schema.Revision;
            }
            interface RepliesCollection {
                create(
                    resource: Drive_V3.Schema.Reply,
                    fileId: string,
                    commentId: string,
                ): Drive_V3.Schema.Reply;
                get(
                    fileId: string,
                    commentId: string,
                    replyId: string,
                ): Drive_V3.Schema.Reply;
                get(
                    fileId: string,
                    commentId: string,
                    replyId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Reply;
                list(
                    fileId: string,
                    commentId: string,
                ): Drive_V3.Schema.ReplyList;
                list(
                    fileId: string,
                    commentId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.ReplyList;
                remove(
                    fileId: string,
                    commentId: string,
                    replyId: string,
                ): void;
                update(
                    resource: Drive_V3.Schema.Reply,
                    fileId: string,
                    commentId: string,
                    replyId: string,
                ): Drive_V3.Schema.Reply;
            }
            interface PermissionsCollection {
                create(
                    resource: Drive_V3.Schema.Permission,
                    fileId: string,
                ): Drive_V3.Schema.Permission;
                create(
                    resource: Drive_V3.Schema.Permission,
                    fileId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Permission;
                get(
                    fileId: string,
                    permissionId: string,
                ): Drive_V3.Schema.Permission;
                get(
                    fileId: string,
                    permissionId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Permission;
                list(
                    fileId: string,
                ): Drive_V3.Schema.PermissionList;
                list(
                    fileId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.PermissionList;
                remove(
                    fileId: string,
                    permissionId: string,
                ): void;
                remove(
                    fileId: string,
                    permissionId: string,
                    optionalArgs: object,
                ): void;
                update(
                    resource: Drive_V3.Schema.Permission,
                    fileId: string,
                    permissionId: string,
                ): Drive_V3.Schema.Permission;
                update(
                    resource: Drive_V3.Schema.Permission,
                    fileId: string,
                    permissionId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Permission;
            }
            interface FilesCollection {
                copy(
                    resource: Drive_V3.Schema.File,
                    fileId: string,
                ): Drive_V3.Schema.File;
                copy(
                    resource: Drive_V3.Schema.File,
                    fileId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.File;
                create(
                    resource: Drive_V3.Schema.File,
                ): Drive_V3.Schema.File;
                create(
                    resource: Drive_V3.Schema.File,
                    mediaData: Base.Blob,
                ): Drive_V3.Schema.File;
                create(
                    resource: Drive_V3.Schema.File,
                    mediaData: Base.Blob,
                    optionalArgs: object,
                ): Drive_V3.Schema.File;
                emptyTrash(): void;
                emptyTrash(
                    optionalArgs: object,
                ): void;
                export(
                    fileId: string,
                    mimeType: string,
                ): void;
                generateIds(): Drive_V3.Schema.GeneratedIds;
                generateIds(
                    optionalArgs: object,
                ): Drive_V3.Schema.GeneratedIds;
                get(
                    fileId: string,
                ): Drive_V3.Schema.File;
                get(
                    fileId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.File;
                list(): Drive_V3.Schema.FileList;
                list(
                    optionalArgs: object,
                ): Drive_V3.Schema.FileList;
                listLabels(
                    fileId: string,
                ): Drive_V3.Schema.LabelList;
                listLabels(
                    fileId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.LabelList;
                modifyLabels(
                    resource: Drive_V3.Schema.ModifyLabelsRequest,
                    fileId: string,
                ): Drive_V3.Schema.ModifyLabelsResponse;
                remove(
                    fileId: string,
                ): void;
                remove(
                    fileId: string,
                    optionalArgs: object,
                ): void;
                update(
                    resource: Drive_V3.Schema.File,
                    fileId: string,
                ): Drive_V3.Schema.File;
                update(
                    resource: Drive_V3.Schema.File,
                    fileId: string,
                    mediaData: Base.Blob,
                ): Drive_V3.Schema.File;
                update(
                    resource: Drive_V3.Schema.File,
                    fileId: string,
                    mediaData: Base.Blob,
                    optionalArgs: object,
                ): Drive_V3.Schema.File;
                watch(
                    resource: Drive_V3.Schema.Channel,
                    fileId: string,
                ): Drive_V3.Schema.Channel;
                watch(
                    resource: Drive_V3.Schema.Channel,
                    fileId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Channel;
            }
            interface DrivesCollection {
                create(
                    resource: Drive_V3.Schema.Drive,
                    requestId: string,
                ): Drive_V3.Schema.Drive;
                get(
                    driveId: string,
                ): Drive_V3.Schema.Drive;
                get(
                    driveId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Drive;
                hide(
                    driveId: string,
                ): Drive_V3.Schema.Drive;
                list(): Drive_V3.Schema.DriveList;
                list(
                    optionalArgs: object,
                ): Drive_V3.Schema.DriveList;
                remove(
                    driveId: string,
                ): void;
                remove(
                    driveId: string,
                    optionalArgs: object,
                ): void;
                unhide(
                    driveId: string,
                ): Drive_V3.Schema.Drive;
                update(
                    resource: Drive_V3.Schema.Drive,
                    driveId: string,
                ): Drive_V3.Schema.Drive;
                update(
                    resource: Drive_V3.Schema.Drive,
                    driveId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Drive;
            }
            interface CommentsCollection {
                create(
                    resource: Drive_V3.Schema.Comment,
                    fileId: string,
                ): Drive_V3.Schema.Comment;
                get(
                    fileId: string,
                    commentId: string,
                ): Drive_V3.Schema.Comment;
                get(
                    fileId: string,
                    commentId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Comment;
                list(
                    fileId: string,
                ): Drive_V3.Schema.CommentList;
                list(
                    fileId: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.CommentList;
                remove(
                    fileId: string,
                    commentId: string,
                ): void;
                update(
                    resource: Drive_V3.Schema.Comment,
                    fileId: string,
                    commentId: string,
                ): Drive_V3.Schema.Comment;
            }
            interface ChannelsCollection {
                stop(resource: Drive_V3.Schema.Channel): void;
            }
            interface ChangesCollection {
                getStartPageToken(): Drive_V3.Schema.StartPageToken;
                getStartPageToken(
                    optionalArgs: object,
                ): Drive_V3.Schema.StartPageToken;
                list(
                    pageToken: string,
                ): Drive_V3.Schema.ChangeList;
                list(
                    pageToken: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.ChangeList;
                watch(
                    resource: Drive_V3.Schema.Channel,
                    pageToken: string,
                ): Drive_V3.Schema.Channel;
                watch(
                    resource: Drive_V3.Schema.Channel,
                    pageToken: string,
                    optionalArgs: object,
                ): Drive_V3.Schema.Channel;
            }
            interface AppsCollection {
                get(
                    appId: string,
                ): Drive_V3.Schema.App;
                list(): Drive_V3.Schema.AppList;
                list(
                    optionalArgs: object,
                ): Drive_V3.Schema.AppList;
            }
            interface AboutCollection {
                get(): Drive_V3.Schema.About;
            }
        }
        namespace Schema {
            interface User {
                displayname?: string;
                emailAddress?: string;
                kind?: string;
                me?: boolean;
                permissionId?: string;
                photoLink?: string;
            }
            interface TeamDriveRestrictions {
                adminManagedRestrictions?: boolean;
                copyRequiresWriterPermission?: boolean;
                domainUsersOnly?: boolean;
                sharingFoldersRequiresOrganizerPermission?: boolean;
                teamMembersOnly?: boolean;
            }
            interface TeamDriveList {
                kind?: string;
                nextPageToken?: string;
                teamDrives?: Drive_V3.Schema.TeamDrive[];
            }
            interface TeamDriveCapabilities {
                canAddChildren?: boolean;
                canChangeCopyRequiresWriterPermissionRestriction?: boolean;
                canChangeDomainUsersOnlyRestriction?: boolean;
                canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
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
                canResetTeamDriveRestrictions?: boolean;
                canShare?: boolean;
                canTrashChildren?: boolean;
            }
            interface TeamDriveBackgroundImageFile {
                id?: string;
                width?: number;
                xCoordinate?: number;
                yCoordinate?: number;
            }
            interface TeamDrive {
                backgroundImageFile?: Drive_V3.Schema.TeamDriveBackgroundImageFile;
                backgroundImageLink?: string;
                capabilities?: Drive_V3.Schema.TeamDriveCapabilities;
                colorRgb?: string;
                createdTime?: string;
                id?: string;
                kind?: string;
                name?: string;
                orgUnitId?: string;
                restrictions?: Drive_V3.Schema.TeamDriveRestrictions;
                themeId?: string;
            }
            interface StartPageToken {
                kind?: string;
                startPageToken?: string;
            }
            interface RevisionList {
                kind?: string;
                nextPageToken?: string;
                revisions?: Drive_V3.Schema.Revision[];
            }
            interface Revision {
                exportLinks?: object;
                id?: string;
                keepForever?: boolean;
                kind?: string;
                lastModifyingUser?: Drive_V3.Schema.User;
                md5Checksum?: string;
                mimeType?: string;
                modifiedTime?: string;
                originalFilename?: string;
                publishAuto?: boolean;
                published?: boolean;
                publishedLink?: string;
                publishedOutsideDomain?: boolean;
                size?: string;
            }
            interface ReplyList {
                kind?: string;
                nextPageToken?: string;
                replies?: Drive_V3.Schema.Reply[];
            }
            interface Reply {
                action?: string;
                author?: Drive_V3.Schema.User;
                content?: string;
                createdTime?: string;
                deleted?: boolean;
                htmlContent?: string;
                id?: string;
                kind?: string;
                modifiedTime?: string;
            }
            interface PermissionTeamDrivePermissionDetails {
                inherited?: boolean;
                inheritedFrom?: string;
                role?: string;
                teamDrivePermissionType?: string;
            }
            interface PermissionPermissionDetails {
                inherited?: boolean;
                inheritedFrom?: string;
                permissionType?: string;
                role?: string;
            }
            interface PermissionList {
                kind?: string;
                nextPageToken?: string;
                permissions?: Drive_V3.Schema.Permission[];
            }
            interface PermissionList {
                kind?: string;
                nextPageToken?: string;
                permissions?: Drive_V3.Schema.Permission[];
            }
            interface Permission {
                allowFileDiscovery?: boolean;
                deleted?: boolean;
                displayName?: string;
                domain?: string;
                emailAddress?: string;
                expirationTime?: string;
                id?: string;
                kind?: string;
                pendingOwner?: boolean;
                permissionDetails?: Drive_V3.Schema.PermissionPermissionDetails[];
                photoLink?: string;
                role?: string;
                teamDrivePermissionDetails?: Drive_V3.Schema.PermissionTeamDrivePermissionDetails[];
                type?: string;
                view?: string;
            }
            interface ModifyLabelsResponse {
                kind?: string;
                modifiedLabels?: Drive_V3.Schema.Label[];
            }
            interface ModifyLabelsRequest {
                kind?: string;
                labelModifications?: Drive_V3.Schema.LabelModification[];
            }
            interface LabelModification {
                fieldModifications?: Drive_V3.Schema.LabelFieldModification[];
                kind?: string;
                labelId?: string;
                removeLabel?: boolean;
            }
            interface LabelList {
                kind?: string;
                labels?: Drive_V3.Schema.Label[];
                nextPageToken?: string;
            }
            interface LabelFieldModification {
                fieldId?: string;
                kind?: string;
                setDateValues?: string[];
                setIntegerValues?: string[];
                setSelectionValues?: string[];
                setTextValues?: string[];
                setUserValues?: string[];
                unsetValues?: boolean;
            }
            interface LabelField {
                dateString?: string[];
                id?: string;
                integer?: string[];
                kind?: string;
                selection?: string[];
                text?: string[];
                user?: Drive_V3.Schema.User[];
                valueType?: string;
            }
            interface Label {
                fields?: object;
                id?: string;
                kind?: string;
                revisionId?: string;
            }
            interface GeneratedIds {
                ids?: string[];
                kind?: string;
                space?: string;
            }
            interface FileVideoMediaMetadata {
                durationMillis?: string;
                height?: Integer;
                width?: Integer;
            }
            interface FileShortcutDetails {
                targetId?: string;
                targetMimeType?: string;
                targetResourceKey?: string;
            }
            interface FileList {
                files?: Drive_V3.Schema.File[];
                incompleteSearch?: boolean;
                kind?: string;
                nextPageToken?: string;
            }
            interface FileLinkShareMetadata {
                securityUpdateEligible?: boolean;
                securityUpdateEnabled?: boolean;
            }
            interface FileLabelInfo {
                labels?: Drive_V3.Schema.Label[];
            }
            interface FileImageMediaMetadataLocation {
                altitude?: number;
                latitude?: number;
                longitude?: number;
            }
            interface FileImageMediaMetadata {
                aperture?: number;
                cameraMake?: string;
                cameraModel?: string;
                colorSpace?: string;
                exposureBias?: number;
                exposureMode?: string;
                exposureTime?: number;
                flashUsed?: boolean;
                focalLength?: number;
                height?: Integer;
                isoSpeed?: Integer;
                lens?: string;
                location?: Drive_V3.Schema.FileImageMediaMetadataLocation;
                maxApertureValue?: number;
                meteringMode?: string;
                rotation?: Integer;
                sensor?: string;
                subjectDistance?: Integer;
                time?: string;
                whiteBalance?: string;
                width?: Integer;
            }
            interface FileContentHintsThumbnail {
                image?: Byte[];
                mimeType?: string;
            }
            interface FileContentHints {
                indexableText?: string;
                thumbnail?: Drive_V3.Schema.FileContentHintsThumbnail;
            }
            interface FileCapabilities {
                canAcceptOwnership?: boolean;
                canAddChildren?: boolean;
                canAddFolderFromAnotherDrive?: boolean;
                canAddMyDriveParent?: boolean;
                canChangeCopyRequiresWriterPermission?: boolean;
                canChangeSecurityUpdateEnabled?: boolean;
                canChangeViewersCanCopyContent?: boolean;
                canComment?: boolean;
                canCopy?: boolean;
                canDelete?: boolean;
                canDeleteChildren?: boolean;
                canDownload?: boolean;
                canEdit?: boolean;
                canListChildren?: boolean;
                canModifyContent?: boolean;
                canModifyContentRestriction?: boolean;
                canModifyEditorContentRestriction?: boolean;
                canModifyLabels?: boolean;
                canModifyOwnerContentRestriction?: boolean;
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
                canReadDrive?: boolean;
                canReadLabels?: boolean;
                canReadRevisions?: boolean;
                canReadTeamDrive?: boolean;
                canRemoveChildren?: boolean;
                canRemoveContentRestriction?: boolean;
                canRemoveMyDriveParent?: boolean;
                canRename?: boolean;
                canShare?: boolean;
                canTrash?: boolean;
                canTrashChildren?: boolean;
                canUntrash?: boolean;
            }
            interface File {
                appProperties?: object;
                capabilities?: Drive_V3.Schema.FileCapabilities;
                contentHints?: Drive_V3.Schema.FileContentHints;
                contentRestrictions?: Drive_V3.Schema.ContentRestriction[];
                copyRequiresWriterPermission?: boolean;
                createdTime?: string;
                description?: string;
                driveId?: string;
                explicitlyTrashed?: boolean;
                exportLinks?: object;
                fileExtension?: string;
                folderColorRgb?: string;
                fullFileExtension?: string;
                hasAugmentedPermissions?: boolean;
                hasThumbnail?: boolean;
                headRevisionId?: string;
                iconLink?: string;
                id?: string;
                imageMediaMetadata?: Drive_V3.Schema.FileImageMediaMetadata;
                isAppAuthorized?: boolean;
                kind?: string;
                labelInfo?: Drive_V3.Schema.FileLabelInfo;
                lastModifyingUser?: Drive_V3.Schema.User;
                linkShareMetadata?: Drive_V3.Schema.FileLinkShareMetadata;
                md5Checksum?: string;
                mimeType?: string;
                modifiedByMe?: boolean;
                modifiedByMeTime?: string;
                modifiedTime?: string;
                name?: string;
                originalFilename?: string;
                ownedByMe?: boolean;
                owners?: Drive_V3.Schema.User[];
                parents?: string[];
                permissionIds?: string[];
                permissions?: Drive_V3.Schema.Permission[];
                properties?: object;
                quotaBytesUsed?: string;
                resourceKey?: string;
                sha1Checksum?: string;
                sha256Checksum?: string;
                shared?: boolean;
                sharedWithMeTime?: string;
                sharingUser?: Drive_V3.Schema.User;
                shortcutDetails?: Drive_V3.Schema.FileShortcutDetails;
                size?: string;
                spaces?: string[];
                starred?: boolean;
                teamDriveId?: string;
                thumbnailLink?: string;
                thumbnailVersion?: string;
                trashed?: boolean;
                trashedTime?: string;
                trashingUser?: Drive_V3.Schema.User;
                version?: string;
                videoMediaMetadata?: Drive_V3.Schema.FileVideoMediaMetadata;
                viewedByMe?: boolean;
                viewedByMeTime?: string;
                viewersCanCopyContent?: boolean;
                webContentLink?: string;
                webViewLink?: string;
                writersCanShare?: boolean;
            }
            interface DriveRestrictions {
                adminManagedRestrictions?: boolean;
                copyRequiresWriterPermission?: boolean;
                domainUsersOnly?: boolean;
                driveMembersOnly?: boolean;
                sharingFoldersRequiresOrganizerPermission?: boolean;
            }
            interface DriveList {
                drives?: Drive_V3.Schema.Drive[];
                kind?: string;
                nextPageToken?: string;
            }
            interface DriveCapabilities {
                canAddChildren?: boolean;
                canChangeCopyRequiresWriterPermissionRestriction?: boolean;
                canChangeDomainUsersOnlyRestriction?: boolean;
                canChangeDriveBackground?: boolean;
                canChangeDriveMembersOnlyRestriction?: boolean;
                canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
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
                canResetDriveRestrictions?: boolean;
                canShare?: boolean;
                canTrashChildren?: boolean;
            }
            interface DriveBackgroundImageFile {
                id?: string;
                width?: number;
                xCoordinate?: number;
                yCoordinate?: number;
            }
            interface Drive {
                backgroundImageFile?: Drive_V3.Schema.DriveBackgroundImageFile;
                backgroundImageLink?: string;
                capabilities?: Drive_V3.Schema.DriveCapabilities;
                colorRgb?: string;
                createdTime?: string;
                hidden?: boolean;
                id?: string;
                kind?: string;
                name?: string;
                orgUnitId?: string;
                restrictions?: Drive_V3.Schema.DriveRestrictions;
                themeId?: string;
            }
            interface ContentRestriction {
                ownerRestricted?: boolean;
                readOnly?: boolean;
                reason?: string;
                restrictingUser?: Drive_V3.Schema.User;
                restrictionTime?: string;
                systemRestricted?: boolean;
                type?: string;
            }
            interface CommentQuotedFileContent {
                mimeType?: string;
                value?: string;
            }
            interface CommentList {
                comments?: Drive_V3.Schema.Comment[];
                kind?: string;
                nextPageToken?: string;
            }
            interface Comment {
                anchor?: string;
                author?: Drive_V3.Schema.User;
                content?: string;
                createdTime?: string;
                deleted?: boolean;
                htmlContent?: string;
                id?: string;
                kind?: string;
                modifiedTime?: string;
                quotedFileContent?: Drive_V3.Schema.CommentQuotedFileContent;
                replies?: Drive_V3.Schema.Reply[];
                resolved?: boolean;
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
            interface ChangeList {
                changes?: Drive_V3.Schema.Change[];
                kind?: string;
                newStartPageToken?: string;
                nextPageToken?: string;
            }
            interface Change {
                changeType?: string;
                drive?: Drive_V3.Schema.Drive;
                driveId?: string;
                file?: Drive_V3.Schema.File;
                fileId?: string;
                kind?: string;
                removed?: boolean;
                teamDrive?: Drive_V3.Schema.TeamDrive;
                teamDriveId?: string;
                time?: string;
                type?: string;
            }
            interface AppList {
                defaultAppIds?: string[];
                items?: Drive_V3.Schema.App[];
                kind?: string;
                selfLink?: string;
            }
            interface AppIcons {
                category?: string;
                iconUrl?: string;
                size?: Integer;
            }
            interface App {
                authorized?: boolean;
                createInFolderTemplate?: string;
                createUrl?: string;
                hasDriveWideScope?: boolean;
                icons?: Drive_V3.Schema.AppIcons[];
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
            interface AboutTeamDriveThemes {
                backgroundImageLink?: string;
                colorRgb?: string;
                id?: string;
            }
            interface AboutStorageQuota {
                limit?: string;
                usage?: string;
                usageInDrive?: string;
                usageInDriveTrash?: string;
            }
            interface AboutDriveThemes {
                backgroundImageLink?: string;
                colorRgb?: string;
                id?: string;
            }
            interface About {
                appInstalled?: boolean;
                canCreateDrives?: boolean;
                canCreateTeamDrives?: boolean;
                driveThemes?: Drive_V3.Schema.AboutDriveThemes[];
                exportFormats?: object;
                folderColorPalette?: string[];
                importFormats?: object;
                kind?: string;
                maxImportSizes?: object;
                maxUploadSize?: string;
                storageQuota?: Drive_V3.Schema.AboutStorageQuota;
                teamDriveThemes?: Drive_V3.Schema.AboutTeamDriveThemes[];
                user?: Drive_V3.Schema.User;
            }
        }
    }
    interface Drive_V3 {
        About: Drive_V3.Collection.AboutCollection;
        Apps: Drive_V3.Collection.AppsCollection;
        Changes: Drive_V3.Collection.ChangesCollection;
        Channels: Drive_V3.Collection.ChannelsCollection;
        Comments: Drive_V3.Collection.CommentsCollection;
        Drives: Drive_V3.Collection.DrivesCollection;
        Files: Drive_V3.Collection.FilesCollection;
        Permissions: Drive_V3.Collection.PermissionsCollection;
        Replies: Drive_V3.Collection.RepliesCollection;
        Revisions: Drive_V3.Collection.RevisionsCollection;
        Teamdrives: Drive_V3.Collection.TeamdrivesCollection;
        newChannel(): Drive_V3.Schema.Channel;
        newComment(): Drive_V3.Schema.Comment;
        newCommentQuotedFileContent(): Drive_V3.Schema.CommentQuotedFileContent;
        newContentRestriction(): Drive_V3.Schema.ContentRestriction;
        newDrive(): Drive_V3.Schema.Drive;
        newDriveBackgroundImageFile(): Drive_V3.Schema.DriveBackgroundImageFile;
        newDriveCapabilities(): Drive_V3.Schema.DriveCapabilities;
        newDriveRestrictions(): Drive_V3.Schema.DriveRestrictions;
        newFile(): Drive_V3.Schema.File;
        newFileCapabilities(): Drive_V3.Schema.FileCapabilities;
        newFileContentHints(): Drive_V3.Schema.FileContentHints;
        newFileContentHintsThumbnail(): Drive_V3.Schema.FileContentHintsThumbnail;
        newFileImageMediaMetadata(): Drive_V3.Schema.FileImageMediaMetadata;
        newFileImageMediaMetadataLocation(): Drive_V3.Schema.FileImageMediaMetadataLocation;
        newFileLabelInfo(): Drive_V3.Schema.FileLabelInfo;
        newFileLinkShareMetadata(): Drive_V3.Schema.FileLinkShareMetadata;
        newFileShortcutDetails(): Drive_V3.Schema.FileShortcutDetails;
        newFileVideoMediaMetadata(): Drive_V3.Schema.FileVideoMediaMetadata;
        newLabel(): Drive_V3.Schema.Label;
        newLabelFieldModification(): Drive_V3.Schema.LabelFieldModification;
        newLabelModification(): Drive_V3.Schema.LabelModification;
        newModifyLabelsRequest(): Drive_V3.Schema.ModifyLabelsRequest;
        newPermission(): Drive_V3.Schema.Permission;
        newPermissionPermissionDetails(): Drive_V3.Schema.PermissionPermissionDetails;
        newPermissionTeamDrivePermissionDetails(): Drive_V3.Schema.PermissionTeamDrivePermissionDetails;
        newReply(): Drive_V3.Schema.Reply;
        newRevision(): Drive_V3.Schema.Revision;
        newTeamDrive(): Drive_V3.Schema.TeamDrive;
        newTeamDriveBackgroundImageFile(): Drive_V3.Schema.TeamDriveBackgroundImageFile;
        newTeamDriveCapabilities(): Drive_V3.Schema.TeamDriveCapabilities;
        newTeamDriveRestrictions(): Drive_V3.Schema.TeamDriveRestrictions;
        newUser(): Drive_V3.Schema.User;
    }
}

declare var Drive_V3: GoogleAppsScript.Drive_V3;
