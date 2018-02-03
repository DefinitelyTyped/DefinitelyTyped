import nextTick = require('next-tick');

let x: boolean | null = null;

// $ExpectType Function
nextTick;

// $ExpectType void
nextTick(() => {
    x = true;
});

setTimeout(() => {
    x; // $ExpectType boolean    
}, 10);
