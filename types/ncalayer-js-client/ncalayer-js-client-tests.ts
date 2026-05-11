import { NCALayerClient } from "ncalayer-js-client";

const client = new NCALayerClient();

// Connection and basic props
// $ExpectType Promise<string>
client.connect();

// $ExpectType boolean
client.multisignAvailable;

// $ExpectType string
client.url;

// Static presets and utilities
// $ExpectType ReadonlyArray<string>
NCALayerClient.basicsStorageKAZTOKEN;
// $ExpectType null
NCALayerClient.basicsStorageAll;
// Presets are available as static fields
NCALayerClient.basicsCMSParams;
NCALayerClient.basicsXMLParams;
NCALayerClient.basicsSignerAny;
// $ExpectType string
NCALayerClient.fileStorageType;

// $ExpectType string
NCALayerClient.arrayBufferToB64(new ArrayBuffer(8));
// $ExpectType Promise<string | ReadonlyArray<string>>
NCALayerClient.normalizeDataToSign("aGVsbG8=");

// Basics sign helpers
// $ExpectType Promise<string | ReadonlyArray<string>>
client.basicsSign(
    null,
    "cms",
    "aGVsbG8=",
    NCALayerClient.basicsCMSParams,
    NCALayerClient.basicsSignerAny,
    "ru",
);

// $ExpectType Promise<string | ReadonlyArray<string>>
client.basicsSignCMS(
    null,
    "aGVsbG8=",
    NCALayerClient.basicsCMSParams,
    NCALayerClient.basicsSignerAny,
);

// $ExpectType Promise<string | ReadonlyArray<string>>
client.basicsSignXML(
    null,
    "<doc/>",
    NCALayerClient.basicsXMLParams,
    NCALayerClient.basicsSignerAny,
);

// Invalid basics format
client.basicsSign(
    null,
    // @ts-expect-error
    "pdf",
    "a",
    NCALayerClient.basicsCMSParams,
    NCALayerClient.basicsSignerAny,
    "ru",
);

// Logo setting accepts various inputs
// $ExpectType Promise<void>
client.setLogoForBasicsSign("aGVsbG8=");
client.setLogoForBasicsSign(
    // @ts-expect-error
    123,
);

// KMD HTTP API helpers
// $ExpectType Promise<boolean>
client.kmdMultisignAvailable();
// $ExpectType Promise<void>
client.startKmdMultisign(2, true, true);
// $ExpectType Promise<string>
client.kmdMultisignNext("aGVsbG8=");

// Token and key info
// $ExpectType Promise<ReadonlyArray<string>>
client.getActiveTokens();
// $ExpectType Promise<Record<string, unknown>>
client.getKeyInfo("PKCS12");

// CMS creation APIs
// $ExpectType Promise<string>
client.createCAdESFromBase64("PKCS12", "aGVsbG8=");
// $ExpectType Promise<string>
client.createCAdESFromBase64Hash("PKCS12", "aGVsbG8=");
client.createCAdESFromBase64(
    "PKCS12",
    // @ts-expect-error
    42,
);

// XML signing APIs
// $ExpectType Promise<string>
client.signXml("PKCS12", "<root/>");
// $ExpectType Promise<ReadonlyArray<string>>
client.signXmls("PKCS12", ["<a/>", "<b/>"]);

// Locale
// $ExpectType Promise<void>
client.changeLocale("kk");
