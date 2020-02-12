import compare = require('json-schema-compare');

// @ExpectType boolean
compare({
  title: 'title 1',
  type: ['object'],
  uniqueItems: false,
  dependencies: {
    name: ['age', 'lastName']
  },
  required: ['name', 'age', 'name']
}, {
  title: 'title 2',
  type: 'object',
  required: ['age', 'name'],
  dependencies: {
    name: ['lastName', 'age']
  },
  properties: {
    name: {
      minLength: 0
    }
  }
}, {
  ignore: ['title', 'customKey']
});
