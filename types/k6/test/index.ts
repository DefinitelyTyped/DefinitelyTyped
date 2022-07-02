import { check, fail, group, sleep } from 'k6';

// check
// @ts-expect-error
check();
check(null, {}); // $ExpectType boolean
check(null, {}, {}); // $ExpectType boolean
check(null, { pass: () => true });
check(null, {
    success: () => true,
    json: () => true,
    found: () => false
});
// @ts-expect-error
check({}, { pass: (value: number) => true });
check({}, { pass: (value: object) => true });
check({}, {
    success: (value: object) => true,
    json: (value: object) => true,
    found: (value: object) => false
});
// @ts-expect-error
check(null, {}, 5);
check(null, {}, { session: 'abc123' });
// @ts-expect-error
check(null, {}, {}, 5);

// fail
fail();
// @ts-expect-error
fail(5);
fail('drowned in cinnamon');
// @ts-expect-error
fail('drowned in cinnamon', 5);

// group
// @ts-expect-error
group();
// @ts-expect-error
group('member section');
// @ts-expect-error
group('member section', 5);
// @ts-expect-error
group(5, () => {});
group('member section', () => true); // $ExpectType boolean
group('member section', () => 7); // $ExpectType number
// @ts-expect-error
group('member section', () => {}, 5);

// sleep
// @ts-expect-error
sleep();
// @ts-expect-error
sleep('forever');
sleep(7000); // $ExpectType void
// @ts-expect-error
sleep(7000, 5);
