import seedrandom = require("seedrandom");
import { alea, tychei, xor128, xor4096, xorshift7, xorwow } from "seedrandom";

const prng = seedrandom("added entropy.", { entropy: true }); // $ExpectType PRNG
prng.double(); // $ExpectType number
prng.int32(); // $ExpectType number
prng.quick(); // $ExpectType number
// @ts-expect-error seedrandom only provides internal state when explicitly requested
prng.state;
prng(); // $ExpectType number

const prngWithState = seedrandom("added entropy.", { entropy: true, state: true }); // $ExpectType StatefulPRNG<Arc4>
prngWithState.double(); // $ExpectType number
prngWithState.int32(); // $ExpectType number
prngWithState.quick(); // $ExpectType number
prngWithState.state(); // $ExpectType Arc4
prngWithState(); // $ExpectType number

const aleaState = {
    c: 1,
    s0: 0.8760416533332318,
    s1: 0.8980805180035532,
    s2: 0.8814748537261039,
};

const arc4State = {
    i: 0,
    j: 230,
    S: [
        61,
        249,
        52,
        85,
        86,
        251,
        19,
        50,
        60,
        17,
        104,
        57,
        156,
        123,
        26,
        172,
        143,
        31,
        187,
        1,
        161,
        201,
        222,
        66,
        252,
        106,
        100,
        227,
        113,
        63,
        239,
        4,
        20,
        128,
        228,
        9,
        133,
        152,
        2,
        7,
        173,
        219,
        37,
        44,
        192,
        150,
        47,
        25,
        117,
        62,
        72,
        111,
        30,
        45,
        32,
        39,
        211,
        181,
        0,
        223,
        132,
        207,
        112,
        184,
        55,
        168,
        154,
        115,
        250,
        98,
        149,
        247,
        202,
        75,
        118,
        127,
        208,
        119,
        189,
        125,
        28,
        238,
        217,
        99,
        197,
        141,
        244,
        185,
        24,
        170,
        218,
        27,
        6,
        162,
        231,
        22,
        232,
        180,
        38,
        171,
        93,
        226,
        213,
        129,
        110,
        3,
        5,
        225,
        120,
        15,
        140,
        175,
        236,
        84,
        183,
        116,
        78,
        224,
        16,
        65,
        53,
        174,
        64,
        96,
        253,
        89,
        206,
        148,
        210,
        233,
        41,
        71,
        59,
        235,
        80,
        14,
        23,
        34,
        216,
        193,
        142,
        108,
        177,
        212,
        139,
        56,
        134,
        138,
        33,
        87,
        159,
        51,
        237,
        88,
        241,
        83,
        69,
        191,
        48,
        145,
        92,
        70,
        126,
        196,
        121,
        12,
        131,
        205,
        103,
        74,
        8,
        155,
        215,
        124,
        169,
        122,
        67,
        166,
        209,
        229,
        163,
        147,
        243,
        10,
        36,
        167,
        186,
        107,
        11,
        214,
        73,
        54,
        136,
        102,
        95,
        254,
        94,
        234,
        245,
        246,
        179,
        230,
        194,
        105,
        144,
        43,
        157,
        198,
        195,
        109,
        221,
        220,
        97,
        176,
        165,
        77,
        178,
        204,
        58,
        151,
        137,
        190,
        200,
        18,
        35,
        79,
        29,
        158,
        199,
        135,
        21,
        146,
        188,
        153,
        42,
        49,
        40,
        182,
        242,
        82,
        203,
        240,
        90,
        81,
        248,
        68,
        164,
        76,
        101,
        160,
        91,
        13,
        114,
        130,
        255,
        46,
    ],
};

seedrandom(undefined, { state: arc4State }); // $ExpectType StatefulPRNG<Arc4>
seedrandom("hello.", { state: arc4State }); // $ExpectType StatefulPRNG<Arc4>
// @ts-expect-error protect against using states from different algorithms
seedrandom("hello.", { state: aleaState });
seedrandom("hello.", { global: true }); // $ExpectType PRNG
seedrandom("hello.", true); // $ExpectType PRNG
seedrandom("hello."); // $ExpectType PRNG
seedrandom(); // $ExpectType PRNG

// $ExpectType { prng: PRNG; seed: string; }
seedrandom("hello", {
    pass(prng, seed, is_math_call, state) {
        return { prng, seed };
    },
});
// $ExpectType number
seedrandom(
    "hello",
    {
        pass(prng, seed, is_math_call, state) {
            return 1;
        },
    },
    (prng, seed, is_math_call, state) => {
        return "a";
    },
);
// $ExpectType string
seedrandom("hello", {}, (prng, seed, is_math_call, state) => {
    return "a";
});
// $ExpectType string
seedrandom(undefined, undefined, (prng, seed, is_math_call, state) => {
    return "a";
});

seedrandom.alea("hello."); // $ExpectType PRNG
seedrandom.alea("hello.", { state: true }); // $ExpectType StatefulPRNG<Alea>
seedrandom.alea("hello.", { state: aleaState }); // $ExpectType StatefulPRNG<Alea>
// @ts-expect-error protect against using states from different algorithms
seedrandom.alea("hello.", { state: arc4State });
seedrandom.tychei("hello."); // $ExpectType PRNG
seedrandom.tychei("hello.", { state: true }); // $ExpectType StatefulPRNG<Tychei>
seedrandom.xor128("hello."); // $ExpectType PRNG
seedrandom.xor128("hello.", { state: true }); // $ExpectType StatefulPRNG<Xor128>
seedrandom.xor4096("hello."); // $ExpectType PRNG
seedrandom.xor4096("hello.", { state: true }); // $ExpectType StatefulPRNG<Xor4096>
seedrandom.xorshift7("hello."); // $ExpectType PRNG
seedrandom.xorshift7("hello.", { state: true }); // $ExpectType StatefulPRNG<Xorshift7>
seedrandom.xorwow("hello."); // $ExpectType PRNG
seedrandom.xorwow("hello.", { state: true }); // $ExpectType StatefulPRNG<Xorwow>

alea("hello."); // $ExpectType PRNG
alea("hello.", { state: true }); // $ExpectType StatefulPRNG<Alea>
tychei("hello."); // $ExpectType PRNG
tychei("hello.", { state: true }); // $ExpectType StatefulPRNG<Tychei>
xor128("hello."); // $ExpectType PRNG
xor128("hello.", { state: true }); // $ExpectType StatefulPRNG<Xor128>
xor4096("hello."); // $ExpectType PRNG
xor4096("hello.", { state: true }); // $ExpectType StatefulPRNG<Xor4096>
xorshift7("hello."); // $ExpectType PRNG
xorshift7("hello.", { state: true }); // $ExpectType StatefulPRNG<Xorshift7>
xorwow("hello."); // $ExpectType PRNG
xorwow("hello.", { state: true }); // $ExpectType StatefulPRNG<Xorwow>
