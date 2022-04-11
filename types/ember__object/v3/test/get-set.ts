import { get, set } from '@ember/object';

const basicPojo = { greeting: 'hello' };

get(basicPojo, 'greeting'); // $ExpectType string
get(basicPojo, 'salutation'); // $ExpectType unknown
set(basicPojo, 'greeting', 'ahoy'); // $ExpectType string
set(basicPojo, 'salutation', 'heyo'); // $ExpectError

declare let whoKnows: unknown;
get(whoKnows, 'any-string'); // $ExpectType unknown
set(whoKnows, 'any-string', 123); // $ExpectError
