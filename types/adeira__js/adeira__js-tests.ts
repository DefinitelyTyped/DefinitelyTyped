import { invariant, warning, sprintf, isObject, isObjectEmpty, isNumeric, nullthrows, isBrowser } from '@adeira/js';

invariant(true, 'message');
invariant('true', 'message'); // $ExpectError

warning(true, 'message');
warning('true', 'message'); // $ExpectError

sprintf('Oh, %s', 'yeah!');
sprintf('%j', {});
sprintf(1, {}); // $ExpectError

isObject({});
isObject(null);
isObject([]);

isObjectEmpty({});
isObjectEmpty(null);
isObjectEmpty(new Date());

isNumeric('42');
isNumeric(42);
isNumeric(null);

nullthrows(null);
nullthrows(1);
nullthrows('1');

isBrowser();
