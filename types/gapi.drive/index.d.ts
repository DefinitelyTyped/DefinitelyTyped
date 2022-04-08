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
            acknowledgeAbuse?: boolean;
            projection?: string;
            revisionId?: string;
            supportsTeamDrives?: boolean;
            updateViewedDate?: boolean;
        }

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

        interface DeleteParameters {
            fileId: string;
            supportsTeamDrives?: boolean;
        }

        interface ExportParameters {
            fileId: string;
            mimeType: string;
        }

        interface GenerateIdsParameters {
            maxResults?: number;
            space?: string;
        }

        interface InsertParameters {
            uploadType: string;
            convert?: boolean;
            ocr?: boolean;
            ocrLanguage?: string;
            pinned?: boolean;
            supportsTeamDrives?: boolean;
            timedTextLanguage?: string;
            timedTextTrackName?: string;
            usecontentAsIndexableText?: boolean;
            visibility?: string;
        }

        interface ListParameters {
            corpora?: string;
            corpus?: string;
            includeTeamDriveItems?: boolean;
            maxResults?: number;
            orderBy?: string;
            pageToken?: string;
            projection?: string;
            q?: string;
            spaces?: string;
            supportsTeamDrives?: boolean;
            teamDriveId?: string;
        }

        interface TouchParameters {
            fileId: string;
            supportsTeamDrives?: boolean;
        }

        interface TrashParameters {
            fileId: string;
            supportsTeamDrives?: boolean;
        }


        interface UntrashParameters {
            fileId: string;
            supportsTeamDrives?: boolean;
        }


        interface WatchParameters {
            fileId: string;
            resource?: WatchResource;
            revisionId?: string;
            supportsTeamDrives?: boolean;
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
