import ahoy from 'ahoy.js';

// $ExpectType void
ahoy.start();

ahoy.configure({});

ahoy.configure({
    cookies: false,
});

ahoy.configure({
    // @ts-expect-error
    cookies: 1,
});

// $ExpectType void
ahoy.trackSubmits('#selector');

// $ExpectType void
ahoy.trackClicks('#selector');

// $ExpectType void
ahoy.trackChanges('#selector');
