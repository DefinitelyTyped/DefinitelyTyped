import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ImageCopyright
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ImageCopyright extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get GeoOwnership(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): ImageCopyright;
    update(fields: Array<string>, params?: Record<string, any>): ImageCopyright;
}
