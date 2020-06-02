import * as CSSOM from 'cssom';

let styleSheet: CSSOM.CSSStyleSheet;

styleSheet = CSSOM.parse(`
@import url("./foo.css");

*,
::before,
::after,
::marker {
    box-sizing: border-box;
}
`);

styleSheet.parentStyleSheet; // $ExpectType StyleSheet | null
styleSheet.cssRules; // $ExpectType CSSRule[]
