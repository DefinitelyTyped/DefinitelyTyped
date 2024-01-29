import MiniMasonry from "minimasonry";

// $ExpectType MiniMasonry
const masonry0 = window.MiniMasonry;

// $ExpectType MiniMasonry
const masonry = new MiniMasonry({ container: "" });

// @ts-expect-error
const masonry1 = new MiniMasonry(); // needs an argument

// @ts-expect-error
const masonry2 = new MiniMasonry(""); // wrong argument type

// @ts-expect-error
const masonry3 = new MiniMasonry({}); // `container` is required

// @ts-expect-error
const masonry4 = new MiniMasonry({ baseWidth: 255 }); // `container` is required
