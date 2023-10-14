import { blend } from "culori";

// @ts-expect-error
blend([]);

// @ts-expect-error
blend([12312]);

// @ts-expect-error
blend(["white", "rgba(0, 0, 0, 0.5)"], "darke"); // Argument of type '"darke"' is not assignable to parameter of type 'BlendTypes | BlendingFunction | undefined'.

// $ExpectType Rgb
blend([
    { mode: "rgb" as const, r: 1, g: 0, b: 0, alpha: 0.5 },
    { mode: "rgb" as const, r: 0, g: 0, b: 1, alpha: 0.5 },
]);

// $ExpectType Rgb
blend(["white", "rgba(0, 0, 0, 0.5)"]);

// $ExpectType Rgb
blend(["white", "rgba(0, 0, 0, 0.5)"], "darken");

// $ExpectType Rgb
blend(["white", "rgba(0, 0, 0, 0.5)"], b => b * 2);

// $ExpectType Rgb
blend(["white", "rgba(0, 0, 0, 0.5)"], (b, s) => b + s);

// $ExpectType Rgb
blend(["white", "rgba(0, 0, 0, 0.5)"], "darken");

// $ExpectType Jab
blend(["white", "rgba(0, 0, 0, 0.5)"], "darken", "jab");
