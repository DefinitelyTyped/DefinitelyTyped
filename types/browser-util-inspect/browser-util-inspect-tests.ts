import inspect = require("browser-util-inspect");

// accessibility
type CustomInspect = inspect.CustomInspect;
type Effect = inspect.Effect;
type Effects = inspect.Effects;
type Options = inspect.Options;
type OutputType = inspect.OutputType;
type Stylizer = inspect.Stylizer;
const { colors, styles } = inspect;

// augmentation
declare module "browser-util-inspect" {
    interface Effects {
        extended: Effect;
    }
}

// `inspect.CustomInspect`
const customInspectable0 = {
    inspect(depth: number, options: Options): string {
        return String(this) + depth + options;
    },
};
const customInspect0: CustomInspect = customInspectable0.inspect;
const customInspectable1 = {
    inspect(): unknown {
        return {};
    },
};
const customInspect1: CustomInspect = customInspectable1.inspect;

// `inspect.Stylizer`
function stylizer(str: string, type: OutputType): string {
    return str + type;
}
const stylizer0: Stylizer = stylizer;

// `inspect`
declare const unknown: unknown;
const baseOptions = {
    showHidden: false,
    depth: 2,
    customInspect: true,
};
const exclusiveOptions = {
    colors: false,
    stylize: () => "",
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

// `inspect.colors`
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

// `inspect.styles`
delete inspect.styles.boolean;
inspect.styles.date = "extended";
// @ts-expect-error
inspect.styles.name = null;
// @ts-expect-error
inspect.styles.null = "";
inspect.styles.number = undefined;
// @ts-expect-error
delete inspect.styles;
inspect.styles = { ...inspect.styles };
inspect.styles = {};
inspect.styles = { regexp: undefined };
inspect.styles = {
    // @ts-expect-error
    unstyled: "white",
};
inspect.styles = {
    // @ts-expect-error
    special: null,
};
