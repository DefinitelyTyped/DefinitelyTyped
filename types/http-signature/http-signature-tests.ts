import httpSignature = require("http-signature");
import http = require("node:http");

const request = new http.ClientRequest("http://127.0.0.1");

// --- parser.d.ts ---
httpSignature.parse(request); // $ExpectType ParseResponse
httpSignature.parse(request, {}); // $ExpectType ParseResponse
// $ExpectType ParseResponse
httpSignature.parse(request, {
    clockSkew: 300,
    headers: ["date"] as const,
    algorithms: ["foo"] as const,
    strict: true,
});

// --- signer.d.ts ---
httpSignature.isSigner({}); // $ExpectType boolean

// @ts-expect-error No options passed
httpSignature.sign(request);
// $ExpectType boolean
httpSignature.sign(request, {
    keyId: "foo",
    key: "bar",
    headers: ["date"] as const,
    algorithm: "foobar",
    httpVersion: "1.1",
    strict: true,
    expiresIn: 120,
    keyPassphrase: "baz",
});

// @ts-expect-error No options passed
httpSignature.createSigner();
// $ExpectType _RequestSigner
const signer = httpSignature.createSigner({
    keyId: "foo",
    key: "bar",
    algorithm: "foobar",
    keyPassphrase: "baz",
});

signer.writeDateHeader(); // $ExpectType string

// --- utils.d.ts ---
httpSignature.sshKeyToPEM("key"); // $ExpectType string
httpSignature.sshKeyFingerprint("key"); // $ExpectType string
httpSignature.pemToRsaSSHKey("key", "This is a key"); // $ExpectType string

// --- verify.d.ts ---
httpSignature.verify(httpSignature.parse(request), "key"); // $ExpectType boolean
httpSignature.verifyHMAC(httpSignature.parse(request), "secret"); // $ExpectType boolean
