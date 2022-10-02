import Color from 'colorjs.io/src/color';
import { lighten, darken } from 'colorjs.io/src/variations';

// @ts-expect-error
lighten();

lighten('red'); // $ExpectType Color
lighten(new Color('red')); // $ExpectType Color
lighten('red', 25); // $ExpectType Color

// @ts-expect-error
darken();

darken('red'); // $ExpectType Color
darken(new Color('red')); // $ExpectType Color
darken('red', 25); // $ExpectType Color
