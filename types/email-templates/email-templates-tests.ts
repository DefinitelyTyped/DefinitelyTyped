import EmailTemplates = require('email-templates');

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
email.renderAll('mars');
const resultPromise: Promise<EmailTemplates.EmailMessage> = email.renderAll('mars', {name: 'elon'});
resultPromise.then(message => {
    const subject: string = message.subject;
    const html: string = message.html;
    const text: string = message.text;
});
