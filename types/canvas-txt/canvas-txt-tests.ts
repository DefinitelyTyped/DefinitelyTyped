import canvasTxt = require('canvas-txt');
import { createCanvas } from 'canvas';

// Create canvas and context to draw upon
const canvas = createCanvas(600, 600);
const ctx = canvas.getContext('2d');

// TESTS
canvasTxt.drawText(ctx, 'Hello world', 50, 50, 500, 500);

// `debug` property
canvasTxt.debug = true;
canvasTxt.debug = false;

// `align` property
canvasTxt.align = 'left';
canvasTxt.align = 'center';
canvasTxt.align = 'right';

// `vAlign` property
canvasTxt.vAlign = 'top';
canvasTxt.vAlign = 'middle';
canvasTxt.vAlign = 'bottom';

// `fontSize` property
canvasTxt.fontSize = 100;
canvasTxt.fontSize = 14;

// `font` property
canvasTxt.font = 'Arial';

// `fontStyle` property
canvasTxt.fontStyle = 'italic';
canvasTxt.fontStyle = '';

// `fontVariant` property
canvasTxt.fontVariant = 'small-caps';
canvasTxt.fontVariant = '';

// `fontWeight` property
canvasTxt.fontWeight = 'bold';
canvasTxt.fontWeight = 100;
canvasTxt.fontWeight = '';

// `lineHeight` property
canvasTxt.lineHeight = 40;
canvasTxt.lineHeight = null;

// `justify` property
canvasTxt.justify = true;
canvasTxt.justify = false;
