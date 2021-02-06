// Type definitions for metascraper 5.14
// Project: https://metascraper.js.org
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace metascraper {
    type Rule = Record<string, any>;

    interface Options {
        html: string;
        rules?: Rule[];
        url: string;
    }
}

declare function getData(options: metascraper.Options): Promise<Record<string, string>>;
declare function metascraper(rules: metascraper.Rule[]): typeof getData;

export = metascraper;
