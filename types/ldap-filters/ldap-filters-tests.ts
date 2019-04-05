/// <reference types="node" />

import Filter = require("ldap-filters");

Filter.collapse_not = false;

const output = Filter.AND([
    Filter.attribute("givenName").equalTo("jenny"),
    Filter.attribute("sn").equalTo("jensen")
]);

console.log(output.toString());

Filter.parse("(&(givenName=jenny)(sn=jensen))");

Filter.parse("(&(uid=jenny))").simplify();

const filter = Filter.parse(
    "(&(givenName=jenny)(sn=jensen)(|(c=us)(st=ontario)))"
);

filter.toString();
filter.toString(true);
filter.toString(2);

const parsed = Filter.parse("(&(givenName~=jeni)(sn=jensen))");
const data = { givenName: "Jenny", sn: "Jensen" };
console.log(parsed.match(data));
