/// <reference path="../aws-sdk/aws-sdk.d.ts" />
/// <reference path="nodemailer-ses-transport.d.ts" />

import * as AWS from 'aws-sdk';
import * as sesTransport from 'nodemailer-ses-transport';

var opts: sesTransport.SesOptions = {
  ses: new AWS.SES(),
  rateLimit: 5,
  maxConnections: 3,
};

var transport: nodemailer.Transport = sesTransport(opts);

// setup e-mail data with unicode symbols
var mailOptions: nodemailer.SendMailOptions = {
  from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
  to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ✔', // plaintext body
  html: '<b>Hello world ✔</b>' // html body
};

transport.send(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
  // nothing
});
