import { sign, RequestSigner } from "aws4";

// $ExpectType Request
sign("");
// $ExpectType Request
sign("", {});
// $ExpectType Request
sign({});
// $ExpectType Request
sign({}, {});

// $ExpectType RequestSigner
new RequestSigner("");
// $ExpectType RequestSigner
new RequestSigner("", {});
// $ExpectType RequestSigner
new RequestSigner({});
// $ExpectType RequestSigner
new RequestSigner({}, {});

import aws4 = require("aws4");

// $ExpectType RequestSigner
const requestSigner = new aws4.RequestSigner({});

// $ExpectType [string, string]
requestSigner.matchHost("");
// $ExpectType boolean
requestSigner.isSingleRegion();
// $ExpectType string
requestSigner.createHost();
// $ExpectType string
requestSigner.authHeader();
// $ExpectType string
requestSigner.canonicalHeaders();
// $ExpectType string
requestSigner.signedHeaders();
// $ExpectType string
requestSigner.credentialString();
// $ExpectType Credentials
requestSigner.defaultCredentials();
// $ExpectType void
requestSigner.parsePath();
// $ExpectType string
requestSigner.formatPath();
// $ExpectType Request
requestSigner.sign();
// $ExpectType void
requestSigner.prepareRequest();
// $ExpectType string
requestSigner.getDateTime();
// $ExpectType string
requestSigner.getDate();
// $ExpectType string
requestSigner.canonicalString();
// $ExpectType string
requestSigner.signature();
// $ExpectType string
requestSigner.stringToSign();

// $ExpectType Request
requestSigner.request;
// $ExpectType Credentials
requestSigner.credentials;
// $ExpectType string
requestSigner.service;
// $ExpectType string
requestSigner.region;
// $ExpectType boolean
requestSigner.isCodeCommitGit;
// $ExpectType string | undefined
requestSigner.parsedPath?.path;
// $ExpectType Record<string, string | string[]> | undefined
requestSigner.parsedPath?.query;
// $ExpectType string | undefined
requestSigner.datetime;
