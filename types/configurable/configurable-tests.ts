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
