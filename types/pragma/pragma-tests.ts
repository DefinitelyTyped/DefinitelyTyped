import pragma = require("pragma");

// $ExpectType Record<string, any>
pragma(`
function foo() {}
 
/* @babel {
  presets: ['es2015']
} */
 
function bar() {}
 
/* @server {
  port: 3000
}
*/
`);

// $ExpectType Record<string, any>
pragma(
    `
function foo() {}
 
/* @babel {
  presets: ['es2015']
} */
 
function bar() {}
 
/* @server {
  port: 3000
}
*/
`,
    { parseContent: (source) => source + "" },
);

// $ExpectType Record<string, any>
pragma(
    `
function foo() {}
 
/* @babel {
  presets: ['es2015']
} */
 
function bar() {}
 
/* @server {
  port: 3000
}
*/
`,
    {},
);

// @ts-expect-error
pragma();

// @ts-expect-error
pragma(0);

// @ts-expect-error
pragma();
