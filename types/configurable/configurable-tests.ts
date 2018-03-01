import configureFunction, { Configurable } from 'configurable';

// Arrange
class A extends Configurable {
    someRandomFunction(): void {
    }
}

const c = configureFunction({});

// Act&Assert
// $ExpectType Configurable
configureFunction({});

// $ExpectType Configurable
<Configurable> (new A());

// $ExpectType Configurable
const config: Configurable = <Configurable> (new A());

// $ExpectError
const configTwo: A = configureFunction({});

// $ExpectType Configurable
c.set('first', 'first as a string');

// $ExpectType any
c.get('first');

// $ExpectType Configurable
c.enable('first');

// $ExpectType boolean
c.enabled('first');

// $ExpectType Configurable
c.disable('first');

// $ExpectType boolean
c.disabled('first');

// $ExpectType Configurable
configTwo.set('second', 'first as a string');

// $ExpectType any
configTwo.get('second');

// $ExpectType Configurable
configTwo.enable('second');

// $ExpectType boolean
configTwo.enabled('second');

// $ExpectType Configurable
configTwo.disable('second');

// $ExpectType boolean
configTwo.disabled('second');

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

// $ExpectError
configTwo.set(5, 'second as a string');

// $ExpectError
configTwo.set('second');

// $ExpectError
configTwo.get(5);

// $ExpectError
configTwo.enable(5);

// $ExpectError
configTwo.enabled(5);

// $ExpectError
configTwo.disable(5);

// $ExpectError
configTwo.disabled(5);
