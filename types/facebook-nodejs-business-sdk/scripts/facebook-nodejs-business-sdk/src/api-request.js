/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */
import fs from 'fs';

/**
 * Represents an API request
 */
class APIRequest {
  _nodeId: string;
  _method: string;
  _endpoint: string;
  _path: Array<string>;
  _fields: Array<string>;
  _params: Object;
  _fileParams: Object;
  _fileCounter: number;

  /**
   * @param {string} nodeId The node id to perform the api call.
   * @param {string} method The HTTP method of the call.
   * @param {string} endpoint The edge of the api call.
   */
  constructor(nodeId: string, method: string, endpoint: string) {
    this._nodeId = nodeId;
    this._method = method;
    this._endpoint = endpoint.replace('/', '');
    this._path = [nodeId, this.endpoint];
    this._fields = [];
    this._fileParams = Object.create(null);
    this._params = Object.create(null);
    this._fileCounter = 0;
  }

  /**
   * Getter function for node ID
   * @return {string} Node ID
   */
  get nodeId(): string {
    return this._nodeId;
  }

  /**
   * Getter function for HTTP method e.g. GET, POST
   * @return {string} HTTP method
   */
  get method(): string {
    return this._method;
  }

  /**
   * Getter function for the edge of the API call
   * @return {string} Endpoint edge
   */
  get endpoint(): string {
    return this._endpoint;
  }

  /**
   * Getter function for path tokens
   * @return {Array<string>} Array of path tokens
   */
  get path(): Array<string> {
    return this._path;
  }

  /**
   * Getter function for requested fields
   * @return {Array<string>} Array of request fields
   */
  get fields(): Array<string> {
    return this._fields;
  }

  /**
   * Getter function for API params
   * @return {Object} Object containing API Params
   */
  get params(): Object {
    // Deep cloning when object value is not a function
    return JSON.parse(JSON.stringify(this._params));
  }

  /**
   * Getter function for API fileparams
   * @return {Object} Object containing API fileParams
   */
  get fileParams(): Object {
    // Deep cloning when object value is not a function
    return JSON.parse(JSON.stringify(this._fileParams));
  }

  /**
   * @param {string} filePath Path to file attached to the request
   * @return {APIReqeust} APIRequest instance
   */
  addFile(filePath: string): APIRequest {
    const fileKey = `source${this._fileCounter}`;
    const stats = fs.lstatSync(filePath);

    if (!stats.isFile()) {
      throw Error(`Cannot find file ${filePath}!`);
    }

    this._fileParams[fileKey] = filePath;
    this._fileCounter += 1;

    return this;
  }

  /**
   * @param {string[]} filePaths Array of paths to files attached to the request
   * @return {APIRequest} APIRequest instance
   */
  addFiles(filePaths: Array<string>): APIRequest {
    for (let filePath of filePaths) {
      this.addFile(filePath);
    }
    return this;
  }

  /**
   * @param {string} field Requested field
   * @return {APIReqeust} APIRequest instance
   */
  addField(field: string): APIRequest {
    if (!this._fields.includes(field)) {
      this._fields.push(field);
    }

    return this;
  }

  /**
   * @param {string[]} fields Array of requested fields
   * @return {APIRequest} APIRequest instance
   */
  addFields(fields: Array<string>): APIRequest {
    for (let field of fields) {
      this.addField(field);
    }

    return this;
  }

  /**
   * @param {string} key Param key
   * @param {*} value Param value
   * @return {APIRequest} APIRequest instance
   */
  addParam(key: string, value: any): APIRequest {
    this._params[key] = value;

    return this;
  }

  /**
   * @param {Object} params An object containing param keys and values
   * @return {APIRequest} APIRequest instance
   */
  addParams(params: Object): APIRequest {
    this._params = params;

    return this;
  }
}

export default APIRequest;
