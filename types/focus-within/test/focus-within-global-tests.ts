/*
 * This file tests the typings of the global export of `focus-within`
 */

focusWithin(document);

focusWithin(document, {
  attr: false,
  className: 'foo'
});
