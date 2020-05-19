import * as nodemailer from 'nodemailer'
import * as AWS from 'aws-sdk'

// create reusable transporter object using SMTP transport
var transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});

// create reusable transporter object using SMTP connection url using default options
transporter = nodemailer.createTransport("smtps://gmail.user@gmail.com:userpass@gmail/?pool=true");

// create reusable transporter object using SMTP connection url and specify some options
transporter = nodemailer.createTransport("smtps://gmail.user@gmail.com:userpass@gmail/?pool=true",
 {
    from: 'sender@address',
    headers: {
        'My-Awesome-Header': '123'
    }
 });

// create reusable transporter object using SES transport and set default values for mail options.
transporter = nodemailer.createTransport({
    SES: new AWS.SES()
})
// create reusable transporter object using SMTP transport and set default values for mail options.
transporter = nodemailer.createTransport({
    SES: new AWS.SES()
}, {
    from: 'sender@address',
    headers: {
        'My-Awesome-Header': '123'
    }
})

// create reusable transporter object using SMTP transport and set default values for mail options.
transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
}, {
    from: 'sender@address',
    headers: {
        'My-Awesome-Header': '123'
    }
});

// setup e-mail data with unicode symbols
var mailOptions: nodemailer.SendMailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
    // nothing
});

// promise send mail without callback
transporter
  .sendMail(mailOptions)
  .then(info => info.messageId)
  .catch(err => {})
