import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessFranchiseConfig

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessFranchiseConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessFranchiseConfig>;
}
