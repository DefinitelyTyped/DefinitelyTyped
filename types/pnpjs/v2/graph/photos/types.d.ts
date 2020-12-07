import { _GraphQueryableInstance } from "../graphqueryable";
import { Photo as IPhotoType } from "@microsoft/microsoft-graph-types";
export declare class _Photo extends _GraphQueryableInstance<IPhotoType> {
    /**
     * Gets the image bytes as a blob (browser)
     */
    getBlob(): Promise<Blob>;
    /**
     * Gets the image file bytes as a Buffer (node.js)
     */
    getBuffer(): Promise<ArrayBuffer>;
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    setContent(content: ArrayBuffer | Blob): Promise<void>;
}
export interface IPhoto extends _Photo {
}
export declare const Photo: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IPhoto;
//# sourceMappingURL=types.d.ts.map