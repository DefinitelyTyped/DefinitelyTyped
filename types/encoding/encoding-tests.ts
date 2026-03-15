import { convert } from "encoding";

const result: Buffer = convert("hello", "UTF-8");

const encoded: Buffer = convert("hello", "ISO-8859-1", "UTF-8");

const fromBuffer: Buffer = convert(Buffer.from("hello"), "WINDOWS-1252", "UTF-8");

// @ts-expect-error - first argument must be string or Buffer
convert(123, "UTF-8");
