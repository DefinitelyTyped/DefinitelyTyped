import {
    getAll,
    getAllData,
    getRandom,
    getRandomData,
    UserAgent
} from "random-useragent";

function filter(value: UserAgent) {
    return value.browserName !== "Chrome";
}

// $ExpectType string | null
getRandom();
// $ExpectType string | null
getRandom(filter);

// $ExpectType UserAgent | null
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
