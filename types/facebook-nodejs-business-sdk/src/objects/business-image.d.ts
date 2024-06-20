import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessImage

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessImage extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ValidationAdPlacements(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessImage>;
}
