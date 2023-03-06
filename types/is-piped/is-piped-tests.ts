import * as isPiped from 'is-piped';

// test type exports
type Res = isPiped.IsPipedResult;

const res = isPiped.in(0); // $ExpectType IsPipedResult
isPiped.out(1); // $ExpectType IsPipedResult

res.piped; // $ExpectType boolean
res.confident; // $ExpectType boolean
