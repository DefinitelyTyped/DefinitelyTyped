// Type definitions for autolinker v0.24.0
// Project: https://github.com/gregjacobs/Autolinker.js
// Definitions by: Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace __Autolinker {
  interface ConfigOptions {
    className?: string;
    email?: boolean;
    hashtag?: boolean | string;
    newWindow?: boolean;
    phone?: boolean;
    replaceFn?: (autolinker: Autolinker, match: any) => string;
    stripPrefix?: boolean;
    truncate?: number | { length?: number; location?: string; };
    twitter?: boolean;
    urls?: boolean | { schemeMatches: boolean; wwwMatches: boolean; tldMatches: boolean; }
  }
  
  interface Autolinker {
    getTagBuilder(): any;
    /**
     * Automatically links URLs, Email addresses, Phone numbers, Twitter handles, and Hashtags found in the given chunk of HTML. Does not link URLs found within HTML tags.
     */
    link(textOrHtml: string): string;
    /**
     * Parses the input textOrHtml looking for URLs, email addresses, phone numbers, username handles, and hashtags (depending on the configuration of the Autolinker instance), and returns an array of Autolinker.match.Match objects describing those matches.
     */
    parse(textOrHtml: string): any[];
  }
  
  interface Static {
    new(cfg?: ConfigOptions): Autolinker;
    /**
     * Automatically links URLs, Email addresses, Phone Numbers, Twitter handles, and Hashtags found in the given chunk of HTML. Does not link URLs found within HTML tags.
     */
    link(textOrHtml: string, options?: ConfigOptions): string
  }
}

declare var Autolinker: __Autolinker.Static;

declare module "autolinker" {
  export = Autolinker;
}
