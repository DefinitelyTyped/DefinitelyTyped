/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.color.d.ts"/>

var color = $.Color("rgba(255, 255, 255, 0.4)");
var color1 = $.Color({red: 255, green: 255, blue: 255});
var color2 = $.Color({hue: 359, saturation: 0.5, lightness: 0.5});

// getters
var red = color.red();
var green = color.green();
var blue = color.blue();
var alpha = color.alpha();
var hue = color.hue();
var saturation = color.saturation();
var lightness = color.lightness();

// setters
var newRed = color.red(20);
var newGreen = color.green(20);
var newBlue = color.blue(20);
var newAlpha = color.alpha(0.5);
var newHue = color.hue(20);
var newSaturation = color.saturation(0.5);
var newLightness = color.lightness(0.5);

// rgba methods
var rgba = color.rgba();
var newRgba1 = color.rgba(255, 255, 255, 0.5);
var newRgba2 = color.rgba({red: 255, green: 255, blue: 255});
var newRgba3 = color.rgba(rgba);

// hsla methods
var hsla = color.hsla();
var newHsla1 = color.hsla(359, 0.5, 0.5, 0.5);
var newHsla2 = color.hsla({hue: 359, saturation: 0.5, lightness: 0.5});
var newHsla3 = color.hsla(hsla);

// string methods
var rgbaString = color.toRgbaString();
var hslaString = color.toHslaString();
var hexString = color.toHexString();

// other colors
var transitionedColor = color.transition(newRed, 0.5);
var blendedColor = color.blend(newRed);
var isEqual = color.is(newRed);
