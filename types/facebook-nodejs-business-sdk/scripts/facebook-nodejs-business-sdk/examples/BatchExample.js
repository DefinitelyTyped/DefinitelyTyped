/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const bizSdk = require('facebook-nodejs-business-sdk');
const process = require('process');
const Page = bizSdk.Page;
const FacebookAdsApiBatch = bizSdk.FacebookAdsApiBatch;
const APIRequest = bizSdk.APIRequest;
const AdAccount = bizSdk.AdAccount;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '';
const app_id = '';
const adaccount_id = 'act_<ACCOUNT_ID>';
const page_id = '<PAGE_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const account = new AdAccount(adaccount_id);


const showDebugingInfo = true;
if (showDebugingInfo) {
  api.setDebug(true);
}

const errorFunction = scenarioName => {
  let returnFunction = error => {
    console.log('An error occurred while processing, ' + scenarioName);
    console.log('Error Message:' + error);
    console.log('Error Stack:' + error.stack);
  };
  return returnFunction;
};

const logPassedTest = (testName, data) => {
  console.log(testName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

// Single API call
const descip1 = 'Read AdAccount';
account
  .read([AdAccount.Fields.name, AdAccount.Fields.age])
  .then(account => {
    logPassedTest(descip1 + ':Pass', account);
  })
  .catch(errorFunction(descip1));

// Batch API call
const descip2 = 'Batch request';
const batchApi = new FacebookAdsApiBatch(api);


const request1 =
  new APIRequest(page_id, 'GET', '/')
  .addField(Page.Fields.name);

const request2 =
  new APIRequest(adaccount_id, 'GET', '/')
  .addField(AdAccount.Fields.name)
  .addField(AdAccount.Fields.age);

batchApi.addRequest(
  request1,
  (response) =>
    logPassedTest(descip2 + ':request1:Pass', response.body),
  (response) =>
    errorFunction(descip2 + ':request1:Fail' + response.error)
);

batchApi.addRequest(
  request2,
  (response) =>
    logPassedTest(descip2 + ':request2:Pass', response.error),
  (response) =>
    errorFunction(descip2 + ':request2:Fail')(response.body),
);

batchApi
  .execute()
  .then(newBatch => {
    logPassedTest(descip2 + ':Pass', newBatch);
  })
  .catch(errorFunction(descip2));
