const counterID = 123456;

ym; // $ExpectType Event

// $ExpectError
ym('badID', 'init');

// $ExpectError
ym(counterID, 'noSuchMethod');

// $ExpectError
ym(counterID, 'init');

// $ExpectType void
ym(counterID, 'init', {});

// $ExpectError
ym(counterID, 'init', {
    unknownProp: 'test',
});

// $ExpectError
ym(counterID, 'init', {
    ut: 'bad ut',
});

// $ExpectType void
ym(counterID, 'init', {
    ut: 'noindex',
});

// $ExpectType void
ym(counterID, 'hit', '/page', 'Page title');

// $ExpectError
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

// $ExpectError
ym(counterID, 'extLink', 'https://some.site', {
    callback: null,
    ctx: { a: 'b' },
    title: 'some title',
    params: { order_price: 10 },
});

// $ExpectType void
ym(counterID, 'setUserID', '123456');

// $ExpectError
ym(counterID, 'setUserID', 123456);

// $ExpectType void
ym(counterID, 'notBounce');

// $ExpectType void
ym(counterID, 'reachGoal', 'target');

// $ExpectError
ym(counterID, 'reachGoal', 111);

// $ExpectError
ym(counterID, 'reachGoal', null);

// $ExpectError
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

// $ExpectError
ym(counterID, 'params');

// $ExpectType void
ym(counterID, 'params', {
    order_price: 100,
    currency: 'USD',
    customKey: 'some data',
});

// $ExpectError
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

// $ExpectError
ym(counterID, 'replacePhones', 'anotherParam');
