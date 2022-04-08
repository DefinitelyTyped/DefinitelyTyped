import ahoy = require('ahoy.js');
import { trackAll } from 'ahoy.js';

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
trackAll();
