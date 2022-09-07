import Cloudflare = require('cloudflare');

// $ExpectType Cloudflare
const cf = new Cloudflare({ token: 'abvd' });

// $ExpectType Promise<object> || ResponseObjectPromise
cf.ips.browse();

// @ts-expect-error
cf.user.edit('asd');

const types: Cloudflare.RecordTypes = 'AAAA';

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
    priority: 12
});

cf.dnsRecords.add("123", {
    type: "CNAME",
    name: "irrelevant",
    content: "irrelevant",
    ttl: 1,
    // @ts-expect-error
    priority: 12
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
        target: "irrelevant"
    }
});

cf.enterpriseZoneWorkersKV.add('account_id', 'namespace_id', 'key_name', 'value');
// @ts-expect-error
cf.enterpriseZoneWorkersKV.add('account_id', 'namespace_id', 'value');

cf.enterpriseZoneWorkersKV.addMulti('account_id', 'namespace_id', [{key: 'key', value: 'value'}]);
