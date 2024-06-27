import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CopyrightAudioAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CopyrightAudioAsset extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      audio_availability_status: 'audio_availability_status',
      audio_library_policy: 'audio_library_policy',
      creation_time: 'creation_time',
      id: 'id',
      reference_files: 'reference_files',
      title: 'title',
      update_time: 'update_time'
    });
  }

}