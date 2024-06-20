import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdPreview

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPreview extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AdFormat(): Record<string, any>;
    static get CreativeFeature(): Record<string, any>;
    static get RenderType(): Record<string, any>;
}
