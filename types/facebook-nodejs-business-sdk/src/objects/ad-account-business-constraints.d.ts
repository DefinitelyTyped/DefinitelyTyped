import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountBusinessConstraints
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountBusinessConstraints extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
}
