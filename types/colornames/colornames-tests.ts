import colorNames = require("colornames");

// $ExpectType Color
const color = colorNames("red");

// $ExpectType string
color.value;
// $ExpectType boolean | undefined
color.css;
// $ExpectType boolean | undefined
color.vga;
// $ExpectType string
color.name;

// $ExpectType Color
colorNames.get("blue");
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
