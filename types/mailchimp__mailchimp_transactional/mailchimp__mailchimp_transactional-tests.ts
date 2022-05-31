import instance = require('@mailchimp/mailchimp_transactional');

// ApiClient
const mailchimp = instance('my_api_key');

// void
mailchimp.setDefaultOutputFormat('json');

// Promise<MailchimpTransactional.SendMessageResponse | Error>
mailchimp.messages.send({
    message: {
        to: [
            { name: 'John Doe', email: 'johndoe@example.com', type: 'to' },
            { email: 'johndoe@example.com', type: 'to' },
        ],
    },
});

// Promise<MailchimpTransactional.SendTemplateMessageResponse | Error>
mailchimp.messages.sendTemplate({
    template_name: 'my-template-slug',
    template_content: [],
    message: {
        to: [{ name: 'John Doe', email: 'johndoe@example.com', type: 'to' }],
    },
});

export default mailchimp;
