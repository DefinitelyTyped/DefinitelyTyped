import inspect = require('browser-util-inspect');

type CustomInspect = inspect.CustomInspect;
type Effect = inspect.Effect;
type Effects = inspect.Effects;
type Option = inspect.Options;
type OutputType = inspect.OutputType;
type Stylizer = inspect.Stylizer;
const { colors, styles } = inspect;

declare module 'browser-util-inspect' {
    interface Effects {
        extended: Effect;
    }
}

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
// @ts-expect-error
inspect();
inspect(unknown); // $ExpectType string
inspect(unknown, baseOptions.showHidden); // $ExpectType string
inspect(unknown, baseOptions.showHidden, baseOptions.depth); // $ExpectType string
inspect(unknown, baseOptions.showHidden, baseOptions.depth, exclusiveOptions.colors); // $ExpectType string
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

// @ts-expect-error
delete inspect.colors.black;
inspect.colors.blue = [0, 0];
// @ts-expect-error
inspect.colors.bold = [0, 0, 0];
inspect.colors.cyan[0] = 0;
inspect.colors.cyan[1] = 0;
// @ts-expect-error
inspect.colors.cyan[2] = 0;
inspect.colors.extended = [0, 0];
// @ts-expect-error
delete inspect.colors;
inspect.colors = { ...inspect.colors };
// @ts-expect-error
inspect.colors = {};
inspect.colors = {
    ...inspect.colors,
    // @ts-expect-error
    unextended: [0, 0],
};
inspect.colors = {
    ...inspect.colors,
    // @ts-expect-error
    extended: [0, 0, 0],
};

delete inspect.styles.boolean;
inspect.styles.date = 'extended';
// @ts-expect-error
inspect.styles.name = null;
// @ts-expect-error
inspect.styles.null = '';
inspect.styles.number = undefined;
// @ts-expect-error
delete inspect.styles;
inspect.styles = { ...inspect.styles };
inspect.styles = {};
inspect.styles = { regexp: undefined };
inspect.styles = {
    // @ts-expect-error
    unstyled: 'white',
};
inspect.styles = {
    // @ts-expect-error
    special: null,
};
