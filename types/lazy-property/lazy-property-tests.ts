import addLazyProperty = require('lazy-property');

const obj: { foo?: string } = {};

addLazyProperty(obj, 'foo', () => {
  return 'bar';
});

// Access the property
obj.foo;
