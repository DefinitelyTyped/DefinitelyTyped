
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

client.search('o=example', opts, (err: Error, res: NodeJS.EventEmitter): void => {
	// nothing
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
