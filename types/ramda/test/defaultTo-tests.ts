import * as R from 'ramda';

() => {
    const defaultTo42 = R.defaultTo(42);
    defaultTo42(null); // => 42
    defaultTo42(undefined); // => 42
    defaultTo42('Ramda'); // => 'Ramda'

    const valueOrUndefined = 2 as number | undefined;
    defaultTo42(valueOrUndefined) - 2; // => 0

    const valueOrNull = 2 as number | null;
    defaultTo42(valueOrNull) - 2; // => 0
};
