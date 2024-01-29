import { assert, expect, use } from "chai";
import * as chaiSubsetInOrder from "chai-subset-in-order";

use(chaiSubsetInOrder);

expect({ foo: 2, bar: 3 }).to.containSubsetInOrder({ foo: 2 });
expect({ foo: 2, bar: 3 }).to.containSubsetInOrder({ bar: 3 });
expect({ foo: 2, bar: 3 }).to.containSubsetInOrder({ foo: 2, bar: 3 });
expect({ foo: 2, bar: 3 }).to.not.containSubsetInOrder({ foo: 5 });
expect([{ foo: 123, bar: 456 }, { baz: 111 }]).to.containSubsetInOrder([{ foo: 123 }]);
expect([{ foo: 123, bar: 456 }, { baz: 111 }]).to.containSubsetInOrder([{ bar: 456 }]);
expect([{ foo: 123, bar: 456 }, { baz: 111 }]).to.containSubsetInOrder([{ foo: 123 }, { baz: 111 }]);
expect([{ foo: 123, bar: 456 }, { baz: 111 }]).to.not.containSubsetInOrder([{ baz: 111 }, { foo: 123 }]);
assert.containSubsetInOrder({ foo: 2, bar: 3 }, { foo: 2 });
