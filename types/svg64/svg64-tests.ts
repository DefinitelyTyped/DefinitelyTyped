import svg64 from 'svg64';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"></svg>`;
svg64(svgString);

declare const svgElement: SVGElement;
svg64(svgElement);
