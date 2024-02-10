import pragma =require('pragma');

// $ExpectType object
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

// $ExpectType object
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
`,
  { parseContent: (source) => source + "" }
);

// $ExpectType object
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
`, {});

// @ts-expect-error
pragma();

// @ts-expect-error
pragma(0);


// @ts-expect-error
pragma();
