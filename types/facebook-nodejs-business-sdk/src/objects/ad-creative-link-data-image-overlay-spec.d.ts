import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkDataImageOverlaySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataImageOverlaySpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CustomTextType(): Record<string, any>;
    static get OverlayTemplate(): Record<string, any>;
    static get Position(): Record<string, any>;
    static get TextFont(): Record<string, any>;
    static get TextType(): Record<string, any>;
    static get ThemeColor(): Record<string, any>;
}
