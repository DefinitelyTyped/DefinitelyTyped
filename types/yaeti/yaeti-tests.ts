import { Event as YaetiEvent, EventTarget } from 'yaeti';

// $ExpectType void
YaetiEvent('click');

const target = new EventTarget();
// $ExpectError
target.addEventListener(200, event => {});
// $ExpectType void
target.addEventListener('click', event => {});
// $ExpectType void
target.removeEventListener('click', event => {});
// $ExpectError
target.removeEventListener({}, event => {});
// $ExpectType boolean
target.dispatchEvent(new Event('click'));
// $ExpectError
target.dispatchEvent({});
