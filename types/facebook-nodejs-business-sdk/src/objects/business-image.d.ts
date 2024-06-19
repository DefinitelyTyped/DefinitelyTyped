import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessImage extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ValidationAdPlacements(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): BusinessImage;
}
