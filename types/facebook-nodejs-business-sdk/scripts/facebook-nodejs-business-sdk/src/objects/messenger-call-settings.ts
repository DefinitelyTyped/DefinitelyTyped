import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MessengerCallSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class MessengerCallSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      audio_enabled: 'audio_enabled'
    });
  }

}