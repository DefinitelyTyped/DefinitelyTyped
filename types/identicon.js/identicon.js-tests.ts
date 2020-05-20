import Identicon, { Svg } from "identicon.js";

// create an identicon with only a hash and a size
new Identicon("d3b07384d113edec49eaa6238ad5ff00", 420).toString();

// create an identicon with a hash and other options and get the svg
const svg = new Identicon("d3b07384d113edec49eaa6238ad5ff00", {
    background: [255, 255, 255, 255],
    foreground: [0, 0, 0, 0],
    margin: 0.05,
    size: 64,
    format: "svg",
}).image() as Svg;
svg.getDump();
// or get the base64 encoded svg
svg.getBase64();
