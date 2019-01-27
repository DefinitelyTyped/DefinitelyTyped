import diff from "color-diff";

const color = { R: 255, G: 1, B: 30 };
// red, green, blue
const palette = [
  { R: 255, G: 0, B: 0 },
  { R: 0, G: 255, B: 0 },
  { R: 0, G: 0, B: 255 }
];

diff.closest(color, palette); // {R: 255, G: 0, B: 0 }, red

const color1 = { R: 255, G: 255, B: 255 };
// black, white
const palette1 = [{ R: 0, G: 0, B: 0 }, { R: 255, G: 255, B: 255 }];

diff.furthest(color1, palette1); // {R: 0, G: 0, B: 0 }, black
