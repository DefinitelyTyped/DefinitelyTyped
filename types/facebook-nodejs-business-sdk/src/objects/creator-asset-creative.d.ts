import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreatorAssetCreative
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreatorAssetCreative extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ModerationStatus(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): CreatorAssetCreative;
}
