import nodemailer = require('nodemailer')
import pickupTransport = require('nodemailer-pickup-transport')

var opts: pickupTransport.Options = {
    directory: 'C:\\inetpub\\mailroot\\Pickup'
};

var transport: nodemailer.Transport = pickupTransport(opts);
var transporter: nodemailer.Transporter = nodemailer.createTransport(transport);

// setup e-mail data with unicode symbols
var mailOptions: nodemailer.SendMailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};
transporter.sendMail(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
    // nothing
});
