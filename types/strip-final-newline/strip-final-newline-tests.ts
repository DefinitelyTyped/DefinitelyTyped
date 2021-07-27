import stripFinalNewline from "strip-final-newline";

stripFinalNewline("foo\n"); // $ExpectType string
stripFinalNewline(Buffer.from("foo\n")); // $ExpectType Buffer
