import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandSafetyDownloadable

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandSafetyDownloadable extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BrandSafetyDownloadable>;
}
