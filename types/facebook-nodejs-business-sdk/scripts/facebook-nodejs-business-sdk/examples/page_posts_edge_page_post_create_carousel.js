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
const Page = bizSdk.Page;
const PagePost = bizSdk.PagePost;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<PAGE_ID>';
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
  'message' : 'Browse our latest products',
  'published' : '0',
  'child_attachments' : [{'link':'<link>','name':'Product 1','description':'$4.99','image_hash':'<imageHash>'},{'link':'<link>','name':'Product 2','description':'$4.99','image_hash':'<imageHash>'},{'link':'<link>','name':'Product 3','description':'$4.99','image_hash':'<imageHash>'},{'link':'<link>','name':'Product 4','description':'$4.99','image_hash':'<imageHash>'}],
  'caption' : 'WWW.EXAMPLE.COM',
  'link' : 'http://www.example.com/products',
};
const postss = (new Page(id)).getPosts(
  fields,
  params
);
logApiCallResult('postss api call complete.', postss);