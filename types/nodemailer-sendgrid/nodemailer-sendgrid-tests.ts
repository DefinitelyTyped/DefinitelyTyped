import sendgrid from 'nodemailer-sendgrid';
import nodemailer from 'nodemailer';

const opts: sendgrid.SendgridOptions = { apiKey: 'XXXXXXXXXXXXXXXX' };
const transport: nodemailer.Transport = sendgrid(opts);
const mailOptions: nodemailer.SendMailOptions = {
    from: 'Foo Bar ✔ <foo@bar.com>',
    to: 'foo@baz.com, foo@baz.com',
    subject: 'Hello world ✔',
    text: 'Hello world ✔',
    html: '<b>Hello world ✔</b>'
};

transport.send(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
    // nothing
});
