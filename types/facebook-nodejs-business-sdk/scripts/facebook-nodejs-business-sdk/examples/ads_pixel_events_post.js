/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const AdsPixel = bizSdk.AdsPixel;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<ADS_PIXEL_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'data' : [{'event_name':'PageView','event_time':1718149023,'user_data':{'fbc':'fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890','fbp':'fb.1.1558571054389.1098115397','em':'309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd'}}],
};
const events = (new AdsPixel(id)).createEvent(
  fields,
  params
);
logApiCallResult('events api call complete.', events);