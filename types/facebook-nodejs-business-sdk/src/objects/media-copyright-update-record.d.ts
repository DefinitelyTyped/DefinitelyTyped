import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MediaCopyrightUpdateRecord
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaCopyrightUpdateRecord extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): MediaCopyrightUpdateRecord;
}
