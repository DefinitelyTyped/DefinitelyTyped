// Type definitions for postcss-plugins 1.13
// Project: https://github.com/himynameisdave/postcss-plugins#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace postcssPlugins {
    interface Plugin {
        name: string;
        url: string;
        description: string;
        tags: string[];
        author: string;
        stars: number;
    }
}

declare const postcssPlugins: postcssPlugins.Plugin[];

export = postcssPlugins;
