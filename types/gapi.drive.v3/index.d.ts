// Type definitions for Google Drive API v3
// Project: https://developers.google.com/drive/
// Definitions by: Tomohiko Ozawa <https://github.com/kota65535>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client {
    export module drive {
        const files: {
            copy: (parameters: CopyParameters) => HttpRequest<FileResource>;
            create: (parameters: CreateParameters) => HttpRequest<FileResource>;
            delete: (parameters: DeleteParameters) => HttpRequest<any>;
            emptyTrash: () => HttpRequest<any>;
            export: (parameters: ExportParameters) => HttpRequest<FileResource>;
            generateIds: (parameters: GenerateIdsParameters) => HttpRequest<IdsResource>;
            get: (parameters: GetParameters) => HttpRequest<FileResource>;
            list: (parameters: ListParameters) => HttpRequest<FileListResource>;
            update: (parameters: UpdateParameters) => HttpRequest<FileListResource>;
            watch: (parameters: WatchParameters) => HttpRequest<ChannelResource>;
        };

        interface CopyParameters {
            fileId: string;
            ignoreDefaultVisibility?: boolean;
            keepRevisionForever?: boolean;
            ocrLanguage?: string;
            supportsTeamDrives?: boolean;
            alt?: string;
            fields?: string;
        }

        interface CreateParameters {
            // uploadType: string;
            ignoreDefaultVisibility?: boolean;
            keepRevisionForever?: boolean;
            ocrLanguage?: string;
            supportsTeamDrives?: boolean;
            useContentAsIndexableText?: boolean;
            resource: FileResource;
            alt?: string;
            fields?: string;
        }

        interface DeleteParameters {
            fileId: string;
            supportsTeamDrives?: boolean;
            alt?: string;
            fields?: string;
        }

        interface ExportParameters {
            fileId: string;
            mimeType: string;
            alt?: string;
            fields?: string;
        }

        interface GenerateIdsParameters {
            count?: number;
            space?: string;
            alt?: string;
            fields?: string;
        }

        interface GetParameters {
            fileId: string;
            acknowledgeAbuse?: boolean;
            supportsTeamDrives?: boolean;
            alt?: string;
            fields?: string;
        }

        interface ListParameters {
            corpora?: string;
            corpus?: string;
            includeTeamDriveItems?: boolean;
            orderBy?: string;
            pageSize?: number;
            pageToken?: string;
            q?: string;
            spaces?: string;
            supportsTeamDrives?: boolean;
            teamDriveId?: string;
            alt?: string;
            fields?: string;
        }

        interface UpdateParameters {
            fileId: string;
            uploadType: string;
            addParents?: string;
            keepRevisionForever?: boolean;
            ocrLanguage?: string;
            supportsTeamDrives?: boolean;
            useContentAsIndexableText?: boolean;
            alt?: string;
            fields?: string;
        }

        interface WatchParameters {
            fileId: string;
            acknowledgeAbuse?: boolean;
            supportsTeamDrives?: boolean;
            alt?: string;
            fields?: string;
        }

        interface FileResource {
            kind: string;
            id: string;
            name: string;
            mimeType: string;
            description: string;
            starred: boolean;
            trashed: boolean;
            explicitlyTrashed: boolean;
            trashingUser: {
                kind: string;
                displayName: string;
                photoLink: string;
                me: boolean;
                permissionId: string;
                emailAddress: string
            };
            trashedTime: Date;
            parents: [
                string
                ];
            properties: {
                key: string;
            };
            appProperties: {
                key: string;
            };
            spaces: [
                string
                ];
            version: number;
            webContentLink: string;
            webViewLink: string;
            iconLink: string;
            hasThumbnail: boolean;
            thumbnailLink: string;
            thumbnailVersion: number;
            viewedByMe: boolean;
            viewedByMeTime: Date;
            createdTime: Date;
            modifiedTime: Date;
            modifiedByMeTime: Date;
            modifiedByMe: boolean;
            sharedWithMeTime: Date;
            sharingUser: {
                kind: "drive#user";
                displayName: string;
                photoLink: string;
                me: boolean;
                permissionId: string;
                emailAddress: string
            };
            owners: [
                {
                    kind: "drive#user";
                    displayName: string;
                    photoLink: string;
                    me: boolean;
                    permissionId: string;
                    emailAddress: string
                }
                ];
            teamDriveId: string;
            lastModifyingUser: {
                kind: "drive#user";
                displayName: string;
                photoLink: string;
                me: boolean;
                permissionId: string;
                emailAddress: string
            };
            shared: boolean;
            ownedByMe: boolean;
            capabilities: {
                canAddChildren: boolean;
                canChangeViewersCanCopyContent: boolean;
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
            viewersCanCopyContent: boolean;
            writersCanShare: boolean;
            permissions: PermissionResource[];
            hasAugmentedPermissions: boolean;
            folderColorRgb: string;
            originalFilename: string;
            fullFileExtension: string;
            fileExtension: string;
            md5Checksum: string;
            size: number;
            quotaBytesUsed: number;
            headRevisionId: string;
            contentHints: {
                thumbnail: {
                    image: string;  // binary
                    mimeType: string
                };
                indexableText: string
            };
            imageMediaMetadata: {
                width: number;
                height: number;
                rotation: number;
                location: {
                    latitude: number;
                    longitude: number;
                    altitude: number;
                };
                time: string;
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
            isAppAuthorized: boolean;
        }

        interface FileListResource {
            kind: string;
            nextPageToken: string;
            files: FileResource[];
            incompleteSearch: boolean;
        }

        interface PermissionResource {
            kind: string;
            id: string;
            type: string;
            emailAddress: string;
            domain: string;
            role: string;
            allowFileDiscovery: boolean;
            displayName: string;
            photoLink: string;
            expirationTime: Date;
            teamDrivePermissionDetails: {
                teamDrivePermissionType: string;
                role: string;
                inheritedFrom: string;
                inherited: boolean;
            };
            deleted: boolean;
        }

        // ?
        interface PropertiesResource {
            kind: string;
            etag: string;
            selfLink: string;
            key: string;
            visibility: string;
            value: string;
        }

        // ?
        interface WatchResource {
            id: string;
            expiration: number;
            token: string;
            type: string;
            address: string;
        }

        interface ChannelResource {
            kind: string;
            id: string;
            resourceId: string;
            resourceUri: string;
            token: string;
            expiration: number;
            type: string;
            address: string;
            payload: boolean;
            params: {
                key: string;
            };
        }

        interface IdsResource {
            kind: string;
            space: string;
            ids: string[];
        }
    }
}
