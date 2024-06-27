import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MediaFingerprint
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class MediaFingerprint extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      duration_in_sec: 'duration_in_sec',
      fingerprint_content_type: 'fingerprint_content_type',
      fingerprint_type: 'fingerprint_type',
      id: 'id',
      metadata: 'metadata',
      title: 'title',
      universal_content_id: 'universal_content_id'
    });
  }

  static get FingerprintContentType() {
    return Object.freeze({
      am_songtrack: 'AM_SONGTRACK',
      episode: 'EPISODE',
      movie: 'MOVIE',
      other: 'OTHER',
      songtrack: 'SONGTRACK'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): MediaFingerprint {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): MediaFingerprint {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}