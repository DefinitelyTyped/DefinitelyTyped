import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Robot
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Robot extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      bringup_vars: 'bringup_vars',
      configurations: 'configurations',
      data_center: 'data_center',
      id: 'id',
      init_pos: 'init_pos',
      last_pos: 'last_pos',
      meetup_link_hash: 'meetup_link_hash',
      suite: 'suite',
      target_map_image_uri: 'target_map_image_uri',
      target_os_image_uri: 'target_os_image_uri',
      target_sw_image_uri: 'target_sw_image_uri',
      user: 'user'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Robot {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}