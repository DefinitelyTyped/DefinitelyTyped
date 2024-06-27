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
  'name' : 'My First AdSet',
  'daily_budget' : '10000',
  'bid_amount' : '300',
  'billing_event' : 'IMPRESSIONS',
  'optimization_goal' : 'REACH',
  'campaign_id' : '<adCampaignLinkClicksID>',
  'promoted_object' : {'page_id':'<pageID>'},
  'targeting' : {'facebook_positions':['feed'],'age_max':24,'age_min':20,'behaviors':[{'id':6002714895372,'name':'All travelers'}],'device_platforms':['mobile'],'genders':[1],'geo_locations':{'countries':['US'],'regions':[{'key':'4081'}],'cities':[{'key':777934,'radius':10,'distance_unit':'mile'}]},'interests':[{'id':'<adsInterestID>','name':'<adsInterestName>'}],'life_events':[{'id':6002714398172,'name':'Newlywed (1 year)'}],'publisher_platforms':['facebook','audience_network']},
  'status' : 'PAUSED',
};
const adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);