import {
  __subscriberRef,
  __interactionsRef,
  unstable_clear as clear,
  unstable_getCurrent as getCurrent,
  unstable_getThreadID as getThreadID,
  unstable_trace as trace,
  unstable_wrap as wrap,
  WrappedFunction
} from "scheduler/tracing";

// it should return the value of a traced function
// $ExpectType number
trace("initial render", Date.now(), () => 123);

const fn = (n: number, s: string) => s.repeat(n);
let wrapped: WrappedFunction<typeof fn> | typeof fn | undefined;
trace("arbitrary", 0, () => {
  wrapped = wrap(fn);
});
if (wrapped !== undefined) {
  // it should pass arguments through and return the value of a wrapped function
  // $ExpectType string
  wrapped(3, "w");
}

// it should return the value of a wrapped function
// $ExpectType number
clear(() => 123);

// $ExpectType Set<Interaction> | null
getCurrent();

// it should return a unique threadID
// $ExpectType number
getThreadID();

// should expose the current set of interactions to be externally manipulated
const isAssignable = __interactionsRef!.current === getCurrent()!;

// should expose a subscriber ref to be externally manipulated
__subscriberRef!.current = null;
