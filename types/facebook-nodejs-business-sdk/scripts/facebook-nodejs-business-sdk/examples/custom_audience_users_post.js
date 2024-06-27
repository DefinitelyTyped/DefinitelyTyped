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
const CustomAudience = bizSdk.CustomAudience;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<CUSTOM_AUDIENCE_ID>';
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
  'payload' : {'schema':['EMAIL','LOOKALIKE_VALUE'],'data':[['9b431636bd164765d63c573c346708846af4f68fe3701a77a3bdd7e7e5166254',44.5],['8cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee',140],['4eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a',0],['98df8d46f118f8bef552b0ec0a3d729466a912577830212a844b73960777ac56',0.9]]},
};
const users = (new CustomAudience(id)).createUser(
  fields,
  params
);
logApiCallResult('users api call complete.', users);