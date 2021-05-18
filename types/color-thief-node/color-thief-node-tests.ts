import { getColorFromURL, getPaletteFromURL } from "color-thief-node";

const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/1024px-Firefox_Logo%2C_2017.svg.png";

getColorFromURL(imageUrl).then(color => {
    // $ExpectType Palette
    color;
});

getPaletteFromURL(imageUrl).then(color => {
    // $ExpectType Palette
    color[0];
});
