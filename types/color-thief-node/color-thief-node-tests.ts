import { getColorFromURL, getPaletteFromURL } from "color-thief-node";

const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/1024px-Firefox_Logo%2C_2017.svg.png";

getColorFromURL(imageUrl).then(color => {
    color.r; // $ExpectType number
    color.g; // $ExpectType number
    color.b; // $ExpectType number
});

getPaletteFromURL(imageUrl); // $ExpectType Promise<Color>
