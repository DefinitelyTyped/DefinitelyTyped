import * as Deque from 'double-ended-queue';

const a = new Deque<number>();            // $ExpectType Deque<number>
const b = new Deque<string>(6);           // $ExpectType Deque<string>
// @ts-expect-error
const c = new Deque<string>([1, 2, 3]);
const d = new Deque<number>([1, 2, 3]);   // $ExpectType Deque<number>

a.length;               // $ExpectType number
// @ts-expect-error
a.push("foo");
a.push(4, 5);           // $ExpectType number
a.enqueue(6, 7);        // $ExpectType number
a.insertBack(8, 9);     // $ExpectType number
// @ts-expect-error
a.unshift("foo");
a.unshift(4, 5);        // $ExpectType number
a.insertFront(8, 9);    // $ExpectType number
a.pop();                // $ExpectType number | undefined
// @ts-expect-error
a.pop(2);
a.removeBack();         // $ExpectType number | undefined
a.shift();              // $ExpectType number | undefined
a.removeFront();        // $ExpectType number | undefined
a.dequeue();            // $ExpectType number | undefined
a.peekBack();           // $ExpectType number | undefined
a.peekFront();          // $ExpectType number | undefined
a.toArray();            // $ExpectType number[]
// @ts-expect-error
a.toArray("foo");
a.toJSON();             // $ExpectType number[]
// @ts-expect-error
a.get();
// @ts-expect-error
a.get(null);
a.get(1);               // $ExpectType number | undefined
b.get(-1);              // $ExpectType string | undefined
b.clear();              // $ExpectType void
b.isEmpty();            // $ExpectType boolean
