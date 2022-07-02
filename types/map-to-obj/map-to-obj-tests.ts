'use strict';

import MapToObj from 'map-to-obj';

// $ExpectType Record<any, any>
MapToObj(new Map());

// $ExpectType Record<string, string> || Record<"hello", string>
MapToObj(new Map([['hello', 'world']]));

// $ExpectType Record<number, number> || Record<0, number>
MapToObj(new Map([[0, 1]]));

// $ExpectType Record<symbol, symbol>
MapToObj(new Map([[Symbol('hello'), Symbol('world')]]));

// @ts-expect-error
MapToObj(new Map([[{}, {}]]));
