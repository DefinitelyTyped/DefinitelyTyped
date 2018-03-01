import configureFunction, { Configurable } from 'configurable';

// Arrange
class A extends Configurable {
    someRandomFunction(): void {
    }
}

// Act&Assert
// $ExpectType Configurable
configureFunction({});

// $ExpectType Configurable
<Configurable> (new A());

// $ExpectType Configurable
const config: Configurable = <Configurable> (new A());

// $ExpectError
const configTwo: A = configureFunction({});
