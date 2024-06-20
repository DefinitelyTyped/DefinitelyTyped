import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessCreativeFolder

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreativeFolder extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessCreativeFolder>;
}
