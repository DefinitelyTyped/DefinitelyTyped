import * as AWS from 'aws-sdk';
import * as nodemailer from "nodemailer";
import * as sesTransport from 'nodemailer-ses-transport';

const opts: sesTransport.SesOptions = {
  ses: new AWS.SES(),
  rateLimit: 5,
  maxConnections: 3,
};

const transport: nodemailer.Transport = sesTransport(opts);

// setup e-mail data with unicode symbols
const mailOptions: nodemailer.SendMailOptions = {
  from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
  to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ✔', // plaintext body
  html: '<b>Hello world ✔</b>' // html body
};

transport.send(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
  // nothing
});
