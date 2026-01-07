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
    include: "churn_recognition,churn_when_zero_mrr,auto_churn_subscription,refund_handling,proximate_movement_reclassification",
});

ChartMogul.Account.retrieve(config).then(data => {
    data.id; // $ExpectType string
    data.name; // $ExpectType string
    data.currency; // $ExpectType string
    data.time_zone; // $ExpectType string
    data.week_start_on; // $ExpectType WeekStartOn
    data.churn_recognition; // $ExpectType ChurnRecognition | undefined
    data.churn_when_zero_mrr; // $ExpectType boolean | undefined
    data.auto_churn_subscription; // $ExpectType boolean | undefined
    data.refund_handling; // $ExpectType RefundHandling | undefined
    data.proximate_movement_reclassification; // $ExpectType ProximateMovementReclassification | undefined
});

// $ExpectType Promise<DataSource>
ChartMogul.DataSource.create(config, {
    name: "",
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

ChartMogul.DataSource.all(config).then(data => {
    data.data_sources[0]; // $ExpectType DataSource
    data.data_sources[0].name; // $ExpectType string
    data.data_sources[0].processing_status!.processed!; // $ExpectType number
    data.data_sources[0].processing_status!.pending!; // $ExpectType number
    data.data_sources[0].processing_status!.failed!; // $ExpectType number
    data.data_sources[0].auto_churn_subscription_setting!.enabled; // $ExpectType boolean
    data.data_sources[0].auto_churn_subscription_setting!.interval; // $ExpectType number | null
    data.data_sources[0].invoice_handling_setting; // $ExpectType Record<string, any> | undefined
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

ChartMogul.Customer.retrieve(config, "").then(data => {
    data.owner; // $ExpectType string | undefined
    data.website_url; // $ExpectType string | undefined
});

// $ExpectType Promise<Customer>
ChartMogul.Customer.modify(config, "", {});

// $ExpectType Promise<{}>
ChartMogul.Customer.destroy(config, "");

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    data_source_uuid: "",
});

ChartMogul.Customer.all(config).then(data => {
    data.entries[0]; // $ExpectType Customer
    data.entries[0].attributes!.stripe!["something"]; // $ExpectType any
    data.page!; // $ExpectType number
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.search(config, {
    email: "",
});
// $ExpectType Promise<{}>
ChartMogul.Customer.merge(config, {
    from: { customer_uuid: "" },
    into: { customer_uuid: "" },
});
// $ExpectType Promise<Attributes>
ChartMogul.Customer.attributes(config, "");

// $ExpectType Promise<{}>
ChartMogul.Customer.connectSubscriptions(config, "customer-uuid", {
    subscriptions: [{ uuid: "sub-uuid", data_source_uuid: "ds-uuid" }],
});

// $ExpectType Promise<{}>
ChartMogul.Customer.disconnectSubscriptions(config, "customer-uuid", {
    subscriptions: [{ uuid: "sub-uuid" }],
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
