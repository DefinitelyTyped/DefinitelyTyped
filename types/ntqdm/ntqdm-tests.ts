import * as tqdm from 'ntqdm';

const array = [1, 2, 3];

// $ExpectType IterableIterator<number>
tqdm(array);

function *generator() {
    yield 'foo';
}

// $ExpectType IterableIterator<string>
tqdm(generator(), { total: 50, logging: true });
