import ca = require("win-ca");
import fallback = require("win-ca/fallback");
import api = require("win-ca/api");

// test type exports
type Types = ca.CertificateFormat | ca.Store | ca.Certificate | ca.Options;

ca.disabled; // $ExpectType boolean
ca.nApi; // $ExpectType boolean
ca.electron; // $ExpectType boolean | undefined

ca.der2(ca.der2.asn1); // $ExpectType (certificate: string | Buffer) => Certificate
ca.der2(ca.der2.asn1)("foo"); // $ExpectType Certificate
ca.der2(ca.der2.asn1)(Buffer.from("foo")); // $ExpectType Certificate
ca.der2(ca.der2.asn1, "foo"); // $ExpectType Certificate
ca.der2(ca.der2.asn1, Buffer.from("foo")); // $ExpectType Certificate

ca.der2.der; // $ExpectType 0
ca.der2.pem; // $ExpectType 1
ca.der2.txt; // $ExpectType 2
ca.der2.asn1; // $ExpectType 3
ca.der2.x509; // $ExpectType 4

ca.hash(0); // $ExpectType (certificate: string | Buffer) => string
ca.hash(1); // $ExpectType (certificate: string | Buffer) => string
ca.hash(); // $ExpectType (certificate: string | Buffer) => string
ca.hash(0)("foo"); // $ExpectType string
ca.hash(0)(Buffer.from("foo")); // $ExpectType string
ca.hash(0, "foo"); // $ExpectType string
ca.hash(0, Buffer.from("foo")); // $ExpectType string
ca.hash(undefined, "foo"); // $ExpectType string
ca.hash(undefined, Buffer.from("foo")); // $ExpectType string

ca.inject(true); // $ExpectType void
ca.inject("+"); // $ExpectType void
ca.inject(true, ["foo"]); // $ExpectType void
ca.inject("+", ["foo"]); // $ExpectType void

ca.exe(); // $ExpectType string
ca.exe("foo"); // $ExpectType string

// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ format: ca.der2.asn1 });
ca({ format: ca.der2.der });
ca({ format: ca.der2.pem });
ca({ format: ca.der2.txt });
ca({ format: ca.der2.x509 });
ca({ format: 1 });
// @ts-expect-error
ca({ format: 6 });

// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ store: ["ca"] });
ca({ store: ["root"] });
ca({ store: ["my"] });
ca({ store: ["trustedpublisher"] });
ca({ store: ["ca", "root", "my", "trustedpublisher"] });
// @ts-expect-error
ca({ store: ["foo"] });

// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ unique: true });

// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ ondata: [] });
ca({
    ondata: certificate => {
        certificate; // $ExpectType Certificate
    },
});

// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ onend: () => {} });
// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ fallback: true });
// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ async: true });
// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ inject: true });
ca({ inject: "+" });
// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({ save: [] });
ca({ save: ["foo"] });
ca({ save: true });
// $ExpectType void | AsyncGenerator<Certificate, any, unknown> | Generator<Certificate, any, unknown>
ca({
    onsave: path => {
        path; // $ExpectType string | undefined
    },
});

// $ExpectType Generator<Certificate, any, unknown>
ca({ generator: true });
// $ExpectType AsyncGenerator<Certificate, any, unknown>
ca({ generator: true, async: true });
