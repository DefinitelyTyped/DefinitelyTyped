/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 * @flow
 */
import AdVideo from './objects/ad-video';
import FacebookAdsApi from './api';
import fs from 'fs';
import path from 'path';
/**
 * Video uploader that can upload videos to adaccount
 **/
class VideoUploader {
  _session: ?VideoUploadSession;

  constructor() {
    this._session = null;
  }

  /**
   * Upload the given video file.
   * @param {AdVideo} video The AdVideo object that will be uploaded
   * @param {Boolean} [waitForEncoding] Whether to wait until encoding
   *   is finished
   **/
  upload(video: AdVideo, waitForEncoding: boolean): Object {
    // Check there is no existing session
    if (this._session) {
      throw Error('There is already an upload session for this video uploader');
    }

    // Initate an upload session
    this._session = new VideoUploadSession(video, waitForEncoding);
    const result = this._session.start();
    this._session = null;
    return result;
  }
}

type SlideshowSpec = {
  images_urls: Array<string>,
  duration_ms: number,
  transition_ms: number,
};

class VideoUploadSession {
  _accountId: string;
  _api: FacebookAdsApi;
  _endOffset: number;
  _filePath: ?string;
  _sessionId: string;
  _slideshowSpec: ?SlideshowSpec;
  _startOffset: number;
  _startRequestManager: VideoUploadStartRequestManager;
  _transferRequestManager: VideoUploadTransferRequestManager;
  _finishRequestManager: VideoUploadFinishRequestManager;
  _video: AdVideo;
  _waitForEncoding: boolean;

  constructor(video: AdVideo, waitForEncoding: boolean = false): void {
    this._video = video;
    this._api = video.getApi();

    if (video.filepath) {
      this._filePath = video.filepath;
      this._slideshowSpec = null;
    } else if (video.slideshow_spec) {
      this._slideshowSpec = video.slideshow_spec;
      this._filePath = null;
    }

    this._accountId = video.getParentId();
    this._waitForEncoding = waitForEncoding;
    // Setup start request manager
    this._startRequestManager = new VideoUploadStartRequestManager(this._api);
    // Setup transfer request manager
    this._transferRequestManager = new VideoUploadTransferRequestManager(
      this._api,
    );
    // Setup finish request manager
    this._finishRequestManager = new VideoUploadFinishRequestManager(this._api);
  }

  async start(): Object {
    let videoId;

    // Run start request manager
    const startResponse = await this._startRequestManager.sendRequest(
      this.getStartRequestContext(),
    );
    this._startOffset = parseInt(startResponse['start_offset']);
    this._endOffset = parseInt(startResponse['end_offset']);
    this._sessionId = startResponse['upload_session_id'];
    videoId = startResponse['video_id'];
    // Run transfer request manager
    await this._transferRequestManager.sendRequest(
      this.getTransferRequestContext(),
    );
    // Run finish request manager
    const finishResponse = await this._finishRequestManager.sendRequest(
      this.getFinishRequestContext(),
    );
    // Populate the video info
    const body = finishResponse;
    body.id = videoId;
    delete body.success;

    return body;
  }

  getStartRequestContext(): VideoUploadRequestContext {
    const context = new VideoUploadRequestContext();

    if (this._filePath) {
      // Read file size
      context.fileSize = fs.statSync(this._filePath).size;
    }
    context.accountId = this._accountId;

    return context;
  }

  getTransferRequestContext(): VideoUploadRequestContext {
    const context = new VideoUploadRequestContext();

    context.sessionId = this._sessionId;
    context.startOffset = this._startOffset;
    context.endOffset = this._endOffset;

    if (this._filePath) {
      context.filePath = this._filePath;
    }
    if (this._slideshowSpec) {
      context.slideshowSpec = this._slideshowSpec;
    }
    context.accountId = this._accountId;

    return context;
  }

  getFinishRequestContext(): VideoUploadRequestContext {
    const context = new VideoUploadRequestContext();

    context.sessionId = this._sessionId;
    context.accountId = this._accountId;

    if (this._filePath) {
      context.fileName = path.basename(this._filePath);
    }

    return context;
  }
}

/**
 * Abstract class for request managers
 **/
class VideoUploadRequestManager {
  _api: FacebookAdsApi;

  constructor(api: FacebookAdsApi): void {
    this._api = api;
  }

  sendRequest(context: VideoUploadRequestContext): Object {
    throw new TypeError(
      'Class extending VideoUploadRequestManager must implement ' +
        'sendRequest method',
    );
  }

  getParamsFromContext(context: VideoUploadRequestContext): Object {
    throw new TypeError(
      'Class extending VideoUploadRequestManager must implement ' +
        'getParamsFromContext method',
    );
  }
}

class VideoUploadStartRequestManager extends VideoUploadRequestManager {
  /**
   * Send start request with the given context
   **/
  async sendRequest(context: VideoUploadRequestContext): Object {
    // Init a VideoUploadRequest and send the request
    const request = new VideoUploadRequest(this._api);
    request.setParams(this.getParamsFromContext(context));

    const response = await request.send([context.accountId, 'advideos']);

    return response;
  }

  getParamsFromContext(context: VideoUploadRequestContext): Object {
    return {
      file_size: context.fileSize,
      upload_phase: 'start',
    };
  }
}

class VideoUploadTransferRequestManager extends VideoUploadRequestManager {
  _startOffset: number;
  _endOffset: number;

  /**
   * Send transfer request with the given context
   **/
  async sendRequest(context: VideoUploadRequestContext): Object {
    // Init a VideoUploadRequest
    const request = new VideoUploadRequest(this._api);
    var start_offset = context.startOffset;
    var end_offset = context.endOffset;
    const filePath = context.filePath;
    const fileSize = fs.statSync(filePath).size;

    // Give a chance to retry every 10M, or at least twice
    let numRetry = Math.max(fileSize / (1024 * 1024 * 10), 2);
    let response = null;
    // While there are still more chunks to send
    const videoFileDescriptor = fs.openSync(filePath, 'r');
    while (start_offset !== end_offset) {
      context.startOffset = start_offset;
      context.endOffset = end_offset;
      let params = {
        upload_phase: 'transfer',
        start_offset: context.startOffset,
        upload_session_id: context.sessionId,
        video_file_chunk: context.videoFileChunk,
      };
      request.setParams(params, {
        video_file_chunk: fs.createReadStream(context.filePath, {
          start: context.startOffset,
          end: context.endOffset - 1,
        }),
      });
      // Send the request
      try {
        response = await request.send([context.accountId, 'advideos']);
        start_offset = parseInt(response['start_offset']);
        end_offset = parseInt(response['end_offset']);
      } catch (error) {
        if (numRetry > 0) {
          numRetry = Math.max(numRetry - 1, 0);
          continue;
        }
        fs.close(videoFileDescriptor, err => {});
        throw error;
      }
    }

    this._startOffset = start_offset;
    this._endOffset = end_offset;
    fs.close(videoFileDescriptor, err => {});

    return response;
  }
}

class VideoUploadFinishRequestManager extends VideoUploadRequestManager {
  /**
   * Send transfer request with the given context
   **/
  async sendRequest(context: VideoUploadRequestContext): Object {
    // Init a VideoUploadRequest
    const request = new VideoUploadRequest(this._api);

    // Parse the context
    request.setParams(this.getParamsFromContext(context));

    // Sent the request
    const response = await request.send([context.accountId, 'advideos']);

    return response;
  }

  getParamsFromContext(context: VideoUploadRequestContext): Object {
    return {
      upload_phase: 'finish',
      upload_session_id: context.sessionId,
      title: context.fileName,
    };
  }
}

/**
 * Upload request context that contains the param data
 **/
class VideoUploadRequestContext {
  _accountId: string;
  _fileName: string;
  _filePath: string;
  _fileSize: number;
  _name: string;
  _sessionId: string;
  _startOffset: number;
  _endOffset: number;
  _slideshowSpec: SlideshowSpec;
  _videoFileChunk: string;

  get accountId(): string {
    return this._accountId;
  }

  set accountId(accountId: string): void {
    this._accountId = accountId;
  }

  get fileName(): string {
    return this._fileName;
  }

  set fileName(fileName: string): void {
    this._fileName = fileName;
  }

  get filePath(): string {
    return this._filePath;
  }

  set filePath(filePath: string): void {
    this._filePath = filePath;
  }

  get fileSize(): number {
    return this._fileSize;
  }

  set fileSize(fileSize: number): void {
    this._fileSize = fileSize;
  }
  get name(): string {
    return this._name;
  }

  set name(name: string): void {
    this._name = name;
  }

  get sessionId(): string {
    return this._sessionId;
  }

  set sessionId(sessionId: string): void {
    this._sessionId = sessionId;
  }

  get startOffset(): number {
    return this._startOffset;
  }

  set startOffset(startOffset: number): void {
    this._startOffset = startOffset;
  }

  get endOffset(): number {
    return this._endOffset;
  }

  set endOffset(endOffset: number): void {
    this._endOffset = endOffset;
  }

  get slideshowSpec(): SlideshowSpec {
    return this._slideshowSpec;
  }

  set slideshowSpec(slideshowSpec: SlideshowSpec): void {
    this._slideshowSpec = slideshowSpec;
  }

  get videoFileChunk(): string {
    return this._videoFileChunk;
  }

  set videoFileChunk(videoFileChunk: string): void {
    this._videoFileChunk = videoFileChunk;
  }
}

class VideoUploadRequest {
  _params: Object;
  _files: Object;
  _api: FacebookAdsApi;

  constructor(api: FacebookAdsApi) {
    this._params = null;
    this._files = null;
    this._api = api;
  }

  /**
   * Send the current request
   **/
  send(path: string | Array<string>): Object {
    return new Promise((resolve, reject) => {
      this._api
        .call(
          'POST',
          path,
          this._params,
          this._files,
          true, // use multipart/form-data
          FacebookAdsApi.GRAPH_VIDEO, // override graph.facebook.com
        )
        .then(response => resolve(JSON.parse(response)))
        .catch(error => reject(error));
    });
  }

  setParams(params: Object, files: Object = null) {
    this._params = params;
    this._files = files;
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class VideoEncodingStatusChecker {
  static async waitUntilReady(
    api: FacebookAdsApi,
    videoId: number,
    interval: number,
    timeout: number,
  ): Promise<void> {
    const startTime = new Date().getTime();
    let status = null;

    while (true) {
      status = VideoEncodingStatusChecker.getStatus(api, videoId);
      status = status['video_status'];

      if (status !== 'processing') {
        break;
      }

      if (startTime + timeout <= new Date().getTime()) {
        throw Error(`Video encoding timeout: ${timeout}`);
      }

      await sleep(interval);
    }

    if (status !== 'ready') {
      status = status == null ? '' : status;
      throw Error(`Video encoding status ${status}`);
    }
  }

  static getStatus(api: FacebookAdsApi, videoId: number): any {
    const result = api.call('GET', [videoId.toString()], {fields: 'status'});
    // $FlowFixMe
    return result['status'];
  }
}

export {VideoUploader, VideoUploadRequest, VideoEncodingStatusChecker};
export type {SlideshowSpec};
