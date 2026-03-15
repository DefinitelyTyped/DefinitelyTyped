import sourceMappingURL = require("source-map-url");

const code = "// generated code\n//# sourceMappingURL=foo.js.map";

// regex
const re: RegExp = sourceMappingURL.regex;

// getFrom
const url: string | null = sourceMappingURL.getFrom(code);

// existsIn
const exists: boolean = sourceMappingURL.existsIn(code);

// removeFrom
const cleaned: string = sourceMappingURL.removeFrom(code);

// insertBefore
const inserted: string = sourceMappingURL.insertBefore(code, "\n// some comment\n");
