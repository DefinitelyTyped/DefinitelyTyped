import { Color, converter } from "culori";

converter()("#f0f0f0"); // $ExpectType Rgb | undefined

converter("lab")("#f0f0f0"); // $ExpectType Lab | undefined

declare const c: Color;
converter("oklab")(c); // $ExpectType Oklab
