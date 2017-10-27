import * as Email from 'email-templates';

const email = new Email.EmailTemplate({
    message: {
    from: 'Test@tesitng.com'
    },
    transport: {
        jsonTransport: true
    }}
);

email.juiceResources('<p>bob</p><style>div{color:red;}</style><div/>');
email.render('mars/html.pug', {name: 'elon'});
email.send({template: 'mars', message: {to: 'elon@spacex.com'}, locals: {name: 'Elon'}});
