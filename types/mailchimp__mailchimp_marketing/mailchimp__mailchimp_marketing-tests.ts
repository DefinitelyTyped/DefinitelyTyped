import mailchimp = require("@mailchimp/mailchimp_marketing");

// void;
mailchimp.setConfig({
    apiKey: "test",
    accessToken: "test",
    server: "test",
});

const batchListMembersBody: mailchimp.lists.BatchListMembersBody = {
    sync_tags: true,
    update_existing: true,
    members: [
        {
            email_address: "test@email.com",
            email_type: "html",
            status: "subscribed",
            vip: true,
            location: {
                latitude: 34,
                longtitude: 45,
            },
            tags: ["one", "two", "three"],
            ip_opt: "test",
            timestamp_opt: "timestamp",
            language: "lang",
            merge_fields: { test: "value", key: "value" },
            timestamp_signup: "timestamp",
            ip_signup: "test",
        },
    ],
};

const batchListMembersOpts: mailchimp.lists.BatchListMembersOpts = {
    skipDuplicateCheck: true,
    skipMergeValidation: true,
};

const setListMemberBody: mailchimp.lists.SetListMemberBody = {
    email_address: "test",
    status_if_new: "subscribed" as const,
    status: "subscribed" as const,
    merge_fields: undefined,
    interests: { property1: true },
    language: "language",
    vip: true,
    location: { latitude: 123, longitude: 123 },
    marketing_permissions: [
        {
            marketing_permission_id: "string",
            enabled: true,
        },
    ],
    ip_signup: "192.0.2.1",
    timestamp_signup: "YYYY-MM-DD",
    ip_opt: "192.0.2.1",
    timestamp_opt: "YYYY-MM-DD",
};

const addListMemberBody: mailchimp.lists.AddListMemberBody = {
    email_address: "test",
};

const updateListMemberBody: mailchimp.lists.UpdateListMemberBody = {
    email_address: "test",
};

const updateListMemberTagsBody: mailchimp.lists.MemberTagsBody = {
    tags: [
        {
            name: "test",
            status: "active",
        },
        {
            name: "test2",
            status: "inactive",
        },
    ],
};

const listMemberTagsOptions: mailchimp.lists.ListMemberTagsOptions = {
    fields: ["strings"],
    excludeFields: ["strings"],
    count: 0,
    offset: 0,
};

const getAllListsBody: mailchimp.lists.ListOptions = {
    fields: ["strings"],
    excludeFields: ["strings"],
    count: 0,
    offset: 0,
    beforeDateCreated: "string",
    sinceDateCreated: "string",
    beforeCampaignLastSent: "string",
    sinceCampaignLastSent: "string",
    email: "string",
    sortField: "string",
    sortDir: "string",
    hasEcommerceStore: false,
    includeTotalContacts: false,
};

const getListMergeFieldsBody: mailchimp.lists.ListOptions = {
    fields: ["strings"],
    excludeFields: ["strings"],
    count: 0,
    offset: 0,
    type: "text",
    required: true,
};

const createListMemberBody: mailchimp.lists.CreateListMemberEventBody = {
    name: "test",
    properties: {
        key: "value",
    },
    is_syncing: true,
    occurred_at: "YYYY-MM-DD",
};

const listCampaignsOpts: mailchimp.campaigns.CampaignsOptions = {
    fields: ["test", "test"],
    excludeFields: ["test", "test"],
    count: 10,
    offset: 0,
    type: "regular",
    status: "sent",
    beforeSendTime: "YYYY-MM-DDTHH:MM:SSZ",
    sinceSendTime: "YYYY-MM-DDTHH:MM:SSZ",
    beforeCreateTime: "YYYY-MM-DDTHH:MM:SSZ",
    sinceCreateTime: "YYYY-MM-DDTHH:MM:SSZ",
    listId: "test",
    folderId: "test",
    memberId: "test",
    sortField: "create_time",
    sortDir: "asc",
};

const getContentOpts: mailchimp.campaigns.GetCampaignContentOptions = {
    fields: ["test", "test"],
    excludeFields: ["test", "test"],
};

const triggerCustomerJourneyBody: mailchimp.customerJourneys.TriggerCustomerJourneyBody = {
    email_address: "test@email.com",
};

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.batchListMembers("test", batchListMembersBody, batchListMembersOpts);

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.setListMember("test", "test", setListMemberBody);

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.getListMember("test", "test");

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.addListMember("test", addListMemberBody);

// Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.updateListMember("test", "test", updateListMemberBody);

// Promise<{} | ErrorResponse>
mailchimp.lists.deleteListMemberPermanent("test", "test");

// Promise<{} | ErrorResponse>
mailchimp.lists.deleteListMember("test", "test");

// Promise<{} | ErrorResponse>
mailchimp.lists.updateListMemberTags("test", "test", updateListMemberTagsBody);

// Promise<ListMemberTagsResponse | ErrorResponse>
mailchimp.lists.getListMemberTags("test", "test", listMemberTagsOptions);

// Promise<ListsSuccessResponse | ErrorResponse>
mailchimp.lists.getAllLists(getAllListsBody);

// Promise<MergeFieldSuccessResponse | ErrorResponse>
mailchimp.lists.getListMergeFields("test", getListMergeFieldsBody);

mailchimp.lists.createListMemberEvent("test", "test", createListMemberBody);

// Promise<GetListInterestCategoriesResponse | ErrorResponse>
mailchimp.lists.getListInterestCategories("test");

// Promise<ListInterestCategoryInterestsResponse | ErrorResponse>
mailchimp.lists.listInterestCategoryInterests("test", "test");

// Promise<CampaignsSuccessResponse | ErrorResponse>
mailchimp.campaigns.list(listCampaignsOpts);

// Promise<CampaignContentSuccessResponse | ErrorResponse>
mailchimp.campaigns.getContent("test", getContentOpts);

// Promise<null | ErrorResponse>
mailchimp.customerJourneys.trigger(123, 123, triggerCustomerJourneyBody);
