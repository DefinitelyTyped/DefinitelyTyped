import * as R from 'ramda';

(() => {
  function greet(
    salutation: string,
    title: string,
    firstName: string,
    lastName: string,
  ) {
    return `${salutation}, ${title} ${firstName} ${lastName}!`;
  }

  const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
  greetMsJaneJones('Hello'); // => 'Hello, Ms. Jane Jones!'
})();
