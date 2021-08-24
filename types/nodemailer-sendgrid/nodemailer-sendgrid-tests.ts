import nodemailerSendgrid = require('nodemailer-sendgrid');
import nodemailer = require('nodemailer');

const opts: nodemailerSendgrid.SendgridOptions = { apiKey: 'XXXXXXXXXXXXXXXX' };
const transport: nodemailer.Transporter = nodemailer.createTransport(nodemailerSendgrid(opts));
const mailOptions: nodemailer.SendMailOptions = {
    from: 'Foo Bar ✔ <foo@bar.com>',
    to: 'foo@baz.com, foo@baz.com',
    subject: 'Hello world ✔',
    text: 'Hello world ✔',
    html: '<b>Hello world ✔</b>',
};

transport.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo): void => {
    // nothing
});
