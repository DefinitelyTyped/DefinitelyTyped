import getSize = require("get-size");

// @ts-expect-error
getSize();

getSize(document.querySelector(".selector")!);
getSize(".selector");

// Returns check

const result = getSize(".selector");

result.width;
result.height;

result.innerWidth;
result.innerHeight;

result.outerWidth;
result.outerHeight;

result.paddingLeft;
result.paddingTop;
result.paddingRight;
result.paddingBottom;

result.marginLeft;
result.marginTop;
result.marginRight;
result.marginBottom;

result.borderLeftWidth;
result.borderTopWidth;
result.borderRightWidth;
result.borderBottomWidth;

result.isBorderBox;
