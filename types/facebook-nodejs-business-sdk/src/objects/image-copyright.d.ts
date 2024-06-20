import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ImageCopyright

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ImageCopyright extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get GeoOwnership(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ImageCopyright>;    get(fields: string[], params?: Record<string, any>): Promise<ImageCopyright>;
}
