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
const ProductCatalog = bizSdk.ProductCatalog;
const Hotel = bizSdk.Hotel;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<PRODUCT_CATALOG_ID>';
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
  'hotel_id' : 'h_1',
  'name' : 'Sample Hotel',
  'description' : 'hotel description',
  'brand' : 'hotel brand',
  'url' : 'http://www.example.com/samplehotel',
  'images' : [{'image_url':'https://www.example.com/pic1.jpg','tags':['front view','balcony']},{'image_url':'http://www.example.com/pic2.jpg','tags':['lobby view']}],
  'address' : {'street_address':'1 Hacker Way','city':'Menlo Park','region':'California','country':'United States','postal_code':'94025','neighborhoods':['Palo Alto','Menlo Park'],'latitude':37.484116,'longitude':-122.148244},
  'guest_ratings' : [{'score':7.8,'max_score':10,'rating_system':'sample_rating','number_of_raters':780}],
  'star_rating' : '4',
  'phone' : '+351234123456',
};
const hotels = (new ProductCatalog(id)).createHotel(
  fields,
  params
);
logApiCallResult('hotels api call complete.', hotels);