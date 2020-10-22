
/// <reference types="node" />

import clc = require('cli-color');
import ansiStrip = require('cli-color/strip');
import setupThrobber = require('cli-color/throbber');
import bare = require('cli-color/bare');

let text: string;
let period: number;
let format: clc.Format;
format = bare.red.redBright;
text = format();

// Test cli-color
text = clc('foo');
text = clc('foo', 42, { toString: () => 'bar' });

text = clc.red("Text in red");
text = clc.red.bgWhite.underline("Underlined red text on white background.");
text = clc.red("red") + " plain " + clc.blue("blue");
text = clc.red("red " + clc.blue("blue") + " red");
text = clc.bold.italic.underline.blink.inverse.strike(text);
text = clc.black.red.green.yellow.blue.magenta.cyan.white(text);
text = clc.bgBlack.bgRed.bgGreen.bgYellow.bgBlack.bgMagenta.bgCyan.bgWhite(text);
text = clc.blackBright.redBright.greenBright.yellowBright.blueBright.magentaBright.cyanBright.whiteBright(text);
text = clc.bgBlackBright.bgRedBright.bgGreenBright.bgYellowBright.bgBlueBright.bgMagentaBright.bgCyanBright.bgWhiteBright(text);


const error: clc.Format = clc.red.bold;
const warn: clc.Format = clc.yellow;
const notice: clc.Format = clc.blue;
text = error("Error!");
text = warn("Warning");
text = notice("Notice");

format = clc.xterm(202).bgXterm(236);
text = format("Orange text on dark gray background");

text = clc.beep;
text = clc.reset;
text = clc.erase.screen;
text = clc.erase.screenLeft;
text = clc.erase.screenRight;
text = clc.erase.line;
text = clc.erase.lineRight;
text = clc.erase.lineLeft;

text = clc.move(-2, -2); // Move cursors two columns and two rows back
text = clc.move.to(0, 0); // Move cursor to first row and first column in terminal window
text = clc.move.up(2);
text = clc.move.down(2);
text = clc.move.right(2);
text = clc.move.left(2);
text = clc.move.lines(2);
text = clc.move.top;
text = clc.move.bottom;
text = clc.move.lineBegin;
text = clc.move.lineEnd;

var width: number = clc.windowSize.width;
var height: number = clc.windowSize.height;
var support: boolean = clc.xtermSupported;

text = clc.bold("foo") + "bar" + clc.red("elo");
text = clc.slice(text, 1, 7); // Same as: clc.bold('oo') + 'bar' + clc.red('e')

text = ansiStrip(text);

text = clc.bold("foo") + "bar" + clc.red("elo");
var len: number = clc.getStrippedLength(text); // 9

text = ".........\n" + ". Hello .\n" + ".........\n";
var style = { ".": clc.yellowBright("X") };
text = clc.art(text, style);

text =
    clc.columns([
        [clc.bold("First Name"), clc.bold("Last Name"), clc.bold("Age")], ["John", "Doe", 34],
        ["Martha", "Smith", 20], ["Jan", "Kowalski", 30]
    ]);

text =
    clc.columns([
        [clc.bold("First Name"), clc.bold("Last Name"), clc.bold("Age")], ["John", "Doe", 34],
        ["Martha", "Smith", 20], { [0]: "Jan", [1]: "Kowalski", [2]: 30, length: 3 }
    ]);

text =
    clc.columns([
        [clc.bold("First Name"), clc.bold("Last Name"), clc.bold("Age")], ["John", "Doe", 34],
        ["Martha", "Smith", 20], ["Jan", "Kowalski", 30]
    ], { sep: '|' });
text =
    clc.columns([
        [clc.bold("First Name"), clc.bold("Last Name"), clc.bold("Age")], ["John", "Doe", 34],
        ["Martha", "Smith", 20], ["Jan", "Kowalski", 30]
    ], { columns: [{ align: 'right' }, null, { align: 'left' }] });

// Test cli-color/throbber
var throbber: setupThrobber.Throbber;
throbber = setupThrobber(process.stdout.write.bind(process.stdout), period);
throbber = setupThrobber(process.stdout.write.bind(process.stdout), period, clc.red);

throbber.start();
throbber.stop();
throbber.restart();

var iterator = new clc.throbber.Iterator();
text = iterator.next();
text = iterator.reset();
