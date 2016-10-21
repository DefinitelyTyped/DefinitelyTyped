

declare namespace Blob {

    export type ObjectBlob = string;

    export interface BlobMetadata {
        name: string;
        size: number;
        mime: string;
        context: Core.DataObject;
        contentType: string;
    }
    export interface Util { }
}