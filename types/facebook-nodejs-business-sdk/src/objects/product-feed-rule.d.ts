import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * ProductFeedRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RuleType(): Record<string, any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): ProductFeedRule;
    update(fields: Array<string>, params?: Record<string, any>): ProductFeedRule;
}
