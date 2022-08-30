import { Thing } from 'abstract-things';

const thing = new Thing(); // $ExpectType Thing

thing.init(); // $ExpectType Promise<Thing | undefined>
thing.initCallback(); // $ExpectType Promise<void>
thing.destroy(); // $ExpectType Promise<void>
thing.destroyCallback(); // $ExpectType Promise<void>

thing.emitEvent('', ''); // $ExpectType void
thing.emitEvent('', '', { multiple: true }); // $ExpectType void
// @ts-expect-error
thing.emitEvent('', '', {});
// @ts-expect-error
thing.emitEvent('', '', { multiple: '' });
thing.emitEvent(''); // $ExpectType void
// @ts-expect-error
thing.emitEvent();

// @ts-expect-error
thing.on('');
const stoppable = thing.on('', () => {}); // $ExpectType Stoppable
stoppable.stop(); // $ExpectType void

// @ts-expect-error
thing.off('');
thing.off('', () => {}); // $ExpectType void

thing.onAny(() => {}); // $ExpectType Stoppable
// @ts-expect-error
thing.onAny();

thing.offAny(() => {}); // $ExpectType void
// @ts-expect-error
thing.offAny();

thing.debug(); // $ExpectType void

thing.matches(''); // $ExpectType boolean
thing.matches('', ''); // $ExpectType boolean
// @ts-expect-error
thing.matches(1);
thing.matches(); // $ExpectType boolean

const func: (i: number) => string = i => i.toString();
Thing.type(func); // $ExpectType ((i: number) => string) & Thing
Thing.mixin(func); // $ExpectType ((i: number) => string) & Thing
thing.extendWith(func); // $ExpectType ((i: number) => string) & Thing
