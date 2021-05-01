import * as psl from "psl";

const parsed = psl.parse("google.com");

if (parsed.error) {
    // $ExpectType "DOMAIN_TOO_SHORT" | "DOMAIN_TOO_LONG" | "LABEL_STARTS_WITH_DASH" | "LABEL_ENDS_WITH_DASH" | "LABEL_TOO_LONG" | "LABEL_TOO_SHORT" | "LABEL_INVALID_CHARS"
    parsed.error.code;
    parsed.error.message; // $ExpectType string
    parsed.input; // $ExpectType string
} else {
    parsed.sld; // $ExpectType string | undefined
    parsed.tld; // $ExpectType string | undefined
    parsed.domain; // $ExpectType string | undefined
    parsed.subdomain; // $ExpectType string | undefined
    parsed.listed; // $ExpectType boolean | undefined
    parsed.input; // $ExpectType string
}

psl.get(null); // $ExpectType null
psl.get(undefined); // $ExpectType null
psl.get("example.COM"); // $ExpectType string | null

psl.isValid("COM"); // $ExpectType boolean
