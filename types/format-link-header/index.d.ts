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
