declare namespace metascraper {
    type Rule = Record<string, any>;

    interface Options {
        html: string;
        rules?: Rule[] | undefined;
        url: string;
    }
}

declare function getData(options: metascraper.Options): Promise<Record<string, string>>;
declare function metascraper(rules: metascraper.Rule[]): typeof getData;

export = metascraper;
