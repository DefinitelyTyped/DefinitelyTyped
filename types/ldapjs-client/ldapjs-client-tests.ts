import LdapJS = require('ldapjs-client');

const clientOptions: LdapJS.ClientOptions = {
    url: 'ldap://anyserver:389',
};

const client = new LdapJS(clientOptions);

const dn = 'cn=foo, o=example';

interface LdapObject {
    cn: string;
    ou: string;
}

(async () => {
    await client.add(dn, { cn: 'foo' });

    await client.bind(dn, 'pazzvord');
    await client.del(dn);

    const change: LdapJS.Change = {
        operation: 'add',
        modification: {
            pets: ['cat', 'dog'],
        },
    };

    await client.modify(dn, change);
    await client.modifyDN(dn, 'cn=baz, o=example');

    const options: LdapJS.SearchOptions = {
        filter: '(&(l=Seattle)(email=*@foo.com))',
        scope: 'sub',
        attributes: ['dn', 'sn', 'cn'],
    };

    const searchResult = await client.search(dn, options) as LdapObject[];
    type resultType = typeof searchResult;

    await client.unbind();

    client.destroy();
})();
