import parseurl = require("parseurl");

const req: any = {};

const parsedUrl = parseurl(req);
const originalParsedUrl = parseurl.original(req);
