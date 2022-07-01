import test from 'node:test';

test('foo', (t) => {
  // $ExpectType TestContext
  t;
});

test('blank options', {});

test('options with values', {
  concurrency: 1,
  only: true,
  skip: 'reason for skip',
  todo: 'reason for todo',
});

test('options with booleans', {
  skip: true,
  todo: false,
});

{
  const ret = test();
  // $ExpectType Promise<void>
  ret;
}

// Test callback mode
test((t, cb) => {
  // $ExpectType (result?: any) => void
  cb;
  // $ExpectType void
  cb({ x: 'anything' });
});

// Test the context's methods
test(undefined, undefined, (t) => {
  // $ExpectType void
  t.diagnostic('tap diagnostic');
  // $ExpectType void
  t.runOnly(true);
  // $ExpectType void
  t.skip('skip reason');
  // $ExpectType void
  t.skip();
  // $ExpectType void
  t.todo('todo reason');
  // $ExpectType void
  t.todo();
});

// Test the subtest approach.
test((t) => {
  // $ExpectType TestContext
  t;
  const sub = t.test('sub', {}, (t) => {
    // $ExpectType TestContext
    t;
  });
  // $ExpectType Promise<void>
  sub;
});

// @ts-expect-error
test(1, () => {});
