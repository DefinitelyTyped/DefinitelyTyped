import { getAll, getAllData, getRandom, getRandomData, UserAgent } from 'random-useragent';

function filter(value: UserAgent) {
    return value.browserName !== 'Chrome';
}

// $ExpectType string
getRandom();
// $ExpectType string | null
getRandom(filter);

// $ExpectType UserAgent
getRandomData();
// $ExpectType UserAgent | null
getRandomData(filter);

// $ExpectType string[]
getAll();
// $ExpectType string[]
getAll(filter);

// $ExpectType UserAgent[]
getAllData();
// $ExpectType UserAgent[]
getAllData(filter);
