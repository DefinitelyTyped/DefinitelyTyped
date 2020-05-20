import toStyle from "css-to-style";

toStyle(); // $ExpectError

toStyle({}); // $ExpectError

toStyle(1); // $ExpectError

toStyle(''); // $ExpectType CSSStyleDeclaration
