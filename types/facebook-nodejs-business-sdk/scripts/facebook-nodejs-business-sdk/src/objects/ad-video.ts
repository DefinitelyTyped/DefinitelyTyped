import { AbstractCrudObject } from "../abstract-crud-object";
import Cursor from "../cursor";
import FacebookAdsBatchApi from "../api-batch";
import VideoThumbnail from "./video-thumbnail";
import { VideoUploader, VideoUploadRequest, VideoEncodingStatusChecker } from "../video-uploader";
import type { SlideshowSpec } from "../video-uploader";
/**
 * AdVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdVideo extends AbstractCrudObject {
  static get Fields(): Record<string, any> {
    return Object.freeze({
      filepath: 'filepath',
      id: 'id',
      slideshow_spec: 'slideshow_spec'
    });
  }

  get filepath(): string {
    return this.filepath;
  }

  get slideshow_spec(): SlideshowSpec | null | undefined {
    return this.slideshow_spec;
  }

  /**
   * Uploads filepath and creates the AdVideo object from it.
   * It requires 'filepath' property to be defined.
   **/
  create(batch: FacebookAdsBatchApi, failureHandler: (...args: Array<any>) => any, successHandler: (...args: Array<any>) => any): any {
    let response = null;
    var spec = this.slideshow_spec;

    if (spec) {
      const request = new VideoUploadRequest(this.getApi());
      request.setParams({
        'slideshow_spec[images_urls]': JSON.stringify(spec['images_urls']),
        'slideshow_spec[duration_ms]': spec['duration_ms'],
        'slideshow_spec[transition_ms]': spec['transition_ms']
      });
      response = request.send([this.getParentId(), 'advideos']);
    } else if (this.filepath) {
      const videoUploader = new VideoUploader();
      response = videoUploader.upload(this, true);
    } else {
      throw Error('AdVideo requires a filepath or slideshow_spec to be defined.');
    }

    this.setData(response);
    return response;
  }

  waitUntilEncodingReady(interval: number = 30, timeout: number = 600): void {
    if (!this.id) {
      throw Error('Invalid Video ID');
    }

    VideoEncodingStatusChecker.waitUntilReady(this.getApi(), parseInt(this.id), interval, timeout);
  }

  /**
   *  Returns all the thumbnails associated with the ad video
   */
  getThumbnails(fields: Record<string, any>, params: Record<string, any>): Cursor | Promise<any> {
    return this.getEdge(VideoThumbnail, fields, params, true, 'thumbnails');
  }

}