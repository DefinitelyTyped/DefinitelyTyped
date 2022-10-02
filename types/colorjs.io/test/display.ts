import Color from 'colorjs.io/src/color';
import display from 'colorjs.io/src/display';
import sRGB from 'colorjs.io/src/spaces/srgb';

// @ts-expect-error
display();

display('red'); // $ExpectType Display
display(new Color('red')); // $ExpectType Display
// $ExpectType Display
display({
    space: sRGB,
    coords: [1, 2, 3],
    alpha: 1,
});
display('red', {});

display('red', { space: 'srgb' });
display('red', { space: sRGB });
display('red', { random: 'foo' });
