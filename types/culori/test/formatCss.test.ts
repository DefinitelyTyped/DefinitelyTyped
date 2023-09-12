import { Color, formatCss } from "culori/fn";

declare const color: unknown;

formatCss(color as undefined); // $ExpectType undefined
formatCss(color as string); // $ExpectType string | undefined
formatCss(color as Color); // $ExpectType string
