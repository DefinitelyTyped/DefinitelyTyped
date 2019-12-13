// Type definitions for clownface 0.12
// Project: https://github.com/rdf-ext/clownface
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Term, DatasetCore, Quad_Graph } from 'rdf-js';
import { SafeClownface, ClownfaceOptions, WithTerm, WithValue } from './lib';
import Clownface = require('./lib/Clownface');

declare function factory<D extends DatasetCore>(options: ClownfaceOptions<D> & WithTerm | ClownfaceOptions<D> & WithValue): SafeClownface<D>;
declare function factory<D extends DatasetCore>(options: ClownfaceOptions<D>): Clownface<D>;

export = factory;
