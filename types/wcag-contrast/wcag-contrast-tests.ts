import { luminance, rgb, hex, score } from 'wcag-contrast';

luminance(1, 1); // = 1

rgb([0, 0, 0], [255, 255, 255]); // = 21

hex('#000', '#fff'); // = 21

score(10); // = 'AAA'
