declare namespace parseLinkHeader {
    interface Link {
        url: string;
        rel: string;
        [queryParam: string]: string | undefined;
    }

    interface Links {
        [rel: string]: Link | undefined;
    }
}

declare function parseLinkHeader(linkHeader: string | null | undefined): parseLinkHeader.Links | null;
export = parseLinkHeader;
