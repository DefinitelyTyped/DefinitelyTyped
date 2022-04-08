import bemmer from 'bemmer';

// $ExpectType Builder
bemmer.createBuilder('cn1', 'cn2', 'cn3');

// $ExpectType Builder
bemmer.create('cn1', 'cn2', 'cn3');

// $ExpectType Builder
const builder = bemmer.createBuilder('singleClassName');

// $ExpectType string
builder('test');

// $ExpectType string
builder('test', { foo: true });

// $ExpectType string
builder('test', { foo: 100, baz: 'stuff' });

// $ExpectType boolean
bemmer.isBuilder(builder);
