/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

// request-promise error types
const REQUEST_ERROR = 'RequestError';
const STATUS_CODE_ERROR = 'StatusCodeError';

function FacebookError(error) {
  this.name = 'FacebookError';
  this.message = error.message;
  this.stack = new Error().stack;
}
FacebookError.prototype = Object.create(Error.prototype);
FacebookError.prototype.constructor = FacebookError;

/**
 * Raised when an api request fails.
 */
export class FacebookRequestError extends FacebookError {
  /**
   * @param  {[Object}  response
   * @param  {String}   method
   * @param  {String}   url
   * @param  {Object}   data
   */
  constructor(response, method, url, data) {
    const errorResponse = constructErrorResponse(response);

    super(errorResponse);
    this.name = 'FacebookRequestError';
    this.message = errorResponse.message;
    this.status = errorResponse.status;
    this.response = errorResponse.body;
    this.headers = errorResponse.headers;
    this.method = method;
    this.url = url;
    if (data) {
      this.data = data;
    }
  }
}

/**
 * Error response has several structures depended on called APIs or errors.
 * This method contructs and formats the response into the same structure for
 * creating a FacebookRequestError object.
 */
function constructErrorResponse(response: Object) {
  let body;
  let message;
  let status;
  let headers;

  // Batch request error contains code and body fields
  const isBatchResponse = response.code && response.body;

  if (isBatchResponse) {
    // Handle batch response
    body =
      typeof response.body === 'string'
        ? JSON.parse(response.body)
        : response.body;
    status = response.code;
    message = body.error.message;
    headers = response.headers;
  } else {
    // Handle single response
    if (response.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      body = response.response.data.error ? response.response.data.error : response.response.data;
      body = typeof body === 'string' ? JSON.parse(body) : body;
      message = body.message;
      status = response.response.status;
      headers = response.response.headers;
    } else if (response.request) {
      body = null;
      message = "The request was made but no response was received";
      status = null;
      headers = null;
    } else {
      body = null;
      message = "Something happened in setting up the request that triggered an Error";
      status = null;
      headers = null;
    }
  }

  return {body, message, status, headers};
}
