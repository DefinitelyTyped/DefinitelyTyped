import Sendcloud = require('sendcloud');

const sendcloud = new Sendcloud(
  'apiUser',
  'apiKey',
  'nobody@example.com',
);

sendcloud.send('nobody@example.com', 'test', 'test mail');

sendcloud.sendEmailSmtp('nobody@example.com', 'test', 'test mail');
