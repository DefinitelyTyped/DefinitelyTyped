import { SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
export interface AttachmentFileInfo {
    name: string;
    content: string | Blob | ArrayBuffer;
}
/**
 * Describes a collection of Item objects
 *
 */
export declare class AttachmentFiles extends SharePointQueryableCollection {
    /**
     * Gets a Attachment File by filename
     *
     * @param name The name of the file, including extension.
     */
    getByName(name: string): AttachmentFile;
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    add(name: string, content: string | Blob | ArrayBuffer): Promise<AttachmentFileAddResult>;
    /**
     * Adds multiple new attachment to the collection. Not supported for batching.
     *
     * @param files The collection of files to add
     */
    addMultiple(files: AttachmentFileInfo[]): Promise<void>;
    /**
     * Delete multiple attachments from the collection. Not supported for batching.
     *
     * @param files The collection of files to delete
     */
    deleteMultiple(...files: string[]): Promise<void>;
    /**
     * Delete multiple attachments from the collection and send to recycle bin. Not supported for batching.
     *
     * @param files The collection of files to be deleted and sent to recycle bin
     */
    recycleMultiple(...files: string[]): Promise<void>;
}
/**
 * Describes a single attachment file instance
 *
 */
export declare class AttachmentFile extends SharePointQueryableInstance {
    delete: (eTag?: string) => Promise<void>;
    /**
     * Gets the contents of the file as text
     *
     */
    getText(): Promise<string>;
    /**
     * Gets the contents of the file as a blob, does not work in Node.js
     *
     */
    getBlob(): Promise<Blob>;
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    getBuffer(): Promise<ArrayBuffer>;
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    getJSON(): Promise<any>;
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    setContent(content: string | ArrayBuffer | Blob): Promise<AttachmentFile>;
    /**
     * Delete this attachment file and send it to recycle bin
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    recycle(eTag?: string): Promise<void>;
    private getParsed;
}
export interface AttachmentFileAddResult {
    file: AttachmentFile;
    data: any;
}
