/// <reference path="./rcloader.d.ts" />

import rcloader = require("rcloader");

const rcLoader = new rcloader.RcLoader(".configfilename", {
    lookup: true
});

rcLoader.for("foo.json", (err, fileOpts) => {
    // send the file along
});
