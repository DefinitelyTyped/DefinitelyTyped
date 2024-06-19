import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeVideoDataCustomOverlaySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeVideoDataCustomOverlaySpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BackgroundOpacity(): Record<string, any>;
    static get Option(): Record<string, any>;
    static get Position(): Record<string, any>;
    static get Template(): Record<string, any>;
}
