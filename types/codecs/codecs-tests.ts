import { Codec, CodecName, InType, JsonCodec, NamedCodec, OutType } from "codecs";
import codecs = require("codecs");

{
    codecs().name; // $ExpectType "binary"
    codecs(undefined).name; // $ExpectType "binary"
    const set: [Codec<undefined>, InType<undefined>, OutType<undefined>, CodecName<undefined>] = [] as any;
    set; // $ExpectType [BinaryCodec, string | Uint8Array, Buffer, "binary"]
}
{
    codecs(null).name; // $ExpectType "binary"
    const set: [Codec<null>, InType<null>, OutType<null>, CodecName<null>] = [] as any;
    set; // $ExpectType [BinaryCodec, string | Uint8Array, Buffer, "binary"]
}
{
    codecs("any").name; // $ExpectType "binary"
    const set: [Codec<"any">, InType<"any">, OutType<"any">, CodecName<"any">] = [] as any;
    set; // $ExpectType [BinaryCodec, string | Uint8Array, Buffer, "binary"]
}
{
    codecs("any", codecs.json).name; // $ExpectType "json"
    const set: [
        Codec<"any", JsonCodec>,
        InType<"any", JsonCodec>,
        OutType<"any", JsonCodec>,
        CodecName<"any", JsonCodec>,
    ] = [] as any;
    set; // $ExpectType [JsonCodec, any, JsonValue, "json"]
}
{
    interface custom {
        foo: NamedCodec<"foo", string, number>;
    }
    codecs("any", codecs.json).name; // $ExpectType "json"
    const set: [
        Codec<"foo", JsonCodec, custom>,
        InType<"foo", JsonCodec, custom>,
        OutType<"foo", JsonCodec, custom>,
        CodecName<"foo", JsonCodec, custom>,
    ] = [] as any;
    set; // $ExpectType [NamedCodec<"foo", string, number>, string, number, "foo"]
}
{
    const codec = "ascii";
    codecs[codec].name; // $ExpectType "ascii"
    codecs(codec).name; // $ExpectType "ascii"
    codecs[codec].encode("hello"); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType string
    const set: [Codec<"ascii">, InType<"ascii">, OutType<"ascii">, CodecName<"ascii">] = [] as any;
    set; // $ExpectType [AsciiCodec, string, string, "ascii"]
}
{
    const codec = "base64";
    codecs[codec].name; // $ExpectType "base64"
    codecs(codec).name; // $ExpectType "base64"
    codecs[codec].encode("hello"); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType string
    const set: [Codec<"base64">, InType<"base64">, OutType<"base64">, CodecName<"base64">] = [] as any;
    set; // $ExpectType [Base64Codec, string, string, "base64"]
}
{
    const codec = "binary";
    codecs[codec].name; // $ExpectType "binary"
    codecs(codec).name; // $ExpectType "binary"
    codecs[codec].encode("hello"); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType Buffer
    const set: [Codec<"binary">, InType<"binary">, OutType<"binary">, CodecName<"binary">] = [] as any;
    set; // $ExpectType [BinaryCodec, string | Uint8Array, Buffer, "binary"]
}
{
    const codec = "hex";
    codecs[codec].name; // $ExpectType "hex"
    codecs(codec).name; // $ExpectType "hex"
    codecs[codec].encode("hello"); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType string
    const set: [Codec<"hex">, InType<"hex">, OutType<"hex">, CodecName<"hex">] = [] as any;
    set; // $ExpectType [HexCodec, string, string, "hex"]
}
{
    const codec = "json";
    codecs[codec].name; // $ExpectType "json"
    codecs(codec).name; // $ExpectType "json"
    codecs[codec].encode({ hello: "world" }); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType JsonValue
    const set: [Codec<"json">, InType<"json">, OutType<"json">, CodecName<"json">] = [] as any;
    set; // $ExpectType [JsonCodec, any, JsonValue, "json"]
}
{
    const codec = "ndjson";
    codecs[codec].name; // $ExpectType "ndjson"
    codecs(codec).name; // $ExpectType "ndjson"
    codecs[codec].encode({ hello: "world" }); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType JsonValue
    const set: [Codec<"ndjson">, InType<"ndjson">, OutType<"ndjson">, CodecName<"ndjson">] = [] as any;
    set; // $ExpectType [NDJsonCodec, any, JsonValue, "ndjson"]
}
{
    const codec = "ucs-2";
    codecs(codec).name; // $ExpectType "ucs2"
    const set: [Codec<"ucs-2">, InType<"ucs-2">, OutType<"ucs-2">, CodecName<"ucs-2">] = [] as any;
    set; // $ExpectType [Ucs2Codec, string, string, "ucs2"]
}
{
    const codec = "ucs2";
    codecs[codec].name; // $ExpectType "ucs2"
    codecs(codec).name; // $ExpectType "ucs2"
    codecs[codec].encode("hello"); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType string
    const set: [Codec<"ucs2">, InType<"ucs2">, OutType<"ucs2">, CodecName<"ucs2">] = [] as any;
    set; // $ExpectType [Ucs2Codec, string, string, "ucs2"]
}
{
    const codec = "utf-8";
    codecs(codec).name; // $ExpectType "utf-8"
    const set: [Codec<"utf-8">, InType<"utf-8">, OutType<"utf-8">, CodecName<"utf-8">] = [] as any;
    set; // $ExpectType [Utf8Codec, string, string, "utf-8"]
}
{
    const codec = "utf8";
    codecs[codec].name; // $ExpectType "utf-8"
    codecs(codec).name; // $ExpectType "utf-8"
    codecs[codec].encode("hello"); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType string
    const set: [Codec<"utf8">, InType<"utf8">, OutType<"utf8">, CodecName<"utf8">] = [] as any;
    set; // $ExpectType [Utf8Codec, string, string, "utf-8"]
}
{
    const codec = "utf16-le";
    codecs(codec).name; // $ExpectType "utf16le"
    const set: [Codec<"utf16-le">, InType<"utf16-le">, OutType<"utf16-le">, CodecName<"utf16-le">] = [] as any;
    set; // $ExpectType [Utf16leCodec, string, string, "utf16le"]
}
{
    const codec = "utf16le";
    codecs[codec].name; // $ExpectType "utf16le"
    codecs(codec).name; // $ExpectType "utf16le"
    codecs[codec].encode("hello"); // $ExpectType Buffer
    codecs[codec].decode(new Uint8Array()); // $ExpectType string
    const set: [Codec<"utf16le">, InType<"utf16le">, OutType<"utf16le">, CodecName<"utf16le">] = [] as any;
    set; // $ExpectType [Utf16leCodec, string, string, "utf16le"]
}
