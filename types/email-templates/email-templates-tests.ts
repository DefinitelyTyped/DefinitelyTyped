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
email.render('mars/html.pug', {name: 'elon'});
email.send({template: 'mars', message: {to: 'elon@spacex.com'}, locals: {name: 'Elon'}});
emailNoTransporter.render('mars/html.pug', {name: 'elon'});
