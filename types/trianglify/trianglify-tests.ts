import trianglify from "trianglify";

const pattern = trianglify({
    width: 1920,
    height: 1080,
    cellSize: 75,
    variance: 0.75,
    seed: "onlystrings",
    xColors: ["#2c2541", "#2c2541"],
    yColors: ["#6441a4", "#000000"],
    colorSpace: "lab",
    strokeWidth: 1.51,
});

const svgVirtual = document.createElement("svg") as unknown as SVGElement;
const svg = pattern.toSVG(svgVirtual, { includeNamespace: true });
const result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + svg.outerHTML;
console.log(result);
