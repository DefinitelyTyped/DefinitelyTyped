/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */
import FacebookAdsApi from './api';
import APIRequest from './api-request';
import APIResponse from './api-response';

/**
 * Facebook Ads API Batch
 */
class FacebookAdsApiBatch {
  _api: FacebookAdsApi;
  _files: Array<Object>;
  _batch: Array<Object>;
  _successCallbacks: Array<Function>;
  _failureCallbacks: Array<Function>;
  _requests: Array<APIRequest>;

  /**
   * @param {FacebookAdsApi} api
   * @param {Function} successCallback
   * @param {Function} failureCallback
   */
  constructor(
    api: FacebookAdsApi,
    successCallback?: Function,
    failureCallback?: Function,
  ): void {
    this._api = api;
    this._files = [];
    this._batch = [];
    this._requests = [];
    this._successCallbacks = [];
    this._failureCallbacks = [];

    if (successCallback != null) {
      this._successCallbacks.push(successCallback);
    }

    if (failureCallback != null) {
      this._failureCallbacks.push(failureCallback);
    }
  }

  /**
   * Adds a call to the batch.
   * @param  {string} method The HTTP method name (e.g. 'GET').
   * @param  {string[]|string} relativePath An array of path tokens or
   *   a relative URL string. An array will be translated to a url as follows:
   *     <graph url>/<tuple[0]>/<tuple[1]>...
   *   It will be assumed that if the path is not a string, it will be iterable.
   * @param  {Object} [params] A mapping of request parameters
   *   where a key is the parameter name and its value is a string or an object
   *   which can be JSON-encoded.
   * @param {Object} [files] An optional mapping of file names to binary open
   *   file objects. These files will be attached to the request.
   * @param {Function} [successCallback] A callback function which will be
   *   called with the response of this call if the call succeeded.
   * @param {Function} [failureCallback] A callback function which will be
   *   called with the response of this call if the call failed.
   * @param {APIRequest} [request] The APIRequest object
   * @return {Object} An object describing the call
   */
  add(
    method: string,
    relativePath: Array<string> | string,
    params?: Object,
    files?: Object,
    successCallback?: Function,
    failureCallback?: Function,
    request?: APIRequest,
  ): {|
    attachedFiles: (void | string),
    body: (void | string),
    method: string,
    name: (void | any),
    relative_url: string
  |} {
    // Construct a relaitveUrl from relateivePath by assuming that
    // relativePath can only be a string or an array of strings
    var relativeUrl =
      typeof relativePath === 'string' ? relativePath : relativePath.join('/');


    // Contruct key-value pairs from params for GET querystring or POST body
    if (params != null) {
      const keyVals = [];

      for (let key in params) {
        let value = params[key];
        if (typeof params[key] === 'object' && !(params[key] instanceof Date)) {
          value = JSON.stringify(value);
        }
        keyVals.push(`${key}=${value}`);
      }

      if (method === 'GET') {
        relativeUrl += '?' + keyVals.join('&');
      } else {
        var body = keyVals.join('&');
      }

      if (params && params['name']) {
        var name = params['name'];
      }
    }

    // Handle attached files
    if (files != null) {
      var attachedFiles = Object.keys(files).join(',');
    }

    // A Call object that will be used in a batch request
    const call = {
      method: method,
      relative_url: relativeUrl,
      body: body,
      name: name,
      attachedFiles: attachedFiles,
    };

    this._batch.push(call);
    this._files.push(files);
    this._successCallbacks.push(successCallback);
    this._failureCallbacks.push(failureCallback);
    if (request !== undefined) {
        this._requests.push(request);
    }

    return call;
  }

  /**
   * Interface to add a APIRequest to the batch.
   * @param  {APIRequest} request The APIRequest object to add
   * @param  {Function} [successCallback] A callback function which
   *   will be called with response of this call if the call succeeded.
   * @param  {Function} [failureCallback] A callback function which
   *   will be called with the FacebookResponse of this call if the call failed.
   * @return {Object} An object describing the call
   */
  addRequest(
    request: APIRequest,
    successCallback?: Function,
    failureCallback?: Function,
  ): {|
    attachedFiles: (void | string),
    body: (void | string),
    method: string,
    name: (void | any),
    relative_url: string
  |} {
    const updatedParams = request.params;
    updatedParams['fields'] = request.fields.join();

    return this.add(
      request.method,
      request.path,
      updatedParams,
      request.fileParams,
      successCallback,
      failureCallback,
      request,
    );
  }

  /**
   * Makes a batch call to the api associated with this object.
   * For each individual call response, calls the success or failure callback
   * function if they were specified.
   * Note: Does not explicitly raise exceptions. Individual exceptions won't
   * be thrown for each call that fails. The success and failure callback
   * functions corresponding to a call should handle its success or failure.
   * @return {FacebookAdsApiBatch|None} If some of the calls have failed,
   *   returns a new FacebookAdsApiBatch object with those calls.
   *   Otherwise, returns None.
   */
  execute(): void | Promise<mixed> {
    if (this._batch.length < 1) {
      return;
    }

    const method = 'POST';
    const path = []; // request to root domain for a batch request
    const params = {
      batch: this._batch,
    };

    // Call to the batch endpoint (WIP)
    return this._api
      .call(method, path, params)
      .then(responses => {
        // Keep track of batch indices that need to retry
        const retryIndices = [];

        // Check each response
        for (let index = 0; index < responses.length; index++) {
          const response = responses[index];

          if (response != null) {
            const apiResponse = new APIResponse(response, this._batch[index]);

            // Call the success callback if provided
            if (apiResponse.isSuccess) {
              if (this._successCallbacks[index]) {
                this._successCallbacks[index](apiResponse);
              }
            } else {
              // Call the failure callback if provided
              if (this._failureCallbacks[index]) {
                this._failureCallbacks[index](apiResponse);
              }
            }
          } else {
            // Do not get response, so, we keep track of the index to retry
            retryIndices.push(index);
          }
        }

        // Create and return new batch if we need to retry
        if (retryIndices.length > 0) {
          // Create a new batch from retry indices in the current batch
          const newBatch = new FacebookAdsApiBatch(this._api);

          for (let index of retryIndices) {
            newBatch._files.push(this._files[index]);
            newBatch._batch.push(this._batch[index]);
            newBatch._successCallbacks.push(this._successCallbacks[index]);
            newBatch._failureCallbacks.push(this._failureCallbacks[index]);
          }

          return newBatch;
        }

        // No retry
        return null;
      })
      .catch(error => {
        throw error;
      });
  }
}

export default FacebookAdsApiBatch;
