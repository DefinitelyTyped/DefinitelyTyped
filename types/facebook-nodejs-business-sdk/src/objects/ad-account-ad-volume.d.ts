import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAdVolume
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdVolume extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RecommendationType(): Record<string, any>;
}
