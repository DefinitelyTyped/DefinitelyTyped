import { AbstractCrudObject } from './../abstract-crud-object';
export default class MediaFingerprint extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get FingerprintContentType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<MediaFingerprint>;
    update(fields: string[], params?: Record<string, any>): Promise<MediaFingerprint>;
}
