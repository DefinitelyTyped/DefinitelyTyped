import { parse, draw, trim, Font, Bitmap } from "bdfjs";

// @ts-expect-error
parse();
// @ts-expect-error
parse(123);
parse('abc'); // $ExpectType Font
parse('abc', { allprops: true, onlymeta: true }); // $ExpectType Font
const font: Font = parse(Buffer.from([1, 2, 3]));

// @ts-expect-error
draw();
// @ts-expect-error
draw(123);
// @ts-expect-error
draw(font);
// @ts-expect-error
draw(font, 123);
draw(font, 'abc', { kerningBias: 123 }); // $ExpectType Bitmap | undefined
const bitmap: Bitmap = draw(font, 'abc')!;

// @ts-expect-error
trim();
// @ts-expect-error
trim(123);
trim(bitmap); // $ExpectType Bitmap
