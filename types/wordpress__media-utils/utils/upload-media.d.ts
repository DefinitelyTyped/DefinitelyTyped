import { Schema } from '@wordpress/api-fetch';

export type UploadMediaErrorCode =
    | 'MIME_TYPE_NOT_ALLOWED_FOR_USER'
    | 'MIME_TYPE_NOT_SUPPORTED'
    | 'SIZE_ABOVE_LIMIT'
    | 'EMPTY_FILE'
    | 'GENERAL';

export interface MediaItem extends Omit<Schema.Media<'edit'>, 'alt_text' | 'caption' | 'source_url' | 'title'> {
    alt: string;
    caption: string;
    title: string;
    url: string;
}

export interface UploadMediaOptions {
    /**
     * Additional data to include in the request.
     */
    additionalData?: Record<string, any>;
    /**
     * Array with the types of media that can be uploaded, if unset all types are allowed.
     */
    allowedTypes?: string[];
    /**
     * List of files.
     */
    filesList: ArrayLike<File>;
    /**
     * Maximum upload size in bytes allowed for the site.
     */
    maxUploadFileSize: number;
    /**
     * Function called when an error happens.
     */
    onError(error: { code: UploadMediaErrorCode; message: string; file: File }): void;
    /**
     * Function called each time a file or a temporary representation of the file is available.
     */
    onFileChange(files: MediaItem[]): void;
    /**
     * Allowed mime types and file extensions.
     * @example
     * ```js
     * {
     *   'jpg|jpeg': 'image/jpeg',
     * }
     * ```
     */
    wpAllowedMimeTypes?: Record<string, string>;
}

/**
 * Media Upload is used by audio, image, gallery, video, and file blocks to handle uploading a media
 * file when a file upload button is activated.
 */
export function uploadMedia(options: UploadMediaOptions): Promise<void>;
