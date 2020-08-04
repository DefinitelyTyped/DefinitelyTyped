
import ldap = require("ldapjs");

let client = ldap.createClient({
    url: 'ldap://127.0.0.1:1389'
});

client.bind('cn=root', 'secret', (err: Error): void => {
    // nothing
});

let opts: ldap.SearchOptions = {
    filter: '(&(l=Seattle)(email=*@foo.com))',
    scope: 'sub',
    attributes: ['dn', 'sn', 'cn']
};

client.search('o=example', opts, (err, res): void => {
    if (err) {
        err.message;
        return;
    }

    res.on('error', error => {
        error.message;
    });

    res.on('searchEntry', (entry) => {
        entry.json.objectName;
        entry.object.dn;
        entry.raw.dn;
    });

    res.on('page', function(result, cb) {
        result.status;

        cb(); // Only when opts.pagePause == true
    });

    res.on('searchReference', (ref) => {
        ref.uris;
    });

    res.on('end', (res) => {
        res.status;
    });

    // Not a known event, just testing the EventEmitter fallback
    res.on('unknown-event', (value) => {
        value.any;
    });
});

let change = new ldap.Change({
    operation: 'add',
    modification: {
        pets: ['cat', 'dog']
    }
});

client.modify('cn=foo, o=example', change, function (err) {
    // nothing
});


let f = ldap.parseFilter('(objectclass=*)');
f.matches({});

let equalityFilter = new ldap.EqualityFilter({
    attribute: 'cn',
    value: 'foo'
});
equalityFilter.matches({ cn: 'foo' });

let objectGUID = Buffer.from([
    0x02, 0xa9, 0xe3, 0x6f,
    0x58, 0x11,
    0x18, 0x49,
    0xb5, 0x60,
    0x60, 0xad, 0x50, 0x86, 0x18, 0xc9
]);
let equalityFilterBuffer = new ldap.EqualityFilter({
    attribute: 'objectGUID',
    value: objectGUID
});
equalityFilterBuffer.matches({ objectGUID });

let presenceFilter = new ldap.PresenceFilter({
    attribute: 'cn'
});
presenceFilter.matches({ cn: 'foo' });

let substringFilter = new ldap.SubstringFilter({
    attribute: 'cn',
    initial: 'foo',
    any: ['bar'],
    final: 'baz'
});
substringFilter.matches({ cn: 'foobigbardogbaz' });

let greaterThanEqualsFilter = new ldap.GreaterThanEqualsFilter({
    attribute: 'cn',
    value: 'foo',
});
greaterThanEqualsFilter.matches({ cn: 'foobar' });

let lessThanEqualsFilter = new ldap.LessThanEqualsFilter({
    attribute: 'cn',
    value: 'foo',
});
lessThanEqualsFilter.matches({ cn: 'abc' });

let andFilter = new ldap.AndFilter({
    filters: [
        new ldap.EqualityFilter({
            attribute: 'cn',
            value: 'foo'
        }),
        new ldap.EqualityFilter({
            attribute: 'sn',
            value: 'bar'
        })
    ]
});
andFilter.matches({ cn: 'foo', sn: 'bar' });

let orFilter = new ldap.OrFilter({
    filters: [
        new ldap.EqualityFilter({
            attribute: 'cn',
            value: 'foo'
        }),
        new ldap.EqualityFilter({
            attribute: 'sn',
            value: 'bar'
        })
    ]
});
orFilter.matches({ cn: 'foo', sn: 'baz' });

let notFilter = new ldap.NotFilter({
    filter: new ldap.EqualityFilter({
        attribute: 'cn',
        value: 'foo'
    })
});
notFilter.matches({ cn: 'bar' });

let approximateFilter = new ldap.ApproximateFilter({
    attribute: 'cn',
    value: 'foo'
});
approximateFilter.matches({ cn: 'foo' });


let server = ldap.createServer();
server.listen(1389, '127.0.0.1', () => {
    // Do stuff

    // Close the server gracefully
    server.close(() => {
        // Server closed
    });
});
