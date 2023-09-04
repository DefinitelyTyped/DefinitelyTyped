import { mapper } from "culori";

const doubler = mapper(v => {
    return v * 2;
});

// $ExpectType Rgb
doubler({ mode: "rgb", r: 0, b: 0, g: 0 });

// $ExpectType Rgb
doubler({ mode: "hsl", h: 0, s: 0, l: 0 });

// $ExpectType Rgb | undefined
doubler("hsl(0, 100%, 50%)");

const increaser = mapper(v => v + 10, "hsl");

// $ExpectType Hsl | undefined
increaser("color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)");

// $ExpectType Hsl
increaser({ mode: "hsl", h: 0, s: 0, l: 0 });

const decreaser = mapper(v => v - 10, undefined);

// $ExpectType Rgb | undefined
decreaser("color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)");

const tripler = mapper(v => v * 3, "hsl");

// $ExpectType Hsl | undefined
tripler("#3690");

// $ExpectType Hsl
tripler({ h: 240, s: 1, l: 0.5, mode: "hsl", alpha: 0.5 });

mapper(
    (
        _v,
        _ch,
        _conv_color, // $ExpectType Rgb
        _mode, // $ExpectType "rgb"
    ) => {
        return 1;
    },
    undefined,
    true,
);
