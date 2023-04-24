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
// $ExpectType string
inspect(unknown);
inspect(unknown, {});
inspect(unknown, baseOptions);
inspect(unknown, {
    ...baseOptions,
    colors: exclusiveOptions.colors,
});
inspect(unknown, {
    ...baseOptions,
    stylize: exclusiveOptions.stylize,
});
// @ts-expect-error
inspect(unknown, {
    ...baseOptions,
    ...exclusiveOptions,
});
