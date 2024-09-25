import mailchimp = require("@mailchimp/mailchimp_marketing");

// $ExpectType void;
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

// $ExpectType Promise<SearchMembersSuccessResponse | ErrorResponse>
mailchimp.searchMembers.search("test");

// $ExpectType Promise<BatchListMembersResponse | ErrorResponse>
mailchimp.lists.batchListMembers("test", batchListMembersBody, batchListMembersOpts);

// $ExpectType Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.setListMember("test", "test", setListMemberBody);

// $ExpectType Promise<ListMembersInfoSuccessResponse | ErrorResponse>
mailchimp.lists.getListMembersInfo("test");

// $ExpectType Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.getListMember("test", "test");

// $ExpectType Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.addListMember("test", addListMemberBody);

// $ExpectType Promise<MembersSuccessResponse | ErrorResponse>
mailchimp.lists.updateListMember("test", "test", updateListMemberBody);

// $ExpectType Promise<{} | ErrorResponse>
mailchimp.lists.deleteListMemberPermanent("test", "test");

// $ExpectType Promise<{} | ErrorResponse>
mailchimp.lists.deleteListMember("test", "test");

// $ExpectType Promise<{} | ErrorResponse>
mailchimp.lists.updateListMemberTags("test", "test", updateListMemberTagsBody);

// $ExpectType Promise<ListMemberTagsResponse | ErrorResponse>
mailchimp.lists.getListMemberTags("test", "test", listMemberTagsOptions);

// $ExpectType Promise<ListsSuccessResponse | ErrorResponse>
mailchimp.lists.getAllLists(getAllListsBody);

// $ExpectType Promise<MergeFieldSuccessResponse | ErrorResponse>
mailchimp.lists.getListMergeFields("test", getListMergeFieldsBody);

mailchimp.lists.createListMemberEvent("test", "test", createListMemberBody);

// $ExpectType Promise<GetListInterestCategoriesResponse | ErrorResponse>
mailchimp.lists.getListInterestCategories("test");

// $ExpectType Promise<ListInterestCategoryInterestsResponse | ErrorResponse>
mailchimp.lists.listInterestCategoryInterests("test", "test");

// $ExpectType Promise<CampaignsSuccessResponse | ErrorResponse>
mailchimp.campaigns.list(listCampaignsOpts);

// $ExpectType Promise<CampaignContentSuccessResponse | ErrorResponse>
mailchimp.campaigns.getContent("test", getContentOpts);

// $ExpectType Promise<null | ErrorResponse>
mailchimp.customerJourneys.trigger(123, 123, triggerCustomerJourneyBody);

// $ExpectType Promise<CampaignFoldersSuccessResponse | ErrorResponse>
mailchimp.campaignFolders.list();

// $ExpectType Promise<ErrorResponse | CampaignFolder>
mailchimp.campaignFolders.create({ name: "test" });

// $ExpectType Promise<ErrorResponse | CampaignFolder>
mailchimp.campaignFolders.get("0");

// $ExpectType Promise<ErrorResponse | CampaignFolder>
mailchimp.campaignFolders.update("0", { name: "test" });

// $ExpectType Promise<{} | ErrorResponse>
mailchimp.campaignFolders.remove("0");

// $ExpectType Promise<{} | ErrorResponse>
mailchimp.campaigns.send("0");

// $ExpectType Promise<SendChecklist | ErrorResponse>
mailchimp.campaigns.getSendChecklist("0");

// $ExpectType Promise<CampaignContentSuccessResponse | ErrorResponse>
mailchimp.campaigns.setContent("0", { html: "test" });

// $ExpectType Promise<Campaigns | ErrorResponse>
mailchimp.campaigns.create({ type: "regular" });
