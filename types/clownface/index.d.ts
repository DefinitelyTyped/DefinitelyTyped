// Type definitions for clownface 0.12
// Project: https://github.com/rdf-ext/clownface
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Term, Dataset, Quad_Graph } from 'rdf-js';
import Clownface = require('./lib/Clownface');

interface ClownfaceOptions<D extends Dataset> {
    dataset?: D;
    graph?: Quad_Graph;
    term?: Term | Term[];
    value?: string | string[];
    _context?: any;
}

declare function factory<D extends Dataset>(options: ClownfaceOptions<D>): Clownface<D>;

export = factory;
