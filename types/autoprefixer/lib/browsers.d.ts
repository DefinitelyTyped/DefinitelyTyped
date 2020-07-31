import browserslist = require('browserslist');

type Queries = string | ReadonlyArray<string>;

interface Browsers {
    parse(queries: Queries): string[];
    prefix(browser: string): string;
    isSelected(browser: string): boolean;
}

declare class BrowsersImpl implements Browsers {
    constructor(data: { [k: string]: any }, options?: any, browserslistOpts?: browserslist.Options);

    isSelected(browser: string): boolean;

    parse(queries: string | ReadonlyArray<string>): string[];

    prefix(browser: string): string;

    prefixes(): string[];

    withPrefix(value: string): boolean;
}

export = BrowsersImpl;
