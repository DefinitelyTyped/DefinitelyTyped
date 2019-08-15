import * as aws4 from "aws4";

let requestSigner = new aws4.RequestSigner({}, {});
requestSigner.matchHost("");
requestSigner.isSingleRegion();
requestSigner.createHost();
requestSigner.prepareRequest();
requestSigner.sign();
requestSigner.getDateTime();
requestSigner.getDate();
requestSigner.authHeader();
requestSigner.signature();
requestSigner.stringToSign();
requestSigner.canonicalString();
requestSigner.canonicalHeaders();
requestSigner.signedHeaders();
requestSigner.credentialString();
requestSigner.defaultCredentials();
requestSigner.parsePath();
requestSigner.formatPath();

aws4.sign({}, {});
