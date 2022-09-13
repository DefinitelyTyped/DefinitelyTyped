import outlineStroke = require("svg-outline-stroke");

const strokedSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <line x1="32" y1="16" x2="32" y2="48" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2"/>
  <line x1="48" y1="32" x2="16" y2="32" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2"/>
</svg>`;

outlineStroke(strokedSVG).then(outlined => {
    console.log(outlined);
});
outlineStroke(strokedSVG, {}).then(outlined => {
    console.log(outlined);
});
outlineStroke(Buffer.from(strokedSVG), { color: "#bada55" }).then(outlined => {
    console.log(outlined);
});
