import { Buffer } from "node:buffer";
import * as rfc2253 from "rfc2253";

const str = "CN=John Doe,OU=People,DC=example,DC=com";

// $ExpectType DistinguishedName
const dn = rfc2253.parse(str);

// $ExpectType DistinguishedName
const dn2 = rfc2253.parse(str);

// $ExpectType string
const str2 = rfc2253.format(dn);

// $ExpectType string
const escapedString = rfc2253.escape("John Doe");

// $ExpectType string
const escapedBuffer = rfc2253.escape(new Buffer([1, 2, 3, 16, 255]));

// $ExpectType boolean
dn.match(dn2);

// $ExpectType DistinguishedName
const distinguishedName = new rfc2253.DistinguishedName();

// $ExpectType RelativeDistinguishedName
const relativeDistinguishedName = new rfc2253.RelativeDistinguishedName();

let dnWayneEnterprises = rfc2253.parse(
    "CN=Wayne\\, Bruce,DC=Wayne Enterprises,DC=com,OU=Research and Development,OU=Gadget Services",
);

// $ExpectType RelativeDistinguishedName[]
const ous = dnWayneEnterprises.getAll("OU");

// @ts-expect-error
const failParse = rfc2253.parse();

// @ts-expect-error
const failFormat = rfc2253.format();

// @ts-expect-error
const failEscape = rfc2253.escape();

// @ts-expect-error
const failDistinguishedName = new rfc2253.DistinguishedName({});

// @ts-expect-error
const failRelativeDistinguishedName = new rfc2253.RelativeDistinguishedName({});
