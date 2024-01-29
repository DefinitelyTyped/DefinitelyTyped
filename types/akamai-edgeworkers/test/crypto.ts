import { crypto, pem2ab } from "crypto";

const raw_key = new Uint8Array([93, 210, 19, 203, 234, 199, 254, 16, 118, 129, 214, 61, 229, 117, 91, 33]);
const iv = new Uint8Array([237, 234, 45, 119, 168, 16, 178, 26, 14, 182, 253, 39, 79, 181, 180, 219]);
const data = new Uint8Array([
    44,
    237,
    221,
    235,
    17,
    155,
    115,
    79,
    8,
    211,
    94,
    216,
    92,
    183,
    9,
    106,
    15,
    210,
    0,
    52,
    92,
    163,
    2,
    222,
    130,
    70,
    80,
    132,
    80,
    243,
    28,
    110,
    25,
    18,
    20,
    98,
    63,
    51,
    5,
    136,
    72,
    206,
    212,
    46,
    255,
    220,
    131,
    188,
    133,
    109,
]);
const keyData: Uint8Array = new Uint8Array([93, 210, 19, 203, 234, 199, 254, 16, 118, 129, 214, 61, 229, 117, 91, 33]);
const signature = new Uint8Array([
    77,
    125,
    140,
    9,
    158,
    214,
    29,
    176,
    0,
    44,
    34,
    9,
    111,
    158,
    2,
    97,
    66,
    238,
    89,
    240,
    146,
    171,
    200,
    99,
    133,
    231,
    60,
    89,
    44,
    156,
    26,
    7,
    111,
    198,
    231,
    11,
    224,
    154,
    151,
    224,
    84,
    120,
    183,
    185,
    175,
    34,
    165,
    99,
    240,
    102,
    21,
    251,
    211,
    191,
    61,
    224,
    181,
    30,
    10,
    108,
    93,
    192,
    218,
    43,
]);
const algorithm = "SHA-1";
const pemEncodedKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELScIYCjf+IOluv9pppNv0xIGXTBp
KlSNHLY0ZX554kjI8DknO3x8J5z+H31OX7spkrI6xdqj9Q0Ouoy6UmjJ3w==
-----END PUBLIC KEY-----`;
const array = new Uint32Array(1);

crypto.subtle.importKey("pkcs8", raw_key, { name: "RANDOM" }, true, ["encrypt", "decrypt", "sign"]);
crypto.subtle.importKey("spki", raw_key, { name: "RANDOM" }, true, ["wrapKey"]);
crypto.subtle.importKey("raw", raw_key, { name: "AES-GCM" }, false, ["encrypt"]);
crypto.subtle
    .importKey("raw", raw_key, "AES-CBC", false, ["encrypt", "decrypt"])
    .then((imported_key) => {
        crypto.subtle.encrypt(
            {
                name: "AES-CBC",
                iv,
            },
            imported_key,
            data,
        )
            .then(encrypted_data => {
                crypto.subtle.decrypt(
                    {
                        name: "AES-CBC",
                        iv,
                    },
                    imported_key,
                    encrypted_data,
                );
            });

        crypto.subtle.verify(
            {
                name: "ECDSA",
                hash: "SHA-256",
            },
            imported_key,
            signature,
            data,
        );
    });
crypto.subtle.importKey(
    "jwk",
    {
        p: "zX4AONtF4wJbADtApv2Xdxhmrc9KblpGdmrF-DxM_pbgcaWZek8qm0IrnJgdzhLt7pTiO6XMDLmUDMdR0T_3ZqAZK0OXmO8rjWoQaIB-ozwAfEZMuP9Wa4wHnRCaVCidReKzCw8_QkADlDtb6ak55cJ9JhZyfqm5ehwqY1sVkV8",
        kty: "RSA",
        q: "tPnz9Gg1Lfo4Sgvdq2rLBLzZKSSJR-ynQMwWt9CoxT3eRVZfaU0-WFiHFXwnh-Fa8EDwxsXTg_axvgq4eU8ajN2_SLTXHurimaRIdethFSsVDDQ9IUcJ8EUd5dYE2ALPy899ltSeBWf5yOJWlp2NA5AXdsOi26VfvZBUHpug14M",
        d: "b0oprOxqGptD3abeP1iadsA6Z3pYo4q1mWLb1d2qsLVPPhWiSoG_A7612Dw1xhYvsywHAPBcyXCh5pxebLccYnOYrfNh3Snm4tLcn6-G9VC15vFHTXYAil3ICd8Xy1LPNq-4znU6FcAcQSFV13WJdtUvC9ra_h9NdLYjzVLEbZdejz1uIRkjQXYECkZBZ7rA_OxflibdHTcmgokknRfzwQ4PZSkedggDxmovTk8uCAJBVbOKU1HiMxismamXttK4SjELdmtGv5QVdWQdqrXu7ZSIIxkvZBgijY1M6k3QKMHELSx5AW3Q3eSQozyjDfbCSwPOGNMkJcXMvj9rDIWjxQ",
        e: "AQAB",
        use: "sig",
        kid: "Unz7z2TzzYUCP6whBJDVLRxUFax69-e8SoDBcbhwNsc",
        qi: "MgtNJ5ao2zlDbqc3uaIjmzYyb2ntQibWjIf2XJH60rFrZ-SkO7OIqXgjECNCuqu77NaqoewwFvD2Qt0dKug9UWzbH9T2zoTp-c-nx_NVdjH8j-sL7TtgfPn3I0RP8UKGAWcOLTA4ISG_2ijVL1JeSeeu9DG5CC9cPFg4sOrxC30",
        dp: "yJw1w0vt0ky-Yl92IpB3igD8XLp9w3XGTFy4oDreP70zqD8uskUPJztWMC4hCslYFw6qPekCZ3nUmxULPujfsgSiDaaTHO6A6jGdiyfGeb1eC_TlecVsrNmrpR5MS9TKlStX93gPHbI4zEGW3Woj57YTT1eitx0iwZ81koGdcKk",
        alg: "RS256",
        dq: "ocVEclasIrsmkdnlfhLqAwQkQgisxiQepWdJb2oPUrCo_OXmR6SKdEI-DdB7LZUdyuDh2WyAU9eyriO7HoS9QOn-0KkGGlbv01LsiquqjleCavRPKG3tzl6aCRa0IbrxsEd7BdZsonx85TqdF-khYevtbXYXH6vF1xcqemm27q0",
        n: "kUU7iPtueQDvfUdERSfOWpnCAZWgpnHiaq5rO7281t4EAS_6NVhDs1JMkdvw0SgCiTWygxGgHpSG_o7ylISjULM2HLo7HovXqUl3k64QaZtFxC-S6wjwOIcnO_QTvB3PlA-ufXQJyN8tr_IA3vDTR45YWUK7xtfLCGVT6OJwwjtXjzW1qq20iqwwyjj-GPcW5hkTTO1kMg4Y6urbt_63xGBocnpowQRvqEqdmsRKKAeXUrXzdaTItHKubSzINTWg71vVmJ4vQcFzPGNRFuYbffXH6C_Jz-AyPTD3QBxrQDv3aoNY9c0mBb7Fv9P9-Ofh1Mat5UWG5fly7FP4GYAsnQ",
    },
    {
        name: "RSASSA-PKCS1-v1_5",
        hash: "SHA-256",
    },
    false,
    ["sign"],
).then((imported_key) => {
    crypto.subtle.sign(
        "RSASSA-PKCS1-v1_5",
        imported_key,
        data,
    );
});
crypto.subtle.importKey(
    "jwk",
    {
        kty: "oct",
        k: "Y0zt37HgOx-BY7SQjYVmrqhPkO44Ii2Jcb9yydUDPfE",
        alg: "HS256",
        ext: false,
    },
    {
        name: "HMAC",
        hash: "SHA-256",
    },
    false,
    ["sign", "verify"],
).then((imported_key) => {
    const data = Uint8Array.from([97, 110, 103, 117, 115, 32, 97, 110, 100, 32, 111, 119, 101, 110]);
    crypto.subtle.sign("HMAC", imported_key, data).then((sig) => {
        crypto.subtle.verify("HMAC", imported_key, sig, data);
    });
});

crypto.subtle.importKey("raw", keyData, { name: "AES-GCM" }, false, ["encrypt", "decrypt"])
    .then((imported_key) => {
        const iv: Uint8Array = new Uint8Array([
            237,
            234,
            45,
            119,
            168,
            16,
            178,
            26,
            14,
            182,
            253,
            39,
            79,
            181,
            180,
            219,
        ]);
        const raw_data: Uint8Array = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        crypto.subtle.encrypt({ name: "AES-GCM", iv: { iv }, tagLength: 96 }, imported_key, raw_data).then(
            (encrypted_data) => {
                crypto.subtle.decrypt(
                    {
                        name: "AES-GCM",
                        iv: { iv },
                        tagLength: 96,
                    },
                    imported_key,
                    encrypted_data,
                );
            },
        );
    });

crypto.subtle.digest(algorithm, data.buffer);

pem2ab(pemEncodedKey);

crypto.getRandomValues(array);
