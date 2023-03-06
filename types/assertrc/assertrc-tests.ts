import { base } from "assertrc";

const assert = new base();
assert.check('test', '===', 'test');
assert.tests({ test: { name: 'test', value: 1 } });
assert.equal('test',  'test');
assert.equalType('test',  'test');
assert.equalJson({ test: 1 },  { test : 1 });
assert.notEqual('test',  'test1');
assert.greater(1, 0);
assert.less(1, 0);
assert.length(1, 0);
assert.valueEqual(1, 'test');
assert.valueEqualType(1, 'test');
assert.valueNotEqual(2, 'test');
assert.valueNotEqualType('test', 'test');
