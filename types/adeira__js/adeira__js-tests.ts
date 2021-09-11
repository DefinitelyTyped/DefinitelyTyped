import {
    invariant,
    warning,
    sprintf,
    isObject,
    isObjectEmpty,
    isNumeric,
    nullthrows,
    isBrowser,
    rangeMap,
} from '@adeira/js';

invariant(true, 'message');
invariant('true', 'message'); // $ExpectError

const calc = (value: number | undefined, operation: '*' | '+') => {
    invariant(value != null, 'Expected value to be defined');
    if (operation === '*') {
        return value * value;
    }
    return value + value;
};

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

rangeMap<string>(5, i => i.toString());
rangeMap<number>(5, i => i.toString()); // $ExpectError
rangeMap<string>('5', i => i.toString()); // $ExpectError
