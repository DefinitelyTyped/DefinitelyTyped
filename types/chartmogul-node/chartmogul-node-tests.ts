import * as ChartMogul from "chartmogul-node";

const config = new ChartMogul.Config("token", "baseURL");
config.retries = 10;
config.getAccountToken(); // $ExpectType string
config.VERSION; // $ExpectType string

ChartMogul.Ping.ping(config); // $ExpectType Promise<string>

// $ExpectType Promise<Account>
ChartMogul.Account.retrieve(config);

// $ExpectType Promise<Account>
ChartMogul.Account.retrieve(config, {
    include: "refund_handling",
});

// $ExpectType Promise<Account>
ChartMogul.Account.retrieve(config, {
    include: "churn_recognition,churn_when_zero_mrr",
});

// $ExpectType Promise<Account>
ChartMogul.Account.retrieve(config, {
    include:
        "churn_recognition,churn_when_zero_mrr,auto_churn_subscription,refund_handling,proximate_movement_reclassification",
});

// $ExpectType Promise<DataSource>
ChartMogul.DataSource.create(config, {
    name: "",
});

// $ExpectType Promise<DataSource>
ChartMogul.DataSource.create(config, {
    name: "In-house billing",
});

// $ExpectType Promise<DataSource>
ChartMogul.DataSource.retrieve(config, "");

// $ExpectType Promise<DataSource>
ChartMogul.DataSource.retrieve(config, "", {
    with_processing_status: true,
    with_auto_churn_subscription_setting: true,
    with_invoice_handling_setting: true,
});

// $ExpectType Promise<{}>
ChartMogul.DataSource.destroy(config, "");

// $ExpectType Promise<DataSources>
ChartMogul.DataSource.all(config, {
    name: "",
});

// $ExpectType Promise<DataSources>
ChartMogul.DataSource.all(config, {
    name: "",
    system: "",
    with_processing_status: true,
    with_auto_churn_subscription_setting: true,
    with_invoice_handling_setting: true,
});

// $ExpectType Promise<Customer>
ChartMogul.Customer.create(config, {
    data_source_uuid: "",
    external_id: "",
    name: "",
    email: "test@example.com",
    company: "Test Company",
    country: "US",
    state: "US-NY",
    city: "New York",
    zip: "10001",
    lead_created_at: "2022-10-14 00:00:00",
    free_trial_started_at: "2022-11-01 00:00:00",
    owner: "owner@example.com",
    website_url: "https://example.com",
    attributes: {
        tags: ["important", "Prio1"],
        custom: [
            { type: "String", key: "channel", value: "Facebook", source: "integration" },
            { type: "Integer", key: "age", value: 18 },
        ],
    },
    primary_contact: {
        first_name: "John",
        last_name: "Doe",
        email: "john@example.com",
        title: "CEO",
        phone: "+1234567890",
        linked_in: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        notes: "Primary contact notes",
    },
});

// $ExpectType Promise<Customer>
ChartMogul.Customer.create(config, {
    data_source_uuid: "",
    external_id: "",
});

// $ExpectType Promise<Customer>
ChartMogul.Customer.retrieve(config, "");

// $ExpectType Promise<Customer>
ChartMogul.Customer.modify(config, "", {});

// $ExpectType Promise<Customer>
ChartMogul.Customer.modify(config, "", {
    name: "Updated Name",
    email: "updated@example.com",
    company: "Updated Company",
    country: "US",
    state: "US-CA",
    city: "San Francisco",
    zip: "94102",
    lead_created_at: "2023-01-01 00:00:00",
    free_trial_started_at: "2023-06-13 15:45:13",
    owner: "newowner@example.com",
    website_url: "https://newsite.example.com",
    status: "Working Lead",
    attributes: {
        tags: ["high-value", "enterprise"],
        custom: {
            CAC: 25,
            channel: "Twitter",
            pro: true,
        },
    },
    primary_contact: {
        first_name: "Jane",
        last_name: "Smith",
        email: "jane@example.com",
        title: "CTO",
        phone: "+9876543210",
        linked_in: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        notes: "Updated contact",
    },
});

// $ExpectType Promise<ResourceDestroyed>
ChartMogul.Customer.destroy(config, "");

ChartMogul.Customer.destroy(config, "").then(data => {
    data.message; // $ExpectType string
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config);

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    data_source_uuid: "",
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    external_id: "",
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    status: "Active",
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    status: "Working Lead",
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    system: "Stripe",
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    cursor: "AjMx90kC0yMVQwNNwoYToyNC4wMDAwMDAwMDBgks68k",
    per_page: 50,
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    data_source_uuid: "ds_fef05d54-47b4-431b-aed2-eb6b9e545430",
    status: "Active",
    system: "Stripe",
    external_id: "34916129",
});

ChartMogul.Customer.all(config).then(data => {
    data.entries[0]; // $ExpectType Customer
    data.entries[0].attributes!.stripe!["something"]; // $ExpectType any
    data.cursor; // $ExpectType string | undefined
    data.has_more; // $ExpectType boolean | undefined
    data.page!; // $ExpectType number
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.search(config);

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.search(config, {
    email: "",
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.search(config, {
    email: "adam@example.com",
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.search(config, {
    email: "adam@example.com",
    cursor: "AjMx90kC0yMVQwNNwoYToyNC4wMDAwMDAwMDBgks68k",
    per_page: 50,
});

ChartMogul.Customer.search(config, { email: "adam@example.com" }).then(data => {
    data.entries[0]; // $ExpectType Customer
    data.cursor; // $ExpectType string | undefined
    data.has_more; // $ExpectType boolean | undefined
});

// $ExpectType Promise<{}>
ChartMogul.Customer.merge(config, {
    from: { customer_uuid: "cus_5915ee5a-babd-406b-b8ce-d207133fb4cb" },
    into: { customer_uuid: "cus_2123290f-09c8-4628-a205-db5596bd58f7" },
});

// $ExpectType Promise<{}>
ChartMogul.Customer.merge(config, {
    from: {
        data_source_uuid: "ds_ade45e52-47a4-231a-1ed2-eb6b9e541213",
        external_id: "cus_187544",
    },
    into: {
        data_source_uuid: "ds_fef05d54-47b4-431b-aed2-eb6b9e545430",
        external_id: "34916129",
    },
});

// $ExpectType Promise<{}>
ChartMogul.Customer.unmerge(config, {
    customer_uuid: "cus_cd9e5f29-6299-40e5-b343-0bd1ed228b4f",
});

// $ExpectType Promise<{}>
ChartMogul.Customer.unmerge(config, {
    data_source_uuid: "ds_788ec6ae-dd51-11ee-bd46-a3ec952dc041",
    external_id: "cus_O075O8NH0LrtG8",
});

// $ExpectType Promise<{}>
ChartMogul.Customer.unmerge(config, {
    customer_uuid: "cus_cd9e5f29-6299-40e5-b343-0bd1ed228b4f",
    move_to_new_customer: ["tasks", "opportunities", "notes"],
});

// $ExpectType Promise<{}>
ChartMogul.Customer.unmerge(config, {
    data_source_uuid: "ds_788ec6ae-dd51-11ee-bd46-a3ec952dc041",
    external_id: "cus_O075O8NH0LrtG8",
    move_to_new_customer: ["tasks", "opportunities", "notes"],
});

// $ExpectType Promise<Attributes>
ChartMogul.Customer.attributes(config, "");

// $ExpectType Promise<Attributes>
ChartMogul.Customer.attributes(config, "cus_de305d54-75b4-431b-adb2-eb6b9e546012");

ChartMogul.Customer.attributes(config, "cus_de305d54-75b4-431b-adb2-eb6b9e546012").then(data => {
    data.tags; // $ExpectType Strings | undefined
    data.stripe; // $ExpectType Map | undefined
    data.clearbit; // $ExpectType Map | undefined
    data.custom; // $ExpectType Map | undefined
    data.stripe!["uid"]; // $ExpectType any
    data.custom!["CAC"]; // $ExpectType any
});

// $ExpectType Promise<{}>
ChartMogul.Customer.connectSubscriptions(config, "customer-uuid", {
    subscriptions: [{ uuid: "sub-uuid", data_source_uuid: "ds-uuid" }],
});

// $ExpectType Promise<{}>
ChartMogul.Customer.disconnectSubscriptions(config, "customer-uuid", {
    subscriptions: [{ uuid: "sub-uuid" }],
});

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Customer.contacts(config, "");

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Customer.contacts(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0");

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Customer.contacts(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", {
    cursor: "aabbcc",
    per_page: 50,
});

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Customer.contacts(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", {
    email: "adam@example.com",
});

ChartMogul.Customer.contacts(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0").then(data => {
    data.entries[0]; // $ExpectType Contact
    data.entries[0].uuid; // $ExpectType string | undefined
    data.entries[0].customer_uuid; // $ExpectType string | undefined
    data.entries[0].first_name; // $ExpectType string | undefined
    data.entries[0].last_name; // $ExpectType string | undefined
    data.entries[0].email; // $ExpectType string | undefined
    data.entries[0].custom; // $ExpectType Map | undefined
    data.cursor; // $ExpectType string | undefined
    data.has_more; // $ExpectType boolean | undefined
});

// $ExpectType Promise<Contact>
ChartMogul.Customer.createContact(config, "cus_3819e09a-50a2-11ee-ada7-9fcf71cd4580", {
    data_source_uuid: "ds_92cc7226-509f-11ee-acf4-639f264f875d",
});

// $ExpectType Promise<Contact>
ChartMogul.Customer.createContact(config, "cus_3819e09a-50a2-11ee-ada7-9fcf71cd4580", {
    data_source_uuid: "ds_92cc7226-509f-11ee-acf4-639f264f875d",
    first_name: "Adam",
    last_name: "Smith",
    position: 9,
    title: "CEO",
    email: "adam@example.com",
    phone: "+1234567890",
    linked_in: "https://linkedin.com/example",
    twitter: "https://twitter.com/example",
    notes: "Heading\nBody\nFooter",
    custom: [
        { key: "Facebook", value: "https://www.facebook.com/example" },
        { key: "date_of_birth", value: "1985-01-22" },
    ],
});

ChartMogul.Customer.createContact(
    config,
    "cus_3819e09a-50a2-11ee-ada7-9fcf71cd4580",
    { data_source_uuid: "ds_92cc7226-509f-11ee-acf4-639f264f875d" },
);

// $ExpectType Promise<Contact>
ChartMogul.Contact.create(config, {
    customer_uuid: "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0",
    data_source_uuid: "ds_35542640-d9f1-11ed-9c30-7727168c74a5",
});

// $ExpectType Promise<Contact>
ChartMogul.Contact.create(config, {
    customer_uuid: "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0",
    data_source_uuid: "ds_35542640-d9f1-11ed-9c30-7727168c74a5",
    first_name: "Adam",
    last_name: "Smith",
    position: 1,
    title: "CEO",
    email: "adam@example.com",
    phone: "+1234567890",
    linked_in: "https://linkedin.com/example",
    twitter: "https://twitter.com/example",
    notes: "Heading\\nBody\\nFooter",
    custom: [
        { key: "Facebook", value: "https://www.facebook.com/example" },
        { key: "date_of_birth", value: "1985-01-22" },
    ],
});

// $ExpectType Promise<Contact>
ChartMogul.Contact.retrieve(config, "con_653af916-dea0-11ed-845b-3be1ac0039ac");

// $ExpectType Promise<{}>
ChartMogul.Contact.destroy(config, "con_d018335c-56d2-11ee-897c-830bb2bba6ec");

// $ExpectType Promise<Contact>
ChartMogul.Contact.merge(
    config,
    "con_653af916-dea0-11ed-845b-3be1ac0039ac",
    "con_36c9f236-ea66-11ed-b81d-cf0d715ced77",
);

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Contact.all(config);

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Contact.all(config, {
    email: "adam@example.com",
});

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Contact.all(config, {
    customer_uuid: "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0",
});

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Contact.all(config, {
    data_source_uuid: "ds_35542640-d9f1-11ed-9c30-7727168c74a5",
});

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Contact.all(config, {
    customer_external_id: "cus_0001",
});

// $ExpectType Promise<Entries<Contact>>
ChartMogul.Contact.all(config, {
    cursor: "aabbcc",
    per_page: 50,
});

// $ExpectType Promise<Contact>
ChartMogul.Contact.modify(config, "con_f90ba380-57a8-11ee-9500-7f50256329a7", {});

// $ExpectType Promise<Contact>
ChartMogul.Contact.modify(config, "con_f90ba380-57a8-11ee-9500-7f50256329a7", {
    first_name: "Bill",
    last_name: "Thompson",
    position: 10,
    title: "CTO",
    email: "bill@example.com",
    phone: "+987654321",
    linked_in: "https://linkedin.com/example",
    twitter: "https://twitter.com/example",
    notes: "New Heading\\nNew Body\\nNew Footer",
    custom: [
        { key: "Facebook", value: "https://www.facebook.com/example" },
        { key: "date_of_birth", value: "1990-01-01" },
    ],
});

// $ExpectType Promise<Entries<Note>>
ChartMogul.Customer.notes(config, "");

// $ExpectType Promise<Entries<Note>>
ChartMogul.Customer.notes(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0");

// $ExpectType Promise<Entries<Note>>
ChartMogul.Customer.notes(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", {
    type: "note",
});

// $ExpectType Promise<Entries<Note>>
ChartMogul.Customer.notes(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", {
    type: "call",
    author_email: "sara@example.com",
});

// $ExpectType Promise<Entries<Note>>
ChartMogul.Customer.notes(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", {
    cursor: "aabbcc",
    per_page: 20,
});

ChartMogul.Customer.notes(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0").then(data => {
    data.entries[0]; // $ExpectType Note
    data.entries[0].uuid; // $ExpectType string | undefined
    data.entries[0].customer_uuid; // $ExpectType string | undefined
    data.entries[0].type; // $ExpectType NoteType | undefined
    data.entries[0].text; // $ExpectType string | undefined
    data.entries[0].call_duration; // $ExpectType number | undefined
    data.entries[0].author; // $ExpectType string | undefined
    data.cursor; // $ExpectType string | undefined
    data.has_more; // $ExpectType boolean | undefined
});

// $ExpectType Promise<Note>
ChartMogul.Customer.createNote(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", {
    customer_uuid: "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0",
    type: "note",
});

// $ExpectType Promise<Note>
ChartMogul.Customer.createNote(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", {
    customer_uuid: "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0",
    type: "note",
    author_email: "adam@example.com",
    text: "They are a world leader in specialized software.\\n",
    created_at: "2023-11-01T00:00:00Z",
});

// $ExpectType Promise<Note>
ChartMogul.Customer.createNote(config, "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", {
    customer_uuid: "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0",
    type: "call",
    call_duration: 300,
    text: "Discussed pricing options",
});

ChartMogul.Customer.createNote(
    config,
    "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0",
    { customer_uuid: "cus_52eb54c2-dea0-11ed-ac96-ef735d89fca0", type: "note" },
).then(data => {
    data.uuid; // $ExpectType string | undefined
    data.customer_uuid; // $ExpectType string | undefined
    data.type; // $ExpectType NoteType | undefined
    data.text; // $ExpectType string | undefined
    data.call_duration; // $ExpectType number | undefined
    data.author; // $ExpectType string | undefined
});

// $ExpectType Promise<Entries<Opportunity>>
ChartMogul.Customer.opportunities(config, "");

// $ExpectType Promise<Entries<Opportunity>>
ChartMogul.Customer.opportunities(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7");

// $ExpectType Promise<Entries<Opportunity>>
ChartMogul.Customer.opportunities(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    owner: "bob@example.com",
});

// $ExpectType Promise<Entries<Opportunity>>
ChartMogul.Customer.opportunities(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    pipeline: "New Business",
    pipeline_stage: "Discovery",
});

// $ExpectType Promise<Entries<Opportunity>>
ChartMogul.Customer.opportunities(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    estimated_close_date_on_or_after: "2024-01-01",
    estimated_close_date_on_or_before: "2024-12-31",
});

// $ExpectType Promise<Entries<Opportunity>>
ChartMogul.Customer.opportunities(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    cursor: "aabbcc",
    per_page: 20,
});

ChartMogul.Customer.opportunities(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7").then(data => {
    data.entries[0]; // $ExpectType Opportunity
    data.entries[0].uuid; // $ExpectType string | undefined
    data.entries[0].customer_uuid; // $ExpectType string | undefined
    data.entries[0].owner; // $ExpectType string | undefined
    data.entries[0].pipeline; // $ExpectType (string & {}) | OpportunityPipeline | undefined
    data.entries[0].pipeline_stage; // $ExpectType (string & {}) | OpportunityPipelineStage | undefined
    data.entries[0].type; // $ExpectType OpportunityType | undefined
    data.entries[0].forecast_category; // $ExpectType ForecastCategory | undefined
    data.entries[0].win_likelihood; // $ExpectType number | undefined
    data.entries[0].custom; // $ExpectType Map | undefined
    data.cursor; // $ExpectType string | undefined
    data.has_more; // $ExpectType boolean | undefined
});

// $ExpectType Promise<Opportunity>
ChartMogul.Customer.createOpportunity(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    customer_uuid: "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7",
    owner: "bob@example.com",
    pipeline: "New Business",
    pipeline_stage: "Discovery",
    estimated_close_date: "2024-04-21",
    currency: "USD",
    amount_in_cents: 100000,
});

ChartMogul.Customer.createOpportunity(
    config,
    "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7",
    {
        customer_uuid: "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7",
        owner: "bob@example.com",
        pipeline: "New Business",
        pipeline_stage: "Discovery",
        estimated_close_date: "2024-04-21",
        currency: "USD",
        amount_in_cents: 100000,
        type: "recurring",
        forecast_category: "best_case",
        win_likelihood: 40,
        custom: [{ key: "seats", value: 3 }, { key: "marketing_campaign", value: "Facebook" }],
    },
);

// $ExpectType Promise<Entries<Task>>
ChartMogul.Customer.tasks(config, "");

// $ExpectType Promise<Entries<Task>>
ChartMogul.Customer.tasks(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7");

// $ExpectType Promise<Entries<Task>>
ChartMogul.Customer.tasks(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    assignee: "bob@example.com",
});

// $ExpectType Promise<Entries<Task>>
ChartMogul.Customer.tasks(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    due_date_on_or_after: "2024-01-01",
    due_date_on_or_before: "2024-12-31",
});

// $ExpectType Promise<Entries<Task>>
ChartMogul.Customer.tasks(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    completed: false,
});

// $ExpectType Promise<Entries<Task>>
ChartMogul.Customer.tasks(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    cursor: "aabbcc",
    per_page: 20,
});

// $ExpectType Promise<Task>
ChartMogul.Customer.createTask(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    customer_uuid: "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7",
    task_details: "Schedule product demo",
    assignee: "bob@myriapodlabs.com",
    due_date: "2025-04-21",
});

// $ExpectType Promise<Task>
ChartMogul.Customer.createTask(config, "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7", {
    customer_uuid: "cus_f466e33d-ff2b-4a11-8f85-417eb02157a7",
    task_details: "Schedule product demo",
    assignee: "bob@myriapodlabs.com",
    due_date: "2025-04-21",
    completed_at: "2025-04-20",
});

// $ExpectType Promise<Plan>
ChartMogul.Plan.create(config, {
    data_source_uuid: "",
    name: "",
    interval_count: 1,
    interval_unit: "",
    external_id: "",
});

// $ExpectType Promise<Plan>
ChartMogul.Plan.retrieve(config, "");

// $ExpectType Promise<Plan>
ChartMogul.Plan.modify(config, "", {
    name: "",
});

// $ExpectType Promise<{}>
ChartMogul.Plan.destroy(config, "");

ChartMogul.Plan.all(config, {
    page: 1,
}).then(data => {
    data.plans[0]; // $ExpectType Plan
    data.plans[0].name!; // $ExpectType string
    data.page!; // $ExpectType number
});

// $ExpectType Promise<Invoice>
ChartMogul.Invoice.retrieve(config, "");

// $ExpectType Promise<Invoice>
ChartMogul.Invoice.create(config, "", {
    invoices: [
        {
            external_id: "",
        },
    ],
});

// $ExpectType Promise<{}>
ChartMogul.Invoice.destroy(config, "");
ChartMogul.Invoice.all(config, {
    external_id: "",
}).then(data => {
    data.invoices[0]; // $ExpectType Invoice
    data.invoices[0].uuid!; // $ExpectType string
    data.page!; // $ExpectType number
});

ChartMogul.Invoice.all(config, "", {
    page: 1,
}).then(data => {
    data.customer_uuid!; // $ExpectType string
    data.invoices[0]; // $ExpectType Invoice
    data.invoices[0].uuid!; // $ExpectType string
    data.page!; // $ExpectType number
});

// $ExpectType Promise<Transaction>
ChartMogul.Transaction.create(config, "", {
    type: "",
    date: "",
    result: "",
});

ChartMogul.Subscription.all(config, "", {
    page: 1,
}).then(data => {
    data.customer_uuid!; // $ExpectType string
    data.subscriptions[0]; // $ExpectType Subscription
    data.subscriptions[0].uuid; // $ExpectType string
    data.current_page!; // $ExpectType number
});

ChartMogul.Subscription.cancel(config, "", {
    cancelled_at: "",
}).then(data => {
    data.customer_uuid; // $ExpectType string
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Tag.add(config, "", {
    email: "",
    tags: [""],
});

// $ExpectType Promise<Tags>
ChartMogul.Tag.add(config, "", {
    tags: [""],
});

// $ExpectType Promise<Tags>
ChartMogul.Tag.remove(config, "", {
    tags: [""],
});

// $ExpectType Promise<CustomAttributes>
ChartMogul.CustomAttribute.add(config, "", {
    custom: [
        { type: "", key: "", value: 0 },
    ],
});
// $ExpectType Promise<Entries<Customer>>
ChartMogul.CustomAttribute.add(config, "", {
    email: "",
    custom: [
        { type: "", key: "", value: 0 },
    ],
});

// $ExpectType Promise<CustomAttributes>
ChartMogul.CustomAttribute.update(config, "", {
    custom: {
        pro: true,
        channel: "",
    },
});

ChartMogul.CustomAttribute.remove(config, "", {
    custom: [""],
}).then(data => {
    data.custom["key"]; // $ExpectType any
});

// $ExpectType Promise<All>
ChartMogul.Metrics.all(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-24",
    interval: "",
    geo: "",
    plans: "",
});

// $ExpectType Promise<EntriesSummary<MRR>>
ChartMogul.Metrics.mrr(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-01",
});

// $ExpectType Promise<EntriesSummary<ARR>>
ChartMogul.Metrics.arr(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-01",
});

// $ExpectType Promise<EntriesSummary<ARPA>>
ChartMogul.Metrics.arpa(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-01",
});

// $ExpectType Promise<EntriesSummary<ASP>>
ChartMogul.Metrics.asp(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-01",
});

// $ExpectType Promise<EntriesSummary<CustomerCount>>
ChartMogul.Metrics.customerCount(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-01",
});

// $ExpectType Promise<EntriesSummary<CustomerChurnRate>>
ChartMogul.Metrics.customerChurnRate(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-01",
    geo: "",
    plans: "",
});

// $ExpectType Promise<EntriesSummary<MRRChurnRate>>
ChartMogul.Metrics.mrrChurnRate(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-01",
});

ChartMogul.Metrics.ltv(config, {
    "start-date": "2015-01-01",
    "end-date": "2015-11-01",
}).then(data => {
    data.entries[0].ltv; // $ExpectType number
    data.summary; // $ExpectType Summary
    data.summary.current; // $ExpectType number
});

// $ExpectType Promise<Entries<MetricsSubscription>>
ChartMogul.Metrics.Customer.subscriptions(config, "", {
    page: 1,
});

ChartMogul.Metrics.Customer.activities(config, "", {
    page: 1,
}).then(data => {
    data.entries; // $ExpectType MetricsActivity[]
    data.entries[0]; // $ExpectType MetricsActivity
    data.entries[0]["activity-mrr"]; // $ExpectType number
    data.page!; // $ExpectType number
});

// $ExpectType Promise<{}>
ChartMogul.Metrics.Customer.connectSubscriptions(config, "ds-uuid", "customer-uuid", {
    subscriptions: [{ uuid: "sub-uuid", data_source_uuid: "ds-uuid" }],
});

// $ExpectType Promise<{}>
ChartMogul.Metrics.Customer.disconnectSubscriptions(config, "ds-uuid", "customer-uuid", {
    subscriptions: [{ uuid: "sub-uuid", data_source_uuid: "ds-uuid" }],
});
