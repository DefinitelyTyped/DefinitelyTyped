
import * as nodemailer from 'nodemailer'

// create reusable transporter object using SMTP transport
var transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});

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
// create template based sender function
var sendPwdReset = transporter.templateSender({
    subject: 'Password reset for {{username}}!',
    text: 'Hello, {{username}}, Please go here to reset your password: {{ reset }}',
    html: '<b>Hello, <strong>{{username}}</strong>, Please <a href="{{ reset }}">go here to reset your password</a>: {{ reset }}</p>'
}, {
    from: 'sender@example.com',
});

// use template based sender to send a message
sendPwdReset({
    to: 'receiver@example.com'
}, {
    username: 'Node Mailer',
    reset: 'https://www.example.com/reset?token=<unique-single-use-token>'
})
.then(info => info.messageId);
