import ldapjs from 'ldapjs-client';

const client = ldapjs({ url: 'ldap://anyserver:389' });

const dn = 'cn=foo, o=example';

(async () => {
    await client.add(dn, { cn: 'foo' });

    await client.bind(dn, 'pazzvord');
    await client.del(dn);

    const change = {
        operation: 'add', // add, delete, replace
        modification: {
            pets: ['cat', 'dog']
        }
    };

    await client.modify(dn, change);
    await client.modifyDN(dn, 'cn=baz, o=example');

    const options = {
        filter: '(&(l=Seattle)(email=*@foo.com))',
        scope: 'sub',
        attributes: ['dn', 'sn', 'cn']
    };

    await client.search(dn, options);

    await client.unbind();

    client.destroy();
})();
