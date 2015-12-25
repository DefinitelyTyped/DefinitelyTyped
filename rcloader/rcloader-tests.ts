/// <reference path="./rcloader.d.ts" />

import RcLoader = require("rcloader");

const rcLoader = new RcLoader(".configfilename", {
    lookup: true
});

rcLoader.for("foo.json", (err, fileOpts) => {
    // send the file along
});
