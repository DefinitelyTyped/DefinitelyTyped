/// <reference types="jquery"/>

import {jui, UtilColor, UtilBase} from "./index";

jui.ready(["util.color"], function(color: UtilColor) {
    console.log(color.rgb("#ff0000"));
});

let _ : UtilBase = jui.include("util.base");

let str: string = "10";
console.log(_.typeCheck("string", str));

let i: number = 10;
console.log(_.typeCheck("string", i));
