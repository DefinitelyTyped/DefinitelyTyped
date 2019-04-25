// Type definitions for simplecrawler 1.1
// Project: https://github.com/simplecrawler/simplecrawler
// Definitions by: Pedro Mutter <https://github.com/MutterPedro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import Crawler from './crawler';
import * as queue from './queue';
import * as cache from './cache';

export default Crawler;
export { queue, cache };

/**
 * @deprecated
 */
export function crawl(): never;
