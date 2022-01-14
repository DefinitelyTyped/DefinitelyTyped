import ahoy from 'ahoy.js';

// $ExpectType void
ahoy.start();

ahoy.configure({});

ahoy.configure({
    cookies: false,
});

ahoy.configure({
    cookies: 1, // $ExpectError
});

// $ExpectType void
ahoy.trackSubmits('#selector');

// $ExpectType void
ahoy.trackClicks('#selector');

// $ExpectType void
ahoy.trackChanges('#selector');
