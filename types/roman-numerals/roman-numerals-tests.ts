import { toArabic, toRoman } from "roman-numerals";

const XLII: string = toRoman(42);
const meaningOfLife: number = toArabic(XLII);
toRoman(meaningOfLife);
