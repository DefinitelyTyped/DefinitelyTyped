import isEmail = require("sane-email-validation");
import { isAsciiEmail, isNotAsciiEmail, isNotEmail } from "sane-email-validation";

// $ExpectType boolean
isEmail("foo@bar.com");
// $ExpectType boolean
isNotEmail("foo@bar.com");
// $ExpectType boolean
isAsciiEmail("foo@bar.com");
// $ExpectType boolean
isNotAsciiEmail("foo@bar.com");

// $ExpectType boolean
isEmail("foo@bar.com");
// $ExpectType boolean
isEmail.isNotEmail("foo@bar.com");
// $ExpectType boolean
isEmail.isAsciiEmail("foo@bar.com");
// $ExpectType boolean
isEmail.isNotAsciiEmail("foo@bar.com");
