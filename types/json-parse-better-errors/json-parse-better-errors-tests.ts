import parseJson = require("json-parse-better-errors");

parseJson(`"hello"`);
parseJson(`trash`);
parseJson(`{ "a": {} }`, k => k.toLowerCase(), 20);
parseJson(`{
    "compilerOptions": {

    }
}
`, undefined, 40);
