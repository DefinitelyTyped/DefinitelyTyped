import dottie = require('dottie');

dottie.memoizePath = true;

const nestedObject = {
  some: {
    nested: {
      value: 'a'
    }
  }
};

dottie.exists(nestedObject, 'some.nested');
dottie.default(nestedObject, 'some.nested.value', 'b');
dottie.get<string>(nestedObject, 'some.nested.value');
dottie.get<string>(nestedObject, 'some.nested.value', 'b');
dottie.set(nestedObject, 'some.nested.value', 'b');
dottie.transform({ 'foo.bar': 'baz' });
dottie.transform({ foo_bar: 'baz' }, { delimiter: '_' });
dottie.flatten({ foo: { bar: 'baz' }});
dottie.flatten({ foo: { bar: 'baz' }}, '_');
dottie.paths(nestedObject);
