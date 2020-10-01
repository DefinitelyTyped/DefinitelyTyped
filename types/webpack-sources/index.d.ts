// Type definitions for webpack-sources 2.0
// Project: https://github.com/webpack/webpack-sources
// Definitions by: e-cloud <https://github.com/e-cloud>
//                 Chris Eppstein <https://github.com/chriseppstein>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export import CachedSource = require('./lib/CachedSource');
export import CompatSource = require('./lib/CompatSource');
export import ConcatSource = require('./lib/ConcatSource');
export import OriginalSource = require('./lib/OriginalSource');
export import PrefixSource = require('./lib/PrefixSource');
export import RawSource = require('./lib/RawSource');
export import ReplaceSource = require('./lib/ReplaceSource');
export import SizeOnlySource = require('./lib/SizeOnlySource');
export import Source = require('./lib/Source');
export import SourceMapSource = require('./lib/SourceMapSource');
export { CachedData, MapOptions, Replacement, SourceAndMapMixin, SourceAndMapResult, SourceLike } from './lib/index';
