# Facebook Business SDK for NodeJS

[![npm](https://img.shields.io/npm/v/facebook-nodejs-business-sdk)](https://www.npmjs.com/package/facebook-nodejs-business-sdk)
[![License](https://img.shields.io/badge/license-Facebook%20Platform-blue.svg?style=flat-square)](https://github.com/facebook/facebook-nodejs-business-sdk/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/facebook/facebook-nodejs-business-sdk/ci.yml)](https://github.com/facebook/facebook-nodejs-business-sdk/actions/workflows/ci.yml)

### Introduction

The Facebook <a href="https://developers.facebook.com/docs/business-sdk" target="_blank">Business SDK</a> is a one-stop shop to help our partners better serve their businesses. Partners are using multiple Facebook API's to serve the needs of their clients. Adopting all these API's and keeping them up to date across the various platforms can be time consuming and ultimately prohibitive. For this reason Facebook has developed the Business SDK bundling many of its APIs into one SDK to ease implementation and upkeep. The Business SDK is an upgraded version of the Marketing API SDK that includes the Marketing API as well as many Facebook APIs from different platforms such as Pages, Business Manager, Instagram, etc.

This SDK can be used for both server side as well as client side. It comes with ECMAScript 5 bundled minified distribution with source maps of AMD, CommonJS modules, IIFE, as UMD and as Browser Globals.

## Quick Start

Business SDK <a href="https://developers.facebook.com/docs/business-sdk/getting-started" target="_blank">Getting Started Guide</a>

## Pre-requisites

### Dependencies

[Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) should be installed globally. Install dependencies:

``` bash
npm install
bower install
```

Checkout `gulpfile.js` for all available tasks.

### Register An App

To get started with the SDK, you must have an app
registered on <a href="https://developers.facebook.com/" target="_blank">developers.facebook.com</a>.

To manage the Marketing API, please visit your
<a href="https://developers.facebook.com/apps/<YOUR APP ID>/dashboard"> App Dashboard </a>
and add the <b>Marketing API</b> product to your app.

**IMPORTANT**: For security, it is recommended that you turn on 'App Secret
Proof for Server API calls' in your app's Settings->Advanced page.

### Obtain An Access Token

When someone connects with an app using Facebook Login and approves the request
for permissions, the app obtains an access token that provides temporary, secure
access to Facebook APIs.

An access token is an opaque string that identifies a User, app, or Page.

For example, to access the Marketing API, you need to generate a User access token
for your app and ask for the ``ads_management`` permission; to access Pages API,
you need to generate a Page access token for your app and ask for the ``manage_page`` permission.

Refer to our
<a href="https://developers.facebook.com/docs/facebook-login/access-tokens" target="_blank">
Access Token Guide</a> to learn more.

For now, we can use the
<a href="https://developers.facebook.com/tools/explorer" target="_blank">Graph Explorer</a>
to get an access token.

## Installation

NPM

`npm install --save facebook-nodejs-business-sdk`

Bower

`bower install --save facebook-nodejs-business-sdk`

## Usage

### Access Token

When someone connects with an app using Facebook Login and approves the request for permissions, the app obtains an access token that provides temporary, secure access to Facebook APIs.

An access token is an opaque string that identifies a User, app, or Page.

For example, to access the Marketing API, you need to generate a User access token for your app and ask for the ``ads_management`` permission; to access Pages API, you need to generate a Page access token for your app and ask for the ``manage_page`` permission.
Refer to our <a href="https://developers.facebook.com/docs/facebook-login/access-tokens" target="_blank">Access Token Guide</a> to learn more.

For now, we can use the <a href="https://developers.facebook.com/tools/explorer" target="_blank">Graph Explorer</a> to get an access token.

```javaScript
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
```

### Api main class

The `FacebookAdsApi` object is the foundation of the Business SDK which encapsulates the logic to execute requests against the Graph API.
Once instantiated, the Api object will allow you to start making requests to the Graph API.

### Facebook Objects

Facebook Ads entities are defined as classes under the `src/objects` directory.

```javascript
// instantiating an object
const adsSdk = require('facebook-nodejs-business-sdk');
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('act_<AD_ACCOUNT_ID>');
console.log(account.id) // fields can be accessed as properties
```

### Fields

Due to the high number of field names in the existing API objects, in order to facilitate your code maintainability, enum-like field objects are provided within each node class.
The fields are stored within node object classes which are stored under the `src/objects` directory.
You can access object properties like this:

```javaScript
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('act_<AD_ACCOUNT_ID>');

console.log(account.id) // fields can be accessed as properties
account
  .createCampaign(
    [Campaign.Fields.Id],
    {
      [Campaign.Fields.name]: 'Page likes campaign', // Each object contains a fields map with a list of fields supported on that object.
      [Campaign.Fields.status]: Campaign.Status.paused,
      [Campaign.Fields.objective]: Campaign.Objective.page_likes
    }
  )
  .then((result) => {
  })
  .catch((error) => {
  });
```

#### Read Objects

```javascript
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('act_<AD_ACCOUNT_ID>');
account
  .read([AdAccount.Fields.name, AdAccount.Fields.age])
  .then((account) => {
    console.log(account);
  })
  .catch((error) => {
  });
```

Requesting an high number of fields may cause the response time to visibly increase, you should always request only the fields you really need.

#### Create Objects

```javascript
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('act_<AD_ACCOUNT_ID>');
account
  .createCampaign(
    [],
    {
      [Campaign.Fields.name]: 'Page likes campaign',
      [Campaign.Fields.status]: Campaign.Status.paused,
      [Campaign.Fields.objective]: Campaign.Objective.page_likes
    }
  )
  .then((campaign) => {
  })
  .catch((error) => {
  });
```

#### Update Objects

```javascript
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const Campaign = adsSdk.Campaign;
const campaignId = <CAMPAIGN_ID>;
new Campaign(campaignId, {
  [Campaign.Fields.id]: campaign.id,
  [Campaign.Fields.name]: 'Campaign - Updated' })
  .update();
```

#### Delete Objects

```javascript
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const Campaign = adsSdk.Campaign;
const campaignId = <CAMPAIGN_ID>;
new Campaign(campaignId).delete();
```

### Pagination

Since the release of the Facebook Graph API 2.0, pagination is handled through <a href="https://developers.facebook.com/docs/graph-api/using-graph-api/v2.2#paging" target="_blank">cursors</a>.

Here cursors are defined as in `src\cursor.js`. When fetching nodes related to another (Edges) or a collection in the graph, the results are paginated in a `Cursor` class.
Here the `Cursor` is a superpowered `Array` (with all it's native helpful operations) with `next` and `previous` methods that when resolved fills itself with the new set of objects.

```javascript
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('act_<AD_ACCOUNT_ID>');
account.getCampaigns([Campaign.Fields.name], { limit: 2 })
.then((campaigns) => {
  if (campaigns.length >= 2 && campaigns.hasNext()) {
    return campaigns.next();
  } else {
    Promise.reject(
      new Error('campaigns length < 2 or not enough campaigns')
    );
  }
})
.then((campaigns) => {
  if (campaigns.hasNext() && campaigns.hasPrevious()) {
    return campaigns.previous();
  } else {
    Promise.reject(
      new Error('previous or next is not true')
    );
  }
  return campaigns.previous();
})
.catch((error) => {
});
```

If you are using cursor to iterate all of your object under your Ad Account, this practice is recommended.

```javascript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('act_<AD_ACCOUNT_ID>');

void async function () {
    let campaigns = await account.getCampaigns([Campaign.Fields.name], {limit: 20});
    campaigns.forEach(c => console.log(c.name));
    while (campaigns.hasNext()) {
        campaigns = await campaigns.next();
        campaigns.forEach(c => console.log(c.name));
    }
}();
```


#### Debugging

A `FacebookAdsApi` object offers a debugging mode that will log all requests. To enable it just call `api.setDebug(true)` on an API instance.

```javascript
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
api.setDebug(true);
```

### Style

This package uses type safe javascript. <a href="https://flow.org/" target="_blank">Flow</a>. Inconsistent code will break builds.

## SDK Codegen
Our SDK is autogenerated from [SDK Codegen](https://github.com/facebook/facebook-business-sdk-codegen). If you want to learn more about how our SDK code is generated, please check this repository.

## Join the Facebook Marketing Developer community
* Website: https://www.facebook.com/groups/pmdcommunity
* Facebook page: https://www.facebook.com/marketingdevelopers/
See the CONTRIBUTING file for how to help out.

## License
Facebook Business SDK for NodeJS is licensed under the LICENSE file in the root directory of this source tree.
