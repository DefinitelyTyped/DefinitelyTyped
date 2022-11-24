// Type definitions for rdf-dataset-ext 1.0
// Project: https://github.com/rdf-ext/rdf-dataset-ext
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import addAll = require('./addAll');
import deleteMatch = require('./deleteMatch');
import equals = require('./equals');
import fromStream = require('./fromStream');
import toCanonical = require('./toCanonical');
import toStream = require('./toStream');

declare const datasetExt: {
    addAll: typeof addAll,
    deleteMatch: typeof deleteMatch,
    equals: typeof equals,
    fromStream: typeof fromStream,
    toCanonical: typeof toCanonical,
    toStream: typeof toStream
};

export = datasetExt;
