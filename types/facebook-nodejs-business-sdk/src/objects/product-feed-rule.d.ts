import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * ProductFeedRule

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RuleType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeedRule>;    get(fields: string[], params?: Record<string, any>): Promise<ProductFeedRule>;
}
