import Gradient = require("javascript-color-gradient");

const gradient = new Gradient();
gradient.setColorGradient("#3F2CAF", "#8BC2E3");  // $ExpectType Gradient
gradient.setMidpoint(10);  // $ExpectType Gradient
gradient.getColors(); // $ExpectType string[]
gradient.getColor(1);  // $ExpectType string
