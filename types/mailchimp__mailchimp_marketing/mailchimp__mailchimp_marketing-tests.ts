import mailchimp = require('@mailchimp/mailchimp_marketing');

// void;
mailchimp.setConfig({
    apiKey: 'test',
    accessToken: 'test',
    server: 'test',
});

const setListMemberBody = {
    email_address: 'test',
    status_if_new: 'subscribed' as const,
};

const addListMemberBody = {
    email_address: 'test',
};

const updateListMemberBody = {
    email_address: 'test',
};

const updateListMemberTagsBody = {
    tags: [
        {
            name: 'test',
            status: 'active',
        },
        {
            name: 'test2',
            status: 'inactive',
        },
    ],
};

// Promise<void>
mailchimp.lists.setListMember('test', 'test', setListMemberBody);

// Promise<void>
mailchimp.lists.getListMember('test', 'test');

// Promise<void>
mailchimp.lists.addListMember('test', addListMemberBody);

// Promise<void>
mailchimp.lists.updateListMember('test', 'test', updateListMemberBody);

// Promise<void>
mailchimp.lists.deleteListMemberPermanent('test', 'test');

// Promise<void>
mailchimp.lists.updateListMemberTags('test', 'test', updateListMemberTagsBody);
