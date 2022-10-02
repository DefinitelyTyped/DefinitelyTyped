import Color from 'colorjs.io/src/color';
import clone from 'colorjs.io/src/clone';

// @ts-expect-error
clone();

clone(new Color('red')); // $ExpectType Color
