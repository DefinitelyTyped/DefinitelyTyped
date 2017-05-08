import * as update from 'immutability-helper';
import { newContext } from 'immutability-helper';

namespace TestObjectUpdate {
  update({}, {
    foo: {
      bar: { $set: 'baz' }
    }
  });
}

namespace TestArrayUpdate {
  update([], {
    foo: {
      bar: { $set: 'baz' }
    }
  });
}

namespace TestExtend {
  update.extend('$command', (specValue, originalValue) => originalValue);
}

namespace TestNewContext {
  update.newContext().extend('$command', (specValue, originalValue) => originalValue);
  newContext().extend('$command', (specValue, originalValue) => originalValue);

  // This shouldn't compile, but we can't test negatives.
  // newContext().newContext();
}

namespace TestFromReactDocs {
  // These are copied from https://facebook.github.io/react/docs/update.html
  let initialArray = [1, 2, 3];
  let newArray = update(initialArray, { $push: [4] }); // => [1, 2, 3, 4]

  let collection = [1, 2, { a: [12, 17, 15] }];
  let newCollection = update(collection, { 2: { a: { $splice: [[1, 1, 13, 14]] } } });
  // => [1, 2, {a: [12, 13, 14, 15]}]

  let obj = { a: 5, b: 3 };
  let newObj = update(obj, { b: { $apply: function(x: number) { return x * 2; } } });
  // => {a: 5, b: 6}
  let newObj2 = update(obj, { b: { $set: obj.b * 2 } });

  let objShallow = { a: 5, b: 3 };
  let newObjShallow = update(obj, { $merge: { b: 6, c: 7 } }); // => {a: 5, b: 6, c: 7}
}
