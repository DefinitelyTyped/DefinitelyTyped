import ActiveDirectory = require('activedirectory2');

const ad = new ActiveDirectory({
    url: 'ldap://192.168.199.10',
    baseDN: 'OU=MyUsers,DC=mydomain,DC=com',
    username: 'service-user@mydomain.com',
    password: 'xxxxx000pw',
});

ad.authenticate('test@mydomain.com', 'yyyy111pw', (err, authed) => {
    console.log('hello');
    console.log(err);
    console.log(authed);
});

const customAd = new ActiveDirectory({
    url: 'ldap://192.168.199.10',
    baseDN: 'OU=MyUsers,DC=mydomain,DC=com',
    username: 'service-user@mydomain.com',
    password: 'xxxxx000pw',
    attributes: {
        user: ['myCustomAttribute', 'mail', 'userPrinicipalName'],
        group: ['anotherCustomAttribute', 'objectCategory'],
    },
});

customAd.authenticate('test@mydomain.com', 'yyyy111pw', (err, authed) => {
    console.log('hello');
    console.log(err);
    console.log(authed);
});
