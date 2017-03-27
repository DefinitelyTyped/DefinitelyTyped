
import smtpTransport = require('nodemailer-smtp-transport');
import nodemailer = require('nodemailer');

var opts: smtpTransport.SmtpOptions = {
	host: "localhost",
	port: 25
};

var transport: nodemailer.Transport = smtpTransport(opts);

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

