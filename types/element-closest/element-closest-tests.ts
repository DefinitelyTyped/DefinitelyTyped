import elementClosest from 'element-closest';

// $ExpectError
elementClosest(null);

// $ExpectError
elementClosest(undefined);

// $ExpectError
elementClosest(100);

// $ExpectError
elementClosest('test');

// $ExpectError
elementClosest(false);

// $ExpectError
elementClosest(true);

// $ExpectError
elementClosest({});

// $ExpectType void
elementClosest(window);
