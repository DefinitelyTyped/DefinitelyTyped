import parse = require("parse-markdown-links");

// $ExpectType string[]
parse("[a link](https://woohoo.com)\n![image](image.png)");
