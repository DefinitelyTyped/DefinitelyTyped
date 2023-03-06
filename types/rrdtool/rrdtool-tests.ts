import { create, open, now, DataSource, RoundRobinArchive, RrdtoolDatabase } from 'rrdtool';

let a: DataSource;
// Test different data source types
// OK
a = 'DS:mem:GAUGE:600:0:671744';
// OK
a = 'DS:mem:COUNTER:600:0:671744';
// OK
a = 'DS:mem:DCOUNTER:600:0:671744';
// OK
a = 'DS:mem:DERIVE:600:0:671744';
// OK
a = 'DS:mem:DDERIVE:600:0:671744';
// OK
a = 'DS:mem:ABSOLUTE:600:0:671744';
// OK
a = 'DS:AvgReqDur:COMPUTE:Duration,Requests,0,EQ,1,Requests,IF,/';

// Test duration syntax
// OK
a = 'DS:mem:GAUGE:1m:0:671744';

// Test invalid data source strings
// @ts-expect-error
a = 'DSS:mem:GAUGE:600:0:671744';
// @ts-expect-error
a = 'DS:mem:NULL:600:0:671744';
// @ts-expect-error
a = 'DS:mem:GAUGE:n:0:671744';
// @ts-expect-error
a = 'DS:mem:GAUGE:600:n:671744';
// @ts-expect-error
a = 'DS:mem:GAUGE:600:0:n';

let b: DataSource<{ mem: number }>;
// OK
b = 'DS:mem:GAUGE:600:0:671744';
// @ts-expect-error
b = 'DS:test:GAUGE:600:0:671744';

let c: RoundRobinArchive;
// Test different consolidation functions
// OK
c = 'RRA:AVERAGE:0.5:12:24';
// OK
c = 'RRA:MIN:0.5:12:24';
// OK
c = 'RRA:MAX:0.5:12:24';
// OK
c = 'RRA:LAST:0.5:12:24';
// OK
c = 'RRA:HWPREDICT:5d:0.1:0.0035:1d:3';
// OK
c = 'RRA:MHWPREDICT:5d:0.1:0.0035:1d:3';
// OK
c = 'RRA:SEASONAL:1d:0.1:2';
// OK
c = 'RRA:DEVSEASONAL:1d:0.1:2';
// OK
c = 'RRA:DEVPREDICT:5d:5';
// OK
c = 'RRA:FAILURES:1d:7:9:5';

// Test more duration syntax
// OK
c = 'RRA:AVERAGE:0.5:1s:90d';
// OK
c = 'RRA:AVERAGE:0.5:1m:10w';
// OK
c = 'RRA:AVERAGE:0.5:1h:18M';
// OK
c = 'RRA:AVERAGE:0.5:1d:10y';

// Test invalid round robin archive strings
// @ts-expect-error
c = 'RRAA:AVERAGE:0.5:12:24';
// @ts-expect-error
c = 'RRA:NULL:0.5:12:24';
// @ts-expect-error
c = 'RRA:AVERAGE:n:12:24';
// @ts-expect-error
c = 'RRA:AVERAGE:0.5:n:24';
// @ts-expect-error
c = 'RRA:AVERAGE:0.5:12:n';

// $ExpectType number
const start = now() - 10;

const filename = 'test.rrd';
let db1: RrdtoolDatabase<{ test: number }>;
db1 = open(filename);
db1 = create(filename, { start, step: '1m', force: false }, [
    'RRA:AVERAGE:0.5:1:10',
    // @ts-expect-error
    'DS:mem:GAUGE:1:0:100',
    // @ts-expect-error
    'DS:var:GAUGE:1:0:100',
    'RRA:AVERAGE:0.5:1:10',
    'DS:test:GAUGE:1:0:100',
    'RRA:AVERAGE:0.5:1:10',
]);

db1.update(start + 0, { test: 15 });
db1.update(start + 1, { test: 90 }, () => {});
// @ts-expect-error
db1.update(start + 1, { mem: 90 }, () => {});
// @ts-expect-error
db1.update(start + 1, { test: '90' }, () => {});

const db2 = create(filename, { start, step: 1, force: false }, [
    'DS:test:GAUGE:1:0:100',
    'RRA:AVERAGE:0.5:1:10',
]);
db2.update(start + 0, { test: 15 });
db2.update(start + 1, { test: 90 }, () => {});
db2.update(start + 1, { mem: 90 }, () => {});
// @ts-expect-error
db2.update(start + 1, { test: '90' }, () => {});

const db3 = open(filename);
db3.update(start + 0, { test: 15 });
db3.update(start + 1, { test: 90 }, () => {});
db3.update(start + 1, { mem: 90 }, () => {});
db3.update(start + 1, { test: '90' }, () => {}); // XXX: Should be an error

db1.fetch('AVERAGE', 0, 1, (e, data) => {
    if (e) throw e;
    return data[0].values.test + 1;
});

db2.fetch('AVERAGE', 0, 1, (e, data) => {
    if (e) throw e;
    return data[0].values.test + 1;
});

db3.fetch('AVERAGE', 0, 1, (e, data) => {
    if (e) throw e;
    return data[0].values.test + 1;
});
