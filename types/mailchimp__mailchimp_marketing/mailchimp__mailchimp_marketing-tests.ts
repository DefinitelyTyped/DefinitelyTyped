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
    status: 'subscribed' as const,
    merge_fields: undefined,
    interests: {property1: true},
    language: "language",
    vip: true,
    location: { latitude: 123, logitude: 123},
    marketing_permissions: [
        {
          marketing_permission_id: "string",
          text: "string",
          enabled: true
        }
    ],
    ip_signup: "192.0.2.1",
    timestamp_signup: "YYYY-MM-DD",
    ip_opt: "192.0.2.1",
    timestamp_opt: "YYYY-MM-DD"
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

// Promise<MembersSuccessResponse | MemberErrorResponse>
mailchimp.lists.setListMember('test', 'test', setListMemberBody);

// Promise<MembersSuccessResponse | MemberErrorResponse>
mailchimp.lists.getListMember('test', 'test');

// Promise<MembersSuccessResponse | MemberErrorResponse>
mailchimp.lists.addListMember('test', addListMemberBody);

// Promise<MembersSuccessResponse | MemberErrorResponse>
mailchimp.lists.updateListMember('test', 'test', updateListMemberBody);

// Promise<void>
mailchimp.lists.deleteListMemberPermanent('test', 'test');

// Promise<void>
mailchimp.lists.deleteListMember('test', 'test');

// Promise<void>
mailchimp.lists.updateListMemberTags('test', 'test', updateListMemberTagsBody);
