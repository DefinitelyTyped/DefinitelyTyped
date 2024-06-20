import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MediaFingerprint

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaFingerprint extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get FingerprintContentType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<MediaFingerprint>;    get(fields: string[], params?: Record<string, any>): Promise<MediaFingerprint>;
}
