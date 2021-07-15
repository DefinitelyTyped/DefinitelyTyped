import { ActiveDirectory, promiseWrapper } from "activedirectory2";

const ad = new ActiveDirectory({
    url: 'ldap://192.168.199.10',
    baseDN: 'OU=MyUsers,DC=mydomain,DC=com',
    username: 'service-user@mydomain.com',
    password: 'xxxxx000pw'
});

ad.authenticate("test@mydomain.com", "yyyy111pw", (err, authed) => {
    console.log("hello");
    console.log(err);
    console.log(authed);
});

async function Test() {
    console.log("hello");
    try {
        const promiseAd = new promiseWrapper({
            url: 'ldap://192.168.199.10',
            baseDN: 'OU=MyUsers,DC=mydomain,DC=com',
            username: 'service-user@mydomain.com',
            password: 'xxxxx000pw'
        });
        const authed = await promiseAd.authenticate("test@mydomain.com", "yyyy111pw");
        console.log(authed);
    } catch (err) {
        console.log(err);
    }
}