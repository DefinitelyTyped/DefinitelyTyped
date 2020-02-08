import Shevy from 'shevyjs';
import { Options } from 'shevyjs/types';
import { headings } from 'shevyjs/constants';
import * as utils from 'shevyjs/utils';

const options: Options = {
    baseFontSize: '16px',
    baseLineHeight: 1,
    baseFontScale: 'majorSecond',
    addMarginBottom: true,
    proximity: true,
    proximityFactor: 1,
};

const shevy = new Shevy(options);

shevy.baseFontSize; // $ExpectType string
shevy.baseFontUnit; // $ExpectType string
shevy.baseLineHeight; // $ExpectType number
shevy.baseFontScale; // $ExpectType number[]
shevy.addMarginBottom; // $ExpectType boolean
shevy.proximity; // $ExpectType boolean
shevy.proximityFactor; // $ExpectType number

headings.forEach(heading => {
    shevy[heading].fontSize; // $ExpectType string
    shevy[heading].lineHeight; // $ExpectType number
    shevy[heading].marginBottom; // $ExpectType string
});

shevy.body.fontSize; // $ExpectType string
shevy.body.lineHeight; // $ExpectType number

shevy.content.fontSize; // $ExpectType string
shevy.content.lineHeight; // $ExpectType number
shevy.content.marginBottom; // $ExpectType string

shevy.lineHeightSpacing(1); // $ExpectType string

shevy.baseSpacing(1); // $ExpectType string

utils.calcHeadingFontSize(shevy, 1); // $ExpectType string
utils.calcHeadingLineHeight(shevy, 1); // $ExpectType number
utils.calcHeadingMarginBottom(shevy, 1); // $ExpectType string | undefined
utils.calcHeadingMarginBottom(shevy, 1, true); // $ExpectType string | undefined
utils.getFontScale([1, 2, 3]); // $ExpectType number[]
utils.getFontScale('majorSecond'); // $ExpectType number[]
utils.getFontUnit('16px'); // $ExpectType string
utils.getFontValue('16px'); // $ExpectType number
utils.trimArrayToMaxOf6([1, 2, 3, 4, 5, 6, 7, 8]); // $ExpectType number[]
