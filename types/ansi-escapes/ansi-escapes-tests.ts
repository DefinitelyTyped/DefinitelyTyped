import * as ansi from "ansi-escapes";

console.log(ansi.cursorUp(2) + ansi.cursorLeft === "\u001B[2A\u001B[1000D");
