import Color from 'colorjs.io/src/color';
import ColorSpace from 'colorjs.io/src/space';

// @ts-expect-error
new ColorSpace();
// @ts-expect-error
new ColorSpace({});

const space = new ColorSpace({ id: 'abc', name: 'ABC' });

new ColorSpace({ id: 'abc', name: 'ABC', base: 'foo' });
new ColorSpace({ id: 'abc', name: 'ABC', base: space });

new ColorSpace({
    id: 'abc',
    name: 'ABC',
    toBase: () => [3, 2, 1],
    fromBase: () => [1, 2, 3],
    coords: [1, 2, 3],
    white: 'D50',
    cssId: 'abc',
    referred: 'abc',
    formats: { color: { id: '#ffffff' } },
});

ColorSpace.get('abc');
ColorSpace.get(space);
ColorSpace.get('abc', 'def');
ColorSpace.get(space, space);

ColorSpace.register(space);
ColorSpace.register('abc', space);

ColorSpace.registry['abc']; // $ExpectType ColorSpace

ColorSpace.resolveCoord('p3.0', 'p3');
ColorSpace.resolveCoord(['p3', 'r'], 'p3');
