import * as update from 'immutability-helper';
import { newContext } from 'immutability-helper';

namespace TestExtend {
  update.extend('$command', (specValue, originalValue) => originalValue);
}

namespace TestNewContext {
  update.newContext().extend('$command', (specValue, originalValue) => originalValue);
  newContext().extend('$command', (specValue, originalValue) => originalValue);
}

namespace TestTypeCoherence {

    interface TestFoo {
        bar: number,
        baz: string,
        qux: boolean[],
    }

    // Test array type coherence
    let initialArray: number[] = [1, 2, 3];
    initialArray = update(initialArray, {$push: [4]}); // => [1, 2, 3, 4]

    // Test Object type coherence
    let foo: TestFoo = {bar: 5, baz: 'Hello World', qux: [false, false, true]};
    foo = update(foo, {
        bar: {
            $apply: function (x: number) {
                return x * 2;
            }
        },
        qux: {
            $set: []
        }
    });
}
