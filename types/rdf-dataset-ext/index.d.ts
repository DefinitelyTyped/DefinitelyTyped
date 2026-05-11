import addAll = require("./addAll");
import deleteMatch = require("./deleteMatch");
import equals = require("./equals");
import fromStream = require("./fromStream");
import toCanonical = require("./toCanonical");
import toStream = require("./toStream");

declare const datasetExt: {
    addAll: typeof addAll;
    deleteMatch: typeof deleteMatch;
    equals: typeof equals;
    fromStream: typeof fromStream;
    toCanonical: typeof toCanonical;
    toStream: typeof toStream;
};

export = datasetExt;
