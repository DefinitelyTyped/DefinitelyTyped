/// <reference path="index.d.ts"
import addLazyProperty = require('lazy-property');

const obj: { foo?: string } = {};

addLazyProperty(obj, 'foo', function() {
  return 'bar';
});

//Access the property
obj.foo;
