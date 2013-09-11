/*
	highlight.js definition by Niklas Mollenhauer
	Last Update: 10.09.2013
	Source Code: https://github.com/isagalaev/highlight.js
	Project Page: http://softwaremaniacs.org/soft/highlight/en/
*/

/// <reference path="highlightjs.d.ts" />

import hljs = require("highlight.js");

var code = "using System;\npublic class Test\n{\npublic static void Main()\n{\n// your code goes here\n}\n}";
var lang = "cs";

hljs.tabReplace = "    "; // 4 spaces

var hl = hljs.highlight(lang, code).value;
hl = hljs.highlightAuto(code).value;