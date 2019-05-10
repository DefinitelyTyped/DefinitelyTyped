import colorNames = require("colornames");

// $ExpectType string | undefined
const color = colorNames("red");
// $ExpectType string | undefined
color;
// $ExpectType string | undefined
const undefinedColor = colorNames("donkey");
// $ExpectType string | undefined
undefinedColor;
// $ExpectType Color
const blue = colorNames.get("blue");
// $ExpectType boolean | undefined
blue.css;
// $ExpectType boolean | undefined
blue.vga;
// $ExpectType string
blue.name;
// $ExpectType Color[]
colorNames.get.all();
// $ExpectType Color[]
colorNames.get.css();
// $ExpectType Color
colorNames.get.css("orange");
// $ExpectType Color[]
colorNames.get.vga();
// $ExpectType Color
colorNames.get.vga("violet");

// $ExpectType Color[]
colorNames.all();
