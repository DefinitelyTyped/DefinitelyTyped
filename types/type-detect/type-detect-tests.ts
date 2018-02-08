import type from 'type-detect';

// $ExpectType string
type(123);

// $ExpectType string
type('foo');

// $ExpectType string
type({});

// $ExpectType string
type([]);

// $ExpectType string
type(null);

// $ExpectType string
type(undefined);

// $ExpectType string
type(new Map());

// $ExpectType string
type(new Set());

