import yelp from 'yelp-fusion';

// $ExpectType LocationBusinessesSearchRequest
yelp.LocationBusinessesSearchRequest({
    location: 'New York',
});

// // $ExpectType Builder
// yelp.createBuilder('cn1', 'cn2', 'cn3');

// // $ExpectType Builder
// yelp.create('cn1', 'cn2', 'cn3');

// // $ExpectType Builder
// const builder = yelp.createBuilder('singleClassName');

// // $ExpectType string
// builder('test');

// // $ExpectType string
// builder('test', { foo: true });

// // $ExpectType string
// builder('test', { foo: 100, baz: 'stuff' });

// // $ExpectType boolean
// yelp.isBuilder(builder);
