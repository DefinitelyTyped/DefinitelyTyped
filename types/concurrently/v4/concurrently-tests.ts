import * as concurrently from 'concurrently';

concurrently(['echo foo']); // $ExpectType Promise<null>
// $ExpectType Promise<null>
concurrently(
    [
        'echo foo',
        {
            command: 'echo bar',
            name: 'bar',
            prefixColor: 'yellow',
        },
    ],
    {
        prefix: 'foo',
        killOthers: ['success'],
    },
);

concurrently('foo'); // $ExpectError
