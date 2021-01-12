// Type definitions for @rdfjs/to-ntriples 1.0
// Project: https://github.com/rdfjs-base/to-ntriples
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import quad = require('./lib/quad');
import term = require('./lib/term');

declare const toNtriples: {
    quadToNTriples: typeof quad;
    termToNTriples: typeof term;
};

export = toNtriples;
