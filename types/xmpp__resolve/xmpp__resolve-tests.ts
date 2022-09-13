import Connection = require('@xmpp/connection');
import registerResolve = require('@xmpp/resolve');
import resolve = require('@xmpp/resolve/resolve');
import { compare } from '@xmpp/resolve/lib/alt-connections';
import { Element } from '@xmpp/xml';

// test type exports
type LookupOptions = resolve.LookupOptions;
type ResolvedAddress = resolve.ResolvedAddress;
type ResolvedSrvRecord = resolve.ResolvedSrvRecord;
type LookedUpSrvRecord = resolve.LookedUpSrvRecord;
type ResolveOptions = resolve.ResolveOptions;
type ResolvedTxtRecord = resolve.ResolvedTxtRecord;
type ResolvedRecord = resolve.ResolvedRecord;
type ResolvedEndpoint = resolve.ResolvedEndpoint;

// need to test via assignments because of TS4.1 ...
let res: Promise<Array<ResolvedEndpoint | ResolvedRecord>> = resolve('foo');
res = resolve('foo', { family: 1 });
res = resolve('foo', { hints: 1 });
res = resolve('foo', { owner: 'foo' });
res = resolve('foo', { srv: [{ service: 'foo', protocol: 'bar' }] });
res = resolve('foo', { verbatim: true });

resolve.dns!.resolve('foo'); // $ExpectType Promise<ResolvedRecord[]>
resolve.dns!.resolve('foo', { family: 2 }); // $ExpectType Promise<ResolvedRecord[]>
resolve.dns!.resolve('foo', { hints: 2 }); // $ExpectType Promise<ResolvedRecord[]>
resolve.dns!.resolve('foo', { owner: 'foo' }); // $ExpectType Promise<ResolvedRecord[]>
resolve.dns!.resolve('foo', { srv: [{ service: 'foo', protocol: 'bar' }] }); // $ExpectType Promise<ResolvedRecord[]>
resolve.dns!.resolve('foo', { verbatim: true }); // $ExpectType Promise<ResolvedRecord[]>

resolve('foo').then(([record]) => {
    if ('rel' in record) {
        record; // $ExpectType ResolvedEndpoint
        record.href; // $ExpectType string
        record.method; // $ExpectType string
        record.rel; // $ExpectType string
        record.uri; // $ExpectType string
    } else if ('attribute' in record) {
        record; // $ExpectType ResolvedTxtRecord
        record.attribute; // $ExpectType string
        record.method; // $ExpectType string
        record.uri; // $ExpectType string
        record.value; // $ExpectType string
    } else if ('service' in record) {
        record; // $ExpectType LookedUpSrvRecord
        record.address; // $ExpectType string
        record.family; // $ExpectType 4 | 6
        record.name; // $ExpectType string
        record.port; // $ExpectType number
        record.priority; // $ExpectType number
        record.protocol; // $ExpectType string
        record.service; // $ExpectType string
        record.uri; // $ExpectType string
        record.weight; // $ExpectType number
    } else {
        record; // $ExpectType ResolvedAddress
        record.address; // $ExpectType string
        record.family; // $ExpectType 4 | 6
        record.uri; // $ExpectType string
    }
});

resolve.dns!.lookup('foo'); // $ExpectType Promise<ResolvedAddress[]>
resolve.dns!.lookup('foo', { family: 1 }); // $ExpectType Promise<ResolvedAddress[]>
resolve.dns!.lookup('foo', { hints: 1 }); // $ExpectType Promise<ResolvedAddress[]>
resolve.dns!.lookup('foo', { verbatim: true }); // $ExpectType Promise<ResolvedAddress[]>
resolve.dns!.lookup('foo').then(([addr]) => {
    addr; // $ExpectType ResolvedAddress
    addr.address; // $ExpectType string
    addr.family; // $ExpectType 4 | 6
    addr.uri; // $ExpectType string
});

const resolvedSrvRecords = [null as any as ResolvedSrvRecord];
resolve.dns!.lookupSrvs(resolvedSrvRecords); // $ExpectType Promise<LookedUpSrvRecord[]>
resolve.dns!.lookupSrvs(resolvedSrvRecords, { family: 1 }); // $ExpectType Promise<LookedUpSrvRecord[]>
resolve.dns!.lookupSrvs(resolvedSrvRecords, { hints: 1 }); // $ExpectType Promise<LookedUpSrvRecord[]>
resolve.dns!.lookupSrvs(resolvedSrvRecords, { verbatim: true }); // $ExpectType Promise<LookedUpSrvRecord[]>
resolve.dns!.lookupSrvs(resolvedSrvRecords).then(([rec]) => {
    rec; // $ExpectType LookedUpSrvRecord
    rec.address; // $ExpectType string
    rec.family; // $ExpectType 4 | 6
    rec.name; // $ExpectType string
    rec.port; // $ExpectType number
    rec.priority; // $ExpectType number
    rec.protocol; // $ExpectType string
    rec.service; // $ExpectType string
    rec.uri; // $ExpectType string
    rec.weight; // $ExpectType number
});

resolve.dns!.resolveSrv('foo', { service: 'foo', protocol: 'tcp' }); // $ExpectType Promise<ResolvedSrvRecord[]>
resolve.dns!.resolveSrv('foo', { service: 'foo', protocol: 'tcp' }).then(([rec]) => {
    rec; // $ExpectType ResolvedSrvRecord
    rec.name; // $ExpectType string
    rec.port; // $ExpectType number
    rec.priority; // $ExpectType number
    rec.protocol; // $ExpectType string
    rec.service; // $ExpectType string
    rec.weight; // $ExpectType number
});

resolve.dns!.sortSrv(resolvedSrvRecords); // $ExpectType ResolvedSrvRecord[]

resolve.http.resolve('foo'); // $ExpectType Promise<ResolvedEndpoint[]>
resolve.http.resolve('foo').then(([rec]) => {
    rec; // $ExpectType ResolvedEndpoint
    rec.href; // $ExpectType string
    rec.method; // $ExpectType string
    rec.rel; // $ExpectType string
    rec.uri; // $ExpectType string
});

class Foo extends Connection {
    domain?: string;
    hookOutgoing?: (stanza: Element) => Promise<void>;

    headerElement() {
        return new Element('foo');
    }

    socketParameters(service: string) {
        return null;
    }
}

registerResolve({ entity: new Foo({ domain: 'foo.bar', service: 'foo' }) }); // $ExpectType void

resolve('foo').then(([record]) => {
    if ('rel' in record) {
        compare(record, record); // $ExpectType 0 | 1 | -1
    } else if ('attribute' in record) {
        compare(record, record); // $ExpectType 0 | 1 | -1
    }
});
