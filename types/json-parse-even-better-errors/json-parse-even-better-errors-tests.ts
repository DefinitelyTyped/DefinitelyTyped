import parseJson = require("json-parse-even-better-errors");

// Basic parsing
const parsed: any = parseJson("{\"foo\": \"bar\"}");

// With reviver
const withReviver: any = parseJson("{\"date\": \"2024-01-01\"}", (key, value) => {
    if (key === "date") return new Date(value);
    return value;
});

// With context for error messages
const withContext: any = parseJson("{}", undefined, "package.json");

// noExceptions - returns undefined on failure
const safe: any = parseJson.noExceptions("invalid json");
const safeValid: any = parseJson.noExceptions("{\"foo\": \"bar\"}");
const safeReviver: any = parseJson.noExceptions("{\"a\": 1}", (key, val) => val);

// Error handling
try {
    parseJson("invalid");
} catch (e) {
    if (e instanceof parseJson.JSONParseError) {
        const pos: number = e.position;
        const code: "EJSONPARSE" = e.code;
        const sysErr: Error = e.systemError;
        const msg: string = e.message;
    }
}

// Construct error directly
const err = new parseJson.JSONParseError(
    new SyntaxError("Unexpected token"),
    "invalid json",
    "test.json",
);
