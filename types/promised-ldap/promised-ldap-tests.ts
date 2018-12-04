import ldap = require("promised-ldap");
import ldapjs = require("ldapjs");

const client = new ldap({
    url: "ldap://127.0.0.1:1389"
});

client.authenticate("test", "cn=root", "secret").then((res: any) => {
    console.log(res);
});

client.authenticateUser("test", "cn=root", "secret").then((res: any) => {
    console.log(res);
});

client.bind("cn=root", "secret").catch((err: Error) => {
    console.error(err);
});

const opts: ldap.SearchOptions = {
    filter: "(&(l=Seattle)(email=*@foo.com))",
    scope: "sub",
    attributes: ["dn", "sn", "cn"]
};

client._search("o=example", opts).then((res: NodeJS.EventEmitter) => {
    console.log(res);
});

const change = new ldapjs.Change({
    operation: "add",
    modification: {
        pets: ["cat", "dog"]
    }
});

client.modify("cn=foo, o=example", change).catch((err: Error) => {
    console.error(err);
});
