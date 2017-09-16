import mailgunTransport = require('nodemailer-mailgun-transport');
import nodemailer = require('nodemailer');

const opts: mailgunTransport.Options = {
    auth: {
        api_key: "harry"
    }
};

const optsWithDomain: mailgunTransport.Options = {
    auth: {
        api_key: "harry",
        domain: "http://www.foo.com"
    }
};

const transport: nodemailer.Transporter = nodemailer.createTransport(mailgunTransport(optsWithDomain));

// setup e-mail data with unicode symbols
const mailOptions: nodemailer.SendMailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};
transport.sendMail(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
	// nothing
});
