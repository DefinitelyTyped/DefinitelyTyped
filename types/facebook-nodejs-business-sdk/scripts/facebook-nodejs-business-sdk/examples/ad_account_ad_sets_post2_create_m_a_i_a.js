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
  'name' : 'Mobile App Installs Ad Set',
  'daily_budget' : '1000',
  'bid_amount' : '2',
  'billing_event' : 'IMPRESSIONS',
  'optimization_goal' : 'APP_INSTALLS',
  'campaign_id' : '<adCampaignAppInstallsID>',
  'promoted_object' : {'application_id':'<appID>','object_store_url':'<appLink>'},
  'targeting' : {'device_platforms':['mobile'],'facebook_positions':['feed'],'geo_locations':{'countries':['US']},'publisher_platforms':['facebook','audience_network'],'user_os':['IOS']},
  'status' : 'PAUSED',
};
const adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);