// Type definitions for Google Page Speed Online Api
// Project: https://developers.google.com/drive/v2/reference/
// Definitions by: Gabriel Garcia <https://github.com/garciat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../gapi/gapi.client.d.ts" />

declare module gapi.client.drive {
    interface File {
        /**
         * The type of file. This is always drive#file.
         */
        kind: string;
        
        /**
         * The ID of the file.
         */
        id: string;
        
        /**
         * ETag of the file.
         */
        etag: string;
        
        /**
         * A link back to this file.
         */
        selfLink: string;
        
        /**
         * A link for downloading the content of the file in a browser using
         * cookie based authentication. In cases where the content is shared
         * publicly, the content can be downloaded without any credentials.
         */
        webContentLink: string;
        
        /**
         * A link only available on public folders for viewing their static web
         * assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.
         */
        webViewLink: string;
        
        /**
         * A link for opening the file in a relevant Google editor or viewer.
         */
        alternateLink: string;
        
        /**
         * A link for embedding the file.
         */
        embedLink: string;
        
        /**
         * A map of the id of each of the user's apps to a link to open this
         * file with that app. Only populated when the drive.apps.readonly
         * scope is used.
         */
        openWithLinks: { [key: string]: string };
        
        /**
         * A link to open this file with the user's default app for this file.
         * Only populated when the drive.apps.readonly scope is used.
         */
        defaultOpenWithLink: string;
        
        /**
         * A link to the file's icon.
         */
        iconLink: string;
        
        /**
         * A short-lived link to the file's thumbnail. Typically lasts on the
         * order of hours.
         */
        thumbnailLink: string;
        
        /**
         * Thumbnail for the file.
         * 
         * Only accepted on upload and for files that are not already
         * thumbnailed by Google.
         * 
         * Notes: writable
         */
        thumbnail: {
            /**
             * The URL-safe Base64 encoded bytes of the thumbnail image.
             * It should conform to RFC 4648 section 5.
             */
            image: string;
            
            /**
             * The MIME type of the thumbnail.
             */
            mimeType: string;
        };
        
        /**
         * The title of the file. Used to identify file or folder name.
         * 
         * Notes: writable
         */
        title: string;
        
        /**
         * The MIME type of the file.
         * 
         * This is only mutable on update when uploading new content.
         * 
         * This field can be left blank, and the mimetype will be determined
         * from the uploaded content's MIME type.
         * 
         * Notes: writable
         */
        mimeType: string;
        
        /**
         * A short description of the file.
         * 
         * Notes: writable
         */
        description: string;
        
        /**
         * A group of labels for the file.
         */
        labels: {
            /**
             * Whether this file is starred by the user.
             * 
             * Notes: writable
             */
            starred: boolean;
            
            /**
             * Whether this file has been trashed. This label applies to all
             * users accessing the file; however, only owners are allowed to
             * see and untrash files.
             * 
             * Notes: writable
             */
            trashed: boolean;
            
            /**
             * Whether viewers are prevented from downloading this file.
             * 
             * Notes: writable
             */
            restricted: boolean;
            
            /**
             * Whether this file has been viewed by this user.
             * 
             * Notes: writable
             */
            viewed: boolean;
        };
        
        /**
         * Create time for this file (formatted RFC 3339 timestamp).
         */
        createdDate: string;
        
        /**
         * Last time this file was modified by anyone (formatted RFC 3339
         * timestamp).
         * 
         * This is only mutable on update when the setModifiedDate parameter
         * is set.
         * 
         * Notes: writable
         */
        modifiedDate: string;
        
        /**
         * Last time this file was modified by the user (formatted RFC 3339
         * timestamp).
         * 
         * Note that setting modifiedDate will also update the modifiedByMe
         * date for the user which set the date.
         */
        modifiedByMeDate: string;
        
        /**
         * Last time this file was viewed by the user (formatted RFC 3339
         * timestamp).
         * 
         * Notes: writable
         */
        lastViewedByMeDate: string;
        
        /**
         * Time this file was explicitly marked viewed by the user (formatted
         * RFC 3339 timestamp).
         * 
         * Notes: writable
         */
        markedViewedByMeDate: string;
        
        /**
         * Time at which this file was shared with the user (formatted RFC 3339
         * timestamp).
         */
        sharedWithMeDate: string;
        
        /**
         * A monotonically increasing version number for the file.
         * This reflects every change made to the file on the server, even
         * those not visible to the requesting user.
         */
        version: number;
        
        /**
         * User that shared the item with the current user, if available.
         */
        sharingUser: User;
        
        /**
         * Collection of parent folders which contain this file.
         * 
         * Setting this field will put the file in all of the provided folders.
         * On insert, if no folders are provided, the file will be placed in
         * the default root folder.
         * 
         * Notes: writable
         */
        parents: ParentReference[];
        
        /**
         * Short lived download URL for the file.
         * 
         * This is only populated forfiles with content stored in Drive.
         */
        downloadUrl: string;
        
        /**
         * Links for exporting Google Docs to specific formats.
         */
        exportLinks: { [key: string]: string; };
        
        /**
         * Indexable text attributes for the file.
         * 
         * This property can only be written, and is not returned by files.get.
         * For more information, see Custom thumbnails and indexable text.
         */
        indexableText: {
            /**
             * The text to be indexed for this file.
             * 
             * Notes: writable
             */
            text: string;
        };
        
        /**
         * The permissions for the authenticated user on this file.
         */
        userPermission: Permission;
        
        /**
         * The list of permissions for users with access to this file.
         */
        permissions: Permission[];
        
        /**
         * The original filename if the file was uploaded manually, or the
         * original title if the file was inserted through the API.
         * 
         * Note that renames of the title will not change the original filename.
         * 
         * This will only be populated on files with content stored in Drive.
         */
        originalFilename: string;
        
        /**
         * The file extension used when downloading this file.
         * 
         * To set the extension, include it in the title when creating the file.
         * 
         * This is only populated for files with content stored in Drive.
         */
        fileExtension: string;
        
        /**
         * An MD5 checksum for the content of this file.
         * 
         * This is populated only for files with content stored in Drive.
         */
        md5Checksum: string;
        
        /**
         * The size of the file in bytes.
         * 
         * This is only populated for files with content stored in Drive.
         */
        fileSize: number;
        
        /**
         * The number of quota bytes used by this file.
         */
        quotaBytesUsed: number;
        
        /**
         * Name(s) of the owner(s) of this file.
         */
        ownerNames: string[];
        
        /**
         * The owner(s) of this file.
         */
        owners: User[];
        
        /**
         * Name of the last user to modify this file.
         */
        lastModifyingUserName: string;
        
        /**
         * The last user to modify this file.
         */
        lastModifyingUser: User;
        
        /**
         * Whether the file can be edited by the current user.
         */
        editable: boolean;
        
        /**
         * Whether the file can be copied by the current user.
         */
        copyable: boolean;
        
        /**
         * Whether writers can share the document with other users.
         * 
         * Notes: writable
         */
        writersCanShare: boolean;
        
        /**
         * Whether the file has been shared.
         */
        shared: boolean;
        
        /**
         * Whether this file has been explicitly trashed, as opposed to
         * recursively trashed.
         * 
         * This will only be populated if the file is trashed.
         */
        explicitlyTrashed: boolean;
        
        /**
         * Whether this file is in the Application Data folder.
         */
        appDataContents: boolean;
        
        /**
         * The ID of the file's head revision.
         * 
         * This will only be populated for files with content stored in Drive.
         */
        headRevisionId: string;
        
        /**
         * The list of properties.
         * 
         * Notes: writable
         */
        properties: Property[];
        
        /**
         * Folder color as an RGB hex string if the file is a folder.
         * 
         * The list of supported colors is available in the folderColorPalette
         * field of the About resource.
         * 
         * If an unsupported color is specified, it will be changed to the
         * closest color in the palette.
         * 
         * Notes: writable
         */
        folderColorRgb: string;
        
        /**
         * Metadata about image media.
         * 
         * This will only be present for image types, and its contents will
         * depend on what can be parsed from the image content.
         */
        imageMediaMetadata: {
            /**
             * The width of the image in pixels.
             */
            width: number;
            
            /**
             * The height of the image in pixels.
             */
            height: number;
            
            /**
             * The rotation in clockwise degrees from the image's original
             * orientation.
             */
            rotation: number;
            
            /**
             * Geographic location information stored in the image.
             */
            location: {
                /**
                 * The latitude stored in the image.
                 */
                latitude: number;
                
                /**
                 * The longitude stored in the image.
                 */
                longitude: number;
                
                /**
                 * The altitude stored in the image.
                 */
                altitude: number;
            };
            
            /**
             * The date and time the photo was taken (EXIF format timestamp).
             */
            date: string;
            
            /**
             * The make of the camera used to create the photo.
             */
            cameraMake: string;
            
            /**
             * The model of the camera used to create the photo.
             */
            cameraModel: string;
            
            /**
             * The length of the exposure, in seconds.
             */
            exposureTime: number;
            
            /**
             * The aperture used to create the photo (f-number).
             */
            aperture: number;
            
            /**
             * Whether a flash was used to create the photo.
             */
            flashUsed: boolean;
            
            /**
             * The focal length used to create the photo, in millimeters.
             */
            focalLength: number;
            
            /**
             * The ISO speed used to create the photo.
             */
            isoSpeed: number;
            
            /**
             * The metering mode used to create the photo.
             */
            meteringMode: string;
            
            /**
             * The type of sensor used to create the photo.
             */
            sensor: string;
            
            /**
             * The exposure mode used to create the photo.
             */
            exposureMode: string;
            
            /**
             * The color space of the photo.
             */
            colorSpace: string;
            
            /**
             * The white balance mode used to create the photo.
             */
            whiteBalance: string;
            
            /**
             * The exposure bias of the photo (APEX value).
             */
            exposureBias: number;
            
            /**
             * The smallest f-number of the lens at the focal length used to
             * create the photo (APEX value).
             */
            maxApertureValue: number;
            
            /**
             * The distance to the subject of the photo, in meters.
             */
            subjectDistance: number;
            
            /**
             * The lens used to create the photo.
             */
            lens: string;
        };
        
        /**
         * Metadata about video media. This will only be present for video types.
         */
        videoMediaMetadata: {
            /**
             * The width of the video in pixels.
             */
            width: number;
            
            /**
             * The height of the video in pixels.
             */
            height: number;
            
            /**
             * The duration of the video in milliseconds.
             */
            durationMillis: number;
        };
    }
    
    interface ParentReference {
        /**
         * This is always drive#parentReference.
         */
        kind: string;

        /**
         * The ID of the parent.
         */
        id: string;
        
        /**
         * A link back to this reference.
         */
        selfLink: string;
        
        /**
         * A link to the parent.
         */
        parentLink: string;
        
        /**
         * Whether or not the parent is the root folder.
         */
        isRoot: boolean;
    }
    
    enum PermissionRole {
        "owner",
        "reader",
        "writer",
        "commenter"
    }
    
    enum PermissionAccountType {
        "user",
        "group",
        "domain",
        "anyone"
    }
    
    /**
     * A permission for a file.
     */
    interface Permission {
        /**
         * This is always drive#permission.
         */
        kind: string;
        
        /**
         * The ETag of the permission.
         */
        etag: string;
        
        /**
         * The ID of the user this permission refers to, and identical to the
         * permissionId in the About and Files resources.
         * 
         * When making a drive.permissions.insert request, exactly one of the
         * id or value fields must be specified.
         * 
         * Notes: writable
         */
        id: string;
        
        /**
         * A link back to this permission.
         */
        selfLink: string;
        
        /**
         * The name for this permission.
         */
        name: string;
        
        /**
         * The email address of the user or group this permission refers to.
         * This is an output-only field which is present when the permission
         * type is user or group.
         */
        emailAddress: string;
        
        /**
         * The domain name of the entity this permission refers to. This is an
         * output-only field which is present when the permission type is user,
         * group or domain.
         */
        domain: string;
        
        /**
         * The primary role for this user.
         * 
         * Notes: writable
         */
        role: PermissionRole;
        
        /**
         * Additional roles for this user. Only commenter is currently allowed.
         * 
         * Notes: writable
         */
        additionalRoles: PermissionRole[];
        
        /**
         * The account type.
         * 
         * Notes: writable
         */
        type: PermissionAccountType;
        
        /**
         * The email address or domain name for the entity. This is used during
         * inserts and is not populated in responses.
         * 
         * When making a drive.permissions.insert request, exactly one of the
         * id or value fields must be specified.
         * 
         * Notes: writable
         */
        value: string;
        
        /**
         * The authkey parameter required for this permission.
         */
        authKey: string;
        
        /**
         * Whether the link is required for this permission.
         * 
         * Notes: writable
         */
        withLink: boolean;
        
        /**
         * A link to the profile photo, if available.
         */
        photoLink: string;
    }
    
    interface PermissionList {
        /**
         * This is always drive#permissionList.
         */
        kind: string;
        
        /**
         * The ETag of the list.
         */
        etag: string;
        
        /**
         * A link back to this list.
         */
        selfLink: string;
        
        /**
         * The actual list of permissions.
         */
        items: Permission[];
    }
    
    interface PermissionId {
        /**
         * This is always drive#permissionId.
         */
        kind: string;
        
        /**
         * The permission ID.
         */
        id: string;
    }
    
    interface FileList {
        /**
         * This is always drive#fileList.
         */
        kind: string;
        
        /**
         * The ETag of the list.
         */
        etag: string;
        
        /**
         * A link back to this list.
         */
        selfLink: string;
        
        /**
         * The page token for the next page of files.
         */
        nextPageToken: string;
        
        /**
         * A link to the next page of files.
         */
        nextLink: string;
        
        /**
         * The actual list of files.
         */
        items: File[]
    }
    
    /**
     * A key-value pair attached to a file that is either public or private to
     * an application.
     */
    interface Property {
        /**
         * This is always drive#property.
         */
        kind: string;
        
        /**
         * ETag of the property.
         */
        etag: string;
        
        /**
         * The link back to this property.
         */
        selfLink: string;
        
        /**
         * The key of this property.
         */
        key: string;
        
        /**
         * The visibility of this property.
         */
        visibility: string;
        
        /**
         * The value of this property.
         */
        value: string;
    }
    
    interface User {
        /**
         * This is always drive#user.
         */
        kind: string;
        
        /**
         * A plain text displayable name for this user.
         */
        displayName: string;
        
        /**
         * The user's profile picture.
         */
        picture: {
            /**
             * A URL that points to a profile picture of this user.
             */
            url: string;
        };
        
        /**
         * Whether this user is the same as the authenticated user for whom
         * the request was made.
         */
        isAuthenticatedUser: boolean;
        
        /**
         * The user's ID as visible in the permissions collection.
         */
        permissionId: string;
        
        /**
         * The email address of the user.
         */
        emailAddress: string;
    }
    
    interface Channel {
        /**
         * This is always drive#channel.
         */
        kind: string;
        
        /**
         * A UUID or similar unique string that identifies this channel.
         */
        id: string;
        
        /**
         * An opaque ID that identifies the resource being watched on this
         * channel.
         */
        resourceId: string;
        
        /**
         * A version-specific identifier for the watched resource.
         */
        resourceUri: string;
        
        /**
         * An arbitrary string delivered to the target address with each
         * notification delivered over this channel.
         * 
         * Notes: optional
         */
        token?: string;
        
        /**
         * Date and time of notification channel expiration, expressed as a
         * Unix timestamp, in milliseconds.
         * 
         * Notes: optional
         */
        expiration?: number;
    }
    
    enum FileListCorpus {
        /**
         * The items that the user has accessed.
         */
        "DEFAULT",
        /**
         * Items shared to the user's domain.
         */
        "DOMAIN"
    }
    
    enum FileVisibility {
        /**
         * The visibility of the new file is determined by the user's default
         * visibility/sharing policies.
         */
        "DEFAULT",
        /**
         * The new file will be visible to only the owner.
         */
        "PRIVATE"
    }
}

declare module gapi.client.drive {
    interface GoogleDriveFilesApi {
        /**
         * Gets a file's metadata by ID.
         */
        get(params: {
            /**
             * The ID for the file in question.
             */
            fileId: string,
            
            /**
             * Whether the user is acknowledging the risk of downloading known
             * malware or other abusive files.
             * 
             * Default: false
             */
            acknowledgeAbuse?: boolean
            
            /**
             * Specifies the Revision ID that should be downloaded.
             * Ignored unlessalt=media is specified.
             */
            revisionId?: string,
            
            /**
             * Whether to update the view date after successfully retrieving the
             * file.
             * 
             * Default: false
             */
            updateViewedDate?: boolean
        }): HttpRequest<File>;
        
        /**
         * Updates file metadata.
         */
        patch(params: {
            /**
             * The ID of the file to update.
             */
            fileId: string,
            
            /**
             * Whether a blob upload should create a new revision.
             * 
             * If false, the blob data in the current head revision is replaced.
             * 
             * If true or not set, a new blob is created as head revision, and
             * previous revisions are preserved (causing increased use of the
             * user's data storage quota).
             * 
             * Default: true
             */
            newRevision?: boolean,
            
            /**
             * Comma-separated list of parent IDs to add.
             */
            addParents?: string,
            
            /**
             * Comma-separated list of parent IDs to remove.
             */
            removeParents?: string,
            
            /**
             * Whether to set the modified date with the supplied modified date.
             * 
             * Default: false
             */
            setModifiedDate?: boolean,
            
            /**
             * Whether to update the view date after successfully updating the file.
             * 
             * Default: true
             */
            updateViewedDate?: boolean,
            
            /**
             * Whether to use the content as indexable text.
             * 
             * Default: false
             */
            useContentAsIndexableText?: boolean,
            
            /**
             * Whether to pin the head revision of the uploaded file. A file can
             * have a maximum of 200 pinned revisions.
             * 
             * Default: false
             */
            pinned?: boolean,
            
            /**
             * Whether to convert this file to the corresponding Google Docs format.
             * 
             * Default: false
             */
            convert?: boolean,
            
            /**
             * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
             * 
             * Default: false
             */
            ocr?: boolean,
            
            /**
             * If ocr is true, hints at the language to use.
             * Valid values are ISO 639-1 codes.
             */
            ocrLanguage?: string,
            
            /**
             * The language of the timed text.
             */
            timedTextLanguage?: string,
            
            /**
             * The timed text track name.
             */
            timedTextTrackName?: string
        }): HttpResponse<File>;
        
        /**
         * Creates a copy of the specified file.
         */
        copy(params: {
            /**
             * The ID of the file to copy.
             */
            fileId: string,
            
            /**
             * Whether to convert this file to the corresponding Google Docs format.
             * 
             * Default: false
             */
            convert?: boolean,
            
            /**
             * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
             * 
             * Default: false
             */
            ocr?: boolean,
            
            /**
             * If ocr is true, hints at the language to use.
             * Valid values are ISO 639-1 codes.
             */
            ocrLanguage?: string,
            
            /**
             * Whether to pin the head revision of the uploaded file. A file can
             * have a maximum of 200 pinned revisions.
             * 
             * Default: false
             */
            pinned?: boolean,
            
            /**
             * The language of the timed text.
             */
            timedTextLanguage?: string,
            
            /**
             * The timed text track name.
             */
            timedTextTrackName?: string,
            
            /**
             * The visibility of the new file.
             * This parameter is only relevant when convert=false.
             */
            visibility?: FileVisibility
        }): HttpResponse<File>;
        
        /**
         * Permanently deletes a file by ID. Skips the trash.
         * The currently authenticated user must own the file.
         */
        delete(params: {
            /**
             * The ID of the file to delete.
             */
            fileId: string
        }): HttpResponse<void>;
        
        /**
         * Lists the user's files.
         */
        list(params?: {
            /**
             * The body of items (files/documents) to which the query applies.
             */
            corpus?: FileListCorpus,
            
            /**
             * Maximum number of files to return.
             * 
             * Acceptable values are 0 to 1000, inclusive.
             * 
             * Default: 100
             */
            maxResults?: number,
            
            /**
             * Page token for files.
             */
            pageToken?: string,
            
            /**
             * Query string for searching files.
             */
            q?: string
        }) : HttpRequest<FileList>;
        
        /**
         * Set the file's updated time to the current server time.
         */
        touch(params: {
            /**
             * The ID of the file to update.
             */
            fileId: string
        }): HttpResponse<void>;
        
        /**
         * Moves a file to the trash.
         */
        trash(params: {
            /**
             * The ID of the file to trash.
             */
            fileId: string
        }): HttpResponse<void>;
        
        /**
         * Restores a file from the trash.
         */
        untrash(params: {
            /**
             * The ID of the file to untrash.
             */
            fileId: string
        }): HttpResponse<void>;
        
        /**
         * Start watching for changes to a file.
         */
        watch(params: {
            /**
             * The ID of the file to watch.
             */
            fileId: string,
            
            /**
             * Specifies the Revision ID that should be downloaded.
             * 
             * Ignored unless alt=media is specified.
             */
            revisionId: string,
            
            resource: {
                /**
                 * A UUID or similar unique string that identifies this channel.
                 */
                id: string,
                
                /**
                 * An arbitrary string delivered to the target address with each
                 * notification delivered over this channel.
                 * 
                 * Notes: optional
                 */
                token?: string,
                
                /**
                 * Date and time of notification channel expiration, expressed as a
                 * Unix timestamp, in milliseconds.
                 * 
                 * Notes: optional
                 */
                expiration?: number,
                
                /**
                 * The type of delivery mechanism used for this channel.
                 * 
                 * The only option is 'web_hook'.
                 */
                type: string,
                
                /**
                 * The address where notifications are delivered for this channel.
                 */
                address: string
            }
        }): HttpRequest<Channel>;
        
        /**
         * Permanently deletes all of the user's trashed files.
         */
        emptyTrash(): HttpRequest<void>;
    }
    
    var files: GoogleDriveFilesApi;
}

declare module gapi.client.drive {
    enum DomainSharingPolicy {
        "ALLOWED",
        "ALLOWED_WITH_WARNING",
        "INCOMING_ONLY",
        "DISALLOWED"
    }
    
    enum QuotaType {
        "LIMITED",
        "UNLIMITED"
    }
    
    interface About {
        /**
         * This is always drive#about.
         */
        kind: string;
        
        /**
         * The ETag of the item.
         */
        etag: string;
        
        /**
         * A link back to this item.
         */
        selfLink: string;
        
        /**
         * The name of the current user.
         */
        name: string;
        
        /**
         * The total number of quota bytes.
         */
        quotaBytesTotal: number;
        
        /**
         * The number of quota bytes used by Google Drive.
         */
        quotaBytesUsed: number;
        
        /**
         * The number of quota bytes used by trashed items.
         */
        quotaBytesUsedInTrash: number;
        
        /**
         * The largest change id.
         */
        largestChangeId: number;
        
        /**
         * The number of remaining change ids.
         */
        remainingChangeIds: number;
        
        /**
         * The id of the root folder.
         */
        rootFolderId: string;
        
        /**
         * The domain sharing policy for the current user.
         */
        domainSharingPolicy: DomainSharingPolicy;
        
        /**
         * The allowable import formats.
         */
        importFormats: {
            /**
             * The imported file's content type to convert from.
             */
            source: string;
            
            /**
             * The possible content types to convert to.
             */
            targets: string[];
        }[];
        
        /**
         * The allowable export formats.
         */
        exportFormats: {
            /**
             * The imported file's content type to convert from.
             */
            source: string;
            
            /**
             * The possible content types to convert to.
             */
            targets: string[];
        }[];
        
        /**
         * Information about supported additional roles per file type. The most
         * specific type takes precedence.
         */
        additionalRoleInfo: {
            /**
             * The content type that this additional role info applies to.
             */
            type: string;
            
            /**
             * The supported additional roles per primary role.
             */
            roleSets: {
                /**
                 * A primary permission role.
                 */
                primaryRole: string;
                
                /**
                 * The supported additional roles with the primary role.
                 */
                additionalRoles: string[];
            }[];
        }[];
        
        /**
         * List of additional features enabled on this account.
         */
        features: {
            /**
             * The name of the feature.
             */
            featureName: string;
            
            /**
             * The request limit rate for this feature, in queries per second.
             */
            featureRate: number;
        }[];
        
        /**
         * List of max upload sizes for each file type. The most specific type
         * takes precedence.
         */
        maxUploadSizes: {
            /**
             * The file type.
             */
            type: string;
            
            /**
             * The max upload size for this type.
             */
            size: number;
        }[];
        
        /**
         * The current user's ID as visible in the permissions collection.
         */
        permissionId: string;
        
        /**
         * A boolean indicating whether the authenticated app is installed by
         * the authenticated user.
         */
        isCurrentAppInstalled: boolean;
        
        /**
         * The authenticated user.
         */
        user: User;
        
        /**
         * The amount of storage quota used by different Google services.
         */
        quotaBytesByService: {
            /**
             * The service's name, e.g. DRIVE, GMAIL, or PHOTOS.
             */
            serviceName: string;
            
            /**
             * The storage quota bytes used by the service.
             */
            bytesUsed: number;
        }[];
        
        /**
         * The user's language or locale code, as defined by BCP 47, with some
         * extensions from Unicode's LDML format
         * (http://www.unicode.org/reports/tr35/).
         */
        languageCode: string;
        
        /**
         * The type of the user's storage quota.
         */
        quotaType: QuotaType;
        
        /**
         * The palette of allowable folder colors as RGB hex strings.
         */
        folderColorPalette: string[];
    }
    
    interface GoogleDriveAboutApi {
        /**
         * Gets the information about the current user along with Drive API settings.
         */
        get(params?: {
            /**
             * When calculating the number of remaining change IDs, whether to
             * include public files the user has opened and shared files.
             * 
             * When set to false, this counts only change IDs for owned files
             * and any shared or public files that the user has explicitly
             * added to a folder they own.
             * 
             * Default: true
             */
            includeSubscribed?: boolean,
            
            /**
             * Maximum number of remaining change IDs to count
             */
            maxChangeIdCount?: number,
            
            /**
             * Change ID to start counting from when calculating number of
             * remaining change IDs
             */
            startChangeId?: number
        }): HttpResponse<About>;
    }
    
    var about: GoogleDriveAboutApi
}

declare module gapi.client.drive {
    interface GoogleDrivePermissionsApi {
        /**
         * Deletes a permission from a file.
         */
        delete(params: {
            /**
             * The ID for the file.
             */
            fileId: string,
            
            /**
             * The ID for the permission.
             */
            permissionId: string
        }): HttpResponse<void>;
        
        /**
         * Gets a permission by ID.
         */
        get(params: {
            /**
             * The ID for the file.
             */
            fileId: string,
            
            /**
             * The ID for the permission.
             */
            permissionId: string
        }): HttpResponse<Permission>;
        
        /**
         * Inserts a permission for a file.
         */
        insert(params: {
            /**
             * The ID for the file.
             */
            fileId: string,
            
            emailMessage?: string,
            
            sendNotificationEmails?: boolean,
            
            /**
             * The ID for the permission.
             */
            resource: {
                /**
                 * The primary role for this user.
                 */
                role: PermissionRole,
                
                /**
                 * The account type.
                 */
                type: PermissionAccountType,
                
                /**
                 * Additional roles for this user.
                 * Only commenter is currently allowed.
                 */
                additionalRoles?: PermissionRole[],
                
                /**
                 * The ID of the user this permission refers to, and identical
                 * to the permissionId in the About and Files resources.
                 * 
                 * When making a drive.permissions.insert request, exactly one
                 * of the id or value fields must be specified.
                 */
                id?: string,
                
                /**
                 * The email address or domain name for the entity.
                 * 
                 * When making a drive.permissions.insert request, exactly one
                 * of the id or value fields must be specified.
                 */
                value?: string
            }
        }): HttpResponse<Permission>;
        
        /**
         * Lists a file's permissions.
         */
        list(params: {
            /**
             * The ID for the file.
             */
            fileId: string
        }): HttpResponse<PermissionList>;
        
        /**
         * Updates a permission. This method supports patch semantics.
         */
        patch(params: {
            /**
             * The ID for the file.
             */
            fileId: string,
            
            /**
             * The ID for the permission.
             */
            permissionId: string,
            
            /**
             * Whether changing a role to 'owner' downgrades the current owners
             * to writers. Does nothing if the specified role is not 'owner'.
             */
            transferOwnership?: boolean,
            
            resource: {
                /**
                 * The primary role for this user.
                 */
                role?: PermissionRole,
                
                /**
                 * The account type.
                 */
                type?: PermissionAccountType,
                
                /**
                 * Additional roles for this user.
                 * Only commenter is currently allowed.
                 */
                additionalRoles?: PermissionRole[],
                
                /**
                 * The ID of the user this permission refers to, and identical
                 * to the permissionId in the About and Files resources.
                 * 
                 * When making a drive.permissions.insert request, exactly one
                 * of the id or value fields must be specified.
                 */
                id?: string,
                
                /**
                 * The email address or domain name for the entity.
                 * 
                 * When making a drive.permissions.insert request, exactly one
                 * of the id or value fields must be specified.
                 */
                value?: string
            }
        }): HttpResponse<Permission>;
        
        /**
         * Updates a permission.
         */
        update(params: {
            /**
             * The ID for the file.
             */
            fileId: string,
            
            /**
             * The ID for the permission.
             */
            permissionId: string,
            
            /**
             * Whether changing a role to 'owner' downgrades the current owners
             * to writers. Does nothing if the specified role is not 'owner'.
             */
            transferOwnership?: boolean,
            
            resource: {
                /**
                 * The primary role for this user.
                 */
                role?: PermissionRole,
                
                /**
                 * Additional roles for this user.
                 * Only commenter is currently allowed.
                 */
                additionalRoles?: PermissionRole[],
            }
        }): HttpResponse<Permission>;
        
        /**
         * Returns the permission ID for an email address.
         */
        getIdForEmail(params: {
            /**
             * The email address for which to return a permission ID
             */
            email: string
        }): HttpResponse<PermissionId>;
    }
    
    var permissions: GoogleDrivePermissionsApi;
}
