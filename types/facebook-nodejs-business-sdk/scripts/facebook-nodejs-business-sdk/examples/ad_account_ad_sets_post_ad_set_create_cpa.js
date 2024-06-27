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
const AdAccount = bizSdk.AdAccount;
const AdSet = bizSdk.AdSet;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<AD_ACCOUNT_ID>';
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
  'name' : 'A CPA Ad Set',
  'campaign_id' : '<adCampaignLinkClicksID>',
  'daily_budget' : '5000',
  'start_time' : '2024-06-18T16:39:15-0700',
  'end_time' : '2024-06-25T16:39:15-0700',
  'billing_event' : 'IMPRESSIONS',
  'optimization_goal' : 'REACH',
  'bid_amount' : '1000',
  'promoted_object' : {'page_id':'<pageID>'},
  'targeting' : {'facebook_positions':['feed'],'geo_locations':{'countries':['US']}},
  'user_os' : 'iOS',
  'publisher_platforms' : 'facebook',
  'device_platforms' : 'mobile',
};
const adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);