import LdapJS from 'ldapjs-client';

const client = new LdapJS({ url: 'ldap://anyserver:389' });

const dn = 'cn=foo, o=example';

interface LdapObject {
    cn: string;
    ou: string;
}

(async () => {
    await client.add(dn, { cn: 'foo' });

    await client.bind(dn, 'pazzvord');
    await client.del(dn);

    const change = {
        operation: 'add', // add, delete, replace
        modification: {
            pets: ['cat', 'dog'],
        },
    };

    await client.modify(dn, change);
    await client.modifyDN(dn, 'cn=baz, o=example');

    const options = {
        filter: '(&(l=Seattle)(email=*@foo.com))',
        scope: 'sub',
        attributes: ['dn', 'sn', 'cn'],
    };

    const searchResult = await client.search(dn, options) as LdapObject[];
    type resultType = typeof searchResult;

    await client.unbind();

    client.destroy();
})();
