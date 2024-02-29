import polar = require("array-polar");

polar([0, 1, 1, 0]); // $ExpectType number[]
polar(new Uint8Array([0, 1, 1, 0])); // $ExpectType Uint8Array
polar({ 0: 0, 1: 1, 2: 1, 3: 0, length: 4 }); // $ExpectType { 0: number; 1: number; 2: number; 3: number; length: number; }
polar([0, 1, 1, 0], [1, 1]); // $ExpectType number[]
polar([0, 1, 1, 0], [1, 1] as const); // $ExpectType number[]
polar.polar([0, 1, 1, 0]); // $ExpectType number[]
polar.polar({ 0: 0, 1: 1, 2: 1, 3: 0, length: 4 }); // $ExpectType { 0: number; 1: number; 2: number; 3: number; length: number; }
polar.polar([0, 1, 1, 0], [1, 1]); // $ExpectType number[]
polar.polar([0, 1, 1, 0], [1, 1] as const); // $ExpectType number[]
polar.cartesian([1, 0, 1, Math.PI / 2]); // $ExpectType number[]
polar.cartesian({ 0: 1, 1: 0, 2: 1, 3: Math.PI / 2, length: 4 }); // $ExpectType { 0: number; 1: number; 2: number; 3: number; length: number; }
polar.cartesian([1, 0, 1, Math.PI / 2], [1, 1]); // $ExpectType number[]
polar.cartesian([1, 0, 1, Math.PI / 2], [1, 1] as const); // $ExpectType number[]
