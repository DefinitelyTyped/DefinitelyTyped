import EmailTemplates = require('email-templates');

var EmailTemplate = EmailTemplates.EmailTemplate;
var template = new EmailTemplate("./");
var templateWithOptions = new EmailTemplate('./', {sassOptions: {}, juiceOptions: {}});
var users = [
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
]

var templates = users.map(function(user) {
    return template.render(user);
})
