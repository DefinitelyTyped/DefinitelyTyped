import colors = require("colors");
import { zalgo } from "colors/safe";

let str: string;

str = zalgo("");

colors.enabled = true;

str = colors.black.underline('test');
str = colors.rainbow.black.blue.gray('test');
str = colors.random.reset.bgWhite.dim('test');
str = colors.random.reset.bgWhite.strip('test');
str = 'test'.black.underline;
str = 'test'.rainbow.black.blue.gray;
str = 'test'.random.reset.bgWhite.dim;
str = 'test'.random.reset.bgWhite.dim.stripColors;

colors.enabled = false;

str = colors.black.underline('test');
