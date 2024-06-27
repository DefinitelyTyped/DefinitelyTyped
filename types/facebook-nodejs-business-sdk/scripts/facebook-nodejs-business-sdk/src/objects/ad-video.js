/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import {AbstractCrudObject} from '../abstract-crud-object';
import Cursor from '../cursor';
import FacebookAdsBatchApi from '../api-batch';
import VideoThumbnail from './video-thumbnail';
import {
  VideoUploader,
  VideoUploadRequest,
  VideoEncodingStatusChecker,
} from '../video-uploader';
import type {SlideshowSpec} from "../video-uploader"

/**
 * AdVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdVideo extends AbstractCrudObject {
  static get Fields(): Object {
    return Object.freeze({
      filepath: 'filepath',
      id: 'id',
      slideshow_spec: 'slideshow_spec',
    });
  }


  get filepath(): string {
    return this.filepath;
  }

  get slideshow_spec(): ?SlideshowSpec {
    return this.slideshow_spec;
  }


  /**
   * Uploads filepath and creates the AdVideo object from it.
   * It requires 'filepath' property to be defined.
   **/
  create(
    batch: FacebookAdsBatchApi,
    failureHandler: Function,
    successHandler: Function,
  ): any {
    let response = null;
    var spec = this.slideshow_spec;
    if (spec) {
      const request = new VideoUploadRequest(this.getApi());

      request.setParams({
        'slideshow_spec[images_urls]': JSON.stringify(
          spec['images_urls'],
        ),
        'slideshow_spec[duration_ms]': spec['duration_ms'],
        'slideshow_spec[transition_ms]': spec['transition_ms'],
      });
      response = request.send([this.getParentId(), 'advideos']);
    } else if (this.filepath) {
      const videoUploader = new VideoUploader();

      response = videoUploader.upload(this, true);
    } else {
      throw Error(
        'AdVideo requires a filepath or slideshow_spec to be defined.',
      );
    }

    this.setData(response);

    return response;
  }

  waitUntilEncodingReady(interval: number = 30, timeout: number = 600): void {
    if (!this.id) {
      throw Error('Invalid Video ID');
    }

    VideoEncodingStatusChecker.waitUntilReady(
      this.getApi(),
      parseInt(this.id),
      interval,
      timeout,
    );
  }

  /**
   *  Returns all the thumbnails associated with the ad video
   */
  getThumbnails(fields: Object, params: Object): Cursor | Promise<*> {
    return this.getEdge(VideoThumbnail, fields, params, true, 'thumbnails');
  }
}
