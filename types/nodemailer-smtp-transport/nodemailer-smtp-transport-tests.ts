
import smtpTransport = require('nodemailer-smtp-transport');
import nodemailer = require('nodemailer');

var opts: smtpTransport.SmtpOptions = {
	host: "localhost",
	port: 25,
    auth: {
        type: 'OAuth2',
        user: 'user@example.com',
        // 3LO auth
        clientId: '000000000000-xxx0.apps.googleusercontent.com',
        clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
        refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
        accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
        expires: 1484314697598,
        // 2LO auth (test only, dont mix with 3LO)
        serviceClient: '113600000000000000000',
        privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...',
    },
    service: 'Gmail'
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

