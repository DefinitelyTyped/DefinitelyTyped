import EmailTemplates = require('email-templates');

const EmailTemplate = EmailTemplates.EmailTemplate;
const template = new EmailTemplate("./");
const templateWithOptions = new EmailTemplate('./', {disableJuice: true, sassOptions: {}, juiceOptions: {}});
const users = [
    {
        email: 'pappa.pizza@spaghetti.com',
        name: {
            first: 'Pappa',
            last: 'Pizza'
        }
    },
    {
        email: 'mister.geppetto@spaghetti.com',
        name: {
            first: 'Mister',
            last: 'Geppetto'
        }
    }
];

const templates = users.map((user) => {
    return template.render(user)
        .then((results) => {
            const {html, subject, text} = results;
            return html;
        });
});
