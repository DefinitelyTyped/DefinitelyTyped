// Type definitions for Google Drive API v2
// Project: https://developers.google.com/drive/
// Definitions by: Sam Baxter <https://github.com/baxtersa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client.drive {
    export namespace files {
        interface GetParameters {
            fileId: string;
            acknowledgeAbuse?: boolean;
            projection?: string;
            revisionId?: string;
            supportsTeamDrives?: boolean;
            updateViewedDate?: boolean;
        }

        export function get(parameters: GetParameters): HttpRequest<FileResource>;

        interface PatchParameters {
            fileId: string;
            resource?: FileResource
            convert?: boolean;
            modifiedDateBehavior?: string;
            newRevision?: boolean;
            ocr?: boolean;
            ocrLanguage?: string;
            pinned?: boolean;
            removeParents?: string;
            setModifiedDate?: boolean;
            supportsTeamDrives?: boolean;
            timedTextLanguage?: string;
            timedTextTrackName?: string;
            updateViewedData?: boolean;
            useContentAsIndexableText?: boolean;
        }

        export function patch(parameters: PatchParameters): HttpRequest<FileResource>;

        interface CopyParameters {
            fileId: string;
            resource?: FileResource;
            convert?: boolean;
            ocr?: boolean;
            ocrLanguage?: string;
            pinned?: boolean;
            supportsTeamDrives?: boolean;
            timedTextLanguage?: string;
            timedTextTrackName?: string;
            visibility?: string;
        }

        export function copy(parameters: CopyParameters): HttpRequest<FileResource>;

        interface ListParameters {
            corpora?: string;
            corpus?: string;
            includeTeamDriveItems?: boolean;
            maxResults: number;
            orderBy?: string;
            pageToken?: string;
            projection?: string;
            q?: string;
            spaces?: string;
            supportsTeamDrives?: boolean;
            teamDriveId?: string;
        }

        export function list(parameters: ListParameters): HttpRequest<FileListResource>;

        interface TouchParameters {
            fileId: string;
            supportsTeamDrives?: boolean;
        }

        export function touch(parameters: TouchParameters): HttpRequest<FileResource>;

        interface TrashParameters {
            fileId: string;
            supportsTeamDrives?: boolean;
        }

        export function trash(parameters: TrashParameters): HttpRequest<FileResource>;

        interface UntrashParameters {
            fileId: string;
            supportsTeamDrives?: boolean;
        }

        export function untrash(parameters: UntrashParameters): HttpRequest<FileResource>;

        interface WatchParameters {
            fileId: string;
            resource?: WatchResource;
            revisionId?: string;
            supportsTeamDrives?: boolean;
        }

        export function watch(parameters: WatchParameters): HttpRequest<ChannelResource>;
    }

    export interface FileResource {
        kind: 'drive#file';
        id?: string;
        // etag
        selfLink?: string;
        webContentLink?: string;
        webViewLink?: string;
        alternateLink?: string;
        embedLink?: string;
        // openWithLinks
        defaultOpenWithLink?: string;
        iconLink?: string;
        hasThumbnail?: boolean;
        thumbnailLink?: string;
        thumbnail?: {
            image: Uint8Array;
            mimType: string;
        };
        title?: string;
        mimeType?: string;
        description?: string;
        labels?: {
            starred?: boolean;
            hidden?: boolean;
            trashed?: boolean;
            restricted?: boolean;
            viewed?: boolean;
            modified?: boolean;
        };
        createdDate?: Date;
        modifiedDate?: Date;
        modifiedByMeDate?: Date;
        lastViewedByMeDate?: Date;
        markedViewedByMeDate?: Date;
        sharedWithMeDate?: Date;
        version?: number;
        sharingUser?: {
            kind: 'drive#user';
            displayName?: string;
            picture?: {
                url: string;
            };
            isAuthenticatedUser?: boolean;
            permissionId?: string;
            emailAddress?: string;
        };
        parents?: ParentResource[];
        downloadUrl?: string;
        // exportLinks
        indexableText?: {
            text: string;
        };
        userPermission?: PermissionResource;
        permissions?: PermissionResource[];
        hasAugmentedPermissions?: boolean;
        originalFilename?: string;
        fileExtension?: string;
        fullFileExtension?: string;
        md5Checksum?: string;
        fileSize?: number;
        quotaBytesUsed?: number;
        ownerNames?: string[];
        owners?: {
            kind: 'drive#user';
            displayName?: string;
            picture?: {
                url: string;
            };
            isAuthenticatedUser?: boolean;
            permissionId?: string;
            emailAddress?: string;
        }[];
        teamDriveId?: string;
        lastModifyingUserName?: string;
        lastModifyingUser?: {
            kind: 'drive#user';
            displayName?: string;
            picture?: {
                url: string;
            };
            isAuthenticatedUser?: boolean;
            permissionId?: string;
            emailAddress?: string;
        };
        ownedByMe?: boolean;
        capabilities?: {
            canAddChildren?: boolean;
            canChangeRestrictedDownload?: boolean;
            canComment?: boolean;
            canCopy?: boolean;
            canDelete?: boolean;
            canDownload?: boolean;
            canEdit?: boolean;
            canListChildren?: boolean;
            canMoveItemIntoTeamDrive?: boolean;
            canMoveTeamDriveItem?: boolean;
            canReadRevisions?: boolean;
            canReadTeamDrive?: boolean;
            canRemoveChildren?: boolean;
            canRename?: boolean;
            canShare?: boolean;
            canTrash?: boolean;
            canUntrash?: boolean;
        };
        editable?: boolean;
        canComment?: boolean;
        canReadRevisions?: boolean;
        shareable?: boolean;
        copyable?: boolean;
        writersCanShare?: boolean;
        shared?: boolean;
        explicitlyTrashed?: boolean;
        trashingUser?: {
            kind: 'drive#user';
            displayName?: string;
            picture?: {
                url: string;
            };
            isAuthenticatedUser?: boolean;
            permissionId?: string;
            emailAddress?: string;
        };
        trashedDate?: Date;
        appDataContents?: boolean;
        headRevisionId?: string;
        properties?: PropertiesResource[];
        folderColorRgb?: string;
        imageMediaMetadata?: {
            width?: number;
            height?: number;
            rotation?: number;
            location?: {
                latitude?: number;
                longitude?: number;
                altitude?: number;
            };
            date?: string;
            cameraMake?: string;
            cameraModel?: string;
            exposureTime?: number;
            aperture?: number;
            flashUsed?: boolean;
            focalLength?: number;
            isoSpeed?: number;
            meteringMode?: string;
            sensor?: string;
            exposureMode?: string;
            colorSpace?: string;
            whiteBalance?: string;
            exposureBias?: number;
            maxApertureValue?: number;
            subjectDistance?: number;
            lens?: string;
        };
        videoMediaMetadata?: {
            width?: number;
            height?: number;
            durationMillis?: number;
        };
        spaces?: string[];
        isAppAuthorized?: boolean;
    }

    export interface FileListResource {
        kind: 'drive#fileList';
        // etag
        selfLink?: string;
        nextPageToken?: string;
        nextLink?: string;
        incompleteSearch?: boolean;
        items: FileResource[];
    }

    export interface ParentResource {
        kind: 'drive#parentReference';
        id?: string;
        selfLink?: string;
        parentLink?: string;
        isRoot?: boolean;
    }

    export interface PermissionResource {
        kind: 'drive#permission';
        // etag
        id?: string;
        selfLink?: string;
        name?: string;
        emailAddress?: string;
        domain?: string;
        role?: string;
        additionalRoles?: string[];
        type?: string;
        value?: string;
        authKey?: string;
        withLink?: boolean;
        photoLink?: string;
        expirationDate?: Date;
        teamDrivePermissionDetails?: {
            teamDrivePermissionType?: string;
            role?: string;
            additionalRoles?: string[];
            inheritedFrom?: string;
            inherited?: boolean;
        }[];
        deleted?: boolean;
    }

    export interface PropertiesResource {
        kind: 'drive$property';
        // etag
        selfLink?: string;
        key?: string;
        visibility?: string;
        value?: string;
    }

    export interface WatchResource {
        id?: string;
        expiration?: number;
        token?: string;
        type?: string;
        address?: string;
    }

    export interface ChannelResource {
        kind: 'api#channel';
        id?: string;
        resourceId?: string;
        resourceUri?: string;
        token?: string;
        expiration?: number;
    }
}
