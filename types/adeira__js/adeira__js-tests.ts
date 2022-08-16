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
// @ts-expect-error
invariant('true', 'message');

const calc = (value: number | undefined, operation: '*' | '+') => {
    invariant(value != null, 'Expected value to be defined');
    if (operation === '*') {
        return value * value;
    }
    return value + value;
};

warning(true, 'message');
// @ts-expect-error
warning('true', 'message');

sprintf('Oh, %s', 'yeah!');
sprintf('%j', {});
// @ts-expect-error
sprintf(1, {});

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
// @ts-expect-error
rangeMap<number>(5, i => i.toString());
// @ts-expect-error
rangeMap<string>('5', i => i.toString());
