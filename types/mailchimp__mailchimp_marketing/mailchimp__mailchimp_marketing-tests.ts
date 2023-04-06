import mailchimp = require('@mailchimp/mailchimp_marketing');

// void;
mailchimp.setConfig({
    apiKey: 'test',
    accessToken: 'test',
    server: 'test',
});

const setListMemberBody: mailchimp.lists.SetListMemberBody = {
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
          enabled: true
        }
    ],
    ip_signup: "192.0.2.1",
    timestamp_signup: "YYYY-MM-DD",
    ip_opt: "192.0.2.1",
    timestamp_opt: "YYYY-MM-DD"
};

const addListMemberBody: mailchimp.lists.AddListMemberBody = {
    email_address: 'test',
};

const updateListMemberBody: mailchimp.lists.UpdateListMemberBody = {
    email_address: 'test',
};

const updateListMemberTagsBody: mailchimp.lists.MemberTagsBody = {
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

const getAllListsBody: mailchimp.lists.ListOptions = {
    fields: ['strings'],
    excludeFields: ['strings'],
    count: 0,
    offset: 0,
    beforeDateCreated: 'string',
    sinceDateCreated: 'string',
    beforeCampaignLastSent: 'string',
    sinceCampaignLastSent: 'string',
    email: 'string',
    sortField: 'string',
    sortDir: 'string',
    hasEcommerceStore: false,
    includeTotalContacts: false
};

const getListMergeFieldsBody: mailchimp.lists.ListOptions = {
    fields: ['strings'],
    excludeFields: ['strings'],
    count: 0,
    offset: 0,
    type: 'text',
    required: true
};

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.setListMember('test', 'test', setListMemberBody);

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.getListMember('test', 'test');

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.addListMember('test', addListMemberBody);

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.updateListMember('test', 'test', updateListMemberBody);

// Promise<{} | ErrorResponse>
mailchimp.lists.deleteListMemberPermanent('test', 'test');

// Promise<{} | ErrorResponse>
mailchimp.lists.deleteListMember('test', 'test');

// Promise<{} | ErrorResponse>
mailchimp.lists.updateListMemberTags('test', 'test', updateListMemberTagsBody);

// Promise<ListsSuccessResponse | ErrorResponse>
mailchimp.lists.getAllLists(getAllListsBody);

// Promise<MergeFieldSuccessResponse | ErrorResponse>
mailchimp.lists.getListMergeFields('test', getListMergeFieldsBody);
