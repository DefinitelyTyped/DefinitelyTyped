import * as R from 'ramda';

(() => {
  function multiply(a: number, b: number): number {
    return a * b;
  }

  const double = R.partial<number>(multiply, [2]);
  double(2); // => 4

  function greet(
    salutation: string,
    title: string,
    firstName: string,
    lastName: string,
  ) {
    return `${salutation}, ${title} ${firstName} ${lastName}!`;
  }

  const sayHello = R.partial(greet, ['Hello']);
  const sayHelloToMs = R.partial(sayHello, ['Ms.']);
  sayHelloToMs('Jane', 'Jones'); // => 'Hello, Ms. Jane Jones!'
})();
