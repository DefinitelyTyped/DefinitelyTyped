import { setImage, setOptions } from "tinycon";
import Tinycon = require("tinycon");

setOptions({
    abbreviate: false,
    background: "#549A2F",
    color: "#ffffff",
    fallback: true,
    font: "10px arial",
    height: 9,
    width: 7,
}).setOptions({
    abbreviate: false,
    background: "#549A2F",
    color: "#ffffff",
    fallback: "force",
    font: "10px arial",
    height: 9,
    width: 7,
});

setImage("http://example.com/favicon.ico").reset();

Tinycon.setBubble(7).setBubble(null);
Tinycon.reset();
