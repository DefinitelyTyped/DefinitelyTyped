import { luminance, rgb, hex, score, Score } from 'wcag-contrast';

luminance(1, 1); // $ExpectType number

rgb([0, 0, 0], [255, 255, 255]); // $ExpectType number

hex('#000', '#fff'); // $ExpectType number

score(10); // $ExpectType Score
