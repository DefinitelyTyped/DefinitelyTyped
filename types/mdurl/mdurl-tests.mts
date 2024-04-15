import { decode, encode, format, parse, Url } from "mdurl";

// @ts-expect-error Url is a type only export
const x = new Url();

const encoded: string = encode("%%%");

const decoded: string = decode(encoded);

const url: Url = parse("HTTP://www.example.com/");

const urlStr: string = format(url);
