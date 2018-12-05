import * as nodemailer from 'nodemailer';

import addressparser = require('nodemailer/lib/addressparser');
import base64 = require('nodemailer/lib/base64');
import fetch = require('nodemailer/lib/fetch');
import Cookies = require('nodemailer/lib/fetch/cookies');
import JSONTransport = require('nodemailer/lib/json-transport');
import Mail = require('nodemailer/lib/mailer');
import MailComposer = require('nodemailer/lib/mail-composer');
import MailMessage = require('nodemailer/lib/mailer/mail-message');
import mimeFuncs = require('nodemailer/lib/mime-funcs');
import mimeTypes = require('nodemailer/lib/mime-funcs/mime-types');
import MimeNode = require('nodemailer/lib/mime-node');
import qp = require('nodemailer/lib/qp');
import SendmailTransport = require('nodemailer/lib/sendmail-transport');
import SESTransport = require('nodemailer/lib/ses-transport');
import shared = require('nodemailer/lib/shared');
import SMTPConnection = require('nodemailer/lib/smtp-connection');
import SMTPPool = require('nodemailer/lib/smtp-pool');
import SMTPTransport = require('nodemailer/lib/smtp-transport');
import StreamTransport = require('nodemailer/lib/stream-transport');
import wellKnown = require('nodemailer/lib/well-known');
import XOAuth2 = require('nodemailer/lib/xoauth2');
import LeWindows = require('nodemailer/lib/sendmail-transport/le-windows');
import LeUnix = require('nodemailer/lib/sendmail-transport/le-unix');

import * as fs from 'fs';
import * as stream from 'stream';

// mock aws-sdk
const aws = {
    SES: class MockSES {
        constructor(options?: object) { }
    },
    config: {
        loadFromPath: (path: string): void => { }
    }
};

// 1. Nodemailer

function nodemailer_test() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.log(err);
            return;
        }
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass  // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        const mailOptions: Mail.Options = {
            from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
            to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (err, info: SMTPTransport.SentMessageInfo) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}

// 3. Message configuration

// Commmon fields

function message_common_fields_test() {
    const message: Mail.Options = {
        from: 'sender@server.com',
        to: 'receiver@sender.com',
        subject: 'Message title',
        text: 'Plaintext version of the message',
        html: '<p>HTML version of the message</p>'
    };
}

// More advanced fields

function message_more_advanced_fields_test() {
    const message: Mail.Options = {
        headers: {
            'My-Custom-Header': 'header value'
        },
        date: new Date('2000-01-01 00:00:00')
    };

    const htmlstream = fs.createReadStream('content.html');
    const transport = nodemailer.createTransport();
    transport.sendMail({ html: htmlstream }, (err) => {
        if (err) {
            // check if htmlstream is still open and close it to clean up
        }
    });
}

// 3. Attachments

function message_attachments_test() {
    const message: Mail.Options = {
        attachments: [
            {   // utf-8 string as an attachment
                filename: 'text1.txt',
                content: 'hello world!',
            },
            {   // binary buffer as an attachment
                filename: 'text2.txt',
                content: new Buffer('hello world!', 'utf-8')
            },
            {   // file on disk as an attachment
                filename: 'text3.txt',
                path: '/path/to/file.txt' // stream this file
            },
            {   // filename and content type is derived from path
                path: '/path/to/file.txt'
            },
            {   // stream as an attachment
                filename: 'text4.txt',
                content: fs.createReadStream('file.txt'),
                contentTransferEncoding: 'quoted-printable'
            },
            {   // define custom content type for the attachment
                filename: 'text.bin',
                content: 'hello world!',
                contentType: 'text/plain',
                contentTransferEncoding: '7bit',
                contentDisposition: 'attachment'
            },
            {   // use URL as an attachment
                filename: 'license.txt',
                path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            },
            {   // encoded string as an attachment
                filename: 'text1.txt',
                content: 'aGVsbG8gd29ybGQh',
                encoding: 'base64',
                contentTransferEncoding: 'base64'
            },
            {   // data uri as an attachment
                path: 'data:text/plain;base64,aGVsbG8gd29ybGQ=',
                contentDisposition: 'inline',
                contentTransferEncoding: false
            },
            {
                // use pregenerated MIME node
                raw: 'Content-Type: text/plain\r\n' + // tslint:disable-line prefer-template
                'Content-Disposition: attachment;\r\n' +
                '\r\n' +
                'Hello world!'
            }
        ]
    };
}

// 3. Alternatives

function message_alternatives_test() {
    const message: Mail.Options = {
        html: '<b>Hello world!</b>',
        alternatives: [
            {
                contentType: 'text/x-web-markdown',
                content: '**Hello world!**'
            }
        ]
    };
}

// 3. Address object

function message_address_object_test() {
    const message: Mail.Options = {
        to: 'foobar@blurdybloop.com, "Ноде Майлер" <bar@blurdybloop.com>, "Name, User" <baz@blurdybloop.com>',
        cc: [
            'foobar@blurdybloop.com',
            '"Ноде Майлер" <bar@blurdybloop.com>',
            '"Name, User" <baz@blurdybloop.com>'
        ],
        bcc: [
            'foobar@blurdybloop.com',
            {
                name: 'Майлер, Ноде',
                address: 'foobar@blurdybloop.com'
            }
        ]
    };
}

// 3. Calendar events

// Send a REQUEST event as a string

function message_calendar_request_test() {
    const content = 'BEGIN:VCALENDAR\r\nPRODID:-//ACME/DesktopCalendar//EN\r\nMETHOD:REQUEST\r\n...';

    const message: Mail.Options = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Appointment',
        text: 'Please see the attached appointment',
        icalEvent: {
            filename: 'invitation.ics',
            method: 'request',
            content
        }
    };
}

// Send a PUBLISH event from a file

function message_calendar_publish_test() {
    const message: Mail.Options = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Appointment',
        text: 'Please see the attached appointment',
        icalEvent: {
            method: 'PUBLISH',
            path: '/path/to/file'
        }
    };
}

// Send a CANCEL event from an URL

function message_calendar_cancel_test() {
    const message: Mail.Options = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Appointment',
        text: 'Please see the attached appointment',
        icalEvent: {
            method: 'CANCEL',
            href: 'http://www.example.com/events?event=123'
        }
    };
}

// 3. Embedded images

function message_embedded_images_test() {
    const message: Mail.Options = {
        html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
        attachments: [{
            filename: 'image.png',
            path: '/path/to/file',
            cid: 'unique@nodemailer.com' // same cid value as in the html img src
        }]
    };
}

// 3. List headers

// Setup different List-* headers

function message_list_headers_test() {
    const message: Mail.Options = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'List Message',
        text: 'I hope no-one unsubscribes from this list!',
        list: {
            // List-Help: <mailto:admin@example.com?subject=help>
            help: 'admin@example.com?subject=help',
            // List-Unsubscribe: <http://example.com> (Comment)
            unsubscribe: {
                url: 'http://example.com',
                comment: 'Comment'
            },
            // List-Subscribe: <mailto:admin@example.com?subject=subscribe>
            // List-Subscribe: <http://example.com> (Subscribe)
            subscribe: [
                'admin@example.com?subject=subscribe',
                {
                    url: 'http://example.com',
                    comment: 'Subscribe'
                }
            ],
            // List-Post: <http://example.com/post>, <mailto:admin@example.com?subject=post> (Post)
            post: [
                [
                    'http://example.com/post',
                    {
                        url: 'admin@example.com?subject=post',
                        comment: 'Post'
                    }
                ]
            ]
        }
    };
}

// 3. Custom headers

// Set custom headers

function message_custom_headers_test() {
    const message: Mail.Options = {
        headers: {
            'x-my-key': 'header value',
            'x-another-key': 'another value'
        }
    };
}

// Multiple rows with the same key

function message_multiple_rows_with_the_same_key_test() {
    const message: Mail.Options = {
        headers: {
            'x-my-key': [
                'value for row 1',
                'value for row 2',
                'value for row 3'
            ]
        }
    };
}

// Prepared headers

function message_prepared_headers_test() {
    const message: Mail.Options = {
        headers: {
            'x-processed': 'a really long header or value with non-ascii characters 👮',
            'x-unprocessed': {
                prepared: true,
                value: 'a really long header or value with non-ascii characters 👮'
            }
        }
    };
}

// 3. Custom source

// Use string as a message body

function message_string_body_test() {
    const message: Mail.Options = {
        envelope: {
            from: 'sender@example.com',
            to: ['recipient@example.com']
        },
        raw: `From: sender@example.com
To: recipient@example.com
Subject: test message

Hello world!`
    };
}

// Set EML file as message body

function message_eml_file_test() {
    const message: Mail.Options = {
        envelope: {
            from: 'sender@example.com',
            to: ['recipient@example.com']
        },
        raw: {
            path: '/path/to/message.eml'
        }
    };
}

// Set string as attachment body

function message_string_attachment_test() {
    const message: Mail.Options = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Custom attachment',
        attachments: [{
            raw: `Content-Type: text/plain
Content-Disposition: attachment

Attached text file`}]
    };
}

// 4. SMTP transport

// Single connection

function smtp_single_connection_test() {
    const smtpConfig: SMTPTransport.Options = {
        host: 'smtp.example.com',
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: 'username',
            pass: 'password'
        }
    };
    const transporter = nodemailer.createTransport(smtpConfig);
}

// Pooled connection

function smtp_pooled_connection_test() {
    const smtpConfig: SMTPPool.Options = {
        pool: true,
        host: 'smtp.example.com',
        port: 465,
        secure: true, // use TLS
        auth: {
            user: 'username',
            pass: 'password'
        }
    };
    const transporter = nodemailer.createTransport(smtpConfig);
}

// Allow self-signed certificates

function smtp_self_signed_test() {
    const smtpConfig: SMTPTransport.Options = {
        host: 'my.smtp.host',
        port: 465,
        secure: true, // use TLS
        auth: {
            user: 'username',
            pass: 'pass'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    };
    const transporter = nodemailer.createTransport(smtpConfig);
}

// Verify SMTP connection configuration

function smtp_verify_test() {
    const transporter = nodemailer.createTransport();
    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });
}

// 4. SMTP envelope

function smtp_envelope_test() {
    const message: Mail.Options = {
        from: 'mailer@nodemailer.com', // listed in rfc822 message header
        to: 'daemon@nodemailer.com', // listed in rfc822 message header
        envelope: {
            from: 'Daemon <deamon@nodemailer.com>', // used as MAIL FROM: address for SMTP
            to: 'mailer@nodemailer.com, Mailer <mailer2@nodemailer.com>' // used as RCPT TO: address for SMTP
        }
    };
}

// 4. Pooled SMTP

// transporter.close()

function smtp_pool_close_test() {
    const transporter = nodemailer.createTransport({ pool: true });
    transporter.close();
}

// Event:‘idle’

function smtp_pool_idle_test() {
    const messages = [{ raw: 'list of messages' }];
    const transporter = nodemailer.createTransport({ pool: true });
    transporter.on('idle', () => {
        // send next message from the pending queue
        while (transporter.isIdle() && messages.length) {
            transporter.sendMail(messages.shift()!);
        }
    });
}

// 4. Testing SMTP

// Create a testing account on the fly

function smtp_test_account_test() {
    nodemailer.createTestAccount((err, account) => {
        if (!err) {
            // create reusable transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.pass  // generated ethereal password
                }
            });
        }
    });
}

// Use environment specific SMTP settings

function smtp_info_test() {
    const transporter = nodemailer.createTransport();
    transporter.sendMail({}).then((info: SMTPTransport.SentMessageInfo) => {
        console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
    });
}

// 4. OAuth2

// Using custom token handling

function oauth2_token_handling_test() {
    const transporter = nodemailer.createTransport();
    const userTokens: { [key: string]: string; } = {};
    transporter.set('oauth2_provision_cb', (user, renew, callback) => {
        const accessToken = userTokens[user];
        if (!accessToken) {
            callback(new Error('Unknown user'));
        } else {
            callback(null, accessToken);
        }
    });
}

// Token update notifications

function oauth2_token_update_test() {
    const transporter = nodemailer.createTransport();
    transporter.on('token', token => {
        console.log('A new access token was generated');
        console.log('User: %s', token.user);
        console.log('Access Token: %s', token.accessToken);
        console.log('Expires: %s', new Date(token.expires));
    });
}

// Authenticate using existing token

function oauth2_existing_token_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'user@example.com',
            accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
        }
    });
}

// Custom handler

function oauth2_custom_handler_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'user@example.com'
        }
    });

    const userTokens: { [key: string]: string; } = {};

    transporter.set('oauth2_provision_cb', (user, renew, callback) => {
        const accessToken = userTokens[user];
        if (!accessToken) {
            callback(new Error('Unknown user'));
        } else {
            callback(null, accessToken);
        }
    });
}

// Set up 3LO authentication

function oauth2_3lo_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'user@example.com',
            clientId: '000000000000-xxx0.apps.googleusercontent.com',
            clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
            refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
            accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
            expires: 1484314697598
        }
    });
}

// Set up 2LO authentication

function oauth2_2lo_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'user@example.com',
            serviceClient: '113600000000000000000',
            privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...',
            accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
            expires: 1484314697598
        }
    });
}

// Provide authentication details with message options

function oauth2_message_options_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            clientId: '000000000000-xxx.apps.googleusercontent.com',
            clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0'
        }
    });

    const auth: SMTPConnection.AuthenticationTypeOAuth2 = {
        user: 'user@example.com',
        refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
        accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
        expires: 1484314697598
    };

    const options: SMTPTransport.MailOptions = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets through!',
        auth: {
            user: 'user@example.com',
            refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
            accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
            expires: 1484314697598
        }
    };

    transporter.sendMail(options);
}

function oauth2_privision_cb_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2'
        }
    });

    const userTokens: { [key: string]: string; } = {};

    transporter.set('oauth2_provision_cb', (user, renew, callback) => {
        const accessToken = userTokens[user];
        if (!accessToken) {
            callback(new Error('Unknown user'));
        } else {
            callback(null, accessToken);
        }
    });

    const options: SMTPTransport.MailOptions = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets through!',
        auth: {
            user: 'user@example.com'
        }
    };

    transporter.sendMail(options);
}

// 5. Sendmail transport

// Send a message using specific binary

function sendmail_test() {
    const transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
    });
    transporter.sendMail({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets delivered!'
    }, (err, info: SendmailTransport.SentMessageInfo) => {
        if (!err) {
            console.log(info.envelope);
            console.log(info.messageId);
        }
    });
}

// line ending transforms using windows-style newlines

function sendmail_line_endings_windows_test() {
    function process_le(mail: MailMessage) {
        const input = mail.message.createReadStream();
        input.pipe(new LeWindows());
    }
}

// line ending transforms using unix-style newlines

function sendmail_line_endings_unix_test() {
    function process_le(mail: MailMessage) {
        const input = mail.message.createReadStream();
        input.pipe(new LeUnix());
    }
}

// 5. SES transport

// Send a message using SES transport

function ses_test() {
    // configure AWS SDK
    aws.config.loadFromPath('config.json');

    // create Nodemailer SES transporter
    const transporter = nodemailer.createTransport({
        SES: new aws.SES({
            apiVersion: '2010-12-01'
        })
    });

    const options: SESTransport.MailOptions = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets sent!',
        ses: { // optional extra arguments for SendRawEmail
            Tags: [{
                Name: 'tag name',
                Value: 'tag value'
            }]
        }
    };

    // send some mail
    transporter.sendMail(options, (err, info: SESTransport.SentMessageInfo) => {
        if (!err) {
            console.log(info.envelope);
            console.log(info.messageId);
        }
    });
}

// 5. Stream transport

// Stream a message with windows-style newlines

function stream_test() {
    const transporter = nodemailer.createTransport({
        streamTransport: true,
        newline: 'windows'
    });
    transporter.sendMail({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets streamed!'
    }, (err, info: StreamTransport.SentMessageInfo) => {
        if (!err) {
            console.log(info.envelope);
            console.log(info.messageId);
            // if ('pipe' in info.message) {
            if (info.message instanceof stream.Readable) {
                info.message.pipe(process.stdout);
            }
        }
    });
}

// Create a buffer with unix-style newlines

function stream_buffer_unix_newlines_test() {
    const transporter = nodemailer.createTransport({
        streamTransport: true,
        newline: 'unix',
        buffer: true,
        normalizeHeaderKey: (key) => key.toUpperCase()
    });
    transporter.sendMail({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets buffered!'
    }, (err, info: StreamTransport.SentMessageInfo) => {
        if (!err) {
            console.log(info.envelope);
            console.log(info.messageId);
            console.log(info.message.toString());
        }
    });
}

// Create a JSON encoded message object

function json_test() {
    const transporter = nodemailer.createTransport({
        jsonTransport: true,
        skipEncoding: true
    });
    transporter.sendMail({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets buffered!'
    }, (err, info: JSONTransport.SentMessageInfo) => {
        if (!err) {
            console.log(info.envelope);
            console.log(info.messageId);
            console.log(info.message); // JSON string
        }
    });
}

// 6. Create plugins

// 'compile'

function plugin_compile_test() {
    const transporter = nodemailer.createTransport();

    function plugin(mail: typeof transporter.MailMessage, callback: (err?: Error | null) => void) {
        // if mail.data.html is a file or an url, it is returned as a Buffer
        mail.resolveContent(mail.data, 'html', (err, html) => {
            if (err) {
                callback(err);
                return;
            }
            console.log('HTML contents: %s', html.toString());
            callback();
        });
    }

    transporter.use('compile', (mail, callback) => {
        if (!mail.data.text && mail.data.html && typeof mail.data.html === 'string') {
            mail.data.text = mail.data.html.replace(/<[^>]*>/g, ' ');
        }
        callback();
    });
}

// 'stream'

function plugin_stream_test() {
    const transformer: stream.Transform = new (require('stream').Transform)();

    transformer._transform = function(chunk: Buffer, encoding, done) {
        // replace all tabs with spaces in the stream chunk
        for (let i = 0; i < chunk.length; i++) {
            if (chunk[i] === 0x09) {
                chunk[i] = 0x20;
            }
        }
        this.push(chunk);
        done();
    };

    const transporter = nodemailer.createTransport();

    transporter.use('stream', (mail, callback) => {
        // apply output transformer to the raw message stream
        mail.message.transform(transformer);
        callback();
    });

    transporter.use('stream', (mail, callback) => {
        const addresses = mail.message.getAddresses();
        console.log('From: %s', JSON.stringify(addresses.from));
        console.log('To: %s', JSON.stringify(addresses.to));
        console.log('Cc: %s', JSON.stringify(addresses.cc));
        console.log('Bcc: %s', JSON.stringify(addresses.bcc));
        callback();
    });
}

// Transport Example

function plugin_transport_example_test() {
    interface MailOptions extends Mail.Options {
        mailOption?: 'foo';
    }
    interface Options extends MailOptions, nodemailer.TransportOptions {
        transportOptions: 'bar';
    }
    interface SentMessageInfo {
        SentMessageInfo: 'baz';
    }

    class Transport implements nodemailer.Transport {
        name = 'minimal';
        version = '0.1.0';
        constructor(options: Options) { }
        send(mail: MailMessage, callback: (err: Error | null, info: SentMessageInfo) => void): void {
            const input = mail.message.createReadStream();
            input.pipe(process.stdout);
            input.on('end', () => {
                callback(null, { SentMessageInfo: 'baz' });
            });
        }
    }

    const transporter = nodemailer.createTransport(new Transport({
        transportOptions: 'bar'
    }));

    const options: MailOptions = {
        from: 'sender',
        to: 'receiver',
        subject: 'hello',
        text: 'hello world!',
        mailOption: 'foo'
    };

    transporter.sendMail(options);
}

// 7. https://nodemailer.com/dkim/

// Sign all messages

function dkim_sign_all_test() {
    const opts: SMTPTransport.Options = {
        host: 'smtp.example.com',
        port: 465,
        secure: true,
        dkim: {
            domainName: 'example.com',
            keySelector: '2017',
            privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...'
        }
    };
}

// Sign all messages with multiple keys

function dkim_sign_multiple_keys_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 465,
        secure: true,
        dkim: {
            keys: [
                {
                    domainName: 'example.com',
                    keySelector: '2017',
                    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...'
                },
                {
                    domainName: 'example.com',
                    keySelector: '2016',
                    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...'
                }
            ],
            cacheDir: false
        }
    });
}

// Sign a specific message

function dkim_sign_specific_message_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 465,
        secure: true
    });
    const message: Mail.Options = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets read!',
        dkim: {
            domainName: 'example.com',
            keySelector: '2017',
            privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...'
        }
    };
}

// Cache large messages for signing

function dkim_cache_large_messages_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 465,
        secure: true,
        dkim: {
            domainName: 'example.com',
            keySelector: '2017',
            privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...',
            cacheDir: '/tmp',
            cacheTreshold: 100 * 1024
        }
    });
}

// Do not sign specific header keys

function dkim_specific_header_key_test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 465,
        secure: true,
        dkim: {
            domainName: 'example.com',
            keySelector: '2017',
            privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...',
            skipFields: 'message-id:date'
        }
    });
}

// 8. SMTP Connection

// SMTP Connection

function smtp_connection_test() {
    const connection = new SMTPConnection();
    connection.connect((err) => {
        if (err) throw err;
        connection.login({ user: 'user', pass: 'pass' }, (err) => {
            if (err) throw err;
            connection.send({ from: 'a@example.com', to: 'b@example.net' }, 'message', (err, info) => {
                if (err) {
                    const code: string = err.code || '???';
                    const response: string = err.response || '???';
                    const responseCode: number = err.responseCode || 0;
                    const command: string = err.command || '???';
                    throw err;
                }
                connection.reset(() => {
                    if (err) throw err;
                    connection.quit();
                    connection.close();
                });
            });
        });
    });
}

// Mailcomposer

// createReadStream

function mailcomposer_createReadStream_test() {
    const mail = new MailComposer({ from: '...' });
    const stream = mail.compile().createReadStream();
    stream.pipe(process.stdout);
}

// build

function mailcomposer_build_test() {
    const mail = new MailComposer({ from: '...' });
    mail.compile().build((err, message) => {
        process.stdout.write(message);
    });
}

// addressparser

function addressparser_test() {
    const input = 'andris@tr.ee';
    const result = addressparser(input);
    const address: string = result[0].address;
    const name: string = result[0].name;
}

// base64

function base64_test() {
    base64.encode('abcd= ÕÄÖÜ');

    base64.encode(new Buffer([0x00, 0x01, 0x02, 0x20, 0x03]));
}

// fetch

function fetch_test() {
    const stream = fetch('http://localhost/');

    const statusCode: number = stream.statusCode;
    const headers = stream.headers;
    const contentType: string | undefined = headers['content-type'];

    fetch('http://localhost:/', {
        allowErrorResponse: true,
        method: 'post',
        cookie: 'test=pest',
        body: {
            hello: 'world 😭',
            another: 'value'
        },
        timeout: 1000,
        tls: {
            rejectUnauthorized: true
        }
    });
}

// fetch/cookies

function fetch_cookies_test() {
    const biskviit = new Cookies();

    biskviit.getPath('/');

    biskviit.isExpired({
        name: 'a',
        value: 'b',
        expires: new Date(Date.now() + 10000)
    });

    biskviit.compare(
        {
            name: 'zzz',
            path: '/',
            domain: 'example.com',
            secure: false,
            httponly: false
        },
        {
            name: 'zzz',
            path: '/',
            domain: 'example.com',
            secure: false,
            httponly: false
        }
    );

    biskviit.add({
        name: 'zzz',
        value: 'abc',
        path: '/',
        expires: new Date(Date.now() + 10000),
        domain: 'example.com',
        secure: false,
        httponly: false
    });

    const cookie = {
        name: 'zzz',
        value: 'abc',
        path: '/def/',
        expires: new Date(Date.now() + 10000),
        domain: 'example.com',
        secure: false,
        httponly: false
    };

    biskviit.match(cookie, 'http://example.com/def/');

    biskviit.parse('theme=plain');

    biskviit.list('https://www.foo.com');

    biskviit.get('https://www.foo.com');

    biskviit.set('theme=plain', 'https://foo.com/');
}

// mime-funcs

function mime_funcs_test() {
    mimeFuncs.isPlainText('abc');

    mimeFuncs.hasLongerLines('abc\ndef', 5);

    mimeFuncs.encodeWord('See on õhin test');
    mimeFuncs.encodeWord('See on õhin test', 'B');
    mimeFuncs.encodeWords('метель" вьюга', 'Q', 52);
    mimeFuncs.encodeWords('Jõgeva Jõgeva Jõgeva mugeva Jõgeva Jõgeva Jõgeva Jõgeva Jõgeva', 'Q', 16);
    mimeFuncs.encodeWords('õõõõõ õõõõõ õõõõõ mugeva õõõõõ õõõõõ õõõõõ õõõõõ Jõgeva', 'B', 30);

    mimeFuncs.buildHeaderParam('title', 'this is just a title', 500);

    const parsedHeader = mimeFuncs.parseHeaderValue('content-disposition: attachment; filename=filename');
    console.log(parsedHeader.params.filename);

    mimeFuncs.buildHeaderValue({
        value: 'test'
    });

    mimeFuncs.buildHeaderValue({
        value: 'test',
        params: {
            a: 'b'
        }
    });

    mimeFuncs.foldLines('Testin command line', 76, true);
    mimeFuncs.foldLines('Testin command line', 76);
}

// mime-node

function mime_node_test() {
    const mb = new MimeNode('text/plain', {
        normalizeHeaderKey: (key) => key.toUpperCase()
    });

    const child = mb.createChild('multipart/mixed');
    mb.appendChild(child);
    child.replace(child);

    mb.setHeader('key', 'value');
    const value: string = mb.getHeader('key');

    mb.addHeader({
        key: 'value4',
        key2: 'value5'
    });

    mb.setHeader([
        {
            key: 'key',
            value: 'value2'
        },
        {
            key: 'key2',
            value: 'value3'
        }
    ]);

    mb.setHeader('key', ['value1', 'value2', 'value3']);

    mb.setContent('abc');

    mb.build((err, msg) => {
        const msgAsString: string = msg.toString();
    });

    mb.processFunc((input) => {
        const isReadable: boolean = input.readable;
        return input;
    });
}

// mime-types

function mime_types_test() {
    mimeTypes.detectExtension(false);
    mimeTypes.detectExtension('unknown');

    mimeTypes.detectMimeType(false);
    mimeTypes.detectMimeType('unknown');
}

// qp

function qp_test() {
    qp.encode('abcd= ÕÄÖÜ');

    qp.encode(new Buffer([0x00, 0x01, 0x02, 0x20, 0x03]));
}

// shared

function shared_getLogger_test() {
    shared.getLogger({
        logger: false
    });

    shared.getLogger();

    const options = shared.parseConnectionUrl('smtps://user:pass@localhost:123?tls.rejectUnauthorized=false&name=horizon');
    console.log(options.secure, options.auth!.user, options.tls!.rejectUnauthorized);
}

function shared_resolveContent_string_test() {
    const mail = {
        data: {
            html: '<p>Tere, tere</p><p>vana kere!</p>\n'
        }
    };

    shared.resolveContent(mail.data, 'html', (err, value) => {
        if (!err) {
            console.log(value);
        }
    });

    shared.resolveContent(mail.data, 'html').then((value) => console.log(value));
}

function shared_resolveContent_buffer_test() {
    const mail = {
        data: {
            html: new Buffer('<p>Tere, tere</p><p>vana kere!</p>\n')
        }
    };

    shared.resolveContent(mail.data, 'html', (err, value) => {
        if (!err) {
            console.log(value);
        }
    });

    shared.resolveContent(mail.data, 'html').then((value) => console.log(value));
}

function shared_assign_test() {
    const target = {
        a: 1,
        b: 2,
        c: 3
    };
    const arg1 = {
        b: 5,
        y: 66,
        e: 33
    };

    const arg2 = {
        y: 17,
        qq: 98
    };

    shared.assign(target, arg1, arg2);
}

function shared_encodeXText_test() {
    shared.encodeXText('teretere');
}

// well-known

function well_known_test() {
    const options = wellKnown('Gmail');
    if (options) {
        console.log(options.host, options.port, options.secure);
    }
}
