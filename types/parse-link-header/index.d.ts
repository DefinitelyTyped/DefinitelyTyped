// Type definitions for parse-link-header 2.0
// Project: https://github.com/thlorenz/parse-link-header
// Definitions by: Nick Zelei <https://github.com/nickzelei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace parseLinkHeader {
    interface Link {
        url: string;
        rel: string;
        [queryParam: string]: string;
    }

    interface Links {
        [rel: string]: Link;
    }
}

declare function parseLinkHeader(linkHeader: string | null | undefined): parseLinkHeader.Links | null;
export = parseLinkHeader;
