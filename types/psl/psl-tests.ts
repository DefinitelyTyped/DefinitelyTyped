import * as psl from 'psl';

const parsed = psl.parse('google.com');

if (parsed.error != null) {
    const parseError = parsed as psl.ParseError; // tslint:disable-line:no-unnecessary-type-assertion

    // $ExpectType "DOMAIN_TOO_SHORT" | "DOMAIN_TOO_LONG" | "LABEL_STARTS_WITH_DASH" | "LABEL_ENDS_WITH_DASH" | "LABEL_TOO_LONG" | "LABEL_TOO_SHORT" | "LABEL_INVALID_CHARS"
    parseError.error.code;
    parseError.error.message; // $ExpectType string
} else {
    const parsedDomain = parsed as psl.ParsedDomain; // tslint:disable-line:no-unnecessary-type-assertion

    parsedDomain.sld; // $ExpectType string | null
    parsedDomain.tld; // $ExpectType string | null
    parsedDomain.domain; // $ExpectType string | null
    parsedDomain.subdomain; // $ExpectType string | null
    parsedDomain.listed; // $ExpectType boolean
    parsedDomain.input; // $ExpectType string
}

psl.get(null); // $ExpectType null
psl.get(undefined); // $ExpectType null
psl.get('example.COM'); // $ExpectType string | null

psl.isValid('COM'); // $ExpectType boolean
