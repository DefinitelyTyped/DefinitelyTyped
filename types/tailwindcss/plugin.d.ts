// Opaque type for the return of the
// plugin function.
export interface TailwindPlugin {
    _: 'OPAQUE_TAILWIND_PLUGIN';
}

// https://tailwindcss.com/docs/plugins
declare function plugin(
    plugin: (helpers: {
        addUtilities: any;
        addComponents: any;
        addBase: any;
        addVariant: any;
        e: any;
        prefix: any;
        theme: any;
        variants: any;
        config: any;
        postcss: any;
    }) => void,
    config?: any,
): TailwindPlugin;

export default plugin;
