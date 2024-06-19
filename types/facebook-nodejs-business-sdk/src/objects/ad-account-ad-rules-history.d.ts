import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAdRulesHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdRulesHistory extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Action(): Record<string, any>;
    static get EvaluationType(): Record<string, any>;
}
