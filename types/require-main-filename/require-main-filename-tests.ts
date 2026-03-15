import requireMainFilename = require("require-main-filename");

// Default usage
const filename: string = requireMainFilename();

// With custom require
const filenameCustom: string = requireMainFilename(require);
