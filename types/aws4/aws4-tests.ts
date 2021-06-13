import * as aws4 from "aws4";

let requestSigner = new aws4.RequestSigner({}, {});
// $ExpectType string[]
requestSigner.matchHost("");
// $ExpectType boolean
requestSigner.isSingleRegion();
// $ExpectType string
requestSigner.createHost();
// $ExpectType void
requestSigner.prepareRequest();
requestSigner.sign();
// $ExpectType string
requestSigner.getDateTime();
// $ExpectType string
requestSigner.getDate();
// $ExpectType string
requestSigner.authHeader();
// $ExpectType string
requestSigner.signature();
// $ExpectType string
requestSigner.stringToSign();
// $ExpectType string
requestSigner.canonicalString();
// $ExpectType string
requestSigner.canonicalHeaders();
// $ExpectType string
requestSigner.signedHeaders();
// $ExpectType string
requestSigner.credentialString();
requestSigner.defaultCredentials();
requestSigner.parsePath();
// $ExpectType string
requestSigner.formatPath();

aws4.sign({}, {});
