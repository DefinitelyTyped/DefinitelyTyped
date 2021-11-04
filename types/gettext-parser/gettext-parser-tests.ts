import { po, mo } from 'gettext-parser';

let parsed = po.parse("foo", "utf-8");
let compiled = po.compile(parsed, {});
parsed = po.parse(Buffer.from("bar"));
compiled = po.compile(parsed, { anyOption: false });

parsed = mo.parse(compiled, "wrong-charset");
compiled = mo.compile(parsed, { noOption: 3 });

const charset: string = parsed.charset;

const firstHeader: string = parsed.headers["firstHeader"];
const firstHeaderAsString: string = firstHeader;

const firstTranslation = parsed.translations["firstContext"]["firstTranslation"];
firstTranslation.msgctxt = firstHeaderAsString;
firstTranslation.msgid = charset;
firstTranslation.msgid_plural;
firstTranslation.msgstr;
firstTranslation.comments;
