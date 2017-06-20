import * as jq from 'jquery';

const $window = jq(window);
// ExpectType will report 'jq' as 'JQueryStatic<HTMLElement> & JQuery<HTMLElement>' even though the compiler seems to know that 'jq' is 'JQuery<HTMLElement>'
// // $ExpectType JQuery<HTMLElement>
// $window;
// $window === jq;
$window === jq();
