import { DigitalLink, Utils } from "digital-link.js";

// $ExpectType DigitalLink
const digitalLinkFromString = DigitalLink("");

// $ExpectType DigitalLink
const dl1 = DigitalLink({
    domain: "https://dlnkd.tn.gg",
    identifier: {
        "01": "00860080001300",
    },
    keyQualifiers: {
        21: "43786",
        10: "12345",
    },
    keyQualifiersOrder: ["10", "21"],
    attributes: {
        thngId: "UMwxDXBdUbxgtyRaR2HBrc4r",
    },
});

// $ExpectType DigitalLink
const dl2 = DigitalLink({
    domain: "https://dlnkd.tn.gg",
    identifier: {
        "01": "00860080001300",
    },
    keyQualifiers: {
        21: "43786",
        10: "12345",
    },
    sortKeyQualifiers: true,
    attributes: {
        thngId: "UMwxDXBdUbxgtyRaR2HBrc4r",
    },
});

const dl3 = DigitalLink(); // $ExpectType DigitalLink
dl3.setDomain("https://dlnkd.tn.gg"); // $ExpectType DigitalLink
dl3.setIdentifier("01", "00860080001300"); // $ExpectType DigitalLink
dl3.setKeyQualifier("21", "43786"); // $ExpectType DigitalLink
dl3.setKeyQualifier("10", "12345"); // $ExpectType DigitalLink
dl3.setKeyQualifiersOrder(["10", "21"]); // $ExpectType DigitalLink
dl3.setAttribute("thngId", "UMwxDXBdUbxgtyRaR2HBrc4r"); // $ExpectType DigitalLink

// $ExpectType DigitalLink
const dl4 = DigitalLink()
    .setDomain("https://dlnkd.tn.gg")
    .setIdentifier("01", "00860080001300")
    .setKeyQualifier("21", "43786")
    .setKeyQualifier("10", "12345")
    .setKeyQualifiersOrder(["10", "21"])
    .setAttribute("thngId", "UMwxDXBdUbxgtyRaR2HBrc4r");

// $ExpectType DigitalLink
const dl5 = DigitalLink("https://dlnkd.tn.gg/01/00860080001300/10/12345/21/43786");

const uri = dl5.toWebUriString(); // $ExpectType string
const jsonString = dl5.toJsonString(); // $ExpectType string
const isValid = dl5.isValid(); // $ExpectType boolean
const trace = dl5.getValidationTrace(); // $ExpectType ValidationTrace
const compressedUri = dl5.toCompressedWebUriString();

// Compress a URI
const compressedUriFromUtils = Utils.compressWebUri(uri); // $ExpectType string

// Compress without optimisations or compressing other key-value pairs
const useOptimisations = false;
const compressOtherKeyValuePairs = false;
const semiCompressedUri = Utils.compressWebUri(uri, useOptimisations, compressOtherKeyValuePairs); // $ExpectType string

// Decompress a compressed URI
const decompressedUri = Utils.decompressWebUri(compressedUri); // $ExpectType string

// Detect if a URI is compressed
const isCompressed = Utils.isCompressedWebUri(compressedUri); // $ExpectType boolean

// Validate a GTIN
const gtin = "00860080001300";
const rule = Utils.Rules.gtin;
const isRuleValid = Utils.testRule(rule, gtin); // $ExpectType boolean

// See all the parser trace steps for a given DigitalLink URI
const traceSpanHtml = Utils.generateTraceHtml(dl5.toWebUriString()); // $ExpectType string

// See all the parser stats for a given DigitalLink URI
const statsSpanHtml = Utils.generateStatsHtml(dl5.toWebUriString()); // $ExpectType string

// See all the parser results for a given DigitalLink URI
const resultsSpanHtml = Utils.generateResultsHtml(dl5.toWebUriString()); // $ExpectType string
