// Type definitions for Google Drive API v2
// Project: https://developers.google.com/drive/
// Definitions by: Sam Baxter <https://github.com/baxtersa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client {
    export module drive {
        const files: {
            get: (parameters: GetParameters) => HttpRequest<FileResource>;
            patch: (parameters: PatchParameters) => HttpRequest<FileResource>;
            copy: (parameters: CopyParameters) => HttpRequest<FileResource>;
            delete: (parameters: DeleteParameters) => HttpRequest<any>;
            emptyTrash: () => HttpRequest<any>;
            export: (parameters: ExportParameters) => HttpRequest<FileResource>;
            generateIds: (parameters: GenerateIdsParameters) => HttpRequest<IdsResource>;
            insert: (parameters: InsertParameters) => HttpRequest<FileResource>;
            list: (parameters: ListParameters) => HttpRequest<FileListResource>;
            touch: (parameters: TouchParameters) => HttpRequest<FileResource>;
            trash: (parameters: TrashParameters) => HttpRequest<FileResource>;
            untrash: (parameters: UntrashParameters) => HttpRequest<FileResource>;
            watch: (parameters: WatchParameters) => HttpRequest<ChannelResource>;
        }

        interface GetParameters {
            fileId: string;
            acknowledgeAbuse?: boolean | undefined;
            projection?: string | undefined;
            revisionId?: string | undefined;
            supportsTeamDrives?: boolean | undefined;
            updateViewedDate?: boolean | undefined;
            supportsAllDrives?: boolean | undefined;
            fields?: string | undefined;
        }

        interface PatchParameters {
            fileId: string;
            resource?: FileResource | undefined
            convert?: boolean | undefined;
            modifiedDateBehavior?: string | undefined;
            newRevision?: boolean | undefined;
            ocr?: boolean | undefined;
            ocrLanguage?: string | undefined;
            pinned?: boolean | undefined;
            removeParents?: string | undefined;
            setModifiedDate?: boolean | undefined;
            supportsTeamDrives?: boolean | undefined;
            timedTextLanguage?: string | undefined;
            timedTextTrackName?: string | undefined;
            updateViewedData?: boolean | undefined;
            useContentAsIndexableText?: boolean | undefined;
        }

        interface CopyParameters {
            fileId: string;
            resource?: FileResource | undefined;
            convert?: boolean | undefined;
            ocr?: boolean | undefined;
            ocrLanguage?: string | undefined;
            pinned?: boolean | undefined;
            supportsTeamDrives?: boolean | undefined;
            timedTextLanguage?: string | undefined;
            timedTextTrackName?: string | undefined;
            visibility?: string | undefined;
        }

        interface DeleteParameters {
            fileId: string;
            supportsTeamDrives?: boolean | undefined;
        }

        interface ExportParameters {
            fileId: string;
            mimeType: string;
        }

        interface GenerateIdsParameters {
            maxResults?: number | undefined;
            space?: string | undefined;
        }

        interface InsertParameters {
            uploadType: string;
            convert?: boolean | undefined;
            ocr?: boolean | undefined;
            ocrLanguage?: string | undefined;
            pinned?: boolean | undefined;
            supportsTeamDrives?: boolean | undefined;
            timedTextLanguage?: string | undefined;
            timedTextTrackName?: string | undefined;
            usecontentAsIndexableText?: boolean | undefined;
            visibility?: string | undefined;
        }

        interface ListParameters {
            corpora?: string | undefined;
            corpus?: string | undefined;
            includeTeamDriveItems?: boolean | undefined;
            maxResults?: number | undefined;
            orderBy?: string | undefined;
            pageToken?: string | undefined;
            projection?: string | undefined;
            q?: string | undefined;
            spaces?: string | undefined;
            supportsTeamDrives?: boolean | undefined;
            teamDriveId?: string | undefined;
        }

        interface TouchParameters {
            fileId: string;
            supportsTeamDrives?: boolean | undefined;
        }

        interface TrashParameters {
            fileId: string;
            supportsTeamDrives?: boolean | undefined;
        }


        interface UntrashParameters {
            fileId: string;
            supportsTeamDrives?: boolean | undefined;
        }


        interface WatchParameters {
            fileId: string;
            resource?: WatchResource | undefined;
            revisionId?: string | undefined;
            supportsTeamDrives?: boolean | undefined;
        }

        interface FileResource {
            kind: 'drive#file';
            id: string;
            etag: string;
            selfLink: string;
            webContentLink: string;
            webViewLink: string;
            alternateLink: string;
            embedLink: string;
            // openWithLinks
            defaultOpenWithLink: string;
            iconLink: string;
            hasThumbnail: boolean;
            thumbnailLink: string;
            thumbnail: {
                image: Uint8Array;
                mimType: string;
            };
            title: string;
            mimeType: string;
            description: string;
            labels: {
                starred: boolean;
                hidden: boolean;
                trashed: boolean;
                restricted: boolean;
                viewed: boolean;
                modified: boolean;
            };
            createdDate: Date;
            modifiedDate: Date;
            modifiedByMeDate: Date;
            lastViewedByMeDate: Date;
            markedViewedByMeDate: Date;
            sharedWithMeDate: Date;
            version: number;
            sharingUser: {
                kind: 'drive#user';
                displayName: string;
                picture: {
                    url: string;
                };
                isAuthenticatedUser: boolean;
                permissionId: string;
                emailAddress: string;
            };
            parents: ParentResource[];
            downloadUrl: string;
            // exportLinks
            indexableText: {
                text: string;
            };
            userPermission: PermissionResource;
            permissions: PermissionResource[];
            hasAugmentedPermissions: boolean;
            originalFilename: string;
            fileExtension: string;
            fullFileExtension: string;
            md5Checksum: string;
            fileSize: number;
            quotaBytesUsed: number;
            ownerNames: string[];
            owners: {
                kind: 'drive#user';
                displayName: string;
                picture: {
                    url: string;
                };
                isAuthenticatedUser: boolean;
                permissionId: string;
                emailAddress: string;
            }[];
            teamDriveId: string;
            lastModifyingUserName: string;
            lastModifyingUser: {
                kind: 'drive#user';
                displayName: string;
                picture: {
                    url: string;
                };
                isAuthenticatedUser: boolean;
                permissionId: string;
                emailAddress: string;
            };
            ownedByMe: boolean;
            capabilities: {
                canAddChildren: boolean;
                canChangeRestrictedDownload: boolean;
                canComment: boolean;
                canCopy: boolean;
                canDelete: boolean;
                canDownload: boolean;
                canEdit: boolean;
                canListChildren: boolean;
                canMoveItemIntoTeamDrive: boolean;
                canMoveTeamDriveItem: boolean;
                canReadRevisions: boolean;
                canReadTeamDrive: boolean;
                canRemoveChildren: boolean;
                canRename: boolean;
                canShare: boolean;
                canTrash: boolean;
                canUntrash: boolean;
            };
            editable: boolean;
            canComment: boolean;
            canReadRevisions: boolean;
            shareable: boolean;
            copyable: boolean;
            writersCanShare: boolean;
            shared: boolean;
            explicitlyTrashed: boolean;
            trashingUser: {
                kind: 'drive#user';
                displayName: string;
                picture: {
                    url: string;
                };
                isAuthenticatedUser: boolean;
                permissionId: string;
                emailAddress: string;
            };
            trashedDate: Date;
            appDataContents: boolean;
            headRevisionId: string;
            properties: PropertiesResource[];
            folderColorRgb: string;
            imageMediaMetadata: {
                width: number;
                height: number;
                rotation: number;
                location: {
                    latitude: number;
                    longitude: number;
                    altitude: number;
                };
                date: string;
                cameraMake: string;
                cameraModel: string;
                exposureTime: number;
                aperture: number;
                flashUsed: boolean;
                focalLength: number;
                isoSpeed: number;
                meteringMode: string;
                sensor: string;
                exposureMode: string;
                colorSpace: string;
                whiteBalance: string;
                exposureBias: number;
                maxApertureValue: number;
                subjectDistance: number;
                lens: string;
            };
            videoMediaMetadata: {
                width: number;
                height: number;
                durationMillis: number;
            };
            spaces: string[];
            isAppAuthorized: boolean;
        }

        interface FileListResource {
            kind: 'drive#fileList';
            etag: string;
            selfLink: string;
            nextPageToken: string;
            nextLink: string;
            incompleteSearch: boolean;
            items: FileResource[];
        }

        interface ParentResource {
            kind: 'drive#parentReference';
            id: string;
            selfLink: string;
            parentLink: string;
            isRoot: boolean;
        }

        interface PermissionResource {
            kind: 'drive#permission';
            etag: string;
            id: string;
            selfLink: string;
            name: string;
            emailAddress: string;
            domain: string;
            role: string;
            additionalRoles: string[];
            type: string;
            value: string;
            authKey: string;
            withLink: boolean;
            photoLink: string;
            expirationDate: Date;
            teamDrivePermissionDetails: {
                teamDrivePermissionType: string;
                role: string;
                additionalRoles: string[];
                inheritedFrom: string;
                inherited: boolean;
            }[];
            deleted: boolean;
        }

        interface PropertiesResource {
            kind: 'drive$property';
            etag: string;
            selfLink: string;
            key: string;
            visibility: string;
            value: string;
        }

        interface WatchResource {
            id: string;
            expiration: number;
            token: string;
            type: string;
            address: string;
        }

        interface ChannelResource {
            kind: 'api#channel';
            id: string;
            resourceId: string;
            resourceUri: string;
            token: string;
            expiration: number;
        }

        interface IdsResource {
            kind: 'drive#generatedIds';
            space: string;
            ids: string[];
        }
    }
}
