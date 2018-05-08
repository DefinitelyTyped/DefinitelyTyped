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

// $ExpectError
c.set(5, 'first as a string');

// $ExpectError
c.set('first');

// $ExpectError
c.get(5);

// $ExpectError
c.enable(5);

// $ExpectError
c.enabled(5);

// $ExpectError
c.disable(5);

// $ExpectError
c.disabled(5);
