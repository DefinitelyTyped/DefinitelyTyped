import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreatorAssetCreative

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreatorAssetCreative extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ModerationStatus(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CreatorAssetCreative>;
}
