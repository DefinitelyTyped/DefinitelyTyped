import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * MediaFingerprint
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaFingerprint extends AbstractCrudObject {
    static get Fields(): Readonly<{
        duration_in_sec: "duration_in_sec";
        fingerprint_content_type: "fingerprint_content_type";
        fingerprint_type: "fingerprint_type";
        id: "id";
        metadata: "metadata";
        title: "title";
        universal_content_id: "universal_content_id";
    }>;
    static get FingerprintContentType(): Readonly<{
        am_songtrack: "AM_SONGTRACK";
        episode: "EPISODE";
        movie: "MOVIE";
        other: "OTHER";
        songtrack: "SONGTRACK";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<MediaFingerprint>;
    update(fields: string[], params?: Record<any, any>): Promise<MediaFingerprint>;
}
