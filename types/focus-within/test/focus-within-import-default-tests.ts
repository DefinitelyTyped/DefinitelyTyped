/*
 * This file tests the typings of the default export of `focus-within`
 */
import focusWithin from 'focus-within';

focusWithin(document);

focusWithin(document, {
  attr: false,
  className: 'foo'
});
