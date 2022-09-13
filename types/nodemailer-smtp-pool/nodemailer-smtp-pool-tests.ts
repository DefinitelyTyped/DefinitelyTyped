
import smtpPool = require('nodemailer-smtp-pool');
import nodemailer = require('nodemailer');

var opts: smtpPool.SmtpPoolOptions = {
    maxConnections: 5,
    maxMessages: 10
};

var transport: nodemailer.Transport = smtpPool(opts);

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

