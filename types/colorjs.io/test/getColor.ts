import Color from 'colorjs.io/src/color';
import getColor from 'colorjs.io/src/getColor';

// @ts-expect-error
getColor();

getColor('red');
getColor(new Color('red'));
