import { hasTouch, detectTouch } from 'detect-touch';

// $ExpectType boolean
hasTouch;

// $ExpectType boolean
detectTouch();

// @ts-expect-error
detectTouch({});
