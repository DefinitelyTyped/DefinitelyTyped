import { Event as YaetiEvent, EventTarget } from 'yaeti';

// $ExpectType void
YaetiEvent('click');

const target = new EventTarget();
// @ts-expect-error
target.addEventListener(200, event => {});
// $ExpectType void
target.addEventListener('click', event => {});
// $ExpectType void
target.removeEventListener('click', event => {});
// @ts-expect-error
target.removeEventListener({}, event => {});
// $ExpectType boolean
target.dispatchEvent(new Event('click'));
// @ts-expect-error
target.dispatchEvent({});
