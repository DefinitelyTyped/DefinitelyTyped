import { average } from "culori";

// @ts-expect-error
average();

// @ts-expect-error
average([]);

// $ExpectType Rgb
average(["#ff0000", "#0000ff"]);

// $ExpectType Lch
average(["#ff0000", "#0000ff"], "lch");

// $ExpectType Rgb
average(["#ff0000", "#0000ff"], undefined, _ => 1);

// $ExpectType Rgb
average(["#ff0000", "#0000ff"], undefined, { r: _ => 1 });

// @ts-expect-error
average(["#ff0000", "#0000ff"], undefined, { r: 1 }); // '{r: number}' is not correct

// $ExpectType Lch
average(["#ff0000", "#0000ff"], "lch", _ => 1);

// $ExpectType Oklab
average(["#ff0000", "#0000ff"], "oklab", { b: _ => 1 });

// $ExpectType Hsl
average(["#ff0000", "#0000ff"], "hsl", { h: () => 1 });
