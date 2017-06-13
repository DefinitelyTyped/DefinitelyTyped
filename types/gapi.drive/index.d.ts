// Type definitions for Google Drive API v2
// Project: https://developers.google.com/drive/
// Definitions by: Sam Baxter <https://github.com/baxtersa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client.drive {
  export namespace drive {
    export function get(fileId: string): HttpRequest<FileResource>;

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
  }
}
