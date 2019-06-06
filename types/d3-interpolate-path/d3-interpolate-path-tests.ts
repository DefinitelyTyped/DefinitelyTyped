import { interpolatePath } from 'd3-interpolate-path';

// $ExpectType (t: number) => string
const interpolate = interpolatePath('M0,0 L10,10', 'M10,10 L20,20 L30,30');

// $ExpectType string
interpolate(0.6);

// $ExpectType string
interpolatePath(
    'M0,0 L10,10',
    'M10,10 L20,20 L30,30',
    (a, b) => a.x === b.x && b.y === 30 && a.type === 'L'
)(0.3);
