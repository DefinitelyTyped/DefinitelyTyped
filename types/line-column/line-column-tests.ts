import lineColumn = require("line-column");

const testString = [
  "ABCDEFG\n",         // line:0, index:0
  "HIJKLMNOPQRSTU\n",  // line:1, index:8
  "VWXYZ\n",           // line:2, index:23
  "日本語の文字\n",    // line:3, index:29
  "English words",      // line:4, index:36
].join("");            // length:49

lineColumn(testString).fromIndex(3);   // { line: 1, col: 4 }
lineColumn(testString).fromIndex(33);  // { line: 4, col: 5 }
lineColumn(testString).toIndex(1, 4);  // 3
lineColumn(testString).toIndex(4, 5);  // 33

// Shorthand of .fromIndex (compatible with find-line-column)
lineColumn(testString, 33);            // { line:4, col: 5 }

// Object or Array is also acceptable
lineColumn(testString).toIndex({ line: 4, col: 5 });     // 33
lineColumn(testString).toIndex({ line: 4, column: 5 });  // 33
lineColumn(testString).toIndex([4, 5]);                  // 33

// You can cache it for the same string. It is so efficient. (See benchmark)
const finder = lineColumn(testString);

finder.fromIndex(33);     // { line: 4, column: 5 }
finder.toIndex(4, 5);     // 33

// For 0-origin line and column numbers
const oneOrigin = lineColumn(testString, { origin: 0 });

oneOrigin.fromIndex(33);  // { line: 3, column: 4 }
oneOrigin.toIndex(3, 4);  // 33
