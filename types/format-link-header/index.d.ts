// Type definitions for format-link-header 2.1
// Project: https://github.com/jonathansamines/format-link-header
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace formatLinkHeader {
    interface Link {
        url: string;
        rel: string;
        [queryParam: string]: string;
    }

    interface Links {
        [rel: string]: Link;
    }
}

declare function formatLinkHeader(linkObject: formatLinkHeader.Links): string;
export = formatLinkHeader;
