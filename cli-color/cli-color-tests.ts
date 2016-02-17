/// <reference path="cli-color.d.ts" />
/// <reference path="../node/node.d.ts" />

import clc = require('cli-color');
import ansiTrim = require('cli-color/trim');
import setupThrobber = require('cli-color/throbber');

var text: string;
var color: number;
var x: number;
var y: number;
var n: number;
var period: number;

// Test cli-color
text = clc('foo');
text = clc('foo', 42, { toString: () => 'bar' });

text = clc.bold.italic.underline.blink.inverse.strike(text);
text = clc.black.red.green.yellow.blue.magenta.cyan.white(text);
text = clc.bgBlack.bgRed.bgGreen.bgYellow.bgBlack.bgMagenta.bgCyan.bgWhite(text);
text = clc.blackBright.redBright.greenBright.yellowBright.blueBright.magentaBright.cyanBright.whiteBright(text);
text = clc.bgBlackBright.bgRedBright.bgGreenBright.bgYellowBright.bgBlueBright.bgMagentaBright.bgCyanBright.bgWhiteBright(text);
text = clc.xterm(color).bgXterm(color)(text);

text = clc.bold.red.bgGreen.yellowBright.bgBlueBright.xterm(color)(text, text, text);

text = clc.move(x, y);
text = clc.moveTo(x, y);
text = clc.bol();
text = clc.bol(n);
text = clc.bol(n, true);
text = clc.up(n);
text = clc.down(n);
text = clc.left(n);
text = clc.right(n);
text = clc.beep;
text = clc.reset;

var width: number = clc.width;
var height: number = clc.height;
var support: boolean = clc.xtermSupported;

// Test cli-color/trim
text = ansiTrim(clc.red(text));

// Test cli-color/throbber
var throbber: setupThrobber.Throbber;

throbber = setupThrobber(process.stdout.write.bind(process.stdout), period);
throbber = setupThrobber(process.stdout.write.bind(process.stdout), period, clc.red);

throbber.start();
throbber.stop();
throbber.restart();
