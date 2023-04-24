import inspect = require('browser-util-inspect');

type Options = inspect.Options;
type StyleType = inspect.StyleType;

declare const unknown: unknown;
const baseOptions = {
    showHidden: false,
    depth: 2,
    customInspect: true,
};
const exclusiveOptions = {
    colors: false,
    stylize: () => '',
};
inspect(unknown); // $ExpectType string
inspect(unknown, {}); // $ExpectType string
inspect(unknown, baseOptions); // $ExpectType string
// $ExpectType string
inspect(unknown, {
    ...baseOptions,
    colors: exclusiveOptions.colors,
});
// $ExpectType string
inspect(unknown, {
    ...baseOptions,
    stylize: exclusiveOptions.stylize,
});
// @ts-expect-error
inspect(unknown, {
    ...baseOptions,
    ...exclusiveOptions,
});
