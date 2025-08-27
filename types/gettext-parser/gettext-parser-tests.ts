import { mo, po } from "gettext-parser";
import { createReadStream } from "node:fs";

let parsed = po.parse("foo", { defaultCharset: "utf-8", validation: true });
parsed = po.parse("foo", { defaultCharset: "utf-8" });
parsed = po.parse("foo", { validation: true });
parsed = po.parse("foo", { validation: false });
parsed = po.parse(Buffer.from("bar"));

let compiled = po.compile(parsed, {});
compiled = po.compile(parsed);
compiled = po.compile(parsed, { foldLength: 80 });
compiled = po.compile(parsed, { escapeCharacters: true });
compiled = po.compile(parsed, { escapeCharacters: false });
compiled = po.compile(parsed, { sort: true });
compiled = po.compile(parsed, { sort: false });
compiled = po.compile(parsed, { eol: "\n" });
compiled = po.compile(parsed, { sort: (a, b) => a.msgid.length > b.msgid.length ? 1 : -1 });

const poParseStream = po.createParseStream();
const input = createReadStream("bar");
input.pipe(poParseStream);
poParseStream.on("data", (data) => {
    console.log(data.translations[""]);
});

parsed = mo.parse(Buffer.from("bar"), "wrong-charset");
parsed = mo.parse(compiled, "wrong-charset");

const charset: string = parsed.charset;

const firstHeader: string = parsed.headers["firstHeader"];
const firstHeaderAsString: string = firstHeader;

const firstTranslation = parsed.translations["firstContext"]["firstTranslation"];
firstTranslation.msgctxt = firstHeaderAsString;
firstTranslation.msgid = charset;
firstTranslation.msgid_plural;
firstTranslation.msgstr;
firstTranslation.comments;
