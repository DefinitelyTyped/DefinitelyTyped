import EmailTemplates = require('email-templates');
import { createTransport } from 'nodemailer';

const email = new EmailTemplates({
    message: {
      from: 'Test@testing.com'
    },
    transport: {
        jsonTransport: true
    }
});

const emailNoTransporter = new EmailTemplates({
    message: {
      from: 'test@testing.com'
    },
});

email.juiceResources('<p>bob</p><style>div{color:red;}</style><div/>');
email.render('mars/html.pug');
email.render('mars/html.pug', {name: 'elon'});
const sendPromise: Promise<any> = email.send({template: 'mars', message: {to: 'elon@spacex.com'}, locals: {name: 'Elon'}});
emailNoTransporter.render('mars/html.pug', {name: 'elon'});

interface Locals {
    firstName: string;
}

const withTransportInstance = new EmailTemplates<Locals>({
    message: {
        from: 'definitelytyped@example.org'
    },
    transport: createTransport({
        jsonTransport: true
    })
});

withTransportInstance.render('tmpl', { firstName: 'TypeScript' });

withTransportInstance.send({
    template: 'tmpl',
    locals: {
        firstName: 'TypeScript'
    },
    message: {
        to: 'recipient@example.org',
        attachments: [{
            filename: 'hello.txt',
            content: 'an attachment'
        }]
    }
});

email.renderAll('mars');
const promise = email.renderAll('mars', {name: 'elon'});
promise.then(value => {
    const subject: string | undefined = value.subject;
    const html: string | undefined = value.html;
    const text: string | undefined = value.text;
});
