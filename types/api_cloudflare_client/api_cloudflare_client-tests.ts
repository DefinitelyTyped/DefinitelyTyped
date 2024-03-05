// @ts-ignore
import Cloudflare = require("api_cloudflare_client");

// $ExpectType Cloudflare
const cf = new Cloudflare({ token: "abvd" });

// $ExpectType Promise<object> || ResponseObjectPromise
cf.ips.browse();

// $ExpectType Promise<object> || ResponseObjectPromise
cf.user.edit("asd");


cf.dnsRecords.add("123", {
    type: "CNAME",
    name: "irrelevant",
    content: "irrelevant",
    ttl: 1,
});

// $ExpectType Promise<object> || ResponseObjectPromise
cf.dnsRecords.add("123", {
    type: "CNAME",
    name: "irrelevant",
    content: "irrelevant",
    ttl: 1,
    priority: 12,
});

// $ExpectType Promise<DnsRecordsBrowseResponse<"CNAME">>
cf.dnsRecords.browse("123", {
    type: "CNAME",
    name: "irrelevant",
    content: "irrelevant",
});

// $ExpectType Promise<object> || ResponseObjectPromise
cf.dnsRecords.add("123", {
    type: "MX",
    name: "irrelevant",
    content: "irrelevant",
    ttl: 1,
    priority: 12,
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
// $ExpectType Promise<object> || ResponseObjectPromise
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


cf.dnsRecords.browse("123").then((response: { result: { id: any; }[] | null; }) => {
    if (response.result !== null) {
        // $ExpectType string
        response.result[0].id;
    }
});


cf.enterpriseZoneWorkersKV.add("account_id", "namespace_id", "key_name");
cf.enterpriseZoneWorkersKV.add("account_id", "namespace_id", "value");

cf.enterpriseZoneWorkersKV.addMulti("account_id", "namespace_id", [{ key: "key", value: "value" }]);

// $ExpectType Promise<object> || ResponseObjectPromise
cf.firewall.browse("zone_id");

// $ExpectType Promise<object> || ResponseObjectPromise
cf.accessApplications.browse()
