import mailchimp = require('@mailchimp/mailchimp_marketing');
import { status } from 'mailchimp__mailchimp_marketing';

// void;
mailchimp.setConfig({
    apiKey: 'test',
    accessToken: 'test',
    server: 'test',
});

const memberBody = {
    email_address: 'test',
    status_if_new: status.subscribed,
};

// Promise<void>
mailchimp.lists.setListMember('test', 'test', memberBody);

// Promise<void>
mailchimp.lists.getListMember('test', 'test');
