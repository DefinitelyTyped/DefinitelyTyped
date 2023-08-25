import accepts = require("accepts");

const req: any = {};

const accept = accepts(req);

const charsets = accept.charsets();
const charsetFromEmpty = accept.charset();
const charsetFromParams = accept.charset("json", "text");
const charsetFromArray = accept.charset(["json", "text"]);

const encodings = accept.encodings();
const encodingFromEmpty = accept.encoding();
const encodingFromParams = accept.encoding("json", "text");
const encodingFromArray = accept.encoding(["json", "text"]);

const languages = accept.languages();
const languageFromEmpty = accept.language();
const languageFromParams = accept.language("json", "text");
const languageFromArray = accept.language(["json", "text"]);

const types = accept.types();
const typeFromEmpty = accept.type();
const typeFromParams = accept.type("json", "text");
const typeFromArray = accept.type(["json", "text"]);
