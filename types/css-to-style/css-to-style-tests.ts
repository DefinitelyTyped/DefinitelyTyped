import toStyle from "css-to-style";

// @ts-expect-error
toStyle();

// @ts-expect-error
toStyle({});

// @ts-expect-error
toStyle(1);

toStyle(''); // $ExpectType CSSStyleDeclaration
