import { get, set } from '@ember/object';

const basicPojo = { greeting: 'hello' };

get(basicPojo, 'greeting'); // $ExpectType string
get(basicPojo, 'salutation'); // $ExpectType unknown
set(basicPojo, 'greeting', 'ahoy'); // $ExpectType string
// @ts-expect-error
set(basicPojo, 'salutation', 'heyo');

declare let whoKnows: unknown;
get(whoKnows, 'any-string'); // $ExpectType unknown
// @ts-expect-error
set(whoKnows, 'any-string', 123);
