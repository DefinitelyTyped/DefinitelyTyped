import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InsightsResult

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InsightsResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DatePreset(): Record<string, any>;
    static get Period(): Record<string, any>;
    static get Metric(): Record<string, any>;
}
