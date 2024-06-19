import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkDataCustomOverlaySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataCustomOverlaySpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BackgroundColor(): Record<string, any>;
    static get Font(): Record<string, any>;
    static get Option(): Record<string, any>;
    static get Position(): Record<string, any>;
    static get Template(): Record<string, any>;
    static get TextColor(): Record<string, any>;
}
