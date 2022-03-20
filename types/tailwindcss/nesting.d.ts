// https://tailwindcss.com/docs/using-with-preprocessors#nesting
declare function tailwindcssNesting(): {
    postcssPlugin: 'tailwindcss/nesting';
    plugins: string[];
};

declare namespace tailwindcssNesting {
    let postcss: true;
}

export = tailwindcssNesting;
