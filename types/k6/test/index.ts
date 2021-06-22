import { check, fail, group, sleep } from 'k6';

// check
check(); // $ExpectError
check(null, {}); // $ExpectType boolean
check(null, {}, {}); // $ExpectType boolean
check(null, { pass: () => true });
check(null, {
    success: () => true,
    json: () => true,
    found: () => false
});
check({}, { pass: (value: number) => true }); // $ExpectError
check({}, { pass: (value: object) => true });
check({}, {
    success: (value: object) => true,
    json: (value: object) => true,
    found: (value: object) => false
});
check(null, {}, 5); // $ExpectError
check(null, {}, { session: 'abc123' });
check(null, {}, {}, 5); // $ExpectError

// fail
fail();
fail(5); // $ExpectError
fail('drowned in cinnamon');
fail('drowned in cinnamon', 5); // $ExpectError

// group
group(); // $ExpectError
group('member section'); // $ExpectError
group('member section', 5); // $ExpectError
group(5, () => {}); // $ExpectError
group('member section', () => true); // $ExpectType boolean
group('member section', () => 7); // $ExpectType number
group('member section', () => {}, 5); // $ExpectError

// sleep
sleep(); // $ExpectError
sleep('forever'); // $ExpectError
sleep(7000); // $ExpectType void
sleep(7000, 5); // $ExpectError
