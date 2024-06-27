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
const AdCreative = bizSdk.AdCreative;
const AdPreview = bizSdk.AdPreview;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<AD_CREATIVE_ID>';
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
  'ad_format' : 'DESKTOP_FEED_STANDARD',
  'product_item_ids' : ['<productItemID>'],
  'dynamic_customization' : {'language':'fr_XX','country':'FR'},
};
const previewss = (new AdCreative(id)).getPreviews(
  fields,
  params
);
logApiCallResult('previewss api call complete.', previewss);