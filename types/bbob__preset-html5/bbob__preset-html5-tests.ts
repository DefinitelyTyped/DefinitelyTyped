import html from "@bbob/html";
import preset from "@bbob/preset-html5";

// $ExpectType (input: string) => string
const parse = (input: string) => html(input, preset());
