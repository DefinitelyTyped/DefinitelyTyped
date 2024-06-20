import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MediaCopyrightAttribution

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaCopyrightAttribution extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<MediaCopyrightAttribution>;
}
