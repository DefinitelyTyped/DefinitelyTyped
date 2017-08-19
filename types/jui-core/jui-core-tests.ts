import {jui, UtilColor, UtilBase} from "jui-core";

jui.ready(["util.color"], (color: UtilColor) => {
    console.log(color.rgb("#ff0000"));
});

const _: UtilBase = jui.include("util.base");

const str: string = "10";
console.log(_.typeCheck("string", str));

const i: number = 10;
console.log(_.typeCheck("string", i));
