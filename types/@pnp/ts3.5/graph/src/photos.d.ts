import { GraphQueryableInstance } from "./graphqueryable";
import { Photo as IPhoto } from "@microsoft/microsoft-graph-types";
export declare class Photo extends GraphQueryableInstance<IPhoto> {
    /**
     * Gets the image bytes as a blob (browser)
     */
    getBlob(): Promise<Blob>;
    /**
     * Gets the image file byets as a Buffer (node.js)
     */
    getBuffer(): Promise<ArrayBuffer>;
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    setContent(content: ArrayBuffer | Blob): Promise<void>;
}
