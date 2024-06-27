/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */
import Http from './http';
import FacebookAdsApi from './api';
import {FacebookRequestError} from './exceptions';

export default class CrashReporter {

    static _instance: CrashReporter;
    _active: bool;

    constructor() {
      this._active = true;
    }

    static enable() {
      if (this._instance == undefined || this._instance == null) {
        this._instance = new this();
        process
          .on('uncaughtException', err => {
            if (this._instance._active && err instanceof Error) {
              var params = privateMethods.parseParam(err);
              if (params != null) {
                console.log('CrashReporter: SDK crash detected!');
                privateMethods.processUncaughtException(err, params);
                return;
              }
            }
            console.log('CrashReporter: No SDK crash detected or crash reporter is disabled!');
            throw err;
          });
      }
    }

    static disable() {
      if (this._instance == undefined || this._instance == null) {
        return;
      }
      this._instance._active = false;
    }
}


const privateMethods = {
  processUncaughtException (err: Error, params: Object) {
    FacebookAdsApi.getDefaultApi().getAppID()
      .then((data) => {
        if (data["data"] !== undefined && data['data']['app_id'] !== undefined) {
          var appID = data['data']['app_id'];

          console.log("active uncaughtException : " + appID);
          var url = [FacebookAdsApi.GRAPH, FacebookAdsApi.VERSION, appID, 'instruments'].join('/');

          Http.request('POST', url, params)
            .then(response => {
              console.log('Successfully sent crash report.')
            })
            .catch(response => {
              console.log('Failed to send crash report.')
            })
            .then(() => {
              throw err;
            });

        }
      })
      .catch((error) => {
        console.log("Not be able to find appID, fail to send report to server.");
        throw err;
      });
  },

  parseParam(err: Error) {
      var stack = err.stack.split('\n');
      type Params = {
        [key: string]: any
      };
      var params: Params = {};

      if (stack.length == 0) {
        return null;
      }

      var fln = stack[0].split(':');
      params['reason'] = fln[0];
      params['callstack'] = stack;
      params['platform'] = process.version;

      for(var i=0; i<stack.length; i++) {
        if (stack[i].includes('facebook-nodejs-business-sdk')) {
          return {'bizsdk_crash_report' : params};
        }
      }
      return null;
    }
}
