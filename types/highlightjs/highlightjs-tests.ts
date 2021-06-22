import hljs = require('highlightjs');

const code = "using System;\npublic class Test\n{\npublic static void Main()\n{\n// your code goes here\n}\n}";
const lang = "cs";

hljs.configure({ tabReplace: "    " }); // 4 spaces

let hl = hljs.highlight(lang, code).value;
hl = hljs.highlightAuto(code).value;
