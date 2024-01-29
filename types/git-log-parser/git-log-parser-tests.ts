import log = require("git-log-parser");

log.parse({
    before: new Date(Date.now() - 60 * 60 * 1000),
}).pipe(process.stdout);
