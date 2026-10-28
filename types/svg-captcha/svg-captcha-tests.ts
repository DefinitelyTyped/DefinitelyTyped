import * as svgCaptcha from "svg-captcha";

const captcha = svgCaptcha.create({ size: 4, noise: 2 });
const text: string = captcha.text;
const data: string = captcha.data;

const mathCaptcha = svgCaptcha.createMathExpr({ mathMin: 1, mathMax: 9 });
const mathText: string = mathCaptcha.text;
