import * as R from 'ramda';

() => {
  // $ExpectType ({ a, b }: { a: number; b: number; }) => number
  const multiply2 = ({ a, b }: {a: number, b: number}) => a * b;
  // $ExpectType (a: Omit<{ a: number; b: number; }, "a">) => number
  const double = R.partialObject(multiply2, { a: 2 });
  // $ExpectType number
  double({ b: 2 }); // => 4

  const greet = ({ salutation, title, firstName, lastName }: {salutation: string, title: string, firstName: string, lastName: string}) =>
    `${salutation}, ${title} ${firstName} ${lastName}!`;

  // $ExpectType (a: Omit<{ salutation: string; title: string; firstName: string; lastName: string; }, "salutation">) => string
  const sayHello = R.partialObject(greet, { salutation: 'Hello' });
  // $ExpectType (a: Omit<Omit<{ salutation: string; title: string; firstName: string; lastName: string; }, "salutation">, "title">) => string
  const sayHelloToMs = R.partialObject(sayHello, { title: 'Ms.' });
  // $ExpectType string
  sayHelloToMs({ firstName: 'Jane', lastName: 'Jones' }); // => 'Hello, Ms. Jane Jones!'
};
