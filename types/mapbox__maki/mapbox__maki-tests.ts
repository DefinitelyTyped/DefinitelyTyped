import { layouts, svgArray } from '@mapbox/maki';

layouts; // $ExpectType string[]
svgArray; // $ExpectType string[]

layouts.forEach(icon => {
    // $ExpectType string
    icon;
});
svgArray.forEach(svg => {
    // $ExpectType string
    svg;
});
