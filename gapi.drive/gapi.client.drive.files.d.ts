/// <reference path="../gapi/gapi.client.d.ts" />
/// <reference path="gapi.client.drive.d.ts" />

declare module gapi.client.drive.files {
    /**
     * Gets a file's metadata by ID.
     */
    export function get(params: {
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
     * Lists the user's files.
     */
    export function list(params?: {
        /**
         * The body of items (files/documents) to which the query applies.
         * 
         * Acceptable values are:
         *   "DEFAULT": The items that the user has accessed.
         *   "DOMAIN": Items shared to the user's domain.
         */
        corpus?: string,
        
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
     * Insert a new file.
     */
    export function insert(params: {
        /**
         * The type of upload request to the /upload URI. Acceptable values are:
         * 
         *   media - Simple upload. Upload the media only, without any metadata.
         * 
         *   multipart - Multipart upload. Upload both the media and its
         *               metadata, in a single request.
         * 
         *   resumable - Resumable upload. Upload the file in a resumable
         *               fashion, using a series of at least two requests where
         *               the first request includes the metadata.
         */
        uploadType: string,
        
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
         * Whether to use the content as indexable text.
         * 
         * Default: false
         */
        useContentAsIndexableText?: boolean,
        
        /**
         * The visibility of the new file.
         * This parameter is only relevant when convert=false. 
         * 
         * Acceptable values are:
         *   "DEFAULT": The visibility of the new file is determined by the
         *              user's default visibility/sharing policies. (default)
         *   "PRIVATE": The new file will be visible to only the owner.
         */
        visibility?: string
    }): HttpRequest<any>;
}