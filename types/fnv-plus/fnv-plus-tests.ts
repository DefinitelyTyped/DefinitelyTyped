import * as fnv from 'fnv-plus';

const astring = 'hello world';

{
    const ahash52 = fnv.hash(astring);

    // $ExpectType string
    ahash52.hex();

    // $ExpectType string
    ahash52.str();

    // $ExpectType string
    ahash52.dec();
}

{
    fnv.seed(astring);
    const ahash64 = fnv.hash(astring, 64);

    // $ExpectType string
    ahash64.hex();

    // $ExpectType string
    ahash64.str();

    // $ExpectType string
    ahash64.dec();
}

{
    // $ExpectType number
    fnv.fast1a32(astring);
    // $ExpectType number
    fnv.fast1a32utf(astring);
    // $ExpectType string
    fnv.fast1a32hex(astring);
    // $ExpectType string
    fnv.fast1a32hexutf(astring);

    // $ExpectType number
    fnv.fast1a52(astring);
    // $ExpectType number
    fnv.fast1a52utf(astring);
    // $ExpectType string
    fnv.fast1a52hex(astring);
    // $ExpectType string
    fnv.fast1a52hexutf(astring);

    // $ExpectType number
    fnv.fast1a64(astring);
    // $ExpectType number
    fnv.fast1a64utf(astring);
    // $ExpectType string
    fnv.fast1a64hex(astring);
    // $ExpectType string
    fnv.fast1a64hexutf(astring);
}
