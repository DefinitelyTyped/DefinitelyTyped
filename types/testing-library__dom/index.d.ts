// Type definitions for @testing-library/dom 7.0
// Project: https://github.com/testing-library/dom-testing-library
// Definitions by: Alex Krolick <https://github.com/alexkrolick>
//                 Kent C Dodds <https://github.com/kentcdodds>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Weyert de Boer <https://github.com/weyert>
//                 Ronald Rey <https://github.com/reyronald>
//                 Justin Hall <https://github.com/wKovacs64>
//                 Wesley Tsai <https://github.com/wezleytsai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { getQueriesForElement } from './get-queries-for-element';
import * as queries from './queries';
import * as queryHelpers from './query-helpers';

declare const within: typeof getQueriesForElement;
export { queries, queryHelpers, within };

export * from './queries';
export * from './query-helpers';
export * from './screen';
export * from './wait';
export * from './wait-for';
export * from './wait-for-dom-change';
export * from './wait-for-element';
export * from './wait-for-element-to-be-removed';
export * from './matches';
export * from './get-node-text';
export * from './events';
export * from './get-queries-for-element';
export * from './pretty-dom';
export * from './role-helpers';
export * from './config';
