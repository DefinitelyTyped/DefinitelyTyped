declare namespace LargeLocalStorageInterfaces {
    interface LargeLocalStorageService {
        new(options: Options): LargeLocalStorageService;

        initialized: Promise<number>;

        /**
         * Gets all of the attachments for a document.
         */
        getAllAttachments(docKey?: string): Promise<Entry[]>;

        /**
         * Gets all attachments URLs for a document.
         */
        getAllAttachmentURLs(docKey?: string): Promise<Entry[]>;

        /**
         * Get the attachment identified by attachKey
         */
        getAttachment(attachKey: string): Promise<any>;

        /**
         * Get the attachment identified by docKey and attachKey
         */
        getAttachment(docKey: string, attachKey: string): Promise<any>;

        /**
         * Get the URL for a given attachment.
         */
        getAttachmentURL(attachKey: string): Promise<string>;

        /**
         * Get the URL for a given attachment.
         */
        getAttachmentURL(docKey: string, attachKey: string): Promise<string>;

        /**
         * Returns the actual capacity of the storage or -1 if it is unknown.
         */
        getCapacity(): number;

        /**
         * Get the contents of a document identified by docKey
         */
        getContents(docKey: string): Promise<any>;

        /**
         * List all attachments under a given key. List all documents if no key is provided.
         */
        ls(docKey?: string): Promise<string[]>;

        /**
         * Whether or not LLS is ready to store data. The initialized property can be used to await initialization.
         */
        ready(): boolean;

        /**
         * Revoke the attachment URL as required by the underlying storage system.
         */
        revokeAttachmentURL(url: string): void;

        /**
         * Remove the specified document and all of its attachments.
         */
        rm(docKey?: string): Promise<any>;

        /**
         * Remove an attachment from a document.
         */
        rmAttachment(docKey: string, attachKey: string): Promise<void>;

        /**
         * Set an attachment for a given document. Identified by attachKey.
         */
        setAttachment(attachKey: string, attachment: any): Promise<void>;

        /**
         * Set an attachment for a given document. Identified by docKey and attachKey.
         */
        setAttachment(docKey: string, attachKey: string, attachment: any): Promise<void>;

        /**
         * Set the contents identified by docKey to data. The document will be created if it does not exist.
         */
        setContents(docKey: string, data: any): Promise<void>;
    }

    interface Options {
        /**
         * Desired capacity in bytes.
         */
        size: number;

        /**
         * Optional name for your LLS database. Defaults to lls. This is the name given to the underlying IndexedDB or WebSQL DB or FSAPI Folder. LLS's with different names are independent.
         */
        name?: string | undefined;

        /**
         * Force LLS to use a specific storage implementation: 'IndexedDB' or 'WebSQL' or 'FilesystemAPI'.
         */
        forceProvider?: string | undefined;
    }

    interface Entry {
        data: any;
        docKey: string;
        attachKey: string;
        url: string;
    }

    interface Promise<T> {
        then<U>(onFulfilled?: (value: T) => U | Promise<U>, onRejected?: (error: any) => U | Promise<U>): Promise<U>;
        then<U>(onFulfilled?: (value: T) => U | Promise<U>, onRejected?: (error: any) => void): Promise<U>;
        catch<U>(onRejected?: (error: any) => U | Promise<U>): Promise<U>;
    }
}

declare var LargeLocalStorage: LargeLocalStorageInterfaces.LargeLocalStorageService;
export = LargeLocalStorage;
export as namespace LargeLocalStorage;
