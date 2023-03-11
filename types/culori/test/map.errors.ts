import { Hsl, mapper, Okhsv, Rgb } from 'culori';

const doubler = mapper(v => {
    return v * 2;
});

// @ts-expect-error
const case_3_expect_error: Hsl = doubler({
    mode: 'hsl',
    h: 0,
    s: 0,
    l: 0,
});

// @ts-expect-error
const case_5_expect_error: Hsl | undefined = doubler('hsl(0, 100%, 50%)');

const increaser = mapper(v => v + 10, 'hsl');

// @ts-expect-error
const case_6_expect_error: Okhsv | undefined = increaser(
    'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)',
);

const decreaser = mapper(v => v - 10, undefined);

// @ts-expect-error
const case_9_expect_error: Okhsv | undefined = decreaser(
    'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)',
);

// @ts-expect-error
const case_10_expect_error: Hsl = decreaser({
    mode: 'hsl',
    h: 1,
    s: 1,
    l: 1,
});

const tripler = mapper(v => {
    return v * 3;
}, 'hsl');

// @ts-expect-error
const case_13_expect_error: Hsl = tripler('hsla(240, 100%, 50%, 50%)');

// @ts-expect-error
const case_8_1_expect_error: Rgb = decreaser('color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)');

const oner = mapper(
    (_v, _ch, conv_color, mode) => {
        // @ts-expect-error
        const check_1_expect_error: Hsl = conv_color;

        // @ts-expect-error
        const check_3_expect_error: 'hsl' = mode;
        return 1;
    },
    undefined,
    true,
);
