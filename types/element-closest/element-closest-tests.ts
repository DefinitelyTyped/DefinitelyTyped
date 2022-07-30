import elementClosest from 'element-closest';

// @ts-expect-error
elementClosest(null);

// @ts-expect-error
elementClosest(undefined);

// @ts-expect-error
elementClosest(100);

// @ts-expect-error
elementClosest('test');

// @ts-expect-error
elementClosest(false);

// @ts-expect-error
elementClosest(true);

// @ts-expect-error
elementClosest({});

// $ExpectType void
elementClosest(window);
