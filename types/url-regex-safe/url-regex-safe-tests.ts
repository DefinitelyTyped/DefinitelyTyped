import createUrlRegex = require("url-regex-safe");

const regex: RegExp = createUrlRegex();

const regexWithOptions: RegExp = createUrlRegex({ auth: true, tlds: [".domain"] });
