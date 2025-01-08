import Cloudflare = require("cloudflare");

// $ExpectType Cloudflare
const cf = new Cloudflare({ token: "abvd" });

// $ExpectType Promise<object> || ResponseObjectPromise
cf.ips.browse();

// @ts-expect-error
cf.user.edit("asd");

const types: Cloudflare.RecordTypes = "AAAA";

cf.dnsRecords.add("123", {
    type: "CNAME",
    name: "irrelevant",
    content: "irrelevant",
    ttl: 1,
});

cf.dnsRecords.add("123", {
    type: "MX",
    name: "irrelevant",
    content: "irrelevant",
    ttl: 1,
    priority: 12,
});

cf.dnsRecords.add("123", {
    type: "CNAME",
    name: "irrelevant",
    content: "irrelevant",
    ttl: 1,
    // @ts-expect-error
    priority: 12,
});

cf.dnsRecords.add("123", {
    type: "SRV",
    data: {
        name: "irrelevant",
        service: "irrelevant",
        proto: "irrelevant",
        ttl: 1,
        priority: 12,
        weight: 3,
        port: 123,
        target: "irrelevant",
    },
});

// $ExpectType Promise<DnsRecordsBrowseResponse<any>>
cf.dnsRecords.browse("123", {});

// $ExpectType Promise<DnsRecordsBrowseResponse<any>>
cf.dnsRecords.browse("123");

// $ExpectType Promise<DnsRecordsBrowseResponse<"CNAME">>
cf.dnsRecords.browse("123", {
    type: "CNAME",
    name: "irrelevant",
    content: "irrelevant",
});

// $ExpectType Promise<DnsRecordsBrowseResponse<"MX">>
cf.dnsRecords.browse("123", {
    type: "MX",
    name: "irrelevant",
    content: "irrelevant",
});

// $ExpectType Promise<DnsRecordsBrowseResponse<"SRV">>
cf.dnsRecords.browse("123", {
    type: "SRV",
    name: "irrelevant",
    content: "irrelevant",
});

cf.dnsRecords.browse("123").then((response) => {
    if (response.result !== null) {
        // $ExpectType string
        response.result[0].id;
    }
});

cf.dnsRecords.browse("123", {
    // @ts-expect-error
    invalid: "invalid",
});

cf.enterpriseZoneWorkersKV.add("account_id", "namespace_id", "key_name", "value");
// @ts-expect-error
cf.enterpriseZoneWorkersKV.add("account_id", "namespace_id", "value");

cf.enterpriseZoneWorkersKV.addMulti("account_id", "namespace_id", [{ key: "key", value: "value" }]);
