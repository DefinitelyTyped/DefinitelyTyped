import pForever = require('p-forever');

// $ExpectType Promise<void>
pForever(i => {
    // $ExpectType number
    i;
    i++;
    return i <= 100 ? i : pForever.end;
}, 0);
// $ExpectType Promise<void>
pForever(i => {
    // $ExpectType number
    i;
    i++;
    return i <= 100 ? Promise.resolve(i) : pForever.end;
}, 0);

let i = 0;

// $ExpectType Promise<void>
pForever<number>(prevI => {
    // $ExpectType number | undefined
    prevI;
    i++;
    return i <= 100 ? i : pForever.end;
});
// $ExpectType Promise<void>
pForever<number>(prevI => {
    // $ExpectType number | undefined
    prevI;
    i++;
    return i <= 100 ? Promise.resolve(i) : pForever.end;
});
