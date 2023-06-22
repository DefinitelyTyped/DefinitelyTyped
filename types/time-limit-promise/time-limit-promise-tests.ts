import timeLimit = require('time-limit-promise');
declare var setTimeout: (cb: () => void, timeout: number) => void;

async function foo(id: number, delay: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('foo' + id);
    }, delay);
  });
}

(async () => {
  /* opts not provided */
  // $ExpectType string | undefined
  const fooOut = await timeLimit(foo(1, 0), 100); // 'foo1'

  // $ExpectType string | undefined
  const fooOutFail = await timeLimit(foo(4, 200), 100); // undefined

  /* resolveWith provided */
  // $ExpectType string | number
  const fooOutResolved = await timeLimit(foo(2, 0), 100, { resolveWith: 100 }); // 'foo2'

  // $ExpectType string | number
  const fooOutResolvedFail = await timeLimit(foo(5, 200), 100, { resolveWith: 100 }); // 100

  /* rejectWith provided */
  // $ExpectType string
  const fooOutRejected = await timeLimit(foo(3, 0), 100, { rejectWith: 100 }); // 'foo3'

  try {
    await timeLimit(foo(6, 200), 100, { rejectWith: 200 });
  } catch (err) {
    // $ExpectType any
    const fooOutRejectedFail = err; // 200
  }
})();
