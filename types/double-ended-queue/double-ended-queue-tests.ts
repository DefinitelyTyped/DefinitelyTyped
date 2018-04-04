import * as Deque from 'double-ended-queue';

const a = new Deque<number>();            // $ExpectType Deque<number>
const b = new Deque<string>(6);           // $ExpectType Deque<string>
const c = new Deque<string>([1, 2, 3]);   // $ExpectError
const d = new Deque<number>([1, 2, 3]);   // $ExpectType Deque<number>

a.length;           // $ExpectType number
a.push("foo");      // $ExpectError
a.push(4, 5);       // $ExpectType number
a.unshift("foo");   // $ExpectError
a.unshift(4, 5);    // $ExpectType number
a.pop();            // $ExpectType number | undefined
a.pop(2);           // $ExpectError
a.shift();          // $ExpectType number | undefined
a.peekBack();       // $ExpectType number | undefined
a.peekFront();      // $ExpectType number | undefined
a.toArray();        // $ExpectType number[]
a.get();            // $ExpectError
a.get(null);        // $ExpectError
a.get(1);           // $ExpectType number | undefined
b.get(-1);          // $ExpectType string | undefined
b.clear();          // $ExpectType void
b.isEmpty();        // $ExpectType boolean
