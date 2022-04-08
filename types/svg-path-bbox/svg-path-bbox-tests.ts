import { svgPathBbox } from 'svg-path-bbox';

svgPathBbox('M5 10l2 3z'); // $ExpectType BoundingBox
svgPathBbox('M5 10l2 3z')[0]; // $ExpectType number
svgPathBbox('M5 10l2 3z')[1]; // $ExpectType number
svgPathBbox('M5 10l2 3z')[2]; // $ExpectType number
svgPathBbox('M5 10l2 3z')[3]; // $ExpectType number
// @ts-expect-error
svgPathBbox('M5 10l2 3z')[4];
