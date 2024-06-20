import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicItemDisplayBundleFolder

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemDisplayBundleFolder extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<DynamicItemDisplayBundleFolder>;
}
