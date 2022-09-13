const counterID = 123456;

ym; // $ExpectType Event

// @ts-expect-error
ym('badID', 'init');

// @ts-expect-error
ym(counterID, 'noSuchMethod');

// @ts-expect-error
ym(counterID, 'init');

// $ExpectType void
ym(counterID, 'init', {});

// @ts-expect-error
ym(counterID, 'init', {
    unknownProp: 'test',
});

// @ts-expect-error
ym(counterID, 'init', {
    ut: 'bad ut',
});

// $ExpectType void
ym(counterID, 'init', {
    ut: 'noindex',
});

// $ExpectType void
ym(counterID, 'hit', '/page', 'Page title');

// @ts-expect-error
ym(counterID, 'addFileExtenstion');

// $ExpectType void
ym(counterID, 'file', '/some/path');

// $ExpectType void
ym(counterID, 'file', '/download/nothing.7z', {
    callback() {
        // $ExpectType string
        this;
    },
    ctx: 'test',
    referer: '/url',
    params: { order_price: 200, currency: 'UAH' },
});

// @ts-expect-error
ym(counterID, 'extLink', 'https://some.site', {
    callback: null,
    ctx: { a: 'b' },
    title: 'some title',
    params: { order_price: 10 },
});

// $ExpectType void
ym(counterID, 'setUserID', '123456');

// @ts-expect-error
ym(counterID, 'setUserID', 123456);

// $ExpectType void
ym(counterID, 'notBounce');

// $ExpectType void
ym(counterID, 'reachGoal', 'target');

// @ts-expect-error
ym(counterID, 'reachGoal', 111);

// @ts-expect-error
ym(counterID, 'reachGoal', null);

// @ts-expect-error
ym(counterID, 'reachGoal', 'someGoal', null);

// $ExpectType void
ym(
    counterID,
    'reachGoal',
    'someGoal',
    undefined,
    function() {
        // $ExpectType number
        this;
    },
    111,
);

// @ts-expect-error
ym(counterID, 'params');

// $ExpectType void
ym(counterID, 'params', {
    order_price: 100,
    currency: 'USD',
    customKey: 'some data',
});

// @ts-expect-error
ym(counterID, 'userParams');

// $ExpectType void
ym(counterID, 'userParams', {
    UserID: 111,
    anotherKey: undefined,
    andAnother: {
        mood: 'happy',
    },
});

// $ExpectType void
ym(counterID, 'replacePhones');

// @ts-expect-error
ym(counterID, 'replacePhones', 'anotherParam');
