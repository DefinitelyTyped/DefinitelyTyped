import { atob, atobu, btoa, btoau } from "b2a";

const b64 = btoa ("foo");
const text = atob (b64);

// Conversion to Base64 and back
const encoded = btoa('中文');  // $ExpectType string
const decoded = atob('5Lit5paH');  // $ExpectType string

// Conversion to Base64url and back
const encoded_url = btoau('μπορούμε'); // $ExpectType string
const decoded_url = atobu('zrzPgM6_z4HOv8-NzrzOtQ=='); // $ExpectedType string
