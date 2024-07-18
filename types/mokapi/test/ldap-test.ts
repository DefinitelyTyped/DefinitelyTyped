import { LdapEventHandler, LdapSearchRequest, LdapSearchResponse } from "mokapi/ldap";

// @ts-expect-error
let h: LdapEventHandler = () => {};
h = () => {
    return false;
};
// @ts-expect-error
h = (s: string) => {
    return false;
};
h = (req: LdapSearchRequest) => {
    return false;
};
// @ts-expect-error
h = (req: LdapSearchRequest, s: string) => {
    return false;
};
h = (req: LdapSearchRequest, res: LdapSearchResponse) => {
    return false;
};
h = (req: LdapSearchRequest, res: LdapSearchResponse) => {
    // @ts-expect-error
    res.results = "";
    // @ts-expect-error
    res.results.push({});
    // @ts-expect-error
    res.results.push({ dn: 12 });
    res.results.push({ dn: "foo", attributes: {} });
    // @ts-expect-error
    res.results.push({ dn: "foo", attributes: { foo: "bar" } });
    res.results.push({ dn: "foo", attributes: { foo: ["bar"] } });
    res.status = 0;
    // @ts-expect-error
    res.message = 12;
    res.message = "";

    return false;
};
