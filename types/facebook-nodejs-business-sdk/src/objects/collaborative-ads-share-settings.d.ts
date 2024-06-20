import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CollaborativeAdsShareSettings

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CollaborativeAdsShareSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CollaborativeAdsShareSettings>;
}
