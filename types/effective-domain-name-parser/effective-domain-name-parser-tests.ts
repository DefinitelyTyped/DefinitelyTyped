import { parse } from "effective-domain-name-parser";

const parsedTest = parse("www.us.test.com"); // { tld: 'com', sld: 'test', subdomain: 'www.us' }

// $ExpectType string
parsedTest.tld;

// $ExpectType string
parsedTest.sld;

// $ExpectType string
parsedTest.subdomain;

// @ts-expect-error
parse(["www.us.test.com"]);
