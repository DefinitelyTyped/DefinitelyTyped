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
