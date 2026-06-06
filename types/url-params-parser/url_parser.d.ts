export function UrlParser(urlString: string, namedUrl?: string): UrlParserResult;

export interface UrlParserResult {
    host: string;
    hostname: string;
    namedParams: {
        [key: string]: string;
    };
    namedParamsKeys: string[];
    namedParamsValues: string[];
    pathNames: string[];
    port: string;
    pathname: string;
    protocol: string;
    search: string;
    queryParams: {
        [key: string]: string;
    };
    queryParamsKeys: string[];
    queryParamsValues: string[];
}
