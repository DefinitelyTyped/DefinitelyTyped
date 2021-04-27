import { Options } from 'short-css-vars';
import ShortCssVars = require('short-css-vars');

const input = `:root {
    --custom-var-one: red;
    --custom-var-two_EXTRA_1234: 1.2rem;
  }`;

const ctors = [
    new ShortCssVars(),
    new ShortCssVars({}),
    new ShortCssVars({
        ignore: () => false,
    }),
];

const optionsTests: Options[] = [
    { ignore: /^.+-one/ },
    { ignore: name => name.length <= 4 },
    { formatter: name => name.split('').reverse().join('') },
];
const [options] = optionsTests;

const p = new ShortCssVars(options);
p.replaceCss(input);
