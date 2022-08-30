import * as ChartMogul from 'chartmogul-node';

const config = new ChartMogul.Config("token", "baseURL");
config.retries = 10;
config.getAccountToken(); // $ExpectType string
config.VERSION; // $ExpectType string

ChartMogul.Ping.ping(config); // $ExpectType Promise<string>

// $ExpectType Promise<DataSource>
ChartMogul.DataSource.create(config, {
    name: ""
});

// $ExpectType Promise<DataSource>
ChartMogul.DataSource.retrieve(config, "");

// $ExpectType Promise<{}>
ChartMogul.DataSource.destroy(config, "");

// $ExpectType Promise<DataSources>
ChartMogul.DataSource.all(config, {
    name: ""
});

ChartMogul.DataSource.all(config).then(data => {
    data.data_sources[0]; // $ExpectType DataSource
    data.data_sources[0].name; // $ExpectType string
});

// $ExpectType Promise<Customer>
ChartMogul.Customer.create(config, {
    data_source_uuid: "",
    name: "",
    external_id: "",
    attributes: {
        tags: ["important", "Prio1"],
        custom: [
            {type: "String", key: "channel", value: "Facebook", source: "integration"},
            {type: "Integer", key: "age", value: 18}
        ]
    }
});

// $ExpectType Promise<Customer>
ChartMogul.Customer.retrieve(config, "");

// $ExpectType Promise<Customer>
ChartMogul.Customer.modify(config, "", {});

// $ExpectType Promise<{}>
ChartMogul.Customer.destroy(config, "");

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.all(config, {
    data_source_uuid: ""
});

ChartMogul.Customer.all(config).then(data => {
    data.entries[0]; // $ExpectType Customer
    data.entries[0].attributes!.stripe!['something']; // $ExpectType any
    data.page!; // $ExpectType number
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Customer.search(config, {
    email: ""
});
// $ExpectType Promise<{}>
ChartMogul.Customer.merge(config, {
    from: {customer_uuid: ""},
    into: {customer_uuid: ""}
});
// $ExpectType Promise<Attributes>
ChartMogul.Customer.attributes(config, "");

// $ExpectType Promise<Plan>
ChartMogul.Plan.create(config, {
    data_source_uuid: "",
    name: "",
    interval_count: 1,
    interval_unit: "",
    external_id: ""
});

// $ExpectType Promise<Plan>
ChartMogul.Plan.retrieve(config, "");

// $ExpectType Promise<Plan>
ChartMogul.Plan.modify(config, "", {
    name: ""
});

// $ExpectType Promise<{}>
ChartMogul.Plan.destroy(config, "");

ChartMogul.Plan.all(config, {
    page: 1
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
            external_id: ""
        }
    ]
});

// $ExpectType Promise<{}>
ChartMogul.Invoice.destroy(config, "");
ChartMogul.Invoice.all(config, {
    external_id: ""
}).then(data => {
    data.invoices[0]; // $ExpectType Invoice
    data.invoices[0].uuid!; // $ExpectType string
    data.page!; // $ExpectType number
});

ChartMogul.Invoice.all(config, "", {
    page: 1
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
    result: ""
});

ChartMogul.Subscription.all(config, "", {
    page: 1
}).then(data => {
    data.customer_uuid!; // $ExpectType string
    data.subscriptions[0]; // $ExpectType Subscription
    data.subscriptions[0].uuid; // $ExpectType string
    data.current_page!; // $ExpectType number
});

ChartMogul.Subscription.cancel(config, "", {
    cancelled_at: ""
}).then(data => {
    data.customer_uuid; // $ExpectType string
});

// $ExpectType Promise<Entries<Customer>>
ChartMogul.Tag.add(config, "", {
    email: "",
    tags: [""]
});

// $ExpectType Promise<Tags>
ChartMogul.Tag.add(config, "", {
    tags: [""]
});

// $ExpectType Promise<Tags>
ChartMogul.Tag.remove(config, "", {
    tags: [""]
});

// $ExpectType Promise<CustomAttributes>
ChartMogul.CustomAttribute.add(config, "", {
    custom: [
        {type: "", key: "", value: 0}
    ]
});
// $ExpectType Promise<Entries<Customer>>
ChartMogul.CustomAttribute.add(config, "", {
    email: "",
    custom: [
        {type: "", key: "", value: 0}
    ]
});

// $ExpectType Promise<CustomAttributes>
ChartMogul.CustomAttribute.update(config, "", {
    custom: {
        pro: true,
        channel: ""
    }
});

ChartMogul.CustomAttribute.remove(config, "", {
    custom: [""]
}).then(data => {
    data.custom["key"]; // $ExpectType any
});

// $ExpectType Promise<All>
ChartMogul.Metrics.all(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-24',
    interval: '',
    geo: '',
    plans: ''
});

// $ExpectType Promise<EntriesSummary<MRR>>
ChartMogul.Metrics.mrr(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-01'
});

// $ExpectType Promise<EntriesSummary<ARR>>
ChartMogul.Metrics.arr(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-01'
});

// $ExpectType Promise<EntriesSummary<ARPA>>
ChartMogul.Metrics.arpa(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-01'
});

// $ExpectType Promise<EntriesSummary<ASP>>
ChartMogul.Metrics.asp(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-01'
});

// $ExpectType Promise<EntriesSummary<CustomerCount>>
ChartMogul.Metrics.customerCount(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-01'
});

// $ExpectType Promise<EntriesSummary<CustomerChurnRate>>
ChartMogul.Metrics.customerChurnRate(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-01',
    geo: '',
    plans: ''
});

// $ExpectType Promise<EntriesSummary<MRRChurnRate>>
ChartMogul.Metrics.mrrChurnRate(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-01'
});

ChartMogul.Metrics.ltv(config, {
    'start-date': '2015-01-01',
    'end-date': '2015-11-01'
}).then(data => {
    data.entries[0].ltv; // $ExpectType number
    data.summary; // $ExpectType Summary
    data.summary.current; // $ExpectType number
});

// $ExpectType Promise<Entries<MetricsSubscription>>
ChartMogul.Metrics.Customer.subscriptions(config, "", {
    page: 1
});

ChartMogul.Metrics.Customer.activities(config, "", {
    page: 1
}).then(data => {
    data.entries; // $ExpectType MetricsActivity[]
    data.entries[0]; // $ExpectType MetricsActivity
    data.entries[0]['activity-mrr']; // $ExpectType number
    data.page!; // $ExpectType number
});
