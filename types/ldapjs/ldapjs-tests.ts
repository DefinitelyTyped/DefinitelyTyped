
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

client.modify('cn=foo, o=example', change, function(err) {
    // nothing
});
