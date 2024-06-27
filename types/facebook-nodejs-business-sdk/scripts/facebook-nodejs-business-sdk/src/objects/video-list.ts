import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import AdVideo from "./ad-video";
/**
 * VideoList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VideoList extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      creation_time: 'creation_time',
      description: 'description',
      id: 'id',
      last_modified: 'last_modified',
      owner: 'owner',
      season_number: 'season_number',
      thumbnail: 'thumbnail',
      title: 'title',
      videos_count: 'videos_count'
    });
  }

  getVideos(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdVideo, fields, params, fetchFirstPage, '/videos');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): VideoList {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}