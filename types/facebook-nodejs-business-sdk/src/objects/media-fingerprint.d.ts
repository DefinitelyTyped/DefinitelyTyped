import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MediaFingerprint
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaFingerprint extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get FingerprintContentType(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): MediaFingerprint;
    update(fields: Array<string>, params?: Record<string, any>): MediaFingerprint;
}
