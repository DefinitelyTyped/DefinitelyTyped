import { check } from 'k6';

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
