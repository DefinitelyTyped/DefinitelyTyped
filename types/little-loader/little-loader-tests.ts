import load from "little-loader";

load("http://google.com/test.js", () => console.log("loaded!"), ""); // $ExpectType void
