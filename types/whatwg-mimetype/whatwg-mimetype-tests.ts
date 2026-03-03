import { computedMIMEType, MIMEType } from "whatwg-mimetype";

// test type exports
type MT = MIMEType;
type MTP = MIMEType.MIMETypeParameters;

const mt = MIMEType.parse("text/plain"); // $ExpectType MIMEType | null

if (mt != null) {
    mt.type; // $ExpectType string
    mt.type = "text";
    mt.subtype; // $ExpectType string
    mt.subtype = "plain";
    mt.essence; // $ExpectType string
    // @ts-expect-error
    mt.essence = "";
    mt.parameters; // $ExpectType MIMETypeParameters
    // @ts-expect-error
    mt.parameters = mt.parameters;
    mt.isXML(); // $ExpectType boolean
    mt.isHTML(); // $ExpectType boolean
    mt.isJavaScript(); // $ExpectType boolean
    mt.isJavaScript({ prohibitParameters: true }); // $ExpectType boolean

    mt.parameters.size; // $ExpectType number
    mt.parameters.get("key"); // $ExpectType string | undefined
    mt.parameters.has("key"); // $ExpectType boolean
    mt.parameters.set("key", "value"); // $ExpectType MIMETypeParameters
    mt.parameters.clear(); // $ExpectType void
    mt.parameters.delete("key"); // $ExpectType boolean
    // $ExpectType void
    mt.parameters.forEach((value, key, map) => {
        value; // $ExpectType string
        key; // $ExpectType string
        map; // $ExpectType Map<string, string>
    }, null);
    mt.parameters.keys(); // $ExpectType IterableIterator<string>
    mt.parameters.values(); // $ExpectType IterableIterator<string>
    mt.parameters.entries(); // $ExpectType IterableIterator<[string, string]>
    mt.parameters[Symbol.iterator](); // $ExpectType IterableIterator<[string, string]>
}

// test computedMIMEType function
const resource = new Uint8Array([0x00, 0x01, 0x02]);

// Test basic call with resource only
computedMIMEType(resource); // $ExpectType MIMEType

// Test with all options provided
// $ExpectType MIMEType
computedMIMEType(resource, {
    contentTypeHeader: "text/html",
    providedType: "text/plain",
    noSniff: true,
    isSupported: (mimeType: MIMEType) => true,
});

// Test with partial options
computedMIMEType(resource, { contentTypeHeader: "text/html" }); // $ExpectType MIMEType
computedMIMEType(resource, { providedType: "text/plain" }); // $ExpectType MIMEType
computedMIMEType(resource, { noSniff: false }); // $ExpectType MIMEType
//
// $ExpectType MIMEType
computedMIMEType(resource, {
    isSupported: (mimeType) => {
        mimeType; // $ExpectType MIMEType
        return false;
    },
});

// Test that invalid parameters are rejected
// @ts-expect-error
computedMIMEType();
// @ts-expect-error
computedMIMEType("not a Uint8Array");
// @ts-expect-error
computedMIMEType(resource, { invalidOption: true });
// @ts-expect-error
computedMIMEType(resource, { contentTypeHeader: 123 });
// @ts-expect-error
computedMIMEType(resource, { noSniff: "true" });
// @ts-expect-error
computedMIMEType(resource, { isSupported: "not a function" });
