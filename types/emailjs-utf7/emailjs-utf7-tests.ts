import { decode, encode, encodeAll, imapDecode, imapEncode } from "emailjs-utf7";

// @ts-expect-error
encode();
encode("testing", "testmask"); // $ExpectType string
encode("testing"); // $ExpectType string
// @ts-expect-error
encode(5);
// @ts-expect-error
encode(true);

// @ts-expect-error
encodeAll();
encodeAll("testing"); // $ExpectType string
// @ts-expect-error
encodeAll(5);
// @ts-expect-error
encodeAll(true);

// @ts-expect-error
decode();
decode("BCgEMAQxBDsEPgQ9BEs"); // $ExpectType string
// @ts-expect-error
decode(5);
// @ts-expect-error
decode(true);

// @ts-expect-error
imapEncode();
imapEncode("testing"); // $ExpectType string
// @ts-expect-error
imapEncode(5);
// @ts-expect-error
imapEncode(true);

// @ts-expect-error
imapDecode();
imapDecode("&BCgEMAQxBDsEPgQ9BEs-"); // $ExpectType string
// @ts-expect-error
imapDecode(5);
// @ts-expect-error
imapDecode(true);
