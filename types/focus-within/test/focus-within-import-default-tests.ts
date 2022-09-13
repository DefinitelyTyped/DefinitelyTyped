/*
 * This file tests the typings of the default export of `focus-within`
 */
import focusWithin = require("focus-within");

focusWithin(document);

focusWithin(document, {
  attr: false,
  className: 'foo'
});
