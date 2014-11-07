/// <reference path="aws-sdk.d.ts" />

import awsSdk = require('aws-sdk');

var str: string;

var creds: awsSdk.Credentials;

creds = new awsSdk.Credentials(str, str);
creds = new awsSdk.Credentials(str, str, str);
str = creds.accessKeyId;

// more
