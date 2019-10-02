import AWSXRay from "aws-xray-sdk";
import http from "http";
import https from "https";
import express from "express";

AWSXRay.captureHTTPsGlobal(http);
AWSXRay.captureHTTPsGlobal(https);

const app = express();
app.use(AWSXRay.express.openSegment("test-me"));

app.use(AWSXRay.express.closeSegment());
