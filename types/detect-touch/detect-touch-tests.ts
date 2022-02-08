import { hasTouch, detectTouch } from 'detect-touch';

// $ExpectType boolean
hasTouch;

// $ExpectType boolean
detectTouch();

// $ExpectError
detectTouch({});
