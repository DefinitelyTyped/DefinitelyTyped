import jQueryFactory = require('jquery');

const jq = jQueryFactory(window);
// ExpectType will report 'jq' as 'JQueryStatic<HTMLElement> & JQuery<HTMLElement>' even though the compiler seems to know that 'jq' is 'JQueryStatic<HTMLElement>'
// // $ExpectType JQueryStatic<HTMLElement>
// jq;
// jq === jQuery();
jq === jQuery;
