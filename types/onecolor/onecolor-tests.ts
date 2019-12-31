// This contains sample code which tests the typings. This code does not run, but it is type-checked.

import onecolor = require('onecolor');

// Constructor
const color = onecolor('red');

// Serialization methods:
color.hex();
color.css();
color.cssa();
color.toString();
color.toJSON();

// Getters
color.red();
color.green();
color.blue();
color.hue();
color.saturation();
color.value();
color.lightness();
color.alpha();
color.cyan();
color.magenta();
color.yellow();
color.black();

// Setters
color.red(1);
color.green(1);
color.blue(1);
color.hue(1);
color.saturation(1);
color.value(1);
color.lightness(1);
color.alpha(1);
color.cyan(1);
color.magenta(1);
color.yellow(1);
color.black(1);

// Adjusters
color.red(1, true);
color.green(1, true);
color.blue(1, true);
color.hue(1, true);
color.saturation(1, true);
color.value(1, true);
color.lightness(1, true);
color.alpha(1, true);
color.cyan(1, true);
color.magenta(1, true);
color.yellow(1, true);
color.black(1, true);

// Comparison with other color objects, returns true or false (epsilon defaults to 1e-9):
color.equals(color);
