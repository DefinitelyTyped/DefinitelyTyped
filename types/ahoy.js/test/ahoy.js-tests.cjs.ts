import ahoy = require('ahoy.js');
import { trackChanges, trackClicks, trackSubmits } from 'ahoy.js';

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
trackSubmits('#selector');

// $ExpectType void
trackClicks('#selector');

// $ExpectType void
trackChanges('#selector');
