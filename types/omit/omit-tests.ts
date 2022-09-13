import omit = require('omit');

interface Person {
  name: string;
  password: string;
  email: string;
}
const bob: Person = {
  name: 'Bob',
  email: 'bob@mail.com',
  password: '111111'
};

// Single key
omit('password')(bob);
// $ExpectType string
omit('password')(bob).name;
// $ExpectType string
omit('password')(bob).email;
// @ts-expect-error
omit('password')(bob).password;

// Multiple keys
// $ExpectType string
omit(['password', 'email'] as const)(bob).name;
// @ts-expect-error
omit(['password', 'email'] as const)(bob).email;
// @ts-expect-error
omit(['password', 'email'] as const)(bob).password;

// Maps array
const [result0] = omit('password')([bob]);
// $ExpectType string
result0.email;
// $ExpectType string
result0.name;
// @ts-expect-error
result0.password;

// Calls itself if given 2nd parameter
const result1 = omit('password', bob);
// $ExpectType string
result1.email;
// $ExpectType string
result1.name;
// @ts-expect-error
result1.password;

// Rule function
// $ExpectType string | undefined
omit(() => false)(bob).password;

const result2 = omit((key: "password" | "email") => false)(bob);
// $ExpectType string
result2.name;
// $ExpectType string | undefined
result2.email;
// $ExpectType string | undefined
result2.password;

// Rule function and given target
// $ExpectType string | undefined
omit(() => false, bob).password;
