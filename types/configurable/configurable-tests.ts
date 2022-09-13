import configurable = require('configurable');

// Arrange
class A {
    something(): void {
        // nothing
    }
}

const obj = new A();
const c = configurable(obj);

// $ExpectType A & Configurable<A>
c.set('first', 'first as a string');

// $ExpectType any
c.get('first');

// $ExpectType A & Configurable<A>
c.enable('first');

// $ExpectType boolean
c.enabled('first');

// $ExpectType A & Configurable<A>
c.disable('first');

// $ExpectType boolean
c.disabled('first');

// @ts-expect-error
c.set(5, 'first as a string');

// @ts-expect-error
c.set('first');

// @ts-expect-error
c.get(5);

// @ts-expect-error
c.enable(5);

// @ts-expect-error
c.enabled(5);

// @ts-expect-error
c.disable(5);

// @ts-expect-error
c.disabled(5);
