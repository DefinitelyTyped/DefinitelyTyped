import type { TailwindConfig } from 'tailwindcss/tailwind-config';

const tailwindConfigWithCorePluginsArray: TailwindConfig = {
    theme: {},
    corePlugins: [],
};

const tailwindConfigWithCorePluginsObject: TailwindConfig = {
    theme: {},
    corePlugins: {
        float: false,
    },
};

const tailwindConfigWithInvalidCorePluginsObject: TailwindConfig = {
    theme: {},
    corePlugins: {
        float: false,
        // @ts-expect-error not a real corePlugin value
        notRealCorePlugin: false,
    },
};
