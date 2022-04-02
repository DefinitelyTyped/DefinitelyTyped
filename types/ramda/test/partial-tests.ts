import * as R from 'ramda';

(() => {
    function multiply(a: number, b: number): number {
        return a * b;
    }

    const double = R.partial(multiply, [2]);
    // $ExpectType number
    double(2); // => 4

    const double2 = R.partial<[a: number], [b: number], number>(multiply, [2]);
    // $ExpectType number
    double2(2); // => 4

    function greet(salutation: string, title: string, firstName: string, lastName: string) {
        return `${salutation}, ${title} ${firstName} ${lastName}!`;
    }

    const sayHello = R.partial(greet, ['Hello']);
    const sayHelloToMs = R.partial(sayHello, ['Ms.']);
    sayHelloToMs('Jane', 'Jones'); // => 'Hello, Ms. Jane Jones!'
})();
